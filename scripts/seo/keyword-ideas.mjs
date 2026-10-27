#!/usr/bin/env node
/**
 * Google Ads Keyword Planner ideas for the SEO loop.
 *
 * Uses the same Google Ads account and OAuth client as the AniDachi CRM
 * integration (see anidachi apps/web/lib/google-ads). Set in .env.local:
 *   GOOGLE_ADS_DEVELOPER_TOKEN
 *   GOOGLE_ADS_CUSTOMER_ID          10 digits, e.g. 8078204641 (not 5723352650)
 *   GOOGLE_ADS_CLIENT_ID / GOOGLE_ADS_CLIENT_SECRET
 *   GOOGLE_ADS_REFRESH_TOKEN
 *   GOOGLE_ADS_LOGIN_CUSTOMER_ID    optional, for manager accounts
 *
 * Usage:
 *   npm run seo:keywords -- "quit smoking app" "nicotine withdrawal"
 *   npm run seo:keywords -- --url https://tryblou.com/quit-zyn
 *   npm run seo:keywords -- "quit vaping" --json --out seo/data/keywords/quit-vaping.json
 *   npm run seo:keywords -- "quit smoking" --location 2826   (UK; default 2840 = US)
 */
import { loadEnvLocal, parseArgs, writeJson } from "./lib.mjs";

const API_VERSION = "v24";

function required(name) {
  const v = process.env[name]?.trim();
  if (!v) throw new Error(`${name} is not set in .env.local`);
  return v;
}

const digits = (s) => s.replace(/\D/g, "");

async function accessToken() {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: required("GOOGLE_ADS_CLIENT_ID"),
      client_secret: required("GOOGLE_ADS_CLIENT_SECRET"),
      refresh_token: required("GOOGLE_ADS_REFRESH_TOKEN"),
      grant_type: "refresh_token",
    }),
  });
  const body = await res.json();
  if (!res.ok || !body.access_token) {
    throw new Error(`Google OAuth refresh failed (${res.status}): ${body.error_description ?? body.error ?? "unknown"}`);
  }
  return body.access_token;
}

export async function keywordIdeas({ keywords = [], url, languageId = 1000, locationIds = [2840] }) {
  const customerId = digits(required("GOOGLE_ADS_CUSTOMER_ID"));
  const headers = {
    Authorization: `Bearer ${await accessToken()}`,
    "developer-token": required("GOOGLE_ADS_DEVELOPER_TOKEN"),
    "Content-Type": "application/json",
  };
  const login = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID?.trim();
  if (login) headers["login-customer-id"] = digits(login);

  const seed =
    keywords.length && url
      ? { keywordAndUrlSeed: { keywords, url } }
      : url
        ? { urlSeed: { url } }
        : { keywordSeed: { keywords } };

  const res = await fetch(
    `https://googleads.googleapis.com/${API_VERSION}/customers/${customerId}:generateKeywordIdeas`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        language: `languageConstants/${languageId}`,
        geoTargetConstants: locationIds.map((id) => `geoTargetConstants/${id}`),
        includeAdultKeywords: false,
        keywordPlanNetwork: "GOOGLE_SEARCH",
        ...seed,
      }),
    },
  );
  const text = await res.text();
  if (!res.ok) {
    let detail = text.slice(0, 800);
    try {
      const err = JSON.parse(text).error;
      detail = err?.details?.[0]?.errors?.[0]?.message ?? err?.message ?? detail;
    } catch {
      /* keep raw body */
    }
    throw new Error(`generateKeywordIdeas failed (${res.status}): ${detail}`);
  }

  return (JSON.parse(text).results ?? []).map((r) => {
    const m = r.keywordIdeaMetrics ?? {};
    const micros = (v) => (v ? Number(v) / 1_000_000 : null);
    return {
      keyword: r.text ?? "",
      volume: m.avgMonthlySearches ? Number(m.avgMonthlySearches) : null,
      competition: m.competition ?? null,
      competitionIndex: m.competitionIndex ?? null,
      bidLow: micros(m.lowTopOfPageBidMicros),
      bidHigh: micros(m.highTopOfPageBidMicros),
      trend: (m.monthlySearchVolumes ?? []).map((x) => Number(x.monthlySearches ?? 0)),
    };
  });
}

async function main() {
  loadEnvLocal();
  const args = parseArgs();
  const keywords = args._.map((k) => k.trim()).filter(Boolean);
  if (!keywords.length && !args.url) {
    console.error('Pass seed keywords and/or --url, e.g. npm run seo:keywords -- "quit smoking app"');
    process.exit(1);
  }

  const rows = await keywordIdeas({
    keywords,
    url: args.url,
    locationIds: args.location ? String(args.location).split(",").map(Number) : undefined,
  });
  rows.sort((a, b) => (b.volume ?? 0) - (a.volume ?? 0));

  if (args.out) {
    writeJson(args.out, { fetchedAt: new Date().toISOString(), seeds: keywords, url: args.url ?? null, rows });
    console.error(`Wrote ${rows.length} ideas to ${args.out}`);
  }
  if (args.json) {
    console.log(JSON.stringify(rows, null, 2));
    return;
  }
  const limit = Number(args.limit ?? 40);
  console.log(`Seeds: ${keywords.join(", ") || args.url} · ${rows.length} ideas\n`);
  for (const r of rows.slice(0, limit)) {
    const bid = r.bidLow != null ? `$${r.bidLow.toFixed(2)}-${(r.bidHigh ?? 0).toFixed(2)}` : "n/a";
    console.log(`${String(r.volume ?? "n/a").padStart(7)}  ${(r.competition ?? "n/a").padEnd(8)}  ${bid.padEnd(12)}  ${r.keyword}`);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  });
}
