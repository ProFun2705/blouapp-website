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
