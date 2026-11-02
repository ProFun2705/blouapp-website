# Brief: BLO-36 Make /quit-smoking-app-for-iphone indexable (buyer's page for "best quit smoking app for iPhone")

- **Issue:** BLO-36 (technical, source:audit), priority High
- **Job type:** Refresh of an existing URL into a distinct commercial landing page (option (a) in the issue), plus internal-link update. Keep the URL. Do not redirect.
- **Target file:** `src/app/quit-smoking-app-for-iphone/page.tsx` (full rewrite in the `src/app/zyn-withdrawal/page.tsx` pattern: `PUBLISHED`, `MODIFIED`, `CAMPAIGN`, `PATH`, `TITLE`, `DESCRIPTION`, `SOURCES`, `faqItems`). Bump `MODIFIED` and the route's `lastModified` in `src/lib/staticRoutes.ts` (also its label).
- **Primary keyword:** "best quit smoking app for iphone"
- **Secondary:** "quit smoking app for iphone", "stop smoking app iphone", "quit smoking app iphone free", "best free quit smoking app for iphone"
- **Campaign:** `article_quit-smoking-app-for-iphone` (unchanged)

## Why
- URL Inspection 2026-10-29: "Crawled - currently not indexed", last crawl 2026-07-04. 0 GSC impressions for two 28-day windows.
- The page is thin (660 words) and generic ("what to look for in a quit app"), and the home page already ranks for "quit smoking app for iphone" (pos 6.5, 96 impressions). Google sees it as a weaker duplicate of `/`.
- Only 1 internal link points to it (`/guides`).
- Keyword Planner (US, 2026-11-02): every iPhone variant is ~10/mo; "best quit smoking app iphone" is the only one with HIGH competition and a CPC ($1.40-2.32), so it carries the commercial intent. The "free" variants show people want to know what costs money on iPhone.

## Reader and intent
An iPhone owner choosing a quit app right now. Commercial / decision intent. They want: which app to download on iPhone, what each costs on the App Store, whether it runs on their iOS version, and how not to get billed by a trial they forget.

What makes it distinct from `/` (product home) and `/best-quit-smoking-apps` (cross-platform listicle): it is iPhone-specific decision help. App Store facts (free to download or not, in-app purchases, minimum iOS) for the apps in our comparison set, how App Store trials and cancellation work, and an honest "pick Blou if / pick something else if" verdict.

The page must not become: a generic quit-smoking guide, a copy of the home page, or a full app review listicle (that lives at `/best-quit-smoking-apps`; this page links there).

## SERP expectations
"best quit smoking app iphone" results are listicles and App Store pages. We can't win a listicle with no screenshots, so we answer faster: a verdict and an App Store facts table in the first screen, sourced from Apple's own listings with a check date.

## Title/meta policy
Change both. The page has 0 impressions and is not indexed, so there is no ranking to lose. Do not change the home page title.
- Title (≤ 60): "Best quit smoking app for iPhone: how to choose (2026)" or close.
- H1: "Best quit smoking app for iPhone".
- Meta 120-160 chars: verdict + App Store facts + trial tip.

## Top of page
- `QuickAnswerBox`, answer-first in 2-4 sentences: there's no single best; which app for which need (Blou for seeing your own recovery; quitSTART if you want a fully free app from the National Cancer Institute's Smokefree.gov; Smoke Free / QuitNow! if you want a free download with optional paid extras). Note apps work best with a quitline or medication.
- Verdict near the top (comparison rule).

## Outline
1. **Quick answer** (`QuickAnswerBox`).
2. **iPhone quit apps at a glance** (H2). Table: app, App Store price model, in-app purchases, minimum iOS, best for, link. Facts below, checked on the App Store November 2, 2026. Say the check date on the page. Link each app's App Store listing (first mention) and our `blou-vs-*` page where one exists.
3. **Which one should you pick?** (H2). Short "Pick X if..." list, Blou included with real drawbacks (iPhone only, subscription after the trial, no community forum).
4. `InlineAppCta` after section 3.
5. **What Blou does on iPhone** (H2). Only the 4 `APP_FEATURES`, iOS 17 or later, `PRICING_SHORT`. No other features (no widgets, Apple Watch, Health app sync, notifications claims).
6. **Before you start a free trial on iPhone** (H2). How App Store trials work and how to cancel: Settings > [your name] > Subscriptions > Cancel Subscription; cancel at least 24 hours before the trial ends (Apple Support). Check "In-App Purchases" on the listing.
7. **Do quit apps work?** (H2). Honest evidence: Cochrane 2019 found app evidence very low certainty (RR 1.00, 5 studies, 3,079 people); text messaging did better (RR 1.54, 13 studies, 14,133 people, moderate certainty). CDC: counseling and medication together give the best chance. So use an app with 1-800-QUIT-NOW, NRT or medication. Link `/nrt-and-quit-smoking-app`.
8. **How to use a quit app in your first week** (H2), 3-5 short steps; links to `/prepare-to-quit-smoking`, `/guides/cravings`, `/i-smoked-one-cigarette`.
9. **FAQ** (5-6): best quit smoking app for iPhone; is there a free quit smoking app for iPhone (quitSTART yes, from Smokefree.gov; Blou no, `PRICING_FAQ` wording); does Blou work on iPhone/which iOS; how to cancel a quit app trial on iPhone; do quit apps work; is there an Android version (no, waitlist, link `/quit-smoking-app-android`).
10. `EndAppCta`, Sources section, `RelatedGuides` (best-quit-smoking-apps, nrt-and-quit-smoking-app, quit-smoking-app-android, blou-vs-flamy, first-week-quit-smoking).

`TableOfContents` (page will be ~1,000+ words).

## Product/factual constraints (from seo/blou-profile.md)
- Blou: iPhone only, iOS 17 or later. Pricing only via `PRICING_SHORT` / `PRICING_CTA_NOTE` / `PRICING_FAQ`. Never call Blou free, even though its App Store listing shows "Get"/free download.
- Features only: photo timeline, lung checks, SOS craving help, every milestone visualized. Remove "personal insights" (not in `APP_FEATURES`).
- No star ratings, review counts, download or user counts, success rates for Blou or any competitor. No Android app. Not medical advice or a medical device; no cure/treat claims.
- Competitor facts allowed only as below, from Apple's listings (iTunes Lookup API + listing page, checked 2026-11-02):

| App | Developer | Download | In-App Purchases | Min iOS | App Store URL |
|---|---|---|---|---|---|
| Blou | Blou | free trial, then subscription (our wording) | yes | 17.0 | https://apps.apple.com/us/app/quit-smoking-tracker-blou/id6758997298 |
| Smoke Free | 23 Ltd | Free | yes | 16.0 | https://apps.apple.com/us/app/smoke-free-quit-smoking-now/id577767592 |
| QuitNow | Fewlaps SL | Free | yes | 15.6 | https://apps.apple.com/us/app/quitnow/id483994930 |
| Kwit | KWIT | Free | yes | 18.1 | https://apps.apple.com/us/app/quit-smoking-for-good-kwit/id525441365 |
| Flamy | Offlinefirst LTD | Free | yes | 15.0 | https://apps.apple.com/us/app/quit-smoking-smoke-free-flamy/id1462887052 |
| quitSTART | Smokefree.gov (NCI); listed by ICF International | Free | none listed | 11.0 | https://apps.apple.com/us/app/quitstart-quit-smoking/id494552000 |

- "Best for" lines may reuse the positioning already on `/best-quit-smoking-apps` and the `blou-vs-*` pages (fit language, not facts). Don't state competitor prices, ratings, or features beyond that.
- No em dashes. Grade ≤ 8. No AI filler. US spelling. Dates like "November 2, 2026".

## Sources (writer must use; may add only equal or stronger)
1. Whittaker R, et al. Mobile phone text messaging and app-based interventions for smoking cessation. Cochrane Database Syst Rev 2019 (PubMed 31638271).
2. CDC, How to quit smoking (https://www.cdc.gov/tobacco/about/how-to-quit.html): counseling + medication best chance; 1-800-QUIT-NOW; quitSTART.
3. Smokefree.gov, quitSTART app (https://smokefree.gov/tools-tips/apps/quitstart): free app; Smokefree.gov created by NCI.
4. Apple Support, Cancel a subscription from Apple (https://support.apple.com/en-us/118428).
5. The six App Store listings above (Apple), checked November 2, 2026.

## Links and conversion path
- In (must add): `/` (home), `/best-quit-smoking-apps`, `/quit-smoking-app-android`, and the six `blou-vs-*` pages (smoke-free, quitnow, kwit, quitstart, flamy, quit-genius). One natural sentence or link each, anchor with "iPhone" in it.
- Out: `/best-quit-smoking-apps`, `blou-vs-*` pages, `/nrt-and-quit-smoking-app`, `/prepare-to-quit-smoking`, `/guides/cravings`, `/i-smoked-one-cigarette`, `/quit-smoking-app-android`.
- `InlineAppCta` after "Which one should you pick?"; `EndAppCta` with campaign `article_quit-smoking-app-for-iphone`.

## Assets
No new images. This is not a featured-review listicle: competitors appear in one facts table that links each App Store listing and our comparison pages; full reviews live at `/best-quit-smoking-apps`. Screenshots exemption is intentional; QA should not fail on missing competitor images, but must fail a missing App Store link.

## Schema
`buildArticleJsonLd` (Article; reviewer `MEDICAL_REVIEWER`), FAQ JSON-LD via `FaqSection` matching visible FAQ, breadcrumbs. No `offers`/price.

## QA acceptance
- `npm run build` passes.
- `npm run seo:qa -- /quit-smoking-app-for-iphone --keyword "best quit smoking app for iphone"` passes.
- Every competitor fact matches the table above; every health number is in `SOURCES`.
- Rubric ≥ 32/40, no area below 3, no critical fails.
- Inventory after rebuild shows `linkedFrom` ≥ 9 for this URL.

## Risks / open questions
- Owner should request indexing in GSC after deploy (manual).
- App Store facts drift; the page shows its check date.
