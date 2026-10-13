import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_blou-vs-flamy";

export const metadata: Metadata = buildMetadata({
  title: "Blou vs Flamy (2026): which quit app fits you?",
  description:
    "Blou vs Flamy: honest comparison. Flamy emphasizes lightweight daily challenges; Blou emphasizes visual progress and craving speed on iPhone.",
  path: "/blou-vs-flamy",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "blou vs flamy",
    "flamy quit smoking app",
    "quit smoking app comparison",
  ],
});

const faqItems = [
  {
    question: "Is Blou better than Flamy?",
    answer:
      "Depends on your style. Flamy leans into quick daily game-style check-ins. Blou is an iPhone subscription app (with a free trial) that shows your own recovery: a photo timeline, lung checks, SOS craving help, and every milestone on one visual timeline.",
  },
  {
    question: "Which is better on Android?",
    answer:
      "Flamy lists Android support. Blou is iPhone-only for now, with no Android version yet.",
  },
  {
    question: "Which is better for cravings in the moment?",
    answer:
      "The winner is whichever app you will actually open in under 10 seconds. Try both during a real craving window (Blou through its free trial).",
  },
  {
    question: "Do I still need NRT or medication?",
    answer:
      "Apps support behavior; medications change withdrawal biology for many people. Ask a clinician what fits you.",
  },
];

export default function BlouVsFlamyPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Blou vs Flamy (2026): which quit app fits you?",
    description:
      "Comparison of Blou and Flamy for smoking cessation support.",
    path: "/blou-vs-flamy",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs items={[{ name: "Blou vs Flamy", path: "/blou-vs-flamy" }]} />

      <ArticleHeader
        kicker="Comparison"
        title="Blou vs Flamy"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/best-quit-smoking-apps" variant="secondary">
            Full apps roundup →
          </ButtonLink>
        }
      >
        <p>
          We make Blou, so we are not neutral. Flamy is a legitimate alternative
          if you want lightweight daily challenges across platforms.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "choose-blou", label: "Choose Blou if…" },
          { id: "choose-flamy", label: "Choose Flamy if…" },
          { id: "feature-differences", label: "Feature differences" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Choose Blou if you want to see your own recovery on iPhone (photo timeline, lung checks, milestones) with SOS craving help, on a subscription with a free trial. Choose Flamy if you want simple daily challenge-style check-ins and need Android today."
          facts={[
            "Both apps compete in the “make quitting feel doable” space—your taste in UI matters.",
            "Pair any app with a quit plan and, when appropriate, NRT or prescriptions.",
            "See /best-quit-smoking-apps for a wider field.",
          ]}
        />
      </section>

      <section
        id="choose-blou"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Choose Blou if…</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You are on iPhone and want clean visual progress.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You want a photo timeline, lung checks, and milestone framing
              alongside SOS craving help.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You are fine with a subscription once the free trial ends; nothing
              in Blou works without one.
            </span>
          </li>
        </ul>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        If that sounds like you, Blou for iPhone gives you a photo timeline, lung
        checks, SOS craving help, and every milestone on one visual timeline.
      </InlineAppCta>

      <section
        id="choose-flamy"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Choose Flamy if…</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You like bite-sized daily challenges and streak games.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You need Android support today.</span>
          </li>
        </ul>
      </section>

      <section
        id="feature-differences"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Feature differences (simple)
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Platforms</strong>: Blou (iPhone only). Flamy (iOS + Android).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Pricing</strong>: Blou is a subscription with a free
              trial. Flamy has a free tier with a paid Pro upgrade.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Style</strong>: Blou = one visual timeline of your recovery + SOS craving help.
              Flamy = lightweight daily challenges.
            </span>
          </li>
        </ul>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/how-to-quit-smoking" variant="secondary">
          Quit plan →
        </ButtonLink>
      </div>
    </div>
  );
}
