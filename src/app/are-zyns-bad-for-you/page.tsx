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
const CAMPAIGN = "article_are-zyns-bad-for-you";
const PATH = "/are-zyns-bad-for-you";

const TITLE = "Are Zyns bad for you? What the evidence says";
const DESCRIPTION =
  "Are Zyns bad for you? What the FDA authorization means, plus the evidence on nicotine addiction, gums, heart rate, youth use and Zyn vs smoking.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "are zyns bad for you",
    "are zyn pouches bad for you",
    "is zyn bad for you",
    "zyn side effects",
    "nicotine pouches health risks",
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
    label: "Nicotine pouches",
    href: "https://www.cdc.gov/tobacco/nicotine-pouches/index.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "What is Zyn and what are oral nicotine pouches? (August 2026)",
    href: "https://truthinitiative.org/research-resources/emerging-tobacco-products/what-zyn-and-what-are-oral-nicotine-pouches",
    publisher: "Truth Initiative",
  },
  {
    label: "What to know about quitting Zyn (January 2026)",
    href: "https://truthinitiative.org/research-resources/emerging-tobacco-products/what-know-about-quitting-zyn",
    publisher: "Truth Initiative",
  },
  {
    label: "What is the impact of nicotine pouches on oral health: a systematic review. BMC Oral Health, 2024",
    href: "https://pubmed.ncbi.nlm.nih.gov/39097712/",
    publisher: "PubMed",
  },
  {
    label: "Emerging oral nicotine products and periodontal diseases. International Journal of Dentistry, 2023",
    href: "https://pubmed.ncbi.nlm.nih.gov/36819641/",
    publisher: "PubMed",
  },
  {
    label: "Small pouches, but high nicotine doses: nicotine delivery and acute effects after use of tobacco-free nicotine pouches. Frontiers in Pharmacology, 2024",
    href: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1392027/full",
    publisher: "Frontiers in Pharmacology",
  },
  {
    label: "Snus, nicotine pouches and cardiovascular disease: evidence, mechanisms, and the challenge of novel nicotine products. Journal of Internal Medicine, 2026",
    href: "https://pubmed.ncbi.nlm.nih.gov/42706592/",
    publisher: "PubMed",
  },
  {
    label: "The potential impact of oral nicotine pouches on public health: a scoping review. Nicotine & Tobacco Research, 2025",
    href: "https://pubmed.ncbi.nlm.nih.gov/38880491/",
    publisher: "PubMed",
  },
  {
    label: "Oral nicotine pouches: rising popularity and state of the science. Public Health Reports, 2025",
    href: "https://pubmed.ncbi.nlm.nih.gov/40293136/",
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
    question: "Are Zyns bad for you?",
    answer:
      "Zyns are not safe, but they are less harmful than cigarettes. The FDA says there is no safe tobacco product, and Zyn contains nicotine, which is highly addictive. Known downsides include dependence, irritation and changes to the lining of the mouth where the pouch sits, and short-term rises in heart rate. Long-term effects are unknown. When the FDA authorized ZYN, it found the products contain substantially lower amounts of harmful constituents than cigarettes.",
  },
  {
    question: "Are Zyn pouches bad for your gums?",
    answer:
      "They can irritate them. A 2024 systematic review found that changes to the lining of the mouth at the spot where the pouch sits were common in users, ranging from slight wrinkling to white lesions, and seemed linked to how many pouches people used and for how long. Dry mouth, soreness and gum blisters were also reported. The evidence is limited (three small studies), so long-term effects on gum health are not yet known.",
  },
  {
    question: "Is Zyn FDA approved?",
    answer:
      "No. In January 2025 the FDA authorized the marketing of 20 ZYN products (3 mg and 6 mg) after a scientific review. The FDA was explicit that this does not mean the products are safe, and that they are not FDA approved. No nicotine pouch is approved as a way to quit smoking.",
  },
  {
    question: "Are Zyns worse than smoking?",
    answer:
      "No. The FDA places cigarettes and other burned tobacco at the most harmful end of the risk range, and found that ZYN has substantially lower levels of harmful constituents and poses a lower risk of cancer and other serious conditions than cigarettes. Lower risk is not no risk, and the benefit only applies to people who switch completely and do not keep smoking.",
  },
  {
    question: "Do Zyns raise your heart rate?",
    answer:
      "Nicotine raises heart rate. In a 2024 study of 15 people who smoke, a 30 mg pouch raised heart rate during use about as much as a cigarette, a 20 mg pouch roughly half as much, and a 6 mg pouch only slightly. ZYN in the US comes in 3 mg and 6 mg. Long-term heart outcomes for pouch users have not been studied.",
  },
  {
    question: "Can Zyn cause cancer?",
    answer:
      "The FDA concluded that the authorized ZYN products pose a lower risk of cancer than cigarettes and most smokeless tobacco such as moist snuff and snus, because they contain far lower levels of harmful constituents. There are no long-term studies of cancer in pouch users yet, so the risk cannot be called zero.",
  },
  {
    question: "Are Zyns safe for teenagers?",
    answer:
      "No. The CDC says nicotine can harm brain development, which continues until about age 25, and that young people can show signs of addiction quickly, even without daily use. The FDA says youth should not use any tobacco product.",
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

export default function AreZynsBadForYouPage() {
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
          { name: "Are Zyns bad for you?", path: PATH },
        ]}
      />

      <ArticleHeader
        kicker="Nicotine pouches"
        title="Are Zyns bad for you? A balanced look at the evidence"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/zyn-vs-cigarettes" variant="secondary">
            Zyn vs cigarettes →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated October 2026.</strong> Zyns are much
          less harmful than cigarettes, but they are not harmless. They contain nicotine, which is
          addictive, they can irritate the mouth, and they briefly raise heart rate. Their
          long-term effects are still unknown. Here is what the FDA, the CDC and published
          research actually say.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "fda", label: "What the FDA authorization means" },
          { id: "addiction", label: "Nicotine addiction" },
          { id: "mouth", label: "Gums and mouth" },
          { id: "heart", label: "Heart rate and blood pressure" },
          { id: "youth", label: "Young people and pregnancy" },
          { id: "unknowns", label: "What we don’t know yet" },
          { id: "vs-smoking", label: "Zyn vs smoking" },
          { id: "stop", label: "If you want to stop" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Are Zyns bad for you? They are not safe, but they are far less harmful than smoking. The FDA found ZYN contains substantially lower levels of harmful constituents than cigarettes, but says no tobacco product is safe. The clearest harms are nicotine addiction, mouth irritation, and short-term rises in heart rate. Long-term effects have not been studied yet."
          facts={[
            "FDA authorized 20 ZYN products in January 2025. That is not FDA approval.",
            "Nicotine is highly addictive, and young people are most at risk (CDC).",
            "Mouth changes at the pouch site are common in users (2024 systematic review).",
            "For someone who smokes, switching completely lowers exposure to harmful chemicals. For a non-user, starting adds risk with no health benefit.",
          ]}
        />
      </section>

      <Section id="fda" title="What the FDA’s ZYN authorization does and doesn’t mean">
        <P>
          On January 16, 2025, the FDA authorized the marketing of 20 ZYN nicotine pouch
          products: 10 flavors, each in 3 mg and 6 mg strengths. The decision followed a
          scientific review of the company’s application.
        </P>
        <P>
          <strong>What the FDA found:</strong> the products contain substantially lower amounts
          of harmful constituents than cigarettes and most smokeless tobacco (such as moist snuff
          and snus), and so pose a lower risk of cancer and other serious conditions. A study
          submitted with the application showed that a substantial proportion of adults who
          smoked or used smokeless tobacco switched completely to the pouches. The FDA concluded
          the benefit to those adults outweighed the risks, including risks to young people.
        </P>
        <P>
          <strong>What it does not mean:</strong>
        </P>
        <Bullets
          items={[
            <>
              It does not mean ZYN is safe. In the FDA’s words, &ldquo;There is no safe tobacco
              product.&rdquo;
            </>,
            "It is not “FDA approval,” and ZYN is not approved as a way to quit smoking. The CDC notes that no nicotine pouch has been approved as a quit aid.",
            "It covers only those 20 products, not other pouch brands or other ZYN products.",
            "The company cannot advertise ZYN as lower-risk without a separate modified-risk application, and the FDA can withdraw the authorization if youth use rises notably.",
          ]}
        />
      </Section>

      <Section id="addiction" title="Are Zyns bad for you because of nicotine addiction?">
        <P>
          Addiction is the most certain downside. The CDC calls nicotine highly addictive and
          notes that some pouches contain high levels of it. The FDA explains that tobacco
          products are addictive because they contain nicotine, and that nicotine keeps people
          using them even when they want to stop.
        </P>
        <P>
          Pouches are not a weak source. A 2025 review in <em>Public Health Reports</em> found
          that nicotine pouches deliver amounts of nicotine similar to other tobacco products. In
          a 2024 lab study, a 30 mg pouch produced higher blood nicotine than a cigarette. (ZYN in
          the US is sold in 3 mg and 6 mg.) Truth Initiative notes that high nicotine
          concentrations can make quitting harder, and that nicotine addiction can add to stress
          and worsen symptoms of depression and anxiety.
        </P>
        <P>
          If you already feel uneasy going a few hours without a pouch, that is dependence. It
          is common, and it is treatable; see{" "}
          <Link className={LINK} href="/quit-zyn">
            how to quit Zyn
          </Link>
          .
        </P>
      </Section>

      <Section id="mouth" title="Are Zyn pouches bad for your gums and mouth?">
        <P>
          Pouches sit against the gum and inner lip for long periods, so the mouth is where
          effects show up first. A 2024 systematic review in <em>BMC Oral Health</em> found:
        </P>
        <Bullets
          items={[
            "Changes to the lining of the mouth at the spot where the pouch sits were common, ranging from slight wrinkling to white lesions.",
            "These changes seemed related to how many pouches people used each day and for how long.",
            "Other reported effects were dry mouth, soreness, gum blisters, and an unusual jaw sensation.",
          ]}
        />
        <P>
          The review included only three studies (190 people), all judged at high risk of bias,
          and the authors concluded that research is still limited. In a separate 2024 lab study,
          every nicotine pouch tested caused some mouth irritation, strongest with the 30 mg
          pouch, and one participant developed a small ulcer. A 2023 review raised concern about
          effects on the gums and supporting tissue but said more research is needed.
        </P>
        <P>
          If you use pouches, it is worth telling your dentist and having any white patch or sore
          that does not heal checked. See also{" "}
          <Link className={LINK} href="/guides/sore-gums">
            sore gums after quitting
          </Link>
          .
        </P>
      </Section>

      <Section id="heart" title="Zyn, heart rate and blood pressure">
        <P>
          Nicotine stimulates the heart and blood vessels. The best direct evidence on pouches
          comes from a 2024 study of 15 adults who smoke, each of whom used tobacco-free pouches
          of several strengths and a cigarette on different days:
        </P>
        <Bullets
          items={[
            "Heart rate rose by about 25 beats per minute with a 30 mg pouch, compared with about 27 for a cigarette and about 12 for a 20 mg pouch. A 6 mg pouch caused only a slight rise.",
            "Measures of arterial stiffness rose during use of the 20 mg and 30 mg pouches and the cigarette.",
            "Central systolic blood pressure rose significantly during the acute phase with the high-nicotine pouches and the cigarette.",
          ]}
        />
        <P>
          These are short-term effects in a small group. Nobody yet knows what years of daily
          pouch use means for heart disease. A 2026 review in the <em>Journal of Internal
          Medicine</em> found signs of higher cardiovascular death among long-term snus users,
          pointed to nicotine as the likely main driver, and noted that nicotine pouches lack
          long-term cardiovascular outcome data. If you have a heart condition or high blood
          pressure, discuss your pouch use with your clinician.
        </P>
      </Section>

      <Section id="youth" title="Young people and pregnancy">
        <P>
          Nicotine is riskiest for developing brains. The CDC says brain development continues
          until about age 25, that nicotine can affect the parts of the brain that control
          attention, learning, mood and impulse control, and that young people can show signs of
          addiction quickly, even without daily use.
        </P>
        <Bullets
          items={[
            "In the 2024 National Youth Tobacco Survey, 1.8% of US middle and high school students currently used nicotine pouches (FDA, CDC).",
            "Truth Initiative reports that in 2025, 1.7% of students (about 460,000) used pouches. Of those, 26.3% used them on at least 20 of the past 30 days and 17.6% used them daily.",
            "Truth Initiative also reports that current use among 10th and 12th graders roughly doubled from 1.3% in 2023 to 2.6% in 2024.",
            "Accidental pouch ingestions by children under 6 rose by about 763% between 2020 and 2023 (Truth Initiative, citing Pediatrics). Keep cans out of reach.",
          ]}
        />
        <P>
          The CDC also notes that nicotine is toxic to developing fetuses. If you are pregnant or
          planning a pregnancy, talk to your clinician about stopping.
        </P>
      </Section>

      <Section id="unknowns" title="What we don’t know yet">
        <P>
          Nicotine pouches entered the US market in 2016 (CDC), so nobody has used them for
          decades. The CDC says scientists are still studying their short- and long-term health
          effects, and Truth Initiative says the long-term effects of Zyn are unknown.
        </P>
        <P>
          A 2025 scoping review of 62 studies noted that much of the key data on pouch chemistry
          and nicotine delivery comes from industry-funded studies, and called for more
          independent research. Until there is long-term data on cancer, heart disease and gum
          health in pouch users, any claim that pouches are “safe” goes beyond the evidence. So
          does any claim that they are as dangerous as cigarettes.
        </P>
      </Section>

      <Section id="vs-smoking" title="Zyn vs smoking: lower risk, not no risk">
        <P>
          The FDA describes tobacco risk as a continuum. Burned products like cigarettes are the
          most harmful. Non-combusted products carry lower risk. The FDA says nicotine pouches
          can generally be a lower-risk alternative for adults who smoke, but are not risk-free.
          It also stresses that the toxic mix of chemicals in tobacco smoke, not nicotine itself,
          causes most of the serious disease from smoking.
        </P>
        <Bullets
          items={[
            "A 2025 scoping review found pouches contain fewer harmful compounds, at lower levels, than cigarettes and smokeless tobacco, with formaldehyde as the exception.",
            "The benefit depends on switching completely. The FDA says adults who switch should switch completely, with quitting all tobacco as the end goal.",
            "In practice, many people end up using both. In a nationally representative survey published in 2026, none of the US adults who used pouches alongside another tobacco product in 2023 had switched to pouches only a year later, and they were less likely to have quit tobacco than people who did not dual-use (10.1% vs 23.7%).",
          ]}
        />
        <P>
          For a side-by-side comparison of nicotine, smoke and cost, see{" "}
          <Link className={LINK} href="/zyn-vs-cigarettes">
            Zyn vs cigarettes
          </Link>
          .
        </P>
      </Section>

      <Section id="stop" title="If you want to stop using Zyn">
        <P>
          Wanting to stop is reason enough. Quitting all tobacco and nicotine products is the
          best option for your health (FDA). Practical first steps:
        </P>
        <Bullets
          items={[
            <>
              Step down from 6 mg to 3 mg pouches, then cut the number each day. Truth Initiative
              suggests this to ease into quitting. The{" "}
              <Link className={LINK} href="/tools/nicotine-pouch-calculator">
                nicotine pouch calculator
              </Link>{" "}
              builds a taper.
            </>,
            <>
              Ask a pharmacist or clinician about nicotine gum or lozenges, or prescription
              options. See{" "}
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
              Know what withdrawal looks like so it does not catch you off guard:{" "}
              <Link className={LINK} href="/zyn-withdrawal">
                Zyn withdrawal symptoms and timeline
              </Link>
              .
            </>,
            "Call 1-800-QUIT-NOW for free, confidential coaching (CDC), or text EXPROGRAM to 88709 for Truth Initiative’s free EX Program, which supports pouch users.",
          ]}
        />
        <P>
          The full plan is in{" "}
          <Link className={LINK} href="/quit-zyn">
            how to quit Zyn
          </Link>
          .
        </P>
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        If you decide to stop, Blou supports quitting nicotine pouches as well as cigarettes,
        with SOS help for cravings and every milestone on one visual timeline.
      </InlineAppCta>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Ready to stop using pouches?"
        description="Blou supports quitting nicotine pouches like Zyn and cigarettes. Get SOS help when a craving hits and see your progress on one timeline."
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
          This page is educational and is not medical advice. Evidence on nicotine pouches is
          still developing, and several studies cited here are small or short-term. If you have a
          health condition, are pregnant, or take medication, talk to a clinician about your
          nicotine use.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/quit-zyn" variant="secondary">
          How to quit Zyn →
        </ButtonLink>
        <ButtonLink href="/zyn-withdrawal" variant="secondary">
          Zyn withdrawal →
        </ButtonLink>
        <ButtonLink href="/zyn-vs-cigarettes" variant="secondary">
          Zyn vs cigarettes →
        </ButtonLink>
      </div>
    </div>
  );
}
