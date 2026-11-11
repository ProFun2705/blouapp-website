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

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-11-11";
const CAMPAIGN = "article_quit-smoking-with-nicotine-lozenge";
const PATH = "/quit-smoking-with-nicotine-lozenge";

const TITLE = "Nicotine lozenge: 2mg vs 4mg and how to use it";
const DESCRIPTION =
  "How to use a nicotine lozenge to quit smoking: 2mg vs 4mg, how many a day, how long to use them, side effects, and using them with the patch.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "nicotine lozenge",
    "nicotine lozenge to quit smoking",
    "nicotine lozenge 4mg",
    "nicotine lozenge 2mg",
    "how to use nicotine lozenge",
    "quit smoking lozenges",
    "nicotine lozenge with patch",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "How to use the nicotine lozenge",
    href: "https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-the-nicotine-lozenge.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "Good Sense Nicotine (nicotine polacrilex) lozenge Drug Facts label",
    href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f55f79b-a5ab-4e9e-9219-a9b8f401b792",
    publisher: "DailyMed, U.S. National Library of Medicine (FDA-regulated OTC label)",
  },
  {
    label: "Find the best stop-smoking products for you",
    href: "https://www.nhs.uk/conditions/stop-smoking-treatments/",
    publisher: "NHS",
  },
];

const steps: Array<{ name: string; text: string }> = [
  {
    name: "Pick your strength",
    text: "If you smoke your first cigarette within 30 minutes of waking, use 4 mg. If it is more than 30 minutes after waking, use 2 mg.",
  },
  {
    name: "Put one in your mouth",
    text: "Place a single lozenge in your mouth and let it dissolve slowly. The CDC says to move it from one side of your mouth to the other. Do not chew it or swallow it whole.",
  },
  {
    name: "Give it 20 to 30 minutes",
    text: "The CDC says a lozenge takes about 20 to 30 minutes to dissolve. Swallow as little as you can while it does.",
  },
  {
    name: "Keep food and drink away",
    text: "Do not eat or drink for 15 minutes before a lozenge or while it is in your mouth. The CDC notes that acidic drinks such as soda and coffee can make it work less well.",
  },
  {
    name: "Use one at a time",
    text: "Do not use more than one lozenge at once, and do not start a new one right after another.",
  },
  {
    name: "Follow the schedule",
    text: "Use one every 1 to 2 hours in weeks 1 to 6, then space them out. Try to use one before a craving builds, not after.",
  },
];

const strengthRows: Array<{ when: string; pick: string }> = [
  {
    when: "First cigarette within 30 minutes of waking up",
    pick: "4 mg lozenge",
  },
  {
    when: "First cigarette more than 30 minutes after waking up",
    pick: "2 mg lozenge",
  },
  {
    when: "Using a lozenge together with the nicotine patch",
    pick: "The CDC says you may start with 2 mg",
  },
];

const scheduleRows: Array<{ weeks: string; use: string }> = [
  { weeks: "Weeks 1–6", use: "1 lozenge every 1 to 2 hours (at least 9 a day)" },
  { weeks: "Weeks 7–9", use: "1 lozenge every 2 to 4 hours" },
  { weeks: "Weeks 10–12", use: "1 lozenge every 4 to 8 hours" },
];

const faqItems = [
  {
    question: "What is the difference between 2mg and 4mg nicotine lozenges?",
    answer:
      "The number is the nicotine in each lozenge. The label picks the strength by how soon you smoke after waking. If your first cigarette is within 30 minutes, use 4 mg. If it is later, use 2 mg. The CDC says you may start with 2 mg if you also use the patch.",
  },
  {
    question: "How many nicotine lozenges can I have a day?",
    answer:
      "No more than 20 a day and no more than 5 in 6 hours (label, CDC). In the first 6 weeks the label says to use at least 9 a day, which means one every 1 to 2 hours while you are awake.",
  },
  {
    question: "Do you chew or suck a nicotine lozenge?",
    answer:
      "Neither. Let it dissolve slowly and swallow as little as you can. The CDC says to move it from one side of your mouth to the other.",
  },
  {
    question: "How long should I use nicotine lozenges?",
    answer:
      "The label schedule runs 12 weeks. The CDC says to lower the dose over time, usually after 8 to 12 weeks. The NHS says to use nicotine replacement for at least 12 weeks, or longer if you need it. Talk to your doctor or pharmacist if you want to go longer.",
  },
  {
    question: "Can I use nicotine lozenges with the patch?",
    answer:
      "Yes. The CDC says you can start with both or add a lozenge if withdrawal continues on the patch. The NHS says using more than one kind of nicotine replacement can work well. Your box and a pharmacist can help you set the doses.",
  },
  {
    question: "What if I get hiccups or heartburn from the lozenge?",
    answer:
      "The CDC says to try a lower dose or wait longer between lozenges. If you get mouth problems, ongoing indigestion or a bad sore throat, the label says to stop and ask a doctor.",
  },
  {
    question: "Can I eat or drink while a lozenge is in my mouth?",
    answer:
      "No. Wait 15 minutes after eating or drinking before you start one, and don't eat or drink while it dissolves (label, CDC).",
  },
  {
    question: "Can I smoke while using nicotine lozenges?",
    answer:
      "Try not to, because mixing cigarettes with nicotine replacement adds nicotine on top. If you slip, it does not mean you failed. Put the cigarettes away and carry on with your plan. If you feel sick, dizzy or your heart races, stop and call a doctor or Poison Control at 1-800-222-1222.",
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

export default function QuitSmokingWithNicotineLozengePage() {
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
    name: "How to use a nicotine lozenge",
    description: "Steps for choosing a strength and using a nicotine lozenge when you quit smoking.",
    path: PATH,
    steps,
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={howToJsonLd} />

      <Breadcrumbs items={[{ name: "Quit smoking with nicotine lozenge", path: PATH }]} />

      <ArticleHeader
        kicker="NRT support"
        title="Nicotine lozenge: 2mg vs 4mg and how to use it"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/combination-nrt-quit-smoking" variant="secondary">
            Lozenge + patch →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated November 2026.</strong> A nicotine
          lozenge gives you a quick dose of nicotine when a craving hits. Your job is to pick the
          right strength, use it the right way, and keep a plan for the cues it does not cover.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "how-to-use", label: "How to use a nicotine lozenge" },
          { id: "strength", label: "2mg vs 4mg" },
          { id: "how-many", label: "How many a day, and for how long" },
          { id: "side-effects", label: "Side effects" },
          { id: "with-patch", label: "Lozenge with the patch" },
          { id: "cravings", label: "Still craving?" },
          { id: "slips", label: "If you smoke while using lozenges" },
          { id: "ask-first", label: "Who should ask a doctor first" },
          { id: "get-lozenges", label: "Where to get lozenges and free help" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Use a 4 mg nicotine lozenge if you smoke your first cigarette within 30 minutes of waking, and a 2 mg lozenge if it is later. Put one in your mouth and let it dissolve slowly, without chewing or swallowing it whole. Don't eat or drink for 15 minutes before or while it is in your mouth. In weeks 1 to 6, use one every 1 to 2 hours, never more than 20 a day."
          facts={[
            "Strength depends on how soon after waking you smoke (label, CDC).",
            "Maximum: 5 lozenges in 6 hours and 20 a day (label, CDC).",
            "Lozenge plus patch is a common combination (CDC, NHS).",
          ]}
        />
      </section>

      <Section id="how-to-use" title="How to use a nicotine lozenge, step by step">
        <P>These steps come from the CDC and the Drug Facts label on a store-brand lozenge.</P>
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
          Getting set up a week ahead helps. Our{" "}
          <Link className={LINK} href="/prepare-to-quit-smoking">
            prep checklist
          </Link>{" "}
          covers what to buy and which cues to plan for.
        </P>
      </Section>

      <Section id="strength" title="Nicotine lozenge 2mg vs 4mg: which to use">
        <P>
          Lozenges come in 2 mg and 4 mg, in regular and mini sizes (CDC). The label picks the
          strength by how soon you smoke after waking up. People who smoke early tend to be more
          dependent, so they start higher.
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">Nicotine lozenge strength by time to first cigarette</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  If you
                </th>
                <th scope="col" className="py-2 font-semibold">
                  Use
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {strengthRows.map((row) => (
                <tr key={row.when} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">
                    {row.when}
                  </th>
                  <td className="py-3 leading-6">{row.pick}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          If you smoke fewer than 10 cigarettes a day or don&apos;t smoke every day, the CDC says
          to talk with your doctor about dosing. Brands can differ, so follow your own box.
        </P>
      </Section>

      <Section id="how-many" title="How many nicotine lozenges a day, and how long to use them">
        <P>
          This is the label schedule for the 2 mg lozenge. To improve your chances of quitting, the
          label says to use at least 9 a day for the first 6 weeks.
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">Nicotine lozenge schedule by week</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  Weeks
                </th>
                <th scope="col" className="py-2 font-semibold">
                  How often
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {scheduleRows.map((row) => (
                <tr key={row.weeks} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">
                    {row.weeks}
                  </th>
                  <td className="py-3 leading-6">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Bullets
          items={[
            "Never more than 5 lozenges in 6 hours, and never more than 20 in a day (label, CDC).",
            "The CDC says to lower the dose over time, usually after 8 to 12 weeks.",
            "The NHS advises using nicotine replacement for at least 12 weeks, or longer if you need it.",
          ]}
        />
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        The lozenge covers the fast moments. Blou&apos;s SOS craving help is there the second an
        urge hits, and your timeline shows every smoke-free day you have already put behind you.
      </InlineAppCta>

      <Section id="side-effects" title="Nicotine lozenge side effects and what to change">
        <P>The CDC lists these common ones, with a simple fix for each:</P>
        <Bullets
          items={[
            "Nausea, hiccups or heartburn: try a lower dose or wait longer between lozenges.",
            "Headache, cough or an upset stomach: same fix, a lower dose or more time between lozenges.",
            "Trouble sleeping: skip lozenges for several hours before bed.",
          ]}
        />
        <P>
          The label says to stop and ask a doctor if mouth problems, ongoing indigestion, a bad
          sore throat, an irregular heartbeat or palpitations, or signs of an allergic reaction
          (trouble breathing, rash) appear.
        </P>
      </Section>

      <Section id="with-patch" title="Using a nicotine lozenge with the patch">
        <P>
          The patch gives steady nicotine all day. The lozenge handles cravings as they happen
          (CDC). You can start with both, or add a lozenge if withdrawal continues on the patch.
          The CDC says you may start with the 2 mg lozenge in that case. The NHS says using more
          than one type of nicotine replacement can work well.
        </P>
        <P>
          When both are in play, the CDC says no more than 5 lozenges in 6 hours and no more than
          20 a day. After 6 weeks, space them out to one every 2 to 4 hours, then every 4 to 8.
          See{" "}
          <Link className={LINK} href="/combination-nrt-quit-smoking">
            combination NRT
          </Link>
          ,{" "}
          <Link className={LINK} href="/quit-smoking-with-nicotine-patch">
            how to use a nicotine patch
          </Link>{" "}
          and the{" "}
          <Link className={LINK} href="/tools/nicotine-patch-plan">
            patch plan tool
          </Link>
          . Prefer gum? Compare it on{" "}
          <Link className={LINK} href="/quit-smoking-with-nicotine-gum">
            nicotine gum
          </Link>{" "}
          and{" "}
          <Link className={LINK} href="/nicotine-patch-vs-gum">
            patch vs gum
          </Link>
          .
        </P>
      </Section>

      <Section id="cravings" title="Still craving on lozenges?">
        <P>
          That is normal. A lozenge takes the edge off nicotine withdrawal, but cravings tied to
          coffee, the car or stress are learned habits. The CDC also says to use a lozenge before a
          craving builds, not after.
        </P>
        <Bullets
          items={[
            "Use one on your schedule, not only when the urge is already strong.",
            "Wait out the first minutes: drink water (not soda or coffee, which can weaken the lozenge, per the CDC), walk, or do something with your hands.",
            <>
              Write down the cue each night. More ideas in the{" "}
              <Link className={LINK} href="/guides/cravings">
                cravings guide
              </Link>
              .
            </>,
          ]}
        />
      </Section>

      <Section id="slips" title="If you smoke while using lozenges" tone="amber">
        <P>
          A slip happens to a lot of people, and it does not undo your quit. Put the cigarettes
          away and carry on. Read{" "}
          <Link className={LINK} href="/i-smoked-one-cigarette">
            I smoked one cigarette
          </Link>{" "}
          for what to do next.
        </P>
        <P>
          Signs of too much nicotine are nausea, vomiting, dizziness, diarrhea, weakness and a fast
          heartbeat (label). If you notice them, stop and get medical help or call Poison Control
          at 1-800-222-1222. Keep lozenges away from children and pets.
        </P>
      </Section>

      <Section id="ask-first" title="Who should ask a doctor first">
        <P>
          Ask a doctor before you start if you (label, CDC):
        </P>
        <Bullets
          items={[
            "Have heart disease, had a heart attack recently, or have an irregular heartbeat or serious chest pain",
            "Have high blood pressure that is not controlled with medicine",
            "Have a stomach ulcer or diabetes, or a history of seizures",
            "Take a prescription medicine for depression or asthma, or use a non-nicotine stop-smoking drug",
            "Are pregnant or breastfeeding",
            "Are under 18",
          ]}
        />
        <P>Don&apos;t stop any medicine you have been prescribed. Ask your doctor first.</P>
      </Section>

      <Section id="get-lozenges" title="Where to get nicotine lozenges (and free help)">
        <P>
          You can buy lozenges without a prescription at pharmacies and supermarkets (NHS). Free
          support makes them easier to use well:
        </P>
        <Bullets
          items={[
            <>
              <strong>US:</strong> call 1-800-QUIT-NOW (1-800-784-8669) for your state quitline, or
              text QUITNOW to 333888 (CDC). Find yours on{" "}
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
        title="Pair your lozenges with a plan for cravings"
        description="Blou gives you SOS craving help for the moments between lozenges, lung checks, and every smoke-free milestone on one timeline."
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
        <ButtonLink href="/quit-smoking-with-nicotine-gum" variant="secondary">
          Nicotine gum →
        </ButtonLink>
        <ButtonLink href="/quit-smoking-with-nicotine-patch" variant="secondary">
          Nicotine patch →
        </ButtonLink>
        <ButtonLink href="/nicotine-withdrawal-timeline" variant="secondary">
          Withdrawal timeline →
        </ButtonLink>
      </div>
    </div>
  );
}
