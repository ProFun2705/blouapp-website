# Brief: BLO-16 Pack year calculator refresh

- **Issue:** BLO-16 (page-2-push, tool, source:research), priority High
- **Job type:** Refresh of an existing tool page (no new URL)
- **Target URL:** `/tools/pack-year-calculator` · file `src/app/tools/pack-year-calculator/page.tsx`
- **Primary keyword:** `pack year calculator` (US 3,600/mo, low competition, Keyword Planner October 28, 2026)
- **Secondary:** pack years (1,900), how to calculate pack years / how to work out pack years (1,600 each), how do you calculate smoking pack years (1,000), pack year smoker (720), pack years of smoking calculator (720), pack year formula (390), pack year smoking history (170), 20 pack year smoking history (140), 30/40 pack year smoking history
- **QA command:** `npm run seo:qa -- /tools/pack-year-calculator --keyword "pack year calculator"`

## Evidence and business reason

GSC September 27 to October 24, 2026: 283 impressions, 0 clicks, average position 55.4, 12+ distinct queries ("pack year calculator" 52.9, "pack years" 68.4, "pack year history" 63.3, "how to work out pack years" 64.5). Google tests the page for the whole cluster but ranks it on page 5-7. Amplitude: 2 views, 0 tool inputs, 0 App Store clicks.

Diagnosis: (1) the exact query string "pack year calculator" (no hyphen) appears nowhere in title, H1 or opening copy, which only say "Pack-year"; (2) there is no answer-first block, so "how to calculate pack years" has no snippet-ready answer above the tool; (3) no dated Article/MedicalWebPage signals, no byline; (4) only 1 contextual link in from a related article; (5) the examples table is thin (4 rows) and the 20/30/40 pack-year queries have no answer.

Reader: an adult who smokes or used to smoke, usually 45+, often sent by a doctor's form or a screening letter, wanting a number and to know whether it qualifies them for lung cancer screening. Also nursing students looking up the formula. Funnel: informational/tool. Conversion: the number lands hard for many readers; quitting lowers risk from here on, which is where Blou's lung checks and timeline fit.

## Intent

Tool + how-to (mixed). The first screen must give the formula and a worked example, then the calculator. The page must not turn into a lung cancer article; screening criteria stay one section.

SERP expectation (from query set): calculators (Omni, MDCalc-style), NCI dictionary, CDC screening page. Common sections: formula, worked example, multiple-period smoking, screening eligibility. Gap to win: a common-values table people can scan without using the tool, and plain answers to "what does 20/30/40 pack-years mean".

## Title / meta policy

Position 55 with 0 clicks, so a title change carries little risk and is needed for keyword match.

- Title (≤ 60 incl. " | Blou"): `Pack Year Calculator: How to Calculate Pack Years`
- H1: `Pack year calculator`
- Meta (120-160): must include "pack years", formula and screening. Draft: "Use this pack year calculator to work out your smoking history in pack years, see the formula with examples, and check lung cancer screening criteria." (verify length)
- `keywords`: primary first, then the secondary terms above.
- Add `publishedTime` (keep 2026-10-15, the staticRoutes date) and `modifiedTime` 2026-10-28.

## Top of page

1. Breadcrumbs (unchanged).
2. Header: H1 "Pack year calculator", one-sentence intro that contains "pack year calculator" in the first 100 words, `Byline` with `AUTHOR` and `MEDICAL_REVIEWER` (or `ArticleHeader` if it fits the tool layout).
3. `QuickAnswerBox` before the calculator: "To calculate pack years, multiply the packs you smoked per day by the years you smoked. A pack is 20 cigarettes. For example, 1 pack a day for 20 years is 20 pack years, and so is 10 cigarettes a day for 40 years." Facts: formula; 20 cigarettes = 1 pack; changing habit = add periods; US screening uses 20+ pack years.
4. Calculator (unchanged component).

## Outline (H2s)

1. **How to calculate pack years** (replace "The pack-year formula"): formula, cigarettes ÷ 20 step, numbered 3 steps matching the HowTo JSON-LD, worked example with two periods (15 a day for 10 years then 30 a day for 10 years = 7.5 + 15 = 22.5).
2. **Pack years chart: common values** (expand examples): table, rows = cigarettes per day (5, 10, 15, 20, 30, 40) × columns = years (10, 20, 30, 40). Pure arithmetic, no source needed. Keep the existing worked-example rows as a short list or second table.
3. **What 20, 30 and 40 pack years mean**: plain equivalents (20 = 1 pack a day for 20 years or 2 packs a day for 10 years, per CDC example); 20 is the US screening threshold. No risk multipliers per pack-year (no approved source in brief).
4. **Pack years and lung cancer screening**: keep USPSTF / ACS / NHS bullets; correct NHS to "only in some parts of England, being rolled out more widely" and add "registered with a GP". Keep "talk to your doctor, not a diagnosis".
5. `InlineAppCta` after section 4 (keep text, it is an approved feature claim).
6. **Does quitting help if you have many pack years?** Short section: pack years never go down, but risk falls after you quit; CDC: added lung cancer risk drops by half 10 to 15 years after quitting. Link /can-lungs-heal-after-smoking and /quit-smoking-timeline.
7. FAQ (6-8): What is a pack year; How do you calculate pack years; How do I work out pack years if I smoked on and off; What does a 20 pack year smoking history mean; Do roll-your-own / cigars / vapes count (answer: the formula is defined for cigarettes; tell your doctor about other tobacco, no conversions); Who should get lung cancer screening; Does quitting lower my risk. Fix the existing quitting answer (currently "after about 10 years"; CDC says 10 to 15) and turn the bare "/quit-smoking-timeline" text into a link or plain words.
8. Embed snippet, EndAppCta, Sources, related buttons (unchanged structure).

TableOfContents updated to the new ids.

## Product / factual constraints (from seo/blou-profile.md)

- Blou: iPhone only, iOS 17+. Features: photo timeline, lung (breath) checks, SOS craving help, visual milestone timeline. Nothing else.
- Pricing: never "free app". The only allowed "free" is the website's tools ("Free tool" kicker is fine).
- No ratings, user counts, success rates. Blou does not diagnose, treat or replace medical advice; the calculator is educational.
- Every health number needs a source from the approved list or a peer-reviewed paper. No em dashes. Grade ≤ 8. US spelling.
- Do not give any per-pack-year risk number. Do not tell anyone they should or should not be screened; say "talk to your doctor".

## Sources (writer must use; verified October 28, 2026)

1. CDC, Screening for Lung Cancer: https://www.cdc.gov/lung-cancer/screening/index.html (definition, CDC example "1 pack a day for 20 years or 2 packs a day for 10 years", 50-80, 20+, quit within 15 years)
2. USPSTF recommendation statement, JAMA 2021 (Krist et al.): https://pubmed.ncbi.nlm.nih.gov/33687470/ (plus the USPSTF page already listed)
3. American Cancer Society 2023 guideline update, CA Cancer J Clin 2024 (Wolf et al.): https://pubmed.ncbi.nlm.nih.gov/37909877/ (no years-since-quitting cut-off), plus the ACS page already listed
4. NHS, Lung cancer screening: https://www.nhs.uk/conditions/lung-cancer-screening/ (55-74, ever smoked, registered with a GP, only some parts of England)
5. CDC, Benefits of Quitting: https://www.cdc.gov/tobacco/about/benefits-of-quitting.html ("Added risk of lung cancer drops by half after 10 to 15 years")

## Links

- In (must add, contextual sentence with anchor "pack year calculator" or "work out your pack years"): `/quitting-smoking-after-50` (lungs-screening section), `/smokers-lungs-vs-healthy-lungs` (near lung cancer risk text). `/can-lungs-heal-after-smoking` already links; leave it.
- Out (contextual, in body): `/can-lungs-heal-after-smoking`, `/quit-smoking-timeline`, `/smokers-lungs-vs-healthy-lungs`, `/quitting-smoking-after-50`.
- Conversion: `InlineAppCta` + `EndAppCta`, keep campaign `tool_pack-year-calculator` (existing tool campaign naming; do not rename, Amplitude history).
- staticRoutes: bump `lastModified` for this path to the new date if a constant exists or add one.

## Schema

Keep `buildWebApplicationJsonLd` + `buildHowToJsonLd` (steps match section 1). Add FAQ JSON-LD only if `FaqSection` does not already emit it (inventory shows FAQPage is emitted). Optionally add `buildArticleJsonLd` (MedicalWebPage) with dates; don't duplicate FAQ.

## Assets

None new. Table is HTML. No images of lungs.

## QA acceptance

- `npm run build` passes (incl. seo-check) and `npm run seo:qa -- /tools/pack-year-calculator --keyword "pack year calculator"` prints "all mechanical checks passed".
- 40-point rubric ≥ 34/40 with no critical fail.
- Formula and every table value arithmetically correct; every screening number matches the sources above.
- Quick answer above the calculator; ≥ 2 new inbound links live in the diff.
- Calculator component behavior unchanged.

## Risks

- The thresholds change over time (NHS rollout). Wording "where it is offered" keeps it safe.
- The hyphen: keep "pack-year" out of title/H1 so the exact match works; body may use either.
