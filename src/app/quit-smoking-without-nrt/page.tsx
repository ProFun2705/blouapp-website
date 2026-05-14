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
  title: "Quit smoking without NRT: what actually improves odds",
  description:
    "If you prefer not to use nicotine replacement, stack quitlines, cue planning, sleep, and a tracker app—plus know when to reconsider NRT with a clinician.",
  path: "/quit-smoking-without-nrt",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking without NRT",
    "quit smoking no patch",
    "natural quit smoking",
    "quit smoking without nicotine replacement",
  ],
});

const faqItems = [
  {
    question: "Is quitting without NRT harder?",
    answer:
      "On average, medications and NRT improve quit rates versus unsupported attempts. If you decline NRT, you should compensate with stronger behavioral scaffolding.",
  },
  {
    question: "Is this the same as cold turkey?",
    answer:
      "Cold turkey usually means stopping cigarettes abruptly on a quit date—often still the most common path. This page is broader: any plan that avoids nicotine replacement while still using other supports.",
  },
  {
    question: "When should I reconsider NRT?",
    answer:
      "If you have repeated intense withdrawal, multiple lapses in week one, or medical conditions that make unmedicated quitting risky—ask a clinician.",
  },
  {
    question: "How does Blou help without NRT?",
    answer:
      "Craving timers, savings, milestones, and slip containment—behavioral visibility that substitutes for some of the structure NRT provides.",
  },
];

export default function QuitSmokingWithoutNrtPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking without NRT: what actually improves odds",
    description:
      "Behavioral strategies for quitting smoking without nicotine replacement therapy.",
    path: "/quit-smoking-without-nrt",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="no-nrt-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Quit smoking without NRT", path: "/quit-smoking-without-nrt" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Non-NRT path
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking without NRT
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Choosing not to use nicotine replacement is valid—but it is not the same
          as “white knuckle only.” Add quitline coaching, airtight cue plans, and
          tracking so the attempt teaches you something even if it wobbles.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_no_nrt" placement="article_intro" />
          <Link href="/quit-smoking-cold-turkey" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
            Cold turkey guide →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "stack", label: "Stack these supports" },
          { id: "reconsider", label: "When to reconsider NRT" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="If you will not use NRT, maximize free behavioral support (quitline), pre-decide cue responses, protect sleep, and track cravings so slips become plan updates. Non-pharmacologic prescription options (e.g. varenicline, bupropion) may still be on the table—ask a clinician."
          facts={[
            "Combine with /how-to-quit-smoking for the seven-step backbone.",
            "Alcohol is a common breaker—see /alcohol-and-quitting-smoking.",
            "Week one playbook: /first-week-quit-smoking.",
          ]}
        />
      </section>

      <section id="stack" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Stack these supports</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-teal-900/90">
          <li>Fixed quit date + /prepare-to-quit-smoking checklist.</li>
          <li>Daily craving logging (app) + /guides/cravings tactics.</li>
          <li>Stress plan: /stress-smoking-quit-plan.</li>
        </ol>
      </section>

      <section id="reconsider" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">When to reconsider NRT</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If withdrawal dominates life or lapses repeat, read{" "}
          <Link className="font-medium text-teal-800 underline" href="/nicotine-patch-vs-gum">
            patch vs gum
          </Link>{" "}
          and{" "}
          <Link className="font-medium text-teal-800 underline" href="/nrt-and-quit-smoking-app">
            NRT + app
          </Link>{" "}
          with a pharmacist—switching paths is data, not failure.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-no-nrt" />
      </section>

      <div className="flex flex-wrap gap-3">
        <AppStoreBadgeLink campaign="pillar_no_nrt" placement="article_footer_card" />
        <Link href="/nicotine-withdrawal-timeline" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          Withdrawal timeline →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-smoking-without-nrt</code>
      </p>
    </div>
  );
}
