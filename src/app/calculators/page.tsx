import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { buildMetadata } from "@/lib/seo";
import { countries } from "@/lib/countryData";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking calculators by country",
  description:
    "Locally sourced pack-price calculators for the United States, United Kingdom, Australia, Vietnam, and Indonesia. See savings in your own currency.",
  path: "/calculators",
  keywords: [
    "quit smoking calculator",
    "cigarettes cost by country",
    "money saved quitting smoking",
    "smoking cost calculator",
  ],
});

const faqItems = [
  {
    question: "Why does each country have its own calculator?",
    answer:
      "Pack prices, currencies, and taxes vary dramatically between countries. A US-dollar global calculator is misleading for most of our users, so each country page starts from a sourced local price and uses local currency formatting.",
  },
  {
    question: "Where do the pack prices come from?",
    answer:
      "Each country page cites its price source and the year it applies to — typically the national tax authority, WHO country profile, or national health service.",
  },
  {
    question: "What if my country isn't listed?",
    answer:
      "Use the global calculator at /tools/money-saved, set the currency to your own, and enter the price you pay. We add country pages as we can verify local sources — email hello.blou.app@gmail.com to request one.",
  },
] as const;

export default function CalculatorsIndexPage() {
  return (
    <div className="flex flex-col gap-10">
      <Breadcrumbs items={[{ name: "Calculators", path: "/calculators" }]} />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Country calculators
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking calculators by country
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-teal-900/85">
          Start from a locally sourced pack price, in your own currency, and
          see exactly what quitting is worth at 1 day, 1 year, 5 years, and 10
          years smoke-free.
        </p>
        <div className="mt-6">
          <AppStoreBadgeLink
            campaign="calculators_index"
            placement="calculators_index"
          />
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "country-grid", label: "All countries" },
          { id: "global-fallback", label: "Global calculator" },
          { id: "faq", label: "FAQ" },
        ]}
      />

      <section
        id="country-grid"
        className="scroll-mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {countries.map((c) => (
          <Link
            key={c.slug}
            href={`/calculators/${c.slug}`}
            className="flex flex-col rounded-2xl border border-teal-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-teal-700">
              Calculator
            </p>
            <h2 className="mt-1 text-lg font-semibold text-teal-950">{c.name}</h2>
            <p className="mt-1 text-sm text-teal-900/80">
              From <strong>{c.defaultPackPrice} {c.currencyCode}</strong> per pack (
              {c.priceAsOf})
            </p>
            <p className="mt-3 text-xs leading-5 text-teal-900/70">
              Source: {c.priceSource.name}
            </p>
          </Link>
        ))}
      </section>

      <section
        id="global-fallback"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Country not listed?
        </h2>
        <p className="mt-2 text-sm leading-6 text-teal-900/85">
          Use the global calculator and enter your own pack price and currency.
        </p>
        <Link
          href="/tools/money-saved"
          className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-teal-600 px-4 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          Open global calculator
        </Link>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-calculators-index" />
      </section>
    </div>
  );
}
