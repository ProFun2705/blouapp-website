import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";

export const metadata: Metadata = {
  title: "Lung recovery timeline",
  description:
    "Timeline of lung and health recovery after quitting smoking. Placeholder content.",
};

export default function LungRecoveryTimelinePage() {
  return (
    <article className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>Lung recovery timeline</h1>
      <p>
        Placeholder for the lung recovery timeline. Add milestones, charts, or
        sourced medical copy when ready.
      </p>
      <p>
        <Link href="/blou/tools">← All tools</Link>
        {" · "}
        <Link href="/blou">Bloü</Link>
      </p>
      <AppStoreBadgeLink
        campaign="tool_lung_recovery"
        placement="tool_lung_recovery"
      />
    </article>
  );
}
