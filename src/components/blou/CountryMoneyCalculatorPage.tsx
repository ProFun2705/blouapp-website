import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { MoneySavedCalculator } from "@/components/blou/MoneySavedCalculator";

type CountryMoneyCalculatorPageProps = {
  countryName: string;
  currencyCode: string;
  currencySymbol: string;
  defaultPackPrice: number;
};

export function CountryMoneyCalculatorPage({
  countryName,
  currencyCode,
  currencySymbol,
  defaultPackPrice,
}: CountryMoneyCalculatorPageProps) {
  return (
    <article className="flex flex-col gap-8">
      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking money saved calculator ({countryName})
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-teal-900/85">
          Use local pricing assumptions in {currencyCode} to estimate your
          smoke-free savings and keep momentum with Bloü.
        </p>
      </header>

      <MoneySavedCalculator
        defaultPackPrice={defaultPackPrice}
        currencySymbol={currencySymbol}
      />

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/blou/calculators"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← Calculators by country
        </Link>
        <Link
          href="/blou/tools/money-saved"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Global calculator
        </Link>
        <AppStoreBadgeLink
          campaign={`country_calculator_${countryName.toLowerCase().replaceAll(" ", "_")}`}
          placement={`country_calculator_${countryName.toLowerCase().replaceAll(" ", "_")}`}
        />
      </div>
    </article>
  );
}
