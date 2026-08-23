import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { ArticleConversionFooter } from "@/components/marketing/ArticleConversionFooter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { Byline } from "@/components/marketing/Byline";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { SpeakableJsonLd } from "@/components/marketing/SpeakableJsonLd";
import {
  ComparisonChoices,
  ComparisonTable,
  TextLink,
} from "@/components/marketing/ComparisonChoices";
import { SocialProof } from "@/components/marketing/SocialProof";
import {
  BLOU_PROFILE,
  COMPETITORS,
  type BlouVsPageConfig,
} from "@/lib/competitors";
import { buildArticleJsonLd } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

type Props = {
  config: BlouVsPageConfig;
};

export function BlouVsPageContent({ config }: Props) {
  const competitor = COMPETITORS[config.competitorSlug];
  const pathSlug = config.path.replace(/^\//, "");

  const articleJsonLd = buildArticleJsonLd({
    title: config.metaTitle,
    description: config.metaDescription,
    path: config.path,
    datePublished: config.published,
    dateModified: config.modified,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
  });

  const chooseBlouItems = [
    "You're on iPhone and want a clean, distraction-free tracker.",
    <>
      You prefer progress shown as real health milestones and{" "}
      <TextLink href="/tools/money-saved">money saved</TextLink> rather than
      game levels or community feeds.
    </>,
    "You want craving support that's fast and repeatable—timer + one replacement action.",
    ...(config.chooseBlouExtra ?? []).map((item) => item),
  ];

  const chooseCompetitorItems = [
    ...competitor.bestFor.map((item) => item),
    ...(config.chooseCompetitorExtra ?? []),
  ];

  const tableRows = [
    { label: "Platforms", a: BLOU_PROFILE.platforms, b: competitor.platforms },
    {
      label: "Motivation",
      a: BLOU_PROFILE.motivation,
      b: competitor.motivation,
    },
    {
      label: "Craving tools",
      a: BLOU_PROFILE.cravingTools,
      b: competitor.cravingTools,
    },
    ...(config.extraTableRows ?? []),
  ];

  return (
    <div className="flex flex-col gap-10">
      <Script id={`${pathSlug}-article-json-ld`} type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs items={[{ name: config.h1, path: config.path }]} />

      <header className="masthead">
        <p className="text-sm font-medium text-teal-700">
          {config.kicker ?? "Comparison"}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          {config.h1}
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          {config.intro}
        </p>
        <div className="mt-5">
          <Byline
            datePublished={config.published}
            dateModified={config.modified}
          />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink
            campaign="article_intro"
            placement="article_intro"
          />
          <Link
            href="/compare"
            className="inline-flex h-11 items-center justify-center rounded-sm border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            All comparisons →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "choose-blou", label: "Choose Blou if…" },
          {
            id: `choose-${competitor.slug}`,
            label: `Choose ${competitor.name} if…`,
          },
          { id: "feature-differences", label: "Feature differences" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />
      <SpeakableJsonLd name={config.metaTitle} path={config.path} />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer={config.quickAnswer}
          facts={config.quickFacts}
        />
      </section>

      <ComparisonChoices
        left={{
          id: "choose-blou",
          title: "Choose Blou if…",
          items: chooseBlouItems,
        }}
        right={{
          id: `choose-${competitor.slug}`,
          title: `Choose ${competitor.name} if…`,
          items: chooseCompetitorItems,
        }}
      />

      <ComparisonTable
        id="feature-differences"
        title="Feature differences at a glance"
        columnA="Blou"
        columnB={competitor.name}
        rows={tableRows}
      />
      <p className="max-w-[65ch] text-base leading-7 text-teal-900/90">
        Both work best when combined with a real quit strategy—see{" "}
        <TextLink href="/how-to-quit-smoking">how to quit smoking</TextLink>.
      </p>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection
          items={config.faq}
          jsonLdId={`faq-${pathSlug}`}
        />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/quit-smoking-tracker"
          className="inline-flex h-11 items-center justify-center rounded-sm border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Use a quit tracker →
        </Link>
      </div>

      <ArticleConversionFooter campaign={`${pathSlug}_footer`} />
    </div>
  );
}
