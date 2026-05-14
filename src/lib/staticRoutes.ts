/**
 * Single source of truth for static (non-data-driven) routes that should appear
 * in the sitemap. Pages with their own dynamic content (guides, country
 * calculators) are listed by their generators in `app/sitemap.ts`.
 *
 * Keep `lastModified` per-route. Update it ONLY when the page content
 * meaningfully changes — never bump on every deploy. Search engines treat
 * unchanging-but-bumped lastmod as noise.
 */

export type StaticRoute = {
  /** URL path, beginning with "/". */
  path: string;
  /** ISO date (YYYY-MM-DD or full ISO). Bump when the page's content changes. */
  lastModified: string;
};

export const staticRoutes: StaticRoute[] = [
  { path: "/", lastModified: "2025-04-27" },
  { path: "/about", lastModified: "2025-04-23" },
  { path: "/guides", lastModified: "2025-04-27" },
  { path: "/tools", lastModified: "2025-04-23" },
  { path: "/tools/money-saved", lastModified: "2025-04-23" },
  { path: "/tools/lung-recovery", lastModified: "2025-04-23" },
  { path: "/calculators", lastModified: "2025-04-23" },
  { path: "/how-to-quit-smoking", lastModified: "2025-04-23" },
  { path: "/prepare-to-quit-smoking", lastModified: "2025-04-23" },
  { path: "/best-quit-smoking-apps", lastModified: "2025-04-23" },
  { path: "/i-smoked-one-cigarette", lastModified: "2025-04-24" },
  { path: "/alcohol-and-quitting-smoking", lastModified: "2025-04-27" },
  { path: "/quitting-smoking-after-40", lastModified: "2025-04-27" },
  { path: "/quitting-smoking-after-50", lastModified: "2025-04-27" },
  { path: "/how-to-stop-a-relapse", lastModified: "2025-04-27" },
  { path: "/social-smoking", lastModified: "2025-04-27" },
  { path: "/free-quit-smoking-app", lastModified: "2026-05-09" },
  { path: "/quit-smoking-app-for-iphone", lastModified: "2026-05-09" },
  { path: "/quit-smoking-tracker", lastModified: "2026-05-09" },
  { path: "/nicotine-withdrawal-timeline", lastModified: "2026-05-09" },
  { path: "/quit-smoking-with-nicotine-patch", lastModified: "2026-05-09" },
  { path: "/quit-smoking-with-nicotine-gum", lastModified: "2026-05-09" },
  { path: "/blou-vs-smoke-free", lastModified: "2026-05-09" },
  { path: "/blou-vs-quitnow", lastModified: "2026-05-09" },
  { path: "/quit-smoking-without-gaining-weight", lastModified: "2026-05-09" },
  { path: "/quit-smoking-cold-turkey", lastModified: "2026-05-09" },
  { path: "/quit-vaping", lastModified: "2026-05-13" },
  { path: "/vaping-and-smoking-together", lastModified: "2026-05-13" },
  { path: "/smoking-cessation-app", lastModified: "2026-05-13" },
  { path: "/quit-smoking-app-android", lastModified: "2026-05-13" },
  { path: "/nrt-and-quit-smoking-app", lastModified: "2026-05-13" },
  { path: "/quit-smoking-with-nicotine-lozenge", lastModified: "2026-05-13" },
  { path: "/quit-smoking-with-varenicline", lastModified: "2026-05-13" },
  { path: "/quit-smoking-with-bupropion", lastModified: "2026-05-13" },
  { path: "/quit-smoking-before-surgery", lastModified: "2026-05-13" },
  { path: "/quit-smoking-while-pregnant", lastModified: "2026-05-13" },
  { path: "/why-cant-i-quit-smoking", lastModified: "2026-05-13" },
  { path: "/trying-to-quit-smoking-again", lastModified: "2026-05-13" },
  { path: "/blou-vs-flamy", lastModified: "2026-05-13" },
  { path: "/blou-vs-quit-genius", lastModified: "2026-05-13" },
  { path: "/motivation-to-quit-smoking", lastModified: "2026-05-13" },
  { path: "/first-week-quit-smoking", lastModified: "2026-05-14" },
  { path: "/nicotine-patch-vs-gum", lastModified: "2026-05-14" },
  { path: "/how-to-help-someone-quit-smoking", lastModified: "2026-05-14" },
  { path: "/quit-smoking-without-nrt", lastModified: "2026-05-14" },
  { path: "/stop-smoking-today", lastModified: "2026-05-14" },
  { path: "/quit-smoking-on-a-budget", lastModified: "2026-05-14" },
  { path: "/stress-smoking-quit-plan", lastModified: "2026-05-14" },
  { path: "/driving-and-quitting-smoking", lastModified: "2026-05-14" },
  { path: "/living-with-a-smoker-while-quitting", lastModified: "2026-05-14" },
  { path: "/nicotine-withdrawal-symptoms", lastModified: "2026-05-14" },
  { path: "/combination-nrt-quit-smoking", lastModified: "2026-05-14" },
  { path: "/stay-quit-after-one-month", lastModified: "2026-05-14" },
  { path: "/best-quit-smoking-app-for-beginners", lastModified: "2026-05-14" },
  { path: "/is-it-too-late-to-quit-smoking", lastModified: "2026-05-14" },
  { path: "/coffee-and-quitting-smoking", lastModified: "2026-05-14" },
  { path: "/privacy", lastModified: "2025-04-23" },
  { path: "/terms", lastModified: "2025-04-23" },
];
