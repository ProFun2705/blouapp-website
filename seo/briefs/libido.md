# Brief: BLO-26 Refresh /guides/libido

- **Issue:** BLO-26 (refresh, source:audit, priority 2)
- **Job type:** Refresh in place. Keep URL and slug. Not a new page.
- **Target file:** `src/lib/blouGuides.ts` (entry `slug: "libido"`, ~line 4802). Add a per-guide `references` field as in `dreams-and-sleep` / `tingling-hands-and-feet`. Check whether an `SEO_TITLE_OVERRIDES` entry exists; add one only if the title is over 60 chars.
- **Primary keyword:** "libido after quitting smoking". Secondary: "sex drive after quitting smoking", "low libido after quitting smoking", "does quitting smoking increase libido", "erectile dysfunction after quitting smoking", "quit smoking sexual function".
- **Campaign:** template default `guide_libido`; keep.

## Why
GSC 2026-09-27..2026-10-24: impressions 149 to 3, avg position 9.0. URL Inspection 2026-10-27: crawled, not indexed (last crawl 2026-05-20). Page is 1,108 words, 3 FAQs, no cited sources, content untouched since 2026-05-20. Unsourced claims to remove or source: "roughly twice the risk of ED", "3-6 months" improvement, "within 2-4 weeks" dip, "circulation improvement begins within weeks", "lower testosterone", "sperm quality", "quitting reduces inflammation markers" style claims, "studies show significant improvement".

## Reader and intent
Adult in the first weeks or months off nicotine, wondering if low sex drive is withdrawal, if it will come back, and whether quitting helps erections. Informational and reassurance, mildly embarrassing topic, so tone is calm, medical and non-explicit. First answer must say: for most people sexual function is better or no worse over the long run after quitting (sourced: smoking harms blood flow and is linked to erectile problems; quitting is linked to improvement), a short dip in desire can happen while withdrawal affects mood and sleep (honest: there is no research timeline for libido alone; use NHS withdrawal timeline for overall symptoms), and ongoing problems are worth a GP visit.
Must not become: an ED treatment guide, a sex-advice page, a supplement/testosterone page, or anything explicit. Do not promise a recovery timeframe or percentage that the sources do not give.

## Title/meta policy (risk accepted)
Page is out of the index with 3 impressions: little to lose. Keep the title "Libido after quitting smoking: sex drive changes explained" (57 chars) unless the writer finds a clearer one. Rewrite `summary` (meta) to 120-160 chars leading with the answer. Update `dateModified` to the publish date.

## Top of page
- `quickAnswer` (2-4 sentences): see intent.
- `quickFacts` (3), each sourced: smoking narrows blood vessels and raises risk of erectile problems (NHS/CDC); a dip in desire during the first weeks can come from withdrawal effects such as poor sleep, irritability, low mood (NHS withdrawal list); see a GP if problems last or you also have other symptoms.

## Outline (`articleSections`)
1. How smoking affects sex drive and sexual function (blood flow and ED risk, women and men, sourced; keep non-explicit). Drop unsourced testosterone and sperm claims unless CDC/NIH backs them.
2. What happens to libido when you quit: first weeks (withdrawal symptoms that can lower desire: sleep, mood, irritability, anxiety; NHS says most symptoms ease in 2 to 4 weeks, peak in week 1), then the longer run (sourced improvement in erectile function after quitting). Say plainly that individual timing varies.
3. Libido timeline table: Weeks 1-4 / Months 1-3 / Beyond, columns "What may happen" and "Source or note". Only rows with sources; label the rest "varies".
4. What helps while you wait (sleep habits, movement, managing cravings and stress, talk with partner, SOS craving help in Blou; no supplements).
5. Other causes of low libido to rule out (stress, depression, some medicines including antidepressants, alcohol, low testosterone, relationship issues; ask a doctor; never stop prescribed medicine on your own, say this explicitly).
6. When to see a doctor (problems persist after a few months smoke-free, ED with chest pain, low mood or depression, any concern). Note: a quit medicine such as varenicline or bupropion has its own label info; talk to a pharmacist/GP, do not give dosing advice.
Add `InlineAppCta` after section 2. Add `/guides/anxiety` or `/guides/depression` only if those slugs exist; verify.

## FAQ (6, from GSC-style queries)
Does quitting smoking increase libido? · Why is my sex drive low after quitting smoking? · How long does low libido last after quitting? · Does quitting smoking help erectile dysfunction? · Can quitting vaping or nicotine pouches affect libido? · When should I see a doctor about libido after quitting?

## Constraints (profile)
iPhone only app; features: photo timeline, lung checks, SOS craving help, milestones; no free-app, ratings, user counts, cure/diagnose/treat claims. Every number sourced and listed in Sources. No em dashes, grade <= 8, US spelling. Vaping is a supported quit topic, but do not recommend e-cigarettes as a quit method. Do not fetch smokefree.gov nicotine-patch page, PubMed or ZipRecruiter.

## Sources (writer verifies each by fetching, uses only what the page actually says)
NHS erectile dysfunction causes (https://www.nhs.uk/conditions/erectile-dysfunction/causes/); NHS nicotine withdrawal and quit tips (https://www.nhs.uk/better-health/quit-smoking/); CDC Health effects of smoking (https://www.cdc.gov/tobacco/about/index.html, or its reproductive/sexual health page); NHS low sex drive / loss of libido (https://www.nhs.uk/conditions/low-sex-drive/ or similar); MedlinePlus erectile dysfunction or smoking pages; Surgeon General report on smoking health consequences if a fetchable HHS/NCBI Bookshelf page states the ED link. 3-8 sources total.

## Links
In: confirm `/guides/fatigue`, `/guides/insomnia`, `/guides/mood-swings`, `/guides/what-happens-after-3-months` link to or list `/guides/libido` in relatedSlugs; add it to at least 2 of them. Out: `/guides/fatigue`, `/guides/insomnia`, `/guides/mood-swings`, `/guides/what-happens-after-1-month`, `/guides/what-happens-after-3-months`, `/quit-smoking-timeline`, `/guides`.

## QA acceptance
`npm run build` passes; `npm run seo:qa -- /guides/libido --keyword "libido after quitting smoking"` passes; 40-point rubric >= 34; every health claim sourced, no invented percentages, doctor block present. Recheck indexing by 2026-12-17.
