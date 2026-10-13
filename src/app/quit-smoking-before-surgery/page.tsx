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

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_quit-smoking-before-surgery";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking before surgery: timeline, risks, support",
  description:
    "Why quitting before surgery matters, what anesthesia teams expect, how far ahead to plan, and how apps and quitlines help. Always follow your surgical team.",
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
    title: "Quit smoking before surgery: timeline, risks, support",
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
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          {
            name: "Quit smoking before surgery",
            path: "/quit-smoking-before-surgery",
          },
        ]}
      />

      <ArticleHeader
        kicker="Preoperative support"
        title="Quit smoking before surgery"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/prepare-to-quit-smoking" variant="secondary">
            7-day prep checklist →
          </ButtonLink>
        }
      >
        <p>
          Surgery is one of the highest-motivation moments to quit. Your
          surgical team sets the medical rules; this page helps you build a
          practical behavior plan and daily support while you follow their
          instructions exactly.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "why", label: "Why teams care" },
          { id: "plan", label: "Build a simple plan" },
          { id: "sources", label: "Further reading" },
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
              href="/quit-smoking-with-anxiety"
            >
              anxiety
            </Link>{" "}
            and sleep guides while awaiting clinician input.
          </li>
        </ol>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Between pre-op visits, Blou&apos;s SOS button is there the second a
        craving hits, and your timeline shows every smoke-free day before your
        surgery date. Your surgical team still sets the rules.
      </InlineAppCta>

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

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/motivation-to-quit-smoking" variant="secondary">
          Motivation toolkit →
        </ButtonLink>
      </div>
    </div>
  );
}
