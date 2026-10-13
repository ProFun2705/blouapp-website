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
const CAMPAIGN = "article_blou-vs-quit-genius";

export const metadata: Metadata = buildMetadata({
  title: "Blou vs Quit Genius (2026): tracker vs CBT program",
  description:
    "Blou vs Quit Genius: Blou is an iPhone subscription app that shows your recovery; Quit Genius is a CBT and coaching program, often employer-backed.",
  path: "/blou-vs-quit-genius",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "blou vs quit genius",
    "quit genius alternative",
    "quit smoking app comparison",
  ],
});

const faqItems = [
  {
    question: "Is Blou trying to replace Quit Genius?",
    answer:
      "No. Quit Genius delivers a clinical-style curriculum with human coaching in many offerings. Blou is a consumer iPhone app focused on showing your own recovery: a photo timeline, lung checks, SOS craving help, and every milestone on one visual timeline.",
  },
  {
    question: "Which is better if my employer pays for Quit Genius?",
    answer:
      "Use the benefit you already paid for via payroll—then add Blou only if you want a different daily visual loop on iPhone.",
  },
  {
    question: "Which is cheaper?",
    answer:
      "Blou is a subscription with a free trial; nothing in the app works without an active subscription. Quit Genius is often employer-sponsored; direct consumer pricing varies.",
  },
  {
    question: "Android?",
    answer:
      "Quit Genius lists cross-platform options in many deployments. Blou is iPhone-only for now.",
  },
];

export default function BlouVsQuitGeniusPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Blou vs Quit Genius (2026): tracker vs clinical CBT program",
    description:
      "Comparison of Blou and Quit Genius for smoking cessation support.",
    path: "/blou-vs-quit-genius",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[{ name: "Blou vs Quit Genius", path: "/blou-vs-quit-genius" }]}
      />

      <ArticleHeader
        kicker="Comparison"
        title="Blou vs Quit Genius"
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
          Quit Genius plays in a different lane: structured programs and
          coaching. Blou is a pocket tracker for people who want progress visible
          every day on iPhone.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "choose-blou", label: "Choose Blou if…" },
          { id: "choose-qg", label: "Choose Quit Genius if…" },
          { id: "feature-differences", label: "Feature differences" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Choose Blou if you want a lightweight way to see your own recovery on iPhone (photo timeline, lung checks, SOS craving help), on a subscription with a free trial. Choose Quit Genius if you want a structured CBT-style program with coaching—often through an employer—and are willing to follow a curriculum."
          facts={[
            "Clinical programs and trackers can coexist; avoid double-paying for the same coaching.",
            "Medication decisions still belong to your clinician.",
            "Quitlines remain free in many countries.",
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
            <span>You want a fast daily tracker, not weekly homework.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You are on iPhone and want to see your recovery in a photo
              timeline and lung checks.
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
        If a self-serve app suits you, Blou for iPhone gives you a photo
        timeline, lung checks, SOS craving help, and every milestone on one
        visual timeline, with no lessons to keep up with.
      </InlineAppCta>

      <section
        id="choose-qg"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Choose Quit Genius if…
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You want guided lessons and human coaching accountability.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You have access through work or insurance.</span>
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
              <strong>Format</strong>: Blou = self-serve tracker. Quit Genius =
              structured program + coaching tier (varies by offering).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Access</strong>: Blou is an App Store subscription with a
              free trial (iPhone only). Quit Genius may
              require enrollment/employer sponsorship.
            </span>
          </li>
        </ul>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/best-quit-smoking-apps" variant="secondary">
          Compare quit apps →
        </ButtonLink>
      </div>
    </div>
  );
}
