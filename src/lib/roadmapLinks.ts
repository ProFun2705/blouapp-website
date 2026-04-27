export type RoadmapLinkItem = {
  slug: string;
  title: string;
  href: string;
  status: "live" | "planned";
};

/**
 * Cluster 3 roadmap links.
 * Flip `status` from "planned" to "live" once the route is published.
 */
export const RELAPSE_MAINTENANCE_LINKS: readonly RoadmapLinkItem[] = [
  {
    slug: "i-smoked-one-cigarette",
    title: "I smoked one cigarette—what to do next",
    href: "/i-smoked-one-cigarette",
    status: "live",
  },
  {
    slug: "how-to-stop-a-relapse",
    title: "How to stop a relapse and recover your quit",
    href: "/how-to-stop-a-relapse",
    status: "live",
  },
  {
    slug: "alcohol-and-quitting-smoking",
    title: "Alcohol and quitting smoking",
    href: "/alcohol-and-quitting-smoking",
    status: "live",
  },
  {
    slug: "social-smoking",
    title: "Social smoking: am I addicted?",
    href: "/social-smoking",
    status: "live",
  },
  {
    slug: "quitting-smoking-after-40",
    title: "Quitting smoking after 40",
    href: "/quitting-smoking-after-40",
    status: "live",
  },
  {
    slug: "quitting-smoking-after-50",
    title: "Quitting smoking in your 50s",
    href: "/quitting-smoking-after-50",
    status: "live",
  },
  {
    slug: "seasonal-quit-smoking-triggers",
    title: "Seasonal quit smoking triggers",
    href: "/seasonal-quit-smoking-triggers",
    status: "planned",
  },
  {
    slug: "quit-smoking-during-pregnancy",
    title: "Quit smoking during pregnancy",
    href: "/quit-smoking-during-pregnancy",
    status: "planned",
  },
] as const;
