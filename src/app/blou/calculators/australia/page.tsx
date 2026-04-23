import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Australia",
  description: "Quit smoking calculators for Australia.",
};

export default function AustraliaCalculatorsPage() {
  return (
    <article className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>Australia</h1>
      <p>
        Placeholder for Australia-specific quit calculators (AUD and local
        context).
      </p>
      <p>
        <Link href="/blou/calculators">← Calculators by country</Link>
      </p>
    </article>
  );
}
