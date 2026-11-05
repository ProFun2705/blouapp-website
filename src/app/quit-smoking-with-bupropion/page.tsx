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

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-11-05";
const CAMPAIGN = "article_quit-smoking-with-bupropion";
const PATH = "/quit-smoking-with-bupropion";

const TITLE = "Wellbutrin for quitting smoking (bupropion)";
const H1 = "Wellbutrin for quitting smoking: how bupropion works";
const DESCRIPTION =
  "Wellbutrin for quitting smoking (bupropion): you need a prescription, start 1–2 weeks before your quit day, take it about 12 weeks. Side effects and the patch.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "wellbutrin for quitting smoking",
    "wellbutrin to stop smoking",
    "bupropion for smoking cessation",
    "bupropion stop smoking",
    "wellbutrin and smoking",
    "bupropion quit smoking dosage",
    "zyban",
    "bupropion and nicotine patch",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "How to use bupropion SR",
    href: "https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-bupropion-sr.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "Bupropion hydrochloride SR tablets, prescribing information (updated September 30, 2025)",
    href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a591e33a-52f0-41c8-a00b-4a1afcc3dc4c",
    publisher: "DailyMed, U.S. National Library of Medicine (FDA-approved label)",
  },
  {
    label: "Bupropion (drug information)",
    href: "https://medlineplus.gov/druginfo/meds/a695033.html",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
  },
  {
    label: "Quit smoking with nicotine-free medicines",
    href: "https://www.nhs.uk/better-health/quit-smoking/ready-to-quit-smoking/quit-with-nicotine-free-medicines/",
    publisher: "NHS",
  },
  {
    label: "How to use varenicline",
    href: "https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-varenicline.html",
    publisher: "Centers for Disease Control and Prevention",
  },
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
];

const scheduleRows: Array<{ when: string; what: string }> = [
  {
    when: "1–2 weeks before your quit day",
    what: "Start the pill while you still smoke. It takes about a week to build up in your blood (label). The CDC says most people start 1–2 weeks before their quit day.",
  },
  {
    when: "Days 1–3",
    what: "One 150 mg tablet a day.",
  },
  {
    when: "Day 4 onward",
    what: "One 150 mg tablet twice a day, at least 8 hours apart. No more than 300 mg a day.",
  },
  {
    when: "Quit day",
    what: "Stop smoking on a date within your first 2 weeks on the pill (label).",
  },
  {
    when: "Weeks 7–12",
    what: "Keep taking it. The label says 7 to 12 weeks. The CDC says most people take it for 12 weeks.",
  },
  {
    when: "After 12 weeks",
    what: "Your doctor decides if longer use would help you (label, CDC).",
  },
];

const compareRows: Array<{ label: string; bupropion: string; varenicline: string; patch: string }> = [
  {
    label: "Nicotine in it?",
    bupropion: "No",
    varenicline: "No",
    patch: "Yes",
  },
  {
    label: "Prescription?",
    bupropion: "Yes",
    varenicline: "Yes",
    patch: "No, sold over the counter",
  },
  {
    label: "When to start",
    bupropion: "1–2 weeks before quit day",
    varenicline: "1 week before quit day (or pick a quit day 8–35 days in)",
    patch: "On your quit day",
  },
  {
    label: "Usual length",
    bupropion: "7–12 weeks",
    varenicline: "12 weeks",
    patch: "Step down after about 8–12 weeks",
  },
  {
    label: "Common side effects",
    bupropion: "Trouble sleeping, dry mouth, dizziness",
    varenicline: "Nausea, trouble sleeping, vivid dreams",
    patch: "Skin redness, vivid dreams",
  },
];

const faqItems = [
  {
    question: "Does Wellbutrin help you quit smoking?",
    answer:
      "Yes, bupropion (the medicine in Wellbutrin) is approved to help people stop smoking. The NHS says it eases cravings and withdrawal. It works best as part of a plan with a quit date and support, such as 1-800-QUIT-NOW.",
  },
  {
    question: "Is Wellbutrin the same as Zyban?",
    answer:
      "They contain the same medicine, bupropion. Zyban was the brand sold for quitting smoking, and MedlinePlus now lists it as discontinued. Today a doctor usually prescribes generic bupropion SR for quitting.",
  },
  {
    question: "How long before Wellbutrin works for smoking?",
    answer:
      "It takes about a week of daily doses to build up in your body, according to the label. That is why you start it 1–2 weeks before your quit day, while you still smoke.",
  },
  {
    question: "How long do you take bupropion to quit smoking?",
    answer:
      "Usually 7 to 12 weeks (label). The CDC says most people take it for 12 weeks. Your doctor may keep you on it longer if it is helping.",
  },
  {
    question: "Can you smoke while taking Wellbutrin?",
    answer:
      "In the first 1–2 weeks, yes. The label says to start it while you still smoke and set a quit date within the first 2 weeks. After your quit date, if you slip, don't stop the pill on your own. Talk to your doctor and keep going.",
  },
  {
    question: "Can you use a nicotine patch with Wellbutrin?",
    answer:
      "Yes, with your doctor's OK. The CDC says bupropion can be combined with nicotine patches under a doctor's care. The label says to check your blood pressure, since it can go up with the two together.",
  },
  {
    question: "What are the side effects of Wellbutrin for quitting smoking?",
    answer:
      "The most common are trouble sleeping, dry mouth, dizziness, nausea, constipation and anxiety (label, CDC). Rare but serious ones include seizures and changes in mood or behavior. Stop and call your doctor if you notice mood changes or thoughts of self-harm.",
  },
  {
    question: "Can I drink alcohol on Wellbutrin?",
    answer:
      "The CDC says to limit or avoid alcohol while taking bupropion. Don't suddenly stop heavy drinking while on it either, because that raises seizure risk (label). Talk to your doctor about what is safe for you.",
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

export default function QuitSmokingWithBupropionPage() {
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

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs items={[{ name: "Wellbutrin (bupropion) for quitting", path: PATH }]} />

      <ArticleHeader
        kicker="Prescription medicine"
        title={H1}
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/quit-smoking-with-varenicline" variant="secondary">
            Varenicline (Chantix) →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated November 2026.</strong> Doctors
          prescribe Wellbutrin for quitting smoking because it contains bupropion, the same
          medicine once sold as Zyban. Here is how it is used for quitting, what to expect week by week, and what to ask your
          doctor.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "same-as-zyban", label: "Is Wellbutrin the same as Zyban?" },
          { id: "how-it-helps", label: "How bupropion helps you quit" },
          { id: "schedule", label: "How it is taken, week by week" },
          { id: "side-effects", label: "Side effects" },
          { id: "who-should-not", label: "Who should not take it" },
          { id: "smoking-on-it", label: "Can you smoke while taking it?" },
          { id: "with-patch", label: "Wellbutrin with a nicotine patch" },
          { id: "compare", label: "Wellbutrin vs Chantix vs the patch" },
          { id: "get-it", label: "Getting a prescription and free help" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Wellbutrin (bupropion) can help you quit smoking. It is a prescription pill with no nicotine that eases cravings and withdrawal. You start it while you still smoke, 1–2 weeks before your quit day, and most people take it for about 12 weeks. Your doctor checks that it is safe for you first, mainly if you have had seizures or an eating disorder."
          facts={[
            "You need a prescription, and the pill has no nicotine (CDC).",
            "Set your quit day within the first 2 weeks of taking it (label).",
            "Stop and call your doctor if your mood or behavior changes (CDC, label).",
          ]}
        />
      </section>

      <Section id="same-as-zyban" title="Is Wellbutrin the same as Zyban?">
        <P>
          Yes, they hold the same medicine. The label for bupropion SR says it has the same active
          ingredient as Wellbutrin, Wellbutrin SR and Wellbutrin XL. Zyban was the brand made for
          quitting smoking. MedlinePlus now lists it as discontinued.
        </P>
        <P>
          Today a doctor usually prescribes generic bupropion SR to help you quit. You may hear it
          called by any of these names.
        </P>
        <P>
          <strong>Already taking Wellbutrin for depression?</strong> Don&apos;t add a second
          bupropion product. The CDC lists that as a reason to check with your doctor first. Tell
          your doctor you want to quit and ask how your current dose fits in. More on quitting
          with low mood in{" "}
          <Link className={LINK} href="/quit-smoking-with-depression">
            quitting smoking with depression
          </Link>
          .
        </P>
      </Section>

      <Section id="how-it-helps" title="How bupropion helps you quit">
        <P>
          The NHS says bupropion works by changing chemicals in your brain to reduce cravings and
          withdrawal symptoms. It started out as an antidepressant, and doctors found it also
          helps people stop smoking.
        </P>
        <P>The CDC lists a few extra points in its favor:</P>
        <Bullets
          items={[
            "It has no nicotine, so you are not swapping one nicotine product for another.",
            <>
              It may help delay weight gain after you quit. See{" "}
              <Link className={LINK} href="/quit-smoking-without-gaining-weight">
                quitting without gaining weight
              </Link>
              .
            </>,
            "If you have depression, it may help with that too.",
          ]}
        />
        <P>
          Want a pill-free or nicotine-free plan? Compare the options in{" "}
          <Link className={LINK} href="/quit-smoking-without-nrt">
            quitting smoking without NRT
          </Link>
          .
        </P>
      </Section>

      <Section id="schedule" title="How to take Wellbutrin to quit smoking, week by week">
        <P>
          This is the schedule on the U.S. label for bupropion SR, which your prescriber works
          from. It is not a plan to follow on your own. Your doctor may change it for you.
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">Bupropion SR schedule for quitting smoking, from the U.S. label</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  When
                </th>
                <th scope="col" className="py-2 font-semibold">
                  What usually happens
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {scheduleRows.map((row) => (
                <tr key={row.when} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">
                    {row.when}
                  </th>
                  <td className="py-3 leading-6">{row.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Bullets
          items={[
            "Swallow the tablet whole. Don't crush, chew or split it. You can take it with or without food (label, CDC).",
            <>
              If it keeps you up, the CDC says to take the first dose right after you wake and the
              second 8 hours later, not at bedtime. Sleep tips are in the{" "}
              <Link className={LINK} href="/guides/insomnia">
                insomnia guide
              </Link>
              .
            </>,
            "Missed a dose? Never take two at once. Ask your pharmacist what to do, because advice differs between sources.",
          ]}
        />
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        The pill takes the edge off. Cravings tied to coffee, the car or stress still show up.
        Blou&apos;s SOS craving help is there for those moments, and your timeline shows every
        smoke-free day.
      </InlineAppCta>

      <Section id="side-effects" title="Side effects of bupropion">
        <P>Most side effects are mild. The most common ones are (label, CDC, MedlinePlus):</P>
        <Bullets
          items={[
            "Trouble sleeping",
            "Dry mouth",
            "Dizziness or headache",
            "Nausea or constipation",
            "Feeling anxious or jittery",
          ]}
        />
        <P>
          <strong>Rare but serious.</strong> Get help fast if you notice any of these:
        </P>
        <Bullets
          items={[
            "A seizure. The CDC puts the risk at about 1 in 1,000 people. The label says the risk goes up with higher doses.",
            "Changes in mood or behavior, such as feeling hostile, agitated or depressed, or having thoughts of suicide. Stop the pill and call your doctor right away (CDC, label).",
            "Signs of an allergic reaction, such as a rash, hives, or swelling of the face or throat (MedlinePlus).",
            "Higher blood pressure. Have it checked regularly, mainly if you also use nicotine replacement (MedlinePlus, label).",
          ]}
        />
        <P>
          In an emergency, call 911. For an overdose, call Poison Control at 1-800-222-1222 (CDC,
          MedlinePlus).
        </P>
      </Section>

      <Section id="who-should-not" title="Who should not take Wellbutrin to quit" tone="amber">
        <P>Tell your doctor before you start if any of these apply to you (label, CDC):</P>
        <Bullets
          items={[
            "You have had a seizure or have a seizure disorder",
            "You have or had bulimia or anorexia",
            "You are suddenly stopping alcohol, sedatives or seizure medicine",
            "You took an MAO inhibitor in the last 14 days",
            "You already take another medicine with bupropion in it",
            "You have liver disease",
            "You are pregnant, could be pregnant, or are breastfeeding",
            "You are under 18",
          ]}
        />
        <P>
          Don&apos;t stop any medicine you have been prescribed to make room for this one. Your
          doctor will sort that out with you.
        </P>
      </Section>

      <Section id="smoking-on-it" title="Can you smoke while taking Wellbutrin?">
        <P>
          At first, yes. The label says to start bupropion while you still smoke, because it needs
          about a week to build up. Then you stop smoking on a quit day within your first 2 weeks.
        </P>
        <P>
          If you slip after your quit day, it doesn&apos;t erase your progress. Don&apos;t stop the
          pill on your own. Throw out the cigarettes, tell your doctor, and keep going.
        </P>
        <P>
          The label says that if you have not quit after 7 to 12 weeks, it is unlikely to work on
          that try. That is a signal to change the plan with your doctor, not a sign you failed.
          Read{" "}
          <Link className={LINK} href="/trying-to-quit-smoking-again">
            trying to quit smoking again
          </Link>{" "}
          for what to change next time.
        </P>
        <P>
          Alcohol is a common trigger for slips. The CDC says to limit or avoid it while you take
          bupropion.
        </P>
      </Section>

      <Section id="with-patch" title="Wellbutrin with a nicotine patch">
        <P>
          You can use both, with your doctor&apos;s OK. The CDC says bupropion can be combined
          with nicotine patches under the care of a doctor. The label says the combination may be
          prescribed and that your blood pressure should be checked, since it can rise.
        </P>
        <P>
          How to wear the patch is covered in{" "}
          <Link className={LINK} href="/quit-smoking-with-nicotine-patch">
            how to use a nicotine patch
          </Link>
          . For pairing a patch with gum or a lozenge, see{" "}
          <Link className={LINK} href="/combination-nrt-quit-smoking">
            combination NRT
          </Link>
          .
        </P>
      </Section>

      <Section id="compare" title="Wellbutrin vs Chantix vs the nicotine patch">
        <P>
          Varenicline (Chantix) is the other nicotine-free prescription pill. The patch is the most
          common nicotine option. Here is how they line up, from the CDC pages and U.S. labels.
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <caption className="sr-only">Bupropion compared with varenicline and the nicotine patch</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  &nbsp;
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold">
                  Bupropion (Wellbutrin)
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold">
                  Varenicline (Chantix)
                </th>
                <th scope="col" className="py-2 font-semibold">
                  Nicotine patch
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {compareRows.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">
                    {row.label}
                  </th>
                  <td className="py-3 pr-4 leading-6">{row.bupropion}</td>
                  <td className="py-3 pr-4 leading-6">{row.varenicline}</td>
                  <td className="py-3 leading-6">{row.patch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          Which one is right depends on your health, your other medicines and what you have tried
          before. Read the{" "}
          <Link className={LINK} href="/quit-smoking-with-varenicline">
            varenicline overview
          </Link>{" "}
          and bring both pages to your appointment.
        </P>
      </Section>

      <Section id="get-it" title="Getting a prescription and free help">
        <P>
          Ask your doctor if bupropion fits you. Bring a list
          of your medicines and any history of seizures, eating disorders or mood problems.
        </P>
        <Bullets
          items={[
            <>
              <strong>Free coaching:</strong> call 1-800-QUIT-NOW, or text QUITNOW to 333888
              (CDC). Find your state&apos;s program on{" "}
              <Link className={LINK} href="/quit-smoking-help">
                free quit-smoking help by state
              </Link>
              .
            </>,
            <>
              <strong>Plan your first week:</strong> the{" "}
              <Link className={LINK} href="/prepare-to-quit-smoking">
                prep checklist
              </Link>{" "}
              helps you pick a quit day that lines up with your pill schedule.
            </>,
          ]}
        />
      </Section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Pair your prescription with a plan for cravings"
        description="Blou gives you SOS craving help for the moments a pill can't cover, lung checks, and every smoke-free milestone on one timeline."
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
          This page is educational and is not medical advice. Bupropion is a prescription
          medicine. Only your doctor can decide if it is right for you and what dose to take.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/quit-smoking-with-varenicline" variant="secondary">
          Varenicline (Chantix) →
        </ButtonLink>
        <ButtonLink href="/combination-nrt-quit-smoking" variant="secondary">
          Combination NRT →
        </ButtonLink>
        <ButtonLink href="/nrt-and-quit-smoking-app" variant="secondary">
          NRT + app →
        </ButtonLink>
      </div>
    </div>
  );
}
