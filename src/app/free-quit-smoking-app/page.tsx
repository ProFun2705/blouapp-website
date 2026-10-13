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

const PUBLISHED = "2026-05-09";
const MODIFIED = "2026-05-09";

export const metadata: Metadata = buildMetadata({
  title: "Free quit smoking app (actually usable): what to look for",
  description:
    "Looking for a free quit smoking app? Here’s what “free” should include (tracker, cravings, savings, milestones) and the red flags that make quitting harder.",
  path: "/free-quit-smoking-app",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "free quit smoking app",
    "quit smoking app free",
    "free quit tracker",
    "stop smoking app free",
  ],
});

const faqItems = [
  {
    question: "Is there a truly free quit smoking app?",
    answer:
      "Yes. Look for an app whose free tier includes the core behavior change loop: a day counter, craving log, money saved, and milestones. Avoid apps that lock basics behind a 3‑day trial or require a community subscription to stay usable.",
  },
  {
    question: "Do I need to pay to successfully quit?",
    answer:
      "No. Paid features can help, but the biggest drivers are a concrete quit date, one form of evidence-based support (NRT or medication if appropriate), and consistent tracking that makes progress visible.",
  },
  {
    question: "What’s the most important feature in a free quit app?",
    answer:
      "A fast, low-friction craving tool. If an app helps you get through the 3–5 minute wave without negotiating, it’s doing the job.",
  },
  {
    question: "Can a free app replace medication or a clinician?",
    answer:
      "No. Apps are support tools. If you’re eligible for NRT or medication, combining them with tracking and support typically improves outcomes compared to willpower alone.",
  },
  {
    question: "Is Blou free?",
    answer:
      "Blou is free to download and use, with optional premium features. The core tracker and quit tools are designed to be useful without needing a subscription.",
  },
];

export default function FreeQuitSmokingAppPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Free quit smoking app (actually usable): what to look for",
    description:
      "How to choose a genuinely free quit smoking app that supports cravings, tracking, and long-term quitting.",
    path: "/free-quit-smoking-app",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="free-app-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Free quit smoking app", path: "/free-quit-smoking-app" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          App download guide
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Free quit smoking app: what “free” should include
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          The goal of a free quit app is simple: help you ride out cravings, make
          progress visible, and keep you on plan long enough for urges to fade.
          Here’s what to look for and what to avoid.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/how-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Read the step-by-step quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "what-free-should-include", label: "What free should include" },
          { id: "red-flags", label: "Red flags (avoid these)" },
          { id: "how-to-use", label: "How to use a free app to quit" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="A genuinely free quit smoking app should include a day counter, a quick craving tool (timer + action), money saved, and milestone tracking. Avoid apps that lock basics behind a short trial, push guilt-based streak resets, or bury the craving tool behind menus."
          facts={[
            "Most cravings peak and fade in a few minutes; fast tools matter more than long articles in the moment.",
            "The first 2–4 weeks are the toughest; free support that’s usable daily is the point.",
            "Tracking makes slips data, not a verdict—use it to update your plan.",
          ]}
        />
      </section>

      <section
        id="what-free-should-include"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What a free quit app should include
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Day counter + timestamps</strong> so you can see your
              progress without doing mental math.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Craving support in 1 tap</strong>: a short timer and a
              replacement action (walk, water, change location).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Money saved</strong> (and a way to reward yourself) so the
              benefit is concrete. Try the{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/tools/money-saved"
              >
                money saved tool
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Milestones</strong> that keep you going through the first
              weeks. (If you like timelines, see{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-week"
              >
                what happens after 1 week
              </Link>
              .)
            </span>
          </li>
        </ul>
      </section>

      <section
        id="red-flags"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Red flags (avoid these)
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-amber-600">•</span>
            <span>
              “Free” apps that lock the day counter or craving tool behind a
              3–7 day trial.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-amber-600">•</span>
            <span>
              Shame-based messaging (“you failed”) that increases the chance
              you’ll hide a slip instead of learning from it.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-amber-600">•</span>
            <span>
              No internal links to practical help—if you slip, you should have a
              next action, not a reset screen. (See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/i-smoked-one-cigarette"
              >
                what to do after one cigarette
              </Link>
              .)
            </span>
          </li>
        </ul>
      </section>

      <section
        id="how-to-use"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How to use a free app to quit (simple loop)
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>
            <strong>Set a quit date</strong> within 7–14 days and prepare with{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/prepare-to-quit-smoking"
            >
              the 7‑day checklist
            </Link>
            .
          </li>
          <li>
            <strong>Track cravings</strong> for the first 2 weeks—time them,
            don’t debate them. Use the{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/guides/cravings"
            >
              cravings guide
            </Link>{" "}
            for replacements.
          </li>
          <li>
            <strong>Review once a day</strong>: your top cue and your best
            replacement. That’s your real “progress.”
          </li>
        </ol>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-free-app" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/best-quit-smoking-apps"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Compare the best quit apps →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/free-quit-smoking-app</code>
      </p>
    </div>
  );
}

