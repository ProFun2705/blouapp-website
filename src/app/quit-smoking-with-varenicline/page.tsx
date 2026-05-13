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
  title: "Quit smoking with varenicline (Chantix / Champix) + behavioral support",
  description:
    "What varenicline is for, how it fits a quit plan, side effects to discuss with a clinician, and how a quit app supports cravings and routines—not dosing.",
  path: "/quit-smoking-with-varenicline",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "varenicline quit smoking",
    "Chantix quit smoking",
    "Champix stop smoking",
    "varenicline and cravings",
  ],
});

const faqItems = [
  {
    question: "Is varenicline the strongest quit medication?",
    answer:
      "Meta-analyses often show strong results for varenicline versus placebo, but “strongest” depends on your medical history, other medications, and mental health. Only a clinician can say if it is appropriate for you.",
  },
  {
    question: "Do I still need behavioral support?",
    answer:
      "Medications work best with a plan: quit date, cue strategies, and follow-up. Apps and quitlines help you operationalize that plan daily.",
  },
  {
    question: "What about mood changes?",
    answer:
      "Tell your clinician immediately if you notice new or worsening depression, agitation, or suicidal thoughts. This is not something to self-manage from a website.",
  },
  {
    question: "Can Blou replace my prescriber?",
    answer:
      "No. Blou supports tracking and cravings; prescribing and monitoring are medical services.",
  },
];

export default function QuitSmokingWithVareniclinePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking with varenicline (Chantix / Champix) + behavioral support",
    description:
      "Educational overview of varenicline within a quit plan; not medical advice.",
    path: "/quit-smoking-with-varenicline",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="varenicline-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Quit smoking with varenicline",
            path: "/quit-smoking-with-varenicline",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Prescription medication (overview)
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking with varenicline (Chantix / Champix)
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Varenicline is a prescription medicine used for smoking cessation in
          many countries (brand examples: Chantix, Champix). This page explains
          how it fits a quit plan alongside apps and counseling—it is{" "}
          <strong>not</strong> dosing instructions or a substitute for your
          clinician.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink
            campaign="pillar_varenicline"
            placement="article_intro"
          />
          <Link
            href="/how-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Behavioral plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "role", label: "Role in a quit plan" },
          { id: "app", label: "Where a quit app fits" },
          { id: "sources", label: "Authoritative sources" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Varenicline is a clinician-prescribed smoking cessation medicine with strong trial evidence for many smokers. It works best combined with a quit date, cue planning, and follow-up—use an app for daily craving practice, not for medical monitoring."
          facts={[
            "Only a licensed prescriber can evaluate risks (psychiatric history, drug interactions, pregnancy).",
            "Free quitlines can add structured counseling (US 1-800-QUIT-NOW).",
            "If side effects concern you, contact your clinician promptly.",
          ]}
        />
      </section>

      <section
        id="role"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Role in a quit plan</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Medications address nicotine receptor dynamics; you still need a plan
          for triggers, alcohol, and high-risk social settings. Read{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/prepare-to-quit-smoking"
          >
            prepare to quit
          </Link>{" "}
          and{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/nicotine-withdrawal-timeline"
          >
            withdrawal timeline
          </Link>{" "}
          so expectations match reality.
        </p>
      </section>

      <section
        id="app"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Where a quit app fits
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Apps shine for the 3–5 minute craving window and for logging slips
          without shame. See also{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/nrt-and-quit-smoking-app"
          >
            NRT and quit apps
          </Link>{" "}
          for the same behavioral loop if you combine medicines with NRT under
          guidance.
        </p>
      </section>

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
              href="https://www.nhs.uk/medicines/varenicline-for-treating-tobacco-addiction-champix/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NHS: varenicline (Champix) overview
            </a>
          </li>
        </ul>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-varenicline" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="pillar_varenicline"
          placement="article_footer_card"
        />
        <Link
          href="/quit-smoking-with-bupropion"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Bupropion overview →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-smoking-with-varenicline</code>
      </p>
    </div>
  );
}
