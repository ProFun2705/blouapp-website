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

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-05-13";

export const metadata: Metadata = buildMetadata({
  title: "Trying to quit smoking again: a smarter second (or fifth) attempt",
  description:
    "Multiple quit attempts are normal. Here’s how to learn from the last one—new quit date, cue fixes, medication review, and slip protocols.",
  path: "/trying-to-quit-smoking-again",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "trying to quit smoking again",
    "quit smoking after relapse",
    "failed quit smoking retry",
    "multiple quit attempts",
  ],
});

const faqItems = [
  {
    question: "How many tries does quitting take?",
    answer:
      "Many people need several serious attempts. Each try can collect data on cues and high-risk situations—use that data instead of self-blame.",
  },
  {
    question: "Should I use medication this time?",
    answer:
      "If you tried willpower-only before, talk to a clinician about NRT, varenicline, or bupropion. Medications meaningfully improve odds for many smokers.",
  },
  {
    question: "What if I embarrassed myself last time?",
    answer:
      "Tell one supportive person you’re trying again with a clearer plan. Accountability works better without performance pressure.",
  },
  {
    question: "Where does Blou fit?",
    answer:
      "Track cravings, savings, and slips without catastrophizing streak resets.",
  },
];

export default function TryingToQuitSmokingAgainPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Trying to quit smoking again: a smarter second (or fifth) attempt",
    description:
      "How to retry quitting smoking with a structured plan after previous attempts.",
    path: "/trying-to-quit-smoking-again",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="trying-again-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Trying to quit smoking again",
            path: "/trying-to-quit-smoking-again",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Retry playbook
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Trying to quit smoking again
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          You are not “starting over from zero”—you are stacking lessons. The
          goal of this attempt is to fix one failure mode from last time (cue,
          alcohol window, medication gap, sleep crash).
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_try_again" placement="article_intro" />
          <Link
            href="/how-to-stop-a-relapse"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Stop a relapse →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "postmortem", label: "Mini post-mortem" },
          { id: "upgrade", label: "Upgrade one layer" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Pick a new quit date within 7–14 days, write down exactly how the last attempt broke (cue, person, time), and upgrade one layer—medication consult, alcohol plan, or sleep protection. Track daily so slips become adjustments."
          facts={[
            "Relapse maintenance pages cover weeks 2–8 pitfalls.",
            "Combination NRT may outperform single-product use—ask a clinician.",
            "Quitlines coach retries for free.",
          ]}
        />
      </section>

      <section
        id="postmortem"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Mini post-mortem</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Answer in one line each: What day did cravings spike? What cue broke
          me? Did alcohol matter? Then open{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/why-cant-i-quit-smoking"
          >
            why it feels impossible
          </Link>{" "}
          if you are stuck emotionally.
        </p>
      </section>

      <section
        id="upgrade"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Upgrade one layer</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Meds: review{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/quit-smoking-with-varenicline"
              >
                varenicline
              </Link>{" "}
              /{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/quit-smoking-with-bupropion"
              >
                bupropion
              </Link>{" "}
              with your clinician.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              NRT stack: see{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/nrt-and-quit-smoking-app"
              >
                NRT + app
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Environment: rerun{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/prepare-to-quit-smoking"
              >
                prep checklist
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
        <FaqSection items={faqItems} jsonLdId="faq-trying-again" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="pillar_try_again"
          placement="article_footer_card"
        />
        <Link
          href="/how-to-quit-smoking"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Full quit plan →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/trying-to-quit-smoking-again</code>
      </p>
    </div>
  );
}
