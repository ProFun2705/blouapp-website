import Link from "next/link";
import { blouGuideBySlug, isPublishedGuide } from "@/lib/blouGuides";
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
  [RELATED_PILLAR_SLUGS.quitVaping]: {
    title: "How to quit vaping",
    href: "/quit-vaping",
    category: "Vaping",
  },
  [RELATED_PILLAR_SLUGS.vapingAndSmokingTogether]: {
    title: "Vaping and smoking together (dual use)",
    href: "/vaping-and-smoking-together",
    category: "Vaping",
  },
  [RELATED_PILLAR_SLUGS.smokingCessationApp]: {
    title: "Smoking cessation app: what it should do",
    href: "/smoking-cessation-app",
    category: "Apps",
  },
  [RELATED_PILLAR_SLUGS.quitSmokingAppAndroid]: {
    title: "Quit smoking app for Android",
    href: "/quit-smoking-app-android",
    category: "Apps",
  },
  [RELATED_PILLAR_SLUGS.nrtAndQuitSmokingApp]: {
    title: "NRT and a quit smoking app",
    href: "/nrt-and-quit-smoking-app",
    category: "Apps",
  },
  [RELATED_PILLAR_SLUGS.quitSmokingBeforeSurgery]: {
    title: "Quit smoking before surgery",
    href: "/quit-smoking-before-surgery",
    category: "Clinical contexts",
  },
  [RELATED_PILLAR_SLUGS.quitSmokingWhilePregnant]: {
    title: "Quit smoking while pregnant (clinician-first)",
    href: "/quit-smoking-while-pregnant",
    category: "Clinical contexts",
  },
  [RELATED_PILLAR_SLUGS.motivationToQuitSmoking]: {
    title: "Motivation to quit smoking",
    href: "/motivation-to-quit-smoking",
    category: "Mindset",
  },
  "trying-to-quit-smoking-again": {
    title: "Trying to quit smoking again",
    href: "/trying-to-quit-smoking-again",
    category: "Mindset",
  },
  "why-cant-i-quit-smoking": {
    title: "Why can’t I quit smoking?",
    href: "/why-cant-i-quit-smoking",
    category: "Mindset",
  },
  "quit-smoking-with-nicotine-lozenge": {
    title: "Quit smoking with nicotine lozenges",
    href: "/quit-smoking-with-nicotine-lozenge",
    category: "NRT",
  },
  "quit-smoking-with-varenicline": {
    title: "Quit smoking with varenicline (Chantix / Champix)",
    href: "/quit-smoking-with-varenicline",
    category: "Medication",
  },
  "quit-smoking-with-bupropion": {
    title: "Quit smoking with bupropion (Zyban)",
    href: "/quit-smoking-with-bupropion",
    category: "Medication",
  },
  "blou-vs-flamy": {
    title: "Blou vs Flamy",
    href: "/blou-vs-flamy",
    category: "Comparison",
  },
  "blou-vs-quit-genius": {
    title: "Blou vs Quit Genius",
    href: "/blou-vs-quit-genius",
    category: "Comparison",
  },
  "first-week-quit-smoking": {
    title: "First week quit smoking",
    href: "/first-week-quit-smoking",
    category: "Playbook",
  },
  "nicotine-patch-vs-gum": {
    title: "Nicotine patch vs gum",
    href: "/nicotine-patch-vs-gum",
    category: "NRT",
  },
  "how-to-help-someone-quit-smoking": {
    title: "How to help someone quit smoking",
    href: "/how-to-help-someone-quit-smoking",
    category: "Support",
  },
  "quit-smoking-without-nrt": {
    title: "Quit smoking without NRT",
    href: "/quit-smoking-without-nrt",
    category: "Plan",
  },
  "stop-smoking-today": {
    title: "Stop smoking today",
    href: "/stop-smoking-today",
    category: "Playbook",
  },
  "quit-smoking-on-a-budget": {
    title: "Quit smoking on a budget",
    href: "/quit-smoking-on-a-budget",
    category: "Plan",
  },
  "stress-smoking-quit-plan": {
    title: "Stress smoking quit plan",
    href: "/stress-smoking-quit-plan",
    category: "Plan",
  },
  "driving-and-quitting-smoking": {
    title: "Driving and quitting smoking",
    href: "/driving-and-quitting-smoking",
    category: "Cues",
  },
  "living-with-a-smoker-while-quitting": {
    title: "Living with a smoker while quitting",
    href: "/living-with-a-smoker-while-quitting",
    category: "Support",
  },
  "nicotine-withdrawal-symptoms": {
    title: "Nicotine withdrawal symptoms",
    href: "/nicotine-withdrawal-symptoms",
    category: "Symptoms",
  },
  "combination-nrt-quit-smoking": {
    title: "Combination NRT to quit smoking",
    href: "/combination-nrt-quit-smoking",
    category: "NRT",
  },
  "stay-quit-after-one-month": {
    title: "Stay quit after one month",
    href: "/stay-quit-after-one-month",
    category: "Maintenance",
  },
  "best-quit-smoking-app-for-beginners": {
    title: "Best quit smoking app for beginners",
    href: "/best-quit-smoking-app-for-beginners",
    category: "Apps",
  },
  "is-it-too-late-to-quit-smoking": {
    title: "Is it too late to quit smoking?",
    href: "/is-it-too-late-to-quit-smoking",
    category: "Mindset",
  },
  "coffee-and-quitting-smoking": {
    title: "Coffee and quitting smoking",
    href: "/coffee-and-quitting-smoking",
    category: "Cues",
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
          if (!guide || !isPublishedGuide(guide)) return null;

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
