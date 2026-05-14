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
  title: "How to help someone quit smoking (without nagging)",
  description:
    "Practical support for partners and friends: what helps, what backfires, scripts for cravings, and how a quit app can be part of the system—not a lecture.",
  path: "/how-to-help-someone-quit-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "how to help someone quit smoking",
    "support partner quit smoking",
    "help friend stop smoking",
    "quit smoking accountability",
  ],
});

const faqItems = [
  {
    question: "Should I hide their cigarettes?",
    answer:
      "Ask what they want. Some people want environmental help; others experience it as control. Align on quit day and boundaries beforehand.",
  },
  {
    question: "What should I say during a craving?",
    answer:
      "Short validation + a timer: “This will pass in a few minutes—want to walk with me?” Avoid debating whether they “really need” a cigarette.",
  },
  {
    question: "Is gifting an app helpful?",
    answer:
      "Yes if they asked for tools. Send the App Store link with zero guilt framing—then let them lead setup.",
  },
  {
    question: "What if they relapse?",
    answer:
      "Relapse is common. Encourage same-day return to plan and professional support—not shame. See /trying-to-quit-smoking-again.",
  },
];

export default function HowToHelpSomeoneQuitSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "How to help someone quit smoking (without nagging)",
    description:
      "Support strategies for partners and friends helping someone quit smoking.",
    path: "/how-to-help-someone-quit-smoking",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="help-someone-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "How to help someone quit smoking",
            path: "/how-to-help-someone-quit-smoking",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Support guide
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          How to help someone quit smoking
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          The best support is specific, scheduled, and non-moralizing. Your job
          is not to police nicotine—it is to make the quit plan easier to execute
          on bad days.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_help_someone" placement="article_intro" />
          <Link href="/living-with-a-smoker-while-quitting" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
            If you live together →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "do-list", label: "Do this" },
          { id: "avoid", label: "Avoid this" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Help by co-designing a quit date, agreeing on check-in times (days 1, 3, 7), removing judgment language, and offering two concrete actions during cravings (walk, water, change rooms). Share tools like Blou only if they want digital support."
          facts={[
            "Nagging increases secrecy after slips.",
            "Point them to /how-to-quit-smoking for the backbone plan.",
            "If you smoke too, read /living-with-a-smoker-while-quitting.",
          ]}
        />
      </section>

      <section id="do-list" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Do this</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>Ask what high-risk situations worry them most—then rehearse scripts.</span></li>
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>Offer rides to pharmacy or clinician if NRT/meds are part of the plan.</span></li>
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>Celebrate boring wins: first week complete, first craving surfed.</span></li>
        </ul>
      </section>

      <section id="avoid" className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Avoid this</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2"><span className="mt-1 text-amber-600" aria-hidden>•</span><span>“I thought you quit” after a slip—use /i-smoked-one-cigarette framing instead.</span></li>
          <li className="flex gap-2"><span className="mt-1 text-amber-600" aria-hidden>•</span><span>Testing their willpower by smoking around them “to see if they are serious.”</span></li>
        </ul>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-help-someone" />
      </section>

      <div className="flex flex-wrap gap-3">
        <AppStoreBadgeLink campaign="pillar_help_someone" placement="article_footer_card" />
        <Link href="/prepare-to-quit-smoking" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          Prep checklist →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/how-to-help-someone-quit-smoking</code>
      </p>
    </div>
  );
}
