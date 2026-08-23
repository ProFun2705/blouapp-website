import type { ReactNode } from "react";
import { Byline } from "@/components/marketing/Byline";
import { ArticleConversionFooter } from "@/components/marketing/ArticleConversionFooter";

type ArticleMastheadProps = {
  kicker?: string;
  title: string;
  lede?: ReactNode;
  datePublished?: string;
  dateModified?: string;
  actions?: ReactNode;
};

export function ArticleMasthead({
  kicker,
  title,
  lede,
  datePublished,
  dateModified,
  actions,
}: ArticleMastheadProps) {
  return (
    <header className="masthead">
      {kicker ? (
        <p className="text-sm font-medium text-teal-700">{kicker}</p>
      ) : null}
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950 md:text-4xl">
        {title}
      </h1>
      {lede ? (
        <div className="mt-4 max-w-[65ch] text-base leading-7 text-teal-900/90">
          {lede}
        </div>
      ) : null}
      {datePublished && dateModified ? (
        <div className="mt-5">
          <Byline datePublished={datePublished} dateModified={dateModified} />
        </div>
      ) : null}
      {actions ? (
        <div className="mt-6 flex flex-wrap items-center gap-3">{actions}</div>
      ) : null}
    </header>
  );
}

type ArticleSectionProps = {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function ArticleSection({
  id,
  title,
  children,
  className,
}: ArticleSectionProps) {
  return (
    <section
      id={id}
      className={["section-block scroll-mt-24", className].filter(Boolean).join(" ")}
    >
      {title ? (
        <h2 className="text-xl font-semibold text-teal-950">{title}</h2>
      ) : null}
      <div className={title ? "mt-4" : undefined}>{children}</div>
    </section>
  );
}

type ArticleShellProps = {
  children: ReactNode;
  /** When set, renders a StayOnTrackCard footer before the article ends. */
  conversionFooterCampaign?: string;
};

export function ArticleShell({
  children,
  conversionFooterCampaign,
}: ArticleShellProps) {
  return (
    <article className="flex flex-col gap-8">
      {children}
      {conversionFooterCampaign ? (
        <ArticleConversionFooter campaign={conversionFooterCampaign} />
      ) : null}
    </article>
  );
}
