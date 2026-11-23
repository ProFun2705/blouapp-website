### QA Verdict

- Status: PASS
- Score: 35/40
- Critical fails: none
- Top 3 issues:
  1. NHS "at least 12 weeks" line is cited to the NHS treatments page in Sources but is not a direct gum-page quote; wording is soft and low risk.
  2. Vaping section is deliberately short and gives no dose, because no approved source covers gum dosing for vaping.
  3. Page ranks at position 37, so the effect can only be read in the audit about 4 weeks out.

### Required Fixes

- None.

### Optional Improvements

- Add a small "chew and park" SVG diagram.
- Re-check position in the 2026-12 audit; add an NHS gum page citation if a stable URL is found.
- Link to this page from /combination-nrt-quit-smoking.

### Final Notes

- `npm run build` and `npm run seo:qa -- /quit-smoking-with-nicotine-gum --keyword "nicotine gum to quit smoking"` pass (1664 words, grade 5.2). Every number is from the CDC gum page or the Cochrane review CD000146 (gum RR 1.49, 56 trials, 22,581 people; all NRT RR 1.55). No prohibited claims, no em dashes, pricing only via CTA components. Title changed per brief (page has 0 clicks). Round 1 of 3.
