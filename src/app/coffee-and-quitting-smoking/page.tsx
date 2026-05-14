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
  title: "Coffee and quitting smoking: keep the ritual, break the cue",
  description:
    "Coffee is a top smoking cue. Swap order, timing, mug, location, or flavor; stack a tracker craving loop for the first 10 minutes awake.",
  path: "/coffee-and-quitting-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "coffee and quitting smoking",
    "quit smoking coffee",
    "morning cigarette coffee",
    "caffeine quit smoking",
  ],
});

const faqItems = [
  {
    question: "Should I quit coffee too?",
    answer:
      "Not unless caffeine makes you jittery or worsens withdrawal anxiety. Many people temporarily reduce coffee or switch timing the first week—experiment, do not punish yourself.",
  },
  {
    question: "Why is coffee such a trigger?",
    answer:
      "It is paired thousands of times with nicotine and morning arousal. You are fighting a learned sequence, not “weakness.”",
  },
  {
    question: "What is the smallest change that works?",
    answer:
      "Drink water first, brush teeth before coffee, or take coffee to a new room for 7 days.",
  },
  {
    question: "How can Blou help?",
    answer:
      "Use a craving timer during the first sips week one—make the urge finite and visible.",
  },
];

export default function CoffeeAndQuittingSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Coffee and quitting smoking: keep the ritual, break the cue",
    description:
      "Strategies for decoupling coffee from cigarettes when quitting smoking.",
    path: "/coffee-and-quitting-smoking",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="coffee-quit-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Coffee and quitting smoking", path: "/coffee-and-quitting-smoking" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Morning cue
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Coffee and quitting smoking
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          You do not have to give up coffee forever—you have to break the
          autopilot chain that ends in a lighter. Small sensory swaps beat
          white-knuckling the same mug on the same porch.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_coffee" placement="article_intro" />
          <Link href="/prepare-to-quit-smoking" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
            Prep checklist →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "swaps", label: "Ritual swaps" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Change one variable in the coffee ritual for 7 days: order (water first), location, mug, brew method, or caffeine dose. Pair with a 3-minute craving timer so the first-coffee urge does not become a negotiation."
          facts={[
            "Stack with /driving-and-quitting-smoking if commute coffee is the combo.",
            "If stress dominates, read /stress-smoking-quit-plan.",
          ]}
        />
      </section>

      <section id="swaps" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Ritual swaps</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>Tea week: lower caffeine if jittery.</span></li>
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>Standing coffee: harder to “settle in” to smoke posture.</span></li>
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>Walk first block before first sip.</span></li>
        </ul>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-coffee-quit" />
      </section>

      <div className="flex flex-wrap gap-3">
        <AppStoreBadgeLink campaign="pillar_coffee" placement="article_footer_card" />
        <Link href="/guides/cravings" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          Cravings guide →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/coffee-and-quitting-smoking</code>
      </p>
    </div>
  );
}
