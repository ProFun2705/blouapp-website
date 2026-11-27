# Brief: BLO-40 Refresh /nicotine-withdrawal-symptoms into the symptom hub

- **Issue:** BLO-40 (refresh, source:audit, priority 3)
- **Job type:** Refresh in place. Keep URL `/nicotine-withdrawal-symptoms`. Not a new page.
- **Target file:** `src/app/nicotine-withdrawal-symptoms/page.tsx` (150 lines, 435 words now). Model structure on `src/app/zyn-withdrawal/page.tsx`. Inbound-link edits in other pages listed below.
- **Primary keyword:** "nicotine withdrawal symptoms". Secondary: "symptoms after quitting smoking", "quit smoking withdrawal symptoms", "nicotine withdrawal symptoms list", "nicotine withdrawal headache".
- **Campaign:** `article_nicotine-withdrawal-symptoms` (keep).

## Why
Indexed but 0 impressions in both 28-day windows for the head term. Thinnest hub on the site, only 2 internal links in. Symptom guides hold the impressions (diarrhea 605, dreams-and-sleep 367, joint-pain 242, nausea 154, heart-palpitations 119, night-sweats 93, dizziness 84) and 41 of 56 are unindexed (BLO-24), so a strong hub that links every symptom guide helps crawl and discovery.

## Reader and intent
Person who just quit (or is about to) and feels something odd: "is this nicotine withdrawal, how bad does it get, how long, when do I worry?" Informational and reassurance, mixed with navigation to a specific symptom. First answer must say: common symptoms (irritability, anxiety, low mood, trouble concentrating, sleep trouble, cravings, increased appetite, cough, headaches, constipation), that they usually peak in the first days to first week and fade over about 2 to 4 weeks (NHS/CDC/Smokefree.gov wording, verified), and that chest pain, severe breathlessness or thoughts of self-harm are not "just withdrawal". Must not become a medical advice page, a timeline duplicate (`/nicotine-withdrawal-timeline` owns day-by-day), or a vaping page (`/vape-withdrawal-symptoms` exists; link to it).

## Title/meta policy (risk note)
Page has 0 impressions, so nothing ranked to lose. Keep the title short and query-led, <= 60 chars, e.g. "Nicotine withdrawal symptoms: list, timing, relief". Meta 120-160 chars, includes "nicotine withdrawal symptoms". Update `MODIFIED` to the publish date. H1 stays "Nicotine withdrawal symptoms".

## Top of page
- `QuickAnswerBox`: 2-4 sentences, answer-first (symptoms, peak, duration, when to get help), sourced. `facts`: 3 short sourced facts.
- `TableOfContents` (page will exceed 1,000 words).

## Outline (H2s in query language)
1. Quick answer (box).
2. Common nicotine withdrawal symptoms: short list of the main ones with one line each (what it feels like), tied to sources.
3. How long nicotine withdrawal symptoms last: peak and fade, sourced; link `/nicotine-withdrawal-timeline` and `/quit-smoking-timeline`. Say timing varies.
4. All symptom guides (the hub table): table of every published symptom guide in `src/lib/blouGuides.ts` (category "symptom", `published !== false`) with symptom, one-line description and link to `/guides/<slug>`. Writer should generate the rows from `blouGuides` data (filter category symptom) or hand-write them and verify slugs exist; group by body area (mind and mood, sleep and energy, body and breathing, digestion, mouth and skin, other). Anxiety links to `/quit-smoking-with-anxiety` as now, plus `/guides/anxiety`. Include `InlineAppCta` right after section 3 (before the table).
5. What helps with withdrawal symptoms: sourced, general tips only (NHS/Smokefree.gov/CDC: cravings pass, delay, drink water, move, NRT or prescription options to discuss with a clinician or pharmacist). No dosing, never tell anyone to stop a medication. Mention SOS craving help only as approved.
6. When to call a doctor: chest pain, severe shortness of breath, thoughts of self-harm (988 in the US, per the site's existing wording if present, otherwise cite), mood low for 2 weeks (only if a source says so), emergency symptoms. Not medical advice line.
7. FAQ (6 to 8, from GSC-style queries): How long do nicotine withdrawal symptoms last? · What are the first signs of nicotine withdrawal? · What is the worst day of nicotine withdrawal? · Can nicotine withdrawal cause headaches / nausea / chest tightness? (link guides) · Are withdrawal symptoms a sign something is wrong? · Does nicotine withdrawal feel different from vaping withdrawal? (link vape page) · Does NRT help? Keep existing four, tightened. FAQ JSON-LD via `buildFaqJsonLd` (add alongside the article JSON-LD; check whether `FaqSection` already emits it to avoid duplicates).
8. Sources section with publisher names and links.
9. `EndAppCta` (campaign above). Keep "Week one playbook" button.

## Product/factual constraints (from seo/blou-profile.md)
- iPhone only, iOS 17+. Features: photo timeline, lung checks, SOS craving help, visual milestone timeline. Nothing else.
- Pricing wording: use `PRICING_SHORT`/`PRICING_CTA_NOTE`. Never "free app". Site guides are free to use; that is the only free claim.
- No star ratings, review/download/user counts, success rates, testimonials. Blou does not cure, treat, diagnose or replace medical advice; no "clinically proven".
- Every number and symptom-timing claim needs a source from the approved list and must appear in Sources. Remove the current vague unsourced "How long" FAQ numbers unless sourced.
- No em dashes (en dash only in number ranges), grade <= 8, US spelling, short paragraphs, second person, warm tone, no AI filler words.
- Do not fetch the smokefree.gov nicotine-patch page (404), PubMed or ZipRecruiter.

## Sources (writer fetches and uses only what the page says; 3 to 8)
NHS "Quit smoking" / withdrawal symptoms (https://www.nhs.uk/better-health/quit-smoking/); CDC "Benefits of quitting" / "Withdrawal" (https://www.cdc.gov/tobacco/); Smokefree.gov "Withdrawal symptoms" or "Dealing with cravings" (https://smokefree.gov/); MedlinePlus "Nicotine and tobacco" (https://medlineplus.gov/); NCI "Harms of cigarette smoking and health benefits of quitting" (https://www.cancer.gov/); optionally Truth Initiative. Reuse sources already cited in the `/guides/cravings` and `/guides/headaches` entries where they match.

## Links
- In (add or confirm, at least 6): `/guides` (hub card or intro sentence), `/quit-smoking-timeline`, `/nicotine-withdrawal-timeline`, `/guides/diarrhea`, `/guides/dreams-and-sleep`, `/guides/joint-pain`, `/guides/nausea`, `/guides/heart-palpitations`, `/guides/night-sweats` (top 6 symptom guides; add via `relatedSlugs` or a body sentence per how existing guides link). Do NOT change symptom guide titles (BLO-11 to BLO-14 own those).
- Out (3+): `/nicotine-withdrawal-timeline`, `/quit-smoking-timeline`, `/first-week-quit-smoking`, `/vape-withdrawal-symptoms`, `/quit-smoking-with-anxiety`, `/how-to-quit-smoking`, all symptom guides in the table. Conversion: `InlineAppCta`, `EndAppCta`; link `/quit-smoking-app-for-iphone` once in the "what helps" section if natural.
- Add `RelatedGuides` if the component fits; keep entry in `src/lib/staticRoutes.ts`.

## Assets
None required. Optional simple table; no stock photos.

## Schema
`buildArticleJsonLd` (isMedical, MedicalWebPage, keep reviewer/author) + `buildFaqJsonLd`. Breadcrumbs stay.

## QA acceptance
`npm run build` passes; `npm run seo:qa -- /nicotine-withdrawal-symptoms --keyword "nicotine withdrawal symptoms"` passes; 40-point rubric >= 34; 1,200+ words; every symptom guide listed links to an existing published guide; every health claim sourced; no invented numbers; title <= 60, meta 120-160.

## Risks and open questions
Many linked guides are unindexed; that is intended. Red-flag wording must stay general and sourced. Avoid duplicating the timeline page's day-by-day content.
