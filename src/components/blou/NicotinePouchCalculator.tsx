"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/track";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/**
 * Weekly taper: drop `cutPerWeek` pouches a day each week. If starting on
 * 6 mg, switch to 3 mg first (one week), which halves the nicotine per pouch.
 */
export function taperWeeks(pouchesPerDay: number, mg: number, cutPerWeek: number) {
  const weeks: Array<{ week: number; pouches: number; mg: number }> = [];
  let pouches = Math.max(0, Math.round(pouchesPerDay));
  let strength = mg;
  let week = 1;
  if (strength > 3 && pouches > 0) {
    strength = 3;
    weeks.push({ week: week++, pouches, mg: strength });
  }
  const step = Math.max(1, Math.round(cutPerWeek));
  while (pouches > 0 && week < 60) {
    pouches = Math.max(0, pouches - step);
    weeks.push({ week: week++, pouches, mg: strength });
  }
  return weeks;
}

export function NicotinePouchCalculator() {
  const [perDay, setPerDay] = useState(10);
  const [mg, setMg] = useState(6);
  const [perCan, setPerCan] = useState(15);
  const [price, setPrice] = useState(6);
  const [cut, setCut] = useState(2);
  const [touched, setTouched] = useState(false);

  function touch() {
    if (touched) return;
    setTouched(true);
    trackEvent("tool_input", { tool: "nicotine_pouch_calculator" });
  }

  const safe = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);
  const mgPerDay = safe(perDay) * safe(mg);
  const cansPerWeek = perCan > 0 ? (safe(perDay) * 7) / perCan : 0;
  const costYear = perCan > 0 ? ((safe(perDay) * 365) / perCan) * safe(price) : 0;
  const plan = taperWeeks(safe(perDay), safe(mg), safe(cut));
  const inputClass = "mt-1 block min-h-11 w-full rounded-xl border border-line bg-surface px-3 text-base text-ink";

  const field = (label: string, value: number, set: (n: number) => void, opts: { min?: number; step?: number } = {}) => (
    <label className="text-sm text-ink">
      {label}
      <input
        type="number"
        inputMode="decimal"
        min={opts.min ?? 0}
        step={opts.step ?? 1}
        value={value}
        onChange={(e) => {
          set(Number(e.target.value));
          touch();
        }}
        className={inputClass}
      />
    </label>
  );

  return (
    <div className="rounded-panel border border-line bg-surface p-6 shadow-card md:p-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {field("Pouches per day", perDay, setPerDay)}
        <label className="text-sm text-ink">
          Strength per pouch
          <select
            value={mg}
            onChange={(e) => {
              setMg(Number(e.target.value));
              touch();
            }}
            className={inputClass}
          >
            <option value={3}>3 mg</option>
            <option value={6}>6 mg</option>
            <option value={9}>9 mg</option>
            <option value={12}>12 mg</option>
          </select>
        </label>
        {field("Pouches per can (check yours)", perCan, setPerCan, { min: 1 })}
        {field("Price per can ($)", price, setPrice, { step: 0.5 })}
      </div>

      <dl aria-live="polite" className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-line bg-surface-muted p-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-accent">Nicotine in your pouches</dt>
          <dd className="mt-1 text-2xl font-semibold text-ink">{mgPerDay} mg/day</dd>
          <dd className="text-xs text-ink-muted">Amount in the pouches, not how much your body absorbs.</dd>
        </div>
        <div className="rounded-xl border border-line bg-surface-muted p-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-accent">Cans</dt>
          <dd className="mt-1 text-2xl font-semibold text-ink">{cansPerWeek.toFixed(1)} a week</dd>
          <dd className="text-xs text-ink-muted">{(cansPerWeek * 52).toFixed(0)} cans a year</dd>
        </div>
        <div className="rounded-xl border border-line bg-surface-muted p-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-accent">Cost</dt>
          <dd className="mt-1 text-2xl font-semibold text-ink">{money.format(costYear)} a year</dd>
          <dd className="text-xs text-ink-muted">{money.format(costYear / 12)} a month</dd>
        </div>
      </dl>

      <h2 className="mt-8 text-base font-semibold text-ink">A gradual taper plan</h2>
      <div className="mt-2 max-w-xs">{field("Cut this many pouches a day, each week", cut, setCut, { min: 1 })}</div>
      {plan.length ? (
        <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {plan.map((w) => (
            <li key={w.week} className="rounded-xl border border-line p-3 text-sm text-ink">
              <span className="font-semibold">Week {w.week}:</span>{" "}
              {w.pouches === 0 ? "pouch-free" : `${w.pouches} a day at ${w.mg} mg`}
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-3 text-sm text-ink-muted">Enter how many pouches you use to see a plan.</p>
      )}
      <p className="mt-4 text-xs leading-5 text-ink-muted">
        A taper is one option; quitting all at once with nicotine replacement is another. If you use more
        than one can a day, are pregnant, or have heart problems, talk to a pharmacist or doctor first.
      </p>
    </div>
  );
}
