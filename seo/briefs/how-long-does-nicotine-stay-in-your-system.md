# Brief: BLO-53, refresh /how-long-does-nicotine-stay-in-your-system

**Job type:** Refresh (existing live page, 1,566 words in TSX, indexed, no real visibility). Keep URL, H1 intent and `PUBLISHED`. Update `MODIFIED` to 2026-11-12.
**Target file:** `src/app/how-long-does-nicotine-stay-in-your-system/page.tsx`
**Primary keyword:** how long does nicotine stay in your system (US 49,500/mo, low competition). Secondary: how long does it take nicotine to leave your system (12,100), cotinine detection time, how long does nicotine stay in urine / blood / saliva / hair.
**Reader:** an adult who just quit or is about to take a nicotine/cotinine test (insurance, job, surgery) and wants a number by test type. Often anxious. Secondary reader: wants to know when withdrawal ends.
**Intent:** informational / factual lookup. Page must not become a "how to pass a nicotine test" or "detox" page, and must not claim Blou speeds clearance.

## Title/meta policy
Page is live and indexed but unranked (pos 46). Existing title is 46 chars and fine. Risk note: keep H1 and title intent. Allowed: tighten meta description to 120-160 chars and lead with the answer by test type. Keep keywords array, primary first.

## Top of page
- ArticleHeader intro: 2 short sentences, answer first (nicotine itself clears in about a day or two; tests look for cotinine, which lasts longer, window depends on the test).
- QuickAnswerBox: answer by test type in 2-4 sentences plus 3 facts.
- TOC kept; add "Detection windows table" and "Pouches, vapes and patches" entries.

## Outline (H2s)
1. Quick answer (by test type, plus note that it varies by how much and how long you used).
2. Nicotine vs cotinine: why tests look for cotinine. Half-life of nicotine 0.5-3 hours, cotinine about 15-20 hours (PhenX Toolkit, derived from Benowitz et al.). Cotinine is measured in blood, urine or saliva.
3. Detection windows by test type: a real `<table>` (Test | What it detects | Typical window | Note). Rows: blood, urine, saliva, hair. Every window needs a source from the list below. If a window cannot be sourced to an approved publisher, say "varies, ask the lab" rather than invent a number. Do NOT keep the current unsourced figures (e.g. "3-4 days urine", "3 weeks blood") unless a source is found. State clearly that cut-off levels differ by lab (PhenX: smoker/non-smoker cutpoint 3-10 ng/mL, depends on secondhand smoke exposure).
4. What changes the window: amount and how long you used, metabolism (CYP2A6 is the main enzyme, only if sourced), age, menthol, kidney function. Keep only sourced items; drop "urine pH speeds excretion" and "drink water" claims unless sourced. FAQ answer on water: no evidence it meaningfully changes it, only if sourced; otherwise say "we found no reliable evidence" without numbers.
5. Nicotine pouches, vapes, patches and gum: all nicotine sources produce cotinine; a test cannot tell the source (needs a source; if none, phrase as "tests look for cotinine, a breakdown product of nicotine from any source"). Link /zyn-withdrawal, /guides pages for vaping where they exist.
6. Clearance vs withdrawal: keep the short timeline but source it. NCI withdrawal fact sheet: symptoms usually worst in the first week, peak around the first 3 days, ease over the first month, some people have symptoms for months; cravings can start within an hour or two of last use. Anxiety can begin within 24 hours. Smokefree.gov: worst symptoms last a few days to a couple of weeks. NHS: carbon monoxide halves by 8 hours, normal by 48 hours. Remove "nicotine fully gone at 48-72 hours" unless sourced.
7. InlineAppCta after section 3 (first useful section), `campaign` = `article_how-long-does-nicotine-stay-in-your-system`. Copy: tracking smoke-free time and SOS craving help only. Never say Blou clears nicotine or helps pass a test.
8. FAQ (6-8, answer-first, sourced numbers only): how long in blood; in urine; in saliva; in hair; how long does it take nicotine to leave your system after quitting; does vaping/pouch show up; does NRT show up; how long do withdrawal symptoms last; can I speed it up.
9. Sources section (new; page has none today).
10. EndAppCta.

## Product/factual constraints (from seo/blou-profile.md)
- iPhone only, iOS 17+. Features: photo timeline, lung checks, SOS craving help, milestone timeline. Pricing wording from `PRICING_SHORT` / `PRICING_CTA_NOTE` in `src/lib/site.ts`; never "free app". Website tools/guides are free.
- No ratings, user counts, success rates. No "cures/treats/clinically proven". No medical advice; say a clinician or lab can tell you the cut-off for a specific test.
- Every number needs a source from the approved list and must appear in Sources. No em dashes (use commas/periods; en dash only in numeric ranges). US spelling, grade 8 max, short paragraphs, second person, no AI filler.
- Do not fetch smokefree.gov nicotine-patch page (404), PubMed, ZipRecruiter. MedlinePlus lab-test URLs 404 and NCBI Bookshelf is behind a bot wall; do not retry them.

## Sources the writer may use (verified reachable 2026-11-12)
- PhenX Toolkit, biochemical verification (cotinine) protocol, https://phenxtoolkit.org/protocols/view/91709: nicotine half-life 0.5-3 h; cotinine about 15-20 h in plasma, essentially the same in serum, urine, saliva; cutpoint 3-10 ng/mL. Cite also Benowitz NL et al. Biochemical Verification of Tobacco Use and Abstinence: 2019 Update. Nicotine Tob Res. 2020;22(7):1086-1097, doi 10.1093/ntr/ntz132.
- NCI withdrawal fact sheet, https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/withdrawal-fact-sheet (symptom timing, cravings).
- Smokefree.gov, https://smokefree.gov/challenges-when-quitting/withdrawal/understanding-withdrawal (worst symptoms a few days to a couple of weeks; first week highest relapse risk).
- NHS, https://www.nhs.uk/better-health/quit-smoking/ (8 h, 48 h, 72 h body changes).
- NHS withdrawal symptoms page, https://www.nhs.uk/better-health/quit-smoking/staying-smoke-free/managing-nicotine-withdrawal-symptoms
- Blood/urine/saliva/hair detection windows: NOT yet confirmed from an approved source. The writer should try one more approved/peer-reviewed source (Benowitz 2020 full text via doi.org/ PMC, or a CDC/NIH page); if none loads, use qualitative wording and no day counts.

## Links
- In (edit these pages to link to it, at least 2): /nicotine-withdrawal-timeline, /quit-smoking-timeline (or /guides/what-happens-after-3-days), /zyn-withdrawal.
- Out (3+): /nicotine-withdrawal-timeline, /quit-smoking-timeline, /guides/what-happens-after-1-day, /guides/what-happens-after-3-days, /zyn-withdrawal, /quit-smoking-app-for-iphone (conversion).
- Add `RelatedGuides` out if the component is used on comparable pages.

## Schema
`buildArticleJsonLd` (isMedical true, MedicalWebPage) plus `buildFaqJsonLd` matching the FaqSection items (missing today). Breadcrumbs kept.

## QA acceptance
- `npm run seo:qa -- /how-long-does-nicotine-stay-in-your-system --keyword "how long does nicotine stay in your system"` passes; rubric score 32+/40 with no critical fails.
- First 2-4 sentences answer by test type; detection table present; every figure sourced and listed in Sources; FAQ JSON-LD present; one InlineAppCta and one EndAppCta with the campaign above; 2+ inbound links added; sitemap/staticRoutes entry unchanged.
- No claim that the app speeds clearance or helps pass a test.

## Risks
Unsourced detection windows are the main risk; prefer fewer numbers over unsourced ones. Existing page has several unsourced numbers that must be removed or sourced.
