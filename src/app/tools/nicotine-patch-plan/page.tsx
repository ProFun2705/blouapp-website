import type { Metadata } from "next";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { FaqSection } from "@/components/blou/FaqSection";
import { NicotinePatchPlan } from "@/components/blou/NicotinePatchPlan";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Card";
import { buildHowToJsonLd, buildMetadata, buildWebApplicationJsonLd } from "@/lib/seo";

const PATH = "/tools/nicotine-patch-plan";
const CAMPAIGN = "tool_nicotine-patch-plan";

export const metadata: Metadata = buildMetadata({
  title: "Nicotine patch strength and step-down schedule",
  description:
    "Which nicotine patch strength to start with (21, 14 or 7 mg) and a dated step-down schedule, based on how many cigarettes you smoke a day.",
  path: PATH,
  keywords: [
    "nicotine patch strength",
    "nicotine patch schedule",
    "nicotine patch step down",
    "which nicotine patch strength",
    "nicotine patch dose",
    "how long to use nicotine patches",
  ],
});

const sources = [
  {
    name: "CDC: How to use a nicotine patch",
    url: "https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-a-nicotine-patch.html",
  },
  {
    name: "MedlinePlus: Nicotine transdermal patch",
    url: "https://medlineplus.gov/druginfo/meds/a601084.html",
  },
] as const;

const faqItems = [
  {
    question: "Which nicotine patch strength should I start with?",
    answer:
      "Patch labels and the CDC use the same cut-off: if you smoke more than 10 cigarettes a day, start with the 21 mg patch (Step 1). If you smoke 10 or fewer, start with the 14 mg patch (Step 2). Check the label on your box, as brands differ slightly.",
  },
  {
    question: "How long should you use nicotine patches?",
    answer:
      "Most box schedules run 8 to 10 weeks. MedlinePlus notes that patches may be used for 6 to 20 weeks depending on the product's instructions, and the CDC says to lower the dose over time, typically after 8 to 12 weeks.",
  },
  {
    question: "Can I wear the patch at night?",
    answer:
      "The patch is usually worn for 24 hours. If it gives you vivid dreams or disturbed sleep, the CDC says you can take it off at bedtime and put a new one on in the morning.",
  },
  {
    question: "What if I still get cravings on the patch?",
    answer:
      "That is common. Many people pair the patch with a fast-acting form such as gum or a lozenge, ideally with advice from a pharmacist or doctor. See /combination-nrt-quit-smoking for how combination NRT works.",
  },
  {
    question: "What are the side effects of nicotine patches?",
    answer:
      "Skin redness or itching where the patch sits, headaches, and sleep problems are the most common. Rotating the patch site each day helps with skin irritation. See /nicotine-patch-side-effects for the full list and when to call a doctor.",
  },
] as const;

export default function NicotinePatchPlanPage() {
  const toolJsonLd = buildWebApplicationJsonLd({
    name: "Nicotine patch strength and step-down planner",
    description: "Suggests a starting patch strength and a dated step-down schedule from cigarettes per day.",
    path: PATH,
  });
  const howToJsonLd = buildHowToJsonLd({
    name: "How to step down nicotine patches",
    description: "Pick a starting strength and step down to stop.",
    path: PATH,
    steps: [
      { name: "Pick your starting strength", text: "More than 10 cigarettes a day: 21 mg. 10 or fewer: 14 mg." },
      { name: "Follow each step", text: "Use each strength for the number of weeks on your box, then move to the next step." },
      { name: "Finish on 7 mg", text: "Use the 7 mg patch for the final 2 weeks, then stop." },
    ],
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={[toolJsonLd, howToJsonLd]} />
      <Breadcrumbs
        items={[
          { name: "Tools", path: "/tools" },
          { name: "Nicotine patch plan", path: PATH },
        ]}
      />

      <header className="rounded-panel border border-line bg-surface p-6 shadow-card md:p-8">
        <Kicker>Free tool</Kicker>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Nicotine patch strength and step-down plan
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-ink-muted">
          Enter how much you smoke and when you&apos;re starting. You&apos;ll get the starting strength
          patch labels recommend and a dated schedule for stepping down from 21 mg to 14 mg to 7 mg.
          Use it alongside the instructions on your box.
        </p>
      </header>

      <section id="planner" className="scroll-mt-24">
        <NicotinePatchPlan />
      </section>

      <section className="rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">How patch strengths work</h2>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          Patches come in three strengths: 21 mg, 14 mg and 7 mg. Each one releases nicotine slowly
          through your skin over the day, which takes the edge off withdrawal while you break the habit.
          You start at the strength that matches how much you smoke, then step down so your body adjusts
          gradually.
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-ink-muted">
          <li>Put a new patch on clean, dry, hairless skin on your upper body each morning.</li>
          <li>Use a different spot each day, and don&apos;t reuse a spot within a week.</li>
          <li>Keep new and used patches away from children and pets.</li>
        </ul>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        The patch handles the nicotine. Blou helps with the rest: SOS help the second a craving breaks
        through, and every smoke-free day on one visual timeline.
      </InlineAppCta>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

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
          <li className="text-ink-muted">The Drug Facts label on your nicotine patch box.</li>
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          This planner is educational and does not replace medical advice.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/quit-smoking-with-nicotine-patch" variant="secondary">
          Quitting with the patch
        </ButtonLink>
        <ButtonLink href="/nicotine-patch-side-effects" variant="secondary">
          Patch side effects
        </ButtonLink>
        <ButtonLink href="/nicotine-patch-vs-gum" variant="secondary">
          Patch vs gum
        </ButtonLink>
      </div>
    </div>
  );
}
