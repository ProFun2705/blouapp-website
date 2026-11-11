import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildArticleJsonLd, buildHowToJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-05-09";
const MODIFIED = "2026-11-03";
const CAMPAIGN = "article_quit-smoking-with-nicotine-patch";
const PATH = "/quit-smoking-with-nicotine-patch";

const TITLE = "How to use a nicotine patch to quit smoking";
const DESCRIPTION =
  "How to use a nicotine patch to quit smoking: where to put it, which strength to start with, how long to use it, and what to do about cravings.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "nicotine patch to quit smoking",
    "using nicotine patches to quit smoking",
    "how to use nicotine patch",
    "where to put nicotine patch",
    "best place to put a nicotine patch",
    "nicotine replacement patch",
    "quit smoking with nicotine patch",
    "nicotine patch cravings",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "How to use nicotine patches",
    href: "https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-a-nicotine-patch.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "NicoDerm CQ (nicotine transdermal system) Drug Facts label, 2025",
    href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=93b2d1b9-83c1-40b5-b6af-90c38c8d6cef",
    publisher: "DailyMed, U.S. National Library of Medicine (FDA-regulated OTC label)",
  },
  {
    label: "Nicotine transdermal patch (drug information)",
    href: "https://medlineplus.gov/druginfo/meds/a601084.html",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
  },
  {
    label: "Find the best stop-smoking products for you",
    href: "https://www.nhs.uk/conditions/stop-smoking-treatments/",
    publisher: "NHS",
  },
  {
    label: "The relative risks of tobacco products",
    href: "https://www.fda.gov/tobacco-products/health-effects-tobacco-use/relative-risks-tobacco-products",
    publisher: "U.S. Food and Drug Administration",
  },
];

const steps: Array<{ name: string; text: string }> = [
  {
    name: "Start on your quit day",
    text: "Put on your first patch the morning of your quit day, and stop smoking that day. The box label says to begin the patch on your quit day.",
  },
  {
    name: "Pick a clean, dry, hairless spot",
    text: "Choose skin on your upper body, such as the upper arm, chest, shoulder or back. Skip skin that is oily, irritated, scarred or broken.",
  },
  {
    name: "Press it on for 10 seconds",
    text: "Peel off the backing, put the patch on right away, and press it down firmly for about 10 seconds. Then wash your hands with water.",
  },
  {
    name: "Wear it all day",
    text: "Leave it on for 16 or 24 hours, as your box says. Never wear it longer than 24 hours, never wear two at once, and never cut a patch.",
  },
  {
    name: "Change it each morning",
    text: "Take off the old patch and put a new one on a different spot at about the same time every day.",
  },
  {
    name: "Throw the old one away safely",
    text: "Fold the used patch in half with the sticky sides together and throw it away where children and pets cannot reach it.",
  },
];

const strengthRows: Array<{ smoke: string; plan: string }> = [
  {
    smoke: "More than 10 cigarettes a day",
    plan: "21 mg for weeks 1–6, then 14 mg for weeks 7–8, then 7 mg for weeks 9–10 (10 weeks total)",
  },
  {
    smoke: "10 or fewer cigarettes a day",
    plan: "Skip 21 mg. Use 14 mg for weeks 1–6, then 7 mg for weeks 7–8 (8 weeks total)",
  },
];

const faqItems = [
  {
    question: "Where is the best place to put a nicotine patch?",
    answer:
      "On clean, dry, hairless skin on your upper body. The CDC lists the upper chest, upper arm, inner arm, shoulder and back. Use a different spot each day and don't reuse the same spot more than once a week. No source says one spot works better than another, so pick the one where the patch stays on best.",
  },
  {
    question: "Can I put a nicotine patch on my leg or stomach?",
    answer:
      "The CDC and box labels point you to the upper body. MedlinePlus also lists the hip. Follow the directions on your box, and ask a pharmacist if you are not sure a spot is OK.",
  },
  {
    question: "Which strength nicotine patch should I use?",
    answer:
      "If you smoke more than 10 cigarettes a day, the US label says to start at 21 mg. If you smoke 10 or fewer, start at 14 mg. You then step down to lower strengths over 8 to 10 weeks.",
  },
  {
    question: "How long should you use nicotine patches to quit smoking?",
    answer:
      "Most box plans run 8 to 10 weeks. The CDC says to lower the dose, often after 8 to 12 weeks, and MedlinePlus gives 6 to 20 weeks depending on the product. The NHS advises using nicotine replacement for at least 12 weeks. If you need longer, talk to your doctor.",
  },
  {
    question: "Should I take the nicotine patch off at night?",
    answer:
      "Only if it upsets your sleep. If you get vivid dreams or trouble sleeping, the CDC and the US label say you can take it off at bedtime and put a new one on in the morning. If you crave a cigarette as soon as you wake up, keeping it on for 24 hours may help.",
  },
  {
    question: "Can I shower or swim with a nicotine patch?",
    answer:
      "You can shower and bathe with it on (CDC, MedlinePlus). The sources we use do not cover swimming, so check your box. If the patch comes off, put on a new one.",
  },
  {
    question: "Can you smoke while wearing a nicotine patch?",
    answer:
      "Don't plan to. MedlinePlus warns that smoking or using other nicotine while on the patch can lead to too much nicotine. If you slip, the CDC says you do not need to stop the patch. Throw away your cigarettes and keep going.",
  },
  {
    question: "What if my nicotine patch falls off?",
    answer:
      "Put on a new patch (CDC, MedlinePlus). Then carry on with your usual change time the next day.",
  },
];

function Section({
  id,
  title,
  children,
  tone = "default",
}: {
  id: string;
  title: string;
  children: ReactNode;
  tone?: "default" | "amber";
}) {
  const toneClass =
    tone === "amber"
      ? "border-amber-200/80 bg-amber-50/90"
      : "border-teal-200 bg-white";
  return (
    <section id={id} className={`scroll-mt-24 rounded-2xl border p-6 shadow-sm ${toneClass}`}>
      <h2 className="text-xl font-semibold text-teal-950">{title}</h2>
      {children}
    </section>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm leading-7 text-teal-900/90">{children}</p>;
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden className="mt-1 text-teal-600">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function QuitSmokingWithNicotinePatchPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    dateReviewed: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  const howToJsonLd = buildHowToJsonLd({
    name: "How to use a nicotine patch",
    description: "Steps for putting on, wearing and changing a nicotine patch when you quit smoking.",
    path: PATH,
    steps,
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={howToJsonLd} />

      <Breadcrumbs items={[{ name: "Quit smoking with nicotine patch", path: PATH }]} />

      <ArticleHeader
        kicker="NRT support"
        title={TITLE}
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/tools/nicotine-patch-plan" variant="secondary">
            Patch plan tool →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated November 2026.</strong> A nicotine
          patch gives you a steady dose of nicotine through your skin, so withdrawal is milder
          while you quit smoking. Your job is to put it in the right place, pick the right
          strength, and have a plan for the cravings it does not cover.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "how-to-use", label: "How to use a nicotine patch" },
          { id: "where-to-put", label: "Where to put a nicotine patch" },
          { id: "strength", label: "Which strength to start with" },
          { id: "how-long", label: "How long to use patches" },
          { id: "night", label: "Wearing it at night" },
          { id: "cravings", label: "Still craving on the patch?" },
          { id: "slips", label: "If you smoke while wearing it" },
          { id: "side-effects", label: "Side effects and who should ask first" },
          { id: "get-patches", label: "Where to get patches and free help" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Start the nicotine patch on your quit day. Each morning, put a new patch on clean, dry, hairless skin on your upper body (upper arm, chest, shoulder or back), using a new spot each day. Start at 21 mg if you smoke more than 10 cigarettes a day, or 14 mg if you smoke 10 or fewer, then step down over about 8–10 weeks. Pair it with gum or a lozenge if cravings still break through."
          facts={[
            "Use a different spot each day; don't reuse one more than once a week (CDC).",
            "The strength cut-off is 10 cigarettes a day (US label, CDC).",
            "Vivid dreams? Take it off at bedtime and put a new one on in the morning (CDC, US label).",
          ]}
        />
      </section>

      <Section id="how-to-use" title="How to use a nicotine patch, step by step">
        <P>These steps come from the CDC, MedlinePlus and the NicoDerm CQ box label.</P>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          {steps.map((step, i) => (
            <li key={step.name} className="flex gap-3">
              <span className="font-semibold text-teal-700">{i + 1}.</span>
              <span>
                <strong className="text-teal-950">{step.name}.</strong> {step.text}
              </span>
            </li>
          ))}
        </ol>
        <P>
          Getting ready a week ahead makes day one easier. Our{" "}
          <Link className={LINK} href="/prepare-to-quit-smoking">
            prep checklist
          </Link>{" "}
          covers what to buy and which cues to plan for.
        </P>
      </Section>

      <Section id="where-to-put" title="Where to put a nicotine patch">
        <P>
          Put it on clean, dry skin with little or no hair on your upper body. The CDC lists the
          upper chest, upper arm, inner arm, shoulder and back. MedlinePlus also lists the hip.
          There is no proof that one spot works better, so choose where it sticks best and you
          can reach easily.
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">Where to put a nicotine patch and where to avoid</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  Good spots
                </th>
                <th scope="col" className="py-2 font-semibold">
                  Avoid
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              <tr>
                <td className="py-3 pr-4 leading-6">
                  Upper arm, inner arm, upper chest, shoulder, back (CDC). Hip (MedlinePlus).
                </td>
                <td className="py-3 leading-6">
                  Oily, irritated, scarred, broken or hairy skin. The spot you used in the past
                  week.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Bullets
          items={[
            "Move it every day. The CDC says not to use the same spot more than once a week. Moving it helps keep your skin from getting red and itchy.",
            "Showers and baths are fine with the patch on (CDC, MedlinePlus).",
            "If it falls off, put on a new one (CDC, MedlinePlus).",
          ]}
        />
      </Section>

      <Section id="strength" title="Which nicotine patch strength to start with">
        <P>
          Patches come in 21 mg, 14 mg and 7 mg. Your starting strength depends on how much you
          smoke. This is the schedule on the NicoDerm CQ US label. Other brands may differ a
          little, so follow your box.
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">Nicotine patch strength and step-down by cigarettes per day</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  If you smoke
                </th>
                <th scope="col" className="py-2 font-semibold">
                  Patch plan
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {strengthRows.map((row) => (
                <tr key={row.smoke} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">
                    {row.smoke}
                  </th>
                  <td className="py-3 leading-6">{row.plan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          Want dates on your calendar? The{" "}
          <Link className={LINK} href="/tools/nicotine-patch-plan">
            nicotine patch plan tool
          </Link>{" "}
          turns this into a step-down schedule from your quit day.
        </P>
      </Section>

      <Section id="how-long" title="How long to use nicotine patches">
        <P>
          Plan on about 8 to 10 weeks, which is what the US box schedule covers. Other sources
          give a wider range:
        </P>
        <Bullets
          items={[
            "The CDC says to lower the dose over time, often after 8 to 12 weeks, with the goal of stopping.",
            "MedlinePlus says patches may be used for 6 to 20 weeks, depending on the product.",
            "The NHS advises using nicotine replacement for at least 12 weeks, or longer if you need it.",
          ]}
        />
        <P>
          If you think you need the patch for longer,
          talk to your doctor or pharmacist. The FDA describes approved nicotine replacement
          products as safe and effective ways to quit.
        </P>
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        The patch handles the steady nicotine. Blou handles the moments: SOS craving help when an
        urge breaks through, and a timeline that shows every smoke-free day you add.
      </InlineAppCta>

      <Section id="night" title="Wearing the patch at night: sleep and vivid dreams">
        <P>
          Some people get vivid dreams or poor sleep with a patch on overnight. If that happens,
          the CDC and the US label say you can take it off at bedtime and put a new one on when
          you get up.
        </P>
        <P>
          There is a trade-off. If you crave a cigarette as soon as you wake, the label says to
          keep it on for the full 24 hours. A pharmacist can help you choose. More on this in{" "}
          <Link className={LINK} href="/guides/dreams-and-sleep">
            vivid dreams after quitting
          </Link>
          .
        </P>
      </Section>

      <Section id="cravings" title="Still craving on the patch?">
        <P>
          That is normal. The patch eases the background pull of withdrawal, but cravings tied to
          coffee, the car or stress are learned habits, and they still show up.
        </P>
        <Bullets
          items={[
            <>
              <strong>Add a fast-acting form.</strong> The CDC says you can use the patch with
              nicotine gum or a lozenge for cravings that break through. The NHS says two types
              together, a slow one and a fast one, can work well. Not sure about strength? See{" "}
              <Link className={LINK} href="/quit-smoking-with-nicotine-lozenge">
                nicotine lozenge 2mg vs 4mg
              </Link>
              . See{" "}
              <Link className={LINK} href="/combination-nrt-quit-smoking">
                combination NRT
              </Link>{" "}
              and{" "}
              <Link className={LINK} href="/nicotine-patch-vs-gum">
                nicotine patch vs gum
              </Link>
              .
            </>,
            <>
              <strong>Check your dose.</strong> The CDC says heavy cravings may mean the dose is
              too low. Ask a pharmacist. Don't put on a second patch unless a clinician tells you
              to.
            </>,
            <>
              <strong>Have a 3-step craving plan.</strong> Move to a new spot, drink some water,
              and do one thing with your hands for a few minutes. More ideas in the{" "}
              <Link className={LINK} href="/guides/cravings">
                cravings guide
              </Link>
              .
            </>,
          ]}
        />
      </Section>

      <Section id="slips" title="If you smoke while wearing the patch" tone="amber">
        <P>
          A slip happens to a lot of people. It does not undo your quit. The two main sources say
          slightly different things, so here is both:
        </P>
        <Bullets
          items={[
            "MedlinePlus says not to smoke or use other nicotine while on the patch, because you could get too much nicotine.",
            "The CDC says that if you do slip, you don't need to stop the patch. Throw away the cigarettes and keep using it as directed.",
          ]}
        />
        <P>
          Signs of too much nicotine are nausea, vomiting, dizziness, weakness and a fast
          heartbeat (US label). If you notice them, take the patch off and call a doctor or Poison
          Control at 1-800-222-1222 (CDC). For what to do the day after a slip, read{" "}
          <Link className={LINK} href="/i-smoked-one-cigarette">
            I smoked one cigarette
          </Link>
          .
        </P>
      </Section>

      <Section id="side-effects" title="Side effects, and who should ask a doctor first">
        <P>Most side effects are mild (MedlinePlus, CDC):</P>
        <Bullets
          items={[
            "Red, itchy skin where the patch was. Moving it each day helps. Stop and ask a doctor if redness lasts more than 4 days, the skin swells, or you get a rash (US label).",
            "Trouble sleeping or vivid dreams. See the night section above.",
            "Headache, dizziness, nausea or an upset stomach.",
          ]}
        />
        <P>
          The full list and when to get help are in{" "}
          <Link className={LINK} href="/nicotine-patch-side-effects">
            nicotine patch side effects
          </Link>
          .
        </P>
        <P>
          <strong>Ask a doctor before you start if you</strong> (US label, CDC):
        </P>
        <Bullets
          items={[
            "Have heart disease, a recent heart attack, or an irregular heartbeat",
            "Have high blood pressure that is not under control",
            "Are allergic to tape or have a skin problem like eczema or psoriasis",
            "Have stomach ulcers, diabetes, or a history of seizures",
            "Take prescription medicine for depression or asthma",
            "Are pregnant or breastfeeding, or under 18",
          ]}
        />
        <P>Don&apos;t stop any medicine you have been prescribed. Ask your doctor first.</P>
      </Section>

      <Section id="get-patches" title="Where to get nicotine patches (and free help)">
        <P>
          You can buy patches without a prescription at pharmacies and supermarkets (NHS). Free
          support makes them easier to use well:
        </P>
        <Bullets
          items={[
            <>
              <strong>US:</strong> call 1-800-QUIT-NOW for your state quitline, or text QUITNOW
              to 333888 (CDC). Many state quitlines also offer free patches. Find yours on{" "}
              <Link className={LINK} href="/quit-smoking-help">
                free quit-smoking help by state
              </Link>
              .
            </>,
            <>
              <strong>UK:</strong> local NHS Stop Smoking Services are free, in person, online or
              by phone (NHS).
            </>,
          ]}
        />
      </Section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Pair your patch with a plan for cravings"
        description="Blou gives you SOS craving help for the moments the patch can't cover, lung checks, and every smoke-free milestone on one timeline."
      />

      <section
        id="sources"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Sources &amp; further reading</h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          {SOURCES.map((s) => (
            <li key={s.href}>
              <a
                className="underline decoration-teal-400 underline-offset-4"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>{" "}
              <span className="text-ink-muted">· {s.publisher}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          This page is educational and is not medical advice. Follow the directions on your
          product box. If you have a health condition, are pregnant, or take medication, talk to a
          doctor or pharmacist before using nicotine replacement.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/nicotine-patch-side-effects" variant="secondary">
          Patch side effects →
        </ButtonLink>
        <ButtonLink href="/combination-nrt-quit-smoking" variant="secondary">
          Combination NRT →
        </ButtonLink>
        <ButtonLink href="/nicotine-withdrawal-timeline" variant="secondary">
          Withdrawal timeline →
        </ButtonLink>
      </div>
    </div>
  );
}
