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
const CAMPAIGN = "article_quit-smoking-while-pregnant";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking while pregnant: a safety-first guide",
  description:
    "Why quitting smoking in pregnancy matters, what to ask your obstetric clinician, how quitlines help, and where apps fit. Not personalized medical advice.",
  path: "/quit-smoking-while-pregnant",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking while pregnant",
    "pregnancy stop smoking",
    "smoking pregnancy help",
    "NRT pregnancy smoking",
  ],
});

const faqItems = [
  {
    question: "Is it safe to quit cold turkey while pregnant?",
    answer:
      "Many people stop abruptly with clinician support, but pregnancy changes what is safest for you—especially if you have other conditions. Ask your obstetric provider for a plan rather than improvising from the internet.",
  },
  {
    question: "Can I use nicotine replacement in pregnancy?",
    answer:
      "Sometimes clinicians consider NRT when continued smoking is the greater risk—but this is a medical risk trade-off you must not decide alone. Follow specialist guidance.",
  },
  {
    question: "Can a quit app help?",
    answer:
      "Apps can help with in-the-moment craving support and seeing your progress, but they do not replace prenatal care.",
  },
  {
    question: "I feel ashamed—does that make quitting harder?",
    answer:
      "Shame increases hiding and stress-smoking loops. Clinical teams have heard it before; honesty improves outcomes for you and the baby.",
  },
];

export default function QuitSmokingWhilePregnantPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking while pregnant: a safety-first guide",
    description:
      "Pregnancy smoking cessation overview emphasizing obstetric guidance.",
    path: "/quit-smoking-while-pregnant",
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
            name: "Quit smoking while pregnant",
            path: "/quit-smoking-while-pregnant",
          },
        ]}
      />

      <ArticleHeader
        kicker="Pregnancy — clinician-first"
        title="Quit smoking while pregnant"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/how-to-quit-smoking" variant="secondary">
            Behavioral quit plan →
          </ButtonLink>
        }
      >
        <p>
          <strong>
            This page is general education, not prenatal medical advice.
          </strong>{" "}
          If you are pregnant, your obstetric clinician should approve any plan
          involving NRT, medications, or rapid tapering. Apps can support
          cravings and routines once your team sets direction.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "ask-clinician", label: "Questions for your clinician" },
          { id: "support", label: "Support channels" },
          { id: "sources", label: "Trusted sources" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Call your obstetric clinician or midwife and be direct about smoking and vaping. Ask what they recommend for cessation in your pregnancy, including whether NRT or behavioral programs are appropriate. Use apps for craving drills only within that medical frame."
          facts={[
            "Quitting smoking improves outcomes versus continuing to smoke—your team can help without judgment.",
            "US: 1-800-QUIT-NOW routes to pregnancy-informed coaching in many states.",
            "UK: NHS Better Health offers pregnancy-specific quit support.",
          ]}
        />
      </section>

      <section
        id="ask-clinician"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Questions for your clinician
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>What is the safest cessation pathway for me this trimester?</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>How should I handle breakthrough cravings day and night?</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>If I slip, what is the same-day plan?</span>
          </li>
        </ul>
      </section>

      <section
        id="support"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Support channels</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Pair clinical guidance with{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/prepare-to-quit-smoking"
          >
            prep habits
          </Link>{" "}
          (environment, cues) and{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/quit-smoking-with-anxiety"
          >
            anxiety
          </Link>{" "}
          skills while you await appointments.
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Once your care team has set the plan, Blou&apos;s SOS button can help in
        the moments between appointments, the second a craving hits. It supports
        your prenatal care and never replaces it.
      </InlineAppCta>

      <section
        id="sources"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Trusted sources</h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          <li>
            <a
              className="underline decoration-teal-400 underline-offset-4"
              href="https://www.nhs.uk/pregnancy/keeping-well/stop-smoking/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NHS: stop smoking in pregnancy
            </a>
          </li>
          <li>
            <a
              className="underline decoration-teal-400 underline-offset-4"
              href="https://www.cdc.gov/tobacco/campaign/tips/partners/pregnancy/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC: smoking, pregnancy, and babies
            </a>
          </li>
        </ul>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        description="Alongside your prenatal care, Blou shows your own progress from your first smoke-free day, with SOS help when a craving hits."
      />

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/quit-smoking-before-surgery" variant="secondary">
          Quitting before surgery →
        </ButtonLink>
      </div>
    </div>
  );
}
