import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Byline } from "@/components/marketing/Byline";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { SocialProof } from "@/components/marketing/SocialProof";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

const PUBLISHED = "2026-03-10";
const MODIFIED = "2026-04-20";

export const metadata: Metadata = buildMetadata({
  title: "Best quit smoking apps in 2026: honest comparison",
  description:
    "An editor-reviewed comparison of the best quit smoking apps in 2026. Covers free trackers, hypnosis apps, NRT companions, and accountability tools.",
  path: "/best-quit-smoking-apps",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "best quit smoking apps",
    "quit smoking app",
    "smoke free app",
    "quit tracker app",
  ],
});

const apps = [
  {
    name: "Blou",
    tagline: "Visual quit tracker — streaks, savings, cravings, milestones",
    platforms: "iOS (Android waitlist)",
    price: "Free + optional premium",
    bestFor: "People who quit with data and visual progress",
    strengths: [
      "Clear money-saved and cravings-avoided counters",
      "Day-by-day milestone unlocks grounded in CDC/NHS timelines",
      "3-minute craving timer with pre-decided 2-minute actions",
    ],
    tradeOffs: [
      "iOS only today",
      "No built-in community forum",
    ],
  },
  {
    name: "Smoke Free",
    tagline: "Long-running tracker with NRT and missions",
    platforms: "iOS, Android",
    price: "Free + Pro",
    bestFor: "People who want gamified missions",
    strengths: [
      "Wide platform support",
      "Integrated NRT tracking",
    ],
    tradeOffs: [
      "Dense UI for casual users",
      "Some timelines lack explicit sources",
    ],
  },
  {
    name: "QuitNow!",
    tagline: "Community-forward quit tracker",
    platforms: "iOS, Android",
    price: "Free + Pro",
    bestFor: "People motivated by peer support",
    strengths: [
      "Active community forum",
      "Localized across many languages",
    ],
    tradeOffs: [
      "Dashboards feel dated",
      "Interstitial ads in the free tier",
    ],
  },
  {
    name: "Quit Genius",
    tagline: "Clinical CBT program with coaches",
    platforms: "iOS, Android",
    price: "Paid / employer-sponsored",
    bestFor: "People who want structured clinical support",
    strengths: [
      "Human coaching and CBT curriculum",
      "Often covered by US employers or insurers",
    ],
    tradeOffs: [
      "Higher price point",
      "Access depends on employer/health plan",
    ],
  },
  {
    name: "Flamy",
    tagline: "Gamified daily quit challenges",
    platforms: "iOS, Android",
    price: "Free + Pro",
    bestFor: "People who respond to streak-style game mechanics",
    strengths: [
      "Lightweight daily check-ins",
      "Simple onboarding",
    ],
    tradeOffs: [
      "Fewer evidence-linked timelines",
      "Less detailed savings math",
    ],
  },
] as const;

const faqItems = [
  {
    question: "Is there a truly free quit smoking app?",
    answer:
      "Yes. Blou, Smoke Free, and QuitNow! all offer free tiers that cover day counter, cravings, and savings. Paid tiers add extras — but quitting does not require a paid app.",
  },
  {
    question: "Do quit smoking apps actually work?",
    answer:
      "Research suggests app-based support modestly improves quit rates versus willpower alone, especially when combined with NRT or medication. Apps are not a substitute for quit medication — they are a way to make your plan visible and sticky.",
  },
  {
    question: "Which quit smoking app is best for iPhone?",
    answer:
      "For visual daily progress, Blou. For gamified missions, Smoke Free. For community, QuitNow!. All three are on the App Store and have free tiers.",
  },
  {
    question: "Is there a quit smoking app on Android?",
    answer:
      "Smoke Free and QuitNow! support Android today. Blou is iOS-only and maintains an Android waitlist on the homepage.",
  },
] as const;

export default function BestQuitSmokingAppsPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Best quit smoking apps in 2026: honest comparison",
    description:
      "Editor-reviewed comparison of the best quit smoking apps in 2026.",
    path: "/best-quit-smoking-apps",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="apps-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Best quit smoking apps", path: "/best-quit-smoking-apps" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Comparison pillar
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Best quit smoking apps in 2026
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Short, honest comparison of five quit-smoking apps people actually
          use. We make Blou, so we are not neutral — we've tried to be clear
          about when another app fits you better.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6">
          <AppStoreBadgeLink
            campaign="article_intro"
            placement="article_intro"
          />
        </div>
      </header>

      <QuickAnswerBox
        answer="The best quit smoking app depends on how you quit: Blou for visual daily progress on iPhone, Smoke Free for cross-platform NRT tracking, QuitNow! for peer community, and Quit Genius for structured clinical support. All four are free to start."
        facts={[
          "Blou is iPhone-only in 2026; an Android waitlist is open at /.",
          "Smoke Free and QuitNow! both offer free Android support with optional Pro tiers.",
          "Quit Genius access is typically gated through employer or insurer benefits in the US.",
        ]}
      />

      <SocialProof compact />

      <section className="space-y-6">
        {apps.map((app) => (
          <article
            key={app.name}
            className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="text-xl font-semibold text-teal-950">
                  {app.name}
                </h2>
                <p className="text-sm text-teal-900/80">{app.tagline}</p>
              </div>
              <div className="text-right text-xs text-teal-900/70">
                <p>{app.platforms}</p>
                <p>{app.price}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-teal-900/90">
              <span className="font-medium text-teal-950">Best for:</span>{" "}
              {app.bestFor}
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                  Strengths
                </p>
                <ul className="mt-2 space-y-1 text-sm text-teal-900/90">
                  {app.strengths.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span aria-hidden className="mt-1 text-teal-600">+</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                  Trade-offs
                </p>
                <ul className="mt-2 space-y-1 text-sm text-teal-900/90">
                  {app.tradeOffs.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span aria-hidden className="mt-1 text-amber-500">−</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">
          How we picked these
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Available in English with an active development cadence in 2025–2026.</span></li>
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Tracks day counter and at least one of: money saved, cravings, health milestones.</span></li>
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Has a free tier that is usable long-term (no 3-day trial walls).</span></li>
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Stores publicly accessible App Store or Play Store listings with visible reviews.</span></li>
        </ul>
        <p className="mt-4 text-xs leading-5 text-teal-900/70">
          This page is updated as apps change. Last editorial review:{" "}
          {MODIFIED}.
        </p>
      </section>

      <FaqSection items={faqItems} jsonLdId="faq-best-apps" />

      <div className="flex flex-wrap gap-3">
        <Link
          href="/how-to-quit-smoking"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Read the quit plan
        </Link>
        <Link
          href="/tools"
          className="inline-flex h-10 items-center justify-center rounded-full bg-teal-600 px-4 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          Open quit tools
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/best-quit-smoking-apps</code>
      </p>
    </div>
  );
}
