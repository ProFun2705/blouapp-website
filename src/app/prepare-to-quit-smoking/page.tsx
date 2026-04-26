import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { Byline } from "@/components/marketing/Byline";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { RelatedGuides } from "@/components/marketing/RelatedGuides";
import {
  buildArticleJsonLd,
  buildHowToJsonLd,
  buildMetadata,
} from "@/lib/seo";
import { RELATED_PILLAR_SLUGS } from "@/lib/relatedPillarSlugs";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

const PUBLISHED = "2026-03-05";
const MODIFIED = "2026-04-20";

export const metadata: Metadata = buildMetadata({
  title: "How to prepare to quit smoking: 7-day checklist",
  description:
    "A concrete 7-day preparation plan for quitting smoking. Pick your quit date, line up NRT or medication, map your cues, and set up your environment.",
  path: "/prepare-to-quit-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "prepare to quit smoking",
    "quit smoking checklist",
    "quit smoking prep",
    "quit date",
  ],
});

const days = [
  {
    name: "Day -7: Name the quit date",
    text: "Pick a date in the next 7 days. Put it in your calendar, tell one person, and don't change it.",
  },
  {
    name: "Day -6: Map your top three cues",
    text: "Write down the three situations you most associate with smoking. Pre-decide a 2-minute replacement for each — not a fantasy, a realistic action.",
  },
  {
    name: "Day -5: Pick your medication or NRT",
    text: "Decide on combination NRT (patch + gum/lozenge), varenicline, or bupropion. Get the prescription, or buy the patches, before the weekend.",
  },
  {
    name: "Day -4: Line up one support channel",
    text: "Quitline call booked (1-800-QUIT-NOW in the US, 0300 123 1044 in England), an app installed, or a friend committed to check in.",
  },
  {
    name: "Day -3: Prep your environment",
    text: "Clean ashtrays, wash smoky clothes, clean the car. Move lighters and any remaining cigarettes somewhere hard to reach.",
  },
  {
    name: "Day -2: Reduce smoking cues you can control",
    text: "Lower alcohol intake, move coffee locations, change the order of your morning routine so it doesn't start with a cigarette.",
  },
  {
    name: "Day -1: Rehearse day 1",
    text: "Walk through your first 2 hours of quit day mentally, including which replacement you'll use for your first cue and what you'll say when someone offers you a cigarette.",
  },
] as const;

const faqItems = [
  {
    question: "Is a quit plan really necessary, or can I just stop?",
    answer:
      "A plan is not a guarantee, but it roughly doubles success rates. The specific things that matter are a fixed quit date, one form of medical support, and a pre-decided response to your top cues.",
  },
  {
    question: "How far in advance should I set my quit date?",
    answer:
      "7–14 days is the sweet spot. Shorter than 7 days leaves too little time to line up medication and support. Longer than 14 days and motivation tends to drift.",
  },
  {
    question: "Should I taper before my quit date?",
    answer:
      "A structured taper in the final 1–2 weeks is fine if it doesn't become another reason to delay. Cold turkey on the quit date still performs at least as well in most trials.",
  },
  {
    question: "What should I do on quit day itself?",
    answer:
      "Throw out remaining cigarettes, start your medication as directed, execute your replacement for your first cue, and ask your check-in person to text you that evening. See /how-to-quit-smoking for the full day-1 playbook.",
  },
] as const;

export default function PrepareToQuitPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "How to prepare to quit smoking: 7-day checklist",
    description:
      "A concrete 7-day preparation plan for the week before quit day.",
    path: "/prepare-to-quit-smoking",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  const howToJsonLd = buildHowToJsonLd({
    name: "7-day quit smoking preparation checklist",
    description: "Daily preparation tasks across the 7 days before your quit date.",
    path: "/prepare-to-quit-smoking",
    steps: days.map((d) => ({ name: d.name, text: d.text })),
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="prepare-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>
      <Script id="prepare-howto-json-ld" type="application/ld+json">
        {JSON.stringify(howToJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Prepare to quit smoking", path: "/prepare-to-quit-smoking" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Pillar guide
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          How to prepare to quit smoking
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          A concrete 7-day checklist to get you from decision to quit day
          without relying on willpower or timing.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <AppStoreBadgeLink
            campaign="article_intro"
            placement="article_intro"
          />
          <Link
            href="/how-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Read the full quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "prep-checklist", label: "The 7-day prep checklist" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "related-guides", label: "Related reading" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Prepare to quit smoking in 7 days: set a fixed quit date, choose NRT or medication, map your top three smoking cues with pre-planned replacements, and line up one support channel (quitline, app, or accountability partner)."
          facts={[
            "A fixed quit date within 7–14 days roughly doubles success over open-ended 'someday' attempts.",
            "Cleaning your car and home of smoking cues reduces craving intensity in the first week.",
            "Scheduling your quit date on a Monday — or the start of a calmer week — correlates with higher 7-day abstinence.",
          ]}
        />
      </section>

      <section
        id="prep-checklist"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          The 7-day prep checklist
        </h2>
        <ol className="mt-4 space-y-4 text-sm leading-7 text-teal-900/90">
          {days.map((day) => (
            <li key={day.name}>
              <p className="font-semibold text-teal-950">{day.name}</p>
              <p className="mt-1">{day.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-prepare" />
      </section>

      <section id="related-guides" className="scroll-mt-24">
        <RelatedGuides
          slugs={[
            "how-to-quit-smoking",
            RELATED_PILLAR_SLUGS.iSmokedOneCigarette,
            "what-happens-after-1-day",
            "cravings",
            "tools/money-saved",
          ]}
        />
      </section>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/prepare-to-quit-smoking</code>
      </p>
    </div>
  );
}
