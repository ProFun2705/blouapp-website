# Brief: BLO-32 Refresh /quit-smoking-help for "free nicotine patches"

- **Issue:** BLO-32 (refresh, source:research, priority 3)
- **Job type:** Refresh in place. Keep URL `/quit-smoking-help`, campaign `state_hub`.
- **Target file:** `src/app/quit-smoking-help/page.tsx` (also add outbound links on `/quit-smoking-with-nicotine-patch` if missing)
- **Primary keyword:** "free nicotine patches". Secondary: "free smoking patches", "free nicotine patches online", "free nicotine gum", "1-800-QUIT-NOW", "free quit smoking help by state".

## Why
Keyword Planner US: "free nicotine patches" 2,900/mo (up 1.2x), "free smoking patches" 1,000, "free nicotine patches online" 590, "free nicotine gum" 590, "1 800 quit now" 1,900. Hub has 2 GSC impressions (pos 27.5) so title risk is low. High fit: people looking for free patches are about to quit.

## Intent
Informational / how-to-get. First answer: call 1-800-QUIT-NOW; many state quitlines mail free patches, gum or lozenges to eligible adults who enroll; rules vary by state; many insurance plans and Medicaid also cover quit medicine. Must not claim every state gives free patches (say "many"; use the per-state `freeNrt` data). Must not become a patch dosing page (link to /quit-smoking-with-nicotine-patch and /tools/nicotine-patch-plan).

## Title/meta
Hub barely ranks, low risk. Title: "Free nicotine patches by state: how to get them" (under 60). H1: "How to get free nicotine patches (by state)". Meta 120-160 chars, mentions free patches, quitline, state table.

## Top of page
QuickAnswerBox with 3 short answers (call, what to expect, state table below). State table stays (it is the unique asset). Add "How to get them in 3 steps" before the table.

## Outline
1. QuickAnswerBox. 2. How to get free patches (steps: call 1-800-QUIT-NOW, enroll and answer a screening, receive a starter supply by mail, usually a few weeks, eligibility varies). 3. Who qualifies (varies by state: age, enrollment, medical screening, some limited by insurance or income; use freeNrt counts computed from data). 4. InlineAppCta. 5. State table (existing, add "Free NRT" emphasis). 6. Other ways to get patches without paying (insurance/Medicaid coverage per CDC, doctor prescription, Smokefree.gov help; no price claims for stores). 7. Free patches online: order via your state quitline, be careful of sites selling "free" patches. 8. Gum and lozenges too (links). 9. Patch plan link (/tools/nicotine-patch-plan). 10. FAQ (6): how to get free patches; free nicotine patches online; how many weeks; free gum/lozenges; does insurance cover; what if my state says not listed. 11. Sources. 12. EndAppCta.

## Constraints (from seo/blou-profile.md)
No em dashes, grade <= 8, no "free app", no unsourced numbers, only listed Blou features. Blou is a subscription app after a free trial; the free claim applies only to quitline help. Do not fetch smokefree.gov nicotine-patch page (404).

## Sources
CDC (quitlines, 1-800-QUIT-NOW; Medicaid/insurance coverage of cessation), each state quitline in src/lib/stateQuitlines.ts (already verified), Smokefree.gov main site, NAQC quitline map. Only cite pages actually fetched.

## Schema
Keep Dataset JSON-LD; add `buildFaqJsonLd` FAQ and `buildArticleJsonLd`/MedicalWebPage if helpers allow; HowTo for the 3 steps.

## Links
Out: /quit-smoking-with-nicotine-patch, /tools/nicotine-patch-plan, /quit-smoking-with-nicotine-gum, /quit-smoking-with-nicotine-lozenge, /quit-smoking-medication, /prepare-to-quit-smoking. In: 2+ existing pages (patch, medication, gum) must link here.

## QA
`npm run seo:qa -- /quit-smoking-help --keyword "free nicotine patches"` passes; rubric >= 34/40.
