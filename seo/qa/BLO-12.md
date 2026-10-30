# QA: BLO-12 Rewrite title and meta for /guides/dreams-and-sleep

Brief: `seo/briefs/dreams-and-sleep.md` · Branch: `seo/BLO-12-dreams-and-sleep` · Date: October 30, 2026 · Rounds: 1

### QA Verdict

- Status: PASS
- Score: 36/40
- Critical fails: none
- Top 3 issues:
  1. Title and H1 changed on a position-8.4 page. Approved risk: 367 impressions, 0 clicks.
  2. There is no research time course for vivid dreams alone. The page says so and uses the sourced withdrawal sleep time course (peak in week 1, 2 to 4 weeks, Hughes 2007) instead of the old unsourced "week 4" claim. Honest, but slightly less crisp than a single number.
  3. Shared template inline CTA reads "Vivid dreams usually eases as the weeks pass" (subject/verb mismatch from `shortTitle`). Template text for all symptom guides; left as is.

Mechanical (`npm run seo:qa -- /guides/dreams-and-sleep --keyword "vivid dreams after quitting smoking"`): all checks passed, 1,394 words, grade 5.9. `npm run build` + `seo-check`: passed (184 pages). No em dashes in the rendered page.

Rendered snippet:
- `<title>`: "Vivid dreams after quitting smoking: why and how long | Blou" (59 chars)
- Meta description (150 chars): "Vivid dreams after quitting smoking often start in week 1 and ease within 2 to 4 weeks. Why they happen, patch and Chantix tips, and when to get help."
- H1: "Vivid dreams after quitting smoking: why and how long they last"

Fact check (against the page's own Sources list):
- Insomnia is a valid withdrawal symptom that peaks within the first week and lasts 2-4 weeks; increased dreaming "may be" an abstinence effect: Hughes 2007 (PMID 17365764). Page wording matches ("possible effect").
- Trouble sleeping is a listed withdrawal symptom; symptoms peak in the first week, especially the first 3 days, last 3 to 4 weeks on average, sometimes a few months: NHS Better Health. Matches.
- Varenicline: unusual dreams or nightmares and trouble falling/staying asleep are common side effects; sleepwalking and mood changes need a doctor right away: MedlinePlus a606024. Matches. Page never tells the reader to stop the medicine; it says talk to a doctor or pharmacist and don't stop without advice.
- Varenicline: call a doctor if irritable, aggressive, anxious or depressed; 999 for thoughts of self-harm: NHS Side effects of varenicline. Matches. US 911/988 added for US readers.
- Patch: if vivid dreams or other sleep disturbances, remove at bedtime and apply a new one in the morning: OTC nicotine patch drug facts label on DailyMed (NLM). Matches.
- Caffeine levels rise after stopping smoking: Benowitz 1989, BMJ (PMC1836474). Matches the claim as worded (no number).
- Removed unsourced claims: "usually fade by week 4" as a dream-specific fact, "dose adjustment often helps", "48–72 hours", alcohol "fragments REM".

Rubric:
| Area | Score |
|---|---|
| 1. Search intent and SERP fit (normal? how long? patch/Chantix cause, red flags; insomnia left to /guides/insomnia) | 5 |
| 2. Structure and usefulness (answer-first, 5 sections, patch fix up top, 6 FAQs incl. vaping/pouches and smoking dreams) | 5 |
| 3. Human voice and readability (grade 5.9, calm, says smoking dreams don't mean a slip) | 4 |
| 4. SEO hygiene (exact keyword at start of title/H1/quick answer/meta; meta 150 chars with time frame) | 5 |
| 5. Product and brand accuracy (template CTAs only; no pricing, rating, Android or cure claims) | 5 |
| 6. Source safety (6 health sources + CDC, guide-specific list; no number without a source) | 5 |
| 7. Links, assets, schema (MedicalWebPage citations follow per-guide sources; FAQ JSON-LD; new links in from insomnia and caffeine-sensitivity; out to cravings/SOS) | 4 |
| 8. Publishing readiness (build passes; `dateModified`/`dateReviewed` 2026-10-30; no visual readback) | 3 |

### Required Fixes

- None.

### Optional Improvements

- Recheck CTR on November 20, 2026 (3 weeks). If still 0 clicks, test a title that leads with "nightmares" or "nicotine patch".
- Fix the template inline CTA grammar for plural `shortTitle` values.

### Final Notes

- Ready to publish.
- Residual risk: low. Title/H1 change on a page with 0 clicks.
