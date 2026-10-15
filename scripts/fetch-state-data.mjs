#!/usr/bin/env node
/**
 * Builds src/data/states.json from CDC open data (data.cdc.gov, public, no key):
 *
 *  - Cigarette excise tax per pack, latest reported quarter
 *    (CDC STATE System, dataset ebcc-3d5i)
 *  - Average retail price and state tax per pack in 2019, the last year
 *    published (Orzechowski & Walker, Tax Burden on Tobacco, dataset 7nwe-3aj9)
 *  - Adult current-smoking rate, latest BRFSS year (dataset dttw-5yxu)
 *
 * Run: `node scripts/fetch-state-data.mjs`. Re-run when CDC publishes new data
 * and commit the JSON; pages never fetch at request time.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BASE = "https://data.cdc.gov/resource";
const STATES = new Set([
  "AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME",
  "MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI",
  "SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
]);

async function soql(dataset, params) {
  const url = `${BASE}/${dataset}.json?${new URLSearchParams({ $limit: "5000", ...params })}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${dataset}: HTTP ${res.status}`);
  return res.json();
}

const round2 = (n) => Math.round(n * 100) / 100;

// 1) Latest regular quarter with full coverage (ignore far-future scheduled rows).
const quarters = await soql("ebcc-3d5i", {
  $select: "year,quarter,count(locationabbr) as n",
  $where: "provisiondesc='Cigarette Tax ($ per pack)'",
  $group: "year,quarter",
  $order: "year DESC,quarter DESC",
});
const latest = quarters.find((q) => Number(q.n) >= 51);
if (!latest) throw new Error("No complete quarter found in CDC STATE tax data");

const taxRows = await soql("ebcc-3d5i", {
  $select: "locationabbr,locationdesc,provisionvalue,citation,effective_date",
  $where: `year='${latest.year}' AND quarter='${latest.quarter}' AND provisiondesc='Cigarette Tax ($ per pack)'`,
});

// 2) 2019 average price and state tax per pack.
const owRows = await soql("7nwe-3aj9", {
  $select: "locationabbr,submeasuredesc,data_value",
  $where: "year='2019' AND submeasuredesc in('Average Cost per pack','State Tax per pack')",
});

// 3) Adult current smokers, overall, latest year per state.
const brfss = await soql("dttw-5yxu", {
  $select: "locationabbr,year,data_value",
  $where: "topic='Current Smoker Status' AND response='Yes' AND break_out='Overall'",
  $order: "year DESC",
});

const ow = {};
for (const r of owRows) {
  ow[r.locationabbr] ??= {};
  ow[r.locationabbr][r.submeasuredesc] = Number(r.data_value);
}
const smoking = {};
for (const r of brfss) {
  if (!smoking[r.locationabbr] && r.data_value) {
    smoking[r.locationabbr] = { rate: round2(Number(r.data_value)), year: Number(r.year) };
  }
}

const states = taxRows
  .filter((r) => STATES.has(r.locationabbr))
  .map((r) => {
    const abbr = r.locationabbr;
    const tax = Number(r.provisionvalue);
    const price2019 = ow[abbr]?.["Average Cost per pack"];
    const tax2019 = ow[abbr]?.["State Tax per pack"];
    // Estimate: 2019 average retail price plus any state tax increase since.
    // The federal tax ($1.01) is unchanged since 2009. Manufacturer price rises
    // are not included, so real prices are usually higher.
    const estimated =
      price2019 !== undefined && tax2019 !== undefined
        ? round2(price2019 + Math.max(0, tax - tax2019))
        : undefined;
    return {
      abbr,
      name: r.locationdesc,
      slug: r.locationdesc.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, ""),
      cigaretteTaxPerPack: round2(tax),
      taxCitation: r.citation?.replace(/ /g, " ") ?? null,
      taxEffectiveDate: r.effective_date ?? null,
      avgPackPrice2019: price2019 !== undefined ? round2(price2019) : null,
      stateTax2019: tax2019 !== undefined ? round2(tax2019) : null,
      estimatedPackPrice: estimated ?? null,
      adultSmokingRate: smoking[abbr]?.rate ?? null,
      adultSmokingRateYear: smoking[abbr]?.year ?? null,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

if (states.length !== 51) throw new Error(`Expected 51 states + DC, got ${states.length}`);

const ranked = [...states].sort((a, b) => b.cigaretteTaxPerPack - a.cigaretteTaxPerPack);
ranked.forEach((s, i) => (s.taxRank = i + 1));

const out = {
  generatedAt: new Date().toISOString().slice(0, 10),
  taxAsOf: `${latest.year} Q${latest.quarter}`,
  federalTaxPerPack: 1.01,
  sources: {
    tax: "https://data.cdc.gov/Legislation/Table-of-Excise-Taxes-on-Combustible-Tobacco-Produ/ebcc-3d5i",
    price2019: "https://data.cdc.gov/Policy/The-Tax-Burden-on-Tobacco-1970-2019/7nwe-3aj9",
    smoking: "https://data.cdc.gov/Behavioral-Risk-Factors/Behavioral-Risk-Factor-Surveillance-System-BRFSS-P/dttw-5yxu",
  },
  states,
};

const dir = join(process.cwd(), "src", "data");
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "states.json"), JSON.stringify(out, null, 2) + "\n");
console.log(`Wrote ${states.length} states (tax as of ${out.taxAsOf}).`);
