"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/track";

type Period = { id: number; amount: number; years: number };
type Unit = "cigarettes" | "packs";
type Status = "current" | "former" | "never";

const CIGARETTES_PER_PACK = 20;

/** Pack-years = packs smoked per day × years smoked, summed over each period. */
export function packYears(periods: ReadonlyArray<Pick<Period, "amount" | "years">>, unit: Unit): number {
  return periods.reduce((sum, p) => {
    const packsPerDay = unit === "packs" ? p.amount : p.amount / CIGARETTES_PER_PACK;
    return sum + Math.max(0, packsPerDay) * Math.max(0, p.years);
  }, 0);
}

type Verdict = { met: boolean; text: string };

/** USPSTF 2021: 50–80, ≥20 pack-years, currently smoke or quit within 15 years. */
function uspstf(age: number, py: number, status: Status, yearsSinceQuit: number): Verdict {
  if (status === "never") return { met: false, text: "These guidelines apply to people who smoke or used to smoke." };
  const ageOk = age >= 50 && age <= 80;
  const pyOk = py >= 20;
  const quitOk = status === "current" || yearsSinceQuit <= 15;
  const reasons = [
    !ageOk && "age is outside 50–80",
    !pyOk && "pack-years are under 20",
    !quitOk && "you quit more than 15 years ago",
  ].filter(Boolean);
  return reasons.length
    ? { met: false, text: `Not within the USPSTF criteria: ${reasons.join(", ")}.` }
    : { met: true, text: "Within the USPSTF criteria for yearly low-dose CT screening." };
}

/** American Cancer Society 2023: 50–80, ≥20 pack-years, current or former smoker (no quit-time limit). */
function acs(age: number, py: number, status: Status): Verdict {
  if (status === "never") return { met: false, text: "These guidelines apply to people who smoke or used to smoke." };
  const reasons = [
    !(age >= 50 && age <= 80) && "age is outside 50–80",
    py < 20 && "pack-years are under 20",
  ].filter(Boolean);
  return reasons.length
    ? { met: false, text: `Not within the American Cancer Society criteria: ${reasons.join(", ")}.` }
    : { met: true, text: "Within the American Cancer Society criteria for yearly low-dose CT screening." };
}

/** NHS England lung health check: 55–74 and have ever smoked (where offered). */
function nhs(age: number, status: Status): Verdict {
  if (status === "never") return { met: false, text: "The NHS check is for people who have ever smoked." };
  return age >= 55 && age <= 74
    ? { met: true, text: "In the age range for an NHS lung health check, where it is offered in your area." }
    : { met: false, text: "Outside the NHS lung health check age range (55–74)." };
}

let nextId = 2;

export function PackYearCalculator() {
  const [unit, setUnit] = useState<Unit>("cigarettes");
  const [periods, setPeriods] = useState<Period[]>([{ id: 1, amount: 20, years: 20 }]);
  const [age, setAge] = useState(55);
  const [status, setStatus] = useState<Status>("current");
  const [yearsSinceQuit, setYearsSinceQuit] = useState(0);
  const [touched, setTouched] = useState(false);

  const py = packYears(periods, unit);
  const pyRounded = Math.round(py * 10) / 10;

  function update(id: number, field: "amount" | "years", value: number) {
    setPeriods((list) => list.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
    if (!touched) {
      setTouched(true);
      trackEvent("tool_input", { tool: "pack_year_calculator" });
    }
  }

  const verdicts = [uspstf(age, py, status, yearsSinceQuit), acs(age, py, status), nhs(age, status)];
  const inputClass = "mt-1 block min-h-11 w-full rounded-xl border border-line bg-surface px-3 text-base text-ink";

  return (
    <div className="rounded-panel border border-line bg-surface p-6 shadow-card md:p-8">
      <fieldset>
        <legend className="text-sm font-semibold text-ink">How do you want to count?</legend>
        <div className="mt-2 inline-flex rounded-full border border-line p-1">
          {(["cigarettes", "packs"] as const).map((u) => (
            <button
              key={u}
              type="button"
              onClick={() => setUnit(u)}
              aria-pressed={unit === u}
              className={`min-h-10 rounded-full px-4 text-sm font-medium ${unit === u ? "bg-accent-strong text-white" : "text-ink"}`}
            >
              {u === "cigarettes" ? "Cigarettes per day" : "Packs per day"}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 space-y-4">
        {periods.map((p, i) => (
          <div key={p.id} className="grid gap-3 rounded-xl border border-line bg-surface-muted p-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
            <label className="text-sm text-ink">
              {periods.length > 1 ? `Period ${i + 1}: ` : ""}
              {unit === "cigarettes" ? "Cigarettes per day" : "Packs per day"}
              <input
                type="number"
                inputMode="decimal"
                min={0}
                step={unit === "packs" ? 0.25 : 1}
                value={p.amount}
                onChange={(e) => update(p.id, "amount", Number(e.target.value))}
                className={inputClass}
              />
            </label>
            <label className="text-sm text-ink">
              Years smoked at that rate
              <input
                type="number"
                inputMode="decimal"
                min={0}
                step={0.5}
                value={p.years}
                onChange={(e) => update(p.id, "years", Number(e.target.value))}
                className={inputClass}
              />
            </label>
            {periods.length > 1 ? (
              <button
                type="button"
                onClick={() => setPeriods((list) => list.filter((x) => x.id !== p.id))}
                className="min-h-11 rounded-full px-4 text-sm text-ink-muted hover:bg-surface"
              >
                Remove
              </button>
            ) : null}
          </div>
        ))}
        <button
          type="button"
          onClick={() => setPeriods((list) => [...list, { id: nextId++, amount: 10, years: 5 }])}
          className="min-h-11 rounded-full border border-line px-4 text-sm font-medium text-ink hover:bg-surface-muted"
        >
          + Add another period (if your smoking changed)
        </button>
      </div>

      <div aria-live="polite" className="mt-6 rounded-xl border border-accent/30 bg-accent-soft/40 p-5">
        <p className="text-sm text-ink-muted">Your smoking history</p>
        <p className="text-4xl font-semibold tracking-tight text-ink">
          {pyRounded} <span className="text-lg font-medium">pack-years</span>
        </p>
        <p className="mt-1 text-sm text-ink-muted">
          One pack-year is 20 cigarettes a day for one year.
        </p>
      </div>

      <h2 className="mt-8 text-base font-semibold text-ink">Lung cancer screening check</h2>
      <div className="mt-3 grid gap-4 sm:grid-cols-3">
        <label className="text-sm text-ink">
          Your age
          <input type="number" min={18} max={110} value={age} onChange={(e) => setAge(Number(e.target.value))} className={inputClass} />
        </label>
        <label className="text-sm text-ink">
          Do you smoke now?
          <select value={status} onChange={(e) => setStatus(e.target.value as Status)} className={inputClass}>
            <option value="current">Yes, I smoke</option>
            <option value="former">I quit</option>
            <option value="never">I never smoked</option>
          </select>
        </label>
        {status === "former" ? (
          <label className="text-sm text-ink">
            Years since you quit
            <input type="number" min={0} max={80} value={yearsSinceQuit} onChange={(e) => setYearsSinceQuit(Number(e.target.value))} className={inputClass} />
          </label>
        ) : null}
      </div>

      <ul className="mt-4 space-y-2">
        {verdicts.map((v) => (
          <li key={v.text} className="flex gap-3 rounded-xl border border-line p-3 text-sm leading-6 text-ink">
            <span aria-hidden className={`mt-0.5 font-semibold ${v.met ? "text-accent-strong" : "text-ink-muted"}`}>
              {v.met ? "✓" : "–"}
            </span>
            <span>{v.text}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs leading-5 text-ink-muted">
        This is a general guide, not a medical decision. Screening also depends on your overall health.
        Talk to your doctor or GP about whether screening is right for you.
      </p>
    </div>
  );
}
