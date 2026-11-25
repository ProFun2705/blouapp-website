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

const PUBLISHED = "2026-11-25";
const MODIFIED = "2026-11-25";
const CAMPAIGN = "article_swallowed-a-zyn";
const PATH = "/swallowed-a-zyn";

const TITLE = "Swallowed a Zyn? What happens and what to do";
const DESCRIPTION =
  "Swallowed a Zyn pouch or Zyn spit? See what usually happens, symptoms to watch, what to do now, and when to call Poison Help at 1-800-222-1222.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "swallowed a zyn",
    "what happens if you swallow a zyn",
    "what happens if you swallow a zyn pouch",
    "accidentally swallowed a zyn",
    "can you swallow zyn spit",
    "do you swallow zyn spit",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "Nicotine pouches: smoke-free but not risk-free",
    href: "https://www.poison.org/articles/nicotine-pouches-smoke-free-but-not-risk-free",
    publisher: "America's Poison Centers",
  },
  {
    label: "Nicotine poisoning (Medical Encyclopedia)",
    href: "https://medlineplus.gov/ency/article/002510.htm",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
  },
  {
    label: "What is Zyn and what are oral nicotine pouches? (August 2026)",
    href: "https://truthinitiative.org/research-resources/emerging-tobacco-products/what-zyn-and-what-are-oral-nicotine-pouches",
    publisher: "Truth Initiative",
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
];

const faqItems = [
  {
    question: "What happens if you swallow a Zyn pouch?",
    answer:
      "For an adult who swallows one pouch, America's Poison Centers advises rinsing your mouth and watching for symptoms. The early signs of nicotine poisoning are nausea, vomiting, stomach pain, drooling, sweating, tremor and weakness. If you swallowed several pouches, get medical help right away. Call Poison Help at 1-800-222-1222 if you are unsure.",
  },
  {
    question: "I accidentally swallowed a Zyn. Should I be worried?",
    answer:
      "Rinse your mouth with water and watch how you feel. Call Poison Help (1-800-222-1222) for advice, since it is free and open 24 hours a day. Get emergency care if you have a racing or pounding heartbeat, trouble breathing, confusion, fainting or seizures. A child who swallows a pouch needs medical advice right away.",
  },
  {
    question: "Can you swallow Zyn spit?",
    answer:
      "People do, and the health agencies we checked give no specific rule for it. Zyn spit has nicotine in it, so you swallow some nicotine along with it. If it makes you feel sick, spit instead of swallowing. If you feel strongly unwell after swallowing a lot, call Poison Help.",
  },
  {
    question: "Do you swallow Zyn spit or spit it out?",
    answer:
      "Spitting avoids sending extra nicotine to your stomach, where it can add to nausea and stomach pain (MedlinePlus lists abdominal cramps and vomiting among nicotine poisoning symptoms). You do not need to swallow anything for a pouch to work.",
  },
  {
    question: "Should I make myself throw up after swallowing a pouch?",
    answer:
      "No. MedlinePlus says not to make a person vomit unless poison control or a health care professional tells you to. Call Poison Help at 1-800-222-1222 and follow what they say.",
  },
  {
    question: "What if my child or pet swallowed a Zyn?",
    answer:
      "Call Poison Help at 1-800-222-1222 right away, even if your child seems fine. Remove any pieces of pouch from the mouth first and rinse with water. For a pet, call your vet or an animal poison hotline now. If your child has a seizure, trouble breathing or passes out, call 911.",
  },
];

const symptomRows: Array<{ level: string; signs: string }> = [
  {
    level: "Early signs",
    signs:
      "Nausea, vomiting, stomach pain, drooling, watery eyes, sweating, tremor, muscle weakness (America's Poison Centers).",
  },
  {
    level: "Get help now",
    signs:
      "Fast or pounding heartbeat, trouble breathing, confusion, agitation, fainting, seizures (America's Poison Centers, MedlinePlus). Call 911.",
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

export default function SwallowedAZynPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Nicotine poisoning" },
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />
      <Breadcrumbs
        items={[
          { name: "Quit Zyn", path: "/quit-zyn" },
          { name: "Swallowed a Zyn", path: PATH },
        ]}
      />

      <section
        id="emergency"
        className="scroll-mt-24 rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-red-900">
          Child or pet swallowed a pouch? Call now.
        </h2>
        <p className="mt-3 text-sm leading-7 text-red-900">
          In the US, call Poison Help at <strong>1-800-222-1222</strong>. It is free, private and
          open 24 hours a day. You can also use the online tool at webpoisoncontrol.org. If the
          person has a seizure, trouble breathing, or passes out, call 911.
        </p>
      </section>

      <ArticleHeader
        kicker="Nicotine pouches"
        title="Swallowed a Zyn? What happens and what to do"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/are-zyns-bad-for-you" variant="secondary">
            Are Zyns bad for you? →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated November 2026.</strong> Swallowing a
          Zyn is scary in the moment. Here is what usually happens, which symptoms matter, and what
          to do next.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "emergency", label: "Child or pet swallowed one" },
          { id: "quick-answer", label: "Quick answer" },
          { id: "adult", label: "If an adult swallows a Zyn" },
          { id: "symptoms", label: "Symptoms to watch for" },
          { id: "what-to-do", label: "What to do right now" },
          { id: "spit", label: "Can you swallow Zyn spit?" },
          { id: "why", label: "Why it happens" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="If an adult swallows one Zyn pouch, rinse your mouth and watch how you feel. Nausea, vomiting and stomach upset are the early signs. A child who swallows one, or an adult who swallows several, needs medical help right away. When in doubt, call Poison Help at 1-800-222-1222."
          facts={[
            "Adult, one pouch: rinse your mouth and observe (America's Poison Centers).",
            "Child, or an adult who swallowed several: get immediate medical help (America's Poison Centers).",
            "Do not make yourself or anyone else vomit unless poison control tells you to (MedlinePlus).",
          ]}
        />
      </section>

      <Section id="adult" title="What happens if you swallow a Zyn pouch (adult)">
        <P>
          Zyn pouches contain nicotine. Swallowing a pouch puts that nicotine in your stomach
          instead of your mouth lining, and nicotine is absorbed quickly after it is swallowed
          (MedlinePlus). America&apos;s Poison Centers says that for an adult who swallows one
          pouch, the advice is to rinse out the mouth and observe.
        </P>
        <P>
          Symptoms can start fast. In two cases described by America&apos;s Poison Centers, they
          began about 20 minutes and 90 minutes after use, and eased after a few hours. The page
          gives no fixed window, so do not wait for symptoms before you call if you are worried.
        </P>
        <P>
          We found no source that gives a safe or unsafe amount in milligrams for an adult, so
          this page does not either. Pouch strength and your body size both matter.
        </P>
      </Section>

      <Section id="symptoms" title="Symptoms to watch for after swallowing a Zyn">
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">Symptoms after swallowing a nicotine pouch</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  Level
                </th>
                <th scope="col" className="py-2 font-semibold">
                  What you might notice
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {symptomRows.map((row) => (
                <tr key={row.level} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">
                    {row.level}
                  </th>
                  <td className="py-3 leading-6">{row.signs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          Heart rate and blood pressure first go up, then can fall, according to America&apos;s
          Poison Centers. MedlinePlus also lists headache, abdominal cramps and burning in the
          mouth. MedlinePlus says a nicotine overdose may cause seizures or death, and that
          faster medical help means a better chance of recovery.
        </P>
      </Section>

      <Section id="what-to-do" title="What to do right now if you swallowed a Zyn">
        <Bullets
          items={[
            <>
              <strong>Rinse your mouth with water.</strong> Spit it out. Take out any pieces of
              pouch that are still in your mouth.
            </>,
            <>
              <strong>Call Poison Help at 1-800-222-1222.</strong> Have the product name and
              strength, the time you swallowed it, and your age and weight ready. Do not delay
              calling if you do not know all of it (MedlinePlus).
            </>,
            <>
              <strong>Do not make yourself throw up.</strong> MedlinePlus says to do this only if
              poison control or a health care professional tells you to.
            </>,
            <>
              <strong>Watch how you feel for the next few hours.</strong> Sit down, stay with
              someone, and get emergency care if the serious signs in the table appear.
            </>,
            <>
              <strong>Keep the can.</strong> If you go to the emergency room, bring the container
              (MedlinePlus).
            </>,
          ]}
        />
        <P>
          Blou is not a medical service and cannot treat poisoning. For anything beyond mild
          stomach upset, rely on Poison Help or emergency care.
        </P>
      </Section>

      <Section id="spit" title="Can you swallow Zyn spit?">
        <P>
          Lots of people do it without noticing. The health sources we checked do not give a rule
          or a number for swallowing Zyn spit. What we do know is that the saliva has nicotine in
          it, and swallowed nicotine can upset the stomach (MedlinePlus lists abdominal cramps and
          vomiting among poisoning symptoms).
        </P>
        <P>
          If swallowing spit makes you queasy or gives you hiccups, spit it out instead. If you
          feel unwell after swallowing a lot, rinse your mouth and call Poison Help. For more on
          what pouches do to your body, see{" "}
          <Link className={LINK} href="/are-zyns-bad-for-you">
            are Zyns bad for you
          </Link>
          .
        </P>
      </Section>

      <Section id="why" title="Why it happens, and what to do if it keeps happening">
        <P>
          A pouch can slip back when you talk, drink or sleep with one in. Frequent slips can be
          a sign you are using more than you meant to. The CDC calls nicotine highly addictive,
          and the FDA notes that nicotine keeps people using tobacco products even when they want
          to stop.
        </P>
        <P>
          Truth Initiative reports that accidental pouch swallowing by children under 6 rose by
          about 763% between 2020 and 2023. If you use pouches, keep cans out of reach and in a
          closed place, and throw used pouches away where kids and pets cannot reach them.
        </P>
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        Blou supports quitting Zyn and other nicotine pouches. On the hard days, SOS craving help
        is ready the second an urge hits, and your timeline shows how far you have come.
      </InlineAppCta>

      <Section id="quit" title="If this made you want to stop">
        <P>
          Plenty of people decide to quit after a scare like this. Start with{" "}
          <Link className={LINK} href="/quit-zyn">
            how to quit Zyn
          </Link>
          , then read what to expect in{" "}
          <Link className={LINK} href="/zyn-withdrawal">
            Zyn withdrawal
          </Link>
          . The{" "}
          <Link className={LINK} href="/tools/nicotine-pouch-calculator">
            nicotine pouch calculator
          </Link>{" "}
          shows how much a habit costs, and{" "}
          <Link className={LINK} href="/zyn-vs-cigarettes">
            Zyn vs cigarettes
          </Link>{" "}
          compares the nicotine.
        </P>
      </Section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Cut back on pouches with support"
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
          This page is educational and is not medical advice. It does not replace Poison Help or
          emergency care. Poison Help is a US number; outside the US, contact your local poison
          center or emergency services.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/quit-zyn" variant="secondary">
          ← How to quit Zyn
        </ButtonLink>
        <ButtonLink href="/zyn-withdrawal" variant="secondary">
          Zyn withdrawal →
        </ButtonLink>
        <ButtonLink href="/are-zyns-bad-for-you" variant="secondary">
          Are Zyns bad for you? →
        </ButtonLink>
      </div>
    </div>
  );
}
