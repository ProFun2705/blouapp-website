import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { EmbedCalculatorSnippet } from "@/components/blou/EmbedCalculatorSnippet";
import { FaqSection } from "@/components/blou/FaqSection";
import { MoneySavedCalculator } from "@/components/blou/MoneySavedCalculator";
import {
  buildHowToJsonLd,
  buildMetadata,
  buildWebApplicationJsonLd,
} from "@/lib/seo";
import { countries } from "@/lib/countryData";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking money saved calculator (free)",
  description:
    "See exactly how much money you save by quitting smoking. Free calculator with 1-day to 10-year projections and localized pack prices for five countries.",
  path: "/tools/money-saved",
  keywords: [
    "quit smoking money saved calculator",
    "smoking cost calculator",
    "how much money do you save quitting smoking",
    "money saved not smoking",
  ],
});

const faqItems = [
  {
    question: "How is my savings number calculated?",
    answer:
      "Your savings = (pack price ÷ 20 cigarettes) × cigarettes per day × days smoke-free. The calculator runs in your browser and does not apply inflation, tax changes, or bulk-buy adjustments.",
  },
  {
    question: "Why does the calculator use 20 cigarettes per pack?",
    answer:
      "20 is the standard pack size in most English-speaking markets (US, UK, AU, CA, NZ). Indonesia and Vietnam have 12s, 16s, and 20s in circulation — if your typical purchase is smaller, divide the price accordingly.",
  },
  {
    question: "Does this account for taxes and inflation?",
    answer:
      "No. It is a steady-state projection at your entered price. Cigarette excise typically rises faster than general inflation, so long-term savings tend to be larger in real terms than what the calculator shows.",
  },
  {
    question: "Can I share my result with someone?",
    answer:
      "Yes. Click 'Share result' to copy a URL that pre-fills your inputs. Great for showing a friend or family member the dollar figure instead of the addiction.",
  },
  {
    question: "Is there a version for my country?",
    answer:
      "We currently ship localized calculators for the United States, United Kingdom, Australia, Vietnam, and Indonesia. See the list below.",
  },
] as const;

const howToSteps = [
  {
    name: "Enter your cigarettes per day",
    text: "Use the average across a typical week — weekends included. Most adult daily smokers report 10–25 per day.",
  },
  {
    name: "Enter your local pack price",
    text: "Use the price you actually pay, not a national average. Loose tobacco users can estimate ≈ £12–15 per 30 g pouch and convert to a per-cigarette cost of ~£0.40.",
  },
  {
    name: "Read projections across 1 day to 10 years",
    text: "The calculator shows steady-state savings for six time horizons. Use the 1-year number for goal setting, and the 10-year number for long-term motivation.",
  },
  {
    name: "Share or save your result",
    text: "Click 'Share result' to copy a URL that pre-fills your inputs. Send it to yourself, a partner, or paste it into your Blou profile.",
  },
] as const;

const embedCode = `<iframe src="${SITE_URL}/tools/money-saved?cpd=20&pp=10" width="100%" height="720" style="border:1px solid #99f6e4;border-radius:16px;" title="Blou quit smoking money saved calculator"></iframe>
<p style="font-size:12px;color:#475569;margin-top:8px;">Calculator by <a href="${SITE_URL}" target="_blank" rel="noopener">Blou – Quit Smoking Tracker</a>.</p>`;

export default function MoneySavedToolPage() {
  const howToJsonLd = buildHowToJsonLd({
    name: "How to calculate money saved by quitting smoking",
    description:
      "Step-by-step use of the Blou quit smoking money saved calculator to project savings from 1 day to 10 years.",
    path: "/tools/money-saved",
    steps: howToSteps.map((s) => ({ name: s.name, text: s.text })),
  });

  const webAppJsonLd = buildWebApplicationJsonLd({
    name: "Blou quit smoking money saved calculator",
    description:
      "Free web calculator that projects money saved by quitting smoking, based on cigarettes per day and pack price.",
    path: "/tools/money-saved",
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="money-saved-howto-json-ld" type="application/ld+json">
        {JSON.stringify(howToJsonLd)}
      </Script>
      <Script id="money-saved-webapp-json-ld" type="application/ld+json">
        {JSON.stringify(webAppJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Tools", path: "/tools" },
          { name: "Money saved calculator", path: "/tools/money-saved" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Calculator
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking money saved calculator
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-teal-900/85">
          Enter what you smoke and what you pay, and see exactly how much money
          you keep at 1 day, 1 week, 1 month, 1 year, 5 years, and 10 years
          smoke-free. Everything runs in your browser — nothing is sent to a
          server.
        </p>
        <div className="mt-6">
          <AppStoreBadgeLink
            campaign="tool_money_calculator"
            placement="tool_money_calculator"
          />
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "calculator", label: "Money saved calculator" },
          { id: "how-to-use", label: "How to use this calculator" },
          { id: "methodology", label: "Methodology & assumptions" },
          { id: "country-versions", label: "Localized country calculators" },
          { id: "embed", label: "Embed on your site" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="calculator" className="scroll-mt-24">
        <MoneySavedCalculator instanceId="global" />
      </section>

      <section
        id="how-to-use"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How to use this calculator
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-6 text-teal-900/90">
          {howToSteps.map((step, index) => (
            <li key={step.name} className="flex gap-3">
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-teal-300 text-xs font-semibold text-teal-900"
              >
                {index + 1}
              </span>
              <span>
                <span className="font-medium text-teal-950">{step.name}.</span>{" "}
                {step.text}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="methodology"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Methodology & assumptions
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Pack size is fixed at 20 cigarettes, the standard in the US, UK,
              AU, and most European markets.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Savings are linear: price × usage × days. Taxes and inflation are
              excluded; cigarette excise typically rises faster than CPI, so
              real-world savings tend to exceed projections.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Currency formatting uses <code>Intl.NumberFormat</code> with the
              locale you pass in (defaults to en-US / USD).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Shareable URLs use <code>?cpd=</code> (cigarettes per day) and{" "}
              <code>?pp=</code> (pack price).
            </span>
          </li>
        </ul>
      </section>

      <section
        id="country-versions"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Localized versions
        </h2>
        <p className="mt-2 text-sm leading-6 text-teal-900/80">
          Each country calculator starts with a locally sourced pack price and
          local currency. Use these if you live outside the US.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {countries.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/calculators/${c.slug}`}
                className="block rounded-xl border border-teal-200 px-4 py-3 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="embed" className="scroll-mt-24">
        <EmbedCalculatorSnippet code={embedCode} />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-tool-money-saved" />
      </section>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/tools/money-saved</code>
      </p>
    </div>
  );
}
