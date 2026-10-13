import Image from "next/image";
import type { ReactNode } from "react";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Card } from "@/components/ui/Card";
import { APP_FEATURES, PRICING_CTA_NOTE } from "@/lib/site";

type CtaProps = {
  /** Page-level campaign token, e.g. "guide_dreams-and-sleep". */
  campaign: string;
};

/** QR code for desktop visitors, who cannot install an iPhone app from there. */
export function DesktopQr({ className = "" }: { className?: string }) {
  return (
    <div className={`hidden items-center gap-3 md:flex ${className}`.trim()}>
      <Image
        src="/qr/blou-app.svg"
        alt="QR code that opens Blou in the App Store"
        width={88}
        height={88}
        className="rounded-lg border border-line bg-white p-1"
        unoptimized
      />
      <p className="max-w-[11rem] text-xs leading-5 text-ink-muted">
        On a computer? Scan with your iPhone camera to open Blou in the App Store.
      </p>
    </div>
  );
}

export function PricingNote({ className = "" }: { className?: string }) {
  return <p className={`text-xs text-ink-muted ${className}`.trim()}>{PRICING_CTA_NOTE}</p>;
}

/** Hero CTA block: badge, desktop QR, honest pricing line. */
export function HeroAppCta({ campaign }: CtaProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <AppStoreBadgeLink campaign={campaign} placement="hero" height={54} />
        <DesktopQr />
      </div>
      <PricingNote />
    </div>
  );
}

/**
 * A short, contextual CTA placed mid-article. `children` is one sentence that
 * ties the section the reader just finished to what Blou does.
 */
export function InlineAppCta({ campaign, children }: CtaProps & { children: ReactNode }) {
  return (
    <aside
      aria-label="Blou app"
      className="flex flex-col gap-4 rounded-card border border-accent/30 bg-accent-soft/40 p-5 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-start gap-3">
        <Image src="/logos/blou-logo.png" alt="" width={36} height={36} className="mt-0.5 rounded-lg" />
        <div>
          <p className="text-sm leading-6 text-ink">{children}</p>
          <PricingNote className="mt-1" />
        </div>
      </div>
      <AppStoreBadgeLink campaign={campaign} placement="inline" height={44} />
    </aside>
  );
}

type EndCtaProps = CtaProps & {
  title?: string;
  description?: string;
};

/** The single end-of-page app card used on every article. */
export function EndAppCta({
  campaign,
  title = "See your own recovery, not an average",
  description = "Guides tell you what usually happens. Blou shows what is happening to you, from your first smoke-free day.",
}: EndCtaProps) {
  return (
    <Card id="get-blou" size="lg">
      <div className="flex items-center gap-3">
        <Image src="/logos/blou-logo.png" alt="" width={40} height={40} className="rounded-xl" />
        <p className="text-sm font-semibold text-ink">Blou for iPhone</p>
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-ink-muted">{description}</p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {APP_FEATURES.map((feature) => (
          <li key={feature.title} className="rounded-xl border border-line bg-surface-muted p-4">
            <p className="text-sm font-semibold text-ink">{feature.title}</p>
            <p className="mt-1 text-sm leading-6 text-ink-muted">{feature.body}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
        <AppStoreBadgeLink campaign={campaign} placement="end" height={52} />
        <DesktopQr />
      </div>
      <PricingNote className="mt-3" />
    </Card>
  );
}
