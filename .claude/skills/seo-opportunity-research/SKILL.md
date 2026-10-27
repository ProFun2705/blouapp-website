---
name: seo-opportunity-research
description: 'Weekly Blou keyword and opportunity research. Pulls GSC, Keyword Planner, Amplitude and the site inventory, scores opportunities, and creates Linear issues for new or improved pages. Use for "find SEO opportunities", "what should we write next", or the Monday research run.'
---

<!-- Generic workflow adapted from RomeoSEO free SEO skills v2 (https://romeoseo.com/skills, file 01-seo-opportunity-research.skill.md). The Blou setup section is specific to this repo. -->

## Blou setup (read this before the generic instructions below)

Runs **weekly (Monday)**. Output is Linear issues in the Todo state, each one ready for `seo-content-brief`.

Inputs, already prepared in this repo:

| Skill input | Where it is for Blou |
|---|---|
| Business profile, product facts, prohibited claims, markets, competitors, topics to prioritize/avoid | `seo/blou-profile.md` |
| Site inventory | `seo/data/inventory.json` (`npm run seo:inventory`, needs a build) |
| Search performance (GSC) | `seo/data/gsc/latest.json` (`npm run seo:gsc`) with `opportunities.page2Pages`, `lowCtrPages`, `page2`, `lowCtr`, `bigMovers`, `newQueries`, `cannibalization` |
| Keyword volume, competition, trend | `npm run seo:keywords -- "<seed>" ["<seed>"...] [--location 2826] [--json]` (Google Ads Keyword Planner) |
| SERP inspection | Fetch `https://www.google.com/search?q=<kw>&gl=us&hl=en` or use the built-in browser; if a DataForSEO account is connected in Composio, prefer it. Read the top 5 results. |
| Conversions by page | `seo/data/amplitude/latest.json` (`npm run seo:conversions`) |
| Known active tasks | `npm run seo:linear -- open` → `seo/data/linear-open.json` |

Steps for Blou:

1. Refresh data: `npm run seo:gsc`, `npm run seo:conversions` (skip if Amplitude is not connected yet), `npm run build && npm run seo:inventory`, `npm run seo:linear -- open`.
2. First-party first: work through `opportunities.page2Pages`, `lowCtrPages`, `page2` and `newQueries`. A Blou page at position 8-12 with 300+ impressions and under 1.5% CTR is the best opportunity this site has.
3. New keywords: seed Keyword Planner with the clusters in "Topics to prioritize" plus queries from `newQueries`. Keep 3+ word terms with 50-5,000 US monthly searches. Blou is a young domain, so skip head terms (for example "quit smoking" alone).
4. Weight by conversions: clusters whose pages have the highest `clickRate` in Amplitude get +1 on Business fit.
5. De-duplicate against `seo/data/linear-open.json` (match `pageUrl` + `cluster`) and the inventory (`primaryKeyword`, `keywordsMeta`, `topQueries`). Never propose a new page whose intent an existing URL already covers; propose a refresh of that URL.
6. Create at most **8 issues per run** (max 4 new-content), highest score first, with `npm run seo:linear -- create <file.json>`. Use the issue template in `seo/README.md`. Labels: one type label + `source:research`.
7. Write the run summary (executive summary, suppressed items, do-not-pursue, data gaps) to `seo/reports/research-<YYYY-MM-DD>.md` and commit it.

Health topics: "Risk" goes up by 2 for any opportunity that needs medical claims without an NHS/CDC/NCI source.

---

# SEO Opportunity Research Product Skill

Use when the product needs to decide what SEO work should happen next: create new content, refresh a page, consolidate overlapping pages, improve internal links, adjust snippets, build a landing page, or ignore a tempting but weak keyword.

This is not a generic keyword research skill. It is an evidence-weighted opportunity engine. Keyword volume alone is never enough.

## Required Inputs

- Customer domain and canonical URL rules.
- Target market: countries, languages, regions, excluded locales.
- Business profile: product category, ideal customers, use cases, pricing model, conversion path.
- Product facts and prohibited claims.
- Existing site inventory, crawl, sitemap, CMS export, or uploaded URL list.
- Search performance data when available: query, page, clicks, impressions, CTR, average position, country, device, date.
- Keyword provider data when available: volume, difficulty/competition, trend, SERP URLs, related terms.
- Competitor domains and comparison targets.
- Topics to prioritize, avoid, or suppress.
- Known active tasks so the product does not repeat yesterday's work.

## Optional Inputs

- Analytics traffic/conversion by URL.
- Revenue or lead-quality events.
- Prior SEO reports.
- Editorial calendar.
- Support tickets, sales-call notes, product usage, internal search, or AI-bot/server-log demand.
- Localization glossary and country-specific keyword rules.

## Provider Adapters

The skill should accept normalized data from adapters. Examples:

- Google Search Console for existing query/page performance.
- DataForSEO, Ahrefs, Semrush, Moz, Keyword Planner, or CSV for keyword/competitor data.
- Browser automation, SearchAPI, SerpAPI, or cached SERP snapshots for live SERP inspection.
- CMS/crawler/sitemap adapter for inventory.
- Analytics adapter for traffic/conversion weighting.

Keep provider quirks in adapters. The core skill consumes normalized records.

## Core Principles

- First-party data wins over generic keyword suggestions.
- Existing ranking pages are often more valuable than new articles.
- Page-2 rankings with business fit are the fastest wins.
- Long-tail opportunities beat broad vanity terms for small and mid-sized sites.
- Do not create content that competes with a stronger existing page unless the recommendation is consolidation or refresh.
- Do not report the same unchanged opportunity repeatedly. Preserve suppression windows and already-tracked issue checks.
- For localized SEO, research native keyword behavior. Never translate slugs or keywords literally.

## Opportunity Types

Classify every finding as exactly one primary type:

- Page-2 push: ranking positions 11-30 with relevant demand.
- CTR lift: high impressions, weak CTR, page already matches intent.
- Content refresh: page matches intent but is stale, thin, badly structured, or missing answer-first sections.
- Internal-link lift: relevant page ranks or converts but lacks links from supporting pages.
- New content: no existing page matches the intent.
- Landing page: commercial/platform/tool intent deserves a conversion page rather than a blog post.
- Comparison page: competitor or alternative intent deserves a decision page.
- Consolidation: duplicate intent or cannibalization exists.
- Localization opportunity: local-language demand differs from English targeting.
- Do not pursue: poor business fit, wrong SERP intent, too broad, too competitive, or already sufficiently covered.

## Workflow

1. Build the business/search context.
   - Summarize the product, buyer, main use cases, and conversion goals.
   - Identify branded terms, non-branded priority themes, comparison terms, platform terms, pain-point terms, and forbidden topics.
   - Load locales and exclusions. For example, a customer may want English-only reporting, or may want German research to use native German terms.
   - Identify conversion URLs and pages that should receive internal links.

2. Build or load site coverage.
   - Normalize URLs and remove tracking parameters.
   - Group pages by section: blog, landing page, comparison, docs, help, product, pricing, templates, glossary.
   - Attach known target keywords and current page purpose.
   - Mark thin pages, stale pages, uncategorized pages, and pages with no conversion path.

3. Mine existing ranking opportunities.
   - Pull recent search performance with a comparison period when available.
   - Exclude configured noise: irrelevant locales, test URLs, suppressed clusters, branded terms when non-branded research is requested.
   - Find high-impression low-click records. Default signal: >200 impressions, <5 clicks, CTR <1%, adjusted for site size.
   - Find page-2 opportunities. Default signal: average position 11-30, >100 monthly volume when volume exists, or meaningful impressions when volume is absent.
   - Find long-tail hidden wins. Default signal: 3-4+ words, relevant, already ranking or generating impressions.
   - Find scaling pages. Default signal: CTR >3% with low impressions, or high engagement/traffic with low search visibility.
   - Detect cannibalization by grouping queries/pages by intent, not just exact keyword.

4. Mine new keyword opportunities.
   - Start from business themes, product use cases, customer roles, platforms, competitors, and pain points.
   - Prefer long-tail 100-1000 volume for realistic small-site wins unless the customer has authority for larger terms.
   - Check whether the customer already ranks. If rank is 1-10, classify as defend/scale, not new content. If 11-30, classify as page-2 push. If >30 or absent, consider new/refresh.
   - Filter out one-word/generic terms, wrong-language terms, polluted intent, and topics that require claims the customer cannot support.

5. Inspect the SERP before recommending content.
   - Review top 3-5 ranking pages or SERP records.
   - Capture page type: blog, listicle, landing page, product page, support doc, template, tool, forum, marketplace, video.
   - Note answer pattern: quick answer, steps, table, feature grid, calculator, FAQ, comparison, local pack, forum-heavy, UGC-heavy.
   - Identify what ranking pages do well: title angle, headings, depth, examples, tools covered, media, schema.
   - Identify gaps the customer can credibly fill.
   - If SERP intent is polluted or mismatched, downgrade or mark do not pursue.

6. Score each candidate.
   - Business fit: 0-5. Does this attract people who can become customers?
   - Evidence strength: 0-5. First-party ranking/impression/conversion evidence beats external keyword guesses.
   - Search demand: 0-5. Use volume, impressions, trend, and seasonality.
   - Rankability: 0-5. Consider current rank, domain strength, SERP type, competitor quality, page type match.
   - Conversion path: 0-5. Can the page naturally link to or become a conversion page?
   - Freshness/urgency: 0-5. Rising demand, content decay, recent drop, or urgent commercial opportunity.
   - Effort: 0-5 reversed. Refresh/internal link is easier than a full new page; technical/design dependencies reduce score.
   - Risk: 0-5 reversed. Existing ranked title/meta changes, legal/medical claims, or SERP mismatch reduce score.

7. Decide the action.
   - Create only when no existing page satisfies intent.
   - Refresh when a page is already close but weak.
   - Consolidate when multiple pages split the same intent.
   - Internally link when the content is good but unsupported.
   - Update snippet only when the current title/meta is clearly weak and the page is not a sensitive ranked page. Protect pages already ranking well.
   - Build landing page when the query is commercial or platform/tool-specific and conversion intent is clear.
   - Build comparison page when the query implies alternatives, vs, competitor, pricing, or selection criteria.
   - Ignore when the keyword is tempting but strategically weak.

8. De-duplicate and suppress repeats.
   - Check site inventory, active tasks, recent reports, and completed work.
   - Compare by URL, keyword cluster, and intent, not exact title.
   - If already tracked, return the existing item and do not create a duplicate recommendation.
   - Suppress repeated clusters unless there is a material new event: large movement, new keyword outside the cluster, technical issue, or explicit user request.

## Output Format

Return:

- Executive summary: 3-6 bullets with the highest-signal findings.
- Ranked recommendations with:
  - opportunity type
  - keyword cluster
  - current/proposed URL
  - target country/language
  - evidence from search/keyword/SERP/inventory
  - score and confidence
  - recommended action
  - reason this matters for the business
  - next skill to call: audit, brief, writer, QA, inventory, or CMS adapter
- Already-covered/suppressed opportunities.
- Do-not-pursue opportunities with reason.
- Data gaps that would improve confidence.

## Quality Bar

A good recommendation should answer:

- Why this opportunity matters now.
- Whether to create or improve an existing page.
- Which intent the page must satisfy.
- What proof supports the recommendation.
- What not to do.

## Failure Conditions

Fail the research if:

- It proposes topics from volume alone.
- It ignores existing pages and creates duplicate content.
- It misses obvious first-party page-2 or low-CTR opportunities.
- It reports excluded languages/markets.
- It repeats unchanged findings without checking prior work.
- It recommends title/meta changes for already-ranking pages without a risk note.
- It treats translated keywords as valid without local keyword research.
