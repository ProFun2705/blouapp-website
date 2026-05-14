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
  title: "Is it too late to quit smoking? Benefits start faster than you think",
  description:
    "No—quitting has meaningful benefits at any adult age. Here is what changes first, what to ask your clinician, and how tracking keeps momentum.",
  path: "/is-it-too-late-to-quit-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "is it too late to quit smoking",
    "quit smoking at 60",
    "benefits quit smoking older age",
    "too old to quit smoking",
  ],
});

const faqItems = [
  {
    question: "If I smoked 40 years, does quitting still matter?",
    answer:
      "Yes. Risk reductions and symptom improvements can begin within days to weeks, with additional gains over years. Exact trajectories vary by person and medical history—your clinician can contextualize.",
  },
  {
    question: "Will my lungs heal?",
    answer:
      "Lungs can improve in measurable ways after quitting, but not everything reverses. Use /tools/lung-recovery as educational context, not a promise.",
  },
  {
    question: "Should older adults use NRT or medications?",
    answer:
      "Often yes, but dosing and interactions differ—this requires professional review.",
  },
  {
    question: "How does Blou help older quitters?",
    answer:
      "Clear counters and craving support reduce cognitive load during urges—helpful at any age.",
  },
];

export default function IsItTooLateToQuitSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Is it too late to quit smoking? Benefits start faster than you think",
    description:
      "Evidence-oriented reassurance that quitting smoking remains worthwhile at older ages.",
    path: "/is-it-too-late-to-quit-smoking",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="too-late-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Is it too late to quit smoking?", path: "/is-it-too-late-to-quit-smoking" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Hope + planning
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Is it too late to quit smoking?
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          It is rarely “too late” for meaningful benefit. The better question is
          what support you need given your age, conditions, and smoking history.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_too_late" placement="article_intro" />
          <Link href="/quitting-smoking-after-50" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
            Quitting in your 50s+ →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "next", label: "What to do next" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="It is not too late: quitting lowers many risks and can improve symptoms at any adult age, with some changes beginning within days. The highest-impact next step is a quit date plus clinician-guided support (NRT/meds as appropriate) and a behavioral tracker."
          facts={[
            "See Surgeon General / NHS summaries linked from /how-to-quit-smoking.",
            "If fear is the blocker, read /motivation-to-quit-smoking next.",
          ]}
        />
      </section>

      <section id="next" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">What to do next</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Use{" "}
          <Link className="font-medium text-teal-800 underline" href="/prepare-to-quit-smoking">
            prep checklist
          </Link>
          , then{" "}
          <Link className="font-medium text-teal-800 underline" href="/first-week-quit-smoking">
            week one playbook
          </Link>
          . If cost is a barrier:{" "}
          <Link className="font-medium text-teal-800 underline" href="/quit-smoking-on-a-budget">
            quit on a budget
          </Link>
          .
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-too-late-quit" />
      </section>

      <div className="flex flex-wrap gap-3">
        <AppStoreBadgeLink campaign="pillar_too_late" placement="article_footer_card" />
        <Link href="/how-to-quit-smoking" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          Full plan →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/is-it-too-late-to-quit-smoking</code>
      </p>
    </div>
  );
}
