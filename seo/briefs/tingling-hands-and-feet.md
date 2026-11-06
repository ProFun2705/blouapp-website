# Brief: BLO-25 Refresh /guides/tingling-hands-and-feet

- **Issue:** BLO-25 (refresh, source:audit, priority 2)
- **Job type:** Refresh in place. Keep URL and slug. Not a new page.
- **Target file:** `src/lib/blouGuides.ts` (entry `slug: "tingling-hands-and-feet"`). Per-guide `references` field, as in `dreams-and-sleep`. `SEO_TITLE_OVERRIDES` entry already exists; keep it.
- **Primary keyword:** "tingling after quitting smoking". Secondary: "tingling hands and feet after quitting smoking", "pins and needles after quitting smoking", "numbness after quitting smoking", "tingling fingers quit smoking", "can quitting smoking cause tingling".
- **Campaign:** template default `guide_tingling-hands-and-feet`; keep.

## Why
GSC 2026-09-27..2026-10-24: impressions 183 to 19, 0 clicks, position 8.1. URL Inspection 2026-10-27: crawled, not indexed (last crawl 2026-05-22). Page is 773 words, 3 FAQs, content untouched since 2026-05-08, zero cited sources (falls back to the generic list), several unsourced claims (circulation "normalizing", "4 weeks").

## Reader and intent
Someone in the first days or weeks off nicotine with pins and needles in fingers, hands, feet or around the mouth, worried it is withdrawal, circulation, or something serious. Informational and reassurance, with a safety angle. First answer must say: tingling is not on the standard withdrawal symptom lists (NHS lists cravings, trouble sleeping, anxiety, irritability, etc.), but anxiety, panic and fast breathing (hyperventilation) can cause it, and it usually passes as breathing slows; withdrawal symptoms overall are strongest in week 1 and last 3 to 4 weeks on average (NHS); persistent, one-sided or stroke-like symptoms need urgent care. Honest: there is no research timeline for tingling alone.
Must not become: a diagnosis page, a neuropathy/B12/diabetes guide, or a general anxiety page (link `/guides/anxiety`, `/quit-smoking-with-anxiety`).

## Title/meta policy (risk accepted)
Page is out of the index and has 19 impressions: little to lose. Keep SEO title override ("Tingling hands and feet after quitting smoking", 46 chars) and H1 keyword focus; rewrite `summary` (meta) to 120-160 chars leading with the answer. H1 may become "Tingling hands and feet after quitting smoking: causes and how long it lasts".

## Top of page
- `quickAnswer` (2-4 sentences): see intent. 
- `quickFacts` (3): panic attacks can cause tingling in fingers or lips (NHS); breathing too fast lowers blood carbon dioxide and causes tingling, slow breathing fixes it (MedlinePlus); face droop, weak arm, slurred speech: call 999/911 (NHS).

## Outline (`articleSections`)
1. Why you may get tingling after quitting (anxiety/panic, hyperventilation; not a listed withdrawal symptom; tobacco itself is a listed cause of numbness/tingling per MedlinePlus; other causes exist).
2. How long tingling lasts (episodes tied to fast breathing end once breathing slows; withdrawal overall week 1 peak, 3 to 4 weeks average; persistent means see a doctor).
3. What helps right now (pursed-lip breathing per MedlinePlus; slow in through nose, gently out through mouth per NHS; sit, feet on floor; SOS craving help in Blou for cravings).
4. Tingling symptom table: Likely anxiety/fast breathing vs. Other causes to check (ask GP) vs. Emergency.
5. When tingling is an emergency (NHS FAST; MedlinePlus 911 list; do not wait) and when to see a doctor (keeps coming back, lasts long, no obvious cause, rash, pain, dizziness).
Add `/guides/anxiety` to relatedSlugs; link `/guides/dizziness`, `/guides/shortness-of-breath`.

## FAQ (6)
How long does tingling last after quitting smoking? · Can quitting smoking cause tingling in hands and feet? · Why do my fingers tingle when I get a craving? · Is tingling after quitting a sign of a stroke? · Can quitting vaping cause tingling? · When should I see a doctor?

## Constraints (profile)
iPhone only app, features: photo timeline, lung checks, SOS craving help, milestones; no free-app, ratings, user counts, cure/diagnose claims. Every number sourced. No em dashes, grade <= 8, US spelling. Keep emergency warning prominent. No unsourced "circulation normalizes".

## Sources
NHS pins and needles (https://www.nhs.uk/conditions/pins-and-needles/); NHS anxiety, fear and panic (https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anxiety-fear-panic/); NHS stroke symptoms (https://www.nhs.uk/conditions/stroke/symptoms/); MedlinePlus Hyperventilation (https://medlineplus.gov/ency/article/003071.htm); MedlinePlus Numbness and tingling (https://medlineplus.gov/ency/article/003206.htm); NHS managing nicotine withdrawal symptoms.

## Links
In: add from `/guides/anxiety` and `/guides/dizziness` (relatedSlugs) if not already present. Out: `/guides/anxiety`, `/guides/dizziness`, `/guides/headaches`, `/guides/shortness-of-breath`, `/quit-smoking-with-anxiety`, `/guides/what-happens-after-3-days`, `/quit-smoking-timeline`.

## QA acceptance
`npm run build` passes; `npm run seo:qa -- /guides/tingling-hands-and-feet --keyword "tingling after quitting smoking"` passes; 40-point rubric >= 34; sourced, no percentages, emergency block present. Recheck indexing by 2026-12-17.
