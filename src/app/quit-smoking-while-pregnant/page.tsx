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

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-05-13";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking while pregnant: safety-first guide (see your clinician)",
  description:
    "Why quitting smoking in pregnancy matters, what to ask your obstetric clinician, how quitlines help, and how apps support cravings—this is not personalized medical advice.",
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
      "Apps can help with craving timers, tracking, and reminders, but they do not replace prenatal care.",
  },
  {
    question: "I feel ashamed—does that make quitting harder?",
    answer:
      "Shame increases hiding and stress-smoking loops. Clinical teams have heard it before; honesty improves outcomes for you and the baby.",
  },
];

export default function QuitSmokingWhilePregnantPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking while pregnant: safety-first guide (see your clinician)",
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
      <Script id="pregnant-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Quit smoking while pregnant",
            path: "/quit-smoking-while-pregnant",
          },
        ]}
      />

      <header className="rounded-3xl border border-rose-200/90 bg-rose-50/40 p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-rose-800">
          Pregnancy — clinician-first
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking while pregnant
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          <strong>
            This page is general education, not prenatal medical advice.
          </strong>{" "}
          If you are pregnant, your obstetric clinician should approve any plan
          involving NRT, medications, or rapid tapering. Apps can support
          cravings and routines once your team sets direction.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink
            campaign="pillar_pregnant"
            placement="article_intro"
          />
          <Link
            href="/how-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Behavioral quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "ask-clinician", label: "Questions for your clinician" },
          { id: "support", label: "Support channels" },
          { id: "sources", label: "Trusted sources" },
          { id: "social-proof", label: "App Store reviews" },
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
            href="/guides/anxiety"
          >
            anxiety
          </Link>{" "}
          skills while you await appointments.
        </p>
      </section>

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

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-pregnant" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="pillar_pregnant"
          placement="article_footer_card"
        />
        <Link
          href="/quit-smoking-before-surgery"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Quitting before surgery →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-smoking-while-pregnant</code>
      </p>
    </div>
  );
}
