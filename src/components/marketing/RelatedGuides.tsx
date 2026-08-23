import Link from "next/link";
import { blouGuideBySlug, isPublishedGuide } from "@/lib/blouGuides";
import { RELATED_PILLAR_SLUGS } from "@/lib/relatedPillarSlugs";

type RelatedGuidesProps = {
  slugs: string[];
  title?: string;
};

function pillarEntry(
  slug: (typeof RELATED_PILLAR_SLUGS)[keyof typeof RELATED_PILLAR_SLUGS],
  title: string,
  category: string,
) {
  return { title, href: `/${slug}`, category };
}

/** Pillar tool URLs: add entries here; slug constants live in `@/lib/relatedPillarSlugs`. */
const RELATED_LINK_MAP: Record<
  string,
  { title: string; href: string; category: string }
> = {
  [RELATED_PILLAR_SLUGS.howToQuitSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.howToQuitSmoking,
    "How to quit smoking – complete plan",
    "Pillar",
  ),
  [RELATED_PILLAR_SLUGS.prepareToQuitSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.prepareToQuitSmoking,
    "How to prepare to quit smoking",
    "Pillar",
  ),
  [RELATED_PILLAR_SLUGS.bestQuitSmokingApps]: pillarEntry(
    RELATED_PILLAR_SLUGS.bestQuitSmokingApps,
    "Best quit smoking apps",
    "Pillar",
  ),
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
  [RELATED_PILLAR_SLUGS.iSmokedOneCigarette]: pillarEntry(
    RELATED_PILLAR_SLUGS.iSmokedOneCigarette,
    "I smoked one cigarette—what to do next",
    "Relapse & maintenance",
  ),
  [RELATED_PILLAR_SLUGS.alcoholAndQuittingSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.alcoholAndQuittingSmoking,
    "Alcohol and quitting smoking",
    "Relapse & maintenance",
  ),
  [RELATED_PILLAR_SLUGS.quittingSmokingAfter40]: pillarEntry(
    RELATED_PILLAR_SLUGS.quittingSmokingAfter40,
    "Quitting smoking after 40",
    "Relapse & maintenance",
  ),
  [RELATED_PILLAR_SLUGS.quittingSmokingAfter50]: pillarEntry(
    RELATED_PILLAR_SLUGS.quittingSmokingAfter50,
    "Quitting smoking in your 50s",
    "Relapse & maintenance",
  ),
  [RELATED_PILLAR_SLUGS.howToStopARelapse]: pillarEntry(
    RELATED_PILLAR_SLUGS.howToStopARelapse,
    "How to stop a relapse and recover your quit",
    "Relapse & maintenance",
  ),
  [RELATED_PILLAR_SLUGS.socialSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.socialSmoking,
    "Social smoking: am I addicted?",
    "Relapse & maintenance",
  ),
  [RELATED_PILLAR_SLUGS.freeQuitSmokingApp]: pillarEntry(
    RELATED_PILLAR_SLUGS.freeQuitSmokingApp,
    "Free quit smoking app",
    "Apps",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingAppForIphone]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingAppForIphone,
    "Quit smoking app for iPhone",
    "Apps",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingTracker]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingTracker,
    "Quit smoking tracker",
    "Apps",
  ),
  [RELATED_PILLAR_SLUGS.nicotineWithdrawalTimeline]: pillarEntry(
    RELATED_PILLAR_SLUGS.nicotineWithdrawalTimeline,
    "Nicotine withdrawal timeline",
    "Symptoms",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingWithNicotinePatch]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingWithNicotinePatch,
    "Quit smoking with the nicotine patch",
    "NRT",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingWithNicotineGum]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingWithNicotineGum,
    "Quit smoking with nicotine gum",
    "NRT",
  ),
  [RELATED_PILLAR_SLUGS.blouVsSmokeFree]: pillarEntry(
    RELATED_PILLAR_SLUGS.blouVsSmokeFree,
    "Blou vs Smoke Free",
    "Comparison",
  ),
  [RELATED_PILLAR_SLUGS.blouVsQuitnow]: pillarEntry(
    RELATED_PILLAR_SLUGS.blouVsQuitnow,
    "Blou vs QuitNow",
    "Comparison",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingWithoutGainingWeight]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingWithoutGainingWeight,
    "Quit smoking without gaining weight",
    "Plan",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingColdTurkey]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingColdTurkey,
    "Quit smoking cold turkey",
    "Plan",
  ),
  [RELATED_PILLAR_SLUGS.quitVaping]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitVaping,
    "How to quit vaping",
    "Vaping",
  ),
  [RELATED_PILLAR_SLUGS.vapingAndSmokingTogether]: pillarEntry(
    RELATED_PILLAR_SLUGS.vapingAndSmokingTogether,
    "Vaping and smoking together (dual use)",
    "Vaping",
  ),
  [RELATED_PILLAR_SLUGS.smokingCessationApp]: pillarEntry(
    RELATED_PILLAR_SLUGS.smokingCessationApp,
    "Smoking cessation app: what it should do",
    "Apps",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingAppAndroid]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingAppAndroid,
    "Quit smoking app for Android",
    "Apps",
  ),
  [RELATED_PILLAR_SLUGS.nrtAndQuitSmokingApp]: pillarEntry(
    RELATED_PILLAR_SLUGS.nrtAndQuitSmokingApp,
    "NRT and a quit smoking app",
    "Apps",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingWithNicotineLozenge]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingWithNicotineLozenge,
    "Quit smoking with nicotine lozenges",
    "NRT",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingWithVarenicline]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingWithVarenicline,
    "Quit smoking with varenicline (Chantix / Champix)",
    "Medication",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingWithBupropion]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingWithBupropion,
    "Quit smoking with bupropion (Zyban)",
    "Medication",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingBeforeSurgery]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingBeforeSurgery,
    "Quit smoking before surgery",
    "Clinical contexts",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingWhilePregnant]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingWhilePregnant,
    "Quit smoking while pregnant (clinician-first)",
    "Clinical contexts",
  ),
  [RELATED_PILLAR_SLUGS.whyCantIQuitSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.whyCantIQuitSmoking,
    "Why can’t I quit smoking?",
    "Mindset",
  ),
  [RELATED_PILLAR_SLUGS.tryingToQuitSmokingAgain]: pillarEntry(
    RELATED_PILLAR_SLUGS.tryingToQuitSmokingAgain,
    "Trying to quit smoking again",
    "Mindset",
  ),
  [RELATED_PILLAR_SLUGS.blouVsFlamy]: pillarEntry(
    RELATED_PILLAR_SLUGS.blouVsFlamy,
    "Blou vs Flamy",
    "Comparison",
  ),
  [RELATED_PILLAR_SLUGS.blouVsQuitGenius]: pillarEntry(
    RELATED_PILLAR_SLUGS.blouVsQuitGenius,
    "Blou vs Quit Genius",
    "Comparison",
  ),
  [RELATED_PILLAR_SLUGS.motivationToQuitSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.motivationToQuitSmoking,
    "Motivation to quit smoking",
    "Mindset",
  ),
  [RELATED_PILLAR_SLUGS.firstWeekQuitSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.firstWeekQuitSmoking,
    "First week quit smoking",
    "Playbook",
  ),
  [RELATED_PILLAR_SLUGS.nicotinePatchVsGum]: pillarEntry(
    RELATED_PILLAR_SLUGS.nicotinePatchVsGum,
    "Nicotine patch vs gum",
    "NRT",
  ),
  [RELATED_PILLAR_SLUGS.howToHelpSomeoneQuitSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.howToHelpSomeoneQuitSmoking,
    "How to help someone quit smoking",
    "Support",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingWithoutNrt]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingWithoutNrt,
    "Quit smoking without NRT",
    "Plan",
  ),
  [RELATED_PILLAR_SLUGS.stopSmokingToday]: pillarEntry(
    RELATED_PILLAR_SLUGS.stopSmokingToday,
    "Stop smoking today",
    "Playbook",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingOnABudget]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingOnABudget,
    "Quit smoking on a budget",
    "Plan",
  ),
  [RELATED_PILLAR_SLUGS.stressSmokingQuitPlan]: pillarEntry(
    RELATED_PILLAR_SLUGS.stressSmokingQuitPlan,
    "Stress smoking quit plan",
    "Plan",
  ),
  [RELATED_PILLAR_SLUGS.drivingAndQuittingSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.drivingAndQuittingSmoking,
    "Driving and quitting smoking",
    "Cues",
  ),
  [RELATED_PILLAR_SLUGS.livingWithASmokerWhileQuitting]: pillarEntry(
    RELATED_PILLAR_SLUGS.livingWithASmokerWhileQuitting,
    "Living with a smoker while quitting",
    "Support",
  ),
  [RELATED_PILLAR_SLUGS.nicotineWithdrawalSymptoms]: pillarEntry(
    RELATED_PILLAR_SLUGS.nicotineWithdrawalSymptoms,
    "Nicotine withdrawal symptoms",
    "Symptoms",
  ),
  [RELATED_PILLAR_SLUGS.combinationNrtQuitSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.combinationNrtQuitSmoking,
    "Combination NRT to quit smoking",
    "NRT",
  ),
  [RELATED_PILLAR_SLUGS.stayQuitAfterOneMonth]: pillarEntry(
    RELATED_PILLAR_SLUGS.stayQuitAfterOneMonth,
    "Stay quit after one month",
    "Maintenance",
  ),
  [RELATED_PILLAR_SLUGS.bestQuitSmokingAppForBeginners]: pillarEntry(
    RELATED_PILLAR_SLUGS.bestQuitSmokingAppForBeginners,
    "Best quit smoking app for beginners",
    "Apps",
  ),
  [RELATED_PILLAR_SLUGS.isItTooLateToQuitSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.isItTooLateToQuitSmoking,
    "Is it too late to quit smoking?",
    "Mindset",
  ),
  [RELATED_PILLAR_SLUGS.coffeeAndQuittingSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.coffeeAndQuittingSmoking,
    "Coffee and quitting smoking",
    "Cues",
  ),
  [RELATED_PILLAR_SLUGS.blouVsKwit]: pillarEntry(
    RELATED_PILLAR_SLUGS.blouVsKwit,
    "Blou vs Kwit",
    "Comparison",
  ),
  [RELATED_PILLAR_SLUGS.blouVsQuitstart]: pillarEntry(
    RELATED_PILLAR_SLUGS.blouVsQuitstart,
    "Blou vs quitSTART",
    "Comparison",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingWithAnxiety]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingWithAnxiety,
    "Quit smoking with anxiety",
    "Clinical contexts",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingWithDepression]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingWithDepression,
    "Quit smoking with depression",
    "Clinical contexts",
  ),
  [RELATED_PILLAR_SLUGS.quitSmokingWithAsthma]: pillarEntry(
    RELATED_PILLAR_SLUGS.quitSmokingWithAsthma,
    "Quit smoking with asthma",
    "Clinical contexts",
  ),
  [RELATED_PILLAR_SLUGS.bestQuitSmokingAppForHeavySmokers]: pillarEntry(
    RELATED_PILLAR_SLUGS.bestQuitSmokingAppForHeavySmokers,
    "Best quit smoking app for heavy smokers",
    "Apps",
  ),
  [RELATED_PILLAR_SLUGS.healthBenefitsOfQuittingSmoking]: pillarEntry(
    RELATED_PILLAR_SLUGS.healthBenefitsOfQuittingSmoking,
    "Health benefits of quitting smoking",
    "Benefits",
  ),
  [RELATED_PILLAR_SLUGS.howLongDoesNicotineStayInYourSystem]: pillarEntry(
    RELATED_PILLAR_SLUGS.howLongDoesNicotineStayInYourSystem,
    "How long does nicotine stay in your system?",
    "Symptoms",
  ),
  [RELATED_PILLAR_SLUGS.compare]: pillarEntry(
    RELATED_PILLAR_SLUGS.compare,
    "Compare quit smoking apps",
    "Comparison",
  ),
  [RELATED_PILLAR_SLUGS.kwitVsSmokeFree]: pillarEntry(
    RELATED_PILLAR_SLUGS.kwitVsSmokeFree,
    "Kwit vs Smoke Free",
    "Comparison",
  ),
  [RELATED_PILLAR_SLUGS.kwitVsQuitnow]: pillarEntry(
    RELATED_PILLAR_SLUGS.kwitVsQuitnow,
    "Kwit vs QuitNow",
    "Comparison",
  ),
  [RELATED_PILLAR_SLUGS.smokeFreeVsQuitnow]: pillarEntry(
    RELATED_PILLAR_SLUGS.smokeFreeVsQuitnow,
    "Smoke Free vs QuitNow",
    "Comparison",
  ),
};

export function RelatedGuides({ slugs, title = "Related reading" }: RelatedGuidesProps) {
  const items = slugs.flatMap((slug) => {
    const overlay = RELATED_LINK_MAP[slug];
    if (overlay) return [{ slug, ...overlay }];
    const guide = blouGuideBySlug[slug];
    if (!guide || !isPublishedGuide(guide)) return [];
    return [
      {
        slug,
        href: `/guides/${guide.slug}`,
        title: guide.title,
        category: guide.category === "milestone" ? "Milestone" : "Symptom",
      },
    ];
  }).slice(0, 4);

  if (!items.length) return null;

  return (
    <section className="section-block">
      <h2 className="text-xl font-semibold text-teal-950">{title}</h2>
      <ul className="mt-4 divide-y divide-teal-200">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={item.href}
              className="flex items-baseline justify-between gap-4 py-3 text-sm text-teal-900 hover:text-teal-950"
            >
              <span className="font-medium">{item.title}</span>
              <span className="shrink-0 text-xs text-teal-700">{item.category}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
