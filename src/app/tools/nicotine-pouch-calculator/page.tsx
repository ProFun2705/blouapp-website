import type { Metadata } from "next";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { FaqSection } from "@/components/blou/FaqSection";
import { NicotinePouchCalculator } from "@/components/blou/NicotinePouchCalculator";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Card";
import { buildMetadata, buildWebApplicationJsonLd } from "@/lib/seo";

const PATH = "/tools/nicotine-pouch-calculator";
const CAMPAIGN = "tool_nicotine-pouch-calculator";

export const metadata: Metadata = buildMetadata({
  title: "Nicotine pouch calculator: Zyn mg, cost and taper",
  description:
    "How much nicotine your Zyn or other pouches contain per day, what they cost you a year, and a week-by-week taper plan to quit.",
  path: PATH,
  keywords: [
    "zyn nicotine calculator",
    "how much nicotine in zyn",
    "nicotine pouch calculator",
    "zyn cost per year",
    "how to taper off zyn",
  ],
});

const sources = [
  {
    name: "FDA: FDA authorizes marketing of 20 ZYN nicotine pouch products (Jan 16, 2025)",
    url: "https://www.fda.gov/news-events/press-announcements/fda-authorizes-marketing-20-zyn-nicotine-pouch-products-after-extensive-scientific-review",
  },
  {
    name: "A randomised study to investigate the nicotine pharmacokinetics of oral nicotine pouches and a combustible cigarette. European Journal of Drug Metabolism and Pharmacokinetics (2022)",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8917032/",
  },
] as const;

const faqItems = [
  {
    question: "How much nicotine is in a Zyn pouch?",
    answer:
      "The ZYN products the FDA authorized in January 2025 come in two strengths: 3 mg and 6 mg of nicotine per pouch. Other brands sell stronger pouches. The number on the can is the amount in the pouch; how much your body absorbs varies.",
  },
  {
    question: "Is one Zyn pouch the same as one cigarette?",
    answer:
      "Not exactly. In one randomised study, a single 6 mg pouch raised blood nicotine at least as much as one cigarette, but more slowly: the peak came after about an hour rather than a few minutes. Absorption depends on the brand, strength, and how long you keep the pouch in. See /zyn-vs-cigarettes for the full comparison.",
  },
  {
    question: "What is the best way to taper off Zyn?",
    answer:
      "A common approach is to drop to a lower strength first (for example 6 mg to 3 mg), then cut the number of pouches a day each week until you reach zero. Some people do better quitting all at once with nicotine gum or lozenges. See /quit-zyn for both approaches.",
  },
  {
    question: "Are nicotine pouches safe?",
    answer:
      "The FDA says its authorization does not mean ZYN is safe or FDA approved, and that there is no safe tobacco product. Pouches still deliver addictive nicotine. See /are-zyns-bad-for-you for what the evidence shows.",
  },
] as const;

export default function NicotinePouchCalculatorPage() {
  const toolJsonLd = buildWebApplicationJsonLd({
    name: "Nicotine pouch calculator",
    description: "Calculates daily nicotine content, yearly cost, and a taper plan for nicotine pouches such as Zyn.",
    path: PATH,
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={toolJsonLd} />
      <Breadcrumbs
        items={[
          { name: "Tools", path: "/tools" },
          { name: "Nicotine pouch calculator", path: PATH },
        ]}
      />

      <header className="rounded-panel border border-line bg-surface p-6 shadow-card md:p-8">
        <Kicker>Free tool · Nicotine pouches</Kicker>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Nicotine pouch calculator
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-ink-muted">
          See how much nicotine your Zyn or other pouches contain each day, what your habit costs a year,
          and a week-by-week plan to taper off. Everything runs in your browser.
        </p>
      </header>

      <section id="calculator" className="scroll-mt-24">
        <NicotinePouchCalculator />
      </section>

      <section className="rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Pouch nicotine vs cigarettes</h2>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          The milligrams on the can are what&apos;s in the pouch, not what reaches your blood. In a
          randomised study of adult smokers, a 6 mg pouch produced a higher peak and a larger total blood
          nicotine level over six hours than one cigarette, but the peak came after about an hour rather
          than within minutes. That slow, steady dose is part of why pouches are easy to keep in all day,
          and why the habit can quietly grow.
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Blou works for quitting nicotine pouches too: SOS help the second a craving hits, and every
        pouch-free day on one visual timeline.
      </InlineAppCta>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Quit pouches with proof"
        description="Blou shows your progress from your first nicotine-free day, with help the moment a craving hits."
      />

      <section id="sources" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Sources</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-accent/50 underline-offset-4">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          This calculator is educational and does not replace medical advice.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/quit-zyn" variant="secondary">
          How to quit Zyn
        </ButtonLink>
        <ButtonLink href="/zyn-withdrawal" variant="secondary">
          Zyn withdrawal timeline
        </ButtonLink>
        <ButtonLink href="/zyn-vs-cigarettes" variant="secondary">
          Zyn vs cigarettes
        </ButtonLink>
      </div>
    </div>
  );
}
