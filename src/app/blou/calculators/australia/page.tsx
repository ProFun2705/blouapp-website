import type { Metadata } from "next";
import { CountryMoneyCalculatorPage } from "@/components/blou/CountryMoneyCalculatorPage";

export const metadata: Metadata = {
  title: "Australia",
  description: "Quit smoking money saved calculator with Australia defaults.",
};

export default function AustraliaCalculatorsPage() {
  return (
    <CountryMoneyCalculatorPage
      countryName="Australia"
      currencyCode="AUD"
      currencySymbol="$"
      defaultPackPrice={35}
    />
  );
}
