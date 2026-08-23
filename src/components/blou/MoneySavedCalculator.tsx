"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CountrySwitcher } from "@/components/blou/CountrySwitcher";
import { trackEvent } from "@/lib/track-event";

type MoneySavedCalculatorProps = {
  defaultCigarettesPerDay?: number;
  defaultPackPrice?: number;
  currencyCode?: string;
  locale?: string;
  title?: string;
  description?: string;
  instanceId?: string;
  shareable?: boolean;
  countrySlug?: string;
};

const CIGARETTES_PER_PACK = 20;

const timeframes = [
  { label: "1 day", days: 1 },
  { label: "1 week", days: 7 },
  { label: "1 month", days: 30 },
  { label: "1 year", days: 365 },
  { label: "5 years", days: 365 * 5 },
  { label: "10 years", days: 3650 },
] as const;

function track(
  eventName: string,
  params: Record<string, string | number | undefined>,
) {
  trackEvent(eventName, params);
}

export function MoneySavedCalculator({
  defaultCigarettesPerDay = 20,
  defaultPackPrice = 10,
  currencyCode = "USD",
  locale = "en-US",
  title = "Quit smoking money saved calculator",
  description = "Estimate how much money you keep by staying smoke-free.",
  instanceId = "default",
  shareable = true,
  countrySlug,
}: MoneySavedCalculatorProps) {
  const [cigarettesPerDay, setCigarettesPerDay] = useState(defaultCigarettesPerDay);
  const [packPrice, setPackPrice] = useState(defaultPackPrice);
  const [shareStatus, setShareStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const hydrated = useRef(false);

  useEffect(() => {
    if (!shareable || typeof window === "undefined" || hydrated.current) return;
    hydrated.current = true;
    const params = new URLSearchParams(window.location.search);
    const qCpd = Number(params.get("cpd"));
    const qPp = Number(params.get("pp"));
    if (Number.isFinite(qCpd) && qCpd > 0) queueMicrotask(() => setCigarettesPerDay(qCpd));
    if (Number.isFinite(qPp) && qPp > 0) queueMicrotask(() => setPackPrice(qPp));
  }, [shareable]);

  const safeCigarettesPerDay = Number.isFinite(cigarettesPerDay)
    ? Math.max(0, cigarettesPerDay)
    : 0;
  const safePackPrice = Number.isFinite(packPrice) ? Math.max(0, packPrice) : 0;

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode,
        maximumFractionDigits: 0,
      }),
    [locale, currencyCode],
  );

  const formatterPrecise = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode,
        maximumFractionDigits: 2,
      }),
    [locale, currencyCode],
  );

  const dailySpend = useMemo(() => {
    if (safeCigarettesPerDay <= 0 || safePackPrice <= 0) return 0;
    return (safePackPrice / CIGARETTES_PER_PACK) * safeCigarettesPerDay;
  }, [safeCigarettesPerDay, safePackPrice]);

  function emitInputEvent(field: "cpd" | "pp", value: number) {
    track("calculator_input", {
      calculator: "money_saved",
      instance: instanceId,
      field,
      value,
      currency: currencyCode,
    });
  }

  function onShare() {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("cpd", String(safeCigarettesPerDay));
    url.searchParams.set("pp", String(safePackPrice));
    navigator.clipboard
      ?.writeText(url.toString())
      .then(() => {
        setShareStatus("copied");
        track("calculator_share", {
          calculator: "money_saved",
          instance: instanceId,
        });
        setTimeout(() => setShareStatus("idle"), 2000);
      })
      .catch(() => {
        setShareStatus("failed");
      });
  }

  return (
    <section className="section-block" aria-label={title}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-teal-950">{title}</h2>
          <p className="mt-2 max-w-[65ch] text-base leading-6 text-teal-900/80">
            {description}
          </p>
        </div>
        {shareable ? (
          <button
            type="button"
            onClick={onShare}
            className="pressable h-11 rounded-sm border border-teal-200 bg-white px-3 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            {shareStatus === "copied"
              ? "Link copied"
              : shareStatus === "failed"
                ? "Copy failed. Try again."
                : "Share result"}
          </button>
        ) : null}
      </div>

      <div className="mt-5">
        <p className="mb-2 text-sm font-medium text-teal-900">Country</p>
        <CountrySwitcher currentSlug={countrySlug} />
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-teal-900">
          Cigarettes per day
          <input
            type="number"
            inputMode="numeric"
            min={0}
            step={1}
            value={safeCigarettesPerDay}
            onChange={(event) => setCigarettesPerDay(Number(event.target.value))}
            onBlur={(event) => emitInputEvent("cpd", Number(event.target.value))}
            className="tabular h-11 rounded-sm border border-teal-200 px-3 text-base text-teal-950"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-teal-900">
          Pack price ({currencyCode})
          <input
            type="number"
            inputMode="decimal"
            min={0}
            step={0.01}
            value={safePackPrice}
            onChange={(event) => setPackPrice(Number(event.target.value))}
            onBlur={(event) => emitInputEvent("pp", Number(event.target.value))}
            className="tabular h-11 rounded-sm border border-teal-200 px-3 text-base text-teal-950"
          />
        </label>
      </div>

      <p className="mt-4 text-sm text-teal-900/70" aria-live="polite">
        Daily spend:{" "}
        <span className="tabular font-medium text-teal-950">
          {formatterPrecise.format(dailySpend)}
        </span>
      </p>

      <dl className="mt-4 grid gap-px bg-teal-200 sm:grid-cols-2 lg:grid-cols-3">
        {timeframes.map((timeframe) => {
          const moneySaved = dailySpend * timeframe.days;
          return (
            <div key={timeframe.label} className="bg-[var(--paper)] p-4">
              <dt className="text-xs font-medium text-teal-700">{timeframe.label}</dt>
              <dd className="tabular mt-2 text-2xl font-semibold text-teal-950">
                {formatter.format(moneySaved)}
              </dd>
            </div>
          );
        })}
      </dl>

      <p className="mt-4 text-xs leading-5 text-teal-900/70">
        Method: pack price ÷ {CIGARETTES_PER_PACK} cigarettes × cigarettes per day × time period.
        Projections assume stable prices and daily usage; actual savings vary with price changes, taxes, and purchase patterns.
      </p>
    </section>
  );
}
