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

const PUBLISHED = "2026-05-14";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_combination-nrt-quit-smoking";

export const metadata: Metadata = buildMetadata({
  title: "Combination NRT to quit smoking: patch + fast relief",
  description:
    "What combination NRT means, why it helps some people, safety basics, and how a quit app logs spikes so you and your pharmacist adjust thoughtfully.",
  path: "/combination-nrt-quit-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "combination NRT",
    "patch and gum quit smoking",
    "nicotine patch and lozenge",
    "dual NRT smoking cessation",
  ],
});

const faqItems = [
  {
    question: "Is combination NRT safe?",
    answer:
      "For many adults who smoke, combination NRT is considered under clinician/pharmacist guidance—but individual risks (pregnancy, heart disease, medication interactions) must be reviewed professionally.",
  },
  {
    question: "Do I double the nicotine?",
    answer:
      "No—dosing is not “patch plus unlimited gum.” Follow professional guidance and product labeling; this page cannot dose for you.",
  },
  {
    question: "Why combine at all?",
    answer:
      "Patch covers baseline withdrawal while gum or lozenge tackles cue spikes—many people find the combo reduces breakthrough craving intensity.",
  },
  {
    question: "How does Blou help?",
    answer:
      "Blou gives you SOS help the second a breakthrough craving hits, personal insights, and every smoke-free day on one visual timeline—useful context for pharmacist check-ins. Dosing decisions stay with your pharmacist or clinician.",
  },
];

export default function CombinationNrtQuitSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Combination NRT to quit smoking: patch + fast relief",
    description:
      "Educational overview of combination nicotine replacement therapy for smoking cessation.",
    path: "/combination-nrt-quit-smoking",
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
          { name: "Combination NRT quit smoking", path: "/combination-nrt-quit-smoking" },
        ]}
      />

      <ArticleHeader
        kicker="NRT strategy"
        title="Combination NRT to quit smoking"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/nicotine-patch-vs-gum" variant="secondary">
            Patch vs gum →
          </ButtonLink>
        }
      >
        <p>
          Combination NRT pairs a long-acting form (usually patch) with a
          fast-acting form (gum, lozenge, spray where available). It is a medical
          strategy—confirm eligibility and dosing with a clinician or pharmacist.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "behavior", label: "Behavior layer" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Combination NRT means using a baseline nicotine patch (or similar) plus a fast-acting product for breakthrough cravings—typically with clinician/pharmacist oversight. Pair it with cue planning and a tracker that logs spikes so adjustments are evidence-based, not guesswork."
          facts={[
            "Read /nrt-and-quit-smoking-app for the daily loop.",
            "Compare products in /nicotine-patch-vs-gum before your consult.",
          ]}
        />
      </section>

      <section id="behavior" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Behavior layer</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          NRT does not delete learned cues. Keep{" "}
          <Link className="font-medium text-teal-800 underline" href="/how-to-quit-smoking">
            the quit plan
          </Link>{" "}
          active—especially{" "}
          <Link className="font-medium text-teal-800 underline" href="/first-week-quit-smoking">
            week one
          </Link>
          .
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        NRT doesn&apos;t delete learned cues. Blou&apos;s SOS button is there the
        second one fires, alongside the dosing plan you agree with your
        pharmacist or clinician.
      </InlineAppCta>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/quit-smoking-with-nicotine-patch" variant="secondary">
          Patch plan →
        </ButtonLink>
      </div>
    </div>
  );
}
