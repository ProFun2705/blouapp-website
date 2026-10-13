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
const CAMPAIGN = "article_quit-smoking-with-bupropion";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking with bupropion (Zyban) + your quit plan",
  description:
    "How bupropion fits smoking cessation for some people, what to discuss with a clinician, and how apps support routines—not prescriptions or dosing.",
  path: "/quit-smoking-with-bupropion",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "bupropion quit smoking",
    "Zyban smoking cessation",
    "Wellbutrin quit smoking",
    "bupropion and nicotine patch",
  ],
});

const faqItems = [
  {
    question: "Is bupropion the same as Wellbutrin?",
    answer:
      "Bupropion is the generic drug name. It is used for depression (often as Wellbutrin) and for smoking cessation in some formulations/regions (Zyban in some markets). Your clinician chooses formulation and dose—not a website.",
  },
  {
    question: "Who should not use bupropion?",
    answer:
      "There are important contraindications (including seizure risk and certain eating disorders). A full medical review is required before starting.",
  },
  {
    question: "Can I combine bupropion with NRT?",
    answer:
      "Sometimes clinicians combine treatments, but interactions and side effects must be reviewed professionally. Do not combine on your own.",
  },
  {
    question: "What does Blou add?",
    answer:
      "SOS help the second a craving hits, simple lung checks, and every smoke-free day on one visual timeline—useful alongside any clinician-approved medication plan, never instead of it.",
  },
];

export default function QuitSmokingWithBupropionPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking with bupropion (Zyban) + your quit plan",
    description:
      "Educational overview of bupropion for smoking cessation; not medical advice.",
    path: "/quit-smoking-with-bupropion",
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
            name: "Quit smoking with bupropion",
            path: "/quit-smoking-with-bupropion",
          },
        ]}
      />

      <ArticleHeader
        kicker="Prescription medication (overview)"
        title="Quit smoking with bupropion (Zyban)"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/quit-smoking-with-varenicline" variant="secondary">
            Varenicline overview →
          </ButtonLink>
        }
      >
        <p>
          Bupropion is an antidepressant-class medicine that is also used for
          smoking cessation in some countries under specific formulations. Only a
          clinician can decide if it is appropriate for you. This page covers
          how it pairs with behavioral tools and apps.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "behavior", label: "Behavior layer" },
          { id: "sources", label: "Authoritative sources" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Bupropion can be part of a clinician-supervised smoking cessation plan for eligible people. Combine it with a fixed quit date, cue strategies, and follow-up; use a quit app for daily craving drills and slip recovery—not for medical dosing decisions."
          facts={[
            "Report mood changes, insomnia, or unusual thoughts to your clinician promptly.",
            "Seizure risk and drug interactions make prescriber screening essential.",
            "Quitlines add free behavioral support in many regions.",
          ]}
        />
      </section>

      <section
        id="behavior"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Behavior layer</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Medication does not erase learned triggers. Build your cue plan with{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/how-to-quit-smoking"
          >
            how to quit smoking
          </Link>{" "}
          and protect early nights with{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/guides/insomnia"
          >
            insomnia
          </Link>{" "}
          strategies if sleep wobbles.
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Medication doesn&apos;t erase learned triggers. Alongside your
        clinician&apos;s plan, Blou&apos;s SOS button is there the second a
        craving hits, and your timeline shows every smoke-free day so far.
      </InlineAppCta>

      <section
        id="sources"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Authoritative sources
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          <li>
            <a
              className="underline decoration-teal-400 underline-offset-4"
              href="https://www.hhs.gov/surgeongeneral/reports-and-publications/tobacco/2020-cessation-sgr/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              US Surgeon General: Smoking Cessation (2020)
            </a>
          </li>
          <li>
            <a
              className="underline decoration-teal-400 underline-offset-4"
              href="https://www.nhs.uk/medicines/bupropion-hydrochloride-zyban/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NHS: bupropion (Zyban) overview
            </a>
          </li>
        </ul>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/nrt-and-quit-smoking-app" variant="secondary">
          NRT + app →
        </ButtonLink>
      </div>
    </div>
  );
}
