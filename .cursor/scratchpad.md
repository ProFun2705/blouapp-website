# Background and Motivation

You purchased a domain and created a local folder for the website, but nothing is set up yet. The goal is to (1) create a working website project in this folder, (2) deploy it to Vercel, (3) connect the GoDaddy domain to that deployment, and (4) establish an easy workflow in Cursor for publishing more content.

# Key Challenges and Analysis

- The current website folder is empty, so we need to pick and initialize a web framework before deployment.
- Domain connection requires correct DNS settings in GoDaddy, and the exact records depend on the hosting provider. Since you chose **Vercel**, we will use Vercel’s standard DNS setup.
- “Creating more content” should be straightforward for a non-technical workflow; we should keep content edits simple (either editable pages in `app/` or a `content/` folder with MD/MDX).

# Assumptions (to proceed without blocking)

- We will build a simple marketing/content site using **Next.js** (works extremely well on Vercel).
- You want `yourdomain.com` and `www.yourdomain.com` to both work.
- You’re okay with publishing by pushing updates to a GitHub repo (Vercel’s easiest workflow).

# High-level Task Breakdown

## Step 1 — Initialize the website project (Next.js)

**What we’ll do**
- Create a Next.js site in `/Users/macgeorge/Downloads/Blou/BlouApp_Website`.
- Add a basic homepage + a “Content” section that’s easy to extend.

**Success criteria**
- `npm install` works without errors.
- `npm run dev` shows a homepage locally.
- `npm run build` succeeds.

## Step 2 — Put the project on GitHub (so Vercel can deploy it)

**What we’ll do**
- Initialize git (if needed), create a GitHub repo, and push the code.

**Success criteria**
- GitHub repo exists and has the code.
- Local repo is clean after push.

## Step 3 — Deploy on Vercel

**What we’ll do**
- Import the GitHub repo into Vercel.
- Ensure the Vercel build succeeds and you get a `*.vercel.app` URL.

**Success criteria**
- Vercel deployment shows the site at a Vercel URL.

## Step 4 — Connect your GoDaddy domain to Vercel

**What we’ll do**
- Add the domain inside Vercel (Vercel will validate DNS).
- Update DNS records in GoDaddy (typical setup):
  - `A` record for `@` → `76.76.21.21`
  - `CNAME` record for `www` → `cname.vercel-dns.com`

**Success criteria**
- Vercel domain status becomes “Valid/Active”.
- Both apex and `www` domain load the site over HTTPS.

## Step 5 — Content workflow in Cursor (how you’ll “create more content”)

**What we’ll do**
- Establish a simple pattern for adding pages (and optionally posts):
  - New pages under `app/<page>/page.tsx`
  - Optional: add MDX so you can write content as `.mdx` files in a `content/` folder.
- Define the exact workflow:
  - Edit in Cursor → run `npm run dev` to preview → commit/push → Vercel auto-deploys.

**Success criteria**
- You can add a new page in Cursor and see it locally.
- After pushing, the new page appears on the live domain.

# Project Status Board

- [x] Step 1: Initialize the website project (Next.js)
- [ ] Step 2: Put the project on GitHub (so Vercel can deploy it)
- [ ] Step 3: Deploy on Vercel
- [ ] Step 4: Connect GoDaddy domain to Vercel
- [ ] Step 5: Content workflow in Cursor (pages and optional MDX posts)
- [x] Install Google tag (GA4) on all pages
- [x] Sitemap & SEO improvements (code) — see "SEO improvement workstream" below
- [x] Sitemap & SEO improvements (manual one-time actions) — see "SEO improvement workstream" below
- [x] SEO growth workstream: create 10 new high-converting organic pages (Executor)
- [x] SEO skill audit (Aug 2026): SpeakableJsonLd, hreflang helper, noindex legal pages, seo:check, related-pillar map

## SEO improvement workstream (May 2026)

Plan source: `.cursor/plans/sitemap_and_seo_improvements_3922ab44.plan.md`.

### Code changes already shipped
- Dynamic OG images via Next file convention (`src/app/opengraph-image.tsx`, `src/app/twitter-image.tsx`, `src/app/guides/[slug]/opengraph-image.tsx`). The broken `/og/og-default.png` references are gone from `layout.tsx` and `seo.ts`.
- New static-routes registry (`src/lib/staticRoutes.ts`) imported by `src/app/sitemap.ts` so the sitemap can no longer silently desync from real folders.
- `src/app/sitemap.ts` now uses stable per-route `lastModified`, drops `changeFrequency`/`priority` (Google ignores them), adds image entries pointing to per-guide OG, and adds hreflang `alternates.languages` across all country calculators (each derived from `country.locale`).
- New `published?: boolean` and `dateReviewed?: string` fields on `BlouGuide` (default published). Drafts are now excluded from the sitemap, the `/guides` index, `RelatedGuides`, and `generateStaticParams` for `/guides/[slug]`.
- `metadata.verification` in `src/app/layout.tsx` reads `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
- `ORG_JSON_LD.sameAs` now accepts a `SOCIAL_PROFILE_URLS` list in `src/lib/site.ts` (currently empty; uncomment entries as profiles go live).
- `buildArticleJsonLd` accepts `dateReviewed` → emitted as `lastReviewed` for YMYL pages. Wired through `src/app/guides/[slug]/page.tsx` so a guide can declare its own review date.

### Manual one-time actions you still need to do
1. **Google Search Console**: Property → Sitemaps → Add new sitemap → enter `sitemap.xml` and submit. Do this ONCE; don't resubmit per page.
2. **Bing Webmaster Tools**: Sitemaps → Submit `https://tryblou.com/sitemap.xml`. (Optionally: Bing has a 1-click "Import from GSC" if you verified GSC first.)
3. **Verification env vars in Vercel** (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — copy the `content` value from GSC → Settings → Ownership → "HTML tag" method.
   - `NEXT_PUBLIC_BING_SITE_VERIFICATION` — copy the `content` value from Bing → Settings → "Add a site" → Meta tag.
   - Redeploy after setting.
4. **Drafts**: when starting a new guide that isn't ready, set `published: false` on the entry in `src/lib/blouGuides.ts`. Remove the field (or set `true`) when ready to ship.

# Current Status / Progress Tracking

- Next.js app initialized in `/Users/macgeorge/Downloads/Blou/BlouApp_Website`.
- `npm run build` succeeded locally.
- GitHub repo created and pushed: `https://github.com/ProFun2705/blouapp-website`
- Vercel production deployed: `https://blouapp-website.vercel.app`
- Hosting chosen: Vercel
- Domain/DNS provider: GoDaddy
- Domain added in Vercel: `tryblou.com`, `www.tryblou.com` (awaiting GoDaddy DNS records / propagation)
- DNS updated in GoDaddy; domain is serving the latest production deployment on HTTPS.
- Google tag installed site-wide in `src/app/layout.tsx` (Measurement ID: `G-L5RLBSF7KK`). Confirmed `npm run build` still succeeds.
- SEO growth workstream kicked off: selecting 10 new high-intent page targets and will implement as new `src/app/<slug>/page.tsx` routes, then verify with `npm run build`.
- SEO growth workstream done:
  - Added 10 new routes under `src/app/*/page.tsx` and registered them in `src/lib/staticRoutes.ts` so they appear in the sitemap.
  - Verified `npm run build` succeeds and the routes are included in the build output.

## Visual overhaul (August 2026)

Direction: Wall calendar X-out (Impeccable seed `935e98d8`, assigned index 3). Your pick still beats the roll; this is the locked world.

Shipped:
- Semantic tokens in `src/app/globals.css` (paper/ink/mark; teal utilities remapped). Skip link, `#main`, focus ring, dark tokens, reduced-motion kill switch.
- Header: 64px ink bar, overflow menu, no wrap. Cookie then sticky download. Custom `not-found`.
- Homepage: split hero (copy + calendar + labeled example phone). Numbered feature list, 2-up tools, TOC of 4. No invented ratings.
- Article shell: `.masthead` / `.section-block` / `ArticleShell`. Related links capped at 4. Canonical debug stripped. Comparisons use choose-if + `<table>`.
- Tools: tabular nums, `aria-live`, country switcher, lung × + “reached”.
- Waitlist fails closed on non-OK. Cookie consent starts `unknown`.
- `PRODUCT.md` (init) and `DESIGN.md` + `.impeccable/design.json` (from the built world).

Asset still needed from you: real iPhone screenshots (streak, craving timer, savings) to replace `public/product/blou-phone-streak.jpg`.

## SEO growth batch 2 (May 2026) — 15 new pages

### 7 new static pages (`src/app/<slug>/page.tsx` + `staticRoutes.ts`)

| URL | Type | Primary intent |
|---|---|---|
| `/blou-vs-kwit` | Competitor comparison | Bottom-funnel: app-shopping users comparing Blou to Kwit |
| `/blou-vs-quitstart` | Competitor comparison | Bottom-funnel: comparing Blou to CDC's quitSTART app |
| `/quit-smoking-with-anxiety` | Audience-specific guide | "how to quit smoking with anxiety disorder" |
| `/quit-smoking-with-depression` | Audience-specific guide | "how to quit smoking when depressed" |
| `/quit-smoking-with-asthma` | Audience-specific guide | "how to quit smoking with asthma" |
| `/best-quit-smoking-app-for-heavy-smokers` | Best-of guide | Heavy smokers looking for an app recommendation |
| `/health-benefits-of-quitting-smoking` | Benefits timeline | High-volume top-funnel query; converts via milestone/motivation |
| `/how-long-does-nicotine-stay-in-your-system` | Informational | Very high volume; converts via withdrawal milestone framing |

### 8 new guide entries in `src/lib/blouGuides.ts`

All are `category: "symptom"` guides targeting missing withdrawal symptom searches:

| Slug | Target keyword |
|---|---|
| `anger` | anger after quitting smoking |
| `crying` | crying after quitting smoking |
| `hair-loss` | hair loss after quitting smoking |
| `libido` | libido after quitting smoking |
| `joint-pain` | joint pain after quitting smoking |
| `concentration` | can't concentrate after quitting smoking |
| `skin-changes` | skin after quitting smoking |
| `flu-like-symptoms` | flu symptoms after quitting smoking |

### Build result
- `npm run build` passes with exit code 0.
- 189 static pages generated (up from ~173).
- All 15 new pages appear in the build output.

## Marketing skills audit (August 2026)

Executor implemented the full marketing-skills plan:

- Installed 49 skills from `coreyhaines31/marketingskills` into `.agents/skills/`
- Created `.agents/product-marketing.md` (canonical v2 context)
- Created `src/lib/track-event.ts` — GA4 + Amplitude parity for badge, waitlist, calculator events
- `ContentPageStickyBadge` in root layout (site-wide sticky CTA; decoupled from cookie consent)
- `ArticleConversionFooter` on ~53 pillar pages + `ArticleShell` footer on `/how-to-quit-smoking`
- Trimmed all over-long title tags (`npm run seo:check` — zero warnings)
- `src/lib/competitors.ts` + refactored 6 `/blou-vs-*` pages to shared `BlouVsPageContent`
- New `/compare` hub + 3 competitor-pair pages (`/kwit-vs-smoke-free`, etc.)
- `public/llms.txt` + `public/llms-full.txt`
- About page App Store CTA + expanded editorial review copy
- `.agents/tracking-plan.md` with GA4 conversion marking checklist

Verified: `npm run seo:check` passes (70 static routes); `npm run build` succeeds (193 pages).

Pending (manual / assets): official App Store screenshots for homepage; live social profiles for `SOCIAL_PROFILE_URLS`; GSC/Bing ops per tracking-plan checklist.


- Added `src/components/marketing/SpeakableJsonLd.tsx` so ~55 pillar pages that already imported it can compile.
- Shared `src/lib/countryHreflang.ts` used by sitemap and calculator metadata (Vietnam/Indonesia no longer collide on `"en"`). Removed the redundant `hreflang` field from `countryData.ts`.
- `/privacy` and `/terms` are `noindex` and removed from `staticRoutes.ts` / sitemap.
- `.cursor/rules/blou-seo.mdc` is tracked (gitignore allow-list for `.cursor/rules/`).
- `npm run seo:check` (`scripts/seo-check.mjs`) validates routes, noindex, unique hreflang, guide fields, related-pillar map.
- `RELATED_PILLAR_SLUGS` + `RELATED_LINK_MAP` cover all shipped content pillars.

Verified: `npm run seo:check` passes (title-length warnings only); `npm run build` succeeds (189 pages).

# Executor's Feedback or Assistance Requests

- Please verify analytics is receiving events:
  - Open your live site, then in Google Analytics → Realtime, confirm you see an active user within ~1–2 minutes.
  - Optional: in your browser DevTools Console, you can run `window.dataLayer` and confirm it exists (array with events).
- When we reach Step 4 (DNS), we’ll need:
  - Your exact domain name (e.g., `example.com`)
  - Access to your GoDaddy DNS settings (you’ll do the clicks; I’ll tell you exactly what to add)
- For Step 2/3, we’ll need:
  - Whether you already have a GitHub account and are logged in on this machine

- For the 10 new pages workstream:
  - I’m using the existing page template/style (Metadata + JSON-LD + QuickAnswer + TOC + FAQ + strong App Store CTA).
  - Next step is to implement the 10 recommended slugs as routes, then run `npm run build` and ask you to spot-check the pages in the browser.

- SEO skill audit (please confirm):
  - Please spot-check `/calculators/vietnam` and `/calculators/indonesia` hreflang tags, and that `/privacy` / `/terms` show `noindex`.
  - Please confirm this workstream can be marked complete.

## Visual overhaul — Executor notes

- Completed all plan phases 0–5 in this pass (user asked to finish every to-do). Latest `npm run build` passed (189 pages).
- Please spot-check on a phone: header stays one row; accept/decline cookies, then confirm the sticky download appears and does not stack with the cookie sheet.
- Please replace the labeled example product image with real App Store screenshots when you have them.
- Planner confirmation still required before calling the overhaul “done” in the project status board (Executor does not mark the workstream complete).

## GoDaddy DNS records to add (for tryblou.com)

- In GoDaddy → Domain → DNS → Records:
  - Add/Update **A** record:
    - **Type**: A
    - **Name/Host**: `@`
    - **Value**: `76.76.21.21`
    - **TTL**: default
  - Add/Update **CNAME** record:
    - **Type**: CNAME
    - **Name/Host**: `www`
    - **Value**: `cname.vercel-dns.com`
    - **TTL**: default
- If GoDaddy already has conflicting `@` A-records or `www` CNAME/A-records, remove/replace them so only the above targets remain.

# Lessons

- Always run `npm run build` after meaningful changes before proceeding to the next step.
- If you see `npm warn EBADENGINE` during installs, prefer using an LTS Node version (usually Node 22) to avoid tooling incompatibilities.
- If Vercel deploys fail with a team access / git author error, create a new commit using your GitHub `users.noreply.github.com` email and redeploy.
- `AppStoreBadgePlacement` type only accepts specific string literals: `"landing_hero"`, `"landing_sticky_mobile"`, `"article_intro"`, `"article_footer_card"`, `"tool_money_calculator"`, `"tool_lung_recovery"`, `"tools_index"`, `"calculators_index"`, and the template literal `` `country_calculator_${string}` ``. Do not use `"article_mid"` or other ad-hoc strings—they'll fail TypeScript checking.
- Do not import `@/components/marketing/SpeakableJsonLd` without creating that file; a missing component breaks `npm run build` across every pillar page.
- Country calculator hreflang must go through `countryHreflang()` / `calculatorLanguageAlternates()`. Hand-set `"en"` on two countries silently drops one alternate in `<head>`.
- Remap Tailwind `teal-*` in `@theme` to restyle 68 pages; do not rewrite class names one file at a time.
- Write `DESIGN.md` after the visual world ships, not before. Cookie consent must initialize as `"unknown"`, not `GRANTED`. Waitlist must throw when `!res.ok`.
- Do not drop `AUTHOR` / `MEDICAL_REVIEWER` imports when wrapping guides in `ArticleShell` — JSON-LD still needs them.
- Do not invent App Store ratings or testimonials; the listing has no public overview.

