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
  title: "Quit smoking app for iPhone: what works (and what doesn’t)",
  description:
    "The best quit smoking app for iPhone is the one you use during cravings. Here’s what to look for: fast craving tool, savings, milestones, and a simple plan.",
  path: "/quit-smoking-app-for-iphone",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking app for iphone",
    "best quit smoking app for iphone",
    "quit smoking app iphone",
    "stop smoking app iphone",
  ],
});

const faqItems = [
  {
    question: "What is the best quit smoking app for iPhone?",
    answer:
      "The best iPhone quit app is the one that helps you through cravings quickly and makes progress visible daily. Look for: a 1‑tap craving tool, money saved, milestones, and a simple plan you can follow without willpower.",
  },
  {
    question: "Do quit apps work better with nicotine patches or gum?",
    answer:
      "Often, yes. Evidence-based support like NRT or medication can improve quit success, and an app helps you stick to the plan by tracking cravings and routines.",
  },
  {
    question: "Can I quit smoking with an app alone?",
    answer:
      "Some people do, but most succeed with a combination: a quit date, at least one support channel (app, quitline, clinician), and a plan for the first 2–4 weeks.",
  },
  {
    question: "Does Blou work on iPhone?",
    answer:
      "Yes—Blou is built for iPhone in 2026 and focuses on visual daily progress: streaks, cravings, savings, and milestones.",
  },
];

export default function QuitSmokingAppForIphonePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking app for iPhone: what works (and what doesn’t)",
    description:
      "How to choose and use a quit smoking app on iPhone for higher odds of staying smoke-free.",
    path: "/quit-smoking-app-for-iphone",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="iphone-app-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Quit smoking app for iPhone",
            path: "/quit-smoking-app-for-iphone",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          iPhone app guide
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking app for iPhone: what works
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          During a craving, you don’t need a lecture—you need a tool. The most
          helpful iPhone quit apps make cravings survivable in minutes and make
          progress visible day to day.
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
            Compare quit apps →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "features", label: "Features that matter" },
          { id: "how-to-use", label: "How to use an app to quit" },
          { id: "common-mistakes", label: "Common mistakes" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="The best quit smoking app for iPhone is the one you can use in under 10 seconds during a craving: open → timer/action → log → continue your day. Look for a 1‑tap craving tool, savings, milestones, and a plan for days 1–14."
          facts={[
            "Most cravings rise and fall quickly; speed beats complexity.",
            "The first 2–4 weeks are the critical window—use an app daily during that time.",
            "Pair an app with NRT/medication if appropriate to increase odds.",
          ]}
        />
      </section>

      <section
        id="features"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Features that matter (for conversion and quitting)
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Craving timer + replacement</strong> (see{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/cravings"
              >
                cravings
              </Link>
              ).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Money saved</strong> (try{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/tools/money-saved"
              >
                the calculator
              </Link>
              ).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Milestones</strong> that keep motivation steady (start
              with{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-day"
              >
                after 1 day
              </Link>
              ).
            </span>
          </li>
        </ul>
      </section>

      <section
        id="how-to-use"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How to use an iPhone quit app (simple daily routine)
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>
            Pick a quit date and set up your week using{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/prepare-to-quit-smoking"
            >
              the 7‑day checklist
            </Link>
            .
          </li>
          <li>
            Use the craving tool on the first urge each day, even if it’s small.
            You’re training the loop.
          </li>
          <li>
            End each day by checking savings and noting your #1 cue. Then adjust
            tomorrow’s plan.
          </li>
        </ol>
      </section>

      <section
        id="common-mistakes"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Common mistakes</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-amber-600">•</span>
            <span>
              Only opening the app when you’re already overwhelmed. Start using
              it during small cravings to build confidence.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-amber-600">•</span>
            <span>
              Treating a slip like a failure. If you smoked one cigarette, use{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/i-smoked-one-cigarette"
              >
                this first-hour playbook
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-iphone-quit-app" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/how-to-quit-smoking"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Read the quit plan →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-smoking-app-for-iphone</code>
      </p>
    </div>
  );
}

