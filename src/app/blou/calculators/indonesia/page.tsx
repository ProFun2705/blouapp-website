import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indonesia",
  description: "Quit smoking calculators for Indonesia.",
};

export default function IndonesiaCalculatorsPage() {
  return (
    <article className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>Indonesia</h1>
      <p>
        Placeholder for Indonesia-specific quit calculators (IDR and local
        context).
      </p>
      <p>
        <Link href="/blou/calculators">← Calculators by country</Link>
      </p>
    </article>
  );
}
