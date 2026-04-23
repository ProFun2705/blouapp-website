export type GuideCategory = "milestone" | "symptom";

export type BlouGuide = {
  slug: string;
  title: string;
  shortTitle: string;
  category: GuideCategory;
  summary: string;
  detail: string;
  typicalDuration?: string;
  commonTriggers?: string;
  whenToSeekCare?: string;
  whatToExpectNext: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const blouGuides: BlouGuide[] = [
  {
    slug: "what-happens-after-1-day",
    title: "What happens to your body after 1 day without smoking",
    shortTitle: "After 1 day",
    category: "milestone",
    summary:
      "After 1 day smoke-free, carbon monoxide drops and oxygen delivery improves for many people.",
    detail:
      "Expect cravings in waves—each wave is often short even when it feels intense. Timelines vary by person, smoking history, and overall health.",
    whatToExpectNext: [
      "Carbon monoxide in blood drops significantly.",
      "Blood oxygen begins normalizing for better circulation.",
      "Cravings may spike in short waves throughout the day.",
    ],
    faq: [
      {
        question: "Is day 1 the hardest day to quit smoking?",
        answer:
          "For many people, day 1 feels intense because routines are still tied to smoking. The difficulty is normal and temporary.",
      },
      {
        question: "How often do cravings happen in the first 24 hours?",
        answer:
          "Cravings often come in short bursts. Most episodes peak quickly and pass within minutes.",
      },
    ],
  },
  {
    slug: "what-happens-after-3-days",
    title: "What happens to your body after 3 days without smoking",
    shortTitle: "After 3 days",
    category: "milestone",
    summary:
      "By day 3, nicotine is largely cleared for many people and withdrawal symptoms may feel strongest.",
    detail:
      "Irritability, headaches, and cravings are common—and often begin to ease afterward.",
    whatToExpectNext: [
      "Nicotine levels are greatly reduced from baseline.",
      "Taste and smell sensitivity may improve.",
      "Withdrawal intensity can peak before easing.",
    ],
    faq: [
      {
        question: "Why do I feel worse on day 3?",
        answer:
          "Day 3 can coincide with peak nicotine withdrawal. Feeling irritable or foggy can be part of this short phase.",
      },
      {
        question: "Will cravings decrease after day 3?",
        answer:
          "Many people notice a gradual decrease in craving frequency and intensity after this point.",
      },
    ],
  },
  {
    slug: "what-happens-after-1-week",
    title: "What happens to your body after 1 week without smoking",
    shortTitle: "After 1 week",
    category: "milestone",
    summary:
      "One week smoke-free: breathing and circulation often feel a bit easier.",
    detail:
      "Cravings may show up more around habits than all day long. Keep simple routines for triggers.",
    whatToExpectNext: [
      "Lung irritation starts reducing as airways calm.",
      "Resting heart rate may feel more stable.",
      "Cravings become more cue-based than constant.",
    ],
    faq: [
      {
        question: "Is one week smoke-free a major milestone?",
        answer: "Yes. One week is a key behavioral and physiological milestone in early quit recovery.",
      },
      {
        question: "Why do cravings still appear after a week?",
        answer:
          "Habit cues remain even as nicotine withdrawal improves. Triggers need retraining over time.",
      },
    ],
  },
  {
    slug: "what-happens-after-2-weeks",
    title: "What happens to your body after 2 weeks without smoking",
    shortTitle: "After 2 weeks",
    category: "milestone",
    summary:
      "Two weeks in, exercise tolerance and day-to-day stamina often improve slightly.",
    detail:
      "Airway irritation may be trending down, and cough can fluctuate while lungs clear mucus.",
    whatToExpectNext: [
      "Circulation continues improving in daily movement.",
      "Coughing can fluctuate as lungs clear irritants.",
      "Exercise may feel easier for many people.",
    ],
    faq: [
      {
        question: "Can lungs improve after just two weeks?",
        answer:
          "Yes, early functional improvements can begin within weeks, even though full recovery takes longer.",
      },
      {
        question: "Is coughing normal at 2 weeks smoke-free?",
        answer: "It can be normal while cilia recover and clear mucus and particles.",
      },
    ],
  },
  {
    slug: "what-happens-after-1-month",
    title: "What happens to your body after 1 month without smoking",
    shortTitle: "After 1 month",
    category: "milestone",
    summary:
      "One month without smoking: lung irritation often continues to ease.",
    detail:
      "Sleep may stabilize, and trigger skills feel more repeatable. Pair milestones with a savings plan.",
    whatToExpectNext: [
      "Breathing often feels less tight during activity.",
      "Sleep quality may improve as nicotine disruption decreases.",
      "Trigger response patterns are easier to manage with routines.",
    ],
    faq: [
      {
        question: "How much healthier am I after one month?",
        answer:
          "Meaningful progress is common by one month, especially in breathing comfort and daily stamina.",
      },
      {
        question: "Can relapse still happen at one month?",
        answer: "Yes. Keeping support tools and trigger plans active remains important.",
      },
    ],
  },
  {
    slug: "what-happens-after-3-months",
    title: "What happens to your body after 3 months without smoking",
    shortTitle: "After 3 months",
    category: "milestone",
    summary:
      "Three months smoke-free: lung function trends may continue to improve.",
    detail:
      "Cravings are often less frequent than early quit weeks, and non-smoker identity strengthens.",
    whatToExpectNext: [
      "Lung function trends can improve further with sustained abstinence.",
      "Stress-response habits begin shifting away from smoking cues.",
      "Savings and smoke-free streak momentum strengthen commitment.",
    ],
    faq: [
      {
        question: "Do cravings disappear by 3 months?",
        answer:
          "Some cravings may remain, but frequency and intensity are often much lower than early quit stages.",
      },
      {
        question: "What helps maintain progress after 3 months?",
        answer: "Consistent routines, stress tools, and visible progress tracking reduce relapse risk.",
      },
    ],
  },
  {
    slug: "what-happens-after-6-months",
    title: "What happens to your body after 6 months without smoking",
    shortTitle: "After 6 months",
    category: "milestone",
    summary:
      "Six months in, daily breathing comfort and stamina are often improved versus smoking baseline.",
    detail:
      "Occasional urges may still appear in old routines or stress.",
    whatToExpectNext: [
      "Daily respiratory comfort often improves versus baseline.",
      "Physical endurance may continue increasing.",
      "The non-smoker identity becomes more stable.",
    ],
    faq: [
      {
        question: "Is 6 months smoke-free a stable point?",
        answer:
          "It is a major stability milestone, though support systems are still useful for long-term maintenance.",
      },
      {
        question: "Why do occasional urges still happen?",
        answer: "Contextual memory can trigger urges, especially in old routines or stress situations.",
      },
    ],
  },
  {
    slug: "what-happens-after-1-year",
    title: "What happens to your body after 1 year without smoking",
    shortTitle: "After 1 year",
    category: "milestone",
    summary:
      "One year without cigarettes: cardiovascular and respiratory risk trends often improve.",
    detail:
      "Celebrate the streak and keep a simple maintenance plan.",
    whatToExpectNext: [
      "Cardiovascular risk profile generally improves over sustained abstinence.",
      "Airway inflammation typically remains lower than smoking baseline.",
      "Relapse likelihood can be reduced with strong habits.",
    ],
    faq: [
      {
        question: "How big is one year without smoking?",
        answer:
          "It is one of the strongest long-term milestones and often reflects a durable behavior change.",
      },
      {
        question: "Should I still track milestones after one year?",
        answer: "Yes. Continued tracking reinforces identity and helps sustain motivation.",
      },
    ],
  },
  {
    slug: "what-happens-after-5-years",
    title: "What happens to your body after 5 years without smoking",
    shortTitle: "After 5 years",
    category: "milestone",
    summary: "Five years smoke-free: long-run benefits continue to compound.",
    detail:
      "Triggers are usually weaker, but a simple safety plan still helps during major life stress.",
    whatToExpectNext: [
      "Long-term cardiovascular and respiratory trends may continue improving.",
      "Behavioral triggers are usually far less dominant.",
      "Cumulative money saved becomes a meaningful life gain.",
    ],
    faq: [
      {
        question: "Can health keep improving years after quitting?",
        answer: "Yes, long-term trajectories can continue improving with ongoing smoke-free living.",
      },
      {
        question: "How do I avoid late relapse?",
        answer: "Stay aware of high-risk stress periods and keep a simple relapse-prevention plan.",
      },
    ],
  },
  {
    slug: "what-happens-after-10-years",
    title: "What happens to your body after 10 years without smoking",
    shortTitle: "After 10 years",
    category: "milestone",
    summary:
      "Ten years without cigarettes: cumulative health and financial upside is large for many people.",
    detail:
      "Stay alert during rare high-risk periods, even after long success.",
    whatToExpectNext: [
      "Sustained abstinence supports better long-run health outcomes.",
      "Breathing and physical activity can remain more resilient.",
      "The financial upside compounds substantially over a decade.",
    ],
    faq: [
      {
        question: "Is there still benefit after 10 years?",
        answer: "Yes. Long-term smoke-free living compounds both health and financial benefits.",
      },
      {
        question: "Should I still celebrate quit milestones?",
        answer: "Absolutely. Milestone rituals help maintain identity and motivation.",
      },
    ],
  },
  {
    slug: "cravings",
    title: "How long does cravings last when quitting smoking?",
    shortTitle: "Cravings",
    category: "symptom",
    summary:
      "Cravings often follow a typical range of 2 to 8 weeks with declining intensity for many people.",
    detail:
      "Each craving episode is often short even when it feels powerful.",
    typicalDuration: "2 to 8 weeks with declining intensity",
    commonTriggers: "After meals, with coffee or alcohol, during stress or boredom",
    whenToSeekCare:
      "Seek urgent help if urges coincide with self-harm thoughts, or speak to a clinician if cravings feel impossible to manage safely despite support.",
    whatToExpectNext: [
      "Delay and breathe through the urge for 3-5 minutes.",
      "Drink water and change physical location.",
      "Use a pre-planned replacement routine after meals.",
    ],
    faq: [
      {
        question: "How long do nicotine cravings last after quitting smoking?",
        answer:
          "For many people, cravings persist for a few weeks and often become less frequent over time.",
      },
      {
        question: "Do cravings ever fully stop?",
        answer: "They often become rare over time, especially when triggers are addressed consistently.",
      },
    ],
  },
  {
    slug: "cough",
    title: "How long does cough last when quitting smoking?",
    shortTitle: "Cough",
    category: "symptom",
    summary:
      "Cough after quitting smoking often lasts from a few weeks to a few months for some people.",
    detail: "This can happen as airways clear mucus and debris.",
    typicalDuration: "A few weeks to a few months",
    commonTriggers: "Morning, after lying down, during physical activity",
    whenToSeekCare:
      "See a clinician for coughing up blood, severe shortness of breath, high fever, unexplained weight loss, or symptoms that worsen over time.",
    whatToExpectNext: [
      "Hydrate regularly to thin mucus.",
      "Use humid air in dry environments.",
      "Track cough trend weekly rather than day-to-day noise.",
    ],
    faq: [
      {
        question: "How long does a cough last after quitting smoking?",
        answer:
          "Many people notice cough changes for weeks to a few months while airways clear; persistent or severe cough should be evaluated.",
      },
      {
        question: "Is coughing normal after quitting smoking?",
        answer: "Yes, short-term cough can happen as lungs clear accumulated irritants for some quitters.",
      },
    ],
  },
  {
    slug: "insomnia",
    title: "How long does insomnia last when quitting smoking?",
    shortTitle: "Insomnia",
    category: "symptom",
    summary:
      "Sleep disruption after quitting often lasts about one to four weeks for many people.",
    detail: "It tends to improve as withdrawal eases.",
    typicalDuration: "1 to 4 weeks for many people",
    commonTriggers: "Late caffeine, irregular bedtimes, evening screen use",
    whenToSeekCare:
      "Contact a clinician if insomnia is severe, lasts many weeks without improvement, or you have signs of sleep apnea or depression.",
    whatToExpectNext: [
      "Keep consistent sleep and wake times.",
      "Avoid caffeine late in the day.",
      "Use a short wind-down routine before bedtime.",
    ],
    faq: [
      {
        question: "How long does insomnia last after quitting smoking?",
        answer:
          "Many people see sleep normalize within a few weeks after quitting, though temporary difficulty sleeping is common early on.",
      },
      {
        question: "Will sleep return to normal?",
        answer: "In many cases, sleep quality improves gradually after the early withdrawal window.",
      },
    ],
  },
  {
    slug: "headaches",
    title: "How long does headaches last when quitting smoking?",
    shortTitle: "Headaches",
    category: "symptom",
    summary:
      "Headaches after quitting often improve within days to a few weeks for many people.",
    detail: "Hydration, regular meals, and sleep stability can help.",
    typicalDuration: "Days to a few weeks",
    commonTriggers: "Caffeine changes, dehydration, screen strain and stress",
    whenToSeekCare:
      "Seek urgent care for sudden severe headache, neurological symptoms, fever with stiff neck, or headache after head injury.",
    whatToExpectNext: [
      "Hydrate and eat regular meals.",
      "Practice short stress resets through breathwork.",
      "Limit screen strain during acute periods.",
    ],
    faq: [
      {
        question: "How long do headaches last after quitting smoking?",
        answer:
          "Headaches are common for some people in early withdrawal and often ease within days to a few weeks.",
      },
      {
        question: "Are headaches common during nicotine withdrawal?",
        answer: "They can be common early on and usually improve as withdrawal settles.",
      },
    ],
  },
  {
    slug: "anxiety",
    title: "How long does anxiety last when quitting smoking?",
    shortTitle: "Anxiety",
    category: "symptom",
    summary:
      "Anxiety can spike for some people in the first few weeks after quitting and often improves over roughly two to six weeks.",
    detail: "Not everyone experiences this pattern.",
    typicalDuration: "2 to 6 weeks with variable intensity",
    commonTriggers: "Work deadlines, social settings, caffeine and poor sleep",
    whenToSeekCare:
      "Seek professional help if anxiety causes panic attacks, avoidance of daily activities, or thoughts of self-harm.",
    whatToExpectNext: [
      "Use a simple 4-6 breathing pattern during spikes.",
      "Reduce high-stimulation triggers when possible.",
      "Schedule short movement breaks during stressful hours.",
    ],
    faq: [
      {
        question: "How long does anxiety last after quitting smoking?",
        answer:
          "Many people notice anxiety improves over a few weeks as withdrawal stabilizes, but timelines vary.",
      },
      {
        question: "Does quitting smoking increase anxiety?",
        answer: "Temporary anxiety can increase during withdrawal, then improve with adaptation and coping routines.",
      },
    ],
  },
  {
    slug: "irritability",
    title: "How long does irritability last when quitting smoking?",
    shortTitle: "Irritability",
    category: "symptom",
    summary:
      "Irritability commonly improves within about one to four weeks for many quitters as withdrawal eases.",
    detail: "Stress and sleep can lengthen the window.",
    typicalDuration: "1 to 4 weeks",
    commonTriggers: "Sleep debt, hunger, interruptions at home or work",
    whenToSeekCare:
      "Seek help if irritability escalates to aggression you cannot control or if you feel unsafe.",
    whatToExpectNext: [
      "Give close contacts a short heads-up plan.",
      "Use 5-minute reset breaks before reacting.",
      "Stabilize meals and hydration through the day.",
    ],
    faq: [
      {
        question: "How long does irritability last after quitting smoking?",
        answer:
          "For many people, irritability is strongest in early withdrawal and often improves within a few weeks.",
      },
      {
        question: "Why am I so irritable after quitting?",
        answer: "Mood swings are a known withdrawal effect while neurochemistry normalizes.",
      },
    ],
  },
  {
    slug: "weight-gain",
    title: "How long does weight gain last when quitting smoking?",
    shortTitle: "Weight gain",
    category: "symptom",
    summary:
      "Weight changes, if they happen, often show up most in the first months after quitting.",
    detail: "Gain is not inevitable and can be managed gradually without risking your quit.",
    typicalDuration: "Most change appears in the first months",
    commonTriggers: "Snacking instead of smoking, sugar-heavy comfort food, skipping meals",
    whenToSeekCare:
      "Speak with a clinician if weight change is rapid, paired with edema, or if you have eating disorder concerns.",
    whatToExpectNext: [
      "Plan high-protein snacks before cravings hit.",
      "Add short daily walks after meals.",
      "Track trend weekly, not daily.",
    ],
    faq: [
      {
        question: "How long does weight gain risk last after quitting smoking?",
        answer:
          "Most weight shifts, when they occur, cluster in the first months after quitting.",
      },
      {
        question: "Is weight gain inevitable after quitting?",
        answer: "Not inevitable, but some gain is common and can be managed with routine planning.",
      },
    ],
  },
  {
    slug: "brain-fog",
    title: "How long does brain fog last when quitting smoking?",
    shortTitle: "Brain fog",
    category: "symptom",
    summary:
      "Brain fog after quitting often lasts days to several weeks for many people.",
    detail: "It typically improves as sleep and withdrawal stabilize.",
    typicalDuration: "Days to several weeks",
    commonTriggers: "Sleep deprivation, multitasking, high stress days",
    whenToSeekCare:
      "Seek evaluation for sudden confusion, focal neurological deficits, or severe progressive cognitive decline.",
    whatToExpectNext: [
      "Work in short focused intervals.",
      "Sleep consistently and hydrate.",
      "Use light movement before cognitively demanding tasks.",
    ],
    faq: [
      {
        question: "How long does brain fog last after quitting smoking?",
        answer:
          "Many people notice clearer thinking within a few weeks, though early quit weeks can feel sluggish.",
      },
      {
        question: "Can I still work effectively with withdrawal fog?",
        answer: "Yes, with shorter focus blocks and predictable routines.",
      },
    ],
  },
  {
    slug: "fatigue",
    title: "How long does fatigue last when quitting smoking?",
    shortTitle: "Fatigue",
    category: "symptom",
    summary:
      "Fatigue commonly improves within about one to three weeks for many quitters.",
    detail: "Consistent sleep and hydration usually help.",
    typicalDuration: "1 to 3 weeks commonly",
    commonTriggers: "Poor sleep, low calorie intake, sedentary days",
    whenToSeekCare:
      "See a clinician for fatigue with chest pain, fainting, severe shortness of breath, or symptoms lasting many weeks.",
    whatToExpectNext: [
      "Get daylight exposure early in the day.",
      "Keep hydration and meal timing consistent.",
      "Use low-intensity exercise to rebuild energy.",
    ],
    faq: [
      {
        question: "How long does fatigue last after quitting smoking?",
        answer:
          "Short-term fatigue is common in early quitting for some people and often eases within a few weeks.",
      },
      {
        question: "Is tiredness normal after quitting smoking?",
        answer: "Yes, short-term fatigue can occur during withdrawal and typically eases.",
      },
    ],
  },
  {
    slug: "shortness-of-breath",
    title: "How long does shortness of breath last when quitting smoking?",
    shortTitle: "Shortness of breath",
    category: "symptom",
    summary:
      "Breathlessness after quitting may fluctuate at first, but many people see gradual improvement over weeks to months.",
    detail: "Timelines depend on baseline lung health.",
    typicalDuration: "Improves over weeks to months",
    commonTriggers: "Stairs and hills, cold air, respiratory infections",
    whenToSeekCare:
      "Seek urgent care for severe breathlessness at rest, blue lips, chest pain, or fainting; schedule routine care if symptoms persist or worsen.",
    whatToExpectNext: [
      "Use paced breathing during exertion.",
      "Increase activity gradually.",
      "Track weekly improvement in tolerance.",
    ],
    faq: [
      {
        question: "How long does shortness of breath last after quitting smoking?",
        answer:
          "Improvement timelines vary; some people notice gains over weeks, while others need clinician-guided monitoring.",
      },
      {
        question: "When should I get checked for breathlessness?",
        answer: "Seek medical review for persistent or worsening symptoms.",
      },
    ],
  },
  {
    slug: "mood-swings",
    title: "How long does mood swings last when quitting smoking?",
    shortTitle: "Mood swings",
    category: "symptom",
    summary:
      "Mood swings after quitting often settle over roughly two to six weeks for many people.",
    detail: "Severe mental health symptoms should get professional support.",
    typicalDuration: "2 to 6 weeks",
    commonTriggers: "Alcohol, sleep disruption, relationship conflict",
    whenToSeekCare:
      "Seek urgent help for suicidal thoughts; contact a clinician for severe depression, mania, or mood symptoms that block daily life.",
    whatToExpectNext: [
      "Use predictable daily routines.",
      "Limit alcohol during early quit weeks.",
      "Track triggers and high-risk times of day.",
    ],
    faq: [
      {
        question: "How long do mood swings last after quitting smoking?",
        answer:
          "Many people feel emotionally steadier within a few weeks, though variability is common early on.",
      },
      {
        question: "Are mood swings part of nicotine withdrawal?",
        answer: "Yes, emotional variability is common in early quit stages.",
      },
    ],
  },
];

export const milestoneGuides = blouGuides.filter((guide) => guide.category === "milestone");
export const symptomGuides = blouGuides.filter((guide) => guide.category === "symptom");

export const blouGuideBySlug = Object.fromEntries(
  blouGuides.map((guide) => [guide.slug, guide]),
) as Record<string, BlouGuide>;
