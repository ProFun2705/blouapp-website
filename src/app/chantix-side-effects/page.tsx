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
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-11-19";
const MODIFIED = "2026-11-19";
const CAMPAIGN = "article_chantix-side-effects";
const PATH = "/chantix-side-effects";

const TITLE = "Chantix side effects: what is common and what is not";
const DESCRIPTION =
  "Chantix (varenicline) side effects: nausea, sleep and vivid dreams, headache, the serious warning signs, and when to call your doctor.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "chantix side effects",
    "side effects of chantix",
    "chantix side effects weight loss",
    "long term side effects of chantix",
    "side effects after stopping chantix",
    "chantix nausea",
    "chantix dreams",
    "varenicline side effects",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "How to use varenicline",
    href: "https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-varenicline.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "Varenicline (drug information)",
    href: "https://medlineplus.gov/druginfo/meds/a606024.html",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
  },
  {
    label: "Side effects of varenicline",
    href: "https://www.nhs.uk/medicines/varenicline/side-effects-of-varenicline/",
    publisher: "NHS",
  },
];

const faqItems = [
  {
    question: "What are the most common Chantix side effects?",
    answer:
      "MedlinePlus and the CDC list nausea, trouble sleeping, unusual dreams or nightmares, headache, constipation, gas, and sleepiness or dizziness. Taking the pill after eating with a full glass of water helps with nausea. Tell your doctor if a side effect is severe or does not go away.",
  },
  {
    question: "How long do Chantix side effects last?",
    answer:
      "The sources do not give a time frame for each side effect, so there is no honest number to quote. Treatment usually lasts 12 weeks (CDC, MedlinePlus). If a side effect bothers you or does not ease, ask your prescriber. They can sometimes lower a dose, for example the evening dose for sleep problems (CDC).",
  },
  {
    question: "Does Chantix cause weight loss?",
    answer:
      "MedlinePlus lists changes in appetite as a possible side effect. The sources used for this page do not say Chantix causes weight loss or weight gain, so we won't claim either. If your appetite changes a lot, tell your doctor.",
  },
  {
    question: "What are the long-term side effects of Chantix?",
    answer:
      "The CDC and MedlinePlus pages do not describe a separate list of long-term effects. They do say treatment is usually 12 weeks, and a doctor may extend it another 12 weeks if you have quit (MedlinePlus). Some mood symptoms can begin after stopping the medicine, so keep your prescriber in the loop. Ask them about your own history.",
  },
  {
    question: "What happens when you stop taking Chantix?",
    answer:
      "MedlinePlus says changes in mood, behavior or thinking can show up early, after several weeks, or after stopping the drug. If you notice new or worsening depression, anxiety, agitation or thoughts of suicide, call your doctor right away. Do not stop or change the medicine on your own because of mild effects. Talk to your prescriber first.",
  },
  {
    question: "Can you drink alcohol on Chantix?",
    answer:
      "MedlinePlus says varenicline can increase the effects of alcohol, and asks you to talk to your doctor about drinking during treatment. Our page on alcohol and quitting smoking covers why drinking can make cravings harder.",
  },
  {
    question: "Does Chantix cause vivid dreams?",
    answer:
      "Yes, trouble sleeping and unusual dreams or nightmares are listed as common (CDC, MedlinePlus). The CDC says your doctor may lower the evening dose. Ask your prescriber before changing anything.",
  },
  {
    question: "When should I call my doctor about Chantix?",
    answer:
      "Stop taking it and call right away for hostility, agitation, depressed mood, suicidal thoughts, or behavior changes that do not seem to come from quitting (CDC, MedlinePlus). Also get help for chest pain, shortness of breath, a seizure, signs of a stroke, or swelling, a rash or blistering skin. Get emergency help if you are in danger.",
  },
];

const commonEffects: Array<{ effect: string; fix: string }> = [
  {
    effect: "Nausea or vomiting",
    fix: "Take it after eating with a full glass of water. If it keeps up, ask your doctor about a lower dose (CDC, MedlinePlus).",
  },
  {
    effect: "Trouble sleeping, unusual dreams or nightmares",
    fix: "Your doctor may lower the evening dose (CDC). See our guides on dreams and sleep and insomnia.",
  },
  {
    effect: "Constipation, gas, diarrhea or heartburn",
    fix: "Tell your doctor if it is severe or does not go away (MedlinePlus). For diarrhea, drink plenty of fluids. For heartburn, avoid rich food just before bed (NHS).",
  },
  {
    effect: "Headache",
    fix: "Rest and drink fluids. See your doctor if it lasts several days or is severe (NHS).",
  },
  {
    effect: "Sleepiness, dizziness or trouble concentrating",
    fix: "Sit or lie down if you feel dizzy (NHS). Use caution driving until you know how it affects you (CDC).",
  },
  {
    effect: "Bad taste, dry mouth, appetite changes, tiredness",
    fix: "Listed by MedlinePlus. Mention them to your prescriber if they bother you.",
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

export default function ChantixSideEffectsPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "Drug", name: "Varenicline (Chantix)" },
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />
      <Breadcrumbs
        items={[
          { name: "Quit smoking with varenicline", path: "/quit-smoking-with-varenicline" },
          { name: "Chantix side effects", path: PATH },
        ]}
      />

      <ArticleHeader
        kicker="Quit-smoking medication"
        title="Chantix side effects (varenicline): what to expect"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
      >
        <p>
          <strong className="font-semibold text-ink">Updated November 2026.</strong> Chantix is the
          brand name of varenicline, a prescription pill that helps people quit smoking. This page
          covers the common side effects, the serious warning signs, and what to ask your
          prescriber. It is not a dosing guide.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "common", label: "Common Chantix side effects" },
          { id: "nausea-sleep", label: "Nausea and sleep: what helps" },
          { id: "serious", label: "Serious side effects" },
          { id: "weight", label: "Chantix, appetite and weight" },
          { id: "alcohol-driving", label: "Alcohol and driving" },
          { id: "how-long", label: "How long do side effects last?" },
          { id: "talk-first", label: "Talk to a doctor first if…" },
          { id: "missed-dose", label: "Missed dose and overdose" },
          { id: "other-options", label: "If Chantix does not suit you" },
          { id: "support", label: "Support while you take it" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Common Chantix side effects are nausea, trouble sleeping or vivid dreams, headache, constipation, gas, and sleepiness or dizziness. Taking each pill after eating with a full glass of water helps with nausea, and your prescriber may be able to lower a dose. Stop taking it and call your doctor right away for mood or behavior changes, chest pain, a seizure, or an allergic or skin reaction."
          facts={[
            "Treatment usually lasts 12 weeks (CDC, MedlinePlus).",
            "Serious mood changes are rare. Stop and call right away if they happen (CDC).",
            "Chantix can add to alcohol's effects (MedlinePlus).",
            "Do not drive until you know how it affects you (CDC, MedlinePlus).",
          ]}
        />
      </section>

      <Section id="common" title="Common Chantix side effects">
        <P>
          MedlinePlus and the CDC list the same main group of effects. Most are not dangerous, but
          tell your doctor if one is severe or does not go away.
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">Common Chantix side effects and what to do</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  Side effect
                </th>
                <th scope="col" className="py-2 font-semibold">
                  What to try
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {commonEffects.map((row) => (
                <tr key={row.effect} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">
                    {row.effect}
                  </th>
                  <td className="py-3 leading-6">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          Quitting smoking also causes its own symptoms, like poor sleep, irritability and low
          mood, so not every feeling comes from the pill. See the{" "}
          <Link className={LINK} href="/nicotine-withdrawal-symptoms">
            nicotine withdrawal symptoms
          </Link>{" "}
          guide.
        </P>
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        Chantix works on cravings from the medicine side. Blou helps with the moments and the
        routine: SOS craving help when an urge hits, and a timeline that shows each smoke-free day.
      </InlineAppCta>

      <Section id="nausea-sleep" title="Chantix nausea and sleep problems: what helps">
        <Bullets
          items={[
            "Take each pill after eating, with a full glass of water (8 ounces), at about the same times each day (CDC, MedlinePlus).",
            "If nausea does not settle, ask your prescriber about lowering the dose. The CDC says to talk to your doctor about this. Don't change the dose yourself.",
            "For sleep problems or vivid dreams, the CDC says your doctor may lower the evening dose.",
          ]}
        />
        <P>
          For more on sleep after quitting, read our guides on{" "}
          <Link className={LINK} href="/guides/dreams-and-sleep">
            vivid dreams and sleep
          </Link>{" "}
          and{" "}
          <Link className={LINK} href="/guides/insomnia">
            insomnia
          </Link>
          .
        </P>
      </Section>

      <Section id="serious" title="Serious Chantix side effects: stop and get help" tone="amber">
        <P>
          These are rare, but they matter. The CDC and MedlinePlus say to stop taking Chantix and
          call your doctor right away for:
        </P>
        <Bullets
          items={[
            <>
              <strong>Mood or behavior changes:</strong> hostility, agitation, depressed mood,
              suicidal thoughts, new or worsening anxiety, mania, hallucinations or confusion.
              MedlinePlus says these can start early, after several weeks, or after you stop the
              drug. They happened both in people who quit and in people who kept smoking.
            </>,
            <>
              <strong>Heart or stroke signs:</strong> chest pain or pressure, shortness of breath,
              sweating, calf pain when walking, sudden weakness or numbness on one side, or slow or
              difficult speech.
            </>,
            <>
              <strong>Seizures</strong> or <strong>sleepwalking</strong>.
            </>,
            <>
              <strong>Allergic or skin reactions:</strong> swelling of the face, lips, tongue or
              throat, trouble breathing or swallowing, a rash, or red, peeling or blistering skin.
            </>,
          ]}
        />
        <P>
          Get emergency help if you are in danger (CDC). The NHS says to call emergency services
          for thoughts of harming yourself, a seizure, stroke signs, chest pain or a serious
          allergic reaction, and not to drive yourself.
        </P>
        <P>
          MedlinePlus says people taking varenicline had higher rates of heart attack, stroke and
          other heart and blood vessel problems in clinical studies, and that smoking raises those
          risks too. Talk with your doctor about the risks and benefits, especially if you have
          heart or blood vessel disease. It also asks that family or caregivers know the warning
          signs, so consider showing someone close to you this section.
        </P>
      </Section>

      <Section id="weight" title="Chantix, appetite and weight">
        <P>
          Many people search for Chantix side effects and weight loss. MedlinePlus lists changes in
          appetite as a side effect. It does not say Chantix causes weight loss or weight gain, so
          we can't promise either. If your appetite changes a lot, tell your doctor. For weight
          after quitting in general, see{" "}
          <Link className={LINK} href="/quit-smoking-without-gaining-weight">
            quitting smoking without gaining weight
          </Link>
          .
        </P>
      </Section>

      <Section id="alcohol-driving" title="Alcohol and driving on Chantix">
        <Bullets
          items={[
            "MedlinePlus says varenicline can increase the effects of alcohol. Ask your doctor about drinking during treatment.",
            "Chantix may cause drowsiness, dizziness or trouble concentrating. The CDC and MedlinePlus say to use caution, and not to drive or use machinery until you know how it affects you.",
          ]}
        />
        <P>
          Read more in{" "}
          <Link className={LINK} href="/alcohol-and-quitting-smoking">
            alcohol and quitting smoking
          </Link>{" "}
          and{" "}
          <Link className={LINK} href="/driving-and-quitting-smoking">
            driving and quitting smoking
          </Link>
          .
        </P>
      </Section>

      <Section id="how-long" title="How long do Chantix side effects last? Long-term effects and stopping">
        <P>
          The sources do not give a time frame for each side effect, so we won't guess. What they
          do say: treatment usually lasts 12 weeks. If you have quit by then, your doctor may extend
          it another 12 weeks to lower the chance of going back to smoking (MedlinePlus, CDC). If
          you have not quit, talk to your doctor.
        </P>
        <P>
          The CDC and MedlinePlus pages do not list a separate set of long-term effects. Because
          mood changes can appear after stopping the drug, keep your prescriber in the loop at the
          end of your course.
        </P>
        <P>
          Quitting itself can also bring low mood or anxiety. The CDC says to get help if those
          feelings last more than two weeks or get worse. See{" "}
          <Link className={LINK} href="/quit-smoking-with-anxiety">
            quitting smoking with anxiety
          </Link>{" "}
          and{" "}
          <Link className={LINK} href="/quit-smoking-with-depression">
            quitting smoking with depression
          </Link>
          .
        </P>
      </Section>

      <Section id="talk-first" title="Talk to a doctor first if…">
        <P>The CDC and MedlinePlus say to tell your doctor before starting if you:</P>
        <Bullets
          items={[
            "Have had depression, bipolar disorder, schizophrenia or another mental illness.",
            "Have or have had epilepsy or seizures.",
            "Have or have had heart or blood vessel disease.",
            "Have severe kidney problems (the dose may need to be lowered).",
            "Are pregnant or breastfeeding. If you breastfeed, MedlinePlus says to watch your baby for seizures and for more vomiting or spitting up than usual.",
            "Are under 18.",
          ]}
        />
      </Section>

      <Section id="missed-dose" title="Missed dose and overdose" tone="amber">
        <P>
          If you miss a dose, take it when you remember. If it is almost time for the next one,
          skip the missed dose. Never double up (CDC, MedlinePlus). If someone swallows Chantix by
          accident, call Poison Control at 1-800-222-1222 or go to an emergency room. Keep it out
          of reach of children and pets (CDC).
        </P>
      </Section>

      <Section id="other-options" title="If Chantix does not suit you">
        <P>
          Side effects do not mean you are out of options. Only your prescriber can say what fits
          you. Compare the choices in{" "}
          <Link className={LINK} href="/quit-smoking-medication">
            quit smoking medications
          </Link>
          , including{" "}
          <Link className={LINK} href="/quit-smoking-with-bupropion">
            Wellbutrin (bupropion)
          </Link>{" "}
          and the{" "}
          <Link className={LINK} href="/quit-smoking-with-nicotine-patch">
            nicotine patch
          </Link>
          . See also{" "}
          <Link className={LINK} href="/nicotine-patch-side-effects">
            nicotine patch side effects
          </Link>
          , and the main page on{" "}
          <Link className={LINK} href="/quit-smoking-with-varenicline">
            quitting smoking with varenicline
          </Link>
          .
        </P>
      </Section>

      <Section id="support" title="Support while you take it">
        <P>
          Free coaching is available at 1-800-QUIT-NOW (1-800-784-8669), or text QUITNOW to 333888
          (CDC). Message and data rates may apply. More options are in our{" "}
          <Link className={LINK} href="/quit-smoking-help">
            quit smoking help
          </Link>{" "}
          page.
        </P>
      </Section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

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
          This page is educational and is not medical advice. Blou does not treat or prevent
          medication side effects. Follow your prescriber&rsquo;s directions and the label that
          comes with your medicine. If you have a health condition, are pregnant, or take other
          medication, talk to a clinician or pharmacist.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/quit-smoking-with-varenicline" variant="secondary">
          ← Quitting with varenicline
        </ButtonLink>
        <ButtonLink href="/quit-smoking-medication" variant="secondary">
          Quit smoking medications →
        </ButtonLink>
      </div>
    </div>
  );
}
