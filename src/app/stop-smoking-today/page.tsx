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
  title: "Stop smoking today: same-day checklist (then book week one)",
  description:
    "If you mean “today” literally: dispose of cigarettes, pick your next action for cravings, call a quitline, install a tracker—and set a formal quit date if you still need prep.",
  path: "/stop-smoking-today",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "stop smoking today",
    "quit smoking today",
    "quit smoking right now",
    "same day quit smoking",
  ],
});

const faqItems = [
  {
    question: "Can I really quit the same day I decide?",
    answer:
      "Some people do. Others need 7–14 days to line up NRT or medication. Both can work—pick the version you will actually follow through on.",
  },
  {
    question: "What is the minimum viable “today” plan?",
    answer:
      "No cigarettes in the house, one person told, one craving loop practiced, quitline called or app installed, and a note on your fridge with your top two cues.",
  },
  {
    question: "Is cold turkey required for “today”?",
    answer:
      "No. “Today” can mean “last cigarette today” plus patch tomorrow per clinician guidance. See /quit-smoking-cold-turkey for abrupt-stop framing.",
  },
  {
    question: "What if I already smoked this morning?",
    answer:
      "Draw a line at noon or bedtime—whichever is sooner—and treat the rest of the day as practice. Shame is not a strategy.",
  },
];

export default function StopSmokingTodayPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Stop smoking today: same-day checklist (then book week one)",
    description:
      "Same-day checklist to stop smoking and set up support for week one.",
    path: "/stop-smoking-today",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="stop-today-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs items={[{ name: "Stop smoking today", path: "/stop-smoking-today" }]} />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Same-day start
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Stop smoking today
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Urgency is useful if it becomes action. Run this checklist in order—then
          anchor tomorrow using{" "}
          <Link className="font-medium text-teal-800 underline" href="/first-week-quit-smoking">
            week one habits
          </Link>
          .
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_stop_today" placement="article_intro" />
          <Link href="/prepare-to-quit-smoking" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
            Or: 7-day prep first →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "checklist", label: "Checklist" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="If you mean today: destroy remaining cigarettes, remove lighters, message one accountability person, install a tracker, call a quitline, and write your first craving loop (timer + 2-minute action). If you need meds/NRT first, set quit day within 7 days instead of improvising dosing."
          facts={[
            "Medical questions belong to clinicians—not a same-day blog panic.",
            "Pair with /how-to-quit-smoking for the full structure.",
          ]}
        />
      </section>

      <section id="checklist" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Checklist</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-teal-900/90">
          <li>Trash ashtrays; bag butts; wash jacket pockets.</li>
          <li>Pre-decide your first three craving moves.</li>
          <li>Block tonight’s risk (alcohol, party) or plan an exit.</li>
          <li>Open /nicotine-withdrawal-timeline so day 3 is not a surprise.</li>
        </ol>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-stop-today" />
      </section>

      <div className="flex flex-wrap gap-3">
        <AppStoreBadgeLink campaign="pillar_stop_today" placement="article_footer_card" />
        <Link href="/how-to-quit-smoking" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          Full plan →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/stop-smoking-today</code>
      </p>
    </div>
  );
}
