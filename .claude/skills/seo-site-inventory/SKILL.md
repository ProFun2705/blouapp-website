---
name: seo-site-inventory
description: 'Build or update the Blou SEO inventory (seo/data/inventory.json) that maps every URL to keywords, metrics, issues and Linear tasks. Use when the page map is needed or stale.'
---

<!-- Generic workflow adapted from RomeoSEO free SEO skills v2 (https://romeoseo.com/skills, file 06-site-content-inventory.skill.md). The Blou setup section is specific to this repo. -->

## Blou setup (read this before the generic instructions below)

For Blou the inventory is generated, not hand-built: `npm run build && npm run seo:inventory` writes `seo/data/inventory.json` from the prerendered HTML (title, meta, H1, schema types, words, FAQ count, App Store CTAs, links in/out, source file), merged with `seo/data/gsc/latest.json` and `seo/data/amplitude/latest.json`.

Hand-edited strategy fields are preserved across rebuilds: `primaryKeyword`, `secondaryKeywords`, `intent`, `funnelStage`, `priority`, `linearIssue`, `notes`, `suppressUntil`. Set them by editing `seo/data/inventory.json` directly (keep the JSON valid), then commit. `suppressUntil` (YYYY-MM-DD) tells research and audit to skip the page until that date, for example 3 weeks after a refresh ships.

Run order: `npm run seo:gsc` → `npm run seo:conversions` → `npm run build` → `npm run seo:inventory`. The research and audit skills do this themselves; run this skill alone when you only need the map.

---

# Site Content Inventory Product Skill

Use when the product needs a durable map of a customer's SEO surface: URLs, page purpose, keywords, performance, history, content gaps, and recommended next actions.

This inventory is the shared memory for opportunity research, performance audits, content briefs, writing, QA, publishing, and task de-duplication.

## Required Inputs

At least one page source:

- Sitemap.
- Crawl.
- CMS export/API.
- Static-site repo index.
- Manually uploaded URL list.

And customer context:

- Primary domain and canonical rules.
- Target countries/languages/locales.
- Important site sections.
- Conversion pages.
- Business/product profile.
- Known topics to prioritize, avoid, or suppress.

## Optional Inputs

- Google Search Console or equivalent search data.
- Analytics by URL.
- Keyword provider data.
- CMS metadata: title, meta, author, publish date, updated date, status, category, tags, locale.
- Crawl details: canonical, H1, schema, word count, status code, indexability, internal links, images.
- Task/project management records.
- Prior SEO reports and recommendation history.

## Record Model

Each URL record should support:

- canonical_url
- normalized_url
- locale/language/country target
- section: blog, landing, comparison, docs, help, pricing, product, template, glossary, other
- content_type
- status: live, draft, archived, redirected, noindex, unknown
- title
- meta_description
- h1
- schema_types
- publish_date
- updated_date
- owner/author
- primary_keyword_cluster
- secondary_keywords
- search_intent
- funnel_stage
- conversion_page
- internal_link_targets
- linked_from_count / key source pages when available
- screenshots/assets present
- current search metrics
- current analytics metrics
- historical performance snapshots
- recommended_action
- priority
- active_task_id/status
- last_checked
- source_freshness
- notes/risks

## Principles

- Inventory is not truth when fresh crawl/search/CMS data contradicts it.
- Preserve human-entered strategy fields unless evidence clearly supersedes them.
- Normalize by intent, not just URL.
- Store enough history to explain movement, not every raw API row forever.
- Keep customer integrations in adapters.
- Make duplicate suppression easy: every recommendation should map to a URL, cluster, intent, and active task state.

## Workflow

1. Ingest pages.
   - Read sitemap/crawl/CMS/export/upload.
   - Normalize URLs: protocol, trailing slash, lowercase rules, query stripping, canonical mapping.
   - Exclude irrelevant URLs: admin, search, parameters, staging, assets, configured locales, noindex if not useful.
   - Group by section and locale.

2. Enrich technical/content metadata.
   - Attach title, meta, H1, schema, word count, publish/update dates, author, status.
   - Detect missing title/meta/H1/schema when available.
   - Detect stale dates and thin content.
   - Detect page type from URL patterns, CMS collection, schema, and headings.

3. Attach search performance.
   - Map queries to pages.
   - Store clicks, impressions, CTR, average position, country, device, and date window.
   - Preserve snapshots for movement detection.
   - Attach primary and secondary keyword clusters based on actual query data when available.
   - Mark page-2 queries, low-CTR queries, high-CTR/low-impression signals, and new queries.

4. Attach analytics performance.
   - Map pageviews, sessions, users, organic traffic, conversions, engagement, and events to URLs.
   - Record timezone and source freshness.
   - Mark conversion-supporting pages and traffic mismatches.

5. Attach strategy fields.
   - Primary keyword cluster.
   - Search intent.
   - Funnel stage.
   - Business priority.
   - Conversion page.
   - Topics/claims relevant to the page.
   - Known owner, task, or editorial status.

6. Detect inventory issues.
   - Missing target keyword.
   - Duplicate intent/cannibalization.
   - Blog page exists where landing page is needed.
   - Landing page exists but lacks supporting blog/internal links.
   - Stale facts or old year/date.
   - No answer-first section or weak TL;DR if content structure is known.
   - No conversion path.
   - Weak internal linking.
   - Missing schema.
   - Missing screenshots/product images for listicles/comparisons.
   - Title/meta risk on ranking pages.

7. Update recommended action.
   - create supporting page
   - refresh
   - consolidate
   - internal-link update
   - snippet review
   - add schema
   - add assets
   - watch
   - ignore/suppress
   - needs human/CMS/design action

8. Serve downstream skills.
   - Research uses inventory to avoid duplicate ideas and find gaps.
   - Audit uses inventory to explain movement and avoid repeated alerts.
   - Briefs use inventory to choose create vs refresh.
   - Writer uses inventory for internal links and existing page constraints.
   - QA uses inventory to check page purpose, links, assets, and facts.
   - Publishing adapter uses inventory to read back and update status.

## Output Format

For a full inventory update, return:

- counts by section/status/locale
- new URLs
- removed/redirected URLs
- changed metadata
- performance updates
- detected issues
- recommended actions
- records needing human review

For a specific page, return:

- normalized URL and canonical URL
- page purpose/content type
- target keyword cluster
- search intent
- current metrics
- historical movement summary
- internal/conversion links
- asset/schema status
- active task/recommendation status
- next recommended action

## Validation

Before saving or returning inventory:

- Check URL normalization does not merge distinct valid pages.
- Check excluded locales/topics are not reintroduced.
- Check manually entered strategy fields are preserved unless explicitly overwritten.
- Check metrics have date ranges and source labels.
- Check active task IDs still exist if task adapter is connected.

## Failure Conditions

Fail the inventory update if:

- It overwrites strategy fields without evidence.
- It treats stale crawl/CMS data as fresher than connected live data.
- It cannot distinguish localized versions.
- It stores raw massive API payloads instead of compact records.
- It cannot support duplicate checks by URL + cluster + intent.
