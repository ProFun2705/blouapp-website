# QA: BLO-60 /chantix-side-effects

### QA Verdict

- Status: PASS
- Score: 34/40 (round 2; round 1 failed one mechanical check, keyword missing from H1, fixed)
- Critical fails: none
- Top 3 issues (all minor):
  1. Only three sources (CDC, MedlinePlus, NHS); an FDA label citation would strengthen it.
  2. Page has no illustration, only one table.
  3. Long-term and weight questions are answered by saying the sources are silent, which is honest but thin.

Rubric: intent 5, structure 5, voice 4, SEO 4, product accuracy 5, source safety 4, links/schema 4, readiness 3.

### Checks
- `npm run build` and `seo-check` pass; `npm run seo:qa` all mechanical checks pass (1,746 words, grade 7.2).
- Every number (12 weeks, extra 12 weeks, 8 oz, 2 weeks, quitline and Poison Control numbers) is in CDC or MedlinePlus text. No percentages, no dosing, no pill strengths.
- No advice to start, stop or change a prescription except "stop and call" for serious signs as CDC, MedlinePlus and NHS say.
- Blou not claimed to treat side effects; no free, rating or Android claims.
- Inbound links added from /quit-smoking-with-varenicline, /quit-smoking-medication, /nicotine-patch-side-effects; route added to staticRoutes.

### Final Notes
Ready to publish. Recheck impressions for "chantix side effects" by December 17, 2026.
