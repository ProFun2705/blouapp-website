---
name: seo-performance-audit
description: 'Weekly Blou organic performance audit. Compares GSC windows and Amplitude conversions, diagnoses drops, low CTR and page-2 rankings, and files Linear issues to improve existing pages. Use for the Thursday audit run or "what changed in search".'
---

<!-- Generic workflow adapted from RomeoSEO free SEO skills v2 (https://romeoseo.com/skills, file 02-seo-performance-audit.skill.md). The Blou setup section is specific to this repo. -->

## Blou setup (read this before the generic instructions below)

Runs **weekly (Thursday)**. Output is Linear issues that improve existing pages (labels `refresh`, `ctr-snippet`, `page-2-push`, `internal-links`, `technical`, plus `source:audit`), and a report in `seo/reports/audit-<YYYY-MM-DD>.md`.

Inputs for Blou:

- Search data: `npm run seo:gsc` (28-day vs previous 28-day). For a 7-day pulse use `npm run seo:gsc -- --days 7`. Older snapshots are in `seo/data/gsc/<date>.json`; compare against the last 4 for decay.
- Analytics: `npm run seo:conversions` (Amplitude: page views, `app_store_click`, `tool_input` by page).
- Inventory: `npm run build && npm run seo:inventory` (includes an `issues` array per page: orphan, title>60, no-app-cta, no-faq, thin, low-ctr, page-2).
- Known changes: `git log --since="5 weeks ago" --name-only -- src/` (a page edited in the last 3 weeks is "expected volatility", do not alert on it), plus past reports in `seo/reports/`.
- Active tasks: `npm run seo:linear -- open`.
- Indexing: `composio execute GOOGLE_SEARCH_CONSOLE_INSPECT_URL --account kreatli -d '{"site_url":"sc-domain:tryblou.com","inspection_url":"https://tryblou.com/<path>"}'` for pages whose impressions dropped to near zero.

Blou thresholds (young site; the generic defaults below are for larger sites):

- Low CTR: position ≤ 12, ≥ 100 impressions/28d, CTR < 1.5%.
- Page-2: position 11-30 and ≥ 50 impressions/28d on the page, or ≥ 5 on a query.
- Big mover: ≥ 5 positions with ≥ 5 impressions.
- Sharp traffic move: ≥ 25% change with ≥ 50 views baseline in Amplitude.

Rules:

- Today most impressions come from `/guides/*` symptom pages ranking 7-10 with near-zero CTR. Snippet work there is allowed (they barely get clicks, so risk is low), but say so in the issue.
- At most **6 issues per run**. Anything else goes in the report as "watching".
- If an open issue already covers the URL + cluster, add a comment with the new numbers (`npm run seo:linear -- comment SEO-12 "..."`) instead of a new issue.
- Commit the report.

---

# SEO Performance Audit Product Skill

Use when the product needs to explain what rose, dropped, stalled, or became newly actionable across organic search and analytics.

This skill is not a rank-tracker dump. It is a decision filter: identify meaningful movement, suppress noise, diagnose likely cause, and recommend the next action.

## Required Inputs

- Customer domain and canonical URL rules.
- Date range and comparison range.
- Target countries/languages and excluded locales.
- Search performance data: query, page, clicks, impressions, CTR, position, country, device, date.
- Site inventory with page type, target keyword, status, content owner, last updated date.
- Known changes: migrations, redirects, launches, page updates, title/meta edits, outages, campaigns, seasonality.
- Existing tasks and prior audit reports.

## Optional Inputs

- Analytics by URL: sessions, pageviews, users, organic segment, conversions, engagement.
- Rank tracker or SERP snapshots.
- Crawl/indexing data.
- Revenue/lead-quality data by landing page.
- Server logs, AI-bot fetches, internal search, or support demand.

## Provider Adapters

Normalize data from Google Search Console, GA4, PostHog, Plausible, Amplitude, Fathom, server logs, DataForSEO, Ahrefs, Semrush, SearchAPI, crawlers, or CSV uploads.

The skill consumes compact normalized rows. Never pass raw large API payloads into the reasoning step.

## Audit Principles

- Lead with hidden movement, not the same known top terms every day.
- Search movement must be interpreted with impressions and CTR, not position alone.
- Analytics and GSC can disagree; that disagreement is often the finding.
- Do not call normal fluctuation a problem.
- Do not recommend risky title/meta edits casually, especially on pages already ranking.
- Ignore configured irrelevant locales, test pages, and suppressed clusters.
- Do not duplicate active tasks.

## Default Movement Rules

Tune thresholds per customer size, but start with these defaults:

- Page-2 opportunity: average position 11-30 and meaningful impressions or keyword volume >100.
- Low CTR opportunity: >200 impressions, CTR <1%, and page appears relevant.
- Severe low CTR: >1000 impressions, CTR <1%.
- Scaling opportunity: CTR >3% with <100 impressions/week or low distribution.
- Big mover: average position changes by >=5 positions.
- Core/high-volume terms: only alert on >=10 position movement unless explicitly watched.
- Sharp traffic movement: pageviews/sessions change >=25% with enough baseline volume.
- New query discovery: relevant query appears with impressions/rank that did not exist in prior window.
- Decay candidate: clicks or impressions down for 2+ comparable periods while ranking/intent was previously stable.

## Workflow

1. Normalize and filter.
   - Align timezones, date windows, and data freshness. Remember GSC is delayed.
   - Normalize URLs and strip parameters.
   - Group by URL, query, country, device, page type, and content cluster.
   - Exclude configured languages/locales, staging/test URLs, branded terms when requested, and known suppressed clusters.
   - Compact external data before analysis.

2. Load context before judging movement.
   - Pull site inventory and target keyword mapping.
   - Read recent reports or saved findings for the comparison horizon.
   - Read active tasks/issues so repeated opportunities are marked already tracked.
   - Load known launches, redirects, title/meta changes, deployments, and campaigns.

3. Detect search movement.
   - Find rising pages and queries.
   - Find slipping pages and queries.
   - Find page-2 clusters that can be pushed to page 1.
   - Find high-impression/low-click rows.
   - Find high-CTR/low-impression pages worth scaling.
   - Find new queries that reveal language customers use.
   - Find cannibalization candidates where several URLs split one intent.

4. Cross-check analytics.
   - Compare organic search movement to pageviews/sessions/conversions.
   - Flag cases where GSC is up but analytics is flat/down, or analytics is up without GSC support.
   - Use conversions to raise priority for pages that affect signups, demos, trials, purchases, or lead quality.
   - Skip top-known pages if the audit goal is hidden opportunities.

5. Diagnose likely cause.
   - Content decay: old page slipping, competitor content fresher, weak top section.
   - SERP shift: page type changed, forums/videos/tools now dominate, featured snippet changed.
   - Snippet issue: impressions high, CTR low, title/meta or visible promise weak.
   - Intent mismatch: page ranks for query but does not answer the query quickly.
   - Cannibalization: multiple pages target same intent.
   - Internal-link gap: relevant page exists but lacks authority flow from related content.
   - Indexing/technical issue: sudden impressions drop, URL excluded, canonical/redirect/crawl issue suspected.
   - Tracking issue: analytics changed without search data support.
   - Seasonality: predictable demand shift.
   - Expected volatility: recent redirect/consolidation or major page update. Do not over-alert for 2-4 weeks after redirects.

6. Prioritize.
   - High priority:
     - page-2 rank 11-20 with business-fit demand
     - >500 impressions and near-zero clicks
     - conversion page affected
     - sharp sustained drop on important page
     - newly discovered cluster with clear commercial fit
   - Medium priority:
     - rank 21-30 with good fit
     - high CTR low impressions
     - internal-link improvements
     - refreshes that do not require design/CMS dependencies
   - Low priority:
     - minor rank noise
     - low-fit generic terms
     - duplicate findings
     - known suppressed clusters

7. Choose action.
   - Brief for create/refresh/comparison/landing page.
   - Internal-link task.
   - Snippet/title/meta review with risk flag.
   - Technical/indexing investigation.
   - Consolidation plan.
   - Continue watching.
   - Suppress/ignore.

8. De-duplicate.
   - Check existing tasks by URL, keyword cluster, and intent.
   - If matched, mark already tracked with task id or reference.
   - Only create a new recommendation when the action, page, or keyword cluster is materially different.
   - Include a duplicate-check note in every audit.

## Output Format

Return:

- Executive summary: what matters, not a raw data tour.
- Rises: pages/queries with evidence and interpretation.
- Drops: pages/queries with likely cause and risk level.
- Page-2 opportunities.
- CTR opportunities.
- New query discoveries.
- Analytics mismatches.
- Cannibalization or duplicate-intent notes.
- Already-tracked/suppressed items.
- Recommended actions with priority, owner/adapter target, and next skill.
- Data gaps or failed sources.

## Required Evidence Per Finding

Each finding needs:

- URL or proposed URL.
- Query/cluster.
- Current metrics and comparison metrics.
- Why it is meaningful.
- Recommended action.
- Confidence.
- Whether it is new, repeated, or already tracked.

## Failure Conditions

Fail the audit if:

- It includes excluded languages/locales.
- It reports raw API dumps.
- It alerts on minor fluctuations without business context.
- It repeats unchanged findings from recent reports without saying already tracked.
- It skips duplicate checks.
- It recommends risky title/meta changes on a ranking page without warning.
- It ignores analytics/conversion data when available.
