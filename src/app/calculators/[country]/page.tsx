import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryMoneyCalculatorPage } from "@/components/blou/CountryMoneyCalculatorPage";
import { buildMetadata } from "@/lib/seo";
import { countries, countryBySlug } from "@/lib/countryData";

type CountryPageProps = {
  params: Promise<{ country: string }>;
};

function placeName(name: string) {
  return name.startsWith("United ") ? `the ${name}` : name;
}

function toOpenGraphLocale(locale: string) {
  return locale.replace("-", "_");
}

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
  languages["x-default"] = "/calculators";

  return buildMetadata({
    title: `Cost of smoking in ${placeName(country.name)}: calculator`,
    description: `What smoking costs in ${placeName(country.name)} at the local pack price (${country.defaultPackPrice} ${country.currencyCode}), and what quitting saves from 1 day to 10 years.`,
    path: `/calculators/${country.slug}`,
    keywords: [
      `quit smoking calculator ${country.name}`,
      `cigarette pack price ${country.name}`,
      "money saved quitting smoking",
      "smoking cost calculator",
    ],
    languages,
    ogLocale: toOpenGraphLocale(country.locale),
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
