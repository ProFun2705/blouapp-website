# QA: BLO-11 Rewrite title and meta for /guides/diarrhea

Brief: `seo/briefs/diarrhea.md` · Branch: `seo/BLO-11-diarrhea` · Date: October 29, 2026 · Rounds: 2

### QA Verdict

- Status: PASS
- Score: 37/40
- Critical fails: none
- Top 3 issues:
  1. Round 1 FAIL: `seo:qa` "keyword in H1" (H1 was "How long does diarrhea last after quitting smoking?"). Fixed: H1 is now "Diarrhea after quitting smoking: how long does it last?". Title and H1 both changed on a position-8.5 page; approved risk (605 impressions, 2 clicks, 0.33% CTR).
  2. Round 2 fact fix during review: the draft said nicotine gum/lozenges "upset your stomach" and "are sweetened with sugar alcohols" without a source. Rewritten to the MedlinePlus nicotine lozenge wording (heartburn; too many at once can cause nausea), source added.
  3. Template inline CTA copy reads "Diarrhea usually eases as the weeks pass" while the page says days. Shared template text for all symptom guides; harmless, left as is.

Mechanical (`npm run seo:qa -- /guides/diarrhea --keyword "diarrhea after quitting smoking"`): all checks passed, 1,306 words, grade 6.1. `npm run build` + `seo-check`: passed (184 pages). No em dashes in the rendered page.

Rendered snippet:
- `<title>`: "Diarrhea after quitting smoking: how long it lasts | Blou" (57 chars)
- Meta description (153 chars): "Diarrhea after quitting smoking usually clears in a few days and stops within a week. See why it happens when you quit, what helps, and when to get help."

Fact check (all against the page's own Sources list):
- "Usually stops within 5 to 7 days" in adults, self-care (small sips, rehydration sachets, avoid fatty/spicy food, fruit juice, fizzy drinks) and red flags (bloody diarrhea, can't keep fluids down, dehydrated after sachets, more than 7 days; emergency for blood in vomit, sudden severe tummy pain, confusion): NHS Diarrhoea and vomiting. Matches. Replaces the old unsourced "a few days to 2 weeks" and "see a clinician beyond 2 weeks".
- Acute diarrhea about 1-2 days, chronic at least 4 weeks: MedlinePlus Diarrhea. Matches.
- Withdrawal symptom list without diarrhea; symptoms last 3 to 4 weeks on average: NHS Better Health. Matches.
- About 1 in 6 quitters get constipated: Hajek 2003 (PMID 14616182). Matches.
- Diarrhea a common side effect of varenicline: NHS Side effects of varenicline. Matches.
- Sorbitol in sugar-free gum has a laxative effect: Bauditz 2008, BMJ (PMC2190242). Matches.
- Nicotine lozenges: heartburn; too many at once can cause nausea: MedlinePlus a606019. Matches.
- Medication advice always says ask a pharmacist/doctor, never stop prescribed medicine.

Rubric:
| Area | Score |
|---|---|
| 1. Search intent and SERP fit (duration first, then "is it withdrawal?", quit-specific causes, red flags) | 5 |
| 2. Structure and usefulness (quick answer with duration, 5 sections, at-a-glance, 6 FAQs) | 5 |
| 3. Human voice and readability (grade 6.1, short sentences, calm tone, honest that it's usually not withdrawal) | 4 |
| 4. SEO hygiene (exact keyword in title/H1/quick answer; meta 153 chars with duration; FAQ covers Chantix, NRT, vaping variants) | 5 |
| 5. Product and brand accuracy (template CTAs only; no pricing, rating, Android or cure claims) | 5 |
| 6. Source safety (7 health sources, guide-specific list replaces the generic one) | 5 |
| 7. Links, assets, schema (MedicalWebPage citations follow the per-guide sources; FAQ JSON-LD from the same data; links in from constipation, bloating-and-gas and nausea guides) | 4 |
| 8. Publishing readiness (build passes; `dateModified`/`dateReviewed` 2026-10-29; no visual readback) | 4 |

### Required Fixes

- None.

### Optional Improvements

- Recheck CTR on November 19, 2026 (3 weeks). If still under 1%, test a meta that names the causes (gum, Chantix).
- Make the template's symptom inline CTA copy duration-neutral.
- Consider giving other GI guides (constipation, bloating) their own sources the same way.

### Final Notes

- Ready to publish.
- Template change: `guide.references ?? references`, other guides still render the default 4 sources (checked on /guides/constipation).
- Residual risk: low. Title/H1 change on a page with 2 clicks.
