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

const PUBLISHED = "2026-05-20";
const MODIFIED = "2026-05-20";

export const metadata: Metadata = buildMetadata({
  title: "Blou vs quitSTART (2026): CDC app vs Blou — which is better?",
  description:
    "Blou vs quitSTART: an honest comparison. Choose Blou for a visual tracker with fast craving tools, or quitSTART for free CDC-backed tips and mood tracking.",
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
      "They serve slightly different goals. quitSTART is free and officially backed—good for foundational tips and logging. Blou is focused on visual progress, fast craving support, and savings milestones. Try Blou if you want a cleaner daily tracking experience on iPhone.",
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
      <Script id="blou-vs-quitstart-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Blou vs quitSTART", path: "/blou-vs-quitstart" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Comparison
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Blou vs quitSTART
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          We make Blou, so we&apos;re not neutral. quitSTART is a free,
          CDC-backed app with broad appeal. This page compares them so you can
          decide which one fits your quitting style.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/best-quit-smoking-apps"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            See the full apps roundup →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "choose-blou", label: "Choose Blou if…" },
          { id: "choose-quitstart", label: "Choose quitSTART if…" },
          { id: "feature-differences", label: "Feature differences" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Choose quitSTART if you want a completely free, government-backed app with tips, challenges, and mood logging on iOS or Android. Choose Blou if you want a clean visual tracker on iPhone with fast craving tools and health milestone progress."
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
              You're motivated by health milestones (see{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-week"
              >
                what happens after 1 week
              </Link>
              ) and concrete savings figures.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You want fast craving support: a timer and a single replacement
              action you can run in under 3 minutes.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You prefer a minimal daily habit loop rather than broad
              tip-of-the-day content.
            </span>
          </li>
        </ul>
      </section>

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
              the Surgeon General's office.
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
              <strong>Cost:</strong> quitSTART is free. Blou is free to
              download with optional premium features.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Platforms:</strong> quitSTART (iOS + Android). Blou (iOS
              only in 2026; Android waitlist open).
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
              mood logs. Blou focuses on daily tracking, craving speed, and
              milestone/savings visualization.
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

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-blou-vs-quitstart" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/free-quit-smoking-app"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Best free quit apps →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/blou-vs-quitstart</code>
      </p>
    </div>
  );
}
