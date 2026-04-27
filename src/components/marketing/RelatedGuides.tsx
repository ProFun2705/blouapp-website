import Link from "next/link";
import { blouGuideBySlug } from "@/lib/blouGuides";
import { RELATED_PILLAR_SLUGS } from "@/lib/relatedPillarSlugs";

type RelatedGuidesProps = {
  slugs: string[];
  title?: string;
};

/** Pillar tool URLs: add entries here; slug constants live in `@/lib/relatedPillarSlugs`. */
const RELATED_LINK_MAP: Record<
  string,
  { title: string; href: string; category: string }
> = {
  "how-to-quit-smoking": {
    title: "How to quit smoking – complete plan",
    href: "/how-to-quit-smoking",
    category: "Pillar",
  },
  "prepare-to-quit-smoking": {
    title: "How to prepare to quit smoking",
    href: "/prepare-to-quit-smoking",
    category: "Pillar",
  },
  "best-quit-smoking-apps": {
    title: "Best quit smoking apps",
    href: "/best-quit-smoking-apps",
    category: "Pillar",
  },
  "tools/money-saved": {
    title: "Money saved calculator",
    href: "/tools/money-saved",
    category: "Tool",
  },
  "tools/lung-recovery": {
    title: "Lung recovery timeline",
    href: "/tools/lung-recovery",
    category: "Tool",
  },
  [RELATED_PILLAR_SLUGS.iSmokedOneCigarette]: {
    title: "I smoked one cigarette—what to do next",
    href: "/i-smoked-one-cigarette",
    category: "Relapse & maintenance",
  },
  [RELATED_PILLAR_SLUGS.alcoholAndQuittingSmoking]: {
    title: "Alcohol and quitting smoking",
    href: "/alcohol-and-quitting-smoking",
    category: "Relapse & maintenance",
  },
  [RELATED_PILLAR_SLUGS.quittingSmokingAfter40]: {
    title: "Quitting smoking after 40",
    href: "/quitting-smoking-after-40",
    category: "Relapse & maintenance",
  },
  [RELATED_PILLAR_SLUGS.quittingSmokingAfter50]: {
    title: "Quitting smoking in your 50s",
    href: "/quitting-smoking-after-50",
    category: "Relapse & maintenance",
  },
  [RELATED_PILLAR_SLUGS.howToStopARelapse]: {
    title: "How to stop a relapse and recover your quit",
    href: "/how-to-stop-a-relapse",
    category: "Relapse & maintenance",
  },
  [RELATED_PILLAR_SLUGS.socialSmoking]: {
    title: "Social smoking: am I addicted?",
    href: "/social-smoking",
    category: "Relapse & maintenance",
  },
};

export function RelatedGuides({ slugs, title = "Related reading" }: RelatedGuidesProps) {
  if (!slugs.length) return null;

  return (
    <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-teal-950">{title}</h2>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {slugs.map((slug) => {
          const overlay = RELATED_LINK_MAP[slug];
          if (overlay) {
            return (
              <li key={slug}>
                <Link
                  href={overlay.href}
                  className="block rounded-xl border border-teal-200 px-4 py-3 text-sm text-teal-900 transition hover:bg-teal-50"
                >
                  <span className="block text-[10px] font-medium uppercase tracking-wide text-teal-700">
                    {overlay.category}
                  </span>
                  <span className="mt-1 block font-medium">{overlay.title}</span>
                </Link>
              </li>
            );
          }

          const guide = blouGuideBySlug[slug];
          if (!guide) return null;

          return (
            <li key={slug}>
              <Link
                href={`/guides/${guide.slug}`}
                className="block rounded-xl border border-teal-200 px-4 py-3 text-sm text-teal-900 transition hover:bg-teal-50"
              >
                <span className="block text-[10px] font-medium uppercase tracking-wide text-teal-700">
                  {guide.category === "milestone" ? "Milestone" : "Symptom"}
                </span>
                <span className="mt-1 block font-medium">{guide.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
