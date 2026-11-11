# Brief: BLO-42 Refresh /quit-smoking-with-nicotine-lozenge

- **Issue:** BLO-42 (refresh, source:research, priority 2)
- **Job type:** Refresh in place. Keep the URL. Same pattern as BLO-28 (`/quit-smoking-with-nicotine-patch`).
- **Target file:** `src/app/quit-smoking-with-nicotine-lozenge/page.tsx` (rewrite on the patch page pattern).
- **Primary keyword:** "nicotine lozenge". Secondary: "nicotine lozenge to quit smoking", "nicotine lozenge 4mg", "nicotine lozenge 2mg", "how to use nicotine lozenge", "quit smoking lozenges".
- **Campaign:** `article_quit-smoking-with-nicotine-lozenge` (keep).

## Why
Keyword Planner US 2026-11-02: "nicotine lozenge" 18,100/mo, "nicotine lozenges 4mg" 1,900, "nicotine lozenge 2mg" 1,600. Page has 491 words, 4 FAQs, no Sources, 0 GSC impressions. It never says which strength to use, how to use a lozenge, or the daily limits. 2mg vs 4mg is answered mostly in PDFs and brand blogs.

## Reader and intent
Adult who smokes, has or is about to buy lozenges. Informational how-to. First answer: strength by time to first cigarette (within 30 minutes of waking: 4 mg, otherwise 2 mg), let it dissolve slowly (don't chew or swallow), no food or drink 15 minutes before or during, 1 every 1 to 2 hours for weeks 1 to 6 (at least 9 a day), max 20 a day and 5 in 6 hours, step down over 12 weeks.
Must not become: a retail/price page, a patch page, or a gum page (link out).

## Title/meta policy
Page has no impressions, so change is low risk. Title "How to use nicotine lozenges to quit smoking: 2mg vs 4mg" is too long; use "Nicotine lozenge: 2mg vs 4mg and how to use it" (46 chars). Meta 120-160 chars. `MODIFIED` 2026-11-11, keep `PUBLISHED` 2026-05-13.

## Top of page
Intro 2 sentences, `QuickAnswerBox` with the answer above plus 3 facts. How-to steps right after.

## Outline
1. How to use a nicotine lozenge, step by step (HowTo schema)
2. 2mg vs 4mg: which strength (table by time to first cigarette; CDC says 2 mg may be used with the patch)
3. How many lozenges a day and how long (label schedule table: weeks 1-6, 7-9, 10-12; at least 9 a day first 6 weeks; max 20)
4. InlineAppCta
5. Common side effects and what to change (hiccups, heartburn, nausea, sleep; CDC) plus when to stop and ask a doctor (label)
6. Lozenge with the patch (CDC, NHS), link combination NRT and patch page
7. Still craving? Short craving plan, link cravings guide
8. If you smoke while using lozenges (warm; overdose signs and Poison Control)
9. Who should ask a doctor first (label, CDC)
10. Where to get lozenges and free help (NHS, CDC quitline)
11. FAQ 7-8, Sources, EndAppCta

## Product/factual constraints
Copied from seo/blou-profile.md: iPhone only, iOS 17+; features only photo timeline, lung checks, SOS craving help, milestone timeline; pricing only via CTA components; never "free app"; no ratings, counts, success rates, cure claims; no unsourced numbers; no dosing beyond label/CDC/NHS; no em dashes; grade <= 8; US spelling; don't tell anyone to stop prescribed medicine; no retail queries (Walgreens, CVS).

## Sources
1. CDC, How to Use the Nicotine Lozenge
2. DailyMed, Good Sense Nicotine (nicotine polacrilex) lozenge Drug Facts (store-brand OTC label)
3. NHS, Find the best stop-smoking products for you

## Links
In: add links from `/combination-nrt-quit-smoking` and `/quit-smoking-with-nicotine-patch` (already linked from 7+ pages). Out: `/quit-smoking-with-nicotine-gum`, `/quit-smoking-with-nicotine-patch`, `/combination-nrt-quit-smoking`, `/nicotine-patch-vs-gum`, `/guides/cravings`, `/i-smoked-one-cigarette`, `/quit-smoking-help`, `/prepare-to-quit-smoking`, `/tools/nicotine-patch-plan`. `InlineAppCta` after section 3, `EndAppCta` at end.

## Schema
`buildArticleJsonLd` (isMedical), `buildFaqJsonLd` via FaqSection, `buildHowToJsonLd`.

## QA acceptance
`npm run build` passes; `npm run seo:qa -- /quit-smoking-with-nicotine-lozenge --keyword "nicotine lozenge"` passes; 40-point rubric >= 34; every number sourced; no prohibited claims.

## Risks
Cannibalization with gum page: keep gum comparison short. Brand names (Nicorette) only as a mention, no claims.
