"use client";

import { useMemo, useState } from "react";

type MoneySavedCalculatorProps = {
  defaultCigarettesPerDay?: number;
  defaultPackPrice?: number;
  currencySymbol?: string;
  title?: string;
  description?: string;
};

const CIGARETTES_PER_PACK = 20;

const timeframes = [
  { label: "1 week", days: 7 },
  { label: "1 month", days: 30 },
  { label: "1 year", days: 365 },
  { label: "10 years", days: 3650 },
] as const;

function formatCurrency(value: number, currencySymbol: string) {
  return `${currencySymbol}${value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function MoneySavedCalculator({
  defaultCigarettesPerDay = 20,
  defaultPackPrice = 10,
  currencySymbol = "$",
  title = "Quit smoking money saved calculator",
  description = "Estimate how much money you keep by staying smoke-free.",
}: MoneySavedCalculatorProps) {
  const [cigarettesPerDay, setCigarettesPerDay] = useState(defaultCigarettesPerDay);
  const [packPrice, setPackPrice] = useState(defaultPackPrice);

  const safeCigarettesPerDay = Number.isFinite(cigarettesPerDay) ? Math.max(0, cigarettesPerDay) : 0;
  const safePackPrice = Number.isFinite(packPrice) ? Math.max(0, packPrice) : 0;

  const dailySpend = useMemo(() => {
    if (safeCigarettesPerDay <= 0 || safePackPrice <= 0) {
      return 0;
    }

    return (safePackPrice / CIGARETTES_PER_PACK) * safeCigarettesPerDay;
  }, [safeCigarettesPerDay, safePackPrice]);

  return (
    <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-teal-950">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-teal-900/80">{description}</p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-teal-900">
          Cigarettes per day
          <input
            type="number"
            min={0}
            step={1}
            value={safeCigarettesPerDay}
            onChange={(event) => setCigarettesPerDay(Number(event.target.value))}
            className="h-11 rounded-lg border border-teal-200 px-3 text-base text-teal-950 outline-none transition focus:border-teal-400"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-teal-900">
          Pack price
          <input
            type="number"
            min={0}
            step={0.01}
            value={safePackPrice}
            onChange={(event) => setPackPrice(Number(event.target.value))}
            className="h-11 rounded-lg border border-teal-200 px-3 text-base text-teal-950 outline-none transition focus:border-teal-400"
          />
        </label>
      </div>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {timeframes.map((timeframe) => {
          const moneySaved = dailySpend * timeframe.days;
          return (
            <div key={timeframe.label} className="rounded-xl border border-teal-200 bg-teal-50/50 p-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-teal-700">{timeframe.label}</dt>
              <dd className="mt-2 text-lg font-semibold text-teal-950">{formatCurrency(moneySaved, currencySymbol)}</dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
