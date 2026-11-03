# QA: BLO-28 /quit-smoking-with-nicotine-patch

Round 1 · 2026-11-03 · brief `seo/briefs/quit-smoking-with-nicotine-patch.md`

Mechanical: `npm run build` passed (seo-check: all checks passed). `npm run seo:qa -- /quit-smoking-with-nicotine-patch --keyword "nicotine patch to quit smoking"`: all mechanical checks passed, 1,999 words, grade 5.0.

### QA Verdict

- Status: PASS
- Score: 37/40 (intent 5, structure 5, voice 4, SEO 5, product 5, sources 4, links/schema 4, readiness 5)
- Critical fails: none
- Top 3 issues:
  1. The brief asked for an inbound link from `/guides/dreams-and-sleep`, but guide sections are plain strings with no inline links (only `relatedSlugs` to other guides). Not added. The page already has 9 inbound links, including `/nicotine-patch-side-effects` and `/tools/nicotine-patch-plan`.
  2. "Most side effects are mild (MedlinePlus, CDC)" is a fair summary, but neither source says "mild" in so many words.
  3. Word count (about 2,000 rendered, including FAQ and sources) is above the brief's ~1,500 target. All sections are on-brief, so this is acceptable.

### Checks against the brief

- Title "How to use a nicotine patch to quit smoking" (50 chars with suffix), H1 the same, meta 145 chars naming placement, strength, duration and cravings. Title change approved in the brief (no impressions, not indexed).
- Quick answer covers quit day, placement, rotation, strength cut-off, 8–10 week step-down and combo NRT. Steps come right after it, with HowTo JSON-LD matching the visible steps.
- "Where to put a nicotine patch" H2 with a good spots / avoid table, all sites sourced (CDC, MedlinePlus hip). No claim that one site absorbs better.
- Strength table matches the NicoDerm CQ label exactly (21/14/7 mg, weeks 1–6, 7–8, 9–10; 14 mg × 6 weeks, 7 mg × 2 for ≤10 a day).
- Every number is sourced: 10 seconds, 16/24 hours, 4 days, 8–10 / 8–12 / 6–20 / 12 weeks, 1-800-222-1222, 1-800-QUIT-NOW, 333888. No efficacy percentages.
- CDC vs MedlinePlus difference on smoking while on the patch is shown both ways. A slip is framed warmly.
- "Ask a doctor first" list matches the US label and CDC precautions. Tells readers not to stop prescribed medicine.
- Blou is described only with approved features (SOS craving help, lung checks, timeline). No free, rating or Android claims. Pricing comes only from the CTA components.
- Sources section has CDC, DailyMed label, MedlinePlus, NHS and FDA, with publishers. Article JSON-LD is MedicalWebPage with citations. FAQ JSON-LD is emitted by `FaqSection` from the same `faqItems`.
- Links out: patch plan tool, side effects, combination NRT, patch vs gum, dreams-and-sleep, cravings, I smoked one cigarette, quit-smoking-help, prepare-to-quit. `InlineAppCta` and `EndAppCta` use `article_quit-smoking-with-nicotine-patch`.
- `staticRoutes.ts`: label changed to "How to use a nicotine patch", lastModified set to 2026-11-03.

### Required Fixes

- None.

### Optional Improvements

- Add support for inline article links in guide sections so `/guides/dreams-and-sleep` can link here.
- Recheck the Smokefree.gov patch page (the old URL returns 404) and add it as a source if a current page exists.
- Add a simple SVG body diagram of the patch sites later if the page gets impressions.

### Final Notes

- Ready to publish.
- Manual follow-up: request indexing for the URL in GSC (it was crawled, not indexed, on 2026-10-29; see BLO-37).
- Residual risk: overlap with `/nicotine-patch-side-effects` on the sleep and skin topics. Both are kept short here and link out. Recheck impressions by December 1, 2026.
