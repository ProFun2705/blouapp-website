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
  title: "Quit smoking before surgery: timeline, risks, and support",
  description:
    "Why quitting before surgery matters, typical anesthesia team expectations, how far ahead to plan, and how apps and quitlines help—always follow your surgical team.",
  path: "/quit-smoking-before-surgery",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking before surgery",
    "stop smoking surgery",
    "smoking and anesthesia",
    "preoperative quit smoking",
  ],
});

const faqItems = [
  {
    question: "How long before surgery should I quit smoking?",
    answer:
      "Earlier is generally better for wound healing and anesthesia risk, but the exact target depends on your procedure and team. Ask your surgeon and anesthesiologist for a specific goal—do not rely on generic web timelines as permission to delay.",
  },
  {
    question: "Will nicotine replacement affect surgery?",
    answer:
      "Some teams have preferences about NRT versus continued smoking. Bring a complete list of nicotine products and medications to your pre-op visit.",
  },
  {
    question: "Can I use a quit app while preparing for surgery?",
    answer:
      "Yes—apps help with craving drills, tracking, and stress planning. They do not replace medical clearance.",
  },
  {
    question: "What if I can only quit a few days before?",
    answer:
      "Any reduction beats none, but be honest with your care team. They can adjust counseling and monitoring. Shame makes people hide smoking—accuracy keeps you safer.",
  },
];

export default function QuitSmokingBeforeSurgeryPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking before surgery: timeline, risks, and support",
    description:
      "Preoperative smoking cessation overview with emphasis on clinician guidance.",
    path: "/quit-smoking-before-surgery",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="surgery-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Quit smoking before surgery",
            path: "/quit-smoking-before-surgery",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Preoperative support
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking before surgery
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Surgery is one of the highest-motivation moments to quit. Your
          surgical team sets the medical rules; this page helps you build a
          practical behavior plan and daily support while you follow their
          instructions exactly.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink
            campaign="pillar_surgery"
            placement="article_intro"
          />
          <Link
            href="/prepare-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            7-day prep checklist →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "why", label: "Why teams care" },
          { id: "plan", label: "Build a simple plan" },
          { id: "sources", label: "Further reading" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Tell your surgical team the truth about smoking and nicotine use, ask for their recommended quit window and NRT policy, then use a structured prep plan plus daily craving tools. Apps help execution; clinicians set safety."
          facts={[
            "Healing and infection risk improve when smoking stops before many procedures.",
            "Anesthesia safety depends on accurate history—hiding smoking increases risk.",
            "Quitlines add free coaching while you wait for appointments.",
          ]}
        />
      </section>

      <section
        id="why"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Why teams care</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Smoking affects circulation, airway reactivity, and healing. Your team
          may connect you with hospital-based cessation resources—take them.
          General education:{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-resources/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            CDC quit resources
          </a>
          .
        </p>
      </section>

      <section
        id="plan"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Build a simple plan</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>Write down your surgery date and the team’s nicotine rules.</li>
          <li>
            Use{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/how-to-quit-smoking"
            >
              how to quit smoking
            </Link>{" "}
            for cue planning and check-ins.
          </li>
          <li>
            If stress spikes, read{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/guides/anxiety"
            >
              anxiety
            </Link>{" "}
            and sleep guides while awaiting clinician input.
          </li>
        </ol>
      </section>

      <section
        id="sources"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Further reading</h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          <li>
            <a
              className="underline decoration-teal-400 underline-offset-4"
              href="https://www.smokefree.gov/challenges-when-quitting/stress/stress-and-smoking"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smokefree.gov: stress and smoking
            </a>
          </li>
        </ul>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-surgery" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="pillar_surgery"
          placement="article_footer_card"
        />
        <Link
          href="/motivation-to-quit-smoking"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Motivation toolkit →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-smoking-before-surgery</code>
      </p>
    </div>
  );
}
