import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Byline } from "@/components/marketing/Byline";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { RelatedGuides } from "@/components/marketing/RelatedGuides";
import { StayOnTrackCard } from "@/components/marketing/StayOnTrackCard";
import { TableOfContents } from "@/components/site/TableOfContents";
import { PILLAR_ARTICLE_REFERENCES } from "@/lib/pillarArticleReferences";
import { RELATED_PILLAR_SLUGS } from "@/lib/relatedPillarSlugs";
import {
  buildArticleJsonLd,
  buildHowToJsonLd,
  buildMetadata,
} from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

const PUBLISHED = "2026-04-27";
const MODIFIED = "2026-04-27";

export const metadata: Metadata = buildMetadata({
  title: "Alcohol and quitting smoking: what to know (2026)",
  description:
    "Can you drink while quitting smoking? Learn how alcohol changes cravings, slips, and medication safety—and how to plan nights out without derailing your quit.",
  path: "/alcohol-and-quitting-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "alcohol and quitting smoking",
    "drinking while quitting smoking",
    "smoking when drunk",
    "quit smoking and alcohol",
  ],
});

const firstMonthSteps = [
  {
    name: "1. Pick low-risk weeks",
    text: "For the first 2–4 weeks after quit day, treat alcohol like any other major cue: either skip it or keep doses predictable and low. This is when cue re-learning is loudest, not when you need surprise tests of willpower.",
  },
  {
    name: "2. Pre-decide your drink ceiling",
    text: "If you will drink, decide the number of drinks before you arrive. Pair each drink with water or food. Tell one person your ceiling so social pressure does not rewrite the plan mid-evening.",
  },
  {
    name: "3. Remove the cigarette path",
    text: "Do not stand where you used to smoke. Leave the group for air away from the smoking corner. Keep gum, lozenges, or your phone with craving scripts where your cigarettes used to be.",
  },
  {
    name: "4. Check medication labels",
    text: "Some quit-smoking medicines interact with alcohol or change how you feel when drinking. Read the patient leaflet and ask your clinician or pharmacist if you are unsure.",
  },
] as const;

const faqItems = [
  {
    question: "Can I drink alcohol while quitting smoking?",
    answer:
      "Many people do, but the first few weeks are higher risk for slips because alcohol lowers inhibition and sharpens familiar smoking cues. If drinking has always been paired with cigarettes, delaying or reducing alcohol early often protects the quit more than “proving” you can do both at once.",
  },
  {
    question: "Why does alcohol make me want a cigarette so badly?",
    answer:
      "Alcohol is a common conditioned cue: your brain learned smoking as part of the same ritual. Alcohol can also make urges feel more urgent in the moment, even when nicotine levels are falling. Planning replacements before you drink is more reliable than debating the urge after a drink.",
  },
  {
    question: "Will one beer ruin my quit?",
    answer:
      "A drink is not automatically a relapse. The risk is what happens next—whether you stay near smoking cues, stack drinks, or tell yourself you already failed. If you slip, use the same recovery playbook as any other slip: contain the night, remove cigarettes, and reconnect support in the morning.",
  },
  {
    question: "Should I avoid bars completely?",
    answer:
      "If bars were your primary smoking environment, changing the venue for a few weeks is evidence-based harm reduction—not weakness. You can return later with a practiced script and smoke-free friends once your new habits feel less fragile.",
  },
  {
    question: "Does vaping or NRT change anything with alcohol?",
    answer:
      "NRT can blunt cravings, but it does not remove social cues. Prescription quit medications have their own interaction profiles with alcohol; never mix outside what your prescriber approves, and ask explicitly if you drink regularly.",
  },
] as const;

export default function AlcoholAndQuittingSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Alcohol and quitting smoking: what to know",
    description:
      "How alcohol interacts with smoking cues, slips, and medications during a quit attempt.",
    path: "/alcohol-and-quitting-smoking",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
    citation: PILLAR_ARTICLE_REFERENCES.map((r) => ({
      name: r.label,
      url: r.href,
      publisher: r.publisher,
    })),
  });

  const howToJsonLd = buildHowToJsonLd({
    name: "How to plan alcohol in the first month after quitting smoking",
    description:
      "Lower-risk steps for drinking occasions without stacking smoking cues in early cessation.",
    path: "/alcohol-and-quitting-smoking",
    steps: firstMonthSteps.map((s) => ({ name: s.name, text: s.text })),
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="alcohol-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>
      <Script id="alcohol-howto-json-ld" type="application/ld+json">
        {JSON.stringify(howToJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Alcohol and quitting smoking",
            path: "/alcohol-and-quitting-smoking",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Relapse &amp; maintenance
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Alcohol and quitting smoking: what to know
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Alcohol is one of the strongest real-world triggers for slips. You do
          not need a moral verdict on drinking—you need a plan that matches how
          your brain learned smoking.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <AppStoreBadgeLink
            campaign="article_intro"
            placement="article_intro"
          />
          <Link
            href="/how-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Open the full quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          {
            id: "why-alcohol-triggers-cravings",
            label: "Why does alcohol trigger cigarette cravings?",
          },
          {
            id: "can-you-drink-while-quitting",
            label: "Can you drink while you are quitting smoking?",
          },
          {
            id: "plan-nights-out",
            label: "How should you plan nights out in early quit?",
          },
          {
            id: "friends-and-partners",
            label: "How can friends help without nagging?",
          },
          {
            id: "when-to-seek-medical-care",
            label: "When should you seek medical care?",
          },
          { id: "stay-on-track", label: "Stay on track" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "related-guides", label: "Related reading" },
          { id: "sources", label: "Sources & further reading" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="You can quit smoking while still drinking alcohol, but the first weeks are the riskiest window because alcohol disinhibits behavior and revives smoking-linked memories. Delaying or limiting drinks, changing venues, and pre-planning replacements usually protect your quit more than white-knuckling familiar bar routines."
          facts={[
            "Quitting smoking improves cardiovascular recovery regardless of age; pairing quit support with lower-risk drinking weeks is a common clinical talking point.",
            "Slips often cluster around alcohol and social smoking settings—not because you are weak, but because cues stack.",
            "Medications for quitting may interact with alcohol; your prescriber or pharmacist should review your specific drug and dose.",
          ]}
        />
      </section>

      <section
        id="why-alcohol-triggers-cravings"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Why does alcohol trigger cigarette cravings?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Nicotine withdrawal is only part of the story. Much of long-term
          smoking is{" "}
          <strong>conditioned learning</strong>: the same places, people,
          drinks, and emotions predict a cigarette. Alcohol is a frequent partner
          in that chain, so when blood alcohol rises, your brain predicts a
          smoke next—even when nicotine is already leaving your system.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Public health summaries on tobacco dependence describe repeated pairing
          of cues with nicotine as a core mechanism that makes quitting
          behaviorally hard, not only chemically hard (
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.who.int/news-room/fact-sheets/detail/tobacco"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHO tobacco facts
          </a>
          ). That is why “just one drink” can feel like a bigger fight than a
          random Tuesday afternoon.
        </p>
      </section>

      <section
        id="can-you-drink-while-quitting"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Can you drink while you are quitting smoking?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          There is no universal ban. The useful question is risk timing. Early
          cessation is when your brain is re-writing routines. The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.cdc.gov/tobacco/about/benefits-of-quitting.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            CDC overview of benefits after quitting
          </a>{" "}
          emphasizes that health gains begin quickly—protecting those early
          days often means choosing easier battles than your heaviest drinking
          night in week one.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If alcohol has never been tightly linked to your smoking, moderate
          drinking may be less destabilizing than for someone whose every Friday
          ended with a pack. Honesty beats bravado: name your pattern, then
          choose a temporary rule (fewer nights, fewer drinks, different
          friends) that matches it.
        </p>
      </section>

      <section
        id="plan-nights-out"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How should you plan nights out in early quit?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Treat the evening like an athlete treats a game: warm up, set
          boundaries, debrief. Arrive late or leave early the first times you
          test a high-risk venue. Bring nicotine replacement if your clinician
          recommended it—having gum in your pocket beats negotiating with a
          drunk version of yourself at 1 a.m.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.nhs.uk/better-health/quit-smoking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NHS quit smoking hub
          </a>{" "}
          stresses practical support and planning—not motivation speeches. Pair
          that mindset with our{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href={`/${RELATED_PILLAR_SLUGS.iSmokedOneCigarette}`}
          >
            slip recovery page
          </Link>{" "}
          so a single drunk cigarette does not turn into a week-long story that
          you “already ruined it.”
        </p>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          {firstMonthSteps.map((step) => (
            <li key={step.name}>
              <p className="font-semibold text-teal-950">{step.name}</p>
              <p className="mt-1">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="friends-and-partners"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How can friends help without nagging?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The best support is specific. Ask for a text at 10 p.m., not a lecture
          on statistics. Ask hosts to keep the patio door closed so smoke does
          not drift to your seat. If someone offers you “just one” while
          drinking, a one-line script you rehearsed sober beats improvising
          while buzzed.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If your social circle equates fun with smoking, you are not obligated
          to educate everyone on quit night. You can simply leave early, host
          yourself, or stack several alcohol-free weeks until the physical
          urgency of week-one cravings softens. Protecting the quit is not the
          same as abandoning friends—it is sequencing risk so your new habits get
          a fair trial.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Blou is built for these micro-moments: logging a craving after a
          drink, swapping scripts with your past self, and seeing that slips are
          data—not destiny. Pair that with the{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/tools/money-saved"
          >
            money-saved calculator
          </Link>{" "}
          if a tangible reward helps you say no when alcohol makes cigarettes
          sound nostalgic.
        </p>
      </section>

      <section
        id="when-to-seek-medical-care"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          When should you seek medical care?
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-teal-900/90">
          <li>
            You cannot cut down alcohol on your own, or you drink in ways that
            already worry you—dual dependence deserves coordinated care.
          </li>
          <li>
            You take prescription quit medication and feel unusual sedation,
            mood changes, or blackouts when mixing even small amounts of
            alcohol.
          </li>
          <li>
            You are pregnant, live with serious heart or liver disease, or have
            a history of seizures—medication and drinking decisions should be
            clinician-led.
          </li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.hhs.gov/surgeongeneral/reports-and-publications/tobacco/2020-cessation-sgr/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            2020 Surgeon General report on cessation
          </a>{" "}
          highlights that combining behavioral support with medication tends to
          outperform either alone—especially when life contexts (like alcohol)
          keep pushing old cues back online.
        </p>
      </section>

      <section id="stay-on-track" className="scroll-mt-24">
        <StayOnTrackCard
          campaign="article_footer_card"
          placement="article_footer_card"
        />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-alcohol-quit" />
      </section>

      <section id="related-guides" className="scroll-mt-24">
        <RelatedGuides
          slugs={[
            RELATED_PILLAR_SLUGS.iSmokedOneCigarette,
            "how-to-quit-smoking",
            "prepare-to-quit-smoking",
            "cravings",
            RELATED_PILLAR_SLUGS.howToStopARelapse,
          ]}
        />
      </section>

      <section
        id="sources"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Sources &amp; further reading
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          {PILLAR_ARTICLE_REFERENCES.map((reference) => (
            <li key={reference.href}>
              <a
                className="underline decoration-teal-400 underline-offset-4"
                href={reference.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {reference.label}
              </a>{" "}
              <span className="text-teal-900/60">· {reference.publisher}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-teal-900/70">
          This guide is educational and does not replace medical advice. If you
          have pre-existing conditions or take prescription medication, talk to
          your clinician when making changes to your smoking.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/how-to-quit-smoking"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← Back to quit plan
        </Link>
        <AppStoreBadgeLink
          campaign="article_footer_card"
          placement="article_footer_card"
        />
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/alcohol-and-quitting-smoking</code>
      </p>
    </div>
  );
}
