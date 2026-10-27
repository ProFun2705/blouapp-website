# Blou SEO profile

Every SEO skill in `.claude/skills/seo-*` reads this file first. It is the "business profile, product facts, prohibited claims and brand rules" input the skills ask for. When a fact here and a fact in code disagree, the code in `src/lib/site.ts` wins; fix this file.

## Business

- **Product:** Blou, a quit smoking app for iPhone (App Store id 6758997298). Photo timeline, lung checks, SOS craving help, every milestone visualized.
- **Site:** https://tryblou.com (Next.js on Vercel, deploys on push to `main`). GSC property `sc-domain:tryblou.com`.
- **Reader:** an adult who smokes, vapes or uses nicotine pouches and is trying to stop, or just stopped and wants to know what is happening to their body. Often anxious, often mid-craving, often on a phone.
- **What a conversion is:** an App Store visit (`app_store_click` event on any `/go/app` link or App Store badge). Secondary: a tool used (`tool_input`).
- **Conversion pages to link first:** the App Store CTA components (`InlineAppCta`, `EndAppCta` in `src/components/marketing/AppCta.tsx`), then `/` and `/quit-smoking-app-for-iphone`.
- **Markets:** English. US first (Keyword Planner location 2840), then UK (2826), Australia (2036), Canada (2124). The site has per-country money calculators and 51 US state quitline pages. Do not research or write non-English content yet.

## Product facts (approved claims)

- iPhone only. iOS 17 or later.
- **Pricing:** "Free trial, then a subscription. Cancel anytime in the App Store." Use `PRICING_SHORT`, `PRICING_CTA_NOTE`, `PRICING_FAQ` from `src/lib/site.ts`. Never write the app is free.
- The website's guides, timelines and calculators are free to use. That is the only "free" claim allowed.
- Features: photo timeline, lung (breath) checks, SOS craving help, visual milestone timeline. Nothing else unless it is in `APP_FEATURES`.
- Author: Heorhi Talochka, Founder (`AUTHOR`). Review line: "Blou editorial team, reviewed against NHS, CDC, and WHO public guidance" (`MEDICAL_REVIEWER`).

## Prohibited claims (QA fails the draft)

- Any "free app", "free on the App Store", "free + premium" wording. `npm run build` also blocks these via `scripts/seo-check.mjs`.
- Any star rating, review count, download count, user count, success rate or "X% of users quit".
- An Android app that exists. Android is a waitlist only (`AndroidWaitlistCard`).
- Blou cures, treats, diagnoses or replaces medical advice. Blou is not a medical device. No "clinically proven".
- Health numbers without a source. Every timeline number, risk figure and statistic needs a citation to NHS, CDC, NCI, Smokefree.gov, WHO, FDA, MedlinePlus, Truth Initiative or a peer-reviewed paper, listed in the page's Sources section.
- Competitor facts (pricing, features, ratings) that are not sourced from the competitor's own site or App Store page, with the check date.
- Fake testimonials, quotes, case studies or "our users say".

## Voice and readability

- 7th-grade reading level is the target; `npm run seo:qa` fails above grade 8.
- Answer first. The first 2-4 sentences answer the query. Use `QuickAnswerBox`.
- Short paragraphs (1-3 sentences). Simple words. Second person ("you").
- Warm and steady, never preachy or scary. People who slip are not failures; say what to do next.
- **No em dashes.** Use a comma, a period, or parentheses. Ranges use an en dash only in numbers ("days 2–3").
- No AI filler: delve, unlock, harness, game-changer, seamless, robust, cutting-edge, embark, elevate, "let's dive in", "in today's fast-paced world", "it is important to note", "whether you're a...". The full list is in `scripts/seo/qa-lint.mjs`.
- Honest about Blou. In comparisons and listicles Blou is not #1 by default; give each app a real drawback, Blou included (iPhone only, subscription).
- US spelling. Dates as "October 15, 2026".

## Page anatomy (what a finished article has)

Copy the structure of `src/app/zyn-withdrawal/page.tsx` (newest, cleanest example):

1. `buildMetadata` with title ≤ 60 chars, description 120-160 chars, `keywords` with the primary keyword first, `publishedTime`/`modifiedTime`.
2. `Breadcrumbs`, `ArticleHeader` with `Byline`, `QuickAnswerBox`.
3. `TableOfContents` for pages over ~1,000 words.
4. Body H2s in query language, one `InlineAppCta` after the first useful section, a table where it helps scanning.
5. `FaqSection` (4-8 questions taken from GSC queries or People Also Ask) and matching FAQ JSON-LD via `buildFaqJsonLd`.
6. Sources section with publisher names and links.
7. `EndAppCta` with a `campaign` of `article_<slug>`.
8. `JsonLd` with `buildArticleJsonLd` (MedicalWebPage for health topics).
9. An entry in `src/lib/staticRoutes.ts` (label + group) so the page is in the sitemap and linked from `/guides`. Guides under `/guides/[slug]` are entries in `src/lib/blouGuides.ts` instead.
10. Links in from at least 2 related existing pages (edit those pages), and `RelatedGuides` out.

## Images

- Product images live in `public/`. Reuse them before making new ones.
- Diagrams and illustrations as React/SVG components (see `LungsComparisonIllustration.tsx`, `LungRecoveryTimeline.tsx`) are preferred over stock photos.
- Competitor app screenshots for comparison pages: capture from the App Store listing with the screenshot API, save under `public/compare/<app>.png`, alt text names the app and screen.
- Never use photos of real people without a license. No generated images of diseased lungs or medical imagery.

## Competitors (comparison set)

Smoke Free, QuitNow, Kwit, quitSTART, Flamy, Quit Genius, EasyQuit, Smoke Free (NHS Quit Smoking app). Each `blou-vs-*` page already exists for the first six.

## Topics to prioritize

1. Withdrawal symptoms and timelines (largest impression share today: `/guides/*` symptom pages).
2. Nicotine pouches / Zyn and vaping (fast-growing demand, weak competition).
3. Quit methods and medication (NRT, varenicline, bupropion).
4. Quit app comparisons and "best app" queries (closest to conversion).
5. Free tools and calculators (link magnets; feed the App Store CTA).

## Topics to avoid

- Cannabis, alcohol-only, or drug cessation as standalone topics.
- Anything that tells someone to stop prescribed medication.
- Pregnancy dosing advice beyond what NHS/CDC say verbatim.
- E-cigarettes as a recommended quit method (state the public-health position neutrally, with sources).

## Linear (task board)

Workspace: **Blou-site-SEO** (`linear.app/blou-site-seo`), reached through Composio with `--account blou-seo`. Do **not** use the Linear MCP server in Claude Code for this loop; it points at a different workspace.

- Team: **Blou-site-SEO** (key `BLO`, so issues are `BLO-12`). Project: **Blou SEO loop**.
- Statuses, in order: Backlog → Todo (brief ready) → In Progress (writing) → In Review (QA) → Done (published) / Canceled.
- Labels (one type label per issue): `new-content`, `refresh`, `ctr-snippet`, `page-2-push`, `internal-links`, `technical`, `conversion`, `comparison`, `tool`. Plus `source:research`, `source:audit`, `source:human`, and `qa-failed` while a draft is being rewritten.
- Priority: 1 Urgent (conversion page broken or traffic drop), 2 High (page-2 with fit, low CTR on 300+ impressions), 3 Medium, 4 Low.
- Every issue body follows the template in `seo/README.md` and names exactly one URL (existing or proposed) and one keyword cluster, so de-duplication can match on URL + cluster.
