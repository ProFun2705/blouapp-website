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
  title: "Stay quit after one month: habits that beat “I’m fine now”",
  description:
    "After 30 days, complacency and alcohol cues kill quits. Lock maintenance habits: weekly review, slip protocol, weight/sleep guardrails, and tracker check-ins.",
  path: "/stay-quit-after-one-month",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "stay quit smoking",
    "after one month quit smoking",
    "quit smoking maintenance",
    "avoid relapse after quitting",
  ],
});

const faqItems = [
  {
    question: "Is month two easier than month one?",
    answer:
      "Often physically yes, but cue-based cravings can persist. The risk shifts from withdrawal to overconfidence and social drinking.",
  },
  {
    question: "Should I still open the app daily?",
    answer:
      "If daily feels heavy, switch to “craving-driven + weekly review.” The point is keeping the tool faster than negotiating with a craving.",
  },
  {
    question: "What if I gain weight?",
    answer:
      "Some appetite increase is common. If it worries you, read /quit-smoking-without-gaining-weight and discuss with a clinician if needed.",
  },
  {
    question: "What if I slip once?",
    answer:
      "Contain it the same day with /i-smoked-one-cigarette—then update your top cue.",
  },
];

export default function StayQuitAfterOneMonthPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Stay quit after one month: habits that beat “I’m fine now”",
    description:
      "Maintenance habits for staying quit after the first month of smoking cessation.",
    path: "/stay-quit-after-one-month",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="stay-quit-month-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Stay quit after one month", path: "/stay-quit-after-one-month" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Maintenance
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Stay quit after one month
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Month one proves you can survive withdrawal. Month two tests whether
          you will keep protecting the quit when motivation dips.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_stay_quit_month" placement="article_intro" />
          <Link href="/how-to-stop-a-relapse" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
            Relapse playbook →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "weekly", label: "Weekly review (10 minutes)" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="After a month, keep a weekly 10-minute review: top cue of the week, alcohol plan, sleep debt, and one upgrade to your craving loop. Treat “I’m fine now” as a warning label, not a trophy—maintenance is boring on purpose."
          facts={[
            "Milestone guides at /guides keep benefits visible through month 3+.",
            "Money saved at /tools/money-saved reinforces reward chemistry.",
          ]}
        />
      </section>

      <section id="weekly" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Weekly review (10 minutes)</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-teal-900/90">
          <li>Any near-misses? What was the 60 seconds before?</li>
          <li>Did alcohol appear? If yes, read /alcohol-and-quitting-smoking again.</li>
          <li>Update one replacement habit that felt weak.</li>
        </ol>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-stay-quit-month" />
      </section>

      <div className="flex flex-wrap gap-3">
        <AppStoreBadgeLink campaign="pillar_stay_quit_month" placement="article_footer_card" />
        <Link href="/guides/what-happens-after-1-month" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          1-month milestone guide →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/stay-quit-after-one-month</code>
      </p>
    </div>
  );
}
