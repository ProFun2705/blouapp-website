#!/usr/bin/env node
/**
 * Pulls Google Search Console data for sc-domain:tryblou.com through Composio
 * and writes a compact snapshot the research and audit skills read:
 *
 *   seo/data/gsc/<end-date>.json   current window vs previous window, per
 *                                  page and per query+page, plus flagged
 *                                  opportunities (page-2, low CTR, movers)
 *   seo/data/gsc/latest.json       copy of the newest snapshot
 *
 * GSC data lags ~2-3 days, so the window ends 3 days ago.
 *
 * Usage:
 *   npm run seo:gsc                 28-day windows
 *   npm run seo:gsc -- --days 7     7-day windows
 */
import { join } from "node:path";
import { ACCOUNTS, DATA_DIR, GSC_PROPERTY, composio, daysAgo, normalizePath, parseArgs, writeJson } from "./lib.mjs";

const args = parseArgs();
const days = Number(args.days ?? 28);
const LAG = 3;

const current = { start: daysAgo(LAG + days - 1), end: daysAgo(LAG) };
const previous = { start: daysAgo(LAG + 2 * days - 1), end: daysAgo(LAG + days) };

function query(window, dimensions) {
  const rows = [];
  for (let startRow = 0; ; startRow += 5000) {
    const data = composio(
      "GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY",
      {
        site_url: GSC_PROPERTY,
        start_date: window.start,
        end_date: window.end,
        dimensions,
        row_limit: 5000,
        start_row: startRow,
      },
      ACCOUNTS.gsc,
    );
    const page = data.rows ?? data.response_data?.rows ?? [];
    rows.push(...page);
    if (page.length < 5000) break;
  }
  return rows.map((r) => {
    const keyed = Object.fromEntries(dimensions.map((d, i) => [d, d === "page" ? normalizePath(r.keys[i]) : r.keys[i]]));
    return {
      ...keyed,
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: Number(r.ctr.toFixed(4)),
      position: Number(r.position.toFixed(1)),
    };
  });
}

const keyOf = (r, dims) => dims.map((d) => r[d]).join(" | ");

function withPrevious(cur, prev, dims) {
  const before = new Map(prev.map((r) => [keyOf(r, dims), r]));
  return cur.map((r) => {
    const p = before.get(keyOf(r, dims));
    return {
      ...r,
      prev: p ? { clicks: p.clicks, impressions: p.impressions, ctr: p.ctr, position: p.position } : null,
    };
  });
}

console.error(`GSC ${GSC_PROPERTY}: ${current.start}..${current.end} vs ${previous.start}..${previous.end}`);
const pages = withPrevious(query(current, ["page"]), query(previous, ["page"]), ["page"]);
const queryPages = withPrevious(query(current, ["query", "page"]), query(previous, ["query", "page"]), ["query", "page"]);
const countries = query(current, ["country"]);

// Default thresholds from the seo-performance-audit skill, scaled down for a
// young site: Blou gets hundreds of impressions per page, and GSC hides most
// low-volume queries, so page-level rows carry most of the signal.
const MIN_Q = Number(args["min-query-impressions"] ?? 5);
const MIN_P = Number(args["min-page-impressions"] ?? 50);
const byImpr = (a, b) => b.impressions - a.impressions;
const opportunities = {
  page2Pages: pages.filter((r) => r.position >= 11 && r.position <= 30 && r.impressions >= MIN_P).sort(byImpr),
  lowCtrPages: pages.filter((r) => r.position <= 12 && r.impressions >= MIN_P * 2 && r.ctr < 0.015).sort(byImpr),
  page2: queryPages.filter((r) => r.position >= 11 && r.position <= 30 && r.impressions >= MIN_Q).sort(byImpr),
  lowCtr: queryPages.filter((r) => r.position <= 12 && r.impressions >= MIN_Q * 4 && r.ctr < 0.01).sort(byImpr),
  bigMovers: queryPages
    .filter((r) => r.prev && Math.abs(r.prev.position - r.position) >= 5 && r.impressions >= MIN_Q)
    .map((r) => ({ ...r, delta: Number((r.prev.position - r.position).toFixed(1)) }))
    .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta)),
  newQueries: queryPages.filter((r) => !r.prev && r.impressions >= MIN_Q).sort(byImpr),
  cannibalization: Object.entries(
    queryPages.reduce((acc, r) => {
      if (r.impressions >= 10) (acc[r.query] ??= []).push({ page: r.page, impressions: r.impressions, position: r.position });
      return acc;
    }, {}),
  )
    .filter(([, list]) => list.length > 1)
    .map(([q, list]) => ({ query: q, pages: list.sort((a, b) => b.impressions - a.impressions) }))
    .sort((a, b) => b.pages[0].impressions - a.pages[0].impressions),
};

const sum = (rows, k) => rows.reduce((n, r) => n + r[k], 0);
const snapshot = {
  property: GSC_PROPERTY,
  fetchedAt: new Date().toISOString(),
  current,
  previous,
  totals: {
    clicks: sum(pages, "clicks"),
    impressions: sum(pages, "impressions"),
    prevClicks: pages.reduce((n, r) => n + (r.prev?.clicks ?? 0), 0),
    prevImpressions: pages.reduce((n, r) => n + (r.prev?.impressions ?? 0), 0),
  },
  opportunities,
  pages: pages.sort((a, b) => b.impressions - a.impressions),
  queryPages: queryPages.sort((a, b) => b.impressions - a.impressions),
  countries: countries.sort((a, b) => b.impressions - a.impressions).slice(0, 25),
};

writeJson(join(DATA_DIR, "gsc", `${current.end}.json`), snapshot);
writeJson(join(DATA_DIR, "gsc", "latest.json"), snapshot);

const t = snapshot.totals;
console.log(
  `clicks ${t.clicks} (prev ${t.prevClicks}) · impressions ${t.impressions} (prev ${t.prevImpressions}) · ` +
    `${pages.length} pages · ${queryPages.length} query/page rows`,
);
console.log(
  `opportunities: page2Pages ${opportunities.page2Pages.length}, lowCtrPages ${opportunities.lowCtrPages.length}, page2 ${opportunities.page2.length}, lowCtr ${opportunities.lowCtr.length}, ` +
    `movers ${opportunities.bigMovers.length}, new ${opportunities.newQueries.length}, ` +
    `cannibalization ${opportunities.cannibalization.length}`,
);
console.log(`wrote seo/data/gsc/${current.end}.json`);
