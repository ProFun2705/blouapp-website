import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { LungRecoveryTimeline } from "@/components/blou/LungRecoveryTimeline";
import { RelatedGuides } from "@/components/marketing/RelatedGuides";
import {
  buildHowToJsonLd,
  buildMetadata,
  buildWebApplicationJsonLd,
} from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Lung recovery timeline visualizer (free)",
  description:
    "Enter your smoke-free days and see which recovery milestones you've reached — based on NHS, CDC, and Surgeon General public guidance.",
  path: "/tools/lung-recovery",
  keywords: [
    "lung recovery timeline",
    "lung healing after quitting smoking",
    "quit smoking timeline",
    "smoke free timeline",
  ],
});

const faqItems = [
  {
    question: "How accurate is this timeline?",
    answer:
      "The milestones on this page summarize public-health narratives from the US Surgeon General, CDC, and NHS. Individual recovery varies with age, pack-years smoked, baseline lung function, and concurrent conditions.",
  },
  {
    question: "When does the lung cilia regrow?",
    answer:
      "Cilia (the hair-like clearers in the airways) begin recovering within 1–3 months of stopping smoking, and cough/mucus typically improves around that window — see the 1-month milestone in the timeline.",
  },
  {
    question: "How long until lung function fully recovers?",
    answer:
      "Airway inflammation and ciliary function usually improve within 3–9 months. Structural changes from COPD are not fully reversible, but further decline slows dramatically after quitting. See the full timeline for detail.",
  },
  {
    question: "I still have a cough after 3 weeks — is that normal?",
    answer:
      "A temporary 'quit cough' is common for the first 1–3 months as cilia recover. If your cough is productive of blood, includes fever, or worsens after week 4, see your clinician.",
  },
] as const;

const howToSteps = [
  {
    name: "Count your smoke-free days",
    text: "If you are not using the Blou app, subtract your quit date from today. Partial days count as the next whole day.",
  },
  {
    name: "Enter days smoke-free",
    text: "Enter the number in the input field. The tool will update the milestone list in place.",
  },
  {
    name: "Review reached milestones",
    text: "Each filled milestone shows what typically changes in your body at that point. Read the underlying CDC and Surgeon General references for more detail.",
  },
  {
    name: "Open guide for each milestone",
    text: "For a richer explanation, open the milestone guide under /guides (e.g. 'What happens after 1 week').",
  },
] as const;

export default function LungRecoveryToolPage() {
  const howToJsonLd = buildHowToJsonLd({
    name: "How to visualize lung recovery after quitting smoking",
    description:
      "Step-by-step use of the Blou lung recovery timeline visualizer to check which milestones you've passed.",
    path: "/tools/lung-recovery",
    steps: howToSteps.map((s) => ({ name: s.name, text: s.text })),
  });

  const webAppJsonLd = buildWebApplicationJsonLd({
    name: "Blou lung recovery timeline",
    description:
      "Free web tool that visualizes common lung and cardiovascular recovery milestones after stopping smoking.",
    path: "/tools/lung-recovery",
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="lung-recovery-howto-json-ld" type="application/ld+json">
        {JSON.stringify(howToJsonLd)}
      </Script>
      <Script id="lung-recovery-webapp-json-ld" type="application/ld+json">
        {JSON.stringify(webAppJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Tools", path: "/tools" },
          { name: "Lung recovery timeline", path: "/tools/lung-recovery" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Timeline
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Lung recovery timeline visualizer
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-teal-900/85">
          Enter smoke-free days to see which recovery milestones you've
          reached. Milestones summarize public-health narratives from the US
          Surgeon General, CDC, and NHS — use them alongside, not instead of,
          medical advice.
        </p>
        <div className="mt-6">
          <AppStoreBadgeLink
            campaign="tool_lung_recovery"
            placement="tool_lung_recovery"
          />
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "timeline", label: "Lung recovery visualizer" },
          { id: "how-to-use", label: "How to use this visualizer" },
          { id: "sources", label: "Source references" },
          { id: "related-guides", label: "Related guides" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="timeline" className="scroll-mt-24">
        <LungRecoveryTimeline />
      </section>

      <section
        id="how-to-use"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How to use this visualizer
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-6 text-teal-900/90">
          {howToSteps.map((step, index) => (
            <li key={step.name} className="flex gap-3">
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-teal-300 text-xs font-semibold text-teal-900"
              >
                {index + 1}
              </span>
              <span>
                <span className="font-medium text-teal-950">{step.name}.</span>{" "}
                {step.text}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="sources"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Source references
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          <li>
            <a
              href="https://www.cdc.gov/tobacco/about/benefits-of-quitting.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-teal-400 underline-offset-4"
            >
              CDC: Benefits of Quitting
            </a>
            <span className="text-teal-900/60"> · US Centers for Disease Control</span>
          </li>
          <li>
            <a
              href="https://www.hhs.gov/surgeongeneral/reports-and-publications/tobacco/2020-cessation-sgr/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-teal-400 underline-offset-4"
            >
              US Surgeon General&apos;s Report on Smoking Cessation (2020)
            </a>
            <span className="text-teal-900/60"> · US HHS</span>
          </li>
          <li>
            <a
              href="https://www.nhs.uk/better-health/quit-smoking/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-teal-400 underline-offset-4"
            >
              NHS: Quit smoking
            </a>
            <span className="text-teal-900/60"> · UK National Health Service</span>
          </li>
        </ul>
      </section>

      <section id="related-guides" className="scroll-mt-24">
        <RelatedGuides
          slugs={[
            "what-happens-after-1-day",
            "what-happens-after-3-days",
            "what-happens-after-1-week",
            "what-happens-after-1-month",
            "what-happens-after-1-year",
            "cough",
          ]}
        />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-tool-lung-recovery" />
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/tools"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← All tools
        </Link>
        <Link
          href="/guides"
          className="inline-flex h-10 items-center justify-center rounded-full bg-teal-600 px-4 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          Read milestone guides
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/tools/lung-recovery</code>
      </p>
    </div>
  );
}
