# Blou SEO loop

An agent-run SEO system for tryblou.com: it finds keywords, writes articles, QA-checks them, publishes them, audits how they do, and rewrites what underperforms. Linear is the shared to-do list between the steps. The plan behind it is in [ACTION_PLAN.md](ACTION_PLAN.md).

```
          weekly (Mon)                 daily                         after writer          after PASS
  ┌────────────────────────┐   ┌──────────────────────┐   ┌──────────────────────┐   ┌──────────────────┐
  │ seo-opportunity-research│──▶│ seo-content-brief     │──▶│ seo-content-qa        │──▶│ seo-publish       │
  │  GSC + Keyword Planner  │   │ seo-blog-writer       │◀──│  FAIL → back to writer│   │  push main→Vercel │
  │  + Amplitude + inventory│   │  (picks next Todo)    │   └──────────────────────┘   │  IndexNow, Done   │
  └────────────────────────┘   └──────────────────────┘                               └──────────────────┘
          ▲                                                                                    │
          │                 weekly (Thu) seo-performance-audit → refresh/CTR/page-2 issues     │
          └────────────────────────────────────────────────────────────────────────────────────┘
```

## What lives where

| Path | What it is |
|---|---|
| `seo/blou-profile.md` | Product facts, banned claims, voice, page anatomy, Linear conventions. Every skill reads it. **Edit this to teach the agent about Blou** (step 8 of the plan). |
| `.claude/skills/seo-*/SKILL.md` | The 7 skills: research, audit, brief, writer, QA, inventory, publish. Each starts with a "Blou setup" section, then the generic workflow. |
| `scripts/seo/*.mjs` | Data and task scripts (below). No extra npm dependencies. |
| `seo/data/gsc/` | GSC snapshots, one per run, `latest.json` = newest. |
| `seo/data/amplitude/` | Per-page views and App Store clicks. |
| `seo/data/inventory.json` | Every indexable page with metrics, issues and hand-set strategy fields. |
| `seo/data/linear-open.json` | Open Linear issues, for de-duplication. |
| `seo/linear.json` | Linear team/project/state/label ids (written by `seo:linear setup`). |
| `seo/backlog/initial.json` | The first batch of issues, from the 2026-10-24 GSC data. |
| `seo/briefs/`, `seo/qa/`, `seo/reports/` | Briefs, QA verdicts and research/audit reports the agent writes. |

## Scripts

```bash
npm run seo:gsc                      # GSC 28d vs prior 28d → seo/data/gsc/latest.json
npm run seo:keywords -- "quit zyn"   # Keyword Planner ideas (US). --location 2826 for UK, --json, --out <file>
npm run seo:conversions              # Amplitude views + App Store clicks per page
npm run build && npm run seo:inventory
npm run seo:qa -- /zyn-withdrawal --keyword "zyn withdrawal"
npm run seo:linear -- open | next | create <file> | move SEO-3 "In Review" | comment SEO-3 "..." | label SEO-3 qa-failed
```

Connections (all through the Composio CLI, so scheduled agents need `composio` on PATH and logged in):

| Service | How | Account alias |
|---|---|---|
| Google Search Console | Composio `google_search_console` | `kreatli` (any of the 3 connected accounts can read `sc-domain:tryblou.com`) |
| Linear (Blou workspace) | Composio `linear` | `blou-seo` |
| Amplitude | Composio `amplitude` | `blou` |
| Keyword Planner | Google Ads REST API, keys in `.env.local` | n/a |
| SERP data | browser for now; DataForSEO optional | n/a |
| Screenshots | browser for now; ScreenshotOne optional | n/a |

Override aliases with `SEO_GSC_ACCOUNT`, `SEO_LINEAR_ACCOUNT`, `SEO_AMPLITUDE_ACCOUNT`.

## Linear issue template

The scripts match issues by the first two lines, so keep them exactly like this:

```markdown
URL: /guides/diarrhea
Cluster: diarrhea after quitting smoking
Type: ctr-snippet
Source: GSC 2026-09-27..2026-10-24

## Evidence
Numbers with the date window.

## Recommended action
What to do and what not to do.

## Next skill
seo-content-brief

## Done when
How we know it worked.
```

Status flow: **Backlog** (idea, not yet worth doing) → **Todo** (ready for a brief/writer) → **In Progress** (writer on it) → **In Review** (QA, or waiting for the deploy) → **Done** (live) / **Canceled**.

## Loop schedule

Create these as scheduled tasks (Claude Code desktop: Scheduled tasks, or `/schedule` for cloud routines). Each prompt is self-contained. Run them in this repo's folder.

**1. Monday 07:00 · Research**
> Use the seo-opportunity-research skill for tryblou.com. Refresh the data (seo:gsc, seo:conversions, build + seo:inventory, seo:linear open), find the best opportunities, and create up to 8 Linear issues with the template in seo/README.md. Write the report to seo/reports/research-<date>.md, commit it and push to main (as ProFun2705, see seo-publish).

**2. Weekdays 09:00 · Write one article**
> Run `npm run seo:linear -- next`. If it returns null, stop. Otherwise take that issue through seo-content-brief (if it has no brief), seo-blog-writer, and seo-content-qa, looping writer↔QA until PASS (max 3 rounds). On PASS, use seo-publish to push it to main. Do one issue per run.

**3. Thursday 07:00 · Audit**
> Use the seo-performance-audit skill for tryblou.com with 28-day windows. Comment on already-tracked issues instead of duplicating them, create up to 6 new improvement issues, write seo/reports/audit-<date>.md, commit it and push to main.

**4. First Monday of the month · Conversions review**
> Run `npm run seo:conversions -- --days 90`. List the 10 pages with the highest App Store click rate and the 10 with the most views but no clicks. Add what you learn to the "Topics to prioritize" section of seo/blou-profile.md, commit it and push to main, and list the change in the Linear project as a status update so the owner sees it.

QA-passed articles go straight to `main` (no PRs). Every push is pushed as the `ProFun2705` GitHub account; the steps are in `.claude/skills/seo-publish/SKILL.md`. Read new pages on the live site and use step 8 (the profile) to correct the agent.

## First run

1. Connect Linear and Amplitude in Composio (links from the setup session).
2. `npm run seo:linear -- whoami` should name the Blou workspace.
3. `npm run seo:linear -- setup` creates the SEO team (if missing), statuses, project and labels.
4. `npm run seo:linear -- create seo/backlog/initial.json` fills the board.
5. Add the Google Ads keys to `.env.local`, then `npm run seo:keywords -- "quit smoking app"`.
6. Schedule the four tasks above. The machine running them needs both `George-Kreatli` and `ProFun2705` logged in to `gh`.
