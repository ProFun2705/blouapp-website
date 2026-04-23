"use client";

import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";

type StayOnTrackCardPlacement = "article_intro" | "article_footer_card";

type StayOnTrackCardProps = {
  campaign: string;
  placement: StayOnTrackCardPlacement;
  title?: string;
  description?: string;
  className?: string;
};

export function StayOnTrackCard({
  campaign,
  placement,
  title = "Stay on track after you read this",
  description = "Blou turns milestones, cravings, and savings into a simple daily rhythm so you do not have to white-knuckle it alone.",
  className,
}: StayOnTrackCardProps) {
  return (
    <section
      className={
        className ??
        "rounded-3xl border border-teal-200 bg-white p-8 shadow-sm"
      }
    >
      <h2 className="text-3xl font-semibold tracking-tight text-teal-950">{title}</h2>
      <p className="mt-3 max-w-3xl text-base leading-8 text-teal-900/80">
        {description}
      </p>
      <AppStoreBadgeLink
        campaign={campaign}
        placement={placement}
        className="mt-6 inline-flex items-center rounded-lg shadow-sm ring-1 ring-black/5 transition motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md"
      />
    </section>
  );
}
