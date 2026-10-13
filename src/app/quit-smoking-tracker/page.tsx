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
  title: "Quit smoking tracker: what to track for results",
  description:
    "A quit smoking tracker works when it tracks the right things: cravings, cues, money saved, and smoke-free time. Here’s a simple tracking system that helps you stay quit.",
  path: "/quit-smoking-tracker",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking tracker",
    "quit tracker",
    "stop smoking tracker",
    "quit smoking counter",
  ],
});

const faqItems = [
  {
    question: "What should a quit smoking tracker track?",
    answer:
      "At minimum: smoke-free time, cravings (with timestamps), your top cues, and money saved. Those four together let you update your plan instead of relying on motivation.",
  },
  {
    question: "Should I track every craving?",
    answer:
      "In the first 1–2 weeks, tracking most cravings helps because patterns appear quickly. After that, track only high-risk cravings so the habit doesn’t become burdensome.",
  },
  {
    question: "If I slip, should I reset my tracker?",
    answer:
      "Track the slip honestly, but don’t let an all-or-nothing reset push you into more smoking. Use the slip as data and return to plan. See /i-smoked-one-cigarette.",
  },
  {
    question: "Is tracking enough to quit?",
    answer:
      "Tracking helps you stay consistent, but most people do best with a quit date and one support channel (NRT/medication if appropriate, a quitline, or a clinician).",
  },
];

export default function QuitSmokingTrackerPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking tracker: what to track for results",
    description:
      "A practical quit tracking system: cravings, cues, money saved, and time smoke-free.",
    path: "/quit-smoking-tracker",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="tracker-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Quit smoking tracker", path: "/quit-smoking-tracker" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Quit tool guide
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking tracker: what to track
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Tracking works when it turns cravings into a solvable problem: cue →
          response → outcome. Don’t track everything—track the few signals that
          actually change behavior.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/tools/money-saved"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Calculate money saved →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "four-metrics", label: "The 4 metrics" },
          { id: "first-14-days", label: "How to track (first 14 days)" },
          { id: "what-to-do-on-a-slip", label: "If you slip" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Track four things: smoke-free time, cravings (timestamped), your top cues, and money saved. Review once per day: which cue hit hardest and which replacement worked. That daily review is what makes tracking change outcomes."
          facts={[
            "Cravings usually come in short waves—tracking helps you see they pass.",
            "Cues are predictable; pre-deciding a replacement lowers relapse risk.",
            "Savings is a strong motivator when it’s visible and rewarded weekly.",
          ]}
        />
      </section>

      <section
        id="four-metrics"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">The 4 metrics</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              1) Smoke-free time
            </p>
            <p className="mt-2 text-sm leading-7 text-teal-900/90">
              This is your “north star” metric. Pair it with milestones like{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-week"
              >
                what happens after 1 week
              </Link>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              2) Cravings
            </p>
            <p className="mt-2 text-sm leading-7 text-teal-900/90">
              Timestamp them. Most cravings last minutes; seeing the pattern
              builds confidence. Use{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/cravings"
              >
                cravings
              </Link>{" "}
              for replacements.
            </p>
          </div>
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              3) Cues
            </p>
            <p className="mt-2 text-sm leading-7 text-teal-900/90">
              Your top three cues (coffee, driving, after meals) are predictable.
              Prepare for them using{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/prepare-to-quit-smoking"
              >
                the checklist
              </Link>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              4) Money saved
            </p>
            <p className="mt-2 text-sm leading-7 text-teal-900/90">
              Savings makes the benefit tangible. Track it and spend a portion on
              recovery rewards (food, gym, experiences). Start with{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/tools/money-saved"
              >
                money saved
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        id="first-14-days"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How to track (first 14 days)
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>
            Log your first craving each day and use a timer. You’re teaching
            your brain the wave ends.
          </li>
          <li>
            Note the cue in one phrase (“after dinner”, “stress call”, “beer”).
          </li>
          <li>
            Pick one replacement action and do it immediately (stand up, water,
            walk).
          </li>
          <li>
            Review once at night: the cue that surprised you and the replacement
            that worked.
          </li>
        </ol>
      </section>

      <section
        id="what-to-do-on-a-slip"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">If you slip</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Treat a slip as a signal to update the plan, not a verdict. Use{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/i-smoked-one-cigarette"
          >
            what to do after one cigarette
          </Link>{" "}
          and come back tomorrow with one change to your top cue.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-quit-tracker" />
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
        Canonical: <code>{SITE_URL}/quit-smoking-tracker</code>
      </p>
    </div>
  );
}

