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
  title: "How to quit vaping: a practical plan (2026)",
  description:
    "Quit vaping with a clear plan: set a stop date, handle nicotine urges, replace hand-to-mouth cues, and use a tracker app so progress stays visible.",
  path: "/quit-vaping",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit vaping",
    "how to quit vaping",
    "stop vaping",
    "vaping cessation",
    "nicotine vape quit",
  ],
});

const faqItems = [
  {
    question: "Is quitting vaping harder than quitting cigarettes?",
    answer:
      "It varies. Vapes can deliver nicotine in a highly reinforcing pattern, and the hand-to-mouth habit is strong. The same behavioral tools work: a fixed stop date, urge surfing, cue swaps, and daily tracking.",
  },
  {
    question: "Will I get nicotine withdrawal if I quit vaping?",
    answer:
      "Often yes—irritability, cravings, sleep changes, and difficulty concentrating are common in the first 1–2 weeks. If symptoms feel severe or you have heart or lung conditions, seek medical advice.",
  },
  {
    question: "Can a quit app help with vaping?",
    answer:
      "Yes, if it gives you a fast craving response, visible progress, and a place to log triggers. Blou is built around cigarettes, but the same loop—timer, replacement actions, savings, milestones—helps many people who are quitting vapes.",
  },
  {
    question: "Should I use NRT to quit vaping?",
    answer:
      "Some people switch to FDA-regulated NRT with clinician or pharmacist guidance. It is a medical decision—especially if you are pregnant, young, or have cardiovascular disease.",
  },
];

export default function QuitVapingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "How to quit vaping: a practical plan (2026)",
    description:
      "A practical plan for stopping vaping: stop date, urges, cues, and tracking.",
    path: "/quit-vaping",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="quit-vaping-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs items={[{ name: "Quit vaping", path: "/quit-vaping" }]} />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Vaping cessation
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          How to quit vaping
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Treat quitting vaping like any nicotine quit: pick a stop date, plan
          your top cues, and use a tight loop when urges hit (timer → move →
          water → one replacement). Tracking makes the first two weeks survivable.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink
            campaign="pillar_quit_vaping"
            placement="article_intro"
          />
          <Link
            href="/how-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Core quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "seven-day-setup", label: "7-day setup" },
          { id: "urge-plan", label: "When an urge hits" },
          { id: "dual-use", label: "Still smoking sometimes?" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Pick a stop date in the next 7–14 days, remove devices and spare pods from easy reach, and pre-decide a 2-minute replacement for your three strongest cues (stress, driving, after meals). Use a tracker app so urges become data, not debates."
          facts={[
            "Most urges peak within minutes—speed of response matters more than motivation.",
            "Hand-to-mouth and flavor cues are real; swap them with gum, tea, or a short walk.",
            "If you also smoke cigarettes, address dual use explicitly—see the link below.",
          ]}
        />
      </section>

      <section
        id="seven-day-setup"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">7-day setup</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>
            Name the stop date and tell one person who will check in on days 1,
            3, and 7 (same playbook as{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/prepare-to-quit-smoking"
            >
              prepare to quit
            </Link>
            ).
          </li>
          <li>
            List your top cues and write one realistic replacement each—not a
            fantasy habit, something you will actually do in 120 seconds.
          </li>
          <li>
            Read{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/nicotine-withdrawal-timeline"
            >
              nicotine withdrawal timeline
            </Link>{" "}
            so days 2–3 do not feel like a surprise attack.
          </li>
        </ol>
      </section>

      <section
        id="urge-plan"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">When an urge hits</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Start a 3-minute timer, stand up, drink water, and do one pre-chosen
          action (walk around the block, brush teeth, text your check-in person).
          After the timer, decide whether you still need{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/guides/cravings"
          >
            craving tactics
          </Link>{" "}
          or medical support.
        </p>
      </section>

      <section
        id="dual-use"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Still smoking cigarettes sometimes?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Dual use keeps nicotine reinforcement high. Read{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/vaping-and-smoking-together"
          >
            vaping and smoking together
          </Link>{" "}
          and pick one primary quit pathway with your clinician if needed.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-quit-vaping" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="pillar_quit_vaping"
          placement="article_footer_card"
        />
        <Link
          href="/nrt-and-quit-smoking-app"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          NRT + quit app →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-vaping</code>
      </p>
    </div>
  );
}
