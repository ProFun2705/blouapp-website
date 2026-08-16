"use client";

import { useMemo, useState } from "react";

const milestones = [
  { label: "24 hours", day: 1, description: "Carbon monoxide drops and oxygen delivery improves." },
  { label: "48 hours", day: 2, description: "Taste and smell can start recovering." },
  { label: "1 week", day: 7, description: "Many cravings become less intense than day 1." },
  { label: "2 weeks", day: 14, description: "Circulation and breathing comfort can improve." },
  { label: "1 month", day: 30, description: "Daily movement may feel easier with less irritation." },
  { label: "1 year", day: 365, description: "Sustained progress supports long-term heart health trends." },
] as const;

export function LungRecoveryTimeline() {
  const [daysSmokeFree, setDaysSmokeFree] = useState(7);

  const safeDaysSmokeFree = Number.isFinite(daysSmokeFree)
    ? Math.max(0, Math.floor(daysSmokeFree))
    : 0;

  const completedMilestones = useMemo(() => {
    return milestones.filter((milestone) => safeDaysSmokeFree >= milestone.day).length;
  }, [safeDaysSmokeFree]);

  return (
    <section className="section-block">
      <h2 className="text-xl font-semibold text-teal-950">
        Lung recovery timeline visualizer
      </h2>
      <p className="mt-2 max-w-[65ch] text-base leading-6 text-teal-900/80">
        Enter smoke-free days and review milestone-by-milestone progress.
      </p>

      <label className="mt-5 flex max-w-xs flex-col gap-2 text-sm font-medium text-teal-900">
        Days smoke-free
        <input
          type="number"
          inputMode="numeric"
          min={0}
          step={1}
          value={safeDaysSmokeFree}
          onChange={(event) => setDaysSmokeFree(Number(event.target.value))}
          className="tabular h-11 rounded-sm border border-teal-200 px-3 text-base text-teal-950"
        />
      </label>

      <p className="mt-4 text-sm text-teal-900/80" aria-live="polite">
        Milestones reached:{" "}
        <span className="tabular font-semibold text-teal-950">
          {completedMilestones}
        </span>{" "}
        / {milestones.length}
      </p>

      <ol className="mt-5 divide-y divide-teal-200 border-t border-teal-200">
        {milestones.map((milestone) => {
          const reached = safeDaysSmokeFree >= milestone.day;
          return (
            <li key={milestone.label} className="flex gap-3 py-4">
              <span
                aria-hidden
                className={[
                  "cal-x mt-0.5 w-6 text-xl",
                  reached ? "text-teal-600" : "text-teal-200",
                ].join(" ")}
              >
                {reached ? "×" : "·"}
              </span>
              <div>
                <p className="text-sm font-semibold text-teal-950">
                  {milestone.label}
                  {reached ? (
                    <span className="ml-2 text-xs font-medium text-teal-700">
                      reached
                    </span>
                  ) : null}
                </p>
                <p className="mt-1 text-sm leading-6 text-teal-900/85">
                  {milestone.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
