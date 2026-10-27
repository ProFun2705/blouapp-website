# QA: BLO-9 Add App Store CTAs to pages that have none

Brief: `seo/briefs/vaping-app-ctas.md` · Branch: `seo/BLO-9-vaping-app-ctas` · Date: October 27, 2026 · Rounds: 2

### QA Verdict

- Status: PASS
- Score: 37/40
- Critical fails: none
- Top 3 issues:
  1. Round 1 failed the mechanical gate on `/vape-withdrawal-symptoms`: reading grade 8.2 (limit 8). Fixed by splitting 7 long sentences into shorter ones without changing any fact, number or source. Now grade 7.9.
  2. Brief originally named "quit vaping timeline" as the QA keyword; the page targets "quitting vaping timeline" (first `keywords` entry, in title and H1). Brief corrected; no title/H1 change, per brief.
  3. The `EndAppCta` sits after the FAQ and before Sources, matching `/zyn-withdrawal`.

Mechanical (`npm run seo:qa`):
- `/vape-withdrawal-symptoms --keyword "vape withdrawal symptoms"`: all checks passed, grade 7.9.
- `/quit-vaping-timeline --keyword "quitting vaping timeline"`: all checks passed, grade 7.2.
- `npm run build` + `seo-check`: passed. `npm run seo:inventory`: 0 `no-app-cta` issues (was 2). Each page now renders 3 `app_store_click` links (inline badge + end badge + end card), campaign `article_<slug>`.

Rubric:
| Area | Score |
|---|---|
| 1. Search intent and SERP fit (unchanged content, CTAs placed after the answer, not before) | 5 |
| 2. Structure and usefulness | 5 |
| 3. Human voice and readability | 4 |
| 4. SEO hygiene (title/meta/URL untouched) | 5 |
| 5. Product and brand accuracy (only SOS help, timeline, lung checks from `APP_FEATURES`; pricing via `PRICING_CTA_NOTE`; no free/Android/rating claims) | 5 |
| 6. Competitor and source safety (no new numbers or claims) | 5 |
| 7. Links, assets, schema (unchanged; CTA components reuse existing logo/QR) | 4 |
| 8. Publishing readiness | 4 |

### Required Fixes

- None remaining.

### Optional Improvements

- `/quit-vaping-timeline` title/H1 use "Quitting vaping timeline"; if GSC shows "quit vaping timeline" as the bigger query, a future ctr-snippet issue could test it.
- Neither page shows the `ArticleHeader` app intro (`showAppIntro={false}`). Leave as is unless Amplitude shows the new CTAs get no clicks.
- Watch App Store clicks for `article_vape-withdrawal-symptoms` in Amplitude after 28 days.

### Final Notes

- Ready to publish.
- `MODIFIED` not bumped: article content and facts are unchanged (only sentence splits for readability).
- Residual risk: low. No new health claims.
