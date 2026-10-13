import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { slugifyForSection } from "@/lib/slugify";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-03-10";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_best-quit-smoking-apps";

export const metadata: Metadata = buildMetadata({
  title: "Best quit smoking apps in 2026: honest comparison",
  description:
    "An honest comparison of the best quit smoking apps in 2026: Blou, Smoke Free, QuitNow!, Quit Genius and Flamy, with platforms, pricing and trade-offs.",
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
    tagline: "Visual recovery tracker — photo timeline, lung checks, SOS craving help",
    platforms: "iPhone only",
    price: "Subscription (free trial)",
    bestFor: "iPhone users who want to see their own recovery, not an average",
    strengths: [
      "Photo timeline that shows your face changing over time",
      "Lung (breath) checks that show your lungs getting stronger",
      "SOS craving help the second a craving hits",
      "Personal insights, with every milestone and smoke-free day on one visual timeline",
    ],
    tradeOffs: [
      "iPhone only — no Android version",
      "Subscription app: nothing in the app works without an active subscription once the free trial ends",
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
      "Smoke Free and QuitNow! both offer free tiers that cover a day counter, cravings, and savings; their paid tiers add extras. Blou is not free: it is a subscription with a free trial. Quitting does not require a paid app.",
  },
  {
    question: "Do quit smoking apps actually work?",
    answer:
      "Research suggests app-based support modestly improves quit rates versus willpower alone, especially when combined with NRT or medication. Apps are not a substitute for quit medication — they are a way to make your plan visible and sticky.",
  },
  {
    question: "Which quit smoking app is best for iPhone?",
    answer:
      "For seeing your own recovery (photo timeline, lung checks, SOS craving help), Blou, which is a subscription with a free trial. For gamified missions, Smoke Free. For community, QuitNow!. All three are on the App Store; Smoke Free and QuitNow! have free tiers.",
  },
  {
    question: "Is there a quit smoking app on Android?",
    answer:
      "Smoke Free and QuitNow! support Android today. Blou is iPhone-only for now, and there is no Android version yet.",
  },
] as const;

export default function BestQuitSmokingAppsPage() {
  const appReviewToc = apps.map((app) => ({
    id: `app-${slugifyForSection(app.name)}`,
    label: app.name,
  }));

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
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[{ name: "Best quit smoking apps", path: "/best-quit-smoking-apps" }]}
      />

      <ArticleHeader
        kicker="Comparison pillar"
        title="Best quit smoking apps in 2026"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
      >
        <p>
          Short, honest comparison of five quit-smoking apps people actually
          use. Blou is our app; we&apos;ve tried to judge it by the same criteria
          as the others, and to be clear about when another app fits you better.
        </p>
        <p className="mt-2 text-sm">Updated October 2026.</p>
      </ArticleHeader>

      <nav
        aria-label="Deep dives"
        className="flex flex-wrap gap-2 rounded-card border border-line bg-surface p-4 text-sm"
      >
        <span className="w-full text-xs font-semibold uppercase tracking-wide text-teal-700">
          Deep dives
        </span>
        <Link
          href="/blou-vs-flamy"
          className="rounded-full border border-teal-200 px-3 py-1.5 text-teal-900 hover:bg-teal-50"
        >
          Blou vs Flamy
        </Link>
        <Link
          href="/blou-vs-quit-genius"
          className="rounded-full border border-teal-200 px-3 py-1.5 text-teal-900 hover:bg-teal-50"
        >
          Blou vs Quit Genius
        </Link>
        <Link
          href="/quit-smoking-app-android"
          className="rounded-full border border-teal-200 px-3 py-1.5 text-teal-900 hover:bg-teal-50"
        >
          Android apps
        </Link>
        <Link
          href="/nrt-and-quit-smoking-app"
          className="rounded-full border border-teal-200 px-3 py-1.5 text-teal-900 hover:bg-teal-50"
        >
          NRT + app
        </Link>
        <Link
          href="/first-week-quit-smoking"
          className="rounded-full border border-teal-200 px-3 py-1.5 text-teal-900 hover:bg-teal-50"
        >
          Week 1 playbook
        </Link>
        <Link
          href="/quit-smoking-on-a-budget"
          className="rounded-full border border-teal-200 px-3 py-1.5 text-teal-900 hover:bg-teal-50"
        >
          Quit on a budget
        </Link>
      </nav>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          ...appReviewToc,
          { id: "how-we-picked", label: "How we picked these" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="The best quit smoking app depends on how you quit: Blou for seeing your own recovery on iPhone, Smoke Free for cross-platform NRT tracking, QuitNow! for peer community, and Quit Genius for structured clinical support. Smoke Free and QuitNow! have free tiers; Blou is a subscription with a free trial; Quit Genius is usually paid or employer-sponsored."
          facts={[
            "Blou is iPhone-only for now; there is no Android version yet.",
            "Smoke Free and QuitNow! both offer free Android support with optional Pro tiers.",
            "Quit Genius access is typically gated through employer or insurer benefits in the US.",
          ]}
        />
      </section>

      <section className="space-y-6">
        {apps.map((app) => (
          <article
            id={`app-${slugifyForSection(app.name)}`}
            key={app.name}
            className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="text-xl font-semibold text-teal-950">
                  {app.name}
                </h2>
                <p className="text-sm text-teal-900/80">{app.tagline}</p>
              </div>
              <div className="text-right text-xs text-ink-muted">
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

      <InlineAppCta campaign={CAMPAIGN}>
        If Blou&apos;s approach fits you, it gives you a photo timeline, lung
        checks and SOS craving help on iPhone, with every milestone on one
        visual timeline.
      </InlineAppCta>

      <section
        id="how-we-picked"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How we picked these
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Available in English with an active development cadence in 2025–2026.</span></li>
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Tracks smoke-free days and at least one of: money saved, craving support, health milestones.</span></li>
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Clear pricing shown before you commit (free tier, trial, or subscription stated up front).</span></li>
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Has a public App Store or Google Play listing you can check before installing.</span></li>
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          This page is updated as apps change. Last editorial review:{" "}
          {MODIFIED}.
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Want to see your own recovery?"
        description="Blou is the app we make. If its approach fits how you quit, it shows what is happening to you, from your first smoke-free day."
      />

      <div className="scroll-mt-24 flex flex-wrap gap-3">
        <ButtonLink href="/how-to-quit-smoking" variant="secondary">
          Read the quit plan
        </ButtonLink>
        <ButtonLink href="/tools" variant="secondary">
          Open quit tools
        </ButtonLink>
      </div>
    </div>
  );
}
