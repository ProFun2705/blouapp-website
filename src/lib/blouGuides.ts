export type GuideCategory = "milestone" | "symptom";

export type BlouGuideArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets: string[];
};

export type BlouGuide = {
  slug: string;
  title: string;
  shortTitle: string;
  category: GuideCategory;
  /** Short phrase used in AEO quick-answer blocks. */
  quickAnswer: string;
  /** 3 atomic facts surfaced above the fold for AI extraction. */
  quickFacts: string[];
  summary: string;
  detail: string;
  articleSections: BlouGuideArticleSection[];
  typicalDuration?: string;
  commonTriggers?: string;
  whenToSeekCare?: string;
  whatToExpectNext: string[];
  faq: Array<{ question: string; answer: string }>;
  datePublished: string;
  dateModified: string;
  relatedSlugs: string[];
  /** Primary keyword the page targets. */
  targetKeyword: string;
  /** Optional MedicalCondition subject for MedicalWebPage schema. */
  medicalConditionName?: string;
};

export const blouGuides: BlouGuide[] = [
  // ─────────────────────────── MILESTONES ───────────────────────────
  {
    slug: "what-happens-after-1-day",
    title: "What happens to your body after 1 day without smoking",
    shortTitle: "After 1 day",
    category: "milestone",
    targetKeyword: "what happens after 1 day of not smoking",
    quickAnswer:
      "After 24 hours without a cigarette, blood carbon monoxide falls sharply and oxygen delivery starts to recover. Nicotine is still leaving your system, so cravings come in short waves of 3–5 minutes.",
    quickFacts: [
      "Blood carbon monoxide can roughly halve within 8 hours and is mostly cleared by 24 hours.",
      "Heart rate and blood pressure begin normalizing from smoking-elevated levels.",
      "Nicotine half-life is about 2 hours, so most has left your system by day 1.",
    ],
    summary:
      "After 1 day smoke-free your body is already reducing a measurable load of carbon monoxide, and your cravings, while strong, typically appear in short waves that pass within minutes.",
    detail:
      "Your first 24 hours are dominated by two parallel changes: smoke toxins clearing faster than you can replace them, and your brain adjusting to the absence of nicotine. Both are temporary, but day 1 usually feels harder than later days because your routines are still wired to smoking.",
    articleSections: [
      {
        heading: "What is physically happening at 24 hours",
        paragraphs: [
          "Carbon monoxide binds to hemoglobin 200+ times more tightly than oxygen. When you stop smoking, your body starts exchanging CO for oxygen on every breath, and blood CO levels fall rapidly within the first day.",
          "Heart rate and blood pressure, both of which are elevated in the minutes after each cigarette, stop spiking. Circulation in hands and feet can feel noticeably different as early as the evening of day 1.",
          "Nicotine has a short half-life (about 2 hours), so by 24 hours after your last cigarette the bulk has been metabolized. What you feel as a craving is your brain's reward system noticing the gap.",
        ],
        bullets: [
          "CO typically falls ~50% within 8 hours and is largely cleared by 24 hours.",
          "Cotinine (nicotine metabolite) is still measurable for several more days.",
          "Heart rate normalizes toward your pre-smoking baseline.",
        ],
      },
      {
        heading: "How most cravings actually behave on day 1",
        paragraphs: [
          "Track the shape of an urge, not just the intensity. Most day-1 cravings rise, peak, and fade within 3–5 minutes. Writing down the start time and end time for your first few cravings breaks the feeling that they go on forever.",
          "Cues on day 1 are often unavoidable — morning coffee, the drive to work, the post-lunch break. Pre-decide one 2-minute replacement per cue before you hit it, rather than trying to decide in the moment.",
        ],
        bullets: [
          "Use a 3-minute timer the first time a craving hits and note what it feels like at 0, 1, 2, and 3 minutes.",
          "Stand up, change location, and drink water on every urge.",
          "Protect day 1 by reducing overlap with alcohol and other smoking cues.",
        ],
      },
      {
        heading: "When day 1 is not going as expected",
        paragraphs: [
          "Dizziness, headache, irritability, and a tight chest are common on day 1. Ask for medical help instead of pushing through if you experience chest pain that does not resolve, fainting, severe shortness of breath, coughing blood, or thoughts of self-harm.",
          "If you have asthma, COPD, cardiovascular disease, or are pregnant, tell your clinician that you quit today — they may want to adjust medications (e.g. bronchodilators, certain psychiatric meds) because smoking changes how some drugs are cleared.",
        ],
        bullets: [],
      },
    ],
    whatToExpectNext: [
      "Carbon monoxide continues clearing overnight as you sleep.",
      "Taste and smell start recovering within the next 48 hours.",
      "Day 3 often feels harder than day 1 because nicotine withdrawal peaks.",
    ],
    faq: [
      {
        question: "Is day 1 the hardest day to quit smoking?",
        answer:
          "For most people day 1 feels intense because routines are still tied to cigarettes, but the peak of withdrawal symptoms usually arrives on day 2 or 3, once nicotine is fully cleared.",
      },
      {
        question: "How many cravings should I expect on day 1?",
        answer:
          "Heavy smokers commonly report 8–20 distinct cravings on day 1, each lasting about 3–5 minutes. By the end of the first week the number typically drops by half.",
      },
      {
        question: "Should I use nicotine replacement on day 1?",
        answer:
          "Evidence-based options (patch, gum, lozenge, varenicline, bupropion) significantly improve quit success. Start them on your quit day as directed. The NHS and CDC both recommend combining NRT with behavioral support.",
      },
    ],
    datePublished: "2026-03-01",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-3-days",
      "cravings",
      "headaches",
      "how-to-quit-smoking",
    ],
    medicalConditionName: "Nicotine withdrawal",
  },
  {
    slug: "what-happens-after-3-days",
    title: "What happens to your body after 3 days without smoking",
    shortTitle: "After 3 days",
    category: "milestone",
    targetKeyword: "what happens after 3 days of not smoking",
    quickAnswer:
      "By day 3, nicotine is fully cleared from your body and withdrawal usually peaks — irritability, headaches, brain fog, and hunger are common. Symptoms almost always start easing from here.",
    quickFacts: [
      "Nicotine is essentially undetectable in blood by 72 hours.",
      "Withdrawal symptom intensity peaks roughly 48–72 hours after the last cigarette.",
      "Bronchial tubes begin to relax, which can make breathing feel different.",
    ],
    summary:
      "Day 3 is the most intense stretch for many quitters. Your body is now completely free of nicotine, which forces a fast adjustment across mood, appetite, and energy.",
    detail:
      "The 72-hour mark is when the 'I need a cigarette' signal is loudest. It is also the day when the worst passes for most people — the nervous system is finishing its first big adjustment, and the physical craving curve typically starts to drop from here.",
    articleSections: [
      {
        heading: "Why day 3 feels the worst",
        paragraphs: [
          "Nicotine affects dopamine, norepinephrine, and acetylcholine signaling. With three days of no input, receptors that were used to constant nicotine stimulation are now under-stimulated, which is experienced as irritability, restlessness, and difficulty concentrating.",
          "Bronchial tubes, which nicotine had kept slightly dilated, begin returning to baseline. This can produce a temporary sensation of tight chest or increased cough — often confused with 'quitting is making things worse,' when it is actually airway tone normalizing.",
        ],
        bullets: [
          "Peak symptoms: irritability, anxiety, low mood, hunger, trouble focusing, mild headache.",
          "Smell and taste sensitivity often noticeably improve at the same time.",
          "Sleep can get worse for 2–3 nights before improving.",
        ],
      },
      {
        heading: "A 72-hour plan that works",
        paragraphs: [
          "Protect day 3 like a meeting: clear your calendar of high-risk events (drinks, long car rides, conflict), stock easy protein-rich snacks, and schedule a walk after each meal.",
          "Combine two layers of support: a behavioral routine (calls, walks, distraction apps) and a cessation medication if your clinician agrees. The NHS and CDC both report roughly doubled quit success when behavioral support is combined with NRT or varenicline.",
        ],
        bullets: [
          "Eat protein + fiber at every meal to steady blood sugar and reduce appetite spikes.",
          "Drink water before every craving — thirst imitates nicotine hunger.",
          "Move 10 minutes before each of the three hardest times of your day.",
        ],
      },
      {
        heading: "Red flags to escalate today",
        paragraphs: [
          "If you are using varenicline or bupropion, flag any new or intensifying mood changes, vivid dreams, or thoughts of self-harm to your prescriber today — adjustments are common during the first week.",
          "Seek urgent care for chest pain, fainting, confusion, worsening shortness of breath at rest, or coughing blood. These are not normal withdrawal symptoms.",
        ],
        bullets: [],
      },
    ],
    whatToExpectNext: [
      "Nicotine is fully cleared; symptoms start trending down from here.",
      "Taste and smell often feel noticeably sharper within days.",
      "Cravings shift from constant to cue-driven as the first week ends.",
    ],
    faq: [
      {
        question: "Why do I feel worse on day 3 than day 1?",
        answer:
          "Day 3 is the peak of acute nicotine withdrawal because your body has now fully cleared nicotine. Feeling worst today does not mean quitting is failing — it is usually the turning point.",
      },
      {
        question: "Do cravings decrease after day 3?",
        answer:
          "Yes, for most people. The intensity and frequency of cravings begin dropping after the 72-hour peak, though cue-based urges (after meals, with coffee or alcohol) will still appear for weeks.",
      },
      {
        question: "How long do day 3 symptoms last?",
        answer:
          "Typical acute withdrawal runs 3–14 days. Mood symptoms can linger 2–4 weeks. If symptoms keep intensifying after day 5, talk to a clinician.",
      },
    ],
    datePublished: "2026-03-01",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-1-day",
      "what-happens-after-1-week",
      "irritability",
      "anxiety",
      "insomnia",
    ],
    medicalConditionName: "Nicotine withdrawal",
  },
  {
    slug: "what-happens-after-1-week",
    title: "What happens to your body after 1 week without smoking",
    shortTitle: "After 1 week",
    category: "milestone",
    targetKeyword: "1 week without smoking",
    quickAnswer:
      "After 1 week smoke-free, nicotine withdrawal is past its peak. Cilia in your lungs start regrowing, sense of smell sharpens, and cravings shift from constant to cue-driven (after coffee, meals, or stress).",
    quickFacts: [
      "Roughly 9 out of 10 acute withdrawal symptoms peak before day 7.",
      "Cilia — the tiny 'sweepers' in your airways — begin regenerating within the first week.",
      "Resting heart rate commonly drops several beats per minute versus smoking baseline.",
    ],
    summary:
      "One week is the first proof-point that a smoke-free identity is sustainable. You have now navigated most common cues at least once without smoking.",
    detail:
      "Week one is less about how your lungs feel and more about how you handle triggers. By day 7 you have encountered most of the repeating cues in your week (coffee, breaks, driving, evenings), which means you have real data on where you are most vulnerable.",
    articleSections: [
      {
        heading: "Week 1 audit: what your trigger log should show",
        paragraphs: [
          "Treat your smoke-free week like a quick A/B test. Look back at the past 7 days and write down the top three moments that almost pushed you to relapse. Most quitters find that the same two cues repeat more than half of all urges: first coffee of the day, and the wind-down window in the evening.",
          "For each high-risk cue, pre-commit a 2-minute action. The action must be physical and location-based (move to a different room, walk around the block), not willpower-based ('don't think about smoking').",
        ],
        bullets: [
          "Name your single most dangerous cue and design an escape route before week 2.",
          "Keep NRT or replacement dosing steady through week 1 — do not step down yet.",
          "Plan one 'reward' purchase paid from this week's saved cigarette money.",
        ],
      },
      {
        heading: "What changes inside your airways this week",
        paragraphs: [
          "Cilia — microscopic hair-like structures that sweep mucus and particles out of your airways — are paralyzed by cigarette smoke. After about a week without smoking, cilia start regrowing and moving again. That is why cough can briefly get worse this week: your lungs are finally clearing trapped mucus.",
          "Sense of smell and taste often change in week 1. Food can taste saltier or sweeter than you remember because your olfactory receptors have less smoke interference.",
        ],
        bullets: [
          "A slightly productive cough is common and is usually a sign of recovery, not damage.",
          "Coffee and some foods will smell stronger — adjust quantity if needed.",
          "Breathing through the nose improves for many quitters within week 1.",
        ],
      },
      {
        heading: "If you slipped once in week 1",
        paragraphs: [
          "A single cigarette in week 1 does not erase your progress — physiologically, CO and nicotine levels go up briefly, then clear again within 24–48 hours. Psychologically, the risk is abandoning the plan, not the one cigarette itself.",
          "Return to the quit plan the same day. Book a call with a quitline (NHS 0300 123 1044 in England, 1-800-QUIT-NOW in the US, Quitline 13 7848 in Australia) to debrief the slip — quitlines are free and exist for exactly this moment.",
        ],
        bullets: [],
      },
    ],
    whatToExpectNext: [
      "Cravings become more cue-based than constant after week 1.",
      "Cough may temporarily increase as airways clear mucus.",
      "Exercise capacity and recovery after stairs often feels easier.",
    ],
    faq: [
      {
        question: "Is one week without smoking a major milestone?",
        answer:
          "Yes. Studies of quit attempts consistently show that quitters who reach 7 days smoke-free are much more likely to stay quit at 6 and 12 months than those who relapse in the first week.",
      },
      {
        question: "Why do cravings still happen after a week?",
        answer:
          "Nicotine withdrawal is mostly done, but learned habit cues remain. Retraining those cues takes weeks — each one you successfully navigate makes the next one weaker.",
      },
      {
        question: "Is a week-one cough a bad sign?",
        answer:
          "Usually no. A new or slightly wetter cough in week 1 is most often cilia resuming their job. Seek medical review for fever, coughing blood, or shortness of breath at rest.",
      },
    ],
    datePublished: "2026-03-02",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-3-days",
      "what-happens-after-2-weeks",
      "cough",
      "cravings",
    ],
    medicalConditionName: "Nicotine withdrawal",
  },
  {
    slug: "what-happens-after-2-weeks",
    title: "What happens to your body after 2 weeks without smoking",
    shortTitle: "After 2 weeks",
    category: "milestone",
    targetKeyword: "2 weeks without smoking",
    quickAnswer:
      "Around 2 weeks smoke-free, lung function begins measurably improving (up to ~30% in some studies), exercise feels easier, and the non-smoker identity starts to stick. Coughing and mucus can still fluctuate.",
    quickFacts: [
      "Lung function (FEV1) can improve measurably between 2 weeks and 3 months after quitting.",
      "Circulation to hands, feet, and skin improves versus smoking baseline.",
      "Cough often peaks in weeks 1–2, then tapers.",
    ],
    summary:
      "Two weeks is where the biology starts to visibly catch up with the behavior. Walking, climbing stairs, and recovering after exertion are the most commonly reported changes.",
    detail:
      "By the two-week mark you have enough data points to trust the direction: withdrawal intensity is down, breathing is shifting, and savings are starting to look real. The main risk now is drifting — you feel well enough to forget what worked.",
    articleSections: [
      {
        heading: "What the research says about lung function at 2 weeks",
        paragraphs: [
          "Studies summarized by the CDC and US Surgeon General's report describe measurable lung-function improvements (forced expiratory volume in 1 second, FEV1) between 2 weeks and 3 months after quitting. Improvements are larger for younger quitters and for those with fewer pack-years.",
          "Functional changes — how you feel on stairs or on a brisk walk — can appear before spirometry changes. Track perceived effort weekly, not daily, because there is normal day-to-day noise.",
        ],
        bullets: [
          "Expect variable day-to-day breathing; trend is what matters.",
          "Stair climbs, hill walks, and recovery after a jog are often the first measurable wins.",
          "If you have COPD or asthma, ask your clinician to time a spirometry test.",
        ],
      },
      {
        heading: "Rebuilding activity without triggering an old loop",
        paragraphs: [
          "Early exercise can reawaken specific smoking cues for ex-smokers (the post-exercise cigarette, the gym-changing-room smoke). Protect yourself by changing location, swapping post-workout routines, and keeping gum or lozenges accessible.",
          "Start low: 10 minutes of walking twice a day beats a single 60-minute session for both cardiovascular recovery and mood stability during week 2.",
        ],
        bullets: [
          "Add 10% volume week over week, not more.",
          "Pair movement with a supporter: text 'done' after each walk.",
          "Avoid high-intensity training until sleep has stabilized (usually late week 2 or 3).",
        ],
      },
      {
        heading: "Spotting the 'coasting' trap",
        paragraphs: [
          "Most quit plans are strongest in week 1 and drift in week 2–3. Feeling fine is not the same as being out of danger. Many relapses happen between week 2 and month 2, not in the first week, because people stop doing what worked.",
          "Keep at least three structural supports in place: a medication or NRT schedule, a daily check-in (app, journal, supporter), and a planned reward from this week's savings.",
        ],
        bullets: [],
      },
    ],
    whatToExpectNext: [
      "Circulation keeps improving in daily movement.",
      "Coughing can fluctuate as lungs clear irritants.",
      "Exercise tolerance may continue increasing for several months.",
    ],
    faq: [
      {
        question: "Can lungs really improve in just two weeks?",
        answer:
          "Yes — early functional improvements start within the first two weeks and measurable FEV1 gains can appear by 2 weeks to 3 months after quitting, per CDC and Surgeon General summaries.",
      },
      {
        question: "Is coughing normal at 2 weeks smoke-free?",
        answer:
          "Yes, while cilia recover and the airways clear mucus. Red flags: blood, fever, severe shortness of breath, weight loss. Seek medical review for those.",
      },
      {
        question: "Is it safe to start a new exercise program at 2 weeks?",
        answer:
          "Usually yes for most people, starting with low-intensity walking. If you have cardiovascular or pulmonary conditions, get clinician clearance and start with a supervised program.",
      },
    ],
    datePublished: "2026-03-02",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-1-week",
      "what-happens-after-1-month",
      "shortness-of-breath",
      "cough",
    ],
    medicalConditionName: "Nicotine withdrawal",
  },
  {
    slug: "what-happens-after-1-month",
    title: "What happens to your body after 1 month without smoking",
    shortTitle: "After 1 month",
    category: "milestone",
    targetKeyword: "1 month without smoking",
    quickAnswer:
      "At 1 month smoke-free, acute withdrawal is over, lung cilia are well into recovery, and most people sleep and breathe noticeably better. Cravings now appear mostly in emotional or social contexts.",
    quickFacts: [
      "Acute nicotine withdrawal has resolved for the vast majority of quitters by 4 weeks.",
      "Immune function and skin healing improve relative to continued smoking.",
      "Cough and sputum production often drop between week 2 and week 6.",
    ],
    summary:
      "Thirty days smoke-free is the transition from 'quitting' to 'being a non-smoker.' The story shifts from surviving symptoms to protecting progress.",
    detail:
      "At one month the main threat is not withdrawal — it is complacency plus stress. You will almost certainly be handed a situation (argument, travel, alcohol, big work stress) that your brain files under 'cigarette time.' The plan has to survive that moment, not an average Tuesday.",
    articleSections: [
      {
        heading: "What one month of abstinence changes",
        paragraphs: [
          "Sleep often normalizes at month 1: lighter nicotine disruption, more consistent bedtimes, fewer night wakings for some quitters. If you still cannot sleep, it is worth ruling out overlap with caffeine, alcohol, or untreated anxiety.",
          "Skin healing and gum health improve — oral surgeons often see reduced gum bleeding in patients who have been smoke-free for a month or more. This is one of the earliest visible wellness changes.",
        ],
        bullets: [
          "Resting heart rate is typically lower than smoking baseline.",
          "Breath tests (eCO) show near-non-smoker values for most people.",
          "Immune response to common respiratory infections starts recovering.",
        ],
      },
      {
        heading: "Your month-1 relapse prevention plan",
        paragraphs: [
          "Write down the three highest-risk future events in the next 90 days (wedding, trip, quarterly review, birthday). Design one pre-committed action per event: who you call, what you say no to, what you carry with you. Do not leave these to willpower in the moment.",
          "If you used NRT, do not abruptly stop at day 30. Step down gradually (patch strength, gum frequency) according to the product label or your prescriber. Abrupt stops in month 1 are a common relapse trigger.",
        ],
        bullets: [
          "Update your savings number — use it as concrete motivation.",
          "Pick a reward budget from this month's cigarette money.",
          "Schedule a 90-day check-in with your quitline or clinician.",
        ],
      },
      {
        heading: "Things that can still go sideways",
        paragraphs: [
          "Weight change, if it happens, is usually most visible between week 2 and month 3. Focus on protein, fiber, and walking rather than restriction. Tight restriction in month 1 often spikes cravings.",
          "Mood can dip at around the 4-week mark for some people as the dopamine bump of successful early quitting fades. If mood stays low for more than two weeks, book a clinician visit — depression screening is appropriate.",
        ],
        bullets: [],
      },
    ],
    whatToExpectNext: [
      "Breathing often feels less tight during activity.",
      "Sleep quality may keep improving as nicotine disruption decreases.",
      "Trigger response patterns are easier to manage with routines.",
    ],
    faq: [
      {
        question: "Is one month the hardest point to stay quit?",
        answer:
          "Physical withdrawal is mostly behind you at one month. The risk shifts to complacency and 'permission' thinking ('one won't hurt'). The first 90 days still require active planning.",
      },
      {
        question: "Can relapse still happen at one month?",
        answer:
          "Yes. Most relapses happen in the first 90 days, many of them between weeks 2 and 6. Keep structural supports active at least through month 3.",
      },
      {
        question: "When should I stop using NRT?",
        answer:
          "Follow product instructions or your prescriber's taper. For the patch, that is usually 8–12 weeks of stepped-down strengths, not a 30-day hard stop.",
      },
    ],
    datePublished: "2026-03-03",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-2-weeks",
      "what-happens-after-3-months",
      "weight-gain",
      "mood-swings",
    ],
    medicalConditionName: "Nicotine withdrawal",
  },
  {
    slug: "what-happens-after-3-months",
    title: "What happens to your body after 3 months without smoking",
    shortTitle: "After 3 months",
    category: "milestone",
    targetKeyword: "3 months without smoking",
    quickAnswer:
      "At 3 months smoke-free, lung function and circulation have improved measurably for most people, and the odds of sustained abstinence jump dramatically. Cravings still surface in emotional or social contexts.",
    quickFacts: [
      "Lung function can improve up to ~30% within weeks to months of quitting, per CDC summaries.",
      "Quitters at 3 months are several times more likely to remain smoke-free at 1 year than those who relapsed earlier.",
      "Exercise tolerance typically keeps improving through month 3.",
    ],
    summary:
      "Three months is a statistical inflection point: you are significantly more likely to be smoke-free at one year if you make it to month 3 without relapse.",
    detail:
      "By 90 days the body has made real progress and your identity is starting to update. Most people at this point no longer describe themselves as 'someone who is quitting' — they describe themselves as 'someone who does not smoke.' Protect that shift.",
    articleSections: [
      {
        heading: "Why month 3 is the statistical turning point",
        paragraphs: [
          "Longitudinal quit-attempt studies consistently show that the probability of being smoke-free at 12 months rises sharply once a quitter passes the 90-day mark. That is also roughly when most cessation trials measure their primary outcome.",
          "The brain's reward system has, for most quitters, rewired enough that the automatic 'smoke here' signal in familiar contexts has faded. What remains are emotional triggers — frustration, boredom, celebration.",
        ],
        bullets: [
          "Re-measure your savings: the number is now motivating, not hypothetical.",
          "Update your self-description to 'non-smoker' out loud and in writing.",
          "If you still use NRT or vaping as a bridge, plan a concrete taper.",
        ],
      },
      {
        heading: "Long-term tools: install one, remove one",
        paragraphs: [
          "At month 3, simplify. Pick one habit to install (e.g., a 20-minute walk after dinner) and one to remove (e.g., late-night scrolling that used to end with a cigarette). Small, durable changes outperform big overhauls at this stage.",
          "Share your quit with someone new this month — mentoring a colleague or relative who is trying to quit reinforces your own identity and habits. The Truth Initiative and CDC both highlight social accountability as a durable lever.",
        ],
        bullets: [
          "Put your quit date on the calendar annually as a small celebration.",
          "Pick one stress-reset practice (breathwork, walking, journaling) and do it daily.",
          "Track one metric weekly (resting HR, minutes of walking, or mood rating).",
        ],
      },
      {
        heading: "What to screen for at month 3",
        paragraphs: [
          "A persistent cough, shortness of breath, or chest discomfort at month 3 deserves medical review. Most smoking-related symptoms are trending down by now; new or worsening symptoms are not 'recovery flare-ups' and should be evaluated.",
          "This is also a good time for a clinician visit to re-check blood pressure, lipids, and — for longtime smokers in higher-risk age brackets — discuss lung cancer screening guidelines (US: annual low-dose CT for eligible adults aged 50–80 with a 20+ pack-year history).",
        ],
        bullets: [],
      },
    ],
    whatToExpectNext: [
      "Lung function trends can improve further with sustained abstinence.",
      "Stress-response habits begin shifting away from smoking cues.",
      "Savings and smoke-free streak momentum strengthen commitment.",
    ],
    faq: [
      {
        question: "Do cravings disappear by 3 months?",
        answer:
          "Most cravings are much less frequent and less intense than early quit weeks. Situational urges (bars, stress, old friend groups) can still appear — plan for them instead of assuming you are 'done.'",
      },
      {
        question: "Should I still take cessation medication at 3 months?",
        answer:
          "Many quitters finish an NRT or varenicline course around months 2–3; some benefit from longer courses. Decide with your prescriber based on relapse risk and how you handled previous dose drops.",
      },
      {
        question: "What helps maintain progress after 3 months?",
        answer:
          "Consistent routines, scheduled stress-reset practices, visible progress tracking (savings, streak, recovery timeline), and a relapse-prevention plan for high-risk events.",
      },
    ],
    datePublished: "2026-03-03",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-1-month",
      "what-happens-after-6-months",
      "shortness-of-breath",
      "best-quit-smoking-apps",
    ],
    medicalConditionName: "Tobacco use disorder",
  },
  {
    slug: "what-happens-after-6-months",
    title: "What happens to your body after 6 months without smoking",
    shortTitle: "After 6 months",
    category: "milestone",
    targetKeyword: "6 months without smoking",
    quickAnswer:
      "At 6 months, most quitters breathe more easily in daily life, exercise harder than they could as smokers, and see noticeable financial gains. Occasional urges still happen during old cues.",
    quickFacts: [
      "The chance of staying quit at one year increases sharply once quitters pass 6 months.",
      "Respiratory infections become shorter and less severe on average versus smoking.",
      "Cumulative savings at 6 months are often equivalent to a short vacation for pack-a-day smokers.",
    ],
    summary:
      "Half a year is where ex-smokers start describing themselves as 'former' smokers. The body has stabilized, the wallet shows it, and old cues are weakened but not gone.",
    detail:
      "The unfinished work at 6 months is usually emotional: smoking used to be your default response to specific feelings (anger, boredom, celebration). Replacing those default responses is what keeps 1-year and 5-year milestones on the table.",
    articleSections: [
      {
        heading: "What changes in daily life by 6 months",
        paragraphs: [
          "Daily capacity — how well you can walk, climb, carry groceries — is the most common wellness change quitters report at this stage. Resting heart rate and blood pressure have usually moved closer to healthy ranges.",
          "Sense of smell and taste are typically settled into a 'new normal' — food preferences may have shifted, and some old coping foods (heavy sweets, salty snacks) can taste less satisfying.",
        ],
        bullets: [
          "Morning cough is largely gone for most ex-smokers.",
          "Sleep tends to be more consistent than during quitting.",
          "Exercise capacity may be visibly better than smoking baseline.",
        ],
      },
      {
        heading: "Rewriting the emotional triggers",
        paragraphs: [
          "At 6 months, cravings are usually tied to feelings more than to situations. Instead of responding, 'I need to step outside,' when frustrated, rehearse a 30-second replacement: walk, breath, text, water — any consistent, physical alternative.",
          "If alcohol is a frequent trigger, decide your drinking rules in advance. Many quitters find a 6-month moratorium or a two-drink cap easier than 'I will just be careful' in the moment.",
        ],
        bullets: [
          "Audit your contacts: if one relationship is now built around smoking, redesign the interaction.",
          "Replace 'smoke break' with 'walk break' and keep it on your calendar.",
          "Practice saying 'I don't smoke' instead of 'I'm trying to quit.'",
        ],
      },
      {
        heading: "Clinical follow-up worth doing at 6 months",
        paragraphs: [
          "Ask your clinician to re-check blood pressure, cholesterol, and fasting glucose if those were borderline while you smoked. Smoking affects all three; abstinence usually moves them in the right direction.",
          "Discuss continuing cessation medications if you are on them. Longer durations (>12 weeks) are safe for many people and are associated with higher sustained quit rates in some studies.",
        ],
        bullets: [],
      },
    ],
    whatToExpectNext: [
      "Daily respiratory comfort often improves versus smoking baseline.",
      "Physical endurance may continue increasing.",
      "The non-smoker identity becomes more stable.",
    ],
    faq: [
      {
        question: "Is 6 months smoke-free a stable point?",
        answer:
          "Yes — it is one of the strongest intermediate milestones. Still, roughly 1 in 4 quitters who relapse do so after 6 months, so protective habits remain important.",
      },
      {
        question: "Why do occasional urges still happen?",
        answer:
          "Cue memory is durable. A song, a smell, or a social setting from your smoking years can trigger a brief urge even years later. Recognize and redirect — do not treat it as failure.",
      },
      {
        question: "Is it safe to drink alcohol at 6 months?",
        answer:
          "For most people yes, but alcohol is the most common relapse trigger. Decide on limits in advance and have an exit plan for nights that feel high-risk.",
      },
    ],
    datePublished: "2026-03-04",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-3-months",
      "what-happens-after-1-year",
      "cravings",
      "mood-swings",
    ],
    medicalConditionName: "Tobacco use disorder",
  },
  {
    slug: "what-happens-after-1-year",
    title: "What happens to your body after 1 year without smoking",
    shortTitle: "After 1 year",
    category: "milestone",
    targetKeyword: "1 year without smoking",
    quickAnswer:
      "One year smoke-free: your risk of heart attack is already roughly half that of a continuing smoker, breathing has measurably improved, and you have built a year of savings and data to keep going.",
    quickFacts: [
      "Risk of coronary heart disease at 1 year is about half that of a continuing smoker (CDC).",
      "Airway function continues improving; cough and mucus production are typically lower than smoking baseline.",
      "Quitters at 1 year have a much higher chance of lifelong abstinence than those who relapse earlier.",
    ],
    summary:
      "The first anniversary is one of the single largest cardiovascular wins in preventive medicine. Everything from here compounds.",
    detail:
      "After 12 months, your brain's smoking circuits have been dormant long enough that most ex-smokers no longer think about cigarettes daily. Maintenance now is about keeping a light safety net during rare high-risk periods — serious illness, bereavement, job loss.",
    articleSections: [
      {
        heading: "The biggest medical milestone at 1 year",
        paragraphs: [
          "US Surgeon General and CDC summaries describe a roughly 50% reduction in excess coronary heart disease risk at 1 year versus continuing smokers — one of the largest modifiable risk reductions in cardiology.",
          "Respiratory symptoms (cough, wheeze, shortness of breath) continue to trend down, and risk of respiratory infections falls toward non-smoker levels over the following years.",
        ],
        bullets: [
          "Risk of heart attack is about half that of a continuing smoker.",
          "Risk of stroke trends toward that of a non-smoker over the following 2–5 years.",
          "Lung cancer risk continues falling over 10+ years of abstinence.",
        ],
      },
      {
        heading: "Using year one to plan year two",
        paragraphs: [
          "Look back at the year's quit log: which months were hardest, and why? Repeatable patterns (Q4 year-end stress, holidays, anniversary dates of losses) deserve pre-planned support for next year.",
          "Write your 'never again' statement: one specific scenario that would have tempted you this year, and exactly what you would do instead. This is a 2-minute exercise and it makes year 2 noticeably easier.",
        ],
        bullets: [
          "Take your annual savings number and earmark a specific purchase or experience.",
          "Share your quit anniversary — public commitment raises the cost of relapse.",
          "Schedule an annual physical and update screenings.",
        ],
      },
      {
        heading: "When relapse risk spikes after year one",
        paragraphs: [
          "Late relapses tend to cluster around major life events: a serious health diagnosis, divorce, job loss, a big move. Identify two people you can call within 10 minutes in those moments, and make sure they know your quit date.",
          "If you start 'testing' yourself (one puff at a wedding, one cigar on vacation), treat that as a red flag, not a win. The research on social smoking after long abstinence is not encouraging — most 'just one' attempts escalate within weeks.",
        ],
        bullets: [],
      },
    ],
    whatToExpectNext: [
      "Cardiovascular risk continues trending toward non-smoker levels over the next 4 years.",
      "Airway inflammation typically stays lower than smoking baseline.",
      "Relapse likelihood can be reduced with strong habits.",
    ],
    faq: [
      {
        question: "How big is one year without smoking?",
        answer:
          "It is the single biggest cardiovascular milestone in the timeline: excess coronary heart disease risk is roughly halved versus continuing smoking at 1 year, according to US Surgeon General and CDC summaries.",
      },
      {
        question: "Should I still track milestones after one year?",
        answer:
          "Yes. Many ex-smokers benefit from an annual quit-date ritual — savings review, health check, reflection. It keeps identity active and makes high-risk periods easier.",
      },
      {
        question: "Is one cigarette after one year 'safe'?",
        answer:
          "No — 'one cigarette' is the single biggest predictor of full relapse in follow-up studies. Treat abstinence as a fixed rule, especially at high-risk events.",
      },
    ],
    datePublished: "2026-03-04",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-6-months",
      "what-happens-after-5-years",
      "cravings",
    ],
    medicalConditionName: "Tobacco use disorder",
  },
  {
    slug: "what-happens-after-5-years",
    title: "What happens to your body after 5 years without smoking",
    shortTitle: "After 5 years",
    category: "milestone",
    targetKeyword: "5 years without smoking",
    quickAnswer:
      "At 5 years smoke-free, stroke risk falls to that of a non-smoker for many ex-smokers, and your risk of cancers of the mouth, throat, esophagus, and bladder is roughly halved versus continuing smokers (CDC).",
    quickFacts: [
      "Stroke risk can fall to non-smoker levels within 5 years of quitting (CDC).",
      "Risk of oral, throat, esophageal, and bladder cancers drops by about 50% within 5 years.",
      "Lung-cancer risk continues to fall but remains elevated versus never-smokers for longer.",
    ],
    summary:
      "Five years compounds the early wins. Stroke and multiple cancer risks converge toward non-smoker levels, and the behavioral work is maintenance, not rebuilding.",
    detail:
      "At this point quitting is no longer a daily project — but long-term smokers can still feel occasional cue-based urges decades later. The goal of this stage is to keep one simple safety plan for rare high-stress events.",
    articleSections: [
      {
        heading: "What the 5-year data actually says",
        paragraphs: [
          "CDC and US Surgeon General summaries describe stroke risk falling to that of a non-smoker within 5 years of quitting for many ex-smokers, and roughly 50% reductions in risk of cancers of the mouth, throat, esophagus, and bladder over 5 years.",
          "Lung cancer risk also falls, but more slowly: meaningful reductions continue to accrue over 10+ years. Former smokers with significant pack-year histories should discuss lung cancer screening with a clinician.",
        ],
        bullets: [
          "Stroke risk typically converges with non-smokers within 5 years.",
          "Cervical cancer risk falls toward non-smoker levels within 5 years (USSG).",
          "Annual health checks and screenings remain worthwhile.",
        ],
      },
      {
        heading: "Identity maintenance in long-term quitters",
        paragraphs: [
          "The biggest risk at 5 years is being caught off-guard by a life event you have never faced as a non-smoker. Serious illness, grief, divorce, or a big career change are the typical late-relapse triggers.",
          "Keep one ritual that you can scale up under stress. It can be as small as a weekly walk, a brief check-in with a friend, or an annual quit-date reflection — whatever does not decay under pressure.",
        ],
        bullets: [
          "Identify two people to call within 10 minutes in a crisis.",
          "Keep a note on your phone with your reasons to stay quit and your savings number.",
          "Do not carry cigarettes 'for someone else.'",
        ],
      },
      {
        heading: "Still-worth-doing screenings",
        paragraphs: [
          "If you are a former heavy smoker (typically defined as 20+ pack-years) aged 50–80, discuss annual low-dose CT lung-cancer screening with your clinician (USPSTF/US eligibility; the UK and other countries are rolling out similar programs).",
          "Keep up with cervical screening, blood pressure checks, cholesterol and diabetes screening, and skin checks. Smoking affected multiple systems; quitting reduces but does not fully erase added risk for 10+ years.",
        ],
        bullets: [],
      },
    ],
    whatToExpectNext: [
      "Long-term cardiovascular and respiratory trends may continue improving.",
      "Behavioral triggers are usually far less dominant.",
      "Cumulative money saved becomes a meaningful life gain.",
    ],
    faq: [
      {
        question: "Can health keep improving years after quitting?",
        answer:
          "Yes. Many risk categories continue declining for 10+ years after quitting, and some — like stroke and multiple cancers — converge toward non-smoker levels within about 5 years.",
      },
      {
        question: "How do I avoid late relapse?",
        answer:
          "Keep a lightweight safety plan for rare high-stress events: two people you can call, one reliable stress-reset practice, and a clear 'never again' rule — especially around alcohol.",
      },
      {
        question: "Should I still get lung screening at 5 years?",
        answer:
          "If you were a heavy smoker, typically yes, based on your age and pack-year history. Follow USPSTF or your country's equivalent guidance with your clinician.",
      },
    ],
    datePublished: "2026-03-05",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-1-year",
      "what-happens-after-10-years",
      "best-quit-smoking-apps",
    ],
    medicalConditionName: "Tobacco use disorder",
  },
  {
    slug: "what-happens-after-10-years",
    title: "What happens to your body after 10 years without smoking",
    shortTitle: "After 10 years",
    category: "milestone",
    targetKeyword: "10 years without smoking",
    quickAnswer:
      "Ten years after quitting, your risk of dying from lung cancer is roughly half that of a continuing smoker, and risks of several other cancers and cardiovascular events continue to fall (CDC).",
    quickFacts: [
      "Risk of dying from lung cancer at 10 years is about half that of a continuing smoker (CDC).",
      "Risks of cancers of the larynx and pancreas decrease.",
      "Cumulative savings at 10 years are life-changing for pack-a-day smokers.",
    ],
    summary:
      "A decade smoke-free is one of the rarer long-term health outcomes in preventive medicine. The math on lung cancer, heart disease, and stroke has materially shifted in your favor.",
    detail:
      "At 10 years most ex-smokers no longer think of themselves as having quit — they are non-smokers who used to smoke. Maintenance is easy, but a single relapse can rewire the brain surprisingly quickly, so the rule stays simple: none.",
    articleSections: [
      {
        heading: "What 10 years looks like on the data",
        paragraphs: [
          "CDC and US Surgeon General summaries describe lung cancer mortality at 10 years as roughly half that of continuing smokers. Risk of cancers of the larynx and pancreas decreases; risk of coronary heart disease is similar to that of a non-smoker for many quitters.",
          "Residual risk remains elevated for some conditions compared with never-smokers, so routine screenings are still worth doing. But the compound effect over a decade is substantial.",
        ],
        bullets: [
          "Cumulative pack-a-day savings at 10 years are commonly in the five-figure range.",
          "Long-term exercise capacity can remain close to never-smoker peers for many people.",
          "Skin, gum, and oral health benefits are durable.",
        ],
      },
      {
        heading: "Pass it on: mentoring newer quitters",
        paragraphs: [
          "Teaching a newer quitter what worked is one of the most effective ways to reinforce your own quit. You restate your own rules, repeat your own proofs, and stay connected to your earliest motivations.",
          "Formal options: volunteer with a local quitline, a community health clinic, or a peer-support group. Informal options: simply tell your story when it is relevant.",
        ],
        bullets: [
          "Share your quit-date ritual publicly each year.",
          "Offer to be a '10-minute call' for someone starting out.",
          "Write your playbook down — it is the most portable asset from this decade.",
        ],
      },
      {
        heading: "Residual screening and lifestyle",
        paragraphs: [
          "Keep annual physicals and age-appropriate cancer screenings active. If you smoked heavily and meet eligibility, low-dose CT lung screening remains a consideration.",
          "Track one or two long-term metrics that matter to you: resting heart rate, weekly active minutes, body composition, cognitive function. Decade-plus data is powerful motivation.",
        ],
        bullets: [],
      },
    ],
    whatToExpectNext: [
      "Sustained abstinence supports better long-run health outcomes.",
      "Breathing and physical activity can remain more resilient.",
      "The financial upside compounds substantially over a decade.",
    ],
    faq: [
      {
        question: "Is there still benefit after 10 years?",
        answer:
          "Yes. Lung cancer mortality risk at 10 years is roughly half that of a continuing smoker, and coronary heart disease risk is close to that of a non-smoker for many ex-smokers.",
      },
      {
        question: "Should I still celebrate quit milestones at 10 years?",
        answer:
          "Yes. Annual quit anniversaries keep identity active and make rare high-stress years easier to navigate.",
      },
      {
        question: "Am I safe from lung cancer after 10 years?",
        answer:
          "Risk is much lower, but not zero — especially for former heavy smokers. Continue screenings if you remain eligible under your country's guidance.",
      },
    ],
    datePublished: "2026-03-05",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-5-years",
      "what-happens-after-1-year",
      "best-quit-smoking-apps",
    ],
    medicalConditionName: "Tobacco use disorder",
  },

  // ─────────────────────────── SYMPTOMS ───────────────────────────
  {
    slug: "cravings",
    title: "How long do cravings last after quitting smoking?",
    shortTitle: "Cravings",
    category: "symptom",
    targetKeyword: "how long do cravings last after quitting smoking",
    quickAnswer:
      "Physical nicotine cravings peak in the first 72 hours and mostly fade over 2–4 weeks. Cue-based urges (coffee, alcohol, stress) can still appear for months but are short — usually under 5 minutes.",
    quickFacts: [
      "Each individual craving typically lasts 3–5 minutes.",
      "Cravings are most frequent in the first 3 days, then drop sharply by the end of week 1.",
      "Cue-based urges can last months; their frequency keeps falling with time.",
    ],
    summary:
      "Cravings are short episodes that feel long in the middle. The physical part is gone within weeks; the learned trigger part takes longer to retrain.",
    detail:
      "Cravings work in two layers: the neurochemical layer (nicotine receptors under-stimulated) fades in 2–4 weeks. The habit layer (your brain predicting 'smoke here' in familiar contexts) takes months to a year but weakens with each unanswered cue.",
    articleSections: [
      {
        heading: "What a craving actually feels like, minute by minute",
        paragraphs: [
          "Time an early craving with a stopwatch. Most follow the same curve: gradual buildup (1–2 minutes), peak that feels unbearable (roughly 90 seconds), sharp drop, then a tail that fades across the next few minutes.",
          "Total duration is almost always under 5 minutes. Knowing this at the start of a craving is the single biggest advantage you can carry into the quit.",
        ],
        bullets: [
          "Build up: restless, heightened attention to smoking cues.",
          "Peak: racing thoughts, mild tremor, irritability.",
          "Fade: relief as soon as you change location or activity.",
        ],
      },
      {
        heading: "Three tools with evidence behind them",
        paragraphs: [
          "Nicotine replacement (patch + short-acting gum or lozenge) roughly doubles long-term quit success, per Cochrane reviews. Combining a long-acting form (patch) with a short-acting form (gum) outperforms either alone.",
          "Varenicline and bupropion can further improve odds; they require a prescription and clinician follow-up. Behavioral support, even via a free quitline, adds measurable success on top of any medication.",
        ],
        bullets: [
          "Patch + gum/lozenge combo for baseline coverage and breakthrough cravings.",
          "Daily 5-minute mindfulness or breathwork practice reduces craving intensity over 2–4 weeks.",
          "Write down the three contexts that produce most of your cravings and pre-commit an escape route.",
        ],
      },
      {
        heading: "When cravings are not normal",
        paragraphs: [
          "Cravings that last hours, feel qualitatively different from past attempts, or come with panic attacks, chest pain, or thoughts of self-harm are worth escalating to a clinician.",
          "If you are on varenicline or bupropion, tell your prescriber about new mood changes, vivid dreams, or anxiety — dose adjustments are common.",
        ],
        bullets: [],
      },
    ],
    typicalDuration: "Physical cravings: 2–4 weeks. Cue-based urges: up to several months.",
    commonTriggers: "First coffee, after meals, alcohol, driving, stress, boredom, evenings.",
    whenToSeekCare:
      "Seek urgent care if urges come with thoughts of self-harm. See a clinician if cravings feel unmanageable despite support, or if symptoms worsen on varenicline/bupropion.",
    whatToExpectNext: [
      "Delay and breathe through the urge for 3–5 minutes.",
      "Drink water and change physical location.",
      "Use a pre-planned replacement routine after meals.",
    ],
    faq: [
      {
        question: "How long do nicotine cravings last after quitting smoking?",
        answer:
          "Individual cravings usually last 3–5 minutes. Frequency drops sharply after the first 3 days and keeps falling over the first month. Cue-based urges can appear occasionally for months.",
      },
      {
        question: "Do cravings ever fully stop?",
        answer:
          "For many long-term ex-smokers, cravings become rare and fleeting. Some residual cue-based urges can appear years later around old contexts — they do not mean anything has gone wrong.",
      },
      {
        question: "What's the fastest way to stop a craving?",
        answer:
          "Change location, drink water, and time it. Pairing that with a short nicotine gum or lozenge if prescribed gives both physical and behavioral relief in under 5 minutes.",
      },
    ],
    datePublished: "2026-03-06",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "i-smoked-one-cigarette",
      "what-happens-after-3-days",
      "what-happens-after-1-week",
      "anxiety",
      "irritability",
    ],
    medicalConditionName: "Nicotine craving",
  },
  {
    slug: "cough",
    title: "How long does a cough last after quitting smoking?",
    shortTitle: "Cough",
    category: "symptom",
    targetKeyword: "cough after quitting smoking",
    quickAnswer:
      "A 'quitter's cough' commonly starts within days of stopping and usually clears within a few weeks to 3 months. It's typically a sign cilia are recovering — not a setback.",
    quickFacts: [
      "Cough can briefly get worse in the first 1–2 weeks as cilia regain function.",
      "Most smoking-related cough resolves within 3 months of quitting.",
      "Cough plus blood, fever, weight loss, or severe shortness of breath needs medical review.",
    ],
    summary:
      "Most post-quit coughs are temporary and productive — the lungs are clearing years of mucus and debris. Duration is usually weeks, occasionally months.",
    detail:
      "Cilia — tiny hair-like sweepers in your airways — are paralyzed by cigarette smoke. When you quit, they reactivate, and the mucus that was trapped now starts moving. That's what most 'quitter's cough' actually is.",
    articleSections: [
      {
        heading: "Why quitting can briefly make coughing worse",
        paragraphs: [
          "As airway cilia regenerate (starting in week 1 and continuing for months), mucus that smoking had kept in place begins being cleared. A mildly productive cough is the mechanism that clears it.",
          "This often looks worse than it feels. Most ex-smokers describe a gradual drop in daily coughing by the end of the first month, and a return to occasional-only cough by 2–3 months.",
        ],
        bullets: [
          "Hydration thins mucus — aim for lightly yellow urine.",
          "Humid air, warm showers, and honey-lemon drinks can ease irritation.",
          "Avoid cough suppressants unless a clinician recommends one — you usually want mucus to move, not be held in.",
        ],
      },
      {
        heading: "Cough patterns to expect by timeline",
        paragraphs: [
          "Week 1–2: cough may be new, wetter, or more frequent than before quitting. Morning cough is common.",
          "Week 3–6: cough typically trends down; mucus color lightens. Some people notice a dry cough in cold air during exercise.",
          "Month 2–3: most quitters report only occasional cough. Persistent daily cough at this point is worth a clinic visit.",
        ],
        bullets: [],
      },
      {
        heading: "When cough needs medical review",
        paragraphs: [
          "Cough with blood, fever, chest pain, severe shortness of breath, wheeze at rest, or unexplained weight loss is not 'recovery cough.' Seek care.",
          "If you have asthma or COPD, post-quit cough may reflect changes in airway tone or inhaler responsiveness. Clinicians often re-check spirometry at 2–3 months post-quit.",
        ],
        bullets: [],
      },
    ],
    typicalDuration: "A few weeks to 3 months for most quitters.",
    commonTriggers: "Morning, cold air, exercise, lying down.",
    whenToSeekCare:
      "See a clinician for coughing blood, fever, severe shortness of breath, unexplained weight loss, or cough that worsens past month 1.",
    whatToExpectNext: [
      "Hydrate regularly to thin mucus.",
      "Use humid air in dry environments.",
      "Track cough trend weekly rather than day-to-day noise.",
    ],
    faq: [
      {
        question: "How long does a cough last after quitting smoking?",
        answer:
          "Most quitter's cough resolves within a few weeks to 3 months as cilia recover and clear trapped mucus. A cough that worsens after month 1 should be evaluated by a clinician.",
      },
      {
        question: "Is coughing normal after quitting smoking?",
        answer:
          "Yes — a mildly productive cough in the first weeks is common and usually a sign of recovery. Red flags: blood, fever, severe shortness of breath, weight loss.",
      },
      {
        question: "Can I use cough medicine after quitting?",
        answer:
          "For most people, a wet productive cough should be allowed to clear mucus, not suppressed. Talk to a pharmacist or clinician if cough disrupts sleep.",
      },
    ],
    datePublished: "2026-03-06",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-1-week",
      "what-happens-after-2-weeks",
      "shortness-of-breath",
    ],
    medicalConditionName: "Post-cessation cough",
  },
  {
    slug: "insomnia",
    title: "How long does insomnia last after quitting smoking?",
    shortTitle: "Insomnia",
    category: "symptom",
    targetKeyword: "insomnia after quitting smoking",
    quickAnswer:
      "Sleep disruption after quitting usually lasts 1–4 weeks. It tends to be worst in days 2–5 and trend down as nicotine withdrawal stabilizes.",
    quickFacts: [
      "Nicotine is a short-acting stimulant and also disrupts REM sleep.",
      "Most quitters report near-normal sleep within 4 weeks.",
      "Vivid dreams (with or without varenicline) are common early and usually harmless.",
    ],
    summary:
      "The first few nights off nicotine are often the hardest. Sleep architecture usually normalizes within weeks, and in many cases ends up better than smoking baseline.",
    detail:
      "Insomnia during quitting is driven by two things: falling nicotine levels in the evening and elevated arousal from withdrawal. Both resolve — nicotine within days, withdrawal arousal within weeks.",
    articleSections: [
      {
        heading: "Why sleep gets worse before it gets better",
        paragraphs: [
          "Nicotine stimulates acetylcholine receptors and shortens REM sleep. For years, your brain has been wired to expect this pattern. Removing nicotine forces a quick reset, and the first several nights can feel fragmented.",
          "Some cessation medications — varenicline in particular — can cause vivid dreams. This is usually harmless, but severe nightmares, mood changes, or thoughts of self-harm should be reported to your prescriber.",
        ],
        bullets: [
          "Expect waking more often in nights 2–5.",
          "Vivid or unusual dreams are common for 1–3 weeks.",
          "Caffeine effects are stronger once nicotine is gone — cut mid-afternoon coffee.",
        ],
      },
      {
        heading: "A 4-week sleep protocol",
        paragraphs: [
          "Keep fixed wake times. Do not catch up with long daytime naps, which fragment the next night further.",
          "Move your caffeine cutoff to at least 8 hours before bedtime. Nicotine used to blunt caffeine's stimulating effect; now caffeine hits harder.",
          "Walk 10–20 minutes in daylight early in the day. Light anchors circadian rhythm, which is what regulates your ability to fall asleep in the evening.",
        ],
        bullets: [
          "Fixed wake time, 7 days a week.",
          "No caffeine after 12:00 for the first 4 weeks.",
          "Screen wind-down 60 minutes before bedtime.",
        ],
      },
      {
        heading: "When insomnia is not quit-related",
        paragraphs: [
          "Sleep that does not improve at all after 4 weeks, or that is paired with loud snoring, morning headaches, or daytime sleepiness, could reflect sleep apnea — which is common in current and former smokers and often undiagnosed.",
          "Depression and anxiety also show up as insomnia. If mood stays low for 2+ weeks, book a clinician visit; screening and treatment are straightforward.",
        ],
        bullets: [],
      },
    ],
    typicalDuration: "1–4 weeks for most quitters.",
    commonTriggers: "Late caffeine, irregular bedtimes, evening screen use, alcohol.",
    whenToSeekCare:
      "See a clinician if insomnia lasts beyond 4 weeks, is paired with loud snoring or daytime sleepiness, or if mood is low for more than 2 weeks.",
    whatToExpectNext: [
      "Keep consistent sleep and wake times.",
      "Avoid caffeine late in the day.",
      "Use a short wind-down routine before bedtime.",
    ],
    faq: [
      {
        question: "How long does insomnia last after quitting smoking?",
        answer:
          "Most quitters see sleep return to near-normal within 4 weeks. Vivid dreams and fragmented sleep are most common in the first 2 weeks.",
      },
      {
        question: "Will sleep return to normal after quitting?",
        answer:
          "Usually yes — and for many quitters, sleep quality ends up better than it was while smoking because nighttime nicotine drops no longer interrupt sleep.",
      },
      {
        question: "Does varenicline cause insomnia?",
        answer:
          "Vivid dreams and occasional insomnia are well-documented side effects. Severe effects should be reported to your prescriber — dose adjustment often helps.",
      },
    ],
    datePublished: "2026-03-07",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-3-days",
      "what-happens-after-1-week",
      "anxiety",
      "mood-swings",
    ],
    medicalConditionName: "Insomnia",
  },
  {
    slug: "headaches",
    title: "How long do headaches last after quitting smoking?",
    shortTitle: "Headaches",
    category: "symptom",
    targetKeyword: "headaches after quitting smoking",
    quickAnswer:
      "Withdrawal headaches usually appear in days 1–3 and mostly resolve within 2 weeks. Hydration, regular meals, and steady sleep shorten them.",
    quickFacts: [
      "Withdrawal headache peaks alongside other symptoms on days 2–3.",
      "Most quitters are headache-free by week 2.",
      "A sudden 'thunderclap' headache is a medical emergency — do not attribute to quitting.",
    ],
    summary:
      "Quit headaches are common but short. They track the same 2–14 day withdrawal window as the rest of the acute symptoms.",
    detail:
      "Smoking changes blood vessel tone and blood sugar regulation. When you stop, vessels dilate slightly and eating patterns shift — both of which can trigger short-lived headaches.",
    articleSections: [
      {
        heading: "The most common quit-headache patterns",
        paragraphs: [
          "Day 1–3: dull frontal or temple headache, often pairs with fatigue and irritability. Very common, usually mild to moderate.",
          "Week 2–3: tension-type headache tied to poor sleep, skipped meals, or increased caffeine intake. Fixable with routine tweaks.",
        ],
        bullets: [
          "Check hydration first — most quit headaches improve with water + salt.",
          "Eat something every 3–4 hours during the first week.",
          "Track caffeine: nicotine used to blunt its half-life, so headaches can now come from coffee, not withdrawal.",
        ],
      },
      {
        heading: "A simple 2-week plan",
        paragraphs: [
          "Drink water with the first and last hour of your day; add a small electrolyte source if you sweat or exercise.",
          "Eat a protein-containing breakfast — low blood sugar is a frequent trigger in quit week 1.",
          "Keep caffeine consistent for 2 weeks rather than raising intake to manage fatigue.",
        ],
        bullets: [],
      },
      {
        heading: "Red flags that are not 'just withdrawal'",
        paragraphs: [
          "A sudden, severe 'worst-ever' headache, a headache with neurological symptoms (vision loss, numbness, weakness, confusion), headache with fever and stiff neck, or headache after head injury requires urgent evaluation.",
          "Migraine sufferers may see a temporary shift in frequency around quitting. If you have a pre-existing headache disorder, let your clinician know you quit — it can affect medication choices.",
        ],
        bullets: [],
      },
    ],
    typicalDuration: "Days to 2 weeks for most quitters.",
    commonTriggers: "Dehydration, skipped meals, caffeine changes, poor sleep.",
    whenToSeekCare:
      "Seek urgent care for sudden 'thunderclap' headache, neurological symptoms, fever with stiff neck, or headache after head injury.",
    whatToExpectNext: [
      "Hydrate and eat regular meals.",
      "Practice short stress resets through breathwork.",
      "Limit screen strain during acute periods.",
    ],
    faq: [
      {
        question: "How long do headaches last after quitting smoking?",
        answer:
          "Most quit-related headaches resolve within 2 weeks. They are most intense in days 1–3 and respond well to hydration, food, and steady caffeine intake.",
      },
      {
        question: "Are headaches common during nicotine withdrawal?",
        answer:
          "Yes. Withdrawal headaches are one of the most frequently reported early symptoms. Frequency drops sharply after the first week.",
      },
      {
        question: "When should I worry about a post-quit headache?",
        answer:
          "Any sudden, severe, or 'worst-ever' headache, or a headache with neurological symptoms, is an emergency — get care immediately.",
      },
    ],
    datePublished: "2026-03-07",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-1-day",
      "what-happens-after-3-days",
      "cravings",
    ],
    medicalConditionName: "Nicotine withdrawal headache",
  },
  {
    slug: "anxiety",
    title: "How long does anxiety last after quitting smoking?",
    shortTitle: "Anxiety",
    category: "symptom",
    targetKeyword: "anxiety after quitting smoking",
    quickAnswer:
      "Anxiety typically rises in the first 1–2 weeks after quitting and then falls below smoking baseline within 2–6 months for most people.",
    quickFacts: [
      "Short-term anxiety can worsen in weeks 1–2, then improve.",
      "Long-term anxiety levels after quitting are lower on average than while smoking (BMJ meta-analysis).",
      "Panic symptoms, avoidance, or thoughts of self-harm need clinical support.",
    ],
    summary:
      "Many smokers use cigarettes to manage anxiety, so quitting can temporarily feel like losing a coping tool. Evidence shows anxiety falls long-term, not rises.",
    detail:
      "A widely cited BMJ meta-analysis (Taylor et al., 2014) found that people who successfully quit smoking had lower anxiety, depression, and stress scores than when they were smoking — opposite to what many smokers expect.",
    articleSections: [
      {
        heading: "Why anxiety temporarily rises during quitting",
        paragraphs: [
          "Nicotine blunts stress signals in the short term by triggering dopamine and cortisol responses. Between cigarettes, stress signals rebound. Many smokers experience constant low-level withdrawal anxiety that they attribute to 'normal life.'",
          "When you quit, you remove both the blunting and the rebound. The first 1–2 weeks can feel more anxious because your nervous system is learning to regulate without nicotine. This reverses — on average — within months.",
        ],
        bullets: [
          "Anxiety peak usually in days 2–5.",
          "Noticeable improvement by week 4 for most people.",
          "Long-term reduction below smoking baseline is the expected pattern.",
        ],
      },
      {
        heading: "Evidence-based anxiety tools during quitting",
        paragraphs: [
          "Brief breathwork — 4-second inhale, 6-second exhale, 5 minutes, twice daily — has replicated anxiolytic effects and pairs well with craving work.",
          "Aerobic exercise (even 10–20 minutes of brisk walking) reduces withdrawal anxiety and cravings. Two short walks beat one long one for most quitters in week 1.",
          "If you have a pre-existing anxiety disorder, tell your clinician that you are quitting — cessation can interact with medication absorption (e.g. caffeine potency increases once nicotine is gone).",
        ],
        bullets: [
          "4-6 breathing, 2× day for 5 minutes.",
          "20 minutes of daylight walking, ideally in the morning.",
          "Reduce caffeine at least 25% during week 1.",
        ],
      },
      {
        heading: "When anxiety is not 'just quitting'",
        paragraphs: [
          "Panic attacks, avoidance behaviors that interfere with work or relationships, or thoughts of self-harm require clinical support — whether or not they are quit-related.",
          "Varenicline and bupropion both have post-market reports of neuropsychiatric side effects. Report any new or escalating mood symptoms to your prescriber.",
        ],
        bullets: [],
      },
    ],
    typicalDuration: "Days to several weeks; long-term levels usually improve below smoking baseline.",
    commonTriggers: "Work deadlines, social settings, caffeine, poor sleep.",
    whenToSeekCare:
      "Seek professional help for panic attacks, avoidance of daily activities, or thoughts of self-harm.",
    whatToExpectNext: [
      "Use a simple 4-6 breathing pattern during spikes.",
      "Reduce high-stimulation triggers when possible.",
      "Schedule short movement breaks during stressful hours.",
    ],
    faq: [
      {
        question: "How long does anxiety last after quitting smoking?",
        answer:
          "Most quitters see anxiety improve within 4 weeks, and long-term anxiety levels are typically lower than while smoking (BMJ meta-analysis).",
      },
      {
        question: "Does quitting smoking make anxiety worse permanently?",
        answer:
          "No — the evidence points the other direction. Short-term anxiety can rise, but long-term anxiety, stress, and depression scores improve after quitting.",
      },
      {
        question: "Can I use nicotine replacement if I have anxiety?",
        answer:
          "Yes for most people. NRT provides nicotine without smoke toxins and can make early weeks calmer. Talk to your clinician about the safest option for your situation.",
      },
    ],
    datePublished: "2026-03-08",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "cravings",
      "mood-swings",
      "irritability",
      "what-happens-after-3-days",
    ],
    medicalConditionName: "Anxiety (quit-related)",
  },
  {
    slug: "irritability",
    title: "How long does irritability last after quitting smoking?",
    shortTitle: "Irritability",
    category: "symptom",
    targetKeyword: "irritability after quitting smoking",
    quickAnswer:
      "Irritability is most intense in the first 1–2 weeks after quitting and typically fades within a month. It is a normal part of nicotine withdrawal, not a character flaw.",
    quickFacts: [
      "Irritability and restlessness are among the most common withdrawal symptoms.",
      "They peak between day 2 and day 5 for most quitters.",
      "A brief heads-up to family and co-workers prevents unneeded conflict.",
    ],
    summary:
      "Quit-related irritability is short, predictable, and manageable. Telling the people around you in advance is the single most effective intervention.",
    detail:
      "Your nervous system is used to regular nicotine hits. Without them, small annoyances land harder for 1–2 weeks. This is a temporary recalibration, not a new baseline.",
    articleSections: [
      {
        heading: "What irritability feels like during quitting",
        paragraphs: [
          "A shorter fuse, jaw clenching, sighing more often, snapping at small things, a strong urge to 'just be alone for 5 minutes.' Most quitters describe recognizing their pre-smoker self returning in the second or third week.",
          "Underlying physiology: the dopamine reward your brain used to expect from nicotine is missing. Small frustrations are not being buffered.",
        ],
        bullets: [],
      },
      {
        heading: "A practical 2-week de-escalation plan",
        paragraphs: [
          "Tell the 3 people you see most (partner, co-workers, close friend) that you are quitting this week. Give them one sentence: 'If I'm short-tempered, it's day 4 of no nicotine, not about you.' Most interpersonal blowups are avoidable with this one disclosure.",
          "Schedule 5-minute resets before you think you need them: 10:30, 14:00, 19:00. A short walk, a glass of water, 2 minutes of slow breathing. Irritability is heavily mediated by blood sugar, hydration, and breath rate.",
        ],
        bullets: [
          "Heads-up your inner circle in advance.",
          "Stabilize meals, water, and sleep.",
          "Avoid major decisions and confrontations for 2 weeks.",
        ],
      },
      {
        heading: "When to ask for help",
        paragraphs: [
          "Irritability that escalates to aggression you cannot control, thoughts of self-harm or harming others, or any concern about personal safety warrants immediate professional help.",
          "If you live with someone who has anxiety, depression, or who has experienced trauma, be extra-explicit about your quit and your plan. It protects your quit and the relationship.",
        ],
        bullets: [],
      },
    ],
    typicalDuration: "1–4 weeks for most quitters.",
    commonTriggers: "Sleep debt, hunger, interruptions, alcohol.",
    whenToSeekCare:
      "Seek help if irritability escalates to aggression you cannot control, or if you feel unsafe.",
    whatToExpectNext: [
      "Give close contacts a short heads-up plan.",
      "Use 5-minute reset breaks before reacting.",
      "Stabilize meals and hydration through the day.",
    ],
    faq: [
      {
        question: "How long does irritability last after quitting smoking?",
        answer:
          "Most quitters see irritability peak in the first 3–5 days and substantially improve within 4 weeks. It is a normal, temporary part of withdrawal.",
      },
      {
        question: "Why am I so irritable after quitting?",
        answer:
          "Your brain's dopamine reward system is used to regular nicotine. Removing it causes a short recalibration during which small frustrations feel bigger.",
      },
      {
        question: "Will I go back to normal?",
        answer:
          "Yes — and many ex-smokers describe feeling calmer than they did as smokers once irritability resolves, because between-cigarette withdrawal is no longer happening every hour.",
      },
    ],
    datePublished: "2026-03-08",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-3-days",
      "anxiety",
      "mood-swings",
      "cravings",
    ],
    medicalConditionName: "Nicotine withdrawal irritability",
  },
  {
    slug: "weight-gain",
    title: "How long does weight gain last after quitting smoking?",
    shortTitle: "Weight gain",
    category: "symptom",
    targetKeyword: "weight gain after quitting smoking",
    quickAnswer:
      "Most quitters who gain weight do so in the first 6 months, with the average gain around 4–5 kg (~10 lb). It is not inevitable, and it rarely outweighs the health benefits of quitting.",
    quickFacts: [
      "Average post-quit weight gain is 4–5 kg (~10 lb) in the first year (Cochrane/BMJ data).",
      "Roughly 16% of quitters gain more than 10 kg; another 13% lose weight.",
      "The health benefit of quitting vastly exceeds cardiovascular risk from modest weight gain.",
    ],
    summary:
      "Some weight change after quitting is common, but the long-term health trade-off is overwhelmingly in favor of staying quit.",
    detail:
      "Nicotine mildly increases metabolic rate and suppresses appetite. Removing it usually moves weight up by several kilograms over the first year — but the cardiovascular and cancer-risk reductions from quitting dominate the health picture.",
    articleSections: [
      {
        heading: "What the data actually says",
        paragraphs: [
          "A large meta-analysis (Aubin et al., 2012) found mean weight gain of 4–5 kg in the year after quitting, with wide individual variation. Most of the gain happens in the first 3 months.",
          "Even at the higher end, the cardiovascular benefits of quitting smoking massively outweigh the risks of moderate weight gain. This is consistent across US Surgeon General, NHS, and WHO summaries.",
        ],
        bullets: [
          "Typical gain: 4–5 kg in year 1.",
          "~13% of quitters lose weight instead.",
          "Heavier smokers gain slightly more on average.",
        ],
      },
      {
        heading: "A low-friction plan that does not threaten your quit",
        paragraphs: [
          "Do not attempt a strict diet in the first 3 months. Restricted eating amplifies cravings and is one of the top reasons quitters relapse early.",
          "Focus on protein and fiber at each meal, one daily walk, and keeping sugary or ultra-processed snacks out of easy reach. These three changes are usually enough to blunt most post-quit gain.",
        ],
        bullets: [
          "Protein + fiber at each meal.",
          "One 20-minute walk per day.",
          "Keep sugary snacks out of the house.",
        ],
      },
      {
        heading: "When to investigate weight change",
        paragraphs: [
          "Rapid gain (several kilograms per week), gain with swelling in the legs, or rapid unintentional weight loss is not 'normal quit weight gain' and should be checked.",
          "Thyroid function, depression, and medication side effects (including some cessation medications and antidepressants) can drive weight change. A short clinician visit rules out common causes.",
        ],
        bullets: [],
      },
    ],
    typicalDuration: "Most change appears in the first 3–6 months post-quit.",
    commonTriggers: "Snacking to replace smoking breaks, sugary comfort food, skipped meals followed by large dinners.",
    whenToSeekCare:
      "See a clinician for rapid weight change, edema, or if you have eating-disorder concerns.",
    whatToExpectNext: [
      "Plan high-protein snacks before cravings hit.",
      "Add short daily walks after meals.",
      "Track trend weekly, not daily.",
    ],
    faq: [
      {
        question: "How long does weight gain last after quitting smoking?",
        answer:
          "Most post-quit weight change happens in the first 3–6 months. Average total gain is about 4–5 kg in year 1.",
      },
      {
        question: "Is weight gain inevitable after quitting?",
        answer:
          "No. Roughly 13% of quitters lose weight, and many stay within a kilogram or two of their starting weight with modest adjustments to food and walking.",
      },
      {
        question: "Should I try to diet while quitting?",
        answer:
          "Restrictive diets in the first 3 months amplify cravings and raise relapse risk. Focus on protein, fiber, and walking until the quit is stable.",
      },
    ],
    datePublished: "2026-03-09",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "what-happens-after-1-month",
      "what-happens-after-3-months",
      "cravings",
    ],
    medicalConditionName: "Post-cessation weight change",
  },
  {
    slug: "brain-fog",
    title: "How long does brain fog last after quitting smoking?",
    shortTitle: "Brain fog",
    category: "symptom",
    targetKeyword: "brain fog after quitting smoking",
    quickAnswer:
      "Quit-related brain fog is most noticeable in the first 1–2 weeks and usually clears within 30 days. Nicotine withdrawal temporarily affects attention and working memory.",
    quickFacts: [
      "Cognitive slowdown usually peaks in days 2–7.",
      "Most quitters report clearer thinking by the end of week 4.",
      "Long-term cognition is better off nicotine than on it for most adults.",
    ],
    summary:
      "Brain fog is a short-term effect of nicotine withdrawal, not a long-term trade-off. Thinking usually sharpens within 2–4 weeks and keeps improving.",
    detail:
      "Nicotine acutely improves attention. Ex-smokers initially feel that loss keenly. Over weeks, your brain's attentional systems adjust without nicotine, and most ex-smokers report better concentration than they had in the middle of their smoking years.",
    articleSections: [
      {
        heading: "Why brain fog happens during quitting",
        paragraphs: [
          "Acetylcholine receptors that were chronically stimulated by nicotine are now under-stimulated. Working memory and sustained attention — the everyday components of 'thinking clearly' — temporarily feel harder.",
          "Sleep disruption during the first 1–2 weeks compounds this. Most brain fog improves as soon as sleep does.",
        ],
        bullets: [
          "Worst between day 2 and week 2.",
          "Often resolves alongside sleep normalization.",
          "Long-term cognition usually equal to or better than smoking baseline.",
        ],
      },
      {
        heading: "Working with brain fog instead of fighting it",
        paragraphs: [
          "Structure demanding work in shorter blocks for the first two weeks: 30-minute focused sessions, 5-minute walks, repeat. Brain fog is visibly worse in long unbroken work sessions.",
          "Protect sleep as the main cognitive lever — better sleep clears most quit-related fog within 10 days. Cut caffeine after lunch to protect that sleep.",
        ],
        bullets: [
          "Work in 30-minute focused blocks.",
          "Walk for 5 minutes between blocks.",
          "No caffeine after 12:00 during week 1–2.",
        ],
      },
      {
        heading: "When fog is not about quitting",
        paragraphs: [
          "Sudden confusion, focal neurological symptoms (weakness, vision loss, slurred speech), memory loss, or cognitive decline that progresses beyond the first month should be evaluated by a clinician.",
          "Depression often presents as 'brain fog.' If fog is paired with low mood, loss of interest, or sleep changes beyond week 4, screen for depression.",
        ],
        bullets: [],
      },
    ],
    typicalDuration: "Days to 4 weeks for most quitters.",
    commonTriggers: "Sleep deprivation, skipped meals, high task-switching days.",
    whenToSeekCare:
      "Seek evaluation for sudden confusion, focal neurological symptoms, or cognitive decline beyond the first month.",
    whatToExpectNext: [
      "Work in short focused intervals.",
      "Sleep consistently and hydrate.",
      "Use light movement before cognitively demanding tasks.",
    ],
    faq: [
      {
        question: "How long does brain fog last after quitting smoking?",
        answer:
          "Most quitters notice clearer thinking within 4 weeks. Peak fog is in the first 1–2 weeks and usually tracks sleep quality.",
      },
      {
        question: "Can I still work effectively with withdrawal fog?",
        answer:
          "Yes, with shorter focus blocks, predictable routines, and protected sleep. Most quitters are back to baseline productivity within a month.",
      },
      {
        question: "Does nicotine improve cognition long-term?",
        answer:
          "No. Short-term attention improvements do not offset long-term smoking harms. Most ex-smokers report better cognition off nicotine once withdrawal resolves.",
      },
    ],
    datePublished: "2026-03-09",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "insomnia",
      "fatigue",
      "what-happens-after-1-week",
    ],
    medicalConditionName: "Post-cessation cognitive symptoms",
  },
  {
    slug: "fatigue",
    title: "How long does fatigue last after quitting smoking?",
    shortTitle: "Fatigue",
    category: "symptom",
    targetKeyword: "fatigue after quitting smoking",
    quickAnswer:
      "Post-quit fatigue usually lasts 1–3 weeks. It is driven by sleep disruption and removing nicotine's short-term stimulant effect.",
    quickFacts: [
      "Fatigue usually peaks in week 1 and trends down each week after.",
      "Energy often exceeds smoking baseline within 1–3 months.",
      "Exercise tolerance starts improving in week 2.",
    ],
    summary:
      "Quit-related fatigue is a short bridge. On the other side, most ex-smokers have more energy than they did as smokers, not less.",
    detail:
      "Nicotine is a fast stimulant. Removing it is like cutting your coffee and energy drinks cold — for about two weeks. Then your baseline energy usually catches up and surpasses smoking baseline.",
    articleSections: [
      {
        heading: "Why quitters feel tired in week 1",
        paragraphs: [
          "Removing nicotine's stimulant effect and disrupting sleep at the same time produces classic fatigue. Poor sleep plus no morning nicotine hit is a rough combination that resolves within 2–4 weeks.",
          "Low blood sugar makes fatigue worse. Most quitters underestimate how much smoking blunted their appetite, so the first week often involves under-eating — which amplifies tiredness.",
        ],
        bullets: [
          "Protein breakfast reduces mid-morning fatigue.",
          "10-minute daylight walk reduces afternoon slump.",
          "Consistent bedtime matters more than hours slept.",
        ],
      },
      {
        heading: "A 3-week energy plan",
        paragraphs: [
          "Fixed wake time + daylight + protein breakfast is the 80/20 intervention. Do these three things consistently and fatigue usually drops by week 2.",
          "Add low-intensity exercise only when sleep has stabilized (usually end of week 2). Starting hard workouts in week 1 often backfires.",
        ],
        bullets: [
          "Fixed wake time 7 days/week.",
          "Daylight within 60 minutes of waking.",
          "Protein + fiber breakfast for 3 weeks.",
        ],
      },
      {
        heading: "When fatigue needs investigation",
        paragraphs: [
          "Fatigue paired with chest pain, severe shortness of breath, fainting, or persistent for more than 4–6 weeks warrants medical review. Thyroid function, anemia, sleep apnea, and depression are common drivers unrelated to quitting.",
          "If you have heart or lung disease, tell your clinician that you quit — some medication doses are adjusted after cessation.",
        ],
        bullets: [],
      },
    ],
    typicalDuration: "1–3 weeks for most quitters.",
    commonTriggers: "Poor sleep, low-calorie days, sedentary time.",
    whenToSeekCare:
      "See a clinician for fatigue with chest pain, fainting, severe shortness of breath, or fatigue persisting beyond 4–6 weeks.",
    whatToExpectNext: [
      "Get daylight exposure early in the day.",
      "Keep hydration and meal timing consistent.",
      "Use low-intensity exercise to rebuild energy.",
    ],
    faq: [
      {
        question: "How long does fatigue last after quitting smoking?",
        answer:
          "Most post-quit fatigue resolves within 1–3 weeks. Energy often surpasses smoking baseline within a few months.",
      },
      {
        question: "Is tiredness normal after quitting smoking?",
        answer:
          "Yes — short-term fatigue is common and expected during the first 2 weeks. It typically improves quickly alongside sleep.",
      },
      {
        question: "When will my energy come back?",
        answer:
          "Most quitters report feeling more energetic than while smoking within 1–3 months, especially once sleep stabilizes.",
      },
    ],
    datePublished: "2026-03-10",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "insomnia",
      "brain-fog",
      "what-happens-after-1-week",
    ],
    medicalConditionName: "Post-cessation fatigue",
  },
  {
    slug: "shortness-of-breath",
    title: "How long does shortness of breath last after quitting smoking?",
    shortTitle: "Shortness of breath",
    category: "symptom",
    targetKeyword: "shortness of breath after quitting smoking",
    quickAnswer:
      "Breathlessness after quitting often fluctuates in the first 1–3 months as airways clear, then trends down. Measurable lung-function gains typically appear between 2 weeks and 3 months.",
    quickFacts: [
      "FEV1 can improve up to ~30% within the first months of quitting (CDC).",
      "Daily breathlessness often starts improving by week 2.",
      "Severe breathlessness at rest is never 'normal quitting' — seek care.",
    ],
    summary:
      "Breathlessness improves on a weekly-to-monthly timeline for most quitters. Airways need time to clear, but the trend is steadily up.",
    detail:
      "Smoking keeps bronchial tubes slightly dilated and inflamed. After quitting, tone normalizes and mucus clears — a process that can feel uneven in the first month but whose endpoint is measurably better breathing.",
    articleSections: [
      {
        heading: "Why breathing can feel variable in month 1",
        paragraphs: [
          "Inflammation and mucus clearance are both changing at once. Some days feel easier; others, as cilia move trapped debris, feel slightly worse. The overall trend is up.",
          "Exercise tolerance typically improves faster than subjective breathlessness at rest. Many quitters notice stairs first, then daily walking, then resting breathing.",
        ],
        bullets: [
          "Measure weekly, not daily.",
          "Expect a mildly productive cough for several weeks.",
          "Baseline fitness and lung health affect speed of change.",
        ],
      },
      {
        heading: "Rebuilding breathing capacity safely",
        paragraphs: [
          "Start with 10 minutes of walking twice a day and add 10% per week. Breathlessness improves most reliably with consistent aerobic activity, not sporadic hard sessions.",
          "If you have asthma or COPD, coordinate with your clinician — some quitters need medication adjustments as airway tone normalizes.",
        ],
        bullets: [
          "Two short walks beat one long session in the first month.",
          "Use paced breathing on exertion (in 2, out 4).",
          "Track weekly perceived effort on a fixed route.",
        ],
      },
      {
        heading: "Red flags for breathlessness",
        paragraphs: [
          "Severe breathlessness at rest, sudden onset, blue lips, chest pain, or fainting require urgent care. These are not withdrawal symptoms.",
          "Breathlessness that worsens past month 2 should be evaluated — smoking-related lung conditions do not improve linearly for everyone, and quitting is a good time to establish a baseline.",
        ],
        bullets: [],
      },
    ],
    typicalDuration: "Improves over weeks to months; lung function gains accrue for years.",
    commonTriggers: "Stairs, hills, cold air, respiratory infections.",
    whenToSeekCare:
      "Seek urgent care for severe breathlessness at rest, blue lips, chest pain, or fainting. Schedule routine care if symptoms persist or worsen past month 2.",
    whatToExpectNext: [
      "Use paced breathing during exertion.",
      "Increase activity gradually.",
      "Track weekly improvement in tolerance.",
    ],
    faq: [
      {
        question: "How long does shortness of breath last after quitting smoking?",
        answer:
          "Daily breathlessness usually starts improving within weeks, with measurable lung function gains by 2 weeks to 3 months. Some recovery continues for years.",
      },
      {
        question: "When should I worry about breathlessness after quitting?",
        answer:
          "Sudden or severe breathlessness at rest, blue lips, chest pain, or fainting are emergencies. Persistent or worsening symptoms past month 2 deserve a clinical review.",
      },
      {
        question: "Can I still exercise while breathless after quitting?",
        answer:
          "Yes, at a gentle pace, if cleared by your clinician. Start with walking and build up by 10% per week.",
      },
    ],
    datePublished: "2026-03-10",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "cough",
      "what-happens-after-2-weeks",
      "what-happens-after-1-month",
    ],
    medicalConditionName: "Post-cessation dyspnea",
  },
  {
    slug: "mood-swings",
    title: "How long do mood swings last after quitting smoking?",
    shortTitle: "Mood swings",
    category: "symptom",
    targetKeyword: "mood swings after quitting smoking",
    quickAnswer:
      "Mood swings after quitting usually ease within 2–6 weeks. Persistent low mood beyond a month should be screened for depression.",
    quickFacts: [
      "Mood instability peaks in week 1 and tapers over weeks 2–6.",
      "Long-term mood after quitting is, on average, better than during smoking (BMJ meta-analysis).",
      "Thoughts of self-harm always need urgent help — do not wait.",
    ],
    summary:
      "Short-term mood instability is common. Long-term mood typically improves after quitting; evidence does not support the myth that quitting permanently worsens mental health.",
    detail:
      "Quitting briefly removes a frequent dopamine bump. Your mood regulation system needs 2–6 weeks to recalibrate. After that, the long-term picture is usually brighter, not dimmer.",
    articleSections: [
      {
        heading: "What mood swings look like during quitting",
        paragraphs: [
          "Low mornings, irritable afternoons, flat evenings, and then a good day — cycling quickly in the first two weeks — is common. Most quitters describe it as 'feeling raw.' It is recalibration, not a new baseline.",
          "The BMJ Taylor et al. meta-analysis found anxiety, depression, and stress scores were lower after quitting than during smoking across 26 studies. The long-term mental health story is reassuring.",
        ],
        bullets: [],
      },
      {
        heading: "Building mood stability in 6 weeks",
        paragraphs: [
          "Daily structure beats willpower. Same wake time, daylight, meals, short walk, early bedtime. Six weeks of consistent structure usually restores stable mood.",
          "Cut alcohol back in the first month. Alcohol is both a mood destabilizer and the single most common relapse trigger in the first 90 days.",
          "Schedule two 'supportive moments' per week — a call, a walk, a meal with someone who knows you are quitting. Social contact is one of the most robust mood levers in the behavioral literature.",
        ],
        bullets: [
          "Same wake time 7 days/week.",
          "Two social check-ins per week.",
          "No alcohol for at least 4 weeks.",
        ],
      },
      {
        heading: "When mood swings need medical help",
        paragraphs: [
          "Thoughts of self-harm, persistent low mood beyond 2–4 weeks, loss of interest in things you normally enjoy, or severe mood swings interfering with life need clinical support — regardless of quitting.",
          "Varenicline and bupropion both carry warnings about mood changes. Report any new or worsening mood symptoms to your prescriber promptly.",
        ],
        bullets: [],
      },
    ],
    typicalDuration: "2–6 weeks for most quitters.",
    commonTriggers: "Alcohol, sleep disruption, relationship conflict, major life events.",
    whenToSeekCare:
      "Seek urgent help for suicidal thoughts. Contact a clinician for severe depression, mania, or mood symptoms that block daily life.",
    whatToExpectNext: [
      "Use predictable daily routines.",
      "Limit alcohol during early quit weeks.",
      "Track triggers and high-risk times of day.",
    ],
    faq: [
      {
        question: "How long do mood swings last after quitting smoking?",
        answer:
          "Most mood swings improve within 2–6 weeks. Long-term mood is typically better after quitting, per a large BMJ meta-analysis.",
      },
      {
        question: "Are mood swings part of nicotine withdrawal?",
        answer:
          "Yes. Mood instability is a recognized, short-lived part of acute withdrawal — not a permanent mental health change.",
      },
      {
        question: "Should I stop cessation medication if my mood drops?",
        answer:
          "Talk to your prescriber first — do not stop abruptly. They may adjust the dose or switch the medication; tapering strategies matter.",
      },
    ],
    datePublished: "2026-03-11",
    dateModified: "2026-04-20",
    relatedSlugs: [
      "anxiety",
      "irritability",
      "what-happens-after-1-month",
    ],
    medicalConditionName: "Mood instability (post-cessation)",
  },
];

export const milestoneGuides = blouGuides.filter((g) => g.category === "milestone");
export const symptomGuides = blouGuides.filter((g) => g.category === "symptom");

export const blouGuideBySlug = Object.fromEntries(
  blouGuides.map((g) => [g.slug, g]),
) as Record<string, BlouGuide>;
