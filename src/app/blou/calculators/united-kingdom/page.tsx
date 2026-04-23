import type { Metadata } from "next";
import { CountryMoneyCalculatorPage } from "@/components/blou/CountryMoneyCalculatorPage";

export const metadata: Metadata = {
  title: "United Kingdom",
  description: "Quit smoking money saved calculator with United Kingdom defaults.",
};

export default function UnitedKingdomCalculatorsPage() {
  return (
    <CountryMoneyCalculatorPage
      countryName="United Kingdom"
      currencyCode="GBP"
      currencySymbol="£"
      defaultPackPrice={13.5}
    />
  );
}
