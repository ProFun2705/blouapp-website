# Brief: BLO-12 Snippet + top-section refresh for /guides/dreams-and-sleep

- **Issue:** BLO-12 (ctr-snippet, source:audit, priority 2)
- **Job type:** Snippet review + refresh of the top section and facts. Keep the URL. Not a new page.
- **Target file:** `src/lib/blouGuides.ts` (entry `slug: "dreams-and-sleep"`) and `SEO_TITLE_OVERRIDES` in `src/app/guides/[slug]/page.tsx`. The per-guide `references` field already exists (added in BLO-11).
- **Primary keyword:** "vivid dreams after quitting smoking". Secondary: "how long do vivid dreams last after quitting smoking", "nightmares after quitting smoking", "quit smoking dreams", "nicotine patch vivid dreams", "Chantix vivid dreams", "vivid dreams after quitting vaping", "unusually vivid dreams".
- **Campaign:** template already uses `guide_dreams-and-sleep` for both CTAs; keep it.

## Why
GSC 2026-09-29..2026-10-26: 367 impressions, 0 clicks, position 8.4 (prior 28 days: 60 impressions, 0 clicks). Almost all queries are anonymized; the one visible query is "unusually vivid dreams" (position 3). Inventory: 1,132 words, 4 FAQs, linked from 4 pages, but not from `/guides/insomnia`. The current snippet promises a vague "days to a few weeks", gives no reason to click, and the meta is 165 chars (cut off). Several claims have no source (a "week 4" timeline for dreams, caffeine metabolism, "dose adjustment often helps").

## Reader and intent
Someone in their first days or weeks off cigarettes, vapes or pouches (often on NRT or Chantix) who is having intense, strange or bad dreams and wonders if it is normal and when it stops. Informational/reassurance. First answer must say: it is common and usually temporary, the honest time frame (sleep problems from withdrawal peak in week 1 and ease within 2 to 4 weeks; there is no exact research timeline for dreams alone), the two medicine causes (24-hour nicotine patch, varenicline), and when to get help. Must not become a general insomnia article (that is `/guides/insomnia`; link to it instead) or a dream-interpretation page.

## SERP notes
Forums (Reddit, EX community, HealthUnlocked), Healthline/Verywell-style articles, and quit-service pages (Quit Victoria) about patches. Gap: few pages give an honest, sourced time frame plus the one concrete fix that works for patch users (take the patch off at bedtime, label advice) and the Chantix side-effect note together.

## Title/meta policy (change approved, low risk)
Position 8.4 with 0 clicks on 367 impressions: there are no clicks to lose.
- **SEO title:** add `"dreams-and-sleep": "Vivid dreams after quitting smoking: why and how long"` to `SEO_TITLE_OVERRIDES` (52 chars + " | Blou" = 59).
- **H1 (`title`):** "Vivid dreams after quitting smoking: why and how long they last" (exact keyword at the start).
- **Meta (`summary`):** 140-155 chars. Leads with the time frame and names the patch and Chantix as reasons to click.

## Top of page
- `quickAnswer` (2-4 sentences): vivid dreams are common and usually temporary; withdrawal sleep problems peak in the first week and ease within 2 to 4 weeks (Hughes 2007; NHS 3 to 4 weeks for symptoms overall); a 24-hour nicotine patch or varenicline can cause them too.
- `quickFacts` (3): Hughes time course; patch label: remove at bedtime if you get vivid dreams; varenicline lists unusual dreams or nightmares as a common side effect (MedlinePlus).
- `detail`: one sentence: likely reason is lighter sleep with more brief wake-ups, so you remember more dreams (framed as "a likely reason", not a fact).

## Outline (`articleSections`)
1. **Why you get vivid dreams after quitting** — trouble sleeping is a listed withdrawal symptom (NHS); Hughes lists increased dreaming as a possible abstinence effect; lighter sleep = more recall (hedged); medicine causes.
2. **How long vivid dreams last** — honest: no exact timeline for dreams alone; sleep problems peak in week 1 and last 2 to 4 weeks (Hughes); symptoms average 3 to 4 weeks, sometimes months (NHS). Short day-range breakdown without invented numbers.
3. **Nicotine patches, Chantix and dreams** — patch label: if vivid dreams or sleep problems, remove at bedtime and put a new one on in the morning (DailyMed label). Varenicline: unusual dreams/nightmares and trouble sleeping are common side effects (MedlinePlus, NHS lists difficulty sleeping). Never tell anyone to stop a prescribed medicine; say talk to doctor/pharmacist.
4. **How to sleep better while you quit** — caffeine earlier (caffeine levels rise after quitting, Benowitz 1989), regular wake time, short wind-down, write dream down and let it go, use SOS craving help if a smoking dream leaves a craving. Drop the unsourced "fragments REM" alcohol line.
5. **When to get help** — call a doctor or 111 if irritable, aggressive, anxious or depressed on varenicline (NHS); sleepwalking or mood changes on varenicline: call doctor right away (MedlinePlus); thoughts of self-harm: 911/988 in the US, 999 in the UK.

Rewrite `typicalDuration`, `commonTriggers`, `whenToSeekCare`, `whatToExpectNext` to match the sourced time course.

## FAQ (5-6)
How long do vivid dreams last after quitting smoking? · Why do I dream about smoking after I quit? · Can nicotine patches cause vivid dreams? · Does Chantix (varenicline) cause vivid dreams? · Can quitting vaping or nicotine pouches cause vivid dreams? · When should I worry about nightmares after quitting?

## Product/factual constraints (from seo/blou-profile.md)
- iPhone only, iOS 17+. Pricing only via the CTA components (`PRICING_CTA_NOTE`). Never say the app is free.
- Features only: photo timeline, lung checks, SOS craving help, every milestone visualized. Blou supports quitting vaping.
- No ratings, user counts, success rates, no cure/treat/diagnose claims, no Android availability, not a medical device.
- Every number needs a source in the page's Sources list. No em dashes. 7th-grade reading level. No AI filler. US spelling.
- Never tell someone to stop prescribed medication; say "talk to your doctor or pharmacist".

## Sources (must use; per-guide `references`)
1. Hughes JR. Effects of abstinence from tobacco: valid symptoms and time course. Nicotine Tob Res 2007, https://pubmed.ncbi.nlm.nih.gov/17365764/ (insomnia peaks in week 1, lasts 2-4 weeks; increased dreaming a possible effect)
2. NHS Better Health: Managing nicotine withdrawal symptoms, https://www.nhs.uk/better-health/quit-smoking/staying-smoke-free/managing-nicotine-withdrawal-symptoms (trouble sleeping; peak first week; 3 to 4 weeks average)
3. MedlinePlus: Varenicline, https://medlineplus.gov/druginfo/meds/a606024.html (unusual dreams or nightmares; trouble sleeping; sleepwalking/mood changes: call doctor)
4. NHS: Side effects of varenicline, https://www.nhs.uk/medicines/varenicline/side-effects-of-varenicline/ (difficulty sleeping common; mood red flags; 999 for self-harm)
5. DailyMed (NLM): Nicotine Transdermal System label, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=13cdd780-4196-685b-3cab-f9694a327618 (remove at bedtime if vivid dreams)
6. Benowitz NL et al. Persistent increase in caffeine concentrations in people who stop smoking. BMJ 1989, https://pmc.ncbi.nlm.nih.gov/articles/PMC1836474/
7. Keep CDC Benefits of Quitting as general context.

## Links
- In: add `"dreams-and-sleep"` to `relatedSlugs` of `insomnia` and `caffeine-sensitivity`.
- Out: keep `insomnia`, `anxiety`, `what-happens-after-3-days`, `what-happens-after-1-week`; add `cravings` and `caffeine-sensitivity`. Check `how-to-quit-smoking` resolves (it is not a guide slug).
- Conversion: template `InlineAppCta` + `EndAppCta`; no change needed.

## Schema
Template emits MedicalWebPage, FAQPage, Speakable, Breadcrumb; citations follow per-guide references. Bump `dateModified`, set `dateReviewed` to 2026-10-30.

## QA acceptance
- `npm run build` passes (includes `seo-check`).
- `npm run seo:qa -- /guides/dreams-and-sleep --keyword "vivid dreams after quitting smoking"` passes.
- Rendered `<title>` ≤ 60 chars containing the keyword; meta 140-155 chars with a time frame.
- No unsourced numbers (no "week 4" for dreams without the Hughes/NHS framing, no "48–72 hours").
- Linked from `/guides/insomnia` and `/guides/caffeine-sensitivity`.
- 40-point rubric ≥ 34 with no critical fails.

## Risks
- Title/H1 change on a page with 0 clicks: low risk. Recheck CTR by November 20, 2026.
- Cannibalization with `/guides/insomnia`: keep this page about dreams; insomnia gets a link, not a section.
