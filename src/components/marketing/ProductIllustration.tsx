import Image from "next/image";

/**
 * Real App Store screenshots, if available. Drop PNGs into
 * `public/app-screenshots/` and list them here; the hero then shows them
 * instead of the illustration below.
 */
const SCREENSHOTS: ReadonlyArray<{ src: string; alt: string }> = [];

const photoWeeks = ["Day 1", "Week 2", "Week 6", "Month 3"] as const;
const lungChecks = [38, 46, 55, 63, 71] as const;

/**
 * A drawn, clearly labelled illustration of what Blou shows (photo timeline,
 * lung checks, SOS). It is not a screenshot and does not claim to be one.
 */
export function ProductIllustration() {
  if (SCREENSHOTS.length > 0) {
    const [first] = SCREENSHOTS;
    return (
      <figure className="mx-auto w-full max-w-[280px]">
        <Image src={first.src} alt={first.alt} width={590} height={1278} priority className="rounded-[2.2rem] shadow-xl" />
      </figure>
    );
  }

  return (
    <figure className="mx-auto w-full max-w-[290px]">
      <div
        aria-hidden
        className="rounded-[2.6rem] border-[10px] border-ink bg-surface p-4 shadow-xl"
      >
        <div className="mx-auto mb-4 h-5 w-24 rounded-full bg-ink" />
        <p className="text-center text-sm font-semibold text-ink">blou</p>
        <p className="mt-2 text-center text-5xl font-semibold tracking-tight text-ink">12</p>
        <p className="text-center text-sm text-ink-muted">days smoke-free</p>

        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-accent">Photo timeline</p>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {photoWeeks.map((label, i) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div
                className="aspect-square w-full rounded-lg"
                style={{ background: `linear-gradient(160deg, #cbd5d1 0%, hsl(${168 - i * 6} 45% ${82 - i * 4}%) 100%)` }}
              />
              <span className="text-[10px] text-ink-muted">{label}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">Lung checks</p>
        <div className="mt-2 flex h-16 items-end gap-2">
          {lungChecks.map((v) => (
            <div key={v} className="flex-1 rounded-t-md bg-accent/70" style={{ height: `${v}%` }} />
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-accent-strong py-2.5 text-center text-sm font-semibold text-white">
          SOS: craving right now
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-ink-muted">
        Illustration of the app. See real screenshots on the App Store.
      </figcaption>
    </figure>
  );
}
