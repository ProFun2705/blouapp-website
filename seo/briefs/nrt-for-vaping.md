# Brief: BLO-34 New page /nrt-for-vaping

- Job type: create. /quit-vaping (thin) only mentions NRT; /combination-nrt-quit-smoking and /nrt-and-quit-smoking-app are cigarette pages. No page covers NRT when you vape.
- Target file: src/app/nrt-for-vaping/page.tsx modeled on src/app/swallowed-a-zyn/page.tsx. staticRoutes entry (group "Situations and health conditions").
- Cluster: nicotine replacement therapy for vaping. Primary keyword "nicotine replacement therapy for vaping". Secondary: nicotine gum for quitting vaping, nicotine patch for vaping, NRT to quit vaping.
- Evidence: Keyword Planner US 2026-10-27, LOW competition: 3,600 and 720 monthly.

## Reader and intent
Informational/how-to. Adult who vapes daily and wants to stop with patch, gum or lozenge and does not know how to dose it. Not a "vapes as a quit method" page.

## Title/meta
Title 60 chars or fewer, "Nicotine Replacement Therapy for Vaping: A Guide". Description 120-160 chars.

## Top of page
QuickAnswerBox: NRT is licensed for quitting smoking, not vaping (FDA has not approved it for vaping); doctors and the NHS still point vapers to it, usually a patch plus gum or lozenge; no source gives a pod-to-patch conversion, so ask a pharmacist.

## Outline
1. Does NRT work for quitting vaping? (honest: evidence extrapolated from smoking; FDA status).
2. Patch plus fast-acting form (table of forms and their role, NHS).
3. How to pick a strength when you vape (no pod conversion; what to bring to pharmacist; link /tools/nicotine-patch-plan as cigarette-based). InlineAppCta after.
4. Gum or lozenge for urges (link /quit-smoking-with-nicotine-gum, /quit-smoking-with-nicotine-lozenge).
5. How long to use it (NHS about 12 weeks).
6. NRT vs tapering e-liquid strength (NHS).
7. If you also smoke; under 18.
8. FAQ 5-6, Sources, EndAppCta.

## Constraints
- Pricing only via constants; no "free app". No invented numbers: no pod nicotine content, no pod-to-cigarette equivalence, no success rates beyond NHS statements.
- Do not present e-cigarettes as a quit method. Sources: NHS (vaping to quit smoking, how to quit vaping, NRTs), Smokefree.gov, CDC, Truth Initiative.
- Links in from /quit-vaping, /vape-withdrawal-symptoms, /quit-vaping-timeline. Links out: /quit-vaping, /tools/nicotine-patch-plan, /nicotine-patch-vs-gum, /combination-nrt-quit-smoking, /vaping-and-smoking-together.
- campaign: article_nrt-for-vaping. QA: passes `npm run seo:qa -- /nrt-for-vaping --keyword "nicotine replacement therapy for vaping"`, 40-point rubric PASS.
