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

const PUBLISHED = "2026-05-14";
const MODIFIED = "2026-05-14";

export const metadata: Metadata = buildMetadata({
  title: "First week quit smoking: hour-by-hour habits that hold",
  description:
    "What to expect in week one after quitting smoking: withdrawal peaks, cue storms, sleep, and how a tracker + plan keep you from negotiating with cravings.",
  path: "/first-week-quit-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "first week quit smoking",
    "first 7 days quit smoking",
    "week 1 quit smoking",
    "quit smoking day 3",
  ],
});

const faqItems = [
  {
    question: "Which day is hardest when you quit smoking?",
    answer:
      "For many people, days 2–3 feel toughest as withdrawal peaks. Cravings still come in waves after that, but intensity often eases if you protect sleep and avoid alcohol triggers.",
  },
  {
    question: "Should I change my whole routine in week one?",
    answer:
      "Change the smallest set of cues that matter: morning coffee order, commute ritual, and post-meal habit. Big life overhauls add stress.",
  },
  {
    question: "Do I need an app in week one?",
    answer:
      "If it gives you a one-tap craving timer and visible progress, yes—week one is when negotiation (“just one”) is loudest.",
  },
  {
    question: "When should I call a clinician?",
    answer:
      "If you have chest pain, severe shortness of breath, fainting, or thoughts of self-harm—seek urgent care. For medication or NRT questions, ask your clinician or pharmacist.",
  },
];

export default function FirstWeekQuitSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "First week quit smoking: hour-by-hour habits that hold",
    description:
      "Practical habits for the first week after quitting smoking.",
    path: "/first-week-quit-smoking",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="first-week-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "First week quit smoking", path: "/first-week-quit-smoking" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Week 1 playbook
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          First week quit smoking
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Week one is not about being heroic—it is about being boringly consistent:
          same quit date, same craving response, same check-in person. Use this
          page as a checklist against your full plan.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_first_week" placement="article_intro" />
          <Link
            href="/nicotine-withdrawal-timeline"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Withdrawal timeline →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "daily-focus", label: "What to optimize each day" },
          { id: "slips", label: "If you slip" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="In week one, expect withdrawal to peak around days 2–3, cue cravings to stay sharp, and sleep to wobble. Win the week with a fixed craving loop (timer → move → water → replacement), one accountability check-in, and medication/NRT only as your clinician directs."
          facts={[
            "Alcohol multiplies lapses—plan nights or skip week one entirely.",
            "Track cravings so day 7 becomes a plan update, not a verdict.",
            "Milestone guides explain body changes day-by-day under /guides.",
          ]}
        />
      </section>

      <section
        id="daily-focus"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What to optimize each day
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Days 1–2</strong>: throw out leftovers, rehearse first two cues, read{" "}
              <Link className="font-medium text-teal-800 underline" href="/how-to-quit-smoking">
                the quit plan
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Days 3–4</strong>: protect sleep; use{" "}
              <Link className="font-medium text-teal-800 underline" href="/guides/insomnia">
                insomnia
              </Link>{" "}
              tips if needed.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Days 5–7</strong>: review top cue; tighten one replacement; read{" "}
              <Link className="font-medium text-teal-800 underline" href="/stay-quit-after-one-month">
                staying quit after a month
              </Link>{" "}
              early so week two does not feel empty.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="slips"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">If you slip</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Use{" "}
          <Link className="font-medium text-teal-800 underline" href="/i-smoked-one-cigarette">
            the first-hour playbook
          </Link>{" "}
          the same day—then return here for week-one rhythm.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-first-week" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink campaign="pillar_first_week" placement="article_footer_card" />
        <Link href="/prepare-to-quit-smoking" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          Prep checklist →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/first-week-quit-smoking</code>
      </p>
    </div>
  );
}
