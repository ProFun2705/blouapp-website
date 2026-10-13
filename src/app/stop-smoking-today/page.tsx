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
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-05-14";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_stop-smoking-today";

export const metadata: Metadata = buildMetadata({
  title: "Stop smoking today: a same-day quit checklist",
  description:
    "Quitting today? Bin your cigarettes, pick your craving moves, call a quitline and line up week-one support, or set a quit date if you still need prep.",
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
    title: "Stop smoking today: a same-day quit checklist",
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
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs items={[{ name: "Stop smoking today", path: "/stop-smoking-today" }]} />

      <ArticleHeader
        kicker="Same-day start"
        title="Stop smoking today"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/prepare-to-quit-smoking" variant="secondary">
            Or: 7-day prep first →
          </ButtonLink>
        }
      >
        <p>
          Urgency is useful if it becomes action. Run this checklist in order—then
          anchor tomorrow using{" "}
          <Link className="font-medium text-teal-800 underline" href="/first-week-quit-smoking">
            week one habits
          </Link>
          .
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "checklist", label: "Checklist" },
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

      <InlineAppCta campaign={CAMPAIGN}>
        Once the checklist is done, the cravings start. Blou&apos;s SOS button is there the second
        one hits, and your timeline shows every smoke-free hour you&apos;ve already banked.
      </InlineAppCta>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/how-to-quit-smoking" variant="secondary">
          Full plan →
        </ButtonLink>
      </div>
    </div>
  );
}
