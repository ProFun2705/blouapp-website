"use client";

import { useMemo, useState } from "react";
import { QUIT_MILESTONES } from "@/lib/quitMilestones";

// Day-scale milestones from the shared, sourced timeline (src/lib/quitMilestones.ts).
const milestones = QUIT_MILESTONES.filter((m) => m.hours >= 24 && m.hours <= 365 * 24).map((m) => ({
  label: m.label,
  day: m.hours / 24,
  description: m.body,
  source: m.source,
}));

export function LungRecoveryTimeline() {
  const [daysSmokeFree, setDaysSmokeFree] = useState(7);

  const safeDaysSmokeFree = Number.isFinite(daysSmokeFree) ? Math.max(0, Math.floor(daysSmokeFree)) : 0;

  const completedMilestones = useMemo(() => {
    return milestones.filter((milestone) => safeDaysSmokeFree >= milestone.day).length;
  }, [safeDaysSmokeFree]);

  return (
    <section className="rounded-card border border-line bg-surface p-6 shadow-card">
      <h2 className="text-xl font-semibold text-ink">Lung recovery timeline visualizer</h2>
      <p className="mt-2 text-sm leading-6 text-ink-muted">
        Enter smoke-free days and review milestone-by-milestone progress.
      </p>

      <label className="mt-5 flex max-w-xs flex-col gap-2 text-sm font-medium text-teal-900">
        Days smoke-free
        <input
          type="number"
          min={0}
          step={1}
          value={safeDaysSmokeFree}
          onChange={(event) => setDaysSmokeFree(Number(event.target.value))}
          className="h-11 rounded-lg border border-teal-200 px-3 text-base text-ink outline-none transition focus:border-teal-400"
        />
      </label>

      <p className="mt-4 text-sm text-ink-muted">
        Milestones reached: <span className="font-semibold text-ink">{completedMilestones}</span> / {milestones.length}
      </p>

      <ol className="mt-5 space-y-3">
        {milestones.map((milestone) => {
          const reached = safeDaysSmokeFree >= milestone.day;
          return (
            <li
              key={milestone.label}
              className={[
                "rounded-xl border p-4 transition",
                reached ? "border-teal-300 bg-teal-50/70" : "border-teal-200 bg-white",
              ].join(" ")}
            >
              <p className="text-sm font-semibold text-ink">{milestone.label}</p>
              <p className="mt-1 text-sm leading-6 text-ink-muted">
                {milestone.description}{" "}
                <a href={milestone.source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  Source
                </a>
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
