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
  title: "Smoking cessation app: what it should do (and what it cannot)",
  description:
    "What a smoking cessation app is for: craving support, tracking, and behavior change—plus how to pair it with NRT, quitlines, and clinician care.",
  path: "/smoking-cessation-app",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "smoking cessation app",
    "cessation app",
    "tobacco cessation app",
    "quit smoking digital support",
  ],
});

const faqItems = [
  {
    question: "Does a smoking cessation app replace medication?",
    answer:
      "No. Apps support behavior change—quit dates, craving plans, tracking, and reminders. Medications and NRT are separate tools with different evidence profiles. The strongest outcomes usually combine medical support with behavioral tools.",
  },
  {
    question: "What features matter most in a cessation app?",
    answer:
      "A one-tap craving tool, visible progress (days, money, milestones), and a way to log triggers so your plan updates after slips. Fancy dashboards matter less than speed during a 3-minute urge.",
  },
  {
    question: "Are cessation apps evidence-based?",
    answer:
      "Some are designed around principles from clinical smoking cessation (skills training, tracking, feedback). Quality varies—look for apps that encourage quitlines and clinician follow-up for medications, not apps that promise miracles.",
  },
  {
    question: "Is Blou a smoking cessation app?",
    answer:
      "Blou is a quit tracker focused on cravings, savings, and milestones. It supports cessation behavior; it does not prescribe medication. Use it alongside your clinician’s plan.",
  },
];

export default function SmokingCessationAppPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Smoking cessation app: what it should do (and what it cannot)",
    description:
      "What smoking cessation apps are for and how to combine them with medical support.",
    path: "/smoking-cessation-app",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="cessation-app-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Smoking cessation app", path: "/smoking-cessation-app" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Digital support
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Smoking cessation app
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          A cessation app is not magic—it is a prosthetic for memory and urges.
          It should make your quit date, craving plan, and progress impossible to
          ignore, and it should play nicely with NRT, medications, and quitlines.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink
            campaign="pillar_cessation_app"
            placement="article_intro"
          />
          <Link
            href="/best-quit-smoking-apps"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            App comparisons →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "what-it-does", label: "What it should do" },
          { id: "pairing", label: "Pair with real-world support" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="A smoking cessation app should speed up your behavior-change loop: quit date, craving response, trigger logging, and visible progress. It cannot replace prescriptions, diagnosis, or emergency care—pair it with clinicians and public quit services."
          facts={[
            "Public health programs (CDC, NHS) emphasize counseling plus medication when appropriate.",
            "Apps work best when you open them during cravings, not once a week.",
            "If money is tight, read /free-quit-smoking-app for what “free” should include.",
          ]}
        />
      </section>

      <section
        id="what-it-does"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">What it should do</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Quit date + prep</strong> aligned with{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/prepare-to-quit-smoking"
              >
                your prep week
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Urge tool</strong> you can start in one tap (timer + action).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Slip protocol</strong> that points to{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/how-to-stop-a-relapse"
              >
                relapse recovery
              </Link>{" "}
              instead of shame.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="pairing"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Pair with real-world support
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          See{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/nrt-and-quit-smoking-app"
          >
            NRT and a quit app
          </Link>{" "}
          and the medication pillars below if you and your clinician choose
          pharmacotherapy.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-smoking-cessation-app" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="pillar_cessation_app"
          placement="article_footer_card"
        />
        <Link
          href="/free-quit-smoking-app"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Free quit app guide →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/smoking-cessation-app</code>
      </p>
    </div>
  );
}
