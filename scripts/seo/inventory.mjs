#!/usr/bin/env node
/**
 * Builds seo/data/inventory.json: one record per indexable page, the shared
 * memory for every SEO skill (research, audit, brief, writer, QA, publish).
 *
 * Reads the prerendered HTML in .next/server/app (run `next build` first, or
 * pass --build), merges metrics from seo/data/gsc/latest.json and
 * seo/data/amplitude/latest.json when present, and preserves the hand-edited
 * strategy fields of existing records (see STRATEGY_FIELDS).
 *
 * Usage:
 *   npm run seo:inventory
 *   npm run seo:inventory -- --build
 */
import { execSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { DATA_DIR, ROOT, parseArgs, readJson, writeJson } from "./lib.mjs";

const args = parseArgs();
const APP_DIR = join(ROOT, ".next", "server", "app");
const OUT = join(DATA_DIR, "inventory.json");
const SKIP = [/^_/, /^api\//, /^go\//, /opengraph-image/, /twitter-image/, /\.rsc$/, /^indexnow/];

/** Fields people or agents set by hand. Never overwritten by a rebuild. */
const STRATEGY_FIELDS = ["primaryKeyword", "secondaryKeywords", "intent", "funnelStage", "priority", "linearIssue", "notes", "suppressUntil"];

if (args.build) execSync("npx next build", { stdio: "inherit" });
if (!existsSync(APP_DIR)) {
  console.error("inventory: .next/server/app not found. Run `npm run build` or pass --build.");
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const routeFor = (file) => {
  const rel = relative(APP_DIR, file).split(sep).join("/").replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}`;
};

const meta = (html, attr, name) =>
  (html.match(new RegExp(`<meta ${attr}="${name}" content="([^"]*)"`)) ?? [])[1] ?? null;
const decode = (s) =>
  s
    ?.replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">") ?? null;
const text = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " "),
  ).trim();

/** Where the page's source lives, so writers/auditors can open it directly. */
function sourceFor(route) {
  const direct = join("src", "app", ...route.split("/").filter(Boolean), "page.tsx");
  if (existsSync(join(ROOT, direct))) return direct;
  if (route.startsWith("/guides/")) return "src/lib/blouGuides.ts";
  if (route.startsWith("/calculators/")) return "src/lib/countryData.ts";
  if (route === "/") return "src/app/page.tsx";
  return null;
}

function sectionFor(route) {
  if (route === "/") return "home";
  if (route.startsWith("/guides/")) return "guide";
  if (route.startsWith("/calculators") || route.startsWith("/tools")) return "tool";
  if (/^\/blou-vs-|^\/best-/.test(route)) return "comparison";
  if (route.startsWith("/quit-smoking-help")) return "state";
  if (["/privacy", "/terms"].includes(route)) return "legal";
  if (/app/.test(route)) return "landing";
  if (["/about", "/guides"].includes(route)) return "hub";
  return "article";
}

const pages = walk(APP_DIR)
  .filter((f) => f.endsWith(".html"))
  .map((file) => ({ file, route: routeFor(file) }))
  .filter(({ route }) => !SKIP.some((re) => re.test(route.slice(1))))
  .map(({ file, route }) => {
    const html = readFileSync(file, "utf8");
    const main = (html.match(/<main[\s\S]*<\/main>/) ?? [html])[0];
    const links = [...main.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1].replace(/\/+$/, "") || "/");
    const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((m) => {
      try {
        const v = JSON.parse(m[1]);
        const nodes = Array.isArray(v) ? v : v["@graph"] ?? [v];
        return nodes.map((n) => n["@type"]).flat();
      } catch {
        return [];
      }
    });
    return {
      route,
      html,
      record: {
        url: route,
        section: sectionFor(route),
        source: sourceFor(route),
        status: /noindex/.test(meta(html, "name", "robots") ?? "") ? "noindex" : "live",
        title: decode((html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? null),
        description: decode(meta(html, "name", "description")),
        h1: decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) ?? [])[1]?.replace(/<[^>]+>/g, "") ?? null),
        keywordsMeta: decode(meta(html, "name", "keywords"))?.split(/,\s*/) ?? [],
        published: meta(html, "property", "article:published_time"),
        modified: meta(html, "property", "article:modified_time"),
        schemaTypes: [...new Set(jsonLd)].filter(Boolean),
        words: text(main).split(" ").length,
        faqCount: (main.match(/data-faq=/g) ?? []).length,
        appStoreCtas: (main.match(/data-event="app_store_click"/g) ?? []).length,
        internalLinksOut: [...new Set(links)].filter((l) => l !== route),
      },
    };
  });

// Inbound internal links.
const inbound = new Map();
for (const { record } of pages) {
  for (const target of record.internalLinksOut) inbound.set(target, (inbound.get(target) ?? 0) + 1);
}

const gsc = readJson(join(DATA_DIR, "gsc", "latest.json"));
const gscPages = new Map((gsc?.pages ?? []).map((p) => [p.page, p]));
const gscQueries = new Map();
for (const r of gsc?.queryPages ?? []) {
  const list = gscQueries.get(r.page) ?? [];
  list.push({ query: r.query, impressions: r.impressions, clicks: r.clicks, position: r.position });
  gscQueries.set(r.page, list);
}
const amp = readJson(join(DATA_DIR, "amplitude", "latest.json"));
const ampPages = new Map((amp?.pages ?? []).map((p) => [p.page, p]));

const previous = new Map((readJson(OUT)?.pages ?? []).map((p) => [p.url, p]));

const records = pages
  .map(({ record }) => {
    const prev = previous.get(record.url) ?? {};
    const g = gscPages.get(record.url);
    const strategy = Object.fromEntries(STRATEGY_FIELDS.map((k) => [k, prev[k] ?? null]));
    return {
      ...record,
      linkedFrom: inbound.get(record.url) ?? 0,
      ...strategy,
      primaryKeyword: strategy.primaryKeyword ?? record.keywordsMeta[0] ?? null,
      gsc: g
        ? {
            window: gsc.current,
            clicks: g.clicks,
            impressions: g.impressions,
            ctr: g.ctr,
            position: g.position,
            prev: g.prev,
            topQueries: (gscQueries.get(record.url) ?? []).sort((a, b) => b.impressions - a.impressions).slice(0, 10),
          }
        : null,
      amplitude: ampPages.get(record.url) ?? null,
      lastChecked: new Date().toISOString().slice(0, 10),
    };
  })
  .sort((a, b) => (b.gsc?.impressions ?? 0) - (a.gsc?.impressions ?? 0) || a.url.localeCompare(b.url));

// Flag issues the research/audit skills should consider.
for (const r of records) {
  const issues = [];
  if (r.status === "live" && r.url !== "/" && r.linkedFrom === 0) issues.push("orphan");
  if (r.title && r.title.length > 60) issues.push("title>60");
  if (!r.description) issues.push("no-meta-description");
  if (!r.schemaTypes.length) issues.push("no-schema");
  if (["article", "guide", "comparison"].includes(r.section) && r.appStoreCtas === 0) issues.push("no-app-cta");
  if (["article", "guide"].includes(r.section) && r.faqCount === 0) issues.push("no-faq");
  if (["article", "guide"].includes(r.section) && r.words < 700) issues.push("thin");
  if (r.gsc && r.gsc.position <= 12 && r.gsc.impressions >= 100 && r.gsc.ctr < 0.015) issues.push("low-ctr");
  if (r.gsc && r.gsc.position > 10 && r.gsc.position <= 30) issues.push("page-2");
  r.issues = issues;
}

writeJson(OUT, {
  generatedAt: new Date().toISOString(),
  gscWindow: gsc?.current ?? null,
  amplitudeWindow: amp?.window ?? null,
  counts: records.reduce((acc, r) => ({ ...acc, [r.section]: (acc[r.section] ?? 0) + 1 }), {}),
  pages: records,
});

const issueCounts = records.flatMap((r) => r.issues).reduce((acc, i) => ({ ...acc, [i]: (acc[i] ?? 0) + 1 }), {});
console.log(`inventory: ${records.length} pages → seo/data/inventory.json`);
console.log(`sections: ${JSON.stringify(readJson(OUT).counts)}`);
console.log(`issues: ${JSON.stringify(issueCounts)}`);
