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
  title: "Blou vs Quit Genius (2026): tracker vs clinical CBT program",
  description:
    "Blou vs Quit Genius: Blou is a visual iPhone quit tracker; Quit Genius is a structured CBT/coaching program often tied to employers. Pick based on access and budget.",
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
      "No. Quit Genius delivers a clinical-style curriculum with human coaching in many offerings. Blou is a consumer tracker focused on cravings, savings, and milestones.",
  },
  {
    question: "Which is better if my employer pays for Quit Genius?",
    answer:
      "Use the benefit you already paid for via payroll—then add Blou only if you want a different daily visual loop on iPhone.",
  },
  {
    question: "Which is cheaper?",
    answer:
      "Blou is free to start with optional premium. Quit Genius is often employer-sponsored; direct consumer pricing varies.",
  },
  {
    question: "Android?",
    answer:
      "Quit Genius lists cross-platform options in many deployments. Blou remains iOS-only in 2026.",
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
      <Script id="blou-vs-qg-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Blou vs Quit Genius", path: "/blou-vs-quit-genius" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Comparison
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Blou vs Quit Genius
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Quit Genius plays in a different lane: structured programs and
          coaching. Blou is a pocket tracker for people who want progress visible
          every day on iPhone.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="compare_quit_genius" placement="article_intro" />
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
          { id: "choose-qg", label: "Choose Quit Genius if…" },
          { id: "feature-differences", label: "Feature differences" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Choose Blou if you want a lightweight visual tracker on iPhone with craving and savings loops. Choose Quit Genius if you want a structured CBT-style program with coaching—often through an employer—and are willing to follow a curriculum."
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
            <span>You are on iPhone and like visual streak + savings framing.</span>
          </li>
        </ul>
      </section>

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
              <strong>Access</strong>: Blou App Store download. Quit Genius may
              require enrollment/employer sponsorship.
            </span>
          </li>
        </ul>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-blou-vs-quit-genius" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="compare_quit_genius"
          placement="article_footer_card"
        />
        <Link
          href="/smoking-cessation-app"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Cessation app guide →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/blou-vs-quit-genius</code>
      </p>
    </div>
  );
}
