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
import {
  BLOU_PROFILE,
  COMPETITORS,
  type CompetitorPairPageConfig,
} from "@/lib/competitors";
import { buildArticleJsonLd } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

type Props = {
  config: CompetitorPairPageConfig;
};

export function CompetitorPairPageContent({ config }: Props) {
  const a = COMPETITORS[config.slugA];
  const b = COMPETITORS[config.slugB];
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

  return (
    <div className="flex flex-col gap-10">
      <Script id={`${pathSlug}-article-json-ld`} type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs items={[{ name: config.h1, path: config.path }]} />

      <header className="masthead">
        <p className="text-sm font-medium text-teal-700">Comparison</p>
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
          { id: `choose-${a.slug}`, label: `Choose ${a.name} if…` },
          { id: `choose-${b.slug}`, label: `Choose ${b.name} if…` },
          { id: "choose-blou", label: "Third option: Blou" },
          { id: "feature-differences", label: "Feature differences" },
          { id: "faq", label: "FAQ" },
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
          id: `choose-${a.slug}`,
          title: `Choose ${a.name} if…`,
          items: a.bestFor,
        }}
        right={{
          id: `choose-${b.slug}`,
          title: `Choose ${b.name} if…`,
          items: b.bestFor,
        }}
      />

      <section id="choose-blou" className="scroll-mt-24 section-block">
        <h2 className="text-xl font-semibold text-teal-950">
          Third option: Blou (we make this one)
        </h2>
        <p className="mt-3 max-w-[65ch] text-base leading-7 text-teal-900/90">
          If neither {a.name} nor {b.name} fits, Blou is a private iPhone
          tracker focused on{" "}
          <TextLink href="/tools/money-saved">money saved</TextLink>, recovery
          milestones, and fast craving tools—without community feeds or RPG
          mechanics.
        </p>
        <div className="mt-4">
          <AppStoreBadgeLink
            campaign={`${pathSlug}_intro`}
            placement="article_intro"
          />
        </div>
      </section>

      <ComparisonTable
        id="feature-differences"
        title={`${a.name} vs ${b.name} vs Blou`}
        columnA={a.name}
        columnB={b.name}
        rows={[
          { label: "Platforms", a: a.platforms, b: b.platforms },
          { label: "Motivation", a: a.motivation, b: b.motivation },
          { label: "Craving tools", a: a.cravingTools, b: b.cravingTools },
        ]}
      />
      <p className="max-w-[65ch] text-sm leading-7 text-teal-900/80">
        Blou: {BLOU_PROFILE.platforms}. {BLOU_PROFILE.motivation}.{" "}
        {BLOU_PROFILE.cravingTools}.
      </p>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={config.faq} jsonLdId={`faq-${pathSlug}`} />
      </section>

      <ArticleConversionFooter campaign={`${pathSlug}_footer`} />
    </div>
  );
}
