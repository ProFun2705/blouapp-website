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
  { path: "/privacy", lastModified: "2025-04-23" },
  { path: "/terms", lastModified: "2025-04-23" },
];
