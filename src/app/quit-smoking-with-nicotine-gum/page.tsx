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
const MODIFIED = "2026-11-23";
const CAMPAIGN = "article_quit-smoking-with-nicotine-gum";
const PATH = "/quit-smoking-with-nicotine-gum";

const TITLE = "Nicotine gum to quit smoking: how to use it";
const DESCRIPTION =
  "How to use nicotine gum to quit smoking: the chew and park method, 2mg vs 4mg, how many pieces a day, how long, does it work, and common mistakes.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "nicotine gum to quit smoking",
    "quit smoking with nicotine gum",
    "how to use nicotine gum",
    "nicotine gum does it work",
    "chew and park nicotine gum",
    "nicotine gum cravings",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "How to use nicotine gum",
    href: "https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-nicotine-gum.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "Nicotine replacement therapy for smoking cessation (Cochrane review CD000146)",
    href: "https://www.cochrane.org/evidence/CD000146_nicotine-replacement-therapy-help-people-quit-smoking",
    publisher: "Cochrane Library",
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
    text: "The two strengths are 2 mg and 4 mg. The CDC says to consider 4 mg if you smoke your first cigarette within 30 minutes of waking.",
  },
  {
    name: "Chew slowly",
    text: "Bite down slowly until you feel a tingling in your mouth. Do not chew it fast like regular gum.",
  },
  {
    name: "Park it",
    text: "Park the gum between your cheek and gums and hold it there for about one minute.",
  },
  {
    name: "Repeat until the tingling stops",
    text: "Repeat the chew and park cycle. The CDC says this usually takes about 30 minutes. Move the parking spot now and then.",
  },
  {
    name: "Keep food and drink away",
    text: "Do not eat or drink for 15 minutes before or while you use the gum. The CDC says acidic drinks such as soda and coffee can make it work less well.",
  },
  {
    name: "Follow the schedule",
    text: "Use one piece every 1 to 2 hours for the first 6 weeks, at least 9 pieces a day. Then slow down over time.",
  },
];

const strengthRows: Array<{ when: string; pick: string }> = [
  {
    when: "First cigarette within 30 minutes of waking up",
    pick: "Consider 4 mg (CDC)",
  },
  {
    when: "First cigarette later in the morning",
    pick: "The lower 2 mg strength is the other option",
  },
  {
    when: "Fewer than 10 cigarettes a day, or not every day",
    pick: "Talk with a doctor about dosing (CDC)",
  },
];

const scheduleRows: Array<{ weeks: string; use: string }> = [
  { weeks: "Weeks 1–6", use: "1 piece every 1 to 2 hours (at least 9 a day)" },
  { weeks: "After week 6", use: "1 piece every 2 to 4 hours" },
  { weeks: "Then", use: "1 piece every 4 to 8 hours, until you stop (about 8 to 12 weeks in all)" },
];

const faqItems = [
  {
    question: "Does nicotine gum help you quit smoking?",
    answer:
      "Yes, on average. A Cochrane review of 56 trials found nicotine gum raised the chance of quitting by about 49% compared with placebo or no gum (risk ratio 1.49). That is a relative increase, so it works best with a plan for the cues that trigger cravings.",
  },
  {
    question: "Do you chew nicotine gum like regular gum?",
    answer:
      "No. Chew slowly until you feel tingling, then park it between your cheek and gums for about a minute. Repeat for about 30 minutes. Chewing it fast can cause mouth or jaw soreness, hiccups and an upset stomach (CDC).",
  },
  {
    question: "How many pieces of nicotine gum can I have a day?",
    answer:
      "Alone, the CDC schedule is one piece every 1 to 2 hours for the first 6 weeks, at least 9 a day. With the patch, use gum as needed for cravings, up to 24 pieces a day. Always check your own box.",
  },
  {
    question: "How long should I use nicotine gum?",
    answer:
      "The CDC says to lower the dose and how often you use it over about 8 to 12 weeks until you stop. The NHS says nicotine replacement works best used for at least 12 weeks. If you want to use it longer, ask your doctor or pharmacist.",
  },
  {
    question: "Is nicotine gum addictive?",
    answer:
      "It contains nicotine, so it is meant as a short-term step down, not something to use forever. The CDC schedule tapers it to zero. If you find you can't stop using it, ask a doctor or pharmacist for help with the taper.",
  },
  {
    question: "Can I use nicotine gum with the patch?",
    answer:
      "Yes. The CDC says to use gum as needed for cravings while on the patch, up to 24 pieces a day. See the combination NRT page for how people set this up.",
  },
  {
    question: "Can I use nicotine gum to quit vaping?",
    answer:
      "Many people do. The CDC dosing advice is written around cigarettes, so if you vape, ask a pharmacist or doctor which strength and schedule fit how much nicotine you use.",
  },
  {
    question: "What if I smoke while using the gum?",
    answer:
      "The CDC says not to stop using the gum. Throw out your cigarettes and carry on as directed. One slip does not undo your quit.",
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

export default function QuitSmokingWithNicotineGumPage() {
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
    name: "How to use nicotine gum",
    description: "Steps for choosing a strength and using nicotine gum with the chew and park method.",
    path: PATH,
    steps,
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={howToJsonLd} />

      <Breadcrumbs items={[{ name: "Quit smoking with nicotine gum", path: PATH }]} />

      <ArticleHeader
        kicker="NRT support"
        title="Nicotine gum to quit smoking: how to use it"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/guides/cravings" variant="secondary">
            Read the cravings playbook →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated November 2026.</strong> Nicotine gum
          only works if you use it the right way. This page covers the chew and park method, the
          schedule, and the mistakes that make it fail.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "how-to-use", label: "How to use nicotine gum" },
          { id: "strength", label: "2mg vs 4mg" },
          { id: "how-many", label: "How many a day, and for how long" },
          { id: "does-it-work", label: "Does it work?" },
          { id: "mistakes", label: "Common mistakes" },
          { id: "side-effects", label: "Side effects" },
          { id: "with-patch", label: "Gum with the patch" },
          { id: "vaping", label: "Gum for quitting vaping" },
          { id: "cue-cravings", label: "Cue-based cravings" },
          { id: "slips", label: "If you slip" },
          { id: "ask-first", label: "Who should ask a doctor first" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Chew a piece of nicotine gum slowly until you feel tingling, then park it between your cheek and gums for about a minute. Repeat for about 30 minutes. Use 4 mg if you smoke within 30 minutes of waking. In the first 6 weeks, use one piece every 1 to 2 hours (at least 9 a day), then taper over 8 to 12 weeks. Don't eat or drink for 15 minutes before or while you use it."
          facts={[
            "Chew and park, don't chew like regular gum (CDC).",
            "Gum raised quit rates by about 49% in a Cochrane review of 56 trials.",
            "Coffee and soda can make gum work less well (CDC).",
          ]}
        />
      </section>

      <Section id="how-to-use" title="How to use nicotine gum: the chew and park method">
        <P>These steps come from the CDC.</P>
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
          Set a quit date and plan for your top cues first. Our{" "}
          <Link className={LINK} href="/prepare-to-quit-smoking">
            prep checklist
          </Link>{" "}
          walks you through it.
        </P>
      </Section>

      <Section id="strength" title="Nicotine gum 2mg vs 4mg: which to use">
        <P>
          Gum comes in 2 mg and 4 mg (CDC). The CDC says to choose by how soon you smoke after
          waking and how much you smoke.
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">Nicotine gum strength by smoking pattern</caption>
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
        <P>Brands can differ, so follow the directions on your own box.</P>
      </Section>

      <Section id="how-many" title="How many pieces of nicotine gum a day, and for how long">
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">Nicotine gum schedule by week</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  When
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
            "For a strong craving, the CDC says you can chew a second piece within the hour.",
            "With the patch, use gum as needed for cravings, up to 24 pieces a day (CDC).",
            "The NHS says nicotine replacement works best used for at least 12 weeks.",
          ]}
        />
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        Gum covers the nicotine. Blou&apos;s SOS craving help is there the second a cue craving
        hits, and your timeline shows every smoke-free day you have already put behind you.
      </InlineAppCta>

      <Section id="does-it-work" title="Does nicotine gum work?">
        <P>
          Yes, on average. A Cochrane review pooled 56 trials with 22,581 people. It found nicotine
          gum raised the chance of quitting by about 49% compared with placebo or no gum (risk
          ratio 1.49). All forms of nicotine replacement together raised it by about 55%.
        </P>
        <P>
          That is a relative gain, not a promise. Gum helps with withdrawal, and you still need a
          plan for the habits tied to smoking.
        </P>
      </Section>

      <Section id="mistakes" title="Common nicotine gum mistakes">
        <Bullets
          items={[
            "Chewing it like regular gum. This can cause sore jaws, hiccups and an upset stomach (CDC). Chew and park instead.",
            "Drinking coffee or soda right before. The CDC says acidic drinks can weaken it. Wait 15 minutes.",
            "Using too few pieces. In weeks 1 to 6 the CDC says at least 9 a day, on a clock, not only when the urge is huge.",
            "Stopping too soon. The CDC taper runs 8 to 12 weeks.",
            "Swallowing a lot of saliva while chewing. The CDC says not to chew, suck or swallow it if you get stomach discomfort.",
          ]}
        />
      </Section>

      <Section id="side-effects" title="Nicotine gum side effects">
        <Bullets
          items={[
            "Mouth or jaw soreness: you are chewing too hard, so park it more.",
            "Hiccups, stomach upset or extra saliva: use a lower dose or wait longer between pieces (CDC).",
            "Light-headedness, nausea or throat irritation: this can mean too much nicotine too fast. Slow down (CDC).",
          ]}
        />
        <P>
          The CDC says gum is sugar-free but can stick to dentures or dental work. Ask a pharmacist
          about other options if that is you.
        </P>
      </Section>

      <Section id="with-patch" title="Nicotine gum with the patch">
        <P>
          The patch gives steady nicotine all day. Gum handles cravings as they happen (CDC). The
          NHS says using more than one type of nicotine replacement can work well. Read{" "}
          <Link className={LINK} href="/combination-nrt-quit-smoking">
            combination NRT
          </Link>
          ,{" "}
          <Link className={LINK} href="/nicotine-patch-vs-gum">
            patch vs gum
          </Link>{" "}
          and{" "}
          <Link className={LINK} href="/quit-smoking-with-nicotine-patch">
            how to use a nicotine patch
          </Link>
          . Prefer something that dissolves? See{" "}
          <Link className={LINK} href="/quit-smoking-with-nicotine-lozenge">
            nicotine lozenges
          </Link>
          .
        </P>
      </Section>

      <Section id="vaping" title="Nicotine gum for quitting vaping">
        <P>
          People who vape also use gum to step down. The CDC dosing advice is written around
          cigarettes, so if you vape, ask a pharmacist or doctor which strength and schedule fit
          the nicotine you use. Our{" "}
          <Link className={LINK} href="/quit-vaping">
            quit vaping guide
          </Link>{" "}
          has the rest of the plan.
        </P>
      </Section>

      <Section id="cue-cravings" title="Cue-based cravings (the long game)">
        <P>
          Even with gum, cues can trigger urges: coffee, driving, finishing a meal, stress,
          alcohol. A replacement routine beats willpower. Start with the{" "}
          <Link className={LINK} href="/guides/cravings">
            cravings guide
          </Link>
          , plan for{" "}
          <Link className={LINK} href="/coffee-and-quitting-smoking">
            coffee
          </Link>{" "}
          (and remember it can weaken the gum), and go easy on{" "}
          <Link className={LINK} href="/alcohol-and-quitting-smoking">
            alcohol
          </Link>{" "}
          early on.
        </P>
        <Bullets
          items={[
            "Track each craving for two weeks: time, cue and what you did.",
            "Review it for 30 seconds each night and change one thing for tomorrow.",
          ]}
        />
      </Section>

      <Section id="slips" title="If you slip" tone="amber">
        <P>
          The CDC says not to stop using the gum if you smoke. Throw out the cigarettes and carry
          on as directed. Read{" "}
          <Link className={LINK} href="/i-smoked-one-cigarette">
            I smoked one cigarette
          </Link>{" "}
          for the first-hour playbook.
        </P>
        <P>
          Keep gum away from children and pets. If someone swallows it by accident, call Poison
          Control at 1-800-222-1222 (CDC).
        </P>
      </Section>

      <Section id="ask-first" title="Who should ask a doctor first">
        <P>The CDC says to talk to a doctor before starting if you have:</P>
        <Bullets
          items={[
            "Had a heart attack in the last two weeks",
            "A serious heart rhythm problem",
            "Serious or worsening chest pain",
            "Jaw joint (TMJ) disease",
            "Are pregnant or breastfeeding, or are under 18",
          ]}
        />
        <P>
          Don&apos;t stop any medicine you have been prescribed without asking your doctor. For
          free coaching, call 1-800-QUIT-NOW or see{" "}
          <Link className={LINK} href="/quit-smoking-help">
            free quit-smoking help by state
          </Link>
          .
        </P>
      </Section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Pair your gum with a plan for cravings"
        description="Blou gives you SOS craving help for the moments between pieces, lung checks, and every smoke-free milestone on one timeline."
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
        <ButtonLink href="/quit-smoking-with-nicotine-lozenge" variant="secondary">
          Nicotine lozenge →
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
