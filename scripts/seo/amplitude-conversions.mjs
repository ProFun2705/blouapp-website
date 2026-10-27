#!/usr/bin/env node
/**
 * Which pages turn readers into App Store visits? Pulls per-page counts from
 * Amplitude through Composio and writes seo/data/amplitude/<end>.json and
 * latest.json. The research and audit skills use this to weight keyword
 * clusters that convert (step 7 of the SEO plan).
 *
 * Events (see src/lib/track.ts and src/components/site/AnalyticsListeners.tsx):
 *   [Amplitude] Page Viewed   autocapture, grouped by [Amplitude] Page Path
 *   app_store_click           every App Store CTA, grouped by page_path
 *   tool_input                calculator/tool use, grouped by page_path
 *   app_store_badge_click,    older names for App Store clicks, sent by
 *   cta_click                 earlier site versions; counted together
 *
 * An event the project has never received counts as zero.
 *
 * Only consenting visitors are tracked, so treat counts as a sample and
 * compare pages by rate, not by raw totals.
 *
 * Usage:
 *   npm run seo:conversions                 last 28 days
 *   npm run seo:conversions -- --days 90
 */
import { join } from "node:path";
import { ACCOUNTS, DATA_DIR, composio, daysAgo, normalizePath, parseArgs, writeJson } from "./lib.mjs";

const args = parseArgs();
const days = Number(args.days ?? 28);
const window = { start: daysAgo(days), end: daysAgo(1) };
const compact = (d) => d.replaceAll("-", "");

const EVENTS = [
  { key: "views", event: "[Amplitude] Page Viewed", prop: "[Amplitude] Page Path" },
  { key: "appStoreClicks", event: "app_store_click", prop: "page_path" },
  { key: "appStoreClicks", event: "app_store_badge_click", prop: "page_path" },
  { key: "appStoreClicks", event: "cta_click", prop: "page_path" },
  { key: "toolInputs", event: "tool_input", prop: "page_path" },
];

/** Returns Map<path, total> for one event grouped by one event property. */
function countsByPath({ event, prop }) {
  let data;
  try {
    data = composio(
    "AMPLITUDE_GET_EVENT_SEGMENTATION",
    {
      e: JSON.stringify({ event_type: event, group_by: [{ type: "event", value: prop }] }),
      m: "totals",
      i: "30",
      start: compact(window.start),
      end: compact(window.end),
    },
    ACCOUNTS.amplitude,
    );
  } catch (err) {
    if (/event_type_not_found/.test(String(err))) {
      console.error(`note: "${event}" has never been received; counting it as 0`);
      return new Map();
    }
    throw err;
  }
  // The response nests the chart under one or more `data` keys.
  let chart = data;
  while (chart && !chart.series && chart.data) chart = chart.data;
  const series = chart?.series ?? [];
  const labels = chart?.seriesLabels ?? [];
  const out = new Map();
  series.forEach((points, i) => {
    const label = labels[i];
    const raw = Array.isArray(label) ? label[label.length - 1] : label;
    if (raw == null || raw === "(none)") return;
    const total = points.reduce((n, p) => n + (typeof p === "number" ? p : (p?.value ?? 0)), 0);
    const path = normalizePath(String(raw));
    out.set(path, (out.get(path) ?? 0) + total);
  });
  return out;
}

const counts = { views: new Map(), appStoreClicks: new Map(), toolInputs: new Map() };
for (const e of EVENTS) {
  for (const [path, n] of countsByPath(e)) counts[e.key].set(path, (counts[e.key].get(path) ?? 0) + n);
}
const paths = new Set(Object.values(counts).flatMap((m) => [...m.keys()]));

const pages = [...paths]
  .map((page) => {
    const views = counts.views.get(page) ?? 0;
    const appStoreClicks = counts.appStoreClicks.get(page) ?? 0;
    return {
      page,
      views,
      appStoreClicks,
      toolInputs: counts.toolInputs.get(page) ?? 0,
      clickRate: views ? Number((appStoreClicks / views).toFixed(4)) : null,
    };
  })
  .sort((a, b) => b.appStoreClicks - a.appStoreClicks || b.views - a.views);

const snapshot = { fetchedAt: new Date().toISOString(), window, pages };
writeJson(join(DATA_DIR, "amplitude", `${window.end}.json`), snapshot);
writeJson(join(DATA_DIR, "amplitude", "latest.json"), snapshot);

const total = (k) => pages.reduce((n, p) => n + p[k], 0);
console.log(`${window.start}..${window.end}: ${total("views")} views, ${total("appStoreClicks")} App Store clicks across ${pages.length} pages`);
for (const p of pages.slice(0, 15)) {
  console.log(`${String(p.appStoreClicks).padStart(5)} clicks  ${String(p.views).padStart(6)} views  ${p.clickRate != null ? (p.clickRate * 100).toFixed(1) + "%" : "  -  "}  ${p.page}`);
}
