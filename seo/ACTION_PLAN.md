# Agentic SEO action plan for tryblou.com

Source: Kourosh Ghaffari, "$12k/month with Agentic SEO" (X, October 19, 2026). His app Voicy gets 25k Google clicks a month with an agent that researches, writes, QA-checks, publishes, audits and rewrites, and keeps all of its work in Linear. His point is that an article has to be rewritten many times before it ranks, and most SEO tools never do that part.

This file turns his 8 steps into tasks for Blou. Where Blou stands today (GSC, September 27 to October 24, 2026): **12 clicks, 3,979 impressions** (up from 6 and 1,318 the 28 days before), 56 pages with impressions, 186 indexable pages.

## What the data says right now

- **Rankings are fine. Clicks are the problem.** The symptom guides sit at positions 8-10 and get almost no clicks: `/guides/diarrhea` 579 impressions, 2 clicks; `/guides/dreams-and-sleep` 373, 0; `/guides/joint-pain` 240, 2. Better titles and descriptions there should pay off fastest.
- **Google is trying out pages for whole clusters.** The pack-year calculator shows for 12+ "pack year" queries at positions 50-70. The vaping and Zyn pages are doing the same. Those pages need refreshes, not new articles.
- **Two pages have no App Store CTA** (`/vape-withdrawal-symptoms`, `/quit-vaping-timeline`). Those visits can't convert.
- **One cannibalization:** "vaping withdrawal timeline" queries go to the symptoms page instead of the timeline page.

## The 8 steps, applied to Blou

| # | Article step | Blou status | What was set up | What's left |
|---|---|---|---|---|
| 1 | **Connect** the website, GSC, SERP API, Linear, screenshot API | GSC works, the repo is the website, Linear is pending | GSC via Composio (`sc-domain:tryblou.com`), Linear + Amplitude auth links created, scripts in `scripts/seo/` | You: open the 2 Composio links. Optional: DataForSEO + ScreenshotOne (the browser works until then) |
| 2 | **Weekly keyword research → Linear tickets** | Ready | `seo-opportunity-research` skill, `seo:gsc`, `seo:keywords` (Keyword Planner), `seo:inventory`, de-dupe against open issues | You: add the Google Ads keys to `.env.local`. Schedule the Monday run |
| 3 | **Content writer** picks up a ticket, writes, does **not** publish | Ready | `seo-content-brief` + `seo-blog-writer` skills that write Next.js pages on a local branch, using `zyn-withdrawal` as the model | Schedule the weekday run |
| 4 | **QA agent** (7th-grade reading, no AI slop or em dashes, SEO, no made-up claims, images, CTAs). Failed drafts go back to the writer | Ready | `seo-content-qa` skill (40-point rubric + Blou critical fails) and `seo:qa` (mechanical checks: em dashes, banned words, false pricing/rating claims, reading grade, title/meta, keyword placement, FAQ, sources, CTA, schema) | None |
| 5 | **Publish automatically, mark the ticket done** | Ready, fully automatic | `seo-publish` skill: QA PASS → push to `main` as ProFun2705 → Vercel deploys → Linear Done | Bing submission is manual (BLO-22) |
| 6 | **Weekly audits → improvement tickets** | Ready | `seo-performance-audit` skill with thresholds sized for a young site, 28-day comparisons, GSC history kept in `seo/data/gsc/` | Schedule the Thursday run |
| 7 | **Focus on conversions** (he uses PostHog; Blou uses Amplitude) | Tracking exists, reading is pending | The site already sends `app_store_click`, `tool_input` and page views. `seo:conversions` pulls them per page; research gives extra weight to clusters that convert | You: connect Amplitude, then run `seo:conversions` |
| 8 | **Keep teaching the agent** | Ready | `seo/blou-profile.md` holds Blou's facts, banned claims, voice, priorities and topics to avoid | Spend a week reading what it writes, then fix the profile |

## Rules carried over from the article (and adapted)

- Existing pages come first. If a page already covers the intent, the job is a refresh, not a new article.
- Readable beats keyword-stuffed: 7th-grade target, answer first, short paragraphs, no em dashes.
- Every health number needs a source (NHS, CDC, NCI, WHO, FDA, MedlinePlus). This is a health site, and a made-up claim does more damage here than on most sites.
- Blou is a subscription with a free trial, iPhone only. The build already blocks "free app" and rating claims, and QA checks again.
- Nothing goes live without a QA PASS. After a PASS, the article goes straight to `main` with no human review, so the QA gate and the profile are the safety net.
- Expect about 3 months before results show. The audit step is what moves pages from position 9 to position 3.

## Order of work

**This week (setup, you):**
1. Open the Composio Linear link and the Amplitude link.
2. Add the 5 Google Ads values to `.env.local`.
3. Tell the agent the links are connected. It will run `seo:linear setup`, fill the board from `seo/backlog/initial.json` (17 issues), and run the first `seo:conversions`.
4. Turn on the four scheduled runs in `seo/README.md`.

**Weeks 1-3 (the agent; you read what goes live):**
- Snippet rewrites on the 3 highest-impression symptom guides.
- CTAs on the 2 vaping pages.
- Pack-year calculator refresh, 3-weeks guide page-2 push, money-saved page-2 push.
- Monday research adds up to 4 new articles a week from Keyword Planner and GSC new-query data.

**Week 4 onward:**
- The audit compares snippet CTR before and after, and applies whatever worked to the rest of the symptom guides.
- The conversion review decides whether more effort goes to symptom pages (most traffic) or comparison pages (closest to an install).

## What to watch

- GSC clicks per 28 days. Now 12. A reasonable 90-day target is 300+, mostly from better CTR on pages that already rank.
- CTR on the `/guides/*` symptom pages. Now about 0.4%. Position 8-10 results usually get 2-4%.
- App Store clicks per 1,000 organic page views (from Amplitude once connected).
- How many Linear issues reach Done each week, and how many QA rounds each article takes. More than 2 rounds on average means the profile or the brief needs work.
