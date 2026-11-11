# QA: BLO-42 /quit-smoking-with-nicotine-lozenge refresh

### QA Verdict

- Status: PASS
- Score: 35/40 (intent 5, structure 5, voice 4, SEO hygiene 4, product accuracy 5, source safety 4, links/schema 4, readiness 4)
- Critical fails: none
- Rounds: 1 (one unsourced sentence about early smokers being more dependent removed before verdict)
- Mechanical: `npm run build` passes (seo-check clean); `npm run seo:qa -- /quit-smoking-with-nicotine-lozenge --keyword "nicotine lozenge"` all checks passed (about 1,800 words, grade 5.9).

### Top 3 issues
1. The schedule table uses the 2 mg store-brand label (Good Sense, DailyMed); the 4 mg schedule is not shown separately.
2. MedlinePlus lozenge page not fetchable (the URL tried covers the inhaler), so only CDC, DailyMed and NHS are cited.
3. NHS source gives no lozenge strengths; used only for duration, combining and where to buy.

### Final Notes
- Every number traces to CDC lozenge page or the DailyMed label. Title changed (no impressions, low risk, noted in brief). Blou described with approved features only; pricing via CTA components. Inbound links added from /combination-nrt-quit-smoking and /quit-smoking-with-nicotine-patch.
