# QA: BLO-36 /quit-smoking-app-for-iphone

Brief: `seo/briefs/quit-smoking-app-for-iphone.md`. Branch: `seo/BLO-36-quit-smoking-app-for-iphone`. Date: November 2, 2026.

## Round 1: FAIL (mechanical)

- `npm run build` seo-check: title 61 chars with the " | Blou" suffix (max 60).
- `npm run seo:qa`: "free app" pattern matched. The phrases described quitSTART ("a fully free app from Smokefree.gov") and an FAQ question ("Is there a free quit smoking app for iPhone?"), not Blou, but the rule is strict and the wording was changed.

Required fixes sent back to writer: shorten the title (drop "(2026)"); reword every "free app" / "free quit smoking app" phrase.

## Round 2

`npm run build`: seo-check all checks passed (184 pages).
`npm run seo:qa -- /quit-smoking-app-for-iphone --keyword "best quit smoking app for iphone"`: all mechanical checks passed. 1,415 words, grade 5.0.
Inventory rebuild: `linkedFrom` 1 → 10, no issues flagged.

### QA Verdict

- Status: PASS
- Score: 35/40
  - Search intent and SERP fit: 4 (commercial "best ... for iPhone" intent; verdict and App Store table in the first screen; distinct from `/` and from the cross-platform listicle)
  - Structure and usefulness: 5 (QuickAnswerBox, TOC, verdict list, table, trial-cancel steps, 6 FAQs)
  - Human voice and readability: 4 (grade 5.0, no em dashes or banned words; "Pick X if" list is a bit uniform by design)
  - SEO hygiene: 4 (keyword in title, H1, first sentence of the quick answer; title/meta change justified in brief: 0 impressions, not indexed)
  - Product and brand accuracy: 5 (only the 4 APP_FEATURES; iOS 17; PRICING_SHORT / PRICING_FAQ; "personal insights" removed; no ratings or counts; Android correctly unavailable)
  - Competitor and source safety: 4 (price model, in-app purchases and minimum iOS match Apple listings checked November 2, 2026; fit lines reuse existing comparison-page positioning; Quit Genius "coaching, often through an employer" is carried over from /blou-vs-quit-genius, not freshly sourced)
  - Links, assets and schema: 4 (every table app links its App Store listing plus our vs page; Blou via /go/app; Article + FAQ JSON-LD match visible content; no screenshots, exempted in brief since this is not a featured-review listicle)
  - Publishing readiness: 5 (build passes, route label and lastModified updated, 9 inbound links added)
- Critical fails: none
- Top 3 issues:
  1. Quit Genius coaching/employer claim relies on our older comparison page rather than a fresh source.
  2. Competitor App Store facts will drift; page shows the check date.
  3. Page still overlaps `/` on "quit smoking app for iphone"; the commercial "best" angle is the differentiator.

### Required Fixes

None.

### Optional Improvements

- Add App Store screenshots of each app to `public/compare/` and show them in the table.
- Add a source for Quit Genius positioning (its own site) or drop the line.
- Re-check App Store facts quarterly.

### Final Notes

- Ready to publish.
- Manual follow-ups: request indexing in GSC for https://tryblou.com/quit-smoking-app-for-iphone and submit to Bing after deploy.
- Not visually checked in a browser (preview server not started in this unattended run); prerendered HTML was inspected instead.
- Side note: `/blou-vs-quitstart` says quitSTART is "developed by the U.S. Surgeon General's office"; Smokefree.gov says it is a Smokefree.gov (NCI) product. Out of scope here.
