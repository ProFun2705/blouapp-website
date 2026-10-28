# QA: BLO-16 Win the pack-year cluster on /tools/pack-year-calculator

Brief: `seo/briefs/pack-year-calculator.md` · Branch: `seo/BLO-16-pack-year-calculator` · Date: October 28, 2026 · Rounds: 1

### QA Verdict

- Status: PASS
- Score: 38/40
- Critical fails: none
- Top 3 issues:
  1. Title and H1 changed (to "Pack Year Calculator: How to Calculate Pack Years" / "Pack year calculator"). Approved by the brief: position 55, 0 clicks, and the exact query string was missing from both because of the hyphen. Low ranking risk.
  2. The page was checked as built HTML only; the dev-server preview was declined in this run, so there is no visual screenshot. The chart is a plain HTML table in an `overflow-x-auto` wrapper like the old examples table.
  3. Breadcrumb and embed title still say "Pack-year calculator" (hyphenated). Fine for users; left as is so embeds already in the wild keep their title.

Mechanical (`npm run seo:qa -- /tools/pack-year-calculator --keyword "pack year calculator"`): all checks passed, 1,423 words, grade 5.0. `npm run build` + `seo-check`: passed (184 pages).

Fact check:
- Formula and definition: CDC screening page ("one pack of cigarettes per day for 1 year"; example "1 pack a day for 20 years or 2 packs a day for 10 years"). Matches.
- USPSTF/CDC criteria 50-80, 20+ pack years, smoke now or quit within 15 years: CDC page and JAMA 2021 (PMID 33687470). Matches.
- ACS 50-80, 20+ pack years, no quit-time cut-off: ACS page and CA Cancer J Clin 2024 (PMID 37909877). Matches.
- NHS 55-74, ever smoked, registered with a GP, only some parts of England: NHS page, checked October 28, 2026. Corrects the old copy (no GP / rollout detail).
- "Added risk of lung cancer drops by half 10 to 15 years" after quitting: CDC Benefits of Quitting. Corrects the old FAQ ("after about 10 years").
- Every chart cell and worked example re-computed (rendered table: 5/day → 2.5, 5, 7.5, 10 ... 40/day → 20, 40, 60, 80; 22.5 example; 13 on-and-off example; 15 for 10/day × 30 years). All correct.
- No per-pack-year risk numbers, no screening advice beyond "talk to your doctor".

Rubric:
| Area | Score |
|---|---|
| 1. Search intent and SERP fit (formula + example above the tool, then calculator, screening kept to one section) | 5 |
| 2. Structure and usefulness (quick answer, 3 steps matching HowTo schema, chart, 20/30/40 section, 7 FAQs) | 5 |
| 3. Human voice and readability (grade 5.0, short paragraphs, non-alarming "not a diagnosis" framing) | 4 |
| 4. SEO hygiene (exact keyword in title/H1/intro, secondary terms in H2s and FAQs, title change per brief) | 5 |
| 5. Product and brand accuracy (only "Free tool" for the website tool; CTA copy uses lung checks + timeline; no pricing, rating or Android claims) | 5 |
| 6. Source safety (all numbers sourced; USPSTF/ACS cited via peer-reviewed journal versions) | 5 |
| 7. Links, assets, schema (WebApplication + HowTo + MedicalWebPage + FAQPage match visible content; 4 contextual links out; 2 new links in from /quitting-smoking-after-50 and /smokers-lungs-vs-healthy-lungs) | 5 |
| 8. Publishing readiness (built, staticRoutes lastModified bumped; no visual readback) | 4 |

### Required Fixes

- None.

### Optional Improvements

- After deploy, glance at the chart on a phone width; five columns may scroll sideways (intended).
- Watch GSC for "how to calculate pack years" and "pack years" positions in 28 days; if the page reaches page 1 with low CTR, test the meta description.
- Calculator component still has 0 `tool_input` events in Amplitude; worth checking it fires once traffic arrives.

### Final Notes

- Ready to publish.
- Residual risk: low. NHS rollout wording may need an update as the programme expands.
