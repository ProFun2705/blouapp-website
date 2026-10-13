import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { Byline } from "@/components/marketing/Byline";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { SocialProof } from "@/components/marketing/SocialProof";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-05-13";

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
      "Depends on your style. Flamy leans into quick daily game-style check-ins. Blou focuses on visual streaks, savings, milestones, and a fast craving loop on iPhone.",
  },
  {
    question: "Which is better on Android?",
    answer:
      "Flamy lists Android support. Blou is iOS-only in 2026 with an Android waitlist on the homepage.",
  },
  {
    question: "Which is better for cravings in the moment?",
    answer:
      "The winner is whichever app you will actually open in under 10 seconds. Test both free tiers during a real craving window.",
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
      <Script id="blou-vs-flamy-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs items={[{ name: "Blou vs Flamy", path: "/blou-vs-flamy" }]} />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Comparison
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Blou vs Flamy
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          We make Blou, so we are not neutral. Flamy is a legitimate alternative
          if you want lightweight daily challenges across platforms.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="compare_flamy" placement="article_intro" />
          <Link
            href="/best-quit-smoking-apps"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Full apps roundup →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "choose-blou", label: "Choose Blou if…" },
          { id: "choose-flamy", label: "Choose Flamy if…" },
          { id: "feature-differences", label: "Feature differences" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Choose Blou if you want a visual iPhone tracker with savings, milestones, and a craving-first workflow. Choose Flamy if you want simple daily challenge-style check-ins and need Android today."
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
              You want money saved + milestone framing alongside cravings.
            </span>
          </li>
        </ul>
      </section>

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
              <strong>Platforms</strong>: Blou (iOS). Flamy (iOS + Android).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Style</strong>: Blou = progress dashboards + craving speed.
              Flamy = lightweight daily challenges.
            </span>
          </li>
        </ul>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-blou-vs-flamy" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="compare_flamy"
          placement="article_footer_card"
        />
        <Link
          href="/how-to-quit-smoking"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Quit plan →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/blou-vs-flamy</code>
      </p>
    </div>
  );
}
