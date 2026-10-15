"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { QUIT_MILESTONES, currentMilestoneIndex } from "@/lib/quitMilestones";
import { trackEvent } from "@/lib/track";

const HOUR_MS = 60 * 60 * 1000;

function toLocalInputValue(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

const plural = (n: number, unit: string) => `${n} ${unit}${n === 1 ? "" : "s"}`;

function formatElapsed(hours: number): string {
  if (hours < 1) return plural(Math.max(0, Math.round(hours * 60)), "minute");
  if (hours < 48) return plural(Math.floor(hours), "hour");
  const days = Math.floor(hours / 24);
  if (days < 60) return plural(days, "day");
  if (days < 730) return plural(Math.floor(days / 30.44), "month");
  return `${(days / 365.25).toFixed(1)} years`;
}

function formatUntil(hours: number): string {
  if (hours < 1) return "under an hour";
  if (hours < 48) return plural(Math.ceil(hours), "hour");
  const days = Math.ceil(hours / 24);
  if (days < 60) return plural(days, "day");
  if (days < 730) return plural(Math.round(days / 30.44), "month");
  return `${(days / 365.25).toFixed(1)} years`;
}

/**
 * "Where am I now?" tool: pick the date and time of your last cigarette and
 * see the milestone you've reached and the next three. Pure client-side; the
 * quit date is kept in the URL (?quit=) so the result can be bookmarked.
 */
export function QuitDateTimeline() {
  const [quitAt, setQuitAt] = useState<string>("");
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("quit");
    const parsed = fromUrl ? new Date(fromUrl) : null;
    const initial =
      parsed && !Number.isNaN(parsed.getTime()) ? parsed : new Date(Date.now() - 3 * 24 * HOUR_MS);
    queueMicrotask(() => {
      setQuitAt(toLocalInputValue(initial));
      setNow(Date.now());
    });
    const tick = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(tick);
  }, []);

  const quitTime = quitAt ? new Date(quitAt).getTime() : NaN;
  const hours = now !== null && Number.isFinite(quitTime) ? (now - quitTime) / HOUR_MS : NaN;
  const index = Number.isFinite(hours) ? currentMilestoneIndex(hours) : -1;
  const current = index >= 0 ? QUIT_MILESTONES[index] : null;
  const upcoming = useMemo(
    () => (Number.isFinite(hours) ? QUIT_MILESTONES.slice(index + 1, index + 4) : []),
    [hours, index],
  );

  function onChange(value: string) {
    setQuitAt(value);
    const url = new URL(window.location.href);
    if (value) url.searchParams.set("quit", value);
    window.history.replaceState(null, "", url);
    trackEvent("tool_input", { tool: "quit_timeline" });
  }

  const future = Number.isFinite(hours) && hours < 0;

  return (
    <div className="rounded-panel border border-line bg-surface p-6 shadow-card md:p-8">
      <label htmlFor="quit-at" className="text-sm font-semibold text-ink">
        When did you have your last cigarette?
      </label>
      <input
        id="quit-at"
        type="datetime-local"
        value={quitAt}
        max={now !== null ? toLocalInputValue(new Date(now)) : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 block min-h-11 w-full max-w-xs rounded-xl border border-line bg-surface px-3 text-base text-ink"
      />

      <div aria-live="polite" className="mt-6">
        {now === null ? null : future ? (
          <p className="text-sm text-ink-muted">
            That date is in the future. Planning ahead? Pick your quit day, then come back to this page
            once you&apos;ve started.
          </p>
        ) : !Number.isFinite(hours) ? (
          <p className="text-sm text-ink-muted">Enter a date and time to see where you are.</p>
        ) : (
          <>
            <p className="text-sm text-ink-muted">You&apos;ve been smoke-free for</p>
            <p className="text-3xl font-semibold tracking-tight text-ink">{formatElapsed(hours)}</p>

            {current ? (
              <div className="mt-5 rounded-xl border border-accent/30 bg-accent-soft/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  Reached: {current.label}
                </p>
                <p className="mt-1 text-base font-semibold text-ink">{current.title}</p>
                <p className="mt-1 text-sm leading-6 text-ink-muted">{current.body}</p>
                {current.guideSlug ? (
                  <Link
                    href={`/guides/${current.guideSlug}`}
                    className="mt-2 inline-block text-sm font-medium text-accent-strong underline underline-offset-2"
                  >
                    What to expect at {current.label}
                  </Link>
                ) : null}
              </div>
            ) : (
              <p className="mt-4 text-sm text-ink-muted">Your first milestone is only minutes away.</p>
            )}

            {upcoming.length ? (
              <>
                <p className="mt-6 text-sm font-semibold text-ink">Coming up next</p>
                <ol className="mt-2 space-y-2">
                  {upcoming.map((m) => (
                    <li key={m.id} className="flex flex-col gap-1 rounded-xl border border-line p-3 sm:flex-row sm:items-baseline sm:gap-3">
                      <span className="w-28 flex-none text-xs font-semibold uppercase tracking-wide text-accent">
                        in {formatUntil(m.hours - hours)}
                      </span>
                      <span className="text-sm text-ink">
                        <span className="font-semibold">{m.label}:</span> {m.title}
                      </span>
                    </li>
                  ))}
                </ol>
              </>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
