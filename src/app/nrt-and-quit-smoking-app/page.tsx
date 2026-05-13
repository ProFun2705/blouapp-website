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
  title: "NRT and a quit smoking app: how to combine them",
  description:
    "Use nicotine replacement therapy for baseline withdrawal and a quit app for cues, slips, and visibility. Simple week-by-week habits that keep both tools working together.",
  path: "/nrt-and-quit-smoking-app",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "NRT and quit app",
    "nicotine patch and app",
    "quit smoking app with NRT",
    "combination NRT tracking",
  ],
});

const faqItems = [
  {
    question: "Do I still need an app if I use the patch?",
    answer:
      "Often yes. The patch helps baseline withdrawal; apps help with cue-based cravings, slips, and keeping your quit date socially real. They solve different problems.",
  },
  {
    question: "Should I log every piece of gum?",
    answer:
      "You do not need perfect logs—consistency beats precision. Log breakthrough cravings and any fast-acting NRT you use so patterns become obvious by day 7.",
  },
  {
    question: "What if I forget the patch?",
    answer:
      "Follow product guidance and ask a pharmacist. Apps help by adding a daily check-in reminder, but they are not medical devices.",
  },
  {
    question: "Where do I learn dosing basics?",
    answer:
      "Start with our patch, gum, and lozenge pages, then confirm details with a clinician or pharmacist for your health history.",
  },
];

export default function NrtAndQuitSmokingAppPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "NRT and a quit smoking app: how to combine them",
    description:
      "How to combine nicotine replacement therapy with quit app tracking.",
    path: "/nrt-and-quit-smoking-app",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="nrt-app-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "NRT and quit smoking app", path: "/nrt-and-quit-smoking-app" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Combination support
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          NRT and a quit smoking app
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          NRT lowers nicotine withdrawal; a quit app lowers decision fatigue when
          a cue fires. Together they cover “body” and “habit.” This page is a
          simple operating rhythm—not dosing instructions.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_nrt_app" placement="article_intro" />
          <Link
            href="/quit-smoking-with-nicotine-patch"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Patch plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "roles", label: "Who does what" },
          { id: "daily-loop", label: "Daily loop (week 1)" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Use NRT as directed for baseline nicotine needs, and use a quit app for cue cravings: one-tap timer, trigger labels, slip recovery, and visible streaks. Review your top cue once per day and update your replacement action."
          facts={[
            "Combination NRT (patch + fast acting) is common—get clinician/pharmacist guidance.",
            "Apps shine in the 3–5 minute craving window.",
            "If you slip, log it and read /i-smoked-one-cigarette the same day.",
          ]}
        />
      </section>

      <section
        id="roles"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Who does what</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>NRT</strong>: reduces withdrawal peaks (
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/nicotine-withdrawal-timeline"
              >
                timeline
              </Link>
              ).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>App</strong>: makes your quit plan visible every morning and
              gives you a practiced move when a cue fires.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="daily-loop"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Daily loop (week 1)</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>Morning: confirm NRT per label + open app for the day counter.</li>
          <li>During cravings: timer → move → water → replacement.</li>
          <li>
            Evening: one-line note on your strongest cue. Links:{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/quit-smoking-with-nicotine-gum"
            >
              gum
            </Link>
            ,{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/quit-smoking-with-nicotine-lozenge"
            >
              lozenge
            </Link>
            .
          </li>
        </ol>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-nrt-app" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="pillar_nrt_app"
          placement="article_footer_card"
        />
        <Link
          href="/smoking-cessation-app"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Cessation app guide →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/nrt-and-quit-smoking-app</code>
      </p>
    </div>
  );
}
