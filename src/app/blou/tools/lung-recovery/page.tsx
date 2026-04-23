import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { LungRecoveryTimeline } from "@/components/blou/LungRecoveryTimeline";

export const metadata: Metadata = {
  title: "Lung recovery timeline",
  description:
    "Timeline of lung and health recovery after quitting smoking with milestone visualization.",
};

export default function LungRecoveryTimelinePage() {
  return (
    <article className="flex flex-col gap-8">
      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-teal-950">
          Lung recovery timeline
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-teal-900/85">
          Enter your smoke-free streak and review milestone-by-milestone
          recovery progress in a clear timeline.
        </p>
      </header>

      <LungRecoveryTimeline />

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/blou/tools"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← All tools
        </Link>
        <Link
          href="/blou"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Bloü
        </Link>
        <AppStoreBadgeLink
          campaign="tool_lung_recovery"
          placement="tool_lung_recovery"
        />
      </div>
    </article>
  );
}
