import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta } from "@/components/marketing/AppCta";
import { FaqSection } from "@/components/blou/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  MEDIAN_SMOKING_RATE,
  NATIONAL_QUITLINE,
  STATE_DATA_META,
  US_STATES,
  formatUsd,
} from "@/lib/stateData";

const PATH = "/quit-smoking-help";
const PUBLISHED = "2026-10-15";
const CAMPAIGN = "state_hub";

export const metadata: Metadata = buildMetadata({
  title: "Free quit-smoking help by state + cigarette tax",
  description:
    "Every US state's free quitline, free nicotine patch offer, cigarette tax per pack, and estimated pack price in one table, sourced from CDC data.",
  path: PATH,
  keywords: [
    "free nicotine patches",
    "quitline by state",
    "cigarette tax by state",
    "cigarette prices by state",
    "free quit smoking help",
  ],
});

const nrtLabel = { yes: "Yes", limited: "Some callers", no: "Not listed", unknown: "Ask" } as const;

const faqItems = [
  {
    question: "How do I get free nicotine patches?",
    answer: `Call ${NATIONAL_QUITLINE}. It connects you to your state's quitline, and many state quitlines send free patches, gum or lozenges to eligible adults who enroll. Pick your state below to see what it offers.`,
  },
  {
    question: "Which state has the highest cigarette tax?",
    answer: `${[...US_STATES].sort((a, b) => b.cigaretteTaxPerPack - a.cigaretteTaxPerPack)[0].name} has the highest state cigarette tax, and ${[...US_STATES].sort((a, b) => a.cigaretteTaxPerPack - b.cigaretteTaxPerPack)[0].name} has the lowest (CDC STATE System, ${STATE_DATA_META.taxAsOf}).`,
  },
  {
    question: "Is the quitline really free?",
    answer: "Yes. State quitlines offer free, confidential coaching by phone, and many also offer text or online programs. Free medication offers vary by state and eligibility.",
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

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={datasetJsonLd} />
      <Breadcrumbs items={[{ name: "Quit help by state", path: PATH }]} />

      <ArticleHeader
        kicker="Quit help by state"
        title="Free help to quit smoking in every US state"
        datePublished={PUBLISHED}
        dateModified={PUBLISHED}
        campaign={CAMPAIGN}
      >
        <p>
          Every state runs a free quitline, and many send free nicotine patches, gum or lozenges. Call{" "}
          <strong className="text-ink">{NATIONAL_QUITLINE}</strong> from anywhere in the US to reach
          yours. The table also shows each state&apos;s cigarette tax and what a pack likely costs.
        </p>
        <p className="mt-2 text-sm">Updated October 2026. Median adult smoking rate across states: {MEDIAN_SMOKING_RATE.toFixed(1)}%.</p>
      </ArticleHeader>

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

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />
    </div>
  );
}
