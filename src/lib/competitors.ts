/**
 * Centralized competitor profiles for comparison pages.
 * Update pricing and features quarterly; pages import from here.
 */

export type ComparisonRow = {
  label: string;
  a: string;
  b: string;
};

export type CompetitorProfile = {
  slug: string;
  name: string;
  /** Short positioning line */
  positioning: string;
  platforms: string;
  motivation: string;
  cravingTools: string;
  pricing: string;
  strengths: string[];
  weaknesses: string[];
  bestFor: string[];
  notIdealFor: string[];
  /** App Store or official URL when known */
  storeUrl?: string;
};

export const BLOU_PROFILE: Pick<
  CompetitorProfile,
  "name" | "platforms" | "motivation" | "cravingTools" | "pricing" | "bestFor"
> = {
  name: "Blou",
  platforms: "iOS only (2026)",
  motivation: "Health timeline + savings progress",
  cravingTools: "Timer + one pre-committed action",
  pricing: "Free core tracking; optional premium",
  bestFor: [
    "iPhone users who want a clean visual tracker",
    "People motivated by savings and recovery milestones",
    "Fast craving support without gamification clutter",
  ],
};

export const COMPETITORS: Record<string, CompetitorProfile> = {
  kwit: {
    slug: "kwit",
    name: "Kwit",
    positioning: "RPG-style gamified quit tracker",
    platforms: "iOS and Android",
    motivation: "RPG-style XP and character leveling",
    cravingTools: "Cravings tied to game mechanics",
    pricing: "Free tier + paid subscription for full game content",
    strengths: [
      "Strong gamification for users motivated by XP and avatars",
      "Available on Android",
      "Achievement system builds daily habit streaks",
    ],
    weaknesses: [
      "Game framing may distract from health outcomes",
      "Full features require subscription",
    ],
    bestFor: [
      "Users motivated by leveling up a character",
      "Android users who need an app today",
    ],
    notIdealFor: [
      "Users who want minimal, health-focused UI",
      "People who find gamification distracting during cravings",
    ],
    storeUrl: "https://apps.apple.com/app/kwit-cigarette-stop-smoking/id1062395436",
  },
  "smoke-free": {
    slug: "smoke-free",
    name: "Smoke Free",
    positioning: "Long-running quit tracker with health stats",
    platforms: "iOS and Android",
    motivation: "Health stats, badges, and progress charts",
    cravingTools: "Craving diary and distraction tools",
    pricing: "Free with optional premium features",
    strengths: [
      "Large user base and long track record",
      "Detailed health improvement stats",
      "Cross-platform",
    ],
    weaknesses: [
      "Interface can feel dense for first-week quitters",
      "Premium upsells for some advanced features",
    ],
    bestFor: [
      "Data-oriented quitters who want detailed health charts",
      "Users who want both iOS and Android",
    ],
    notIdealFor: [
      "Users who want the simplest possible daily loop",
    ],
    storeUrl: "https://apps.apple.com/app/smoke-free-stop-smoking-now/id577767088",
  },
  quitnow: {
    slug: "quitnow",
    name: "QuitNow",
    positioning: "Community-driven quit tracker",
    platforms: "iOS and Android",
    motivation: "Community support + achievement badges",
    cravingTools: "Community tips and craving log",
    pricing: "Free with ads; premium removes ads",
    strengths: [
      "Active community of quitters",
      "Social support during hard days",
      "Cross-platform",
    ],
    weaknesses: [
      "Community feed can feel noisy",
      "Ad-supported free tier",
    ],
    bestFor: [
      "People motivated by peer support and community",
      "Social quitters who want to share milestones",
    ],
    notIdealFor: [
      "Users who want a private, distraction-free tracker",
    ],
    storeUrl: "https://apps.apple.com/app/quitnow-quit-smoking/id863001959",
  },
  quitstart: {
    slug: "quitstart",
    name: "quitSTART",
    positioning: "CDC-backed quit app with structured program",
    platforms: "iOS and Android",
    motivation: "Structured CDC quit program and tips",
    cravingTools: "CDC craving tips and mood tracking",
    pricing: "Free",
    strengths: [
      "Backed by CDC public-health guidance",
      "Completely free",
      "Structured program content",
    ],
    weaknesses: [
      "Less polished tracker UX than commercial apps",
      "Limited savings/visual milestone tooling",
    ],
    bestFor: [
      "Users who want a free, evidence-based government program",
      "People who prefer structured educational content",
    ],
    notIdealFor: [
      "Users who want premium visual tracking and savings dashboards",
    ],
    storeUrl: "https://apps.apple.com/app/quitstart/id576767463",
  },
  "quit-genius": {
    slug: "quit-genius",
    name: "Quit Genius",
    positioning: "Clinical CBT-based quit program",
    platforms: "iOS (program access varies)",
    motivation: "CBT coaching and structured clinical program",
    cravingTools: "CBT exercises and coached sessions",
    pricing: "Program pricing varies; often employer-sponsored",
    strengths: [
      "Clinical CBT approach",
      "Structured coaching program",
      "Strong for employer/benefits programs",
    ],
    weaknesses: [
      "Not a lightweight daily tracker",
      "Full program may require employer or paid access",
    ],
    bestFor: [
      "Users who want coached CBT rather than a simple tracker",
      "People with employer-sponsored cessation benefits",
    ],
    notIdealFor: [
      "Users who want a free, open-and-go daily tracker",
    ],
  },
  flamy: {
    slug: "flamy",
    name: "Flamy",
    positioning: "Visual quit companion with streak focus",
    platforms: "iOS",
    motivation: "Streak and visual progress tracking",
    cravingTools: "Craving log and streak visualization",
    pricing: "Free with optional premium",
    strengths: [
      "Clean visual streak focus",
      "iOS-native experience",
    ],
    weaknesses: [
      "Smaller feature set than established competitors",
      "Less content depth than Blou guides ecosystem",
    ],
    bestFor: [
      "iOS users who want a simple streak-focused companion",
    ],
    notIdealFor: [
      "Users who want detailed savings calculators and guide library on-site",
    ],
  },
};

export type BlouVsPageConfig = {
  competitorSlug: keyof typeof COMPETITORS;
  path: string;
  published: string;
  modified: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  kicker?: string;
  intro: string;
  quickAnswer: string;
  quickFacts: [string, string, string];
  chooseBlouExtra?: string[];
  chooseCompetitorExtra?: string[];
  faq: { question: string; answer: string }[];
  extraTableRows?: ComparisonRow[];
};

export const BLOU_VS_PAGES: BlouVsPageConfig[] = [
  {
    competitorSlug: "kwit",
    path: "/blou-vs-kwit",
    published: "2026-05-20",
    modified: "2026-08-22",
    metaTitle: "Blou vs Kwit (2026): which app to pick?",
    metaDescription:
      "Blou vs Kwit: an honest comparison. Choose Blou for a clean visual tracker on iPhone, or Kwit for gamified XP and avatar progression.",
    h1: "Blou vs Kwit",
    intro:
      "We make Blou, so we're not neutral. This page is here to help you choose the quit app you'll actually use when cravings hit—not just download and forget.",
    quickAnswer:
      "Choose Blou for a clean visual quit tracker on iPhone—fast craving tools, savings progress, and health milestones without clutter. Choose Kwit if you are motivated by RPG-style gamification, want to level up a character as you quit, or need Android support.",
    quickFacts: [
      "The best quit app is the one you open during cravings, not just on day one.",
      "Most cravings peak and fade within 3–5 minutes—fast access is critical.",
      "Combining an app with NRT or medication (where appropriate) can improve outcomes.",
    ],
    chooseCompetitorExtra: [
      "You enjoy unlocking achievements, earning XP, and a game-like progression system to build daily habit streaks.",
    ],
    faq: [
      {
        question: "Is Blou better than Kwit?",
        answer:
          "It depends on what motivates you. Blou is a clean, visual tracker focused on cravings, savings, and health milestones. Kwit is built around RPG-style gamification—you level up a character as your quit progresses. Try whichever framing resonates more with how you think about progress.",
      },
      {
        question: "Is Kwit free?",
        answer:
          "Kwit offers a free tier with basic tracking and a paid subscription that unlocks full game content and deeper analytics. Check the App Store listing for current pricing.",
      },
      {
        question: "Which app is better for cravings?",
        answer:
          "The best craving tool is the one you can open in under 5 seconds. Look for a 1-tap craving log and a fast replacement action you can complete before the urge peaks. Both apps offer craving support—your daily habit of opening it is what matters most.",
      },
      {
        question: "Do both apps work on Android?",
        answer:
          "Kwit is available on both iOS and Android. Blou is currently iOS-only; an Android waitlist is on the homepage.",
      },
    ],
  },
  {
    competitorSlug: "smoke-free",
    path: "/blou-vs-smoke-free",
    published: "2026-05-09",
    modified: "2026-08-22",
    metaTitle: "Blou vs Smoke Free (2026): which is better?",
    metaDescription:
      "Blou vs Smoke Free compared honestly. Blou for a simpler iPhone tracker; Smoke Free for detailed health charts and cross-platform support.",
    h1: "Blou vs Smoke Free",
    intro:
      "We make Blou, so we're not neutral. Smoke Free is one of the longest-running quit apps—here's how the two compare for day-to-day use.",
    quickAnswer:
      "Choose Blou for a cleaner daily loop on iPhone—streak, savings, and fast craving tools. Choose Smoke Free if you want detailed health improvement charts, badges, and both iOS and Android.",
    quickFacts: [
      "Smoke Free has a large install base; Blou focuses on a minimal daily rhythm.",
      "Both apps work best when you open them during cravings, not only on quit day.",
      "Pair any app with NRT or quitline support when appropriate.",
    ],
    faq: [
      {
        question: "Is Smoke Free better than Blou?",
        answer:
          "Smoke Free suits data-heavy quitters who want extensive health stats. Blou suits iPhone users who want a simpler visual tracker with savings and milestone focus. The best app is the one you use daily.",
      },
      {
        question: "Does Smoke Free work on Android?",
        answer: "Yes—Smoke Free is available on both iOS and Android. Blou is iOS-only today.",
      },
    ],
  },
  {
    competitorSlug: "quitnow",
    path: "/blou-vs-quitnow",
    published: "2026-05-09",
    modified: "2026-08-22",
    metaTitle: "Blou vs QuitNow (2026): tracker vs community",
    metaDescription:
      "Blou vs QuitNow: compare a private visual tracker with a community-driven quit app. Honest pros and cons for 2026.",
    h1: "Blou vs QuitNow",
    intro:
      "We make Blou, so we're not neutral. QuitNow leans on community; Blou leans on a private daily tracker—different fits for different quitters.",
    quickAnswer:
      "Choose Blou for a private, visual tracker focused on cravings, savings, and milestones on iPhone. Choose QuitNow if community support and shared milestones motivate you more than a solo tracker.",
    quickFacts: [
      "Community apps help some quitters; others find the feed distracting during cravings.",
      "QuitNow is cross-platform; Blou is iOS-only in 2026.",
      "Fast craving access matters more than feature count.",
    ],
    faq: [
      {
        question: "Is QuitNow free?",
        answer:
          "QuitNow offers a free ad-supported tier and a premium version without ads. Check current App Store pricing.",
      },
    ],
  },
  {
    competitorSlug: "quitstart",
    path: "/blou-vs-quitstart",
    published: "2026-05-20",
    modified: "2026-08-22",
    metaTitle: "Blou vs quitSTART (2026): CDC vs Blou",
    metaDescription:
      "Blou vs quitSTART (CDC app): compare a visual iPhone tracker with the free CDC quit program. Honest 2026 comparison.",
    h1: "Blou vs quitSTART",
    intro:
      "We make Blou, so we're not neutral. quitSTART is the CDC's free quit app—here's when each option fits.",
    quickAnswer:
      "Choose quitSTART for a free, CDC-backed structured program on iOS or Android. Choose Blou for a polished visual tracker with savings tools, milestones, and our evidence-based guide library on tryblou.com.",
    quickFacts: [
      "quitSTART is completely free and backed by CDC guidance.",
      "Blou adds savings visibility and integrated web guides and calculators.",
      "Many quitters combine an app with quitline or NRT support.",
    ],
    faq: [
      {
        question: "Is quitSTART really free?",
        answer: "Yes—quitSTART is a free app from the CDC with no subscription required.",
      },
    ],
  },
  {
    competitorSlug: "quit-genius",
    path: "/blou-vs-quit-genius",
    published: "2026-05-13",
    modified: "2026-08-22",
    metaTitle: "Blou vs Quit Genius (2026): tracker vs CBT",
    metaDescription:
      "Blou vs Quit Genius: simple daily tracker vs clinical CBT program. Which fits your quit style in 2026?",
    h1: "Blou vs Quit Genius",
    intro:
      "We make Blou, so we're not neutral. Quit Genius is a coached CBT program; Blou is a daily tracker—different tools for different goals.",
    quickAnswer:
      "Choose Blou for a free, open-and-go iPhone tracker with streak, savings, and craving tools. Choose Quit Genius if you want a structured clinical CBT program, often via employer benefits.",
    quickFacts: [
      "Quit Genius targets coached behavior change; Blou targets daily visibility and craving interrupts.",
      "Blou core tracking is free on the App Store.",
      "Employer-sponsored programs may cover Quit Genius access.",
    ],
    faq: [
      {
        question: "Is Quit Genius a tracker?",
        answer:
          "Quit Genius is primarily a CBT coaching program, not a lightweight daily tracker. Blou is built for quick daily check-ins and craving moments.",
      },
    ],
  },
  {
    competitorSlug: "flamy",
    path: "/blou-vs-flamy",
    published: "2026-05-13",
    modified: "2026-08-22",
    metaTitle: "Blou vs Flamy (2026): quit tracker comparison",
    metaDescription:
      "Blou vs Flamy on iPhone: compare two visual quit trackers. Honest differences for 2026.",
    h1: "Blou vs Flamy",
    intro:
      "We make Blou, so we're not neutral. Both apps focus on visual streak tracking on iPhone—here's how they differ.",
    quickAnswer:
      "Choose Blou for savings tracking, recovery milestones, and integrated quit guides on tryblou.com. Choose Flamy if you want a minimal streak companion with fewer extras.",
    quickFacts: [
      "Both are iOS quit trackers with streak focus.",
      "Blou pairs the app with free web calculators and 55+ guides.",
      "Try the app you will open during a 3-minute craving.",
    ],
    faq: [
      {
        question: "Are Blou and Flamy similar?",
        answer:
          "Both emphasize visual progress on iPhone. Blou adds money-saved tracking, recovery timelines, and a large free guide library on the website.",
      },
    ],
  },
];

export type CompetitorPairPageConfig = {
  slugA: keyof typeof COMPETITORS;
  slugB: keyof typeof COMPETITORS;
  path: string;
  published: string;
  modified: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  quickAnswer: string;
  quickFacts: [string, string, string];
  faq: { question: string; answer: string }[];
};

export const COMPETITOR_PAIR_PAGES: CompetitorPairPageConfig[] = [
  {
    slugA: "kwit",
    slugB: "smoke-free",
    path: "/kwit-vs-smoke-free",
    published: "2026-08-22",
    modified: "2026-08-22",
    metaTitle: "Kwit vs Smoke Free (2026): quit app comparison",
    metaDescription:
      "Kwit vs Smoke Free: gamification vs health stats. Plus how Blou compares as a third option for iPhone quitters.",
    h1: "Kwit vs Smoke Free",
    intro:
      "Comparing two popular quit apps? Kwit gamifies your quit; Smoke Free emphasizes health data. We also include Blou as a third option—we make it, so we're not neutral.",
    quickAnswer:
      "Choose Kwit for RPG-style gamification and Android support. Choose Smoke Free for detailed health improvement charts and a long track record on iOS and Android. Consider Blou if you want a cleaner iPhone tracker focused on savings, milestones, and fast craving tools.",
    quickFacts: [
      "Kwit motivates through game progression; Smoke Free through health statistics.",
      "Both are cross-platform; Blou is iOS-only today.",
      "The app you open during cravings beats the app with the most features.",
    ],
    faq: [
      {
        question: "Which is better for heavy smokers?",
        answer:
          "Heavy smokers often benefit from combining an app with NRT or medication. Pick the app whose daily loop you'll actually use—gamification (Kwit) vs data charts (Smoke Free) vs minimal tracker (Blou).",
      },
      {
        question: "Are Kwit and Smoke Free free?",
        answer:
          "Both offer free tiers with optional paid upgrades. Check each App Store listing for current pricing.",
      },
    ],
  },
  {
    slugA: "kwit",
    slugB: "quitnow",
    path: "/kwit-vs-quitnow",
    published: "2026-08-22",
    modified: "2026-08-22",
    metaTitle: "Kwit vs QuitNow (2026): gamification vs community",
    metaDescription:
      "Kwit vs QuitNow compared: game-style progress vs community support. See how Blou fits as a third option.",
    h1: "Kwit vs QuitNow",
    intro:
      "Kwit uses gamification; QuitNow uses community. Here's an honest comparison—and where Blou fits if you want a private visual tracker.",
    quickAnswer:
      "Choose Kwit for XP, avatars, and game-like streaks. Choose QuitNow for community boards and peer support. Choose Blou for a private iPhone tracker with savings and milestone focus without social feeds or RPG mechanics.",
    quickFacts: [
      "QuitNow's community helps some quitters; others find it distracting.",
      "Kwit and QuitNow both support Android.",
      "Blou focuses on a solo daily loop with web guides and calculators.",
    ],
    faq: [
      {
        question: "Which app has better craving support?",
        answer:
          "All three offer craving logging. What matters is speed: can you open the app and start a replacement action in under 5 seconds when an urge hits?",
      },
    ],
  },
  {
    slugA: "smoke-free",
    slugB: "quitnow",
    path: "/smoke-free-vs-quitnow",
    published: "2026-08-22",
    modified: "2026-08-22",
    metaTitle: "Smoke Free vs QuitNow (2026): which quit app?",
    metaDescription:
      "Smoke Free vs QuitNow: health stats vs community support. Honest comparison plus Blou as a third option.",
    h1: "Smoke Free vs QuitNow",
    intro:
      "Smoke Free emphasizes personal health data; QuitNow emphasizes community. We also note Blou as a simpler iPhone alternative—we make Blou.",
    quickAnswer:
      "Choose Smoke Free for detailed personal health charts and badges. Choose QuitNow for community motivation and shared milestones. Choose Blou for a cleaner private tracker with savings visibility and integrated quit guides.",
    quickFacts: [
      "Both Smoke Free and QuitNow are established cross-platform apps.",
      "Community feeds help some quitters; others prefer private tracking.",
      "Blou pairs the app with free money-saved and lung recovery tools online.",
    ],
    faq: [
      {
        question: "Which is better for privacy?",
        answer:
          "Smoke Free and Blou are primarily private trackers. QuitNow's community features involve sharing with other users—decide if that helps or hurts your quit.",
      },
    ],
  },
];

export function competitorBySlug(slug: string): CompetitorProfile | undefined {
  return COMPETITORS[slug];
}

export function blouVsConfig(path: string): BlouVsPageConfig | undefined {
  return BLOU_VS_PAGES.find((p) => p.path === path);
}
