import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryMoneyCalculatorPage } from "@/components/blou/CountryMoneyCalculatorPage";
import { buildMetadata } from "@/lib/seo";
import { countries, countryBySlug } from "@/lib/countryData";

type CountryPageProps = {
  params: Promise<{ country: string }>;
};

export async function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countryBySlug[slug];
  if (!country) return {};

  const languages = Object.fromEntries(
    countries.map((c) => [c.hreflang, `/calculators/${c.slug}`]),
  );
  languages["x-default"] = `/calculators/${country.slug}`;

  return buildMetadata({
    title: `Quit smoking money saved calculator – ${country.name}`,
    description: `Free quit smoking calculator for ${country.name}. Local pack price (${country.defaultPackPrice} ${country.currencyCode}), local currency, 1-day to 10-year projections.`,
    path: `/calculators/${country.slug}`,
    keywords: [
      `quit smoking calculator ${country.name}`,
      `cigarette pack price ${country.name}`,
      "money saved quitting smoking",
      "smoking cost calculator",
    ],
    languages,
  });
}

export default async function CountryCalculatorPage({
  params,
}: CountryPageProps) {
  const { country: slug } = await params;
  const country = countryBySlug[slug];
  if (!country) notFound();
  return <CountryMoneyCalculatorPage country={country} />;
}
