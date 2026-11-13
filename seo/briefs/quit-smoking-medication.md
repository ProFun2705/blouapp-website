# Brief: BLO-54 New page /quit-smoking-medication

- **Issue:** BLO-54 (new-content, source:research, priority 2)
- **Job type:** Create. No page covers the overview (inventory 2026-11-09). Hub for the single-product pages (patch, gum, lozenge, varenicline, bupropion).
- **Target file:** `src/app/quit-smoking-medication/page.tsx` plus entry in `src/lib/staticRoutes.ts`.
- **Primary keyword:** "quit smoking medication". Secondary: "smoking cessation medication", "quit smoking aids", "medication to quit smoking", "FDA approved quit smoking medications".
- **Campaign:** `article_quit-smoking-medication`.

## Why
Keyword Planner US 2026-11-09: "smoking cessation medication" 8,100, "quit smoking medication" 5,400, "quit smoking aids" 9,900. Cluster 8,000 to 10,000 a month. No GSC impressions yet.

## Reader and intent
Adult who smokes and wants to know which medicines exist and which to ask about. Informational and comparison. First answer: seven FDA-approved options (patch, gum, lozenge, inhaler, nasal spray, varenicline, bupropion SR); patch, gum, lozenge are sold without a prescription, inhaler, nasal spray and the two pills need one; a doctor or pharmacist helps pick; medicine works best with support.
Must not become: a dosing guide for any one product (link out), a retail page, or advice to start or stop a prescription.

## Title/meta policy
New page. Title "Quit smoking medication: all 7 options compared" (under 60). Meta 120-160 chars.

## Top of page
Intro 2 sentences, `QuickAnswerBox` with the answer above. Then comparison table early.

## Outline
1. Quick answer
2. The 7 FDA-approved options at a glance (table: how it comes, prescription or not, how it works, link to guide)
3. Nicotine replacement vs pills (how each works)
4. InlineAppCta
5. How to choose: questions to take to a doctor or pharmacist (no individual advice)
6. Using more than one (combination NRT; CDC/NHS)
7. Side effects to watch by option, and who should ask first
8. Medicine plus support (quitline, Blou is not medication)
9. FAQ 6-7, Sources, EndAppCta

## Constraints
Copied from seo/blou-profile.md: iPhone only, iOS 17+; features only photo timeline, lung checks, SOS craving help, milestone timeline; pricing only via CTA components; never "free app"; Blou is not medication, not a medical device, does not replace a doctor; no ratings, counts, success rates; no unsourced numbers; no effectiveness percentages; no advice to start or stop prescribed medicine; no e-cigarettes as a quit method; no em dashes; grade <= 8; US spelling.

## Sources
CDC medications overview and per-product "how to use" pages (inhaler, nasal spray, gum, lozenge, patch, varenicline, bupropion SR), NHS stop-smoking treatments, NHS nicotine-free medicines, MedlinePlus bupropion.

## Links
In: add links from `/quit-smoking-without-nrt`, `/combination-nrt-quit-smoking`, `/nrt-and-quit-smoking-app`. Out: the five single-product pages, `/combination-nrt-quit-smoking`, `/nicotine-patch-vs-gum`, `/nrt-and-quit-smoking-app`, `/quit-smoking-help`, `/quit-smoking-app-for-iphone`. InlineAppCta after the table section.

## Schema
`buildArticleJsonLd` (isMedical), FAQ via FaqSection.

## QA acceptance
`npm run build` passes; `npm run seo:qa -- /quit-smoking-medication --keyword "quit smoking medication"` passes; rubric >= 34/40; every number sourced.

## Risks
Medical-claim risk high: no effectiveness figures (none fetched from a reachable source). Cannibalization with product pages: keep per-product detail to one table row each.
