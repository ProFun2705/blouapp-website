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
  title: "Combination NRT to quit smoking: patch + fast relief (clinician-guided)",
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
      "Log breakthrough urges with timestamps so patterns show up by day 5—useful for pharmacist check-ins.",
  },
];

export default function CombinationNrtQuitSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Combination NRT to quit smoking: patch + fast relief (clinician-guided)",
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
      <Script id="combo-nrt-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Combination NRT quit smoking", path: "/combination-nrt-quit-smoking" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          NRT strategy
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Combination NRT to quit smoking
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Combination NRT pairs a long-acting form (usually patch) with a
          fast-acting form (gum, lozenge, spray where available). It is a medical
          strategy—confirm eligibility and dosing with a clinician or pharmacist.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_combo_nrt" placement="article_intro" />
          <Link href="/nicotine-patch-vs-gum" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
            Patch vs gum →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "behavior", label: "Behavior layer" },
          { id: "social-proof", label: "App Store reviews" },
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

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-combo-nrt" />
      </section>

      <div className="flex flex-wrap gap-3">
        <AppStoreBadgeLink campaign="pillar_combo_nrt" placement="article_footer_card" />
        <Link href="/quit-smoking-with-nicotine-patch" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          Patch plan →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/combination-nrt-quit-smoking</code>
      </p>
    </div>
  );
}
