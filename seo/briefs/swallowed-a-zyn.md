# Brief: BLO-33 New page /swallowed-a-zyn

- Job type: create. No page covers swallowing a pouch or Zyn spit (grep of src for "swallow" only hits unrelated gum/lozenge/Chantix copy). /are-zyns-bad-for-you covers general risk, a different intent.
- Target file: src/app/swallowed-a-zyn/page.tsx, modeled on src/app/zyn-withdrawal/page.tsx. Add staticRoutes entry (group "Nicotine pouches").
- Cluster: swallowed a zyn pouch. Primary keyword: "swallowed a zyn". Secondary: "what happens if you swallow a zyn", "what happens if you swallow a zyn pouch", "accidentally swallowed a zyn", "can you swallow zyn spit", "do you swallow zyn spit".
- Evidence: Keyword Planner US 2026-10-27, LOW competition: 3,600 / 2,900 / 2,400 / 1,900 / 1,900 / 1,600 monthly. SERP is brand blogs and scraped spam; no NHS/CDC/poison-center page.

## Reader and intent
Informational, troubleshooting, often worried and on a phone right now. Two readers: (1) an adult who swallowed a pouch or spit, (2) a parent or pet owner whose child or pet swallowed one. Page must not become a general "are Zyns bad" article.

## Title/meta policy
New page. Title 60 chars or fewer, e.g. "Swallowed a Zyn? What Happens and What to Do". Description 120-160 chars, answer-first. H1 matches.

## Top of page
Poison-control notice above the fold (before or inside the quick answer): "Child or pet swallowed a pouch: call Poison Help 1-800-222-1222 now (US)." Then QuickAnswerBox, 2-4 sentences: one pouch swallowed by an adult usually causes at most stomach upset, nausea or vomiting; watch for symptoms; get help if symptoms are severe or you swallowed several; swallowing spit is common but can irritate the stomach and cause hiccups. No "harmless" wording.

## Outline (H2s in query language)
1. Call Poison Help if a child or pet swallowed one (emergency box, 1-800-222-1222, webpoisoncontrol.org, 911 for severe symptoms).
2. What happens if you swallow a Zyn pouch (adult): usual effects, timing, why.
3. Symptoms to watch for (table: mild vs go-to-care-now). Only symptoms listed on cited sources.
4. What to do right now (steps: do not induce vomiting unless told, rinse mouth, call Poison Help, note brand/strength/time).
5. Can you swallow Zyn spit? Nicotine in saliva, stomach irritation, hiccups, nausea; spitting is the norm. Link to /are-zyns-bad-for-you.
6. Why this keeps happening (pouch slips, sleeping with one in, gum tissue) and gentle "if you want to cut down" bridge. InlineAppCta after this section.
7. If swallowing a Zyn made you want to stop: short bridge to /quit-zyn, /zyn-withdrawal, /tools/nicotine-pouch-calculator.
8. FAQ (5-7): can you swallow zyn spit; what happens if you swallow a zyn pouch; accidentally swallowed a zyn; do you swallow zyn spit; can a child die from swallowing a pouch (answer: call Poison Help, keep out of reach, no numbers unless sourced); should I make myself throw up (no, ask Poison Help); how long do effects last (only if sourced).
9. Sources, EndAppCta.

## Product/factual constraints
- Approved: Blou is an iPhone app with photo timeline, lung checks, SOS craving help, milestone timeline. Pricing only via PRICING constants. No "free app".
- Every health fact needs a source from the approved list. No mg toxicity thresholds, lethal dose or time-course numbers unless the cited page states them. Do not state pouch nicotine content unless from FDA/Zyn authorization source already used on /zyn-vs-cigarettes.
- No "it's harmless", no diagnosing, no medical advice replacement; say Blou does not treat poisoning.
- No testimonials, ratings, counts. No em dashes. 7th-grade level. US spelling.
- Do not fetch smokefree.gov nicotine patch page, PubMed, ZipRecruiter.

## Sources (3-8)
America's Poison Centers / poison.org (nicotine), CDC/NIOSH nicotine toxicity or CDC nicotine pouch page, FDA nicotine pouch / Zyn page, MedlinePlus nicotine poisoning, Truth Initiative on pouches, NHS where relevant. Writer verifies each by fetching before citing.

## Links and conversion
- Campaign `article_swallowed-a-zyn`; InlineAppCta after section 6; EndAppCta at end.
- Out (3+): /quit-zyn, /zyn-withdrawal, /are-zyns-bad-for-you, /zyn-vs-cigarettes, /tools/nicotine-pouch-calculator.
- In (2+ existing pages must link to the new page): /are-zyns-bad-for-you, /zyn-withdrawal (and /quit-zyn if natural). Add staticRoutes entry.

## Schema
buildArticleJsonLd (isMedical) with citations + buildFaqJsonLd matching FaqSection. Breadcrumbs.

## QA acceptance
- Passes `npm run seo:qa -- /swallowed-a-zyn --keyword "swallowed a zyn"`, at least 30/40 (project target 35), no critical fails.
- Poison Help number and child/pet emergency visible above the fold.
- `npm run build` passes; page in sitemap/staticRoutes; 2+ inbound links.

## Risks
Medical/poisoning topic (risk +2): unsourced specifics and reassurance wording are the main failure modes. Keep adult-vs-child distinction explicit.
