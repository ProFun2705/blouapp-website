import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { buildArticleJsonLd, buildHowToJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, SITE_NAME, SITE_URL } from "@/lib/site";
import {
  MEDIAN_SMOKING_RATE,
  NATIONAL_QUITLINE,
  STATE_DATA_META,
  US_STATES,
  formatUsd,
} from "@/lib/stateData";

const PATH = "/quit-smoking-help";
const PUBLISHED = "2026-10-15";
const MODIFIED = "2026-11-24";
const CAMPAIGN = "state_hub";

export const metadata: Metadata = buildMetadata({
  title: "Free nicotine patches by state: how to get them",
  description:
    "How to get free nicotine patches: call 1-800-QUIT-NOW, then check your state's quitline offer in one table, plus cigarette tax and pack prices.",
  path: PATH,
  modifiedTime: MODIFIED,
  keywords: [
    "free nicotine patches",
    "quitline by state",
    "cigarette tax by state",
    "cigarette prices by state",
    "free quit smoking help",
    "free smoking patches",
    "free nicotine gum",
    "1-800-QUIT-NOW",
  ],
});

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "Quitlines and other cessation support resources",
    href: "https://www.cdc.gov/tobacco/hcp/patient-care/quitlines-and-other-resources.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "NAQC Quitline Map (state quitline profiles)",
    href: "https://map.naquitline.org/",
    publisher: "North American Quitline Consortium",
  },
  {
    label: "Quit smoking medicines",
    href: "https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/index.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "Find the best stop-smoking products for you",
    href: "https://www.nhs.uk/conditions/stop-smoking-treatments/",
    publisher: "NHS",
  },
];

const steps = [
  {
    name: "Call 1-800-QUIT-NOW",
    text: "Calling 1-800-QUIT-NOW (1-800-784-8669) transfers you to your state quitline. The coaching is free.",
  },
  {
    name: "Say you want free patches",
    text: "Ask the coach whether your state offers free nicotine replacement. Some state quitlines offer free medicine and others give vouchers or discounts (CDC).",
  },
  {
    name: "Answer the screening questions",
    text: "Most states want you to be ready to quit soon. Some states put uninsured or Medicaid callers first.",
  },
  {
    name: "Wait for your supply",
    text: "If you qualify, the quitline mails your supply. Use the patches as the label or your coach says.",
  },
];

const FREE_YES = US_STATES.filter((s) => s.quitline?.freeNrt === "yes").length;
const FREE_LIMITED = US_STATES.filter((s) => s.quitline?.freeNrt === "limited").length;

const nrtLabel = { yes: "Yes", limited: "Some callers", no: "Not listed", unknown: "Ask" } as const;

const faqItems = [
  {
    question: "How do I get free nicotine patches?",
    answer: `Call ${NATIONAL_QUITLINE}. It connects you to your state's quitline. Some state quitlines send free patches, gum or lozenges to eligible adults who enroll (CDC). Pick your state below to see what it offers.`,
  },
  {
    question: "Can I get free nicotine patches online?",
    answer: "Yes, through your state quitline. Check your state page for how to enroll. If you qualify, the quitline mails the patches to your home. Be careful with sites that promise free patches but ask for card details. Start from your state page in the table below.",
  },
  {
    question: "Does every state give free patches?",
    answer: `No. In our table, ${FREE_YES} states and DC offer free nicotine replacement to adults in general. ${FREE_LIMITED} states limit it to certain groups, and ${US_STATES.length - FREE_YES - FREE_LIMITED} could not be confirmed. Rules change, so check your state page or call to confirm.`,
  },
  {
    question: "Can I get free nicotine gum or lozenges too?",
    answer: "Often, yes. Where a quitline offers free medicine, it may be patches, gum or lozenges, or a mix. Ask the coach what is available. See /quit-smoking-with-nicotine-gum and /quit-smoking-with-nicotine-lozenge for how to use them.",
  },
  {
    question: "How many weeks of patches will I get?",
    answer: "It depends on the state, because each program sets its own amount. Ask your coach for your state's exact amount. For a typical step-down plan, see /tools/nicotine-patch-plan.",
  },
  {
    question: "What if I don't qualify for free patches?",
    answer: "You can still get free coaching from the quitline. Ask about vouchers or discounts too (CDC). Your insurer or Medicaid plan may also cover quit medicine, and coverage rules vary by state, so call the number on your card. Your doctor can tell you which patch strength fits you.",
  },
  {
    question: "Is the quitline really free?",
    answer: "Yes. State quitlines offer free, confidential coaching by phone, and many also offer text or online programs. Free medication offers vary by state and eligibility.",
  },
  {
    question: "Which state has the highest cigarette tax?",
    answer: `${[...US_STATES].sort((a, b) => b.cigaretteTaxPerPack - a.cigaretteTaxPerPack)[0].name} has the highest state cigarette tax, and ${[...US_STATES].sort((a, b) => a.cigaretteTaxPerPack - b.cigaretteTaxPerPack)[0].name} has the lowest (CDC STATE System, ${STATE_DATA_META.taxAsOf}).`,
  },
  {
    question: "How were the pack prices estimated?",
    answer: "The CDC's last published state averages are from 2019. We add any state tax increase since then. Manufacturer price rises aren't included, so real prices are usually higher.",
  },
] as const;

export default function StateHubPage() {
  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Quit-smoking help, cigarette tax and cost of smoking by US state",
    description:
      "State quitline programs and free nicotine replacement offers, state cigarette excise tax per pack, estimated pack price, and adult smoking rate for the 50 US states and DC.",
    url: `${SITE_URL}${PATH}`,
    creator: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    isBasedOn: [STATE_DATA_META.sources.tax, STATE_DATA_META.sources.price2019, STATE_DATA_META.sources.smoking],
    spatialCoverage: "United States",
    dateModified: PUBLISHED,
    license: "https://creativecommons.org/licenses/by/4.0/",
  };

  const articleJsonLd = buildArticleJsonLd({
    title: "Free nicotine patches by state: how to get them",
    description:
      "How to get free nicotine patches through your state quitline, with a table of every state's offer.",
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    dateReviewed: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
    citation: SOURCES.map((x) => ({ name: x.label, url: x.href, publisher: x.publisher })),
  });

  const howToJsonLd = buildHowToJsonLd({
    name: "How to get free nicotine patches",
    description: "Steps for getting free nicotine patches through your state quitline.",
    path: PATH,
    steps,
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={datasetJsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={howToJsonLd} />
      <Breadcrumbs items={[{ name: "Quit help by state", path: PATH }]} />

      <ArticleHeader
        kicker="Quit help by state"
        title="How to get free nicotine patches (by state)"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
      >
        <p>
          <strong className="text-ink">Updated November 2026.</strong> Call{" "}
          <strong className="text-ink">{NATIONAL_QUITLINE}</strong> from anywhere in the US to reach
          your state quitline and ask about free patches. The table below shows what each state
          offers, plus cigarette tax and pack prices.
        </p>
        <p className="mt-2 text-sm">Median adult smoking rate across states: {MEDIAN_SMOKING_RATE.toFixed(1)}%.</p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "how-to-get", label: "How to get free patches" },
          { id: "who-qualifies", label: "Who qualifies" },
          { id: "states", label: "Offers by state" },
          { id: "other-ways", label: "Other ways to pay less" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer={`Call ${NATIONAL_QUITLINE}. It transfers you to your state quitline, where coaching is free. Some state quitlines also mail free patches, gum or lozenges to eligible adults who enroll. In our table, ${FREE_YES} states and DC offer free nicotine replacement to adults in general, and ${FREE_LIMITED} limit it to certain groups. Rules vary, so check your state below.`}
          facts={[
            "Quitline coaching is free in every state (CDC).",
            "Free medicine is offered by some state quitlines, not all (CDC).",
            "Some states put uninsured or Medicaid callers first (CDC).",
          ]}
        />
      </section>

      <section id="how-to-get" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">How to get free nicotine patches in 4 steps</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-ink-muted">
          {steps.map((step, i) => (
            <li key={step.name} className="flex gap-3">
              <span className="font-semibold text-accent">{i + 1}.</span>
              <span>
                <strong className="text-ink">{step.name}.</strong> {step.text}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section id="who-qualifies" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Who qualifies for free patches?</h2>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          In most states, any resident can use quitline services. Many states want you to plan to
          quit within the next 30 days. Minimum ages vary, and some states put certain groups first,
          such as uninsured or Medicaid callers (CDC).
        </p>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          Free medicine has its own rules. Programs can set their own screening rules, so expect a few questions. In the table, &quot;Yes&quot; means free
          replacement is offered to adults in general. &quot;Some callers&quot; means only specific
          groups get it. If your state says &quot;Not listed&quot; or &quot;Ask&quot;, call and
          check.
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Patches handle the nicotine. Blou&apos;s SOS craving help covers the moments in between, and
        your timeline shows every smoke-free day you have built.
      </InlineAppCta>

      <section id="states" className="scroll-mt-24 rounded-card border border-line bg-surface p-4 shadow-card md:p-6">
        <h2 className="px-2 text-xl font-semibold text-ink">Quitlines, cigarette tax and pack prices by state</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[42rem] text-left text-sm">
            <caption className="sr-only">US states with quitline, free nicotine replacement, cigarette tax and estimated pack price</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="px-2 py-2 font-semibold">State</th>
                <th scope="col" className="px-2 py-2 font-semibold">Quitline</th>
                <th scope="col" className="px-2 py-2 font-semibold">Free NRT</th>
                <th scope="col" className="px-2 py-2 font-semibold">Tax / pack</th>
                <th scope="col" className="px-2 py-2 font-semibold">Est. pack price</th>
                <th scope="col" className="px-2 py-2 font-semibold">Adults who smoke</th>
              </tr>
            </thead>
            <tbody className="text-ink-muted">
              {US_STATES.map((s) => (
                <tr key={s.slug} className="border-b border-line last:border-0">
                  <th scope="row" className="px-2 py-2 font-medium text-ink">
                    <Link href={`/quit-smoking-help/${s.slug}`} className="underline decoration-accent/40 underline-offset-2">
                      {s.name}
                    </Link>
                  </th>
                  <td className="px-2 py-2">{s.quitline?.programName ?? "1-800-QUIT-NOW"}</td>
                  <td className="px-2 py-2">{nrtLabel[s.quitline?.freeNrt ?? "unknown"]}</td>
                  <td className="px-2 py-2">{formatUsd(s.cigaretteTaxPerPack)}</td>
                  <td className="px-2 py-2">{formatUsd(s.estimatedPackPrice)}</td>
                  <td className="px-2 py-2">{s.adultSmokingRate !== null ? `${s.adultSmokingRate.toFixed(1)}%` : "n/a"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 px-2 text-xs leading-5 text-ink-muted">
          Tax: CDC STATE System ({STATE_DATA_META.taxAsOf}). Pack price: 2019 average from the CDC&apos;s Tax
          Burden on Tobacco plus state tax increases since (manufacturer price rises not included). Adults
          who smoke: CDC BRFSS. Free NRT: each state&apos;s official quitline site. Free to reuse with a link
          to this page.
        </p>
      </section>

      <section id="other-ways" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Other ways to pay less for patches</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-ink-muted">
          <li>
            Ask your quitline about vouchers or discounts. Some states give these instead of free
            medicine (CDC).
          </li>
          <li>
            Call your insurer or Medicaid plan. Coverage rules for quit medicine vary by state, and
            you may need a prescription.
          </li>
          <li>
            Talk to your doctor or pharmacist about which patch strength fits you. See{" "}
            <Link href="/quit-smoking-with-nicotine-patch" className="underline decoration-accent/40 underline-offset-2">
              how to use the nicotine patch
            </Link>{" "}
            and the{" "}
            <Link href="/tools/nicotine-patch-plan" className="underline decoration-accent/40 underline-offset-2">
              nicotine patch plan tool
            </Link>
            .
          </li>
          <li>
            Gum and lozenges count too. Read about{" "}
            <Link href="/quit-smoking-with-nicotine-gum" className="underline decoration-accent/40 underline-offset-2">
              nicotine gum
            </Link>
            ,{" "}
            <Link href="/quit-smoking-with-nicotine-lozenge" className="underline decoration-accent/40 underline-offset-2">
              lozenges
            </Link>{" "}
            and{" "}
            <Link href="/quit-smoking-medication" className="underline decoration-accent/40 underline-offset-2">
              other quit medicines
            </Link>
            .
          </li>
        </ul>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <section id="sources" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Sources</h2>
        <ul className="mt-4 space-y-2 text-sm text-ink">
          {SOURCES.map((x) => (
            <li key={x.href}>
              <a className="underline decoration-accent/40 underline-offset-4" href={x.href} target="_blank" rel="noopener noreferrer">
                {x.label}
              </a>{" "}
              <span className="text-ink-muted">· {x.publisher}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          Blou is not a medical service. Ask your doctor or pharmacist before you use nicotine
          replacement, especially if you are pregnant or have a health condition.
        </p>
      </section>

      <EndAppCta campaign={CAMPAIGN} />
    </div>
  );
}
