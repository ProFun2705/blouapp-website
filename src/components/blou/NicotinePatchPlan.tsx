"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/track";

type Schedule = "6-2-2" | "4-2-2";
type Step = { step: number; mg: number; weeks: number };

/**
 * OTC Drug Facts schedules. More than 10 cigarettes a day starts at Step 1
 * (21 mg); 10 or fewer starts at Step 2 (14 mg) for 6 weeks, then Step 3.
 * Brands differ on Step 1 length (6 weeks on NicoDerm-style labels, 4 weeks
 * on several store brands), so the user picks what their box says.
 */
export function patchPlan(cigarettesPerDay: number, schedule: Schedule): Step[] {
  if (cigarettesPerDay > 10) {
    return schedule === "6-2-2"
      ? [{ step: 1, mg: 21, weeks: 6 }, { step: 2, mg: 14, weeks: 2 }, { step: 3, mg: 7, weeks: 2 }]
      : [{ step: 1, mg: 21, weeks: 4 }, { step: 2, mg: 14, weeks: 2 }, { step: 3, mg: 7, weeks: 2 }];
  }
  return [{ step: 2, mg: 14, weeks: 6 }, { step: 3, mg: 7, weeks: 2 }];
}

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" });

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function NicotinePatchPlan() {
  const [cpd, setCpd] = useState(20);
  const [schedule, setSchedule] = useState<Schedule>("6-2-2");
  const [start, setStart] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setStart(new Date().toISOString().slice(0, 10)));
  }, []);

  function touch() {
    if (touched) return;
    setTouched(true);
    trackEvent("tool_input", { tool: "nicotine_patch_plan" });
  }

  const steps = patchPlan(Number.isFinite(cpd) ? cpd : 0, schedule);
  const startDate = start ? new Date(`${start}T00:00:00`) : null;
  const rows = steps.map((s, i) => {
    const offset = steps.slice(0, i).reduce((sum, prev) => sum + prev.weeks, 0);
    const from = startDate ? addDays(startDate, offset * 7) : null;
    const to = startDate ? addDays(startDate, (offset + s.weeks) * 7 - 1) : null;
    return { ...s, weekFrom: offset + 1, weekTo: offset + s.weeks, from, to };
  });
  const totalWeeks = steps.reduce((sum, s) => sum + s.weeks, 0);
  const inputClass = "mt-1 block min-h-11 w-full rounded-xl border border-line bg-surface px-3 text-base text-ink";

  return (
    <div className="rounded-panel border border-line bg-surface p-6 shadow-card md:p-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="text-sm text-ink">
          Cigarettes you smoke per day
          <input
            type="number"
            min={1}
            max={80}
            value={cpd}
            onChange={(e) => {
              setCpd(Number(e.target.value));
              touch();
            }}
            className={inputClass}
          />
        </label>
        <label className="text-sm text-ink">
          Schedule on your patch box
          <select
            value={schedule}
            onChange={(e) => {
              setSchedule(e.target.value as Schedule);
              touch();
            }}
            className={inputClass}
          >
            <option value="6-2-2">Step 1 for 6 weeks (e.g. NicoDerm CQ)</option>
            <option value="4-2-2">Step 1 for 4 weeks (some store brands)</option>
          </select>
        </label>
        <label className="text-sm text-ink">
          Start date
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} className={inputClass} />
        </label>
      </div>

      <div aria-live="polite" className="mt-6">
        <p className="text-sm text-ink-muted">
          {cpd > 10
            ? "More than 10 cigarettes a day: labels say to start at Step 1 (21 mg)."
            : "10 or fewer cigarettes a day: labels say to start at Step 2 (14 mg)."}{" "}
          Total: {totalWeeks} weeks.
        </p>
        <ol className="mt-4 space-y-3">
          {rows.map((r) => (
            <li key={r.step} className="grid gap-2 rounded-xl border border-line p-4 sm:grid-cols-[7rem_1fr] sm:items-center">
              <p className="text-2xl font-semibold tracking-tight text-ink">
                {r.mg} <span className="text-sm font-medium">mg</span>
              </p>
              <div>
                <p className="text-sm font-semibold text-ink">
                  Step {r.step}: weeks {r.weekFrom}–{r.weekTo} ({r.weeks} weeks)
                </p>
                {r.from && r.to ? (
                  <p className="text-sm text-ink-muted">
                    {dateFormat.format(r.from)} – {dateFormat.format(r.to)}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={() => window.print()}
          className="mt-4 min-h-11 rounded-full border border-line px-5 text-sm font-medium text-ink hover:bg-surface-muted"
        >
          Print this plan
        </button>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          Always follow the Drug Facts label on your box and ask a pharmacist or doctor before starting,
          especially if you are pregnant or breastfeeding, under 18, weigh under 45 kg (100 lb), or have
          heart disease or an irregular heartbeat.
        </p>
      </div>
    </div>
  );
}
