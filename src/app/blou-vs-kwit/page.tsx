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
const CAMPAIGN = "article_blou-vs-kwit";

export const metadata: Metadata = buildMetadata({
  title: "Blou vs Kwit (2026): which quit smoking app to pick?",
  description:
    "Blou vs Kwit: an honest comparison. Choose Blou for a clean visual tracker on iPhone, or Kwit for gamified XP and avatar progression.",
  path: "/blou-vs-kwit",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "blou vs kwit",
    "kwit vs blou",
    "kwit app review",
    "best quit smoking app",
    "quit smoking app comparison",
  ],
});

const faqItems = [
  {
    question: "Is Blou better than Kwit?",
    answer:
      "It depends on what motivates you. Blou is an iPhone-only subscription app (with a free trial) that shows your own recovery: a photo timeline, lung checks, SOS craving help, and every milestone on one visual timeline. Kwit is built around RPG-style gamification—you level up a character as your quit progresses. Try whichever framing resonates more with how you think about progress.",
  },
  {
    question: "Is Kwit free?",
    answer:
      "Kwit offers a free tier with basic tracking and a paid subscription that unlocks full game content and deeper analytics. Check the App Store listing for current pricing.",
  },
  {
    question: "Which app is better for cravings?",
    answer:
      "The best craving tool is the one you can open in under 5 seconds. Look for a 1-tap craving log and a fast replacement action you can complete before the urge peaks. Both apps offer craving support—your daily habit of opening it is what matters most.",
  },
  {
    question: "Do both apps work on Android?",
    answer:
      "Kwit is available on both iOS and Android. Blou is iPhone-only for now, with no Android version yet.",
  },
  {
    question: "Should I use a quit app if I'm also using nicotine patches?",
    answer:
      "Yes—NRT reduces physical withdrawal, and an app helps you handle cue-based cravings. See our guide on quitting with the nicotine patch.",
  },
];

export default function BlouVsKwitPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Blou vs Kwit (2026): which quit smoking app should you pick?",
    description:
      "An honest comparison of Blou and Kwit for quitting smoking in 2026.",
    path: "/blou-vs-kwit",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[{ name: "Blou vs Kwit", path: "/blou-vs-kwit" }]}
      />

      <ArticleHeader
        kicker="Comparison"
        title="Blou vs Kwit"
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
          We make Blou, so we&apos;re not neutral. This page is here to help you
          choose the quit app you&apos;ll actually use when cravings hit—not just
          download and forget.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "choose-blou", label: "Choose Blou if…" },
          { id: "choose-kwit", label: "Choose Kwit if…" },
          { id: "feature-differences", label: "Feature differences" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Choose Blou for a clean, visual way to see your own recovery on iPhone—a photo timeline, lung checks, SOS craving help, and every milestone on one visual timeline—as a subscription with a free trial. Choose Kwit if you are motivated by RPG-style gamification, want to level up a character as you quit, or need Android support."
          facts={[
            "The best quit app is the one you open during cravings, not just on day one.",
            "Most cravings peak and fade within 3–5 minutes—fast access is critical.",
            "Combining an app with NRT or medication (where appropriate) can improve outcomes.",
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
            <span>You&apos;re on iPhone and want a clean, distraction-free tracker.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You prefer progress shown as your own recovery (photo timeline,
              lung checks, health milestones) rather than game levels.
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
              You&apos;re motivated by seeing tangible wins: the first 24 hours, the{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-week"
              >
                one-week milestone
              </Link>
              , the first month.
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
        If that sounds like you, Blou for iPhone puts your photo timeline, lung
        checks, and every milestone on one visual timeline, with SOS craving
        help one tap away.
      </InlineAppCta>

      <section
        id="choose-kwit"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Choose Kwit if…
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Gamification is your primary motivation—you want to level up an
              avatar character as you rack up smoke-free days.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You need Android support today.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You enjoy unlocking achievements, earning XP, and a game-like
              progression system to build daily habit streaks.
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
              <strong>Platforms:</strong> Blou (iPhone only). Kwit (iOS +
              Android).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Pricing:</strong> Blou is a subscription with a free
              trial. Kwit has a free tier and a paid subscription.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Core motivation model:</strong> Blou shows your own
              recovery on one visual timeline (photos, lung checks, milestones).
              Kwit uses RPG-style XP and character
              leveling.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Craving tools:</strong> Blou has SOS craving help for the
              moment a craving hits. Kwit ties cravings to game
              mechanics.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Pairing with a plan:</strong> both work best when combined
              with a real quit strategy—see{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/how-to-quit-smoking"
              >
                how to quit smoking
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/" variant="secondary">
          Use a quit tracker →
        </ButtonLink>
      </div>
    </div>
  );
}
