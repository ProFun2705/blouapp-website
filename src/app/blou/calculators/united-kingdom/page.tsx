import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "United Kingdom",
  description: "Quit smoking calculators for the United Kingdom.",
};

export default function UnitedKingdomCalculatorsPage() {
  return (
    <article className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>United Kingdom</h1>
      <p>
        Placeholder for UK-specific quit calculators (GBP, local norms, and
        units).
      </p>
      <p>
        <Link href="/blou/calculators">← Calculators by country</Link>
      </p>
    </article>
  );
}
