# Brief: BLO-50 Push /zyn-vs-cigarettes to page 1

- Job type: refresh (surgical). Existing page /zyn-vs-cigarettes matches the intent; do not create a new page.
- Target file: src/app/zyn-vs-cigarettes/page.tsx
- Cluster: zyn vs cigarettes. Primary keyword: "zyn vs cigarettes". Secondary: "how much nicotine is in a cigarette vs zyn", "1 zyn vs 1 cigarette", "zyn vs cigarettes nicotine content".
- Evidence: 107 impressions, 0 clicks, position 11.0 (2026-10-06..11-02). Impressions are spread over small nicotine-content queries.

## Reader and intent
Informational/comparison. An adult asking "how much nicotine is in a Zyn vs a cigarette" and "is 1 Zyn like 1 cigarette". First screen must give the number comparison, then the caveat that it is not like-for-like.

## Title/meta policy
Keep title and meta unchanged (position 11, title already keyword-first). Risk: any change at position 11 can reset ranking. Bump MODIFIED only.

## Top of page
1. Keep QuickAnswerBox, but lead with the number line: cigarette about 12 mg in the tobacco, smoker absorbs 1-2 mg (NIDA); Zyn pouch labeled 3 or 6 mg (FDA), absorption varies.
2. Add a small sourced table right after the quick answer: rows "Nicotine in the product", "Nicotine absorbed", "Time to peak blood level". Use only numbers already in SOURCES (33-brand analysis, NIDA, FDA ZYN authorization, 2022 pharmacokinetic study: 60-65 min vs 7 min).

## Outline changes
- New H2 "1 Zyn vs 1 cigarette" (id `one-vs-one`), 3-5 short sentences, from the 2022 study and Frontiers 2024 study already in SOURCES: no reliable equivalence; single pouch can raise blood nicotine as much as a cigarette but slower; depends on brand, strength, time in mouth. Link to nicotine pouch calculator. Add to TableOfContents.
- New FAQ: "Is 1 Zyn the same as 1 cigarette?" (replace/merge with existing "Is one Zyn equal to a cigarette?" so there is no duplicate; make the question text match the query "1 zyn vs 1 cigarette"). Optionally add "Zyn vs cigarettes nicotine content" wording to the first FAQ. Total FAQs 6-7.
- Keep the rest of the page as is. Do not restate numbers differently from the existing page.

## Constraints
- Every number needs a source in SOURCES (existing ones suffice). No new health numbers. No "free" claims, no ratings/user counts. No em dashes. 7th-grade level.
- Do not say Zyn is safe or recommend it as a quit method. Keep FDA/CDC neutral position.
- Pricing text only from site.ts constants (the page uses the app CTA components only).

## Links
- In (edit these pages to link to /zyn-vs-cigarettes): /nicotine-patch-side-effects, /quit-smoking-timeline, and the /guides hub (via the page that renders it / staticRoutes label if hub lists routes).
- Out: /tools/nicotine-pouch-calculator, /are-zyns-bad-for-you, /quit-zyn, /zyn-withdrawal, /how-to-quit-smoking, /quit-smoking-timeline (already present).
- Conversion: existing InlineAppCta and EndAppCta, campaign `article_zyn-vs-cigarettes`.

## Schema
Keep buildArticleJsonLd (isMedical) with citations. FAQ content stays in FaqSection.

## QA acceptance
- Passes `npm run seo:qa -- /zyn-vs-cigarettes --keyword "zyn vs cigarettes"` and scores at least 30/40 with no critical fails.
- `npm run build` passes.
- Title/description unchanged; MODIFIED bumped and staticRoutes lastModified updated.
- New section, table and FAQ present; 3 inbound links added.

## Risks
Internal-link pages may not have a natural spot; add one sentence in a relevant section, not a link dump.
