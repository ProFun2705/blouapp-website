import Link from "next/link";

/**
 * Honest Android note. The previous email form posted to an API route that
 * never existed, so sign-ups were silently lost. Until there is a real list,
 * we say plainly that Blou is iPhone-only.
 */
export function AndroidWaitlistCard() {
  return (
    <div className="rounded-card border border-line bg-surface p-6 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">Android</p>
      <h2 className="mt-1 text-xl font-semibold text-ink">Blou is iPhone-only for now</h2>
      <p className="mt-2 text-sm leading-6 text-ink-muted">
        There is no Android version yet. Everything on this website works on any phone: the{" "}
        <Link href="/how-to-quit-smoking" className="font-medium text-accent-strong underline underline-offset-2">
          quit plan
        </Link>
        , the{" "}
        <Link href="/guides" className="font-medium text-accent-strong underline underline-offset-2">
          symptom and milestone guides
        </Link>
        , and the{" "}
        <Link href="/tools/money-saved" className="font-medium text-accent-strong underline underline-offset-2">
          money calculator
        </Link>
        .
      </p>
    </div>
  );
}
