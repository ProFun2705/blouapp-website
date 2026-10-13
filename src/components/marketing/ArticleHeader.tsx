import Image from "next/image";
import type { ReactNode } from "react";
import { Byline } from "@/components/marketing/Byline";
import { Kicker } from "@/components/ui/Card";
import { appStoreHref } from "@/lib/appStore";

type ArticleHeaderProps = {
  kicker: string;
  title: string;
  /** The lede: one or two sentences that answer the page's question. */
  children: ReactNode;
  datePublished: string;
  dateModified: string;
  /** Page-level campaign token for the app intro link. */
  campaign: string;
  /** Optional extra actions (secondary links) shown under the byline. */
  actions?: ReactNode;
};

/**
 * Shared article masthead: kicker, H1, lede, byline, and a one-line app intro.
 * Replaces the header card that used to be copy-pasted into every article.
 */
export function ArticleHeader({
  kicker,
  title,
  children,
  datePublished,
  dateModified,
  campaign,
  actions,
}: ArticleHeaderProps) {
  return (
    <header className="rounded-panel border border-line bg-surface p-6 shadow-card md:p-8">
      <Kicker>{kicker}</Kicker>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h1>
      <div className="mt-4 text-base leading-7 text-ink-muted">{children}</div>
      <div className="mt-5">
        <Byline datePublished={datePublished} dateModified={dateModified} />
      </div>
      {actions ? <div className="mt-5 flex flex-wrap items-center gap-3">{actions}</div> : null}
      <a
        href={appStoreHref({ campaign, placement: "intro" })}
        target="_blank"
        rel="noopener"
        data-event="app_store_click"
        data-event-label="intro"
        data-event-campaign={campaign}
        className="mt-6 flex items-center gap-3 rounded-xl border border-line bg-surface-muted p-3 text-sm text-ink transition-colors hover:border-accent/40"
      >
        <Image src="/logos/blou-logo.png" alt="" width={32} height={32} className="rounded-lg" />
        <span className="flex-1">
          <span className="font-semibold">Quitting right now?</span> Blou for iPhone shows your own
          recovery, day by day.
        </span>
        <span aria-hidden className="hidden font-semibold text-accent-strong sm:inline">
          Get the app →
        </span>
        <span aria-hidden className="font-semibold text-accent-strong sm:hidden">
          →
        </span>
      </a>
    </header>
  );
}
