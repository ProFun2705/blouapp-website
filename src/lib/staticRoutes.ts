/**
 * Single source of truth for static (non-data-driven) routes. It feeds the
 * sitemap AND the article index on /guides, so every article listed here is
 * linked from a hub page (no orphans). Guides and country calculators are
 * listed by their own generators in `app/sitemap.ts`.
 *
 * Keep `lastModified` per-route. Update it ONLY when the page content
 * meaningfully changes — never bump on every deploy.
 *
 * Legal pages (/privacy, /terms) are noindex and intentionally not listed.
 */

export type ArticleGroup =
  | "Start here"
  | "Withdrawal and recovery"
  | "Methods and medication"
  | "Situations and health conditions"
  | "Slips and relapse"
  | "Quit apps compared"
  | "Nicotine pouches"
  | "Free tools";

export type StaticRoute = {
  /** URL path, beginning with "/". */
  path: string;
  /** ISO date (YYYY-MM-DD). Bump when the page's content changes. */
  lastModified: string;
  /** Present for articles: short label and hub group for the article index. */
  label?: string;
  group?: ArticleGroup;
};

const OCT_2026 = "2026-10-13";
const OCT_15_2026 = "2026-10-15";
const OCT_28_2026 = "2026-10-28";

export const staticRoutes: StaticRoute[] = [
  { path: "/", lastModified: OCT_2026 },
  { path: "/about", lastModified: OCT_2026 },
  { path: "/guides", lastModified: OCT_2026 },
  { path: "/tools", lastModified: OCT_2026 },
  { path: "/tools/money-saved", lastModified: OCT_2026 },
  { path: "/tools/lung-recovery", lastModified: OCT_2026 },
  { path: "/calculators", lastModified: OCT_2026 },

  { path: "/how-to-quit-smoking", lastModified: OCT_2026, label: "How to quit smoking: step-by-step plan", group: "Start here" },
  { path: "/prepare-to-quit-smoking", lastModified: OCT_2026, label: "Prepare to quit: 7-day checklist", group: "Start here" },
  { path: "/stop-smoking-today", lastModified: OCT_2026, label: "Stop smoking today", group: "Start here" },
  { path: "/first-week-quit-smoking", lastModified: OCT_2026, label: "Your first week without smoking", group: "Start here" },
  { path: "/motivation-to-quit-smoking", lastModified: OCT_2026, label: "Motivation to quit smoking", group: "Start here" },
  { path: "/why-cant-i-quit-smoking", lastModified: OCT_2026, label: "Why can't I quit smoking?", group: "Start here" },
  { path: "/is-it-too-late-to-quit-smoking", lastModified: OCT_2026, label: "Is it too late to quit?", group: "Start here" },
  { path: "/quitting-smoking-after-40", lastModified: OCT_2026, label: "Quitting smoking after 40", group: "Start here" },
  { path: "/quitting-smoking-after-50", lastModified: OCT_2026, label: "Quitting smoking in your 50s", group: "Start here" },

  { path: "/quit-smoking-timeline", lastModified: OCT_15_2026, label: "Quit smoking timeline: hour by hour, year by year", group: "Withdrawal and recovery" },
  { path: "/can-lungs-heal-after-smoking", lastModified: OCT_15_2026, label: "Can your lungs heal after smoking?", group: "Withdrawal and recovery" },
  { path: "/smokers-lungs-vs-healthy-lungs", lastModified: OCT_15_2026, label: "Smokers' lungs vs healthy lungs", group: "Withdrawal and recovery" },
  { path: "/nicotine-withdrawal-timeline", lastModified: OCT_2026, label: "Nicotine withdrawal timeline, days 1–30", group: "Withdrawal and recovery" },
  { path: "/nicotine-withdrawal-symptoms", lastModified: OCT_2026, label: "Nicotine withdrawal symptoms", group: "Withdrawal and recovery" },
  { path: "/health-benefits-of-quitting-smoking", lastModified: OCT_2026, label: "Health benefits of quitting smoking", group: "Withdrawal and recovery" },
  { path: "/how-long-does-nicotine-stay-in-your-system", lastModified: OCT_2026, label: "How long nicotine stays in your system", group: "Withdrawal and recovery" },

  { path: "/quit-smoking-cold-turkey", lastModified: OCT_2026, label: "Quitting cold turkey", group: "Methods and medication" },
  { path: "/quit-smoking-without-nrt", lastModified: OCT_2026, label: "Quitting without NRT", group: "Methods and medication" },
  { path: "/nicotine-patch-vs-gum", lastModified: OCT_2026, label: "Nicotine patch vs gum", group: "Methods and medication" },
  { path: "/quit-smoking-with-nicotine-patch", lastModified: OCT_2026, label: "Quitting with the nicotine patch", group: "Methods and medication" },
  { path: "/quit-smoking-with-nicotine-gum", lastModified: OCT_2026, label: "Quitting with nicotine gum", group: "Methods and medication" },
  { path: "/quit-smoking-with-nicotine-lozenge", lastModified: OCT_2026, label: "Quitting with nicotine lozenges", group: "Methods and medication" },
  { path: "/combination-nrt-quit-smoking", lastModified: OCT_2026, label: "Combination NRT", group: "Methods and medication" },
  { path: "/quit-smoking-with-varenicline", lastModified: OCT_2026, label: "Quitting with varenicline (Chantix / Champix)", group: "Methods and medication" },
  { path: "/quit-smoking-with-bupropion", lastModified: OCT_2026, label: "Quitting with bupropion (Zyban)", group: "Methods and medication" },
  { path: "/nicotine-patch-side-effects", lastModified: OCT_15_2026, label: "Nicotine patch side effects", group: "Methods and medication" },
  { path: "/nrt-and-quit-smoking-app", lastModified: OCT_2026, label: "Using NRT with a quit app", group: "Methods and medication" },

  { path: "/quit-smoking-with-anxiety", lastModified: OCT_2026, label: "Quitting smoking with anxiety", group: "Situations and health conditions" },
  { path: "/quit-smoking-with-depression", lastModified: OCT_2026, label: "Quitting smoking with depression", group: "Situations and health conditions" },
  { path: "/quit-smoking-with-asthma", lastModified: OCT_2026, label: "Quitting smoking with asthma", group: "Situations and health conditions" },
  { path: "/quit-smoking-while-pregnant", lastModified: OCT_2026, label: "Quitting smoking while pregnant", group: "Situations and health conditions" },
  { path: "/quit-smoking-before-surgery", lastModified: OCT_2026, label: "Quitting smoking before surgery", group: "Situations and health conditions" },
  { path: "/quit-smoking-without-gaining-weight", lastModified: OCT_2026, label: "Quitting without gaining weight", group: "Situations and health conditions" },
  { path: "/stress-smoking-quit-plan", lastModified: OCT_2026, label: "Stress smoking", group: "Situations and health conditions" },
  { path: "/quit-smoking-on-a-budget", lastModified: OCT_2026, label: "Quitting on a budget", group: "Situations and health conditions" },
  { path: "/coffee-and-quitting-smoking", lastModified: OCT_2026, label: "Coffee and quitting smoking", group: "Situations and health conditions" },
  { path: "/alcohol-and-quitting-smoking", lastModified: OCT_2026, label: "Alcohol and quitting smoking", group: "Situations and health conditions" },
  { path: "/driving-and-quitting-smoking", lastModified: OCT_2026, label: "Driving and quitting smoking", group: "Situations and health conditions" },
  { path: "/living-with-a-smoker-while-quitting", lastModified: OCT_2026, label: "Living with a smoker while quitting", group: "Situations and health conditions" },
  { path: "/social-smoking", lastModified: OCT_2026, label: "Social smoking", group: "Situations and health conditions" },
  { path: "/how-to-help-someone-quit-smoking", lastModified: OCT_2026, label: "Helping someone quit", group: "Situations and health conditions" },
  { path: "/quit-vaping", lastModified: OCT_2026, label: "How to quit vaping", group: "Situations and health conditions" },
  { path: "/vape-withdrawal-symptoms", lastModified: OCT_15_2026, label: "Vape withdrawal symptoms", group: "Situations and health conditions" },
  { path: "/quit-vaping-timeline", lastModified: OCT_15_2026, label: "Quit vaping timeline", group: "Situations and health conditions" },
  { path: "/vaping-and-smoking-together", lastModified: OCT_2026, label: "Vaping and smoking together", group: "Situations and health conditions" },

  { path: "/i-smoked-one-cigarette", lastModified: OCT_2026, label: "I smoked one cigarette", group: "Slips and relapse" },
  { path: "/how-to-stop-a-relapse", lastModified: OCT_2026, label: "How to stop a relapse", group: "Slips and relapse" },
  { path: "/trying-to-quit-smoking-again", lastModified: OCT_2026, label: "Trying to quit again", group: "Slips and relapse" },

  { path: "/best-quit-smoking-apps", lastModified: OCT_2026, label: "Best quit smoking apps in 2026", group: "Quit apps compared" },
  { path: "/quit-smoking-app-for-iphone", lastModified: OCT_2026, label: "Quit smoking apps for iPhone", group: "Quit apps compared" },
  { path: "/quit-smoking-app-android", lastModified: OCT_2026, label: "Quit smoking apps for Android", group: "Quit apps compared" },
  { path: "/blou-vs-smoke-free", lastModified: OCT_2026, label: "Blou vs Smoke Free", group: "Quit apps compared" },
  { path: "/blou-vs-quitnow", lastModified: OCT_2026, label: "Blou vs QuitNow", group: "Quit apps compared" },
  { path: "/blou-vs-kwit", lastModified: OCT_2026, label: "Blou vs Kwit", group: "Quit apps compared" },
  { path: "/blou-vs-quitstart", lastModified: OCT_2026, label: "Blou vs quitSTART", group: "Quit apps compared" },
  { path: "/blou-vs-flamy", lastModified: OCT_2026, label: "Blou vs Flamy", group: "Quit apps compared" },
  { path: "/blou-vs-quit-genius", lastModified: OCT_2026, label: "Blou vs Quit Genius", group: "Quit apps compared" },

  { path: "/quit-zyn", lastModified: OCT_15_2026, label: "How to quit Zyn and nicotine pouches", group: "Nicotine pouches" },
  { path: "/zyn-withdrawal", lastModified: OCT_15_2026, label: "Zyn withdrawal: symptoms and timeline", group: "Nicotine pouches" },
  { path: "/are-zyns-bad-for-you", lastModified: OCT_15_2026, label: "Are Zyns bad for you?", group: "Nicotine pouches" },
  { path: "/zyn-vs-cigarettes", lastModified: OCT_15_2026, label: "Zyn vs cigarettes", group: "Nicotine pouches" },

  { path: "/tools/pack-year-calculator", lastModified: OCT_28_2026, label: "Pack-year calculator", group: "Free tools" },
  { path: "/tools/nicotine-patch-plan", lastModified: OCT_15_2026, label: "Nicotine patch strength and step-down plan", group: "Free tools" },
  { path: "/tools/nicotine-pouch-calculator", lastModified: OCT_15_2026, label: "Nicotine pouch calculator", group: "Free tools" },
  { path: "/quit-smoking-help", lastModified: OCT_15_2026, label: "Free quit-smoking help by US state", group: "Free tools" },
];

export const ARTICLE_GROUPS: ArticleGroup[] = [
  "Start here",
  "Withdrawal and recovery",
  "Methods and medication",
  "Situations and health conditions",
  "Slips and relapse",
  "Quit apps compared",
  "Nicotine pouches",
  "Free tools",
];

export const articleRoutes = staticRoutes.filter(
  (r): r is StaticRoute & { label: string; group: ArticleGroup } => Boolean(r.label && r.group),
);
