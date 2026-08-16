#!/usr/bin/env node
/**
 * SEO sanity checks for tryblou.com.
 * Fail on sitemap/hreflang/guide drift. Warn on long titles.
 *
 * Usage: npm run seo:check
 */
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const TITLE_SUFFIX = " | Blou";
const TITLE_WARN_CHARS = 60;
const NOINDEX_PATHS = new Set(["/privacy", "/terms"]);
const errors = [];
const warnings = [];

function read(relPath) {
  return readFileSync(join(root, relPath), "utf8");
}

function walkPageFiles(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith("[")) continue;
      walkPageFiles(full, acc);
      continue;
    }
    if (entry.name === "page.tsx") acc.push(full);
  }
  return acc;
}

function fileToPath(file) {
  const rel = relative(join(root, "src/app"), file).replace(/\\/g, "/");
  if (rel === "page.tsx") return "/";
  return `/${rel.replace(/\/page\.tsx$/, "")}`;
}

function parseStaticRoutePaths(src) {
  return [...src.matchAll(/path:\s*"([^"]+)"/g)].map((m) => m[1]);
}

function countryHreflang(slug, locale) {
  const region = locale.includes("-") ? locale.split("-").at(-1) : "";
  return region ? `en-${region}` : `en-${slug.toUpperCase()}`;
}

function parseCountries(src) {
  const countries = [];
  const re = /slug:\s*"([^"]+)"[\s\S]*?locale:\s*"([^"]+)"/g;
  let match;
  while ((match = re.exec(src))) {
    countries.push({ slug: match[1], locale: match[2] });
  }
  return countries;
}

function parseGuides(src) {
  const guides = [];
  const parts = src.split(/\n  \{\n    slug: "/).slice(1);
  for (const part of parts) {
    const slugEnd = part.indexOf('"');
    if (slugEnd < 0) continue;
    const slug = part.slice(0, slugEnd);
    const block = part.slice(0, part.indexOf("\n  },") >= 0 ? part.indexOf("\n  },") : part.length);
    const publishedFalse = /published:\s*false/.test(block);
    guides.push({
      slug,
      published: !publishedFalse,
      hasTargetKeyword: /targetKeyword:\s*"/.test(block),
      hasQuickAnswer: /quickAnswer:\s*"/.test(block),
      hasFaq: /faq:\s*\[/.test(block),
    });
  }
  return guides;
}

function extractMetadataTitle(src) {
  const blockMatch = src.match(/buildMetadata\(\{([\s\S]*?)\}\)/);
  if (!blockMatch) return null;
  const titleMatch = blockMatch[1].match(/\btitle:\s*"([^"]+)"/);
  return titleMatch ? titleMatch[1] : null;
}

function parseRelatedPillarEntries(src) {
  return [...src.matchAll(/^\s+(\w+):\s*"([a-z0-9-]+)"/gm)].map((m) => ({
    key: m[1],
    slug: m[2],
  }));
}

const staticRoutesSrc = read("src/lib/staticRoutes.ts");
const staticPaths = parseStaticRoutePaths(staticRoutesSrc);
const staticPathSet = new Set(staticPaths);

const pageFiles = walkPageFiles(join(root, "src/app"));
const pagePaths = pageFiles.map(fileToPath);

for (const path of pagePaths) {
  if (NOINDEX_PATHS.has(path)) continue;
  if (!staticPathSet.has(path)) {
    errors.push(`Indexable page ${path} is missing from src/lib/staticRoutes.ts`);
  }
}

for (const path of staticPaths) {
  if (NOINDEX_PATHS.has(path)) {
    errors.push(`noindex path ${path} must not be listed in staticRoutes.ts`);
  }
}

for (const noindexPath of NOINDEX_PATHS) {
  const page = pageFiles.find((f) => fileToPath(f) === noindexPath);
  if (!page) {
    errors.push(`Expected noindex page ${noindexPath} is missing`);
    continue;
  }
  const src = readFileSync(page, "utf8");
  if (!/noindex:\s*true/.test(src)) {
    errors.push(`${noindexPath} must pass noindex: true to buildMetadata()`);
  }
}

const countries = parseCountries(read("src/lib/countryData.ts"));
if (countries.length === 0) {
  errors.push("Could not parse countries from src/lib/countryData.ts");
}
const hreflangSeen = new Map();
for (const country of countries) {
  const tag = countryHreflang(country.slug, country.locale);
  if (hreflangSeen.has(tag)) {
    errors.push(
      `Duplicate hreflang "${tag}" for ${hreflangSeen.get(tag)} and ${country.slug}`,
    );
  } else {
    hreflangSeen.set(tag, country.slug);
  }
}

const guidesSrc = read("src/lib/blouGuides.ts");
const guides = parseGuides(guidesSrc);
const slugCount = [...guidesSrc.matchAll(/^\s+slug:\s*"/gm)].length;
if (guides.length === 0) {
  errors.push("Could not parse guides from src/lib/blouGuides.ts");
} else if (guides.length !== slugCount) {
  errors.push(
    `Guide parser found ${guides.length} entries but ${slugCount} slug fields — parser may have missed a guide`,
  );
}
for (const guide of guides) {
  if (!guide.published) continue;
  if (!guide.hasTargetKeyword) {
    errors.push(`Guide "${guide.slug}" is missing targetKeyword`);
  }
  if (!guide.hasQuickAnswer) {
    errors.push(`Guide "${guide.slug}" is missing quickAnswer`);
  }
  if (!guide.hasFaq) {
    errors.push(`Guide "${guide.slug}" is missing faq`);
  }
}

const pillarEntries = parseRelatedPillarEntries(read("src/lib/relatedPillarSlugs.ts"));
const relatedGuidesSrc = read("src/components/marketing/RelatedGuides.tsx");
for (const { key, slug } of pillarEntries) {
  if (!staticPathSet.has(`/${slug}`)) {
    errors.push(`RELATED_PILLAR_SLUGS.${key} ("${slug}") is not in staticRoutes.ts`);
  }
  if (!relatedGuidesSrc.includes(`RELATED_PILLAR_SLUGS.${key}`)) {
    errors.push(`RELATED_PILLAR_SLUGS.${key} is missing from RELATED_LINK_MAP`);
  }
}

for (const file of pageFiles) {
  const path = fileToPath(file);
  const title = extractMetadataTitle(readFileSync(file, "utf8"));
  if (!title) continue;
  const rendered = `${title}${TITLE_SUFFIX}`;
  if (rendered.length > TITLE_WARN_CHARS) {
    warnings.push(
      `Title for ${path} is ${rendered.length} chars with suffix (aim ≤${TITLE_WARN_CHARS}): "${rendered}"`,
    );
  }
}

if (warnings.length) {
  console.log("SEO check warnings:");
  for (const warning of warnings) console.log(`  - ${warning}`);
}

if (errors.length) {
  console.error("SEO check failed:");
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `SEO check passed (${pagePaths.length} static pages, ${guides.filter((g) => g.published).length} published guides, ${countries.length} calculators).`,
);
