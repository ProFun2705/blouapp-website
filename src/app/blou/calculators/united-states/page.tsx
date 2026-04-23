import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "United States",
  description: "Quit smoking calculators for the United States.",
};

export default function UnitedStatesCalculatorsPage() {
  return (
    <article className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>United States</h1>
      <p>
        Placeholder for US-specific quit calculators (currency, typical pack
        prices, and local context).
      </p>
      <p>
        <Link href="/blou/calculators">← Calculators by country</Link>
      </p>
    </article>
  );
}
