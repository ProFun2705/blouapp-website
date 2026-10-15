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
const CAMPAIGN = "article_zyn-vs-cigarettes";
const PATH = "/zyn-vs-cigarettes";

const TITLE = "Zyn vs cigarettes: nicotine, risks and cost compared";
const DESCRIPTION =
  "Zyn vs cigarettes: how much nicotine is in a cigarette vs Zyn, plus smoke, carbon monoxide, addiction and cost compared side by side.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "zyn vs cigarettes",
    "how much nicotine is in a cigarette vs zyn",
    "zyn vs smoking",
    "is zyn better than cigarettes",
    "nicotine pouches vs cigarettes",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "FDA authorizes marketing of 20 ZYN nicotine pouch products after extensive scientific review (January 16, 2025)",
    href: "https://www.fda.gov/news-events/press-announcements/fda-authorizes-marketing-20-zyn-nicotine-pouch-products-after-extensive-scientific-review",
    publisher: "U.S. Food and Drug Administration",
  },
  {
    label: "The relative risks of tobacco products",
    href: "https://www.fda.gov/tobacco-products/health-effects-tobacco-use/relative-risks-tobacco-products",
    publisher: "U.S. Food and Drug Administration",
  },
  {
    label: "Nicotine is why tobacco products are addictive",
    href: "https://www.fda.gov/tobacco-products/health-effects-tobacco-use/nicotine-why-tobacco-products-are-addictive",
    publisher: "U.S. Food and Drug Administration",
  },
  {
    label: "Keep your air clear: how tobacco can harm your lungs",
    href: "https://www.fda.gov/tobacco-products/health-effects-tobacco-use/keep-your-air-clear-how-tobacco-can-harm-your-lungs",
    publisher: "U.S. Food and Drug Administration",
  },
  {
    label: "Nicotine pouches",
    href: "https://www.cdc.gov/tobacco/nicotine-pouches/index.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "How does tobacco deliver its effects? (Tobacco, nicotine, and e-cigarettes research report)",
    href: "https://nida.nih.gov/publications/research-reports/tobacco-nicotine-e-cigarettes/how-does-tobacco-deliver-its-effects",
    publisher: "National Institute on Drug Abuse",
  },
  {
    label: "What is Zyn and what are oral nicotine pouches? (August 2026)",
    href: "https://truthinitiative.org/research-resources/emerging-tobacco-products/what-zyn-and-what-are-oral-nicotine-pouches",
    publisher: "Truth Initiative",
  },
  {
    label: "Determination of nicotine content of popular cigarettes. Veterinary and Human Toxicology, 1997",
    href: "https://pubmed.ncbi.nlm.nih.gov/9251172/",
    publisher: "PubMed",
  },
  {
    label: "A randomised study to investigate the nicotine pharmacokinetics of oral nicotine pouches and a combustible cigarette. European Journal of Drug Metabolism and Pharmacokinetics, 2022",
    href: "https://pubmed.ncbi.nlm.nih.gov/34923602/",
    publisher: "PubMed",
  },
  {
    label: "Small pouches, but high nicotine doses: nicotine delivery and acute effects after use of tobacco-free nicotine pouches. Frontiers in Pharmacology, 2024",
    href: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1392027/full",
    publisher: "Frontiers in Pharmacology",
  },
  {
    label: "The potential impact of oral nicotine pouches on public health: a scoping review. Nicotine & Tobacco Research, 2025",
    href: "https://pubmed.ncbi.nlm.nih.gov/38880491/",
    publisher: "PubMed",
  },
  {
    label: "Patterns of tobacco product use among US adults who use nicotine pouches and the association between nicotine pouch use and tobacco product use cessation. Tobacco Control, 2026",
    href: "https://pubmed.ncbi.nlm.nih.gov/41775635/",
    publisher: "PubMed",
  },
];

const faqItems = [
  {
    question: "How much nicotine is in a cigarette vs Zyn?",
    answer:
      "The tobacco in one cigarette holds roughly 12 mg of nicotine on average (one lab analysis of 33 brands found about 7 to 18 mg), but the average smoker takes in only 1 to 2 mg per cigarette, according to NIDA. A ZYN pouch is labeled 3 mg or 6 mg, and only part of that is absorbed through the gum. Because the two products are absorbed so differently, the label numbers cannot be compared directly.",
  },
  {
    question: "Is one Zyn equal to a cigarette?",
    answer:
      "There is no reliable one-to-one equivalence. How much nicotine reaches your blood from a pouch depends on the brand, how long you keep it in, and how you use it. One study found blood nicotine was not linked to the nicotine content printed on the pouch. Cigarettes also deliver nicotine much faster. To understand your own intake, look at total mg per day with the /tools/nicotine-pouch-calculator rather than a cigarette equivalent.",
  },
  {
    question: "Is Zyn better than cigarettes?",
    answer:
      "For an adult who smokes and switches completely, the FDA says nicotine pouches can generally be a lower-risk alternative, because there is no smoke and far lower levels of harmful chemicals. They are still addictive and not risk-free. For someone who does not smoke, starting Zyn adds risk with no health benefit.",
  },
  {
    question: "Do Zyns have tar or carbon monoxide?",
    answer:
      "No. Tar and carbon monoxide are products of burning tobacco, and Zyn pouches are not burned, so there is no smoke. The FDA notes that carbon monoxide in cigarette smoke displaces oxygen in your blood, and that levels return to normal about 12 hours after quitting smoking.",
  },
  {
    question: "Is Zyn more addictive than cigarettes?",
    answer:
      "That has not been established. Both deliver nicotine, which is highly addictive. Cigarettes get nicotine to the brain within seconds, which strongly reinforces the habit. Pouches deliver it more slowly but can reach similar or higher blood levels, especially at high strengths. Either one can cause real dependence.",
  },
  {
    question: "Can Zyn help you quit smoking?",
    answer:
      "Zyn is not approved by the FDA as a quit aid, and the CDC says more research is needed on how pouches affect quitting. FDA-approved options such as nicotine patches, gum, lozenges, varenicline and bupropion have strong evidence. If you do switch, the FDA's advice is to switch completely, with quitting all nicotine as the end goal.",
  },
];

const comparison: Array<{ label: string; cigarette: ReactNode; zyn: ReactNode }> = [
  {
    label: "Nicotine per unit",
    cigarette:
      "About 12 mg in the tobacco on average (about 7–18 mg across 33 brands in one lab study). The average smoker takes in 1–2 mg per cigarette (NIDA).",
    zyn: "3 mg or 6 mg per pouch (FDA). Only part of this is absorbed, and how much varies by product and use.",
  },
  {
    label: "How fast nicotine arrives",
    cigarette: "Within seconds. Inhaled nicotine reaches peak blood levels quickly (NIDA).",
    zyn: "Slowly, through the gum. In one study, pouches took 60–65 minutes to reach peak blood levels, compared with 7 minutes for a cigarette.",
  },
  {
    label: "Burning, smoke and tar",
    cigarette: "Tobacco is burned. Each puff contains more than 7,000 chemicals (FDA).",
    zyn: "Nothing is burned and there is no smoke. Pouches contain nicotine, flavorings and other ingredients (CDC).",
  },
  {
    label: "Carbon monoxide",
    cigarette: "Yes. CO in smoke displaces oxygen in your blood (FDA).",
    zyn: "None. Carbon monoxide comes from combustion.",
  },
  {
    label: "Harmful chemicals",
    cigarette: "The toxic mix in smoke, not nicotine, causes most serious smoking disease (FDA).",
    zyn: "Substantially lower levels of harmful constituents than cigarettes (FDA review of ZYN).",
  },
  {
    label: "Addiction",
    cigarette: "Highly addictive (FDA).",
    zyn: "Also addictive. Nicotine is highly addictive in any form (CDC).",
  },
  {
    label: "Short-term heart effects",
    cigarette: "Raised heart rate by about 27 bpm during use in a 2024 lab study.",
    zyn: "Depends on strength: slight with 6 mg, larger with 20–30 mg pouches in the same study.",
  },
  {
    label: "Long-term evidence",
    cigarette: "Decades of data on cancer, heart and lung disease.",
    zyn: "Not yet available. Long-term effects of Zyn are unknown (Truth Initiative).",
  },
  {
    label: "Cost",
    cigarette: "Depends on local prices and taxes.",
    zyn: "Depends on can price and how many pouches you use. Work out yours with the calculator below.",
  },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
    >
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

export default function ZynVsCigarettesPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Nicotine dependence" },
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          { name: "Quit Zyn", path: "/quit-zyn" },
          { name: "Zyn vs cigarettes", path: PATH },
        ]}
      />

      <ArticleHeader
        kicker="Nicotine pouches"
        title="Zyn vs cigarettes: nicotine, health risks and cost"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/tools/nicotine-pouch-calculator" variant="secondary">
            Nicotine pouch calculator →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated October 2026.</strong> Zyn and
          cigarettes both deliver addictive nicotine, but cigarettes burn tobacco and expose you
          to smoke, tar and carbon monoxide. Zyn does not. Here is how they compare on nicotine,
          chemicals, addiction and cost, and why the milligram numbers on the labels are not a
          like-for-like comparison.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "comparison", label: "Zyn vs cigarettes at a glance" },
          { id: "nicotine", label: "How much nicotine is in a cigarette vs Zyn" },
          { id: "health", label: "Health risks compared" },
          { id: "switching", label: "Switching, dual use and quitting" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Zyn vs cigarettes: cigarettes are far more harmful because they burn tobacco, producing smoke, tar and carbon monoxide. The FDA found ZYN has substantially lower levels of harmful constituents. Both are addictive. A cigarette holds around 12 mg of nicotine, of which a smoker absorbs about 1–2 mg. A Zyn pouch is labeled 3 or 6 mg, but absorption differs, so the numbers do not line up one to one."
          facts={[
            "Average smoker takes in 1–2 mg of nicotine per cigarette (NIDA).",
            "ZYN comes in 3 mg and 6 mg pouches in the US (FDA).",
            "No smoke means no carbon monoxide from Zyn.",
            "Lower risk is not no risk: the FDA says no tobacco product is safe.",
          ]}
        />
      </section>

      <Section id="comparison" title="Zyn vs cigarettes at a glance">
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <caption className="sr-only">Comparison of cigarettes and Zyn nicotine pouches</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  &nbsp;
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold">
                  Cigarette
                </th>
                <th scope="col" className="py-2 font-semibold">
                  Zyn pouch
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">
                    {row.label}
                  </th>
                  <td className="py-3 pr-4 leading-6">{row.cigarette}</td>
                  <td className="py-3 leading-6">{row.zyn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          To see your own daily nicotine, cans per week and spending, use the{" "}
          <Link className={LINK} href="/tools/nicotine-pouch-calculator">
            nicotine pouch calculator
          </Link>
          .
        </P>
      </Section>

      <Section id="nicotine" title="How much nicotine is in a cigarette vs Zyn?">
        <P>
          This is where most comparisons go wrong, because the number on a pouch can and the
          nicotine in a cigarette measure different things.
        </P>
        <Bullets
          items={[
            <>
              <strong>Nicotine contained in a cigarette.</strong> A lab analysis of 33 popular
              cigarette brands measured an average of about 12 mg of nicotine in the tobacco of a
              single cigarette, ranging from about 7 to 18 mg. That study is older and covered
              brands sold in Japan, so treat it as a ballpark.
            </>,
            <>
              <strong>Nicotine absorbed from a cigarette.</strong> Most of that nicotine is never
              absorbed. NIDA says the average smoker takes in 1 to 2 mg of nicotine per
              cigarette, and that it reaches the brain rapidly.
            </>,
            <>
              <strong>Nicotine in a Zyn pouch.</strong> ZYN is sold in the US in 3 mg and 6 mg
              strengths (FDA). Other brands go higher; Truth Initiative lists strengths up to 8 mg
              for some brands and up to 12 mg for another product line.
            </>,
            <>
              <strong>Nicotine absorbed from a pouch.</strong> Nicotine is absorbed through the
              lining of the mouth, more slowly than inhaled smoke (NIDA). In a 2024 study, a 6 mg
              pouch released about 38% of its nicotine during 20 minutes of use, and measured
              nicotine content was 80–90% of what the label declared.
            </>,
          ]}
        />
        <P>
          <strong>Why there is no simple “Zyn = X cigarettes” rule.</strong> In a 2022 study of
          five pouch brands (6–10 mg), several pouches produced blood nicotine levels similar to
          or higher than a cigarette, but blood nicotine was not linked to the nicotine content
          printed on the pouch. Pouches took about an hour to peak; the cigarette took 7 minutes.
          How long you keep a pouch in, how many you use, and the brand all change the dose. That
          is why we compare total daily nicotine rather than cigarette equivalents.
        </P>
      </Section>

      <Section id="health" title="Zyn vs smoking: health risks compared">
        <P>
          The FDA describes a continuum of risk, with burned products like cigarettes at the most
          harmful end. Its explanation is that nicotine keeps people using tobacco, but the
          thousands of chemicals in tobacco smoke are what cause the serious diseases, such as
          cancer and COPD.
        </P>
        <Bullets
          items={[
            "When it authorized ZYN, the FDA found substantially lower amounts of harmful constituents than in cigarettes and most smokeless tobacco, and a lower risk of cancer and other serious conditions.",
            "A 2025 scoping review agreed that pouches contain fewer harmful compounds at lower levels than cigarettes, with formaldehyde as the exception. It noted that much of the key data comes from industry-funded studies.",
            "Cigarette smoke contains carbon monoxide, which displaces oxygen in your blood. The FDA says CO levels return to normal about 12 hours after quitting smoking.",
            "Pouches have their own downsides: nicotine dependence, irritation and changes in the mouth where the pouch sits, short-term rises in heart rate, and unknown long-term effects.",
          ]}
        />
        <P>
          The details on gums, heart rate and youth use are in{" "}
          <Link className={LINK} href="/are-zyns-bad-for-you">
            are Zyns bad for you?
          </Link>
          .
        </P>
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        Whether you are quitting cigarettes, Zyn or both, Blou supports you: SOS help when a
        craving hits, lung checks, and every milestone on one visual timeline.
      </InlineAppCta>

      <Section id="switching" title="Switching, dual use and quitting">
        <P>
          If you smoke, the FDA’s guidance is clear: quitting all tobacco is the best option. If
          you switch to a less harmful product, switch completely, and aim to stop all tobacco
          eventually. FDA-approved medications (nicotine replacement therapy, bupropion and
          varenicline) are safe and effective and should be the first line of treatment.
        </P>
        <Bullets
          items={[
            "No nicotine pouch is approved by the FDA to help people quit smoking, and the CDC says more research is needed on how pouches affect quitting.",
            "Using both products is common. In a nationally representative US survey published in 2026, adults who used pouches alongside another tobacco product were less likely to have quit a year later than those who did not dual-use (10.1% vs 23.7%).",
            "For someone who does not use nicotine, the FDA says not to start with pouches or any other product.",
          ]}
        />
        <P>
          Ready to stop one or both? See{" "}
          <Link className={LINK} href="/quit-zyn">
            how to quit Zyn
          </Link>
          , the{" "}
          <Link className={LINK} href="/how-to-quit-smoking">
            quit smoking plan
          </Link>
          , what to expect from{" "}
          <Link className={LINK} href="/zyn-withdrawal">
            Zyn withdrawal
          </Link>
          , and the{" "}
          <Link className={LINK} href="/quit-smoking-timeline">
            quit smoking timeline
          </Link>
          .
        </P>
      </Section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Quit cigarettes, pouches, or both"
        description="Blou supports quitting cigarettes and nicotine pouches like Zyn. See your recovery on one timeline, with SOS help ready for cravings."
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
          This page is educational and is not medical advice. Nicotine figures are averages from
          published studies and vary by product and by person. If you have a health condition,
          are pregnant, or take medication, talk to a clinician about your nicotine use.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/quit-zyn" variant="secondary">
          How to quit Zyn →
        </ButtonLink>
        <ButtonLink href="/are-zyns-bad-for-you" variant="secondary">
          Are Zyns bad for you? →
        </ButtonLink>
        <ButtonLink href="/tools/nicotine-pouch-calculator" variant="secondary">
          Nicotine pouch calculator →
        </ButtonLink>
      </div>
    </div>
  );
}
