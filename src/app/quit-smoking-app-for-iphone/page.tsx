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
const CAMPAIGN = "article_quit-smoking-app-for-iphone";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking app for iPhone: what actually works",
  description:
    "The best quit smoking app for iPhone is the one you use during cravings. What to look for: a fast craving tool, savings, milestones, and a simple plan.",
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
      "Yes. Blou is iPhone-only, and it is a subscription app with a free trial. It focuses on showing your own recovery: a photo timeline, lung checks, SOS craving help, personal insights, and every milestone and smoke-free day on one visual timeline.",
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
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          {
            name: "Quit smoking app for iPhone",
            path: "/quit-smoking-app-for-iphone",
          },
        ]}
      />

      <ArticleHeader
        kicker="iPhone app guide"
        title="Quit smoking app for iPhone: what works"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/best-quit-smoking-apps" variant="secondary">
            Compare quit apps →
          </ButtonLink>
        }
      >
        <p>
          During a craving, you don’t need a lecture—you need a tool. The most
          helpful iPhone quit apps make cravings survivable in minutes and make
          progress visible day to day.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "features", label: "Features that matter" },
          { id: "how-to-use", label: "How to use an app to quit" },
          { id: "common-mistakes", label: "Common mistakes" },
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

      <InlineAppCta campaign={CAMPAIGN}>
        On iPhone, Blou covers the craving and milestone parts of this list:
        SOS craving help the second an urge hits, plus a photo timeline, lung
        checks, and every milestone on one visual timeline.
      </InlineAppCta>

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

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/how-to-quit-smoking" variant="secondary">
          Read the quit plan →
        </ButtonLink>
      </div>
    </div>
  );
}

