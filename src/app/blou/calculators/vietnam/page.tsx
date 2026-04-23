import type { Metadata } from "next";
import { CountryMoneyCalculatorPage } from "@/components/blou/CountryMoneyCalculatorPage";

export const metadata: Metadata = {
  title: "Vietnam",
  description: "Quit smoking money saved calculator with Vietnam defaults.",
};

export default function VietnamCalculatorsPage() {
  return (
    <CountryMoneyCalculatorPage
      countryName="Vietnam"
      currencyCode="VND"
      currencySymbol="₫"
      defaultPackPrice={25000}
    />
  );
}
