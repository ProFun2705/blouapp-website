import stateDataset from "@/data/states.json";
import { stateQuitlineBySlug, type StateQuitline } from "@/lib/stateQuitlines";

/**
 * One record per US state + DC: CDC tax, price and smoking-rate data
 * (src/data/states.json, built by scripts/fetch-state-data.mjs) merged with
 * the hand-verified quitline facts in src/lib/stateQuitlines.ts.
 */
export type StateCdcData = (typeof stateDataset.states)[number];

export type UsState = StateCdcData & { quitline?: StateQuitline };

export const STATE_DATA_META = {
  taxAsOf: stateDataset.taxAsOf,
  federalTaxPerPack: stateDataset.federalTaxPerPack,
  sources: stateDataset.sources,
} as const;

export const US_STATES: UsState[] = stateDataset.states.map((s) => ({
  ...s,
  quitline: stateQuitlineBySlug[s.slug],
}));

export const usStateBySlug: Record<string, UsState> = Object.fromEntries(
  US_STATES.map((s) => [s.slug, s]),
);

const sortedRates = US_STATES.map((s) => s.adultSmokingRate)
  .filter((r): r is number => r !== null)
  .sort((a, b) => a - b);

/** Median adult smoking rate across the 50 states + DC, for context. */
export const MEDIAN_SMOKING_RATE = sortedRates[Math.floor(sortedRates.length / 2)];

export const NATIONAL_QUITLINE = "1-800-QUIT-NOW (1-800-784-8669)";

export function formatUsd(n: number | null | undefined): string {
  if (n === null || n === undefined) return "n/a";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}

/** "the District of Columbia" reads better in sentences than "District of Columbia". */
export function stateInSentence(name: string): string {
  return name === "District of Columbia" ? "the District of Columbia" : name;
}
