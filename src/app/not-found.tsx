import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start gap-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink">This page isn&apos;t here</h1>
      <p className="text-base leading-7 text-ink-muted">
        It may have moved when we merged a few overlapping guides. These are the best places to
        pick up from:
      </p>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/how-to-quit-smoking">Quit plan</ButtonLink>
        <ButtonLink href="/guides" variant="secondary">
          All guides
        </ButtonLink>
        <ButtonLink href="/" variant="ghost">
          Home
        </ButtonLink>
      </div>
    </div>
  );
}
