import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Byline } from "@/components/marketing/Byline";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { RelatedGuides } from "@/components/marketing/RelatedGuides";
import { StayOnTrackCard } from "@/components/marketing/StayOnTrackCard";
import { TableOfContents } from "@/components/site/TableOfContents";
import { PILLAR_ARTICLE_REFERENCES } from "@/lib/pillarArticleReferences";
import { RELATED_PILLAR_SLUGS } from "@/lib/relatedPillarSlugs";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

const PUBLISHED = "2026-04-27";
const MODIFIED = "2026-04-27";

export const metadata: Metadata = buildMetadata({
  title: "Quitting smoking in your 50s: plan, benefits, and screening",
  description:
    "Quitting in your 50s still cuts heart risk and supports healthier lungs. Learn how meds, bone health, and lung screening fit a smoke-free plan in midlife.",
  path: "/quitting-smoking-after-50",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quitting smoking in your 50s",
    "quit smoking at 50",
    "stop smoking after 50",
    "benefits quitting smoking 50s",
  ],
});

const faqItems = [
  {
    question: "Is 55 too late to quit smoking?",
    answer:
      "No. Risk for heart attack and stroke drops after quitting at any adult age, and lung cancer risk continues to fall the longer you stay smoke-free compared with continued smoking. You are trading future probability, not reversing a videotape—but the trade is real.",
  },
  {
    question: "Will I cough more when I quit in my 50s?",
    answer:
      "Some people experience temporary cough or chest congestion as airways clear. New or worsening chest pain, blood in sputum, or severe breathlessness needs medical evaluation—not a self-diagnosis of withdrawal.",
  },
  {
    question: "Should I use the patch if I take heart medications?",
    answer:
      "Many people do, but dosing and formulation should be reviewed with your clinician or pharmacist. Bring your full medication list to the appointment, including over-the-counter supplements.",
  },
  {
    question: "How does quitting affect bone health?",
    answer:
      "Smoking is a risk factor for osteoporosis and fracture. Quitting removes that ongoing insult and pairs well with weight-bearing exercise, adequate calcium and vitamin D when indicated, and bone density discussions with your doctor.",
  },
  {
    question: "Do I still need lung cancer screening if I quit?",
    answer:
      "If you meet age and smoking history criteria, screening may still be appropriate for a window after quitting. Guidelines evolve; ask your clinician what applies to you rather than assuming quitting automatically removes all screening needs.",
  },
] as const;

export default function QuittingSmokingAfter50Page() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quitting smoking in your 50s: plan, benefits, and screening",
    description:
      "Midlife cessation expectations, medications, bone health, and when to involve clinicians.",
    path: "/quitting-smoking-after-50",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
    citation: PILLAR_ARTICLE_REFERENCES.map((r) => ({
      name: r.label,
      url: r.href,
      publisher: r.publisher,
    })),
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="after-50-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Quitting smoking in your 50s", path: "/quitting-smoking-after-50" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Relapse &amp; maintenance
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quitting smoking in your 50s
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Your 50s are a high-stakes decade for cardiovascular and cancer risk.
          Quitting now still bends the curve—especially when you combine
          cessation with movement, blood pressure control, and appropriate
          screening conversations.
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
            Open the full quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          {
            id: "why-fifties-matter",
            label: "Why do your 50s matter for quitting smoking?",
          },
          {
            id: "heart-and-circulation",
            label: "What happens to heart and circulation risk after you quit?",
          },
          {
            id: "lungs-screening",
            label: "What should you know about lungs and screening?",
          },
          {
            id: "medications-safety",
            label: "How do you choose cessation medications safely?",
          },
          {
            id: "when-to-seek-medical-care",
            label: "When should you seek medical care?",
          },
          { id: "stay-on-track", label: "Stay on track" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "related-guides", label: "Related reading" },
          { id: "sources", label: "Sources & further reading" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Quitting smoking in your 50s still lowers heart attack and stroke risk compared with continued smoking, and it supports lung health even when decades of smoke are already behind you. The strongest approach is a dated quit plan, clinician-reviewed medication or NRT, and follow-up on symptoms that could be something other than withdrawal."
          facts={[
            "Tobacco remains a leading preventable cause of death worldwide; cessation at older adult ages still changes individual outcomes.",
            "Behavioral counseling plus cessation medication outperforms either alone for many smokers, per Surgeon General synthesis.",
            "New chest symptoms after quitting deserve medical assessment rather than being brushed off as normal forever.",
          ]}
        />
      </section>

      <section
        id="why-fifties-matter"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Why do your 50s matter for quitting smoking?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Many people in their 50s already notice stairs wind them more, blood
          pressure creeps up, or a parent’s heart attack rewrote their sense of
          risk. Tobacco accelerates those trajectories. The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.who.int/news-room/fact-sheets/detail/tobacco"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHO tobacco fact sheet
          </a>{" "}
          frames tobacco as a population-level driver of NCDs; your quit is the
          personal lever you control inside that picture.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          This decade is also when identity shifts—“I have always been a smoker”
          feels harder to peel. Tools that track smoke-free time, money not spent,
          and craving patterns help replace identity with data. Try the{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/tools/money-saved"
          >
            money-saved calculator
          </Link>{" "}
          alongside{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/tools/lung-recovery"
          >
            lung recovery timeline
          </Link>{" "}
          for concrete reinforcement.
        </p>
      </section>

      <section
        id="heart-and-circulation"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What happens to heart and circulation risk after you quit?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.cdc.gov/tobacco/about/benefits-of-quitting.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            CDC overview on benefits after quitting
          </a>{" "}
          summarizes rapid improvements in circulation and longer-term
          reductions in heart disease risk after cessation. Those population curves
          include people who quit in midlife—not only lifelong never-smokers.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Practically, pair quitting with blood pressure follow-up. Some
          measurements shift as nervous system tone changes. Your GP can help
          interpret readings over weeks, not single days.
        </p>
      </section>

      <section
        id="lungs-screening"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What should you know about lungs and screening?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Low-dose CT lung cancer screening is recommended only for defined
          high-risk groups. Quitting changes your risk profile over time but does
          not magically erase history. Ask your clinician whether you meet
          current criteria, when to start, and how often to repeat—those answers
          are personal, not generic blog defaults.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Separately, some increased phlegm or cough after quitting can reflect
          airway recovery. The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.nhs.uk/better-health/quit-smoking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NHS quit hub
          </a>{" "}
          discusses common symptom questions; use it as orientation, not a
          substitute for imaging or exams when red-flag symptoms appear.
        </p>
      </section>

      <section
        id="medications-safety"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How do you choose cessation medications safely?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.hhs.gov/surgeongeneral/reports-and-publications/tobacco/2020-cessation-sgr/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            2020 Surgeon General report on cessation
          </a>{" "}
          underscores that FDA-approved medications increase quit rates for many
          people. In your 50s, the question is less “if” and more “which,” given
          kidney function, psychiatric history, seizures, or complex cardiac
          disease.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Bring real-world details: how many cigarettes per day, wake-up time to
          first cigarette, prior quit attempts, and alcohol pattern. Those inputs
          change dosing strategies and behavioral plans more than age alone.
        </p>
      </section>

      <section
        id="when-to-seek-medical-care"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          When should you seek medical care?
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-teal-900/90">
          <li>
            Sudden weakness on one side, slurred speech, or crushing chest
            pain—call emergency services; do not drive yourself.
          </li>
          <li>
            Unexplained weight loss, persistent hoarseness, or coughing blood.
          </li>
          <li>
            Severe depression, especially with suicidal thoughts, after stopping
            smoking—seek urgent mental health care.
          </li>
        </ul>
      </section>

      <section id="stay-on-track" className="scroll-mt-24">
        <StayOnTrackCard
          campaign="article_footer_card"
          placement="article_footer_card"
        />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-quit-after-50" />
      </section>

      <section id="related-guides" className="scroll-mt-24">
        <RelatedGuides
          slugs={[
            RELATED_PILLAR_SLUGS.quittingSmokingAfter40,
            "how-to-quit-smoking",
            "prepare-to-quit-smoking",
            RELATED_PILLAR_SLUGS.iSmokedOneCigarette,
            "what-happens-after-1-year",
          ]}
        />
      </section>

      <section
        id="sources"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Sources &amp; further reading
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          {PILLAR_ARTICLE_REFERENCES.map((reference) => (
            <li key={reference.href}>
              <a
                className="underline decoration-teal-400 underline-offset-4"
                href={reference.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {reference.label}
              </a>{" "}
              <span className="text-teal-900/60">· {reference.publisher}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-teal-900/70">
          This guide is educational and does not replace medical advice. If you
          have pre-existing conditions or take prescription medication, talk to
          your clinician when making changes to your smoking.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/guides"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← All guides
        </Link>
        <AppStoreBadgeLink
          campaign="article_footer_card"
          placement="article_footer_card"
        />
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quitting-smoking-after-50</code>
      </p>
    </div>
  );
}
