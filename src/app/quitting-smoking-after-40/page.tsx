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
  title: "Quitting smoking after 40: benefits, risks, and plan",
  description:
    "Quitting smoking after 40 still sharply cuts heart and cancer risk. Learn what changes first, how NRT and meds fit midlife health, and when to call your clinician.",
  path: "/quitting-smoking-after-40",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quitting smoking after 40",
    "quit smoking at 40",
    "benefits of quitting smoking after 40",
    "stop smoking in your 40s",
  ],
});

const faqItems = [
  {
    question: "Is it worth quitting smoking after 40?",
    answer:
      "Yes. Cardiovascular risk begins to fall soon after quitting, and longer smoke-free time stacks additional benefit across decades. You cannot erase every year of exposure, but you change the slope of future risk starting from your last cigarette.",
  },
  {
    question: "Will I gain weight if I quit in my 40s?",
    answer:
      "Some people gain a modest amount because nicotine suppresses appetite and quitting restores taste. Planning protein-forward meals, movement you enjoy, and clinician support for weight concerns usually beats delaying quit “until after vacation.”",
  },
  {
    question: "Are nicotine patches safe in your 40s if you have blood pressure issues?",
    answer:
      "Many people in midlife use NRT successfully, but cardiovascular history matters for dosing and product choice. A pharmacist or doctor should review blood pressure readings, medications, and any arrhythmia history—not internet anecdotes.",
  },
  {
    question: "How is quitting different after 40 than in your 20s?",
    answer:
      "Midlife often means longer smoking histories, more entrenched routines, and medications for other conditions. Those factors make planning and medical support more important, not less. They do not make quitting impossible.",
  },
  {
    question: "Should I get screened after I quit?",
    answer:
      "Lung cancer screening with low-dose CT is recommended for some long-term smokers in specific age and pack-year bands. Ask your clinician whether you meet criteria; quitting does not replace screening where it is indicated.",
  },
] as const;

export default function QuittingSmokingAfter40Page() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quitting smoking after 40: benefits, risks, and plan",
    description:
      "Evidence-based expectations for midlife cessation, medications, and when to involve a clinician.",
    path: "/quitting-smoking-after-40",
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
      <Script id="after-40-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Quitting smoking after 40", path: "/quitting-smoking-after-40" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Relapse &amp; maintenance
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quitting smoking after 40
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Your body still responds powerfully when you quit in your 40s. The
          work is honest planning: longer history with nicotine, more daily
          cues, and often other health priorities that deserve coordinated care.
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
          {
            id: "is-it-worth-it",
            label: "Is quitting smoking after 40 still worth it?",
          },
          {
            id: "body-changes-first",
            label: "What changes first in your body when you quit?",
          },
          {
            id: "medications-midlife",
            label: "How do NRT and prescription medications fit midlife?",
          },
          {
            id: "routine-and-stress",
            label: "How do you quit when life is already stressful?",
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
          answer="Quitting smoking after 40 is one of the highest-yield health moves you can make: heart and circulation benefit quickly, and cancer risk falls progressively the longer you stay smoke-free. Midlife quits succeed most often with a fixed quit date, medication or NRT reviewed by a clinician, and a cue plan—not willpower alone."
          facts={[
            "The CDC summarizes broad health benefits that begin soon after the last cigarette and accumulate over years.",
            "Longer smoking history means stronger learned cues; structured behavioral support addresses that layer directly.",
            "Medication interactions are more common in midlife; professional review improves safety and adherence.",
          ]}
        />
      </section>

      <section
        id="is-it-worth-it"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Is quitting smoking after 40 still worth it?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Quitting smoking after 40 is still worth it because the major killers
          tied to tobacco—heart disease, stroke, and several cancers—are driven
          by continued exposure. The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.cdc.gov/tobacco/about/benefits-of-quitting.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            CDC benefits-of-quitting overview
          </a>{" "}
          is explicit that timelines for recovery begin at cessation, not at
          some younger birthday you missed.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          That does not mean risk snaps back to “never smoked.” It means each
          smoke-free year buys probability: fewer acute events, slower lung
          decline than continued smoking, and more room for exercise, sleep,
          and medications for other conditions to work as intended.
        </p>
      </section>

      <section
        id="body-changes-first"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What changes first in your body when you quit?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Within hours to days, carbon monoxide clears and circulation improves
          for many people—often before you emotionally “feel” like a non-smoker.
          Over weeks, cough and airway irritation can fluctuate as cilia wake
          back up; that paradoxical “worse before better” phase surprises some
          midlife quitters who read it as failure instead of repair.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.nhs.uk/better-health/quit-smoking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NHS quit smoking materials
          </a>{" "}
          emphasize practical symptom timelines so people do not misread normal
          withdrawal as a reason to return. Pair that reassurance with our{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/tools/lung-recovery"
          >
            lung recovery timeline tool
          </Link>{" "}
          if seeing a visual arc helps your motivation.
        </p>
      </section>

      <section
        id="medications-midlife"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How do NRT and prescription medications fit midlife?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Combination nicotine replacement (patch plus fast-acting gum or
          lozenge) is a first-line strategy for many adults. Varenicline and
          bupropion can outperform placebo substantially, but both deserve a
          medication review when you take blood pressure drugs, psychiatric
          medicines, or anything that affects the liver.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.hhs.gov/surgeongeneral/reports-and-publications/tobacco/2020-cessation-sgr/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            2020 Surgeon General report on smoking cessation
          </a>{" "}
          synthesizes decades of evidence that behavioral support plus
          medication beats either alone for many smokers. Midlife is exactly when
          “both” tends to matter, because life complexity is higher, not lower.
        </p>
      </section>

      <section
        id="routine-and-stress"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How do you quit when life is already stressful?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Waiting for a calm month is a trap—there is always a deadline, a kid
          event, or a boss crisis. Instead, lower the difficulty bar: shrink the
          first week’s goals to “no cigarettes” rather than also remaking diet,
          sleep, and exercise perfectly. Stack support: quitline, clinician, app
          check-ins, and one friend who will answer a text at craving o’clock.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If your smoking is tightly braided with alcohol or social nights, read{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/alcohol-and-quitting-smoking"
          >
            alcohol and quitting smoking
          </Link>{" "}
          before quit day so you are not improvising that pattern while
          nicotine is leaving your system.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.who.int/news-room/fact-sheets/detail/tobacco"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHO tobacco fact sheet
          </a>{" "}
          reminds us that tobacco remains one of the leading preventable causes
          of death worldwide—quitting at any adult age shifts your personal odds,
          even when global statistics feel abstract.
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
            Chest pain, fainting, severe shortness of breath, or coughing blood
            when you change smoking habits—get urgent care; do not assume it is
            “just withdrawal.”
          </li>
          <li>
            Depression with suicidal thoughts after quitting—mental health
            emergencies deserve immediate professional help.
          </li>
          <li>
            You live with diabetes, kidney disease, or cardiovascular disease and
            want help choosing the safest cessation pharmacotherapy.
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
        <FaqSection items={faqItems} jsonLdId="faq-quit-after-40" />
      </section>

      <section id="related-guides" className="scroll-mt-24">
        <RelatedGuides
          slugs={[
            RELATED_PILLAR_SLUGS.quittingSmokingAfter50,
            "how-to-quit-smoking",
            "prepare-to-quit-smoking",
            RELATED_PILLAR_SLUGS.alcoholAndQuittingSmoking,
            "what-happens-after-1-month",
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
          href="/how-to-quit-smoking"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← Full quit plan
        </Link>
        <AppStoreBadgeLink
          campaign="article_footer_card"
          placement="article_footer_card"
        />
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quitting-smoking-after-40</code>
      </p>
    </div>
  );
}
