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
const CAMPAIGN = "article_is-it-too-late-to-quit-smoking";

export const metadata: Metadata = buildMetadata({
  title: "Is it too late to quit smoking? Benefits at any age",
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
      "Blou keeps it simple: an SOS button for the moment a craving hits, lung checks, and one visual timeline of every milestone and smoke-free day—helpful at any age.",
  },
];

export default function IsItTooLateToQuitSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Is it too late to quit smoking? Benefits at any age",
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
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          { name: "Is it too late to quit smoking?", path: "/is-it-too-late-to-quit-smoking" },
        ]}
      />

      <ArticleHeader
        kicker="Hope + planning"
        title="Is it too late to quit smoking?"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/quitting-smoking-after-50" variant="secondary">
            Quitting in your 50s+ →
          </ButtonLink>
        }
      >
        <p>
          It is rarely “too late” for meaningful benefit. The better question is
          what support you need given your age, conditions, and smoking history.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "next", label: "What to do next" },
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

      <InlineAppCta campaign={CAMPAIGN}>
        Your body starts responding within days, whatever your age. Blou&apos;s lung checks and photo
        timeline let you watch your own recovery, and its SOS button is there when a craving hits.
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
