#!/usr/bin/env node
/**
 * Mechanical half of the content QA gate (the seo-content-qa skill does the
 * judgment half). Checks a built page's HTML for the rules in
 * seo/blou-profile.md that a script can check reliably:
 *
 *   - no em dashes in visible copy
 *   - no banned AI-voice words or false pricing/rating claims
 *   - reading grade (Flesch-Kincaid) at or below the target
 *   - title <= 60 chars, meta description 120-160 chars
 *   - primary keyword in title, H1 and first 100 words
 *   - quick answer box, FAQ, sources, App Store CTA, JSON-LD present
 *   - at least 3 internal links to other pages
 *
 * Run after `next build`. Exit code 1 when any check fails.
 *
 * Usage:
 *   npm run seo:qa -- /zyn-withdrawal --keyword "zyn withdrawal"
 *   npm run seo:qa -- /zyn-withdrawal --keyword "zyn withdrawal" --json
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, parseArgs } from "./lib.mjs";

const args = parseArgs();
const route = args._[0];
if (!route) {
  console.error('Usage: npm run seo:qa -- /path --keyword "primary keyword"');
  process.exit(1);
}
const MAX_GRADE = Number(args["max-grade"] ?? 8);

const file = join(ROOT, ".next", "server", "app", route === "/" ? "index.html" : `${route.replace(/^\//, "")}.html`);
if (!existsSync(file)) {
  console.error(`qa-lint: ${file} not found. Run \`npm run build\` first.`);
  process.exit(1);
}
const html = readFileSync(file, "utf8");
const main = (html.match(/<main[\s\S]*<\/main>/) ?? [html])[0];

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
const strip = (s) => decode(s.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

// Prose only: drop the sources list, tables and nav so citations and data
// labels don't skew the reading grade.
const prose = strip(
  main
    .replace(/<nav[\s\S]*?<\/nav>/g, " ")
    .replace(/<table[\s\S]*?<\/table>/g, " ")
    .replace(/<section[^>]*id="sources"[\s\S]*?<\/section>/g, " ")
    .replace(/<ol[^>]*data-sources[\s\S]*?<\/ol>/g, " "),
);
const visible = strip(main);
const title = decode((html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? "");
const description = decode((html.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? "");
const h1 = strip((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) ?? [])[1] ?? "");
const keyword = (args.keyword ?? decode((html.match(/<meta name="keywords" content="([^",]*)/) ?? [])[1] ?? "")).toLowerCase();

function syllables(word) {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (w.length <= 3) return 1;
  const groups = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "").match(/[aeiouy]{1,2}/g);
  return Math.max(1, groups?.length ?? 1);
}
function fkGrade(text) {
  const sentences = text.split(/[.!?]+\s/).filter((s) => s.trim().split(/\s+/).length > 2);
  const words = text.split(/\s+/).filter((w) => /[a-z]/i.test(w));
  if (!sentences.length || !words.length) return 0;
  const syl = words.reduce((n, w) => n + syllables(w), 0);
  return 0.39 * (words.length / sentences.length) + 11.8 * (syl / words.length) - 15.59;
}

const BANNED_WORDS = [
  "delve", "unlock", "harness", "game-changer", "game changer", "seamless", "robust", "cutting-edge",
  "ever-evolving", "in today's fast-paced world", "let's dive in", "it is important to note",
  "whether you're a", "embark", "journey of a lifetime", "elevate", "supercharge", "revolutionize",
];
const BANNED_CLAIMS = [
  [/4\.8\s*(★|stars?)/i, "made-up rating"],
  [/free (app|quit smoking app|on the app store)/i, "\"free app\" claim (Blou is a subscription with a free trial)"],
  [/\bcures?\b/i, "cure claim"],
  [/guarantee[sd]?\b/i, "guarantee claim"],
  [/clinically (proven|tested)/i, "clinical claim about Blou"],
  [/android app (is )?(available|out now)/i, "Android availability claim"],
];

const firstWords = prose.split(/\s+/).slice(0, 100).join(" ").toLowerCase();
const internalLinks = new Set([...main.matchAll(/href="(\/[^"#?]+)/g)].map((m) => m[1]).filter((h) => h !== route && !h.startsWith("/go/")));
const grade = fkGrade(prose);

const checks = [
  ["no em dashes", !/—/.test(visible), `${(visible.match(/—/g) ?? []).length} found`],
  ...BANNED_WORDS.map((w) => [`no "${w}"`, !visible.toLowerCase().includes(w), "found"]),
  ...BANNED_CLAIMS.map(([re, label]) => [`no ${label}`, !re.test(visible), (visible.match(re) ?? [""])[0]]),
  [`reading grade <= ${MAX_GRADE}`, grade <= MAX_GRADE, `grade ${grade.toFixed(1)}`],
  ["title <= 60 chars", title.length > 0 && title.length <= 60, `${title.length}: ${title}`],
  ["meta description 120-160 chars", description.length >= 120 && description.length <= 160, `${description.length}`],
  ["keyword in title", !keyword || title.toLowerCase().includes(keyword), keyword],
  ["keyword in H1", !keyword || h1.toLowerCase().includes(keyword), h1],
  ["keyword in first 100 words", !keyword || firstWords.includes(keyword), keyword],
  ["quick answer box", /data-quick-answer|Quick answer/i.test(main), "missing"],
  ["FAQ section", /data-faq=/.test(main), "missing"],
  ["sources listed", /Sources|References/.test(visible), "missing"],
  ["App Store CTA", /data-event="app_store_click"/.test(main), "missing"],
  ["JSON-LD present", /application\/ld\+json/.test(html), "missing"],
  [">= 3 internal links", internalLinks.size >= 3, `${internalLinks.size}`],
];

const failed = checks.filter(([, ok]) => !ok);
if (args.json) {
  console.log(JSON.stringify({ route, keyword, grade: Number(grade.toFixed(1)), words: prose.split(/\s+/).length, pass: failed.length === 0, failed: failed.map(([name, , detail]) => ({ name, detail })) }, null, 2));
} else {
  console.log(`qa-lint ${route} · keyword "${keyword}" · ${prose.split(/\s+/).length} words · grade ${grade.toFixed(1)}`);
  for (const [name, ok, detail] of checks) if (!ok) console.log(`  FAIL  ${name} (${detail})`);
  console.log(failed.length ? `${failed.length} failed` : "all mechanical checks passed");
}
process.exit(failed.length ? 1 : 0);
