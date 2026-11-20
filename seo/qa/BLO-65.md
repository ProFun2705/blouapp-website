### QA Verdict

- Status: PASS
- Score: 34/40
- Critical fails: none
- Top 3 issues:
  1. Title promise "usually 5–7 days" relies on the NHS figure already in the page's quick facts and sources (sourced).
  2. Body intentionally untouched, so structure and voice scores carry over from the existing guide.
  3. CTR effect can only be read in the audit about 4 weeks out.

### Required Fixes

- None.

### Optional Improvements

- Re-check CTR at the 2026-12 audit; if still under 1.5%, test a question-style title.

### Final Notes

- `npm run build` and `npm run seo:qa -- /guides/diarrhea --keyword "diarrhea after quitting smoking"` pass (1306 words, grade 6.1). Title 56 chars with suffix, meta 157 chars. Round 1 of 3.
