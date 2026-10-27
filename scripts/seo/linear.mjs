#!/usr/bin/env node
/**
 * Linear helper for the SEO loop. Talks to the Blou Linear workspace through
 * Composio (account alias SEO_LINEAR_ACCOUNT, default "blou-seo") using
 * Linear's GraphQL API, so it does not depend on per-tool argument shapes.
 *
 * Board config (team, project, state and label ids) is cached in
 * seo/linear.json after `setup`.
 *
 *   npm run seo:linear -- whoami
 *   npm run seo:linear -- setup                     create/find team SEO, project, labels; write seo/linear.json
 *   npm run seo:linear -- open                      open issues -> seo/data/linear-open.json (for de-duplication)
 *   npm run seo:linear -- next                      highest-priority Todo issue, as JSON
 *   npm run seo:linear -- create issue.json         { title, body, labels: [..], priority, state? }
 *   npm run seo:linear -- move SEO-12 "In Review"
 *   npm run seo:linear -- comment SEO-12 "QA: PASS 35/40"
 *   npm run seo:linear -- label SEO-12 qa-failed [--remove]
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ACCOUNTS, DATA_DIR, SEO_DIR, composio, parseArgs, readJson, writeJson } from "./lib.mjs";

const CONFIG_PATH = join(SEO_DIR, "linear.json");
const TEAM = { name: "SEO", key: "SEO" };
const PROJECT = { name: "Blou SEO loop", description: "Automated SEO: research → brief → write → QA → publish → audit. Managed by the agent; see seo/README.md." };
const STATES = ["Backlog", "Todo", "In Progress", "In Review", "Done", "Canceled"];
const LABELS = {
  "new-content": "#4EA7FC",
  refresh: "#26B5CE",
  "ctr-snippet": "#F2C94C",
  "page-2-push": "#F2994A",
  "internal-links": "#BB87FC",
  technical: "#EB5757",
  conversion: "#4CB782",
  comparison: "#5E6AD2",
  tool: "#0F7488",
  "source:research": "#95A2B3",
  "source:audit": "#95A2B3",
  "source:human": "#95A2B3",
  "qa-failed": "#EB5757",
};

function gql(query, variables = {}) {
  const data = composio("LINEAR_RUN_QUERY_OR_MUTATION", { query_or_mutation: query, variables }, ACCOUNTS.linear);
  const payload = data?.data ?? data;
  if (payload?.errors?.length) throw new Error(payload.errors.map((e) => e.message).join("; "));
  return payload;
}

const config = () => {
  if (!existsSync(CONFIG_PATH)) throw new Error("seo/linear.json missing. Run `npm run seo:linear -- setup` first.");
  return readJson(CONFIG_PATH);
};

async function setup() {
  const { teams } = gql(`query { teams { nodes { id key name } } }`);
  // Prefer an explicit key, then a team named SEO, then the workspace's only team.
  const wantKey = process.env.SEO_LINEAR_TEAM_KEY;
  let team =
    (wantKey && teams.nodes.find((t) => t.key === wantKey)) ||
    teams.nodes.find((t) => t.key === TEAM.key || t.name === TEAM.name) ||
    (teams.nodes.length === 1 ? teams.nodes[0] : undefined);
  if (!team) {
    team = gql(`mutation($input: TeamCreateInput!) { teamCreate(input: $input) { team { id key name } } }`, { input: TEAM }).teamCreate.team;
    console.log(`created team ${team.key}`);
  }

  // Workflow states: rename-free. Create the ones the loop needs if missing.
  const stateType = { Backlog: "backlog", Todo: "unstarted", "In Progress": "started", "In Review": "started", Done: "completed", Canceled: "canceled" };
  let states = gql(`query($id: String!) { team(id: $id) { states { nodes { id name type position } } } }`, { id: team.id }).team.states.nodes;
  for (const [i, name] of STATES.entries()) {
    if (states.some((s) => s.name === name)) continue;
    gql(`mutation($input: WorkflowStateCreateInput!) { workflowStateCreate(input: $input) { success } }`, {
      // Slot new states right after their predecessor without colliding with existing positions.
      input: { teamId: team.id, name, type: stateType[name], color: "#95A2B3", position: (states.find((s) => s.name === STATES[i - 1])?.position ?? i) + 0.5 },
    });
    console.log(`created state ${name}`);
  }
  states = gql(`query($id: String!) { team(id: $id) { states { nodes { id name type } } } }`, { id: team.id }).team.states.nodes;

  const { projects } = gql(`query { projects(first: 100) { nodes { id name url } } }`);
  let project = projects.nodes.find((p) => p.name === PROJECT.name);
  if (!project) {
    project = gql(`mutation($input: ProjectCreateInput!) { projectCreate(input: $input) { project { id name url } } }`, {
      input: { ...PROJECT, teamIds: [team.id] },
    }).projectCreate.project;
    console.log(`created project ${project.name}`);
  }

  const existing = gql(`query($id: String!) { team(id: $id) { labels(first: 250) { nodes { id name } } } }`, { id: team.id }).team.labels.nodes;
  const labels = Object.fromEntries(existing.map((l) => [l.name, l.id]));
  for (const [name, color] of Object.entries(LABELS)) {
    if (labels[name]) continue;
    labels[name] = gql(`mutation($input: IssueLabelCreateInput!) { issueLabelCreate(input: $input) { issueLabel { id } } }`, {
      input: { name, color, teamId: team.id },
    }).issueLabelCreate.issueLabel.id;
    console.log(`created label ${name}`);
  }

  const cfg = {
    teamId: team.id,
    teamKey: team.key,
    projectId: project.id,
    projectUrl: project.url,
    states: Object.fromEntries(states.map((s) => [s.name, s.id])),
    labels: Object.fromEntries(Object.keys(LABELS).map((n) => [n, labels[n]])),
  };
  writeJson(CONFIG_PATH, cfg);
  console.log(`wrote seo/linear.json · project ${project.url}`);
}

const ISSUE_FIELDS = `id identifier title url priority description state { name } labels { nodes { name } } updatedAt`;

function openIssues() {
  const cfg = config();
  const out = [];
  let after = null;
  do {
    const res = gql(
      `query($projectId: ID!, $after: String) {
        issues(first: 100, after: $after, filter: { project: { id: { eq: $projectId } }, state: { type: { nin: ["completed", "canceled"] } } }) {
          pageInfo { hasNextPage endCursor }
          nodes { ${ISSUE_FIELDS} }
        }
      }`,
      { projectId: cfg.projectId, after },
    );
    out.push(...res.issues.nodes);
    after = res.issues.pageInfo.hasNextPage ? res.issues.pageInfo.endCursor : null;
  } while (after);
  return out.map((i) => ({
    id: i.identifier,
    title: i.title,
    url: i.url,
    state: i.state.name,
    priority: i.priority,
    labels: i.labels.nodes.map((l) => l.name),
    // Every loop issue body starts with "URL: ..." and "Cluster: ..." lines.
    pageUrl: (i.description?.match(/^URL:\s*(\S+)/m) ?? [])[1] ?? null,
    cluster: (i.description?.match(/^Cluster:\s*(.+)$/m) ?? [])[1]?.trim() ?? null,
    updatedAt: i.updatedAt,
  }));
}

function issueByKey(key) {
  const res = gql(`query($id: String!) { issue(id: $id) { ${ISSUE_FIELDS} } }`, { id: key });
  return res.issue;
}

for (const event of ["uncaughtException", "unhandledRejection"]) {
  process.on(event, (err) => {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  });
}

const cmd = process.argv[2];
const args = parseArgs(process.argv.slice(3));

switch (cmd) {
  case "whoami": {
    const res = gql(`query { viewer { name email } organization { name urlKey } }`);
    console.log(`${res.viewer.name} <${res.viewer.email}> · workspace ${res.organization.name} (${res.organization.urlKey})`);
    break;
  }
  case "setup":
    await setup();
    break;
  case "open": {
    const issues = openIssues();
    writeJson(join(DATA_DIR, "linear-open.json"), { fetchedAt: new Date().toISOString(), issues });
    console.log(`${issues.length} open issues → seo/data/linear-open.json`);
    for (const i of issues) console.log(`${i.id.padEnd(8)} ${i.state.padEnd(12)} P${i.priority} ${i.title}`);
    break;
  }
  case "next": {
    const todo = openIssues()
      .filter((i) => i.state === "Todo")
      .sort((a, b) => (a.priority || 5) - (b.priority || 5) || a.updatedAt.localeCompare(b.updatedAt));
    if (!todo.length) {
      console.log("null");
      break;
    }
    const full = issueByKey(todo[0].id);
    console.log(JSON.stringify({ ...todo[0], description: full.description }, null, 2));
    break;
  }
  case "create": {
    // Accepts one issue object or an array of them.
    const cfg = config();
    const parsed = JSON.parse(readFileSync(args._[0], "utf8"));
    const open = openIssues();
    for (const spec of Array.isArray(parsed) ? parsed : [parsed]) {
      const url = (spec.body.match(/^URL:\s*(\S+)/m) ?? [])[1];
      const cluster = (spec.body.match(/^Cluster:\s*(.+)$/m) ?? [])[1]?.trim();
      const dupe = open.find((i) => (url && i.pageUrl === url && i.cluster === cluster) || i.title === spec.title);
      if (dupe) {
        console.log(`skip (already tracked as ${dupe.id}): ${spec.title}`);
        continue;
      }
      const res = gql(
        `mutation($input: IssueCreateInput!) { issueCreate(input: $input) { issue { identifier url } } }`,
        {
          input: {
            teamId: cfg.teamId,
            projectId: cfg.projectId,
            title: spec.title,
            description: spec.body,
            priority: spec.priority ?? 3,
            stateId: cfg.states[spec.state ?? "Todo"],
            labelIds: (spec.labels ?? []).map((l) => cfg.labels[l]).filter(Boolean),
          },
        },
      );
      console.log(`${res.issueCreate.issue.identifier} ${res.issueCreate.issue.url}  ${spec.title}`);
    }
    break;
  }
  case "move": {
    const cfg = config();
    const [key, state] = args._;
    if (!cfg.states[state]) throw new Error(`Unknown state "${state}". One of: ${Object.keys(cfg.states).join(", ")}`);
    const issue = issueByKey(key);
    gql(`mutation($id: String!, $stateId: String!) { issueUpdate(id: $id, input: { stateId: $stateId }) { success } }`, { id: issue.id, stateId: cfg.states[state] });
    console.log(`${key} → ${state}`);
    break;
  }
  case "comment": {
    const [key, ...rest] = args._;
    const issue = issueByKey(key);
    gql(`mutation($input: CommentCreateInput!) { commentCreate(input: $input) { success } }`, { input: { issueId: issue.id, body: rest.join(" ") } });
    console.log(`commented on ${key}`);
    break;
  }
  case "label": {
    const cfg = config();
    const [key, name] = args._;
    const issue = issueByKey(key);
    const labelId = cfg.labels[name];
    if (!labelId) throw new Error(`Unknown label "${name}"`);
    const mutation = args.remove ? "issueRemoveLabel" : "issueAddLabel";
    gql(`mutation($id: String!, $labelId: String!) { ${mutation}(id: $id, labelId: $labelId) { success } }`, { id: issue.id, labelId });
    console.log(`${args.remove ? "removed" : "added"} ${name} on ${key}`);
    break;
  }
  default:
    console.error("Commands: whoami | setup | open | next | create <file.json> | move <KEY> <State> | comment <KEY> <text> | label <KEY> <label> [--remove]");
    process.exit(1);
}
