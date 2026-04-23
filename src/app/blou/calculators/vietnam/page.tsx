import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vietnam",
  description: "Quit smoking calculators for Vietnam.",
};

export default function VietnamCalculatorsPage() {
  return (
    <article className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>Vietnam</h1>
      <p>
        Placeholder for Vietnam-specific quit calculators (VND and local
        context).
      </p>
      <p>
        <Link href="/blou/calculators">← Calculators by country</Link>
      </p>
    </article>
  );
}
