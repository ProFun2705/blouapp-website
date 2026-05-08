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
- [ ] Sitemap & SEO improvements (manual one-time actions) — see "SEO improvement workstream" below

## SEO improvement workstream (May 2026)

Plan source: `.cursor/plans/sitemap_and_seo_improvements_3922ab44.plan.md`.

### Code changes already shipped
- Dynamic OG images via Next file convention (`src/app/opengraph-image.tsx`, `src/app/twitter-image.tsx`, `src/app/guides/[slug]/opengraph-image.tsx`). The broken `/og/og-default.png` references are gone from `layout.tsx` and `seo.ts`.
- New static-routes registry (`src/lib/staticRoutes.ts`) imported by `src/app/sitemap.ts` so the sitemap can no longer silently desync from real folders.
- `src/app/sitemap.ts` now uses stable per-route `lastModified`, drops `changeFrequency`/`priority` (Google ignores them), adds image entries pointing to per-guide OG, and adds hreflang `alternates.languages` across all country calculators (each derived from `country.locale`).
- New `published?: boolean` and `dateReviewed?: string` fields on `BlouGuide` (default published). Drafts are now excluded from the sitemap, the `/guides` index, `RelatedGuides`, and `generateStaticParams` for `/guides/[slug]`.
- `metadata.verification` in `src/app/layout.tsx` reads `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
- IndexNow plumbing: `/indexnow` (key file route, reads `INDEXNOW_KEY`), `POST /api/indexnow` (gated by `x-indexnow-secret` header; defaults to `INDEXNOW_KEY` if `INDEXNOW_SECRET` is unset). Submits all canonical URLs by default, or a custom list via JSON body.
- `ORG_JSON_LD.sameAs` now accepts a `SOCIAL_PROFILE_URLS` list in `src/lib/site.ts` (currently empty; uncomment entries as profiles go live).
- `buildArticleJsonLd` accepts `dateReviewed` → emitted as `lastReviewed` for YMYL pages. Wired through `src/app/guides/[slug]/page.tsx` so a guide can declare its own review date.

### Manual one-time actions you still need to do
1. **Google Search Console**: Property → Sitemaps → Add new sitemap → enter `sitemap.xml` and submit. Do this ONCE; don't resubmit per page.
2. **Bing Webmaster Tools**: Sitemaps → Submit `https://tryblou.com/sitemap.xml`. (Optionally: Bing has a 1-click "Import from GSC" if you verified GSC first.)
3. **Verification env vars in Vercel** (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — copy the `content` value from GSC → Settings → Ownership → "HTML tag" method.
   - `NEXT_PUBLIC_BING_SITE_VERIFICATION` — copy the `content` value from Bing → Settings → "Add a site" → Meta tag.
   - Redeploy after setting.
4. **IndexNow env vars in Vercel**:
   - `INDEXNOW_KEY` — generate with `openssl rand -hex 16` in a terminal (any random hex string ≥ 8 chars works). Paste the output here.
   - `INDEXNOW_SECRET` — optional. If unset, `INDEXNOW_KEY` doubles as the API gate.
   - After deploy, verify the key file is live: `curl https://tryblou.com/indexnow` → should print the key. Then submit all URLs once with: `curl -X POST -H "x-indexnow-secret: <YOUR_KEY>" https://tryblou.com/api/indexnow`.
5. **Drafts**: when starting a new guide that isn't ready, set `published: false` on the entry in `src/lib/blouGuides.ts`. Remove the field (or set `true`) when ready to ship.

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

# Executor's Feedback or Assistance Requests

- Please verify analytics is receiving events:
  - Open your live site, then in Google Analytics → Realtime, confirm you see an active user within ~1–2 minutes.
  - Optional: in your browser DevTools Console, you can run `window.dataLayer` and confirm it exists (array with events).
- When we reach Step 4 (DNS), we’ll need:
  - Your exact domain name (e.g., `example.com`)
  - Access to your GoDaddy DNS settings (you’ll do the clicks; I’ll tell you exactly what to add)
- For Step 2/3, we’ll need:
  - Whether you already have a GitHub account and are logged in on this machine

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
