import type { Metadata } from "next";
import Link from "next/link";
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

const PUBLISHED = "2026-05-20";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_blou-vs-quitstart";

export const metadata: Metadata = buildMetadata({
  title: "Blou vs quitSTART (2026): the CDC app compared",
  description:
    "Blou vs quitSTART, honestly compared: Blou is an iPhone subscription app that shows your recovery; quitSTART is a free, government-backed app.",
  path: "/blou-vs-quitstart",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "blou vs quitstart",
    "quitstart app review",
    "CDC quit smoking app",
    "quitstart vs blou",
    "best free quit smoking app",
    "quit smoking app comparison",
  ],
});

const faqItems = [
  {
    question: "Is quitSTART a good app?",
    answer:
      "quitSTART is developed by the U.S. Surgeon General's office and is completely free. It provides tips, challenges, and mood/craving tracking. It's a solid starting point, especially for first-time quitters who want a government-backed resource with no cost.",
  },
  {
    question: "Is Blou better than quitSTART?",
    answer:
      "They serve slightly different goals. quitSTART is free and officially backed—good for foundational tips and logging. Blou is an iPhone subscription app (with a free trial) focused on showing your own recovery: a photo timeline, lung checks, SOS craving help, and every milestone on one visual timeline. If you need something free, quitSTART is the better pick.",
  },
  {
    question: "Is quitSTART free?",
    answer:
      "Yes, quitSTART is completely free on both iOS and Android. It was developed with support from the National Cancer Institute and is designed to be accessible to everyone.",
  },
  {
    question: "Which app should I use if I've tried quitting before and failed?",
    answer:
      "Multiple attempts before success is normal—most people who successfully quit tried several times first. The key is learning from previous attempts: what triggered relapse, and how to address those cues next time. See our guide on trying to quit again.",
  },
  {
    question: "Can I use both apps at the same time?",
    answer:
      "You can, though tracking in two places can create friction. Most people do better with one consistent app they open every day. Choose the one that matches how you think about progress.",
  },
];

export default function BlouVsQuitStartPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Blou vs quitSTART (2026): CDC app vs Blou — which is better?",
    description:
      "An honest comparison of Blou and the CDC's quitSTART app for quitting smoking in 2026.",
    path: "/blou-vs-quitstart",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[{ name: "Blou vs quitSTART", path: "/blou-vs-quitstart" }]}
      />

      <ArticleHeader
        kicker="Comparison"
        title="Blou vs quitSTART"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/best-quit-smoking-apps" variant="secondary">
            See the full apps roundup →
          </ButtonLink>
        }
      >
        <p>
          We make Blou, so we&apos;re not neutral. quitSTART is a free,
          CDC-backed app with broad appeal. This page compares them so you can
          decide which one fits your quitting style.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "choose-blou", label: "Choose Blou if…" },
          { id: "choose-quitstart", label: "Choose quitSTART if…" },
          { id: "feature-differences", label: "Feature differences" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Choose quitSTART if you want a completely free, government-backed app with tips, challenges, and mood logging on iOS or Android. Choose Blou if you are on iPhone, want to see your own recovery (photo timeline, lung checks, SOS craving help), and are fine with a subscription after the free trial."
          facts={[
            "quitSTART was developed with backing from the U.S. National Cancer Institute and is 100% free.",
            "The best app is the one you'll actually open during a craving—speed and clarity matter most.",
            "Both apps work best when paired with a clear plan for your top triggers.",
          ]}
        />
      </section>

      <section
        id="choose-blou"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Choose Blou if…
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You want a clean, visual tracker on iPhone.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You&apos;re motivated by health milestones (see{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-week"
              >
                what happens after 1 week
              </Link>
              ) and seeing your own recovery in photos and lung checks.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You want SOS craving help that is there the second a craving
              hits.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You prefer a minimal daily habit loop rather than broad
              tip-of-the-day content.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You&apos;re fine with a subscription once the free trial ends; nothing
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
        id="choose-quitstart"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Choose quitSTART if…
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You want a completely free app with no paid features—ever.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You need Android support today.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You value government-backed health messaging and want tips from
              the Surgeon General&apos;s office.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You like daily challenges and distraction games built into the app
              experience.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="feature-differences"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Feature differences at a glance
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Cost:</strong> quitSTART is free. Blou is a subscription
              with a free trial; nothing in the app works without an active
              subscription.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Platforms:</strong> quitSTART (iOS + Android). Blou
              (iPhone only for now).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Backing:</strong> quitSTART is developed with NCI
              support. Blou is an independent app built by a small team.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Focus:</strong> quitSTART provides tips, challenges, and
              mood logs. Blou focuses on showing your own recovery: a photo
              timeline, lung checks, SOS craving help, and every milestone on
              one visual timeline.
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          Whichever app you choose, pair it with a clear plan for your top
          smoking cues. See{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/how-to-quit-smoking"
          >
            how to quit smoking
          </Link>{" "}
          and{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/prepare-to-quit-smoking"
          >
            the 7-day prep checklist
          </Link>
          .
        </p>
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
