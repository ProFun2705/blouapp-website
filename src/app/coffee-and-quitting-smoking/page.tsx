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
const CAMPAIGN = "article_coffee-and-quitting-smoking";

export const metadata: Metadata = buildMetadata({
  title: "Coffee and quitting smoking: keep the ritual",
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
      "Keep Blou's SOS craving help one tap away during the first sips in week one, so the urge has a plan. Each smoke-free morning then lands on your visual timeline.",
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
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[{ name: "Coffee and quitting smoking", path: "/coffee-and-quitting-smoking" }]}
      />

      <ArticleHeader
        kicker="Morning cue"
        title="Coffee and quitting smoking"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/prepare-to-quit-smoking" variant="secondary">
            Prep checklist →
          </ButtonLink>
        }
      >
        <p>
          You do not have to give up coffee forever—you have to break the
          autopilot chain that ends in a lighter. Small sensory swaps beat
          white-knuckling the same mug on the same porch.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "swaps", label: "Ritual swaps" },
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

      <InlineAppCta campaign={CAMPAIGN}>
        If the first sip still brings an urge, Blou&apos;s SOS craving help is
        one tap away, and each morning you get through adds to your milestone
        timeline.
      </InlineAppCta>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/guides/cravings" variant="secondary">
          Cravings guide →
        </ButtonLink>
      </div>
    </div>
  );
}
