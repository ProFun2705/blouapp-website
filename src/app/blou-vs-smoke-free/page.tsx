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

const PUBLISHED = "2026-05-09";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_blou-vs-smoke-free";

export const metadata: Metadata = buildMetadata({
  title: "Blou vs Smoke Free (2026): which quit app fits you?",
  description:
    "Blou vs Smoke Free, honestly compared: Blou is an iPhone subscription app that shows your own recovery; Smoke Free offers cross-platform missions.",
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
      "It depends on how you quit. Blou is an iPhone-only subscription app (with a free trial) that shows your own recovery: a photo timeline, lung checks, SOS craving help, and every milestone on one visual timeline. Smoke Free is widely used, supports Android, and has mission-style gamification and NRT tracking for some users.",
  },
  {
    question: "Which one is best if I’m on Android?",
    answer:
      "If you need Android support today, Smoke Free is a safer pick. Blou is iPhone-only for now, with no Android version yet.",
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
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[{ name: "Blou vs Smoke Free", path: "/blou-vs-smoke-free" }]}
      />

      <ArticleHeader
        kicker="Comparison"
        title="Blou vs Smoke Free"
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
          We make Blou, so we’re not neutral. This page is designed to help you
          pick the app you’ll actually use when cravings hit.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "choose-blou", label: "Choose Blou if…" },
          { id: "choose-smoke-free", label: "Choose Smoke Free if…" },
          { id: "feature-differences", label: "Feature differences" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Choose Blou if you are on iPhone, want to see your own recovery (photo timeline, lung checks) with SOS craving help, and are fine with a subscription after the free trial. Choose Smoke Free if you need Android support, want mission-style gamification, or prefer a more feature-dense tracker."
          facts={[
            "The best quit app is the one you’ll open during cravings, not just read once.",
            "Most cravings last minutes—speed and clarity matter.",
            "Pairing an app with NRT/medication (if appropriate) can improve outcomes.",
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
            <span>You’re on iPhone and want a clean, visual way to see your recovery.</span>
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
              You’re motivated by seeing your own progress: a photo timeline,
              lung checks, and every milestone on one visual timeline (pair it
              with our{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/tools/money-saved"
              >
                money saved
              </Link>{" "}
              calculator).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You’re fine with a subscription once the free trial ends; nothing
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
        id="choose-smoke-free"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Choose Smoke Free if…
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You need Android support today.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You like missions and gamified tasks.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You prefer a dense dashboard with many options (even if it’s less
              “minimal”).
            </span>
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
              <strong>Platforms</strong>: Blou (iPhone only). Smoke Free (iOS + Android).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Pricing</strong>: Blou is a subscription with a free
              trial. Smoke Free has a free tier with a paid Pro upgrade.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Style</strong>: Blou is visual + lightweight. Smoke Free is
              feature-rich + mission-based.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Support loop</strong>: both work best when you combine them
              with a plan and cravings strategy (see{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/how-to-quit-smoking"
              >
                the quit plan
              </Link>
              ).
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

