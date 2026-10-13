import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { Byline } from "@/components/marketing/Byline";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { SpeakableJsonLd } from "@/components/marketing/SpeakableJsonLd";
import { ComparisonChoices, ComparisonTable, TextLink } from "@/components/marketing/ComparisonChoices";
import { SocialProof } from "@/components/marketing/SocialProof";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-05-09";
const MODIFIED = "2026-05-09";

export const metadata: Metadata = buildMetadata({
  title: "Blou vs Smoke Free (2026): which quit app is better for you?",
  description:
    "Blou vs Smoke Free: an honest comparison. Choose Blou for fast visual tracking on iPhone, or Smoke Free for cross-platform missions and NRT tracking.",
  path: "/blou-vs-smoke-free",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "blou vs smoke free",
    "smoke free vs blou",
    "quit smoking app comparison",
    "best quit smoking app",
  ],
});

const faqItems = [
  {
    question: "Is Blou better than Smoke Free?",
    answer:
      "It depends on how you quit. Blou is a clean, visual tracker for iPhone with a strong craving tool and savings/milestones. Smoke Free is widely used, supports Android, and has mission-style gamification and NRT tracking for some users.",
  },
  {
    question: "Which one is best if I’m on Android?",
    answer:
      "If you need Android support today, Smoke Free is a safer pick. Blou is iOS-only in 2026 and maintains an Android waitlist on the homepage.",
  },
  {
    question: "Which one is best for cravings?",
    answer:
      "The best app for cravings is the one you can use fast. Look for a 1‑tap tool and a simple replacement action you can do in under 3 minutes.",
  },
  {
    question: "Do I need a quit app if I’m using nicotine patches or gum?",
    answer:
      "Often yes—NRT reduces withdrawal, and an app helps you handle cues and stay consistent. See /quit-smoking-with-nicotine-patch or /quit-smoking-with-nicotine-gum.",
  },
];

export default function BlouVsSmokeFreePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Blou vs Smoke Free (2026): which quit app is better for you?",
    description:
      "An honest comparison of Blou and Smoke Free for quitting smoking in 2026.",
    path: "/blou-vs-smoke-free",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="blou-vs-sf-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Blou vs Smoke Free", path: "/blou-vs-smoke-free" }]}
      />

      <header className="masthead">
        <p className="text-sm font-medium text-teal-700">
          Comparison
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Blou vs Smoke Free
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          We make Blou, so we’re not neutral. This page is designed to help you
          pick the app you’ll actually use when cravings hit.
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
          { id: "choose-smoke-free", label: "Choose Smoke Free if…" },
          { id: "feature-differences", label: "Feature differences" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />
      <SpeakableJsonLd
        name="Blou vs Smoke Free (2026): which quit app is better for you?"
        path="/blou-vs-smoke-free"
      />



      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Choose Blou if you want a clean, visual quit tracker on iPhone with fast craving support and simple daily progress. Choose Smoke Free if you need Android support, want mission-style gamification, or prefer a more feature-dense tracker."
          facts={[
            "The best quit app is the one you’ll open during cravings, not just read once.",
            "Most cravings last minutes—speed and clarity matter.",
            "Pairing an app with NRT/medication (if appropriate) can improve outcomes.",
          ]}
        />
      </section>

      <ComparisonChoices
        left={{
          id: "choose-blou",
          title: "Choose Blou if…",
          items: [
            "You’re on iPhone and want a clean, visual tracker.",
            "You want cravings support that’s quick (timer + action) and easy to repeat.",
            <>
              You’re motivated by tangible progress like{" "}
              <TextLink href="/tools/money-saved">money saved</TextLink> and
              milestone timelines.
            </>,
          ],
        }}
        right={{
          id: "choose-smoke-free",
          title: "Choose Smoke Free if…",
          items: [
            "You need Android support today.",
            "You like missions and gamified tasks.",
            "You prefer a dense dashboard with many options (even if it’s less “minimal”).",
          ],
        }}
      />

      <ComparisonTable
        id="feature-differences"
        title="Feature differences"
        columnA="Blou"
        columnB="Smoke Free"
        rows={[
          { label: "Platforms", a: "iOS", b: "iOS and Android" },
          {
            label: "Style",
            a: "Visual, lightweight tracker",
            b: "Feature-rich, mission-based",
          },
          {
            label: "Support loop",
            a: "Works with a quit plan and craving timer",
            b: "Works with a quit plan and missions",
          },
        ]}
      />

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-blou-vs-smoke-free" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/quit-smoking-tracker"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Use a quit tracker →
        </Link>
      </div>
</div>
  );
}

