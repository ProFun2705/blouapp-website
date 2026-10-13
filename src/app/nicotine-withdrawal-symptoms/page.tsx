import type { Metadata } from "next";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-05-14";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_nicotine-withdrawal-symptoms";

export const metadata: Metadata = buildMetadata({
  title: "Nicotine withdrawal symptoms after quitting smoking",
  description:
    "Common nicotine withdrawal symptoms, typical timing, red flags, and how symptom guides plus a tracker app reduce fear in week one.",
  path: "/nicotine-withdrawal-symptoms",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "nicotine withdrawal symptoms",
    "symptoms after quitting smoking",
    "quit smoking withdrawal",
    "nicotine withdrawal headache",
  ],
});

const faqItems = [
  {
    question: "How long do withdrawal symptoms last?",
    answer:
      "For many people the roughest stretch is the first 1–2 weeks, with gradual improvement over 2–4 weeks. Individual symptoms vary—use our timeline and symptom guides for ranges.",
  },
  {
    question: "When are symptoms not “just withdrawal”?",
    answer:
      "Seek urgent care for crushing chest pain, severe shortness of breath, neurologic deficits, or thoughts of self-harm. When unsure, call emergency services.",
  },
  {
    question: "Will an app reduce symptoms?",
    answer:
      "No—but it can reduce panic and inconsistency by giving you a practiced craving response and links to the right guide when a symptom spikes.",
  },
  {
    question: "Should I use NRT?",
    answer:
      "Many people should at least discuss NRT or prescriptions with a clinician or pharmacist. This page is education, not personalized medical advice.",
  },
];

export default function NicotineWithdrawalSymptomsPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Nicotine withdrawal symptoms after quitting smoking",
    description:
      "Overview of nicotine withdrawal symptoms after quitting smoking with links to deeper guides.",
    path: "/nicotine-withdrawal-symptoms",
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
          { name: "Nicotine withdrawal symptoms", path: "/nicotine-withdrawal-symptoms" },
        ]}
      />

      <ArticleHeader
        kicker="Symptom hub"
        title="Nicotine withdrawal symptoms"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/nicotine-withdrawal-timeline" variant="secondary">
            Withdrawal timeline →
          </ButtonLink>
        }
      >
        <p>
          Withdrawal feels chaotic until you name it. Use this hub to match what
          you feel with a guide, then anchor behavior with a tracker.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "common", label: "Common symptoms" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Nicotine withdrawal commonly includes irritability, anxiety, low mood, trouble concentrating, sleep changes, increased appetite, cough, and constipation—usually worst in the first week. Match your symptom to a guide below; escalate to clinicians for red-flag symptoms."
          facts={[
            "Our milestone guides cover body changes beyond withdrawal.",
            "Medication/NRT can blunt withdrawal for eligible people—ask a professional.",
          ]}
        />
      </section>

      <section id="common" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Common symptoms (jump links)</h2>
        <ul className="mt-4 grid gap-2 text-sm text-teal-900 sm:grid-cols-2">
          <li><Link className="font-medium text-teal-800 underline" href="/quit-smoking-with-anxiety">Anxiety</Link></li>
          <li><Link className="font-medium text-teal-800 underline" href="/guides/irritability">Irritability</Link></li>
          <li><Link className="font-medium text-teal-800 underline" href="/guides/insomnia">Insomnia</Link></li>
          <li><Link className="font-medium text-teal-800 underline" href="/guides/headaches">Headaches</Link></li>
          <li><Link className="font-medium text-teal-800 underline" href="/guides/cough">Cough</Link></li>
          <li><Link className="font-medium text-teal-800 underline" href="/guides/constipation">Constipation</Link></li>
          <li><Link className="font-medium text-teal-800 underline" href="/guides/cravings">Cravings</Link></li>
          <li><Link className="font-medium text-teal-800 underline" href="/guides/increased-appetite">Increased appetite</Link></li>
        </ul>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Most of these symptoms peak in week one, then ease. Blou&apos;s SOS button helps the second a
        craving hits, and your timeline shows every smoke-free day you&apos;ve already got through.
      </InlineAppCta>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/first-week-quit-smoking" variant="secondary">
          Week one playbook →
        </ButtonLink>
      </div>
    </div>
  );
}
