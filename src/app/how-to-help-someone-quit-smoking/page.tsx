import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";

const PUBLISHED = "2026-05-14";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_how-to-help-someone-quit-smoking";

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
      "Yes if they asked for tools. Send the App Store link with zero guilt framing—then let them lead setup. Blou is iPhone-only and a subscription with a free trial, so check that suits them first.",
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
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          {
            name: "How to help someone quit smoking",
            path: "/how-to-help-someone-quit-smoking",
          },
        ]}
      />

      <ArticleHeader
        kicker="Support guide"
        title="How to help someone quit smoking"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/living-with-a-smoker-while-quitting" variant="secondary">
            If you live together →
          </ButtonLink>
        }
      >
        <p>
          The best support is specific, scheduled, and non-moralizing. Your job
          is not to police nicotine—it is to make the quit plan easier to execute
          on bad days.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "do-list", label: "Do this" },
          { id: "avoid", label: "Avoid this" },
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

      <InlineAppCta campaign={CAMPAIGN}>
        If they want digital support, Blou for iPhone gives them SOS craving
        help on bad days and puts every milestone, like that first full week, on
        one visual timeline.
      </InlineAppCta>

      <section id="avoid" className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Avoid this</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2"><span className="mt-1 text-amber-600" aria-hidden>•</span><span>“I thought you quit” after a slip—use /i-smoked-one-cigarette framing instead.</span></li>
          <li className="flex gap-2"><span className="mt-1 text-amber-600" aria-hidden>•</span><span>Testing their willpower by smoking around them “to see if they are serious.”</span></li>
        </ul>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/prepare-to-quit-smoking" variant="secondary">
          Prep checklist →
        </ButtonLink>
      </div>
    </div>
  );
}
