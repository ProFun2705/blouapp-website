#!/usr/bin/env node
/**
 * SEO guardrail. Runs after `next build` against the prerendered HTML in
 * .next/server/app and fails the build on regressions we have already paid for:
 *
 *  - every indexable page has server-rendered JSON-LD
 *  - titles are unique and at most 60 characters
 *  - every indexable page (except the homepage) is linked from another page
 *  - no hreflang value repeats within a page
 *  - no false pricing or rating claims (Blou is a subscription app with a free
 *    trial, and has no 4.8★ rating)
 *
 * Usage: `npm run build` (runs automatically) or `npm run seo:check`.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const APP_DIR = join(process.cwd(), ".next", "server", "app");
const MAX_TITLE = 60;
const SKIP = [/^_/, /^api\//, /^go\//, /opengraph-image/, /twitter-image/, /\.rsc$/];

const BANNED = [
  [/4\.8\s*(★|stars?|on the App Store)/i, "made-up 4.8 rating"],
  [/from\s+\d+\+?\s+quitters/i, "made-up review count"],
  [/Free on the App Store/i, "\"free\" pricing claim"],
  [/Start tracking\s*[–-]\s*free/i, "\"free\" pricing claim"],
  [/Free for iPhone/i, "\"free\" pricing claim"],
  [/optional premium/i, "\"free + premium\" pricing claim"],
  [/"@type":"(Software|Mobile)Application"[^<]*?"price":"0"/, "price 0 in app schema"],
];

if (!existsSync(APP_DIR)) {
  console.error("seo-check: .next/server/app not found. Run `next build` first.");
  process.exit(1);
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

function routeFor(file) {
  const rel = relative(APP_DIR, file).split(sep).join("/").replace(/\.html$/, "");
  if (rel === "index") return "/";
  return `/${rel}`;
}

const pages = walk(APP_DIR)
  .filter((f) => f.endsWith(".html"))
  .map((file) => ({ file, route: routeFor(file) }))
  .filter(({ route }) => !SKIP.some((re) => re.test(route.slice(1))))
  .map(({ file, route }) => {
    const html = readFileSync(file, "utf8");
    const title = (html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? "";
    const robots = (html.match(/<meta name="robots" content="([^"]*)"/) ?? [])[1] ?? "";
    const jsonLd = (html.match(/<script type="application\/ld\+json">/g) ?? []).length;
    const hreflangs = [...html.matchAll(/hrefLang="([^"]+)"/gi)].map((m) => m[1].toLowerCase());
    const links = new Set(
      [...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1].replace(/\/$/, "") || "/"),
    );
    return { route, html, title: decode(title), robots, jsonLd, hreflangs, links };
  });

function decode(s) {
  return s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');
}

const errors = [];
const indexable = pages.filter((p) => !/noindex/.test(p.robots) && p.route !== "/_not-found");

const seenTitles = new Map();
for (const p of indexable) {
  if (!p.title) errors.push(`${p.route}: missing <title>`);
  if (p.title.length > MAX_TITLE) errors.push(`${p.route}: title is ${p.title.length} chars (max ${MAX_TITLE}): "${p.title}"`);
  if (seenTitles.has(p.title)) errors.push(`${p.route}: duplicate title with ${seenTitles.get(p.title)}`);
  seenTitles.set(p.title, p.route);

  if (p.jsonLd === 0) errors.push(`${p.route}: no server-rendered JSON-LD`);

  const dupes = p.hreflangs.filter((h, i) => p.hreflangs.indexOf(h) !== i);
  if (dupes.length) errors.push(`${p.route}: repeated hreflang ${[...new Set(dupes)].join(", ")}`);

  for (const [re, label] of BANNED) {
    if (re.test(p.html)) errors.push(`${p.route}: ${label} (${re})`);
  }
}

for (const p of indexable) {
  if (p.route === "/") continue;
  const linked = pages.some((other) => other.route !== p.route && other.links.has(p.route));
  if (!linked) errors.push(`${p.route}: orphan page, no other page links to it`);
}

console.log(`seo-check: ${indexable.length} indexable pages checked.`);
if (errors.length) {
  console.error(`seo-check: ${errors.length} problem(s):\n  - ${errors.join("\n  - ")}`);
  process.exit(1);
}
console.log("seo-check: all checks passed.");
