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
const CAMPAIGN = "article_nicotine-patch-side-effects";
const PATH = "/nicotine-patch-side-effects";

const TITLE = "Nicotine patch side effects: what’s normal and not";
const DESCRIPTION =
  "Nicotine patch side effects: skin rash, vivid dreams, the 21 mg dose, how long you can wear a patch, overdose signs and when to call a doctor.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "nicotine patch side effects",
    "side effects of nicotine patch 21 mg",
    "nicotine patch skin rash",
    "how long can you wear a nicotine patch",
    "nicotine patch vivid dreams",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "Nicotine transdermal patch (drug information)",
    href: "https://medlineplus.gov/druginfo/meds/a601084.html",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
  },
  {
    label: "Nicotine replacement therapy (Medical Encyclopedia)",
    href: "https://medlineplus.gov/ency/article/007438.htm",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
  },
  {
    label: "NicoDerm CQ (nicotine transdermal system) Drug Facts label, 2025",
    href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=93b2d1b9-83c1-40b5-b6af-90c38c8d6cef",
    publisher: "DailyMed, U.S. National Library of Medicine (FDA-regulated OTC label)",
  },
  {
    label: "How to use nicotine patches",
    href: "https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-a-nicotine-patch.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "Stop smoking treatments",
    href: "https://www.nhs.uk/conditions/stop-smoking-treatments/",
    publisher: "NHS",
  },
  {
    label: "The relative risks of tobacco products",
    href: "https://www.fda.gov/tobacco-products/health-effects-tobacco-use/relative-risks-tobacco-products",
    publisher: "U.S. Food and Drug Administration",
  },
  {
    label: "Nicotine replacement therapy versus control for smoking cessation. Cochrane Database of Systematic Reviews, 2018",
    href: "https://pubmed.ncbi.nlm.nih.gov/29852054/",
    publisher: "PubMed",
  },
];

const faqItems = [
  {
    question: "What are the side effects of the nicotine patch?",
    answer:
      "The most common are redness, itching or swelling where the patch sits, trouble sleeping or vivid dreams, headache, dizziness, nausea, vomiting, and diarrhea (MedlinePlus, CDC). Most are mild and can be fixed by moving the patch to a new spot each day, taking it off at bedtime, or using a lower strength. Serious reactions such as a severe rash, an irregular heartbeat, seizures, or trouble breathing are rare and need medical help right away.",
  },
  {
    question: "What are the side effects of the 21 mg nicotine patch?",
    answer:
      "They are the same as for other strengths, but more likely if the dose is higher than you need. The 21 mg patch is meant for people who smoke more than 10 cigarettes a day; lighter smokers are directed to start at 14 mg. If you feel nauseous, dizzy, weak, or notice a fast heartbeat on 21 mg, those can be signs of too much nicotine. Remove the patch and ask a doctor or pharmacist about stepping down.",
  },
  {
    question: "Can a nicotine patch cause a skin rash?",
    answer:
      "Yes. Mild redness, itching or burning where the patch was is common and usually fades. Move the patch to a different spot every day and don't reuse a spot within a week. Stop using the patch and ask a doctor if redness lasts more than four days, the skin swells, or you get a rash.",
  },
  {
    question: "How long can you wear a nicotine patch?",
    answer:
      "Each patch is worn for 16 or 24 hours, depending on the product, and never longer than 24 hours. Put a fresh one on each day. A full course on the US label runs about 8 to 10 weeks; MedlinePlus gives 6 to 20 weeks overall, and the NHS advises at least 12 weeks. If you need it longer to stay smoke-free, talk to your health care provider.",
  },
  {
    question: "Should I take my nicotine patch off at night?",
    answer:
      "Only if it is affecting your sleep. The US label and the CDC say that if you have vivid dreams or sleep problems, you can remove the patch at bedtime and put a new one on in the morning. If you crave cigarettes as soon as you wake up, keeping a 24-hour patch on overnight may help.",
  },
  {
    question: "Can you smoke while wearing a nicotine patch?",
    answer:
      "You should not plan to. MedlinePlus warns that smoking or using other nicotine while on the patch can lead to nicotine overdose. If you do slip, the CDC says you do not need to stop using the patch: throw away your cigarettes and carry on as directed.",
  },
  {
    question: "What are the signs of too much nicotine from a patch?",
    answer:
      "The US label lists nausea, vomiting, dizziness, weakness, and a rapid heartbeat as symptoms of nicotine overdose. Take the patch off and contact a doctor or Poison Control (1-800-222-1222). Call 911 if someone collapses, has a seizure, has trouble breathing, or cannot be woken.",
  },
];

const commonEffects: Array<{ effect: string; fix: string }> = [
  {
    effect: "Redness, itching or burning at the patch site",
    fix: "Rotate sites every day and don't reuse a spot more than once a week (CDC).",
  },
  {
    effect: "Trouble sleeping or vivid dreams",
    fix: "Remove the patch at bedtime and apply a new one in the morning (CDC, US label).",
  },
  {
    effect: "Headache",
    fix: "Ask about a lower-dose patch (CDC).",
  },
  {
    effect: "Nausea, vomiting, diarrhea or dizziness",
    fix: "Side effects are more likely at high doses (MedlinePlus). Tell your doctor if they are severe or don't go away.",
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

export default function NicotinePatchSideEffectsPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "Drug", name: "Nicotine transdermal patch" },
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          { name: "Quit smoking with a nicotine patch", path: "/quit-smoking-with-nicotine-patch" },
          { name: "Nicotine patch side effects", path: PATH },
        ]}
      />

      <ArticleHeader
        kicker="Quit-smoking medication"
        title="Nicotine patch side effects: what’s normal and when to call a doctor"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/tools/nicotine-patch-plan" variant="secondary">
            Build a patch plan →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated October 2026.</strong> Most nicotine
          patch side effects are mild: an itchy or red patch of skin, vivid dreams, a headache or
          some nausea. Usually a simple change fixes them, like a new spot, taking it off at night,
          or a lower dose. Here is what is common, what is serious, and how long you can safely
          wear a patch.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "common", label: "Common side effects and fixes" },
          { id: "21mg", label: "Side effects of the 21 mg patch" },
          { id: "skin", label: "Nicotine patch skin rash" },
          { id: "sleep", label: "Vivid dreams and sleep" },
          { id: "how-long", label: "How long can you wear a patch?" },
          { id: "overdose", label: "Signs of too much nicotine" },
          { id: "serious", label: "Serious side effects" },
          { id: "before-you-start", label: "Check with a doctor first if…" },
          { id: "worth-it", label: "Is the patch worth it?" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Common nicotine patch side effects are skin redness or itching where the patch sits, trouble sleeping or vivid dreams, headache, dizziness and nausea. Rotate the patch site daily, take the patch off at bedtime if dreams bother you, and ask about a lower dose for headaches or nausea. Stop and get help for a severe rash, an irregular heartbeat, seizures or trouble breathing."
          facts={[
            "Wear each patch 16 or 24 hours, and never more than 24 hours (US label).",
            "Never wear two patches at once unless a clinician tells you to.",
            "Chest pain and palpitations are rare, and serious adverse events are extremely rare (Cochrane).",
            "Used patches still contain enough nicotine to poison children and pets.",
          ]}
        />
      </section>

      <Section id="common" title="Common nicotine patch side effects and how to fix them">
        <P>
          MedlinePlus lists dizziness, headache, nausea, vomiting, diarrhea, and redness or
          swelling at the patch site as the common side effects. The CDC pairs each with a simple
          fix:
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">Common nicotine patch side effects and what to do</caption>
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
          MedlinePlus notes that trouble falling asleep is most common in the first few days and
          usually passes. Remember that quitting smoking causes its own withdrawal symptoms
          (irritability, poor sleep, low mood), so not everything you feel is from the patch. See
          the{" "}
          <Link className={LINK} href="/nicotine-withdrawal-timeline">
            nicotine withdrawal timeline
          </Link>
          .
        </P>
      </Section>

      <Section id="21mg" title="Side effects of the nicotine patch 21 mg">
        <P>
          The 21 mg patch is the highest of the three common strengths (7, 14 and 21 mg). It does
          not have different side effects, but they are more likely if the dose is more than you
          need. MedlinePlus says side effects are more likely at very high doses, and that a lower
          dose can help prevent them.
        </P>
        <Bullets
          items={[
            <>
              <strong>Who it is for:</strong> the US label starts people who smoke more than 10
              cigarettes a day on 21 mg for weeks 1–6, then 14 mg for weeks 7–8, then 7 mg for
              weeks 9–10.
            </>,
            <>
              <strong>Lighter smokers skip it:</strong> if you smoke 10 or fewer a day, the label
              says to start at 14 mg for 6 weeks, then 7 mg for 2 weeks. MedlinePlus also suggests
              asking a provider about dose if you weigh under 99 pounds (45 kg).
            </>,
            <>
              <strong>Too strong?</strong> Nausea, vomiting, dizziness, weakness or a racing
              heartbeat on 21 mg can mean too much nicotine. Remove the patch and talk to a
              pharmacist or doctor about stepping down.
            </>,
            <>
              <strong>Still craving on 21 mg?</strong> The CDC says heavy cravings may mean you
              need a higher dose, and that if you are already on the highest dose you should ask
              your doctor. Don’t add a second patch on your own. Ask about{" "}
              <Link className={LINK} href="/combination-nrt-quit-smoking">
                combining the patch with gum or lozenges
              </Link>
              .
            </>,
          ]}
        />
        <P>
          To work out a starting strength and step-down schedule, try the{" "}
          <Link className={LINK} href="/tools/nicotine-patch-plan">
            nicotine patch plan tool
          </Link>
          .
        </P>
      </Section>

      <Section id="skin" title="Nicotine patch skin rash: prevention and when to stop">
        <P>
          Skin irritation is the side effect most specific to patches. The Cochrane review of NRT
          trials lists skin irritation as the typical patch adverse effect. To keep it down:
        </P>
        <Bullets
          items={[
            "Apply to clean, dry, hairless skin on the upper body (upper chest, upper arm, shoulder or back). Avoid skin that is irritated, oily, scarred or broken (CDC, MedlinePlus).",
            "Press the patch on firmly for about 10 seconds, then wash your hands (MedlinePlus).",
            "Use a different spot every day, and don't reuse the same spot more than once a week (CDC).",
            "Don't cut patches (US label).",
          ]}
        />
        <P>
          <strong>Stop using the patch and ask a doctor if</strong> redness from the patch lasts
          more than four days, the skin swells, or you develop a rash (US label). Get medical help
          right away for a severe rash or swelling, or signs of an allergic reaction such as
          trouble breathing (MedlinePlus, US label). If you have an adhesive allergy or a skin
          condition like psoriasis or eczema, the CDC suggests talking to a clinician before you
          start; another form of NRT may suit you better. See{" "}
          <Link className={LINK} href="/nicotine-patch-vs-gum">
            nicotine patch vs gum
          </Link>
          .
        </P>
      </Section>

      <Section id="sleep" title="Vivid dreams and sleep problems">
        <P>
          A 24-hour patch keeps delivering nicotine while you sleep, and some people notice vivid
          or odd dreams or trouble sleeping. MedlinePlus lists this as a known effect of wearing
          the patch at night.
        </P>
        <Bullets
          items={[
            "The fix: take the patch off at bedtime and put a new one on in the morning. Both the CDC and the US label recommend this for vivid dreams or sleep problems.",
            "The trade-off: if you crave cigarettes as soon as you wake up, the label suggests wearing the patch for the full 24 hours.",
            "The US label notes that patches can be worn for 16 or 24 hours. A pharmacist can help you choose the pattern that suits your sleep and morning cravings.",
          ]}
        />
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        The patch handles the steady nicotine. Blou handles the moments: SOS help when a craving
        breaks through, lung checks, and every smoke-free milestone on one timeline.
      </InlineAppCta>

      <Section id="how-long" title="How long can you wear a nicotine patch?">
        <P>There are two questions here: how long per patch, and how long overall.</P>
        <Bullets
          items={[
            <>
              <strong>Per patch:</strong> 16 or 24 hours depending on the product. Do not leave a
              patch on for more than 24 hours (US label). Put on a fresh patch at the same time
              each day. You can shower and bathe with it on (CDC, MedlinePlus).
            </>,
            <>
              <strong>Per course:</strong> the US label runs 10 weeks for people who smoke more
              than 10 a day and 8 weeks for lighter smokers. The CDC says to lower the dose,
              typically after 8–12 weeks, with the goal of stopping. MedlinePlus gives a total of
              6 to 20 weeks, and the NHS advises using NRT for at least 12 weeks because stopping
              early can let cravings return.
            </>,
            <>
              <strong>Need longer?</strong> The label says to talk to your health care provider if
              you think you need the patch longer to stay smoke-free. The FDA describes approved
              NRT as safe and effective.
            </>,
          ]}
        />
        <P>
          The full how-to is in{" "}
          <Link className={LINK} href="/quit-smoking-with-nicotine-patch">
            quitting smoking with a nicotine patch
          </Link>
          .
        </P>
      </Section>

      <Section id="overdose" title="Signs of too much nicotine" tone="amber">
        <P>
          The US label lists the symptoms of nicotine overdose as <strong>nausea, vomiting,
          dizziness, weakness and a rapid heartbeat</strong>. The label says never to wear more
          than one patch at a time, and MedlinePlus warns that smoking or using other nicotine
          while on the patch can lead to an overdose.
        </P>
        <Bullets
          items={[
            "Take the patch off and contact your doctor, or call Poison Control at 1-800-222-1222.",
            "Call 911 if someone collapses, has a seizure, has trouble breathing, or cannot be woken (MedlinePlus).",
            "Keep new and used patches away from children and pets. The label warns that used patches still have enough nicotine to poison them. Fold used patches sticky sides together before throwing them away.",
          ]}
        />
        <P>
          If you slip and smoke a cigarette, the CDC says you do not need to stop the patch: throw
          the cigarettes away and keep using it as directed.
        </P>
      </Section>

      <Section id="serious" title="Serious side effects: when to call a doctor" tone="amber">
        <P>Get medical help right away (MedlinePlus, US label) for:</P>
        <Bullets
          items={[
            "A severe rash or swelling",
            "An irregular heartbeat or palpitations",
            "Seizures",
            "Difficulty breathing or other signs of an allergic reaction",
          ]}
        />
        <P>
          Also tell your doctor if common side effects are severe or don’t go away, or if you
          become pregnant while using the patch. The CDC adds: get help if depression or anxiety
          lasts more than two weeks or gets worse after you quit. Serious problems are rare. In
          the Cochrane review, chest pain and palpitations were somewhat more common with NRT
          than without it, but rare in both groups, and serious adverse events were extremely
          rare.
        </P>
      </Section>

      <Section id="before-you-start" title="Check with a doctor before using the patch if…">
        <Bullets
          items={[
            "You had a heart attack recently, or have an irregular heartbeat, serious or worsening angina, or other heart disease (US label, CDC). MedlinePlus notes patches are generally acceptable for most people with stable heart problems.",
            "You have high blood pressure that isn't controlled, stomach ulcers, diabetes, or a history of seizures (US label).",
            "You are allergic to adhesive tape or have a skin condition (US label, CDC).",
            "You take prescription medicine for depression or asthma, since the dose may need adjusting (US label).",
            "You are pregnant or breastfeeding. The US label says to use the patch only on a provider’s advice. The NHS says NRT can be used in pregnancy with advice from a professional on the right product.",
            "You are under 18 (US label, CDC).",
          ]}
        />
      </Section>

      <Section id="worth-it" title="Is the patch worth the side effects?">
        <P>
          For most people, yes. A Cochrane review of 51 nicotine patch trials with more than
          25,000 participants found that the patch increased the chance of quitting by about 64%
          compared with placebo or no NRT. The CDC notes the patch is easy to use once a day, can
          be combined with faster forms, and usually has minor side effects. If one product does
          not suit you, you have options: gum, lozenges, or prescription medicine.
        </P>
        <P>
          Compare forms in{" "}
          <Link className={LINK} href="/nicotine-patch-vs-gum">
            nicotine patch vs gum
          </Link>{" "}
          and{" "}
          <Link className={LINK} href="/combination-nrt-quit-smoking">
            combination NRT
          </Link>
          , or start with the full{" "}
          <Link className={LINK} href="/how-to-quit-smoking">
            quit smoking plan
          </Link>
          .
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
          This page is educational and is not medical advice. Always follow the directions on
          your product’s label, which can differ between brands and countries. If you have a
          health condition, are pregnant, or take medication, talk to a pharmacist or clinician
          before using nicotine replacement therapy.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/quit-smoking-with-nicotine-patch" variant="secondary">
          ← Quitting with the patch
        </ButtonLink>
        <ButtonLink href="/tools/nicotine-patch-plan" variant="secondary">
          Nicotine patch plan →
        </ButtonLink>
        <ButtonLink href="/nicotine-patch-vs-gum" variant="secondary">
          Patch vs gum →
        </ButtonLink>
      </div>
    </div>
  );
}
