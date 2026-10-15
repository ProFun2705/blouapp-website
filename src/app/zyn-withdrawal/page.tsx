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

const PUBLISHED = "2026-10-15";
const MODIFIED = "2026-10-15";
const CAMPAIGN = "article_zyn-withdrawal";
const PATH = "/zyn-withdrawal";

const TITLE = "Zyn withdrawal symptoms and timeline: what to expect";
const DESCRIPTION =
  "Zyn withdrawal symptoms, a quitting Zyn timeline from day 1 to month 2, how to cope, and the benefits of quitting nicotine pouches.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "zyn withdrawal symptoms",
    "zyn withdrawal timeline",
    "quitting zyn timeline",
    "benefits of quitting zyn",
    "nicotine pouch withdrawal",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "Handling nicotine withdrawal and triggers when you decide to quit tobacco",
    href: "https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/withdrawal-fact-sheet",
    publisher: "National Cancer Institute",
  },
  {
    label: "Nicotine and tobacco withdrawal (Medical Encyclopedia)",
    href: "https://medlineplus.gov/ency/article/000953.htm",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
  },
  {
    label: "Managing nicotine withdrawal",
    href: "https://smokefree.gov/challenges-when-quitting/withdrawal/understanding-withdrawal",
    publisher: "Smokefree.gov (National Cancer Institute)",
  },
  {
    label: "Nicotine pouches",
    href: "https://www.cdc.gov/tobacco/nicotine-pouches/index.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "Nicotine is why tobacco products are addictive",
    href: "https://www.fda.gov/tobacco-products/health-effects-tobacco-use/nicotine-why-tobacco-products-are-addictive",
    publisher: "U.S. Food and Drug Administration",
  },
  {
    label: "What to know about quitting Zyn (January 2026)",
    href: "https://truthinitiative.org/research-resources/emerging-tobacco-products/what-know-about-quitting-zyn",
    publisher: "Truth Initiative",
  },
  {
    label: "What is Zyn and what are oral nicotine pouches? (August 2026)",
    href: "https://truthinitiative.org/research-resources/emerging-tobacco-products/what-zyn-and-what-are-oral-nicotine-pouches",
    publisher: "Truth Initiative",
  },
  {
    label: "What is the impact of nicotine pouches on oral health: a systematic review. BMC Oral Health, 2024",
    href: "https://pubmed.ncbi.nlm.nih.gov/39097712/",
    publisher: "PubMed",
  },
  {
    label: "Small pouches, but high nicotine doses: nicotine delivery and acute effects after use of tobacco-free nicotine pouches. Frontiers in Pharmacology, 2024",
    href: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1392027/full",
    publisher: "Frontiers in Pharmacology",
  },
  {
    label: "Cardiovascular and metabolic changes following 12 weeks of tobacco and nicotine pouch cessation: a Swedish cohort study. Harm Reduction Journal, 2025",
    href: "https://pubmed.ncbi.nlm.nih.gov/40241094/",
    publisher: "PubMed",
  },
  {
    label: "How to quit smoking",
    href: "https://www.cdc.gov/tobacco/about/how-to-quit.html",
    publisher: "Centers for Disease Control and Prevention",
  },
];

const faqItems = [
  {
    question: "What are Zyn withdrawal symptoms?",
    answer:
      "Zyn withdrawal is nicotine withdrawal. The most common symptoms are cravings, irritability or anger, trouble concentrating, poor sleep, restlessness, anxiety, low mood, and a bigger appetite. Less common ones include headaches, tiredness, dizziness, mouth ulcers, and constipation (National Cancer Institute).",
  },
  {
    question: "How long does Zyn withdrawal last?",
    answer:
      "For most people the worst of it lasts a few days to a couple of weeks. Symptoms generally ease over the first month, though some people notice them for several months, and occasional mild cravings can show up months or even years later. These timelines come from research on quitting tobacco in general; pouch-specific studies are limited.",
  },
  {
    question: "When does Zyn withdrawal peak?",
    answer:
      "Usually around days 2 to 3. MedlinePlus says withdrawal symptoms begin within 2 to 3 hours of your last nicotine and peak about 2 to 3 days later. The first week as a whole tends to be the hardest.",
  },
  {
    question: "What are the benefits of quitting Zyn?",
    answer:
      "You end the nicotine dependence that keeps the habit going, stop the repeated rises in heart rate that nicotine pouches cause, give your gums and the inside of your lip a break from constant contact, stop spending money on cans, and remove a poisoning risk if there are young children at home. Some changes take time, and pouch-specific long-term data are still limited.",
  },
  {
    question: "Is nicotine pouch withdrawal worse than cigarette withdrawal?",
    answer:
      "There is no good head-to-head research. What we know is that some pouches can deliver as much nicotine as a cigarette, or more in the case of very high-strength pouches, so withdrawal can feel just as real. How strong it is for you depends more on how much nicotine you use each day than on the product.",
  },
  {
    question: "Can quitting Zyn cause headaches or mouth sores?",
    answer:
      "Both are listed as less common nicotine withdrawal symptoms by the National Cancer Institute. They usually settle as your body adjusts. See a dentist or doctor for any mouth sore or white patch that does not heal within a couple of weeks.",
  },
];

const timeline: Array<{ stage: string; whatHappens: ReactNode; whatHelps: string }> = [
  {
    stage: "First 24 hours",
    whatHappens:
      "Cravings can start within an hour or two of your last pouch, and other symptoms within 2–3 hours. Anxiety can begin within the first day, and mild low mood often starts on day one.",
    whatHelps:
      "Remove every can from your bag, car and desk. Plan your first three cue moments (waking, driving, after meals) in advance.",
  },
  {
    stage: "Days 2–3 (peak)",
    whatHappens:
      "Symptoms usually peak about 2–3 days after you stop. Anxiety tends to build over the first three days. Sleep may be disrupted and irritability is common.",
    whatHelps:
      "Cut back on caffeine, take short walks, and keep sugar-free gum or crunchy snacks on hand. If you use NRT, use it as directed rather than waiting for cravings to peak.",
  },
  {
    stage: "Week 1",
    whatHappens:
      "The hardest week overall. Anger and frustration tend to peak within the first week. This is also when slips are most likely.",
    whatHelps:
      "Tell the people around you. Use a quitline or text program. Treat each craving as a few minutes to get through, not a test of character.",
  },
  {
    stage: "Weeks 2–4",
    whatHappens:
      "Symptoms generally ease. Irritability can last 2–4 weeks, and mild low mood usually clears within a month. Cravings become less frequent and more tied to specific cues.",
    whatHelps:
      "Watch for cue-based urges (coffee, gaming, work stress) and keep your replacements ready. If low mood lasts more than two weeks or worsens, get help.",
  },
  {
    stage: "Month 2 and beyond",
    whatHappens:
      "Most people feel far more settled. Some still notice symptoms for several months, and occasional mild cravings can appear months or years later.",
    whatHelps:
      "Treat a rare strong craving as normal, not a sign you failed. Keep your plan for high-risk situations like parties or travel.",
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

export default function ZynWithdrawalPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Nicotine withdrawal" },
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          { name: "Quit Zyn", path: "/quit-zyn" },
          { name: "Zyn withdrawal", path: PATH },
        ]}
      />

      <ArticleHeader
        kicker="Nicotine pouches"
        title="Zyn withdrawal: symptoms, timeline and benefits of quitting"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/quit-zyn" variant="secondary">
            How to quit Zyn →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated October 2026.</strong> Zyn
          withdrawal is nicotine withdrawal: cravings, irritability, poor sleep and restlessness
          that usually peak around days 2–3 and ease over the first month. Here is what to expect
          stage by stage, what helps, and what actually improves when you stop.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "symptoms", label: "Zyn withdrawal symptoms" },
          { id: "timeline", label: "Zyn withdrawal timeline" },
          { id: "coping", label: "How to get through it" },
          { id: "benefits", label: "Benefits of quitting Zyn" },
          { id: "when-to-get-help", label: "When to get help" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Zyn withdrawal symptoms start within hours of your last pouch, peak around days 2–3, and are usually worst in the first week. They generally ease over the first month, although some people notice them for several months. Common symptoms are cravings, irritability, trouble concentrating, poor sleep, anxiety, low mood and hunger."
          facts={[
            "Withdrawal begins within 2–3 hours of your last nicotine (MedlinePlus).",
            "Symptoms peak in the first 3 days and ease over about a month (NCI).",
            "Research on pouch withdrawal specifically is limited; these timelines come from tobacco research overall.",
          ]}
        />
      </section>

      <Section id="symptoms" title="Zyn withdrawal symptoms">
        <P>
          Pouches contain nicotine, which the CDC calls highly addictive, so stopping them causes
          the same withdrawal as stopping any nicotine product. The National Cancer Institute
          lists the most common symptoms:
        </P>
        <Bullets
          items={[
            "Nicotine cravings, mild to intense",
            "Anger, frustration and irritability",
            "Trouble concentrating or a foggy feeling",
            "Insomnia and restlessness",
            "Anxiety and low mood",
            "Hunger or a bigger appetite",
          ]}
        />
        <P>
          Less common symptoms include headaches, tiredness, dizziness, coughing, mouth ulcers
          and constipation. MedlinePlus adds drowsiness and bad dreams, and notes that people who
          used tobacco for longer or more heavily are more likely to have symptoms.
        </P>
        <P>
          <strong>A note on evidence:</strong> nicotine pouches arrived on the US market in 2016,
          and there are very few studies of what quitting them is like. What follows is based on
          well-established research on nicotine withdrawal in general. Pouch users may notice one
          difference: the urge often feels like an oral habit (something in your lip) as much as
          a nicotine craving.
        </P>
      </Section>

      <Section id="timeline" title="Zyn withdrawal timeline: what quitting looks like week by week">
        <P>
          This quitting Zyn timeline starts from your last pouch. If you tapered first, your peak
          may be milder. Timings come from the National Cancer Institute, MedlinePlus and
          Smokefree.gov.
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <caption className="sr-only">Zyn withdrawal timeline by stage</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  Stage
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold">
                  What usually happens
                </th>
                <th scope="col" className="py-2 font-semibold">
                  What helps
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {timeline.map((row) => (
                <tr key={row.stage} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">
                    {row.stage}
                  </th>
                  <td className="py-3 pr-4 leading-6">{row.whatHappens}</td>
                  <td className="py-3 leading-6">{row.whatHelps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          The NCI notes that weight gain after quitting tobacco is usually under 10 pounds. For a
          wider view of withdrawal from smoking, see the{" "}
          <Link className={LINK} href="/nicotine-withdrawal-timeline">
            nicotine withdrawal timeline
          </Link>{" "}
          and the{" "}
          <Link className={LINK} href="/quit-smoking-timeline">
            quit smoking timeline
          </Link>
          .
        </P>
      </Section>

      <Section id="coping" title="How to get through nicotine pouch withdrawal">
        <Bullets
          items={[
            <>
              <strong>Expect cravings to pass.</strong> Truth Initiative notes that many people
              find a craving passes in about five minutes with a distraction such as a walk, a
              chore, or a call to a friend.
            </>,
            <>
              <strong>Keep your mouth busy.</strong> The NCI suggests sugar-free gum or crunchy
              snacks like carrots, which also helps with the lip-habit side of pouch use.
            </>,
            <>
              <strong>Cut caffeine and move.</strong> Less caffeine and some physical activity
              help with restlessness and anxiety (NCI, Smokefree.gov).
            </>,
            <>
              <strong>Protect your sleep.</strong> Smokefree.gov suggests a regular sleep
              schedule, screens out of the bedroom, and less caffeine, alcohol, and late meals.
            </>,
            <>
              <strong>Consider NRT or medication.</strong> Nicotine gum, lozenges or a patch, or
              a prescription medicine, can ease withdrawal. Ask a pharmacist or clinician to match
              a dose to your pouch use. See{" "}
              <Link className={LINK} href="/quit-smoking-with-nicotine-gum">
                nicotine gum
              </Link>{" "}
              and{" "}
              <Link className={LINK} href="/quit-smoking-with-nicotine-lozenge">
                lozenges
              </Link>
              .
            </>,
            <>
              <strong>Avoid triggers for a while.</strong> Smokefree.gov recommends steering
              clear of your usual triggers, at least early on. More ideas are in the{" "}
              <Link className={LINK} href="/guides/cravings">
                cravings guide
              </Link>
              .
            </>,
          ]}
        />
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        Blou supports quitting Zyn and other nicotine pouches. On the hard days, SOS craving help
        is ready the second an urge hits, and your timeline shows how far you have come.
      </InlineAppCta>

      <Section id="benefits" title="Benefits of quitting Zyn">
        <P>
          Pouches are newer than cigarettes, so the long-term benefits of quitting them have not
          been measured the way they have for smoking. These are the changes the evidence
          supports, along with the limits:
        </P>
        <Bullets
          items={[
            <>
              <strong>Freedom from nicotine dependence.</strong> The FDA notes that nicotine keeps
              people using tobacco products even when they want to stop. Once withdrawal passes,
              you no longer plan your day around the next pouch. Truth Initiative notes that
              nicotine addiction can add to stress and make depression and anxiety symptoms worse.
            </>,
            <>
              <strong>No more nicotine-driven heart rate spikes.</strong> In a 2024 study of 15
              people who smoke, high-strength nicotine pouches raised heart rate during use by
              about as much as a cigarette, and arterial stiffness measures rose with the 20 mg
              and 30 mg pouches. Lower strengths had smaller effects. Quitting ends these
              repeated rises.
            </>,
            <>
              <strong>A break for your mouth.</strong> A 2024 systematic review found that
              changes to the lining of the mouth where the pouch sits were common in users, along
              with dry mouth, soreness and gum blisters. The review included only three small
              studies, and whether these changes fully reverse after quitting has not been well
              studied. See{" "}
              <Link className={LINK} href="/guides/sore-gums">
                sore gums after quitting
              </Link>
              .
            </>,
            <>
              <strong>Money back.</strong> Every can you do not buy is money saved. The{" "}
              <Link className={LINK} href="/tools/nicotine-pouch-calculator">
                nicotine pouch calculator
              </Link>{" "}
              shows what your habit costs.
            </>,
            <>
              <strong>A safer home for small children.</strong> Truth Initiative reports that
              accidental nicotine pouch ingestions by children under 6 rose by about 763% between
              2020 and 2023.
            </>,
            <>
              <strong>Pregnancy.</strong> The CDC notes that nicotine is toxic to developing
              fetuses, so stopping matters if you are pregnant or planning to be.
            </>,
          ]}
        />
        <P>
          <strong>Not everything improves right away.</strong> In a small Swedish study, people
          who stopped daily snus and nicotine pouches had slightly higher home systolic blood
          pressure (about 3.7 mmHg) and weight (about 1.8 kg) after 12 weeks. The authors said
          the benefits may not be immediate and called for longer studies. Staying active and
          watching portion sizes in the first months helps.
        </P>
      </Section>

      <Section id="when-to-get-help" title="When to get help" tone="amber">
        <P>Most withdrawal is uncomfortable but not dangerous. Reach out for support if:</P>
        <Bullets
          items={[
            "Low mood or anxiety lasts more than two weeks or keeps getting worse.",
            "Cravings are so strong that you keep going back despite a plan. A quitline coach or clinician can help adjust it.",
            "You have chest pain, a racing or irregular heartbeat, or trouble breathing. Get urgent medical care.",
            "A mouth sore or white patch does not heal.",
          ]}
        />
        <P>
          For free, confidential coaching, call 1-800-QUIT-NOW (CDC). If you are in distress or
          having thoughts of suicide, call or text 988 in the US.
        </P>
      </Section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Get through Zyn withdrawal with a plan"
        description="Blou supports quitting nicotine pouches and cigarettes. SOS help is there for cravings, and every pouch-free day adds to your visual timeline."
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
          This page is educational and is not medical advice. Withdrawal timelines are averages
          drawn from research on quitting tobacco; pouch-specific research is limited and your
          experience may differ. If you have a health condition, are pregnant, or take
          medication, talk to a clinician before changing how you use nicotine.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/quit-zyn" variant="secondary">
          ← How to quit Zyn
        </ButtonLink>
        <ButtonLink href="/are-zyns-bad-for-you" variant="secondary">
          Are Zyns bad for you? →
        </ButtonLink>
        <ButtonLink href="/zyn-vs-cigarettes" variant="secondary">
          Zyn vs cigarettes →
        </ButtonLink>
      </div>
    </div>
  );
}
