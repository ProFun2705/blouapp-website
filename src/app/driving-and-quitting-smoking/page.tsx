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
  title: "Driving and quitting smoking: replace car cigarettes",
  description:
    "Car cigarettes are cue-heavy. Swap routes, gum rules, passenger scripts, and a craving timer so driving stays boring after you quit.",
  path: "/driving-and-quitting-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking driving",
    "smoking in car quit",
    "driving cravings cigarettes",
    "car cigarette habit",
  ],
});

const faqItems = [
  {
    question: "Why is driving such a trigger?",
    answer:
      "It pairs nicotine with boredom, stress, and a private environment—strong classical conditioning. You need a replacement ritual that fits eyes-on-road safety.",
  },
  {
    question: "Is it safe to use a phone app while driving?",
    answer:
      "Start craving timers only when parked, at red lights you fully control, or via passenger. Pull over if urgency is high.",
  },
  {
    question: "What if I commute two hours?",
    answer:
      "Break the drive into segments with planned stops week one. Long cues need engineered interruptions.",
  },
  {
    question: "Can NRT help driving cravings?",
    answer:
      "Discuss fast-acting options with a pharmacist if appropriate. Never adjust dosing without guidance.",
  },
];

export default function DrivingAndQuittingSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Driving and quitting smoking: replace car cigarettes",
    description:
      "Strategies for quitting smoking when driving is a major trigger.",
    path: "/driving-and-quitting-smoking",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="driving-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Driving and quitting smoking", path: "/driving-and-quitting-smoking" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Cue swap
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Driving and quitting smoking
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Treat the car like a lab: remove lighters, deep clean ash smell week
          one, and install a boring replacement (podcast queue, gum rules, two
          planned stops).
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_driving" placement="article_intro" />
          <Link href="/guides/cravings" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
            Cravings guide →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "tactics", label: "Tactics" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Make the car inhospitable to the old ritual: clean surfaces, remove paraphernalia, change routes short-term, and pre-decide a parked craving drill. Pair audio habits with a visible quit tracker so progress competes with boredom."
          facts={[
            "Long private cues are where “just one” wins—engineer interruptions.",
            "See /stress-smoking-quit-plan if traffic rage is the real trigger.",
          ]}
        />
      </section>

      <section id="tactics" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Tactics</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>First week: add one extra stop midway on habitual routes.</span></li>
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>Keep water and crunchy snacks reachable (parked use).</span></li>
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>Review /first-week-quit-smoking timing for withdrawal surprises.</span></li>
        </ul>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-driving-quit" />
      </section>

      <div className="flex flex-wrap gap-3">
        <AppStoreBadgeLink campaign="pillar_driving" placement="article_footer_card" />
        <Link href="/how-to-quit-smoking" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          Full plan →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/driving-and-quitting-smoking</code>
      </p>
    </div>
  );
}
