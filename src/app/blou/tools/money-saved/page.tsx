import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";

export const metadata: Metadata = {
  title: "Money saved calculator",
  description:
    "Estimate money saved when you quit smoking. Calculator UI placeholder.",
};

export default function MoneySavedCalculatorPage() {
  return (
    <article className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>Money saved calculator</h1>
      <p>
        Placeholder for the money saved calculator. Replace this section with
        inputs, assumptions, and results when you implement the logic.
      </p>
      <p>
        <Link href="/blou/tools">← All tools</Link>
        {" · "}
        <Link href="/blou">Bloü</Link>
      </p>
      <AppStoreBadgeLink
        campaign="tool_money_calculator"
        placement="tool_money_calculator"
      />
    </article>
  );
}
