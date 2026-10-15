/**
 * What happens after the last cigarette, as one sourced timeline. Feeds the
 * /quit-smoking-timeline hub, the quit-date tool, and the lung recovery tool.
 *
 * Every line paraphrases its cited source closely. Do not add a milestone
 * without a source, and do not sharpen a range ("5–15 years") into a point.
 */

export type MilestoneSource = { name: string; url: string };

export type QuitMilestone = {
  id: string;
  /** Time since the last cigarette, in hours. */
  hours: number;
  /** Short label for the time point, e.g. "20 minutes", "3 days". */
  label: string;
  title: string;
  body: string;
  phase: "withdrawal" | "recovery";
  /** Matching milestone guide under /guides, if there is one. */
  guideSlug?: string;
  source: MilestoneSource;
};

const WHO: MilestoneSource = {
  name: "WHO: Health benefits of smoking cessation",
  url: "https://www.who.int/news-room/questions-and-answers/item/tobacco-health-benefits-of-smoking-cessation",
};
const ACS: MilestoneSource = {
  name: "American Cancer Society: Benefits of quitting smoking over time",
  url: "https://www.cancer.org/cancer/risk-prevention/tobacco/benefits-of-quitting-smoking-over-time.html",
};
const NCI: MilestoneSource = {
  name: "National Cancer Institute: Handling nicotine withdrawal and triggers",
  url: "https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/withdrawal-fact-sheet",
};
const SMOKEFREE: MilestoneSource = {
  name: "Smokefree.gov: Understanding withdrawal",
  url: "https://smokefree.gov/challenges-when-quitting/withdrawal/understanding-withdrawal",
};
const NHS: MilestoneSource = {
  name: "NHS Better Health: Benefits of quitting smoking",
  url: "https://www.nhs.uk/better-health/quit-smoking/why-quit-smoking/benefits-of-quitting-smoking/",
};

const DAY = 24;
const YEAR = 365 * DAY;

export const QUIT_MILESTONES: QuitMilestone[] = [
  {
    id: "20-minutes",
    hours: 1 / 3,
    label: "20 minutes",
    title: "Heart rate and blood pressure drop",
    body: "Within about 20 minutes of your last cigarette, your heart rate and blood pressure start to come down.",
    phase: "recovery",
    source: WHO,
  },
  {
    id: "2-hours",
    hours: 2,
    label: "1–2 hours",
    title: "The first cravings can start",
    body: "Cravings can begin within an hour or two of your last cigarette. Each one passes, even when it doesn't feel that way.",
    phase: "withdrawal",
    source: NCI,
  },
  {
    id: "12-hours",
    hours: 12,
    label: "12 hours",
    title: "Carbon monoxide falls to normal",
    body: "The carbon monoxide level in your blood drops to normal, so your blood can carry more oxygen again.",
    phase: "recovery",
    source: WHO,
  },
  {
    id: "1-day",
    hours: DAY,
    label: "1 day",
    title: "Nicotine is leaving your blood",
    body: "Between 24 hours and a few days after quitting, nicotine levels in your blood drop to zero.",
    phase: "recovery",
    guideSlug: "what-happens-after-1-day",
    source: ACS,
  },
  {
    id: "2-days",
    hours: 2 * DAY,
    label: "2 days",
    title: "Withdrawal builds toward its peak",
    body: "Withdrawal is usually worst in the first week and peaks during the first 3 days. Irritability, restlessness and strong cravings are common now.",
    phase: "withdrawal",
    guideSlug: "what-happens-after-2-days",
    source: NCI,
  },
  {
    id: "3-days",
    hours: 3 * DAY,
    label: "3 days",
    title: "The usual peak of withdrawal",
    body: "For most people, day 3 is the hardest stretch. Symptoms typically start to ease once you are past it.",
    phase: "withdrawal",
    guideSlug: "what-happens-after-3-days",
    source: NCI,
  },
  {
    id: "5-days",
    hours: 5 * DAY,
    label: "5 days",
    title: "The worst is usually behind you",
    body: "The worst withdrawal symptoms last a few days to a couple of weeks. Cravings still come in waves, but they get shorter.",
    phase: "withdrawal",
    guideSlug: "what-happens-after-5-days",
    source: SMOKEFREE,
  },
  {
    id: "1-week",
    hours: 7 * DAY,
    label: "1 week",
    title: "The hardest week is done",
    body: "Withdrawal is usually worst during the first week after quitting. From here, intensity typically keeps dropping.",
    phase: "withdrawal",
    guideSlug: "what-happens-after-1-week",
    source: NCI,
  },
  {
    id: "2-weeks",
    hours: 14 * DAY,
    label: "2 weeks",
    title: "Circulation and lung function start improving",
    body: "Between 2 and 12 weeks after quitting, your circulation improves and your lung function increases.",
    phase: "recovery",
    guideSlug: "what-happens-after-2-weeks",
    source: WHO,
  },
  {
    id: "3-weeks",
    hours: 21 * DAY,
    label: "3 weeks",
    title: "Cravings get less frequent",
    body: "Cravings tend to come less often as the weeks pass. Occasional mild cravings can still show up for months.",
    phase: "withdrawal",
    guideSlug: "what-happens-after-3-weeks",
    source: NCI,
  },
  {
    id: "1-month",
    hours: 30 * DAY,
    label: "1 month",
    title: "Withdrawal has mostly faded",
    body: "The intensity of withdrawal typically drops over the first month, although some people have symptoms for several months.",
    phase: "withdrawal",
    guideSlug: "what-happens-after-1-month",
    source: NCI,
  },
  {
    id: "6-weeks",
    hours: 42 * DAY,
    label: "6 weeks",
    title: "Mental health benefits can begin",
    body: "It can take as little as 6 weeks to start feeling the mental health benefits of quitting, such as less anxiety and stress.",
    phase: "recovery",
    source: NHS,
  },
  {
    id: "2-months",
    hours: 60 * DAY,
    label: "2 months",
    title: "Breathing keeps getting easier",
    body: "You are inside the 2–12 week window in which circulation improves and lung function increases.",
    phase: "recovery",
    guideSlug: "what-happens-after-2-months",
    source: WHO,
  },
  {
    id: "3-months",
    hours: 90 * DAY,
    label: "3 months",
    title: "Less coughing and breathlessness",
    body: "Between 1 and 9 months after quitting, coughing and shortness of breath decrease.",
    phase: "recovery",
    guideSlug: "what-happens-after-3-months",
    source: WHO,
  },
  {
    id: "6-months",
    hours: 182 * DAY,
    label: "6 months",
    title: "Lungs continue to clear",
    body: "Coughing and shortness of breath keep decreasing, a change that can continue up to 12 months after quitting.",
    phase: "recovery",
    guideSlug: "what-happens-after-6-months",
    source: ACS,
  },
  {
    id: "1-year",
    hours: YEAR,
    label: "1 year",
    title: "Heart disease risk about halves",
    body: "After 1 year, your risk of coronary heart disease is about half that of someone who still smokes.",
    phase: "recovery",
    guideSlug: "what-happens-after-1-year",
    source: WHO,
  },
  {
    id: "5-years",
    hours: 5 * YEAR,
    label: "5 years",
    title: "Stroke and mouth-cancer risk fall",
    body: "Between 5 and 15 years after quitting, stroke risk falls to that of a non-smoker. Between 5 and 10 years, the risk of mouth, throat and voice-box cancers is cut in half.",
    phase: "recovery",
    guideSlug: "what-happens-after-5-years",
    source: ACS,
  },
  {
    id: "10-years",
    hours: 10 * YEAR,
    label: "10 years",
    title: "Lung cancer risk about halves",
    body: "After 10 years, your risk of lung cancer falls to about half that of someone who still smokes.",
    phase: "recovery",
    guideSlug: "what-happens-after-10-years",
    source: WHO,
  },
  {
    id: "15-years",
    hours: 15 * YEAR,
    label: "15 years",
    title: "Heart disease risk like a non-smoker's",
    body: "After 15 years, your risk of coronary heart disease is that of a non-smoker.",
    phase: "recovery",
    source: WHO,
  },
  {
    id: "20-years",
    hours: 20 * YEAR,
    label: "20 years",
    title: "Several cancer risks near a non-smoker's",
    body: "After 20 years, the risk of several cancers, including mouth, throat, voice box and pancreas, drops close to that of someone who does not smoke.",
    phase: "recovery",
    source: ACS,
  },
];

export const MILESTONE_SOURCES: MilestoneSource[] = [WHO, ACS, NCI, SMOKEFREE, NHS];

/** Index of the latest milestone reached after `hours`, or -1 before the first. */
export function currentMilestoneIndex(hours: number): number {
  let idx = -1;
  QUIT_MILESTONES.forEach((m, i) => {
    if (hours >= m.hours) idx = i;
  });
  return idx;
}
