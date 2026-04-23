import type { Metadata } from "next";
import { CountryMoneyCalculatorPage } from "@/components/blou/CountryMoneyCalculatorPage";

export const metadata: Metadata = {
  title: "United States",
  description: "Quit smoking money saved calculator with United States defaults.",
};

export default function UnitedStatesCalculatorsPage() {
  return (
    <CountryMoneyCalculatorPage
      countryName="United States"
      currencyCode="USD"
      currencySymbol="$"
      defaultPackPrice={8.5}
    />
  );
}
