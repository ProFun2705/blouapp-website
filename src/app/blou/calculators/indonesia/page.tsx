import type { Metadata } from "next";
import { CountryMoneyCalculatorPage } from "@/components/blou/CountryMoneyCalculatorPage";

export const metadata: Metadata = {
  title: "Indonesia",
  description: "Quit smoking money saved calculator with Indonesia defaults.",
};

export default function IndonesiaCalculatorsPage() {
  return (
    <CountryMoneyCalculatorPage
      countryName="Indonesia"
      currencyCode="IDR"
      currencySymbol="Rp"
      defaultPackPrice={35000}
    />
  );
}
