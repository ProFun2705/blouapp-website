import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-10-15";
const MODIFIED = "2026-10-15";
const CAMPAIGN = "article_can-lungs-heal-after-smoking";
const PATH = "/can-lungs-heal-after-smoking";
const TITLE = "Can your lungs heal from smoking? Recovery timeline";
const DESCRIPTION =
  "Can your lungs heal from smoking? What recovers after you quit, month by month and by years smoked (5, 10, 20, 30+), and what damage stays.";

const linkClass =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "can your lungs heal from smoking",
    "can lungs heal after 20 years of smoking",
    "do lungs recover after smoking",
    "how long for lungs to heal after quitting smoking",
    "lung recovery after quitting smoking",
  ],
});

const sources = [
  {
    name: "What could happen when you quit smoking",
    publisher: "NHS (UK)",
    url: "https://www.nhs.uk/better-health/quit-smoking/ready-to-quit-smoking/what-could-happen-when-you-quit-smoking/",
  },
  {
    name: "Chronic obstructive pulmonary disease (COPD)",
    publisher: "NHS (UK)",
    url: "https://www.nhs.uk/conditions/chronic-obstructive-pulmonary-disease-copd/",
  },
  {
    name: "Lung cancer screening (lung health checks)",
    publisher: "NHS (UK)",
    url: "https://www.nhs.uk/conditions/lung-cancer-screening/",
  },
  {
    name: "Health benefits of quitting smoking",
    publisher: "Quit (Cancer Council Victoria, Australia)",
    url: "https://www.quit.org.au/articles/health-benefits-of-quitting-smoking",
  },
  {
    name: "Benefits of quitting",
    publisher: "US Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/tobacco/about/benefits-of-quitting.html",
  },
  {
    name: "Lung cancer screening",
    publisher: "US Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/lung-cancer/screening/index.html",
  },
  {
    name: "Benefits of quitting",
    publisher: "American Lung Association",
    url: "https://www.lung.org/quit-smoking/i-want-to-quit/benefits-of-quitting",
  },
  {
    name: "Smoking cessation",
    publisher: "Cleveland Clinic Respiratory Institute",
    url: "https://my.clevelandclinic.org/departments/respiratory/depts/smoking-cessation",
  },
  {
    name: "Smoking: effects, risks, diseases, quitting and solutions",
    publisher: "Cleveland Clinic",
    url: "https://my.clevelandclinic.org/health/articles/17488-smoking",
  },
  {
    name: "Emphysema",
    publisher: "MedlinePlus (US National Library of Medicine)",
    url: "https://medlineplus.gov/emphysema.html",
  },
  {
    name: "Harms of cigarette smoking and health benefits of quitting",
    publisher: "National Cancer Institute",
    url: "https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/cessation-fact-sheet",
  },
  {
    name: "COPD (Tips From Former Smokers)",
    publisher: "US Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/tobacco/campaign/tips/diseases/copd.html",
  },
  {
    name: "Anthonisen NR et al. Effects of smoking intervention and the use of an inhaled anticholinergic bronchodilator on the rate of decline of FEV1. The Lung Health Study. JAMA. 1994",
    publisher: "PubMed 7966841",
    url: "https://pubmed.ncbi.nlm.nih.gov/7966841/",
  },
  {
    name: "Anthonisen NR et al. Smoking and lung function of Lung Health Study participants after 11 years. Am J Respir Crit Care Med. 2002",
    publisher: "PubMed 12204864",
    url: "https://pubmed.ncbi.nlm.nih.gov/12204864/",
  },
  {
    name: "Willemse BW et al. The impact of smoking cessation on respiratory symptoms, lung function, airway hyperresponsiveness and inflammation. Eur Respir J. 2004",
    publisher: "PubMed 15065840",
    url: "https://pubmed.ncbi.nlm.nih.gov/15065840/",
  },
  {
    name: "Yoshida K et al. Tobacco exposure and somatic mutations in normal human bronchial epithelium. Nature. 2020",
    publisher: "PMC7021511",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7021511/",
  },
] as const;

const faqItems = [
  {
    question: "Can your lungs heal from smoking?",
    answer:
      "Partly, and more than most people expect. After you quit, mucus starts to clear within about 48 hours, inflammation calms over the following weeks, the cilia that sweep your airways regrow over a few months, and coughing and breathlessness ease over roughly 1–9 months. Damage that has already become emphysema or COPD does not reverse, but quitting slows how fast it gets worse.",
  },
  {
    question: "Can lungs heal after 20 years of smoking?",
    answer:
      "Yes, in the ways that matter most day to day. The cilia, mucus, and airway irritation can recover after 20 years of smoking, and lung function stops falling at a smoker's pace. In the Lung Health Study, which followed smokers aged 35–60, people who quit lost lung function at roughly half the yearly rate of those who kept smoking. Any emphysema that is already there stays, so a breathing test with your doctor or GP is worth booking.",
  },
  {
    question: "How long does it take for lungs to heal after quitting smoking?",
    answer:
      "The early changes come fast: the NHS says mucus starts to clear within 48 hours, and the American Lung Association says lung function begins to improve between 2 weeks and 3 months. Cough and shortness of breath ease over 1–9 months. Lung cancer risk takes much longer, falling to about half that of a smoker after 10–15 years.",
  },
  {
    question: "Do lungs ever fully recover after smoking?",
    answer:
      "For many people who quit earlier, breathing can come close to that of someone who never smoked. For people who already have emphysema or COPD, the damaged air sacs do not grow back, and MedlinePlus states there is no cure for emphysema. Quitting is still the most important thing you can do for it, because it slows further loss.",
  },
  {
    question: "Why am I coughing more since I quit smoking?",
    answer:
      "Cleveland Clinic explains that some people get a new cough soon after quitting because the cilia are recovering and clearing out mucus, and that this cough can last for the first couple of months. A cough that lasts more than 3 weeks, brings up blood, or comes with weight loss or fever should be checked by a doctor. See /guides/cough.",
  },
  {
    question: "Is it too late to quit if I have smoked for 30 years?",
    answer:
      "No. The National Cancer Institute says it is never too late to benefit from quitting, and that people who quit between 55 and 64 live about 4 years longer on average than people who keep smoking. The earlier you quit, the bigger the gain.",
  },
];

export default function CanLungsHealAfterSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
    citation: sources.map((s) => ({ name: s.name, url: s.url, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs items={[{ name: "Can lungs heal after smoking?", path: PATH }]} />

      <ArticleHeader
        kicker="Lung recovery"
        title="Can your lungs heal from smoking?"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/tools/lung-recovery" variant="secondary">
            Lung recovery timeline →
          </ButtonLink>
        }
      >
        <p>
          Updated October 2026. Yes, your lungs start healing within days of your last cigarette,
          and much of the everyday damage (mucus, irritation, the tiny cleaning hairs called cilia)
          recovers over weeks to months. Some damage, like emphysema, is permanent. This page shows
          what heals, how long it takes, and what to expect after 5, 10, 20 or 30+ years of smoking.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "what-heals", label: "What heals and what doesn't" },
          { id: "timeline", label: "Lung recovery timeline" },
          { id: "by-years-smoked", label: "By years smoked: 5, 10, 20, 30+" },
          { id: "help-your-lungs", label: "How to help your lungs recover" },
          { id: "when-to-see-a-doctor", label: "When to see a doctor" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Your lungs can heal a lot after you quit smoking, though not completely. Mucus starts to clear within 48 hours, lung function begins to improve between 2 weeks and 3 months, and cough and breathlessness ease over 1–9 months. Lung cancer risk falls to about half that of a smoker after 10–15 years. Emphysema and COPD damage does not reverse, but quitting slows it down."
          facts={[
            "NHS: within 48 hours your lungs start to clear out mucus.",
            "Cleveland Clinic: cilia grow back and start working again, and fully recover over a few months.",
            "CDC: quitting slows COPD and reduces the loss of lung function over time.",
          ]}
        />
      </section>

      <section
        id="what-heals"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What heals after you quit, and what doesn&apos;t
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Smoking harms your lungs in two different ways, and they recover very differently. The
          first kind of harm is irritation and clogging. Cleveland Clinic explains that tar and other
          chemicals in smoke paralyse the cilia (the hair-like cells that sweep germs and mucus out
          of your airways) and that the irritation causes inflammation and extra mucus. This kind of
          harm is largely reversible. The second kind is structural: smoke damages the walls of the
          tiny air sacs (alveoli). Once those walls break down, the result is emphysema, one form of
          COPD, and that damage is permanent.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-4">
            <p className="text-sm font-semibold text-teal-950">Usually recovers</p>
            <ul className="mt-2 space-y-2 text-sm leading-6 text-teal-900/90">
              <li className="flex gap-2">
                <span aria-hidden className="mt-0.5 text-teal-600">•</span>
                <span>
                  <strong>Mucus and inflammation.</strong> Cleveland Clinic says inflammation and
                  mucus production calm down in the weeks after quitting.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="mt-0.5 text-teal-600">•</span>
                <span>
                  <strong>Cilia.</strong> They grow back and start working again fairly quickly,
                  and regenerate over a few months (Cleveland Clinic).
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="mt-0.5 text-teal-600">•</span>
                <span>
                  <strong>Cough, wheeze and breathlessness.</strong> These ease over 1–9 months
                  (American Lung Association, CDC).
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="mt-0.5 text-teal-600">•</span>
                <span>
                  <strong>Airway lining.</strong> A 2020 study in <em>Nature</em> found healthy,
                  low-mutation airway cells were four times more common in ex-smokers than in
                  current smokers.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-teal-950">Does not reverse</p>
            <ul className="mt-2 space-y-2 text-sm leading-6 text-teal-900/90">
              <li className="flex gap-2">
                <span aria-hidden className="mt-0.5 text-slate-500">•</span>
                <span>
                  <strong>Emphysema.</strong> MedlinePlus states there is no cure. Damaged air sacs
                  lose their shape and do not grow back.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="mt-0.5 text-slate-500">•</span>
                <span>
                  <strong>Established COPD.</strong> The NHS says the lung damage is permanent, but
                  treatment can slow it. Cleveland Clinic also lists COPD and pulmonary fibrosis as
                  irreversible.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="mt-0.5 text-slate-500">•</span>
                <span>
                  <strong>Some inflammation in people with COPD.</strong> A research review found
                  that airway inflammation may persist in ex-smokers who already have COPD, even
                  though their symptoms improve.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          Even when damage is permanent, quitting still changes what happens next. The CDC says
          quitting slows the progression of COPD and reduces the loss of lung function over time.
          You can&apos;t get destroyed air sacs back, but you can protect the ones you still have.
        </p>
      </section>

      <section
        id="timeline"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Lung recovery timeline after quitting smoking
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          How long does it take for your lungs to heal after you quit smoking? These are typical
          ranges from the NHS, Quit (Australia), the American Lung Association and the CDC. Your own
          pace depends on how much and how long you smoked, and on whether you already have a
          smoking-related lung condition. Quit makes the same point.
        </p>
        <ol className="mt-5 space-y-4 border-l-2 border-teal-200 pl-5 text-sm leading-7 text-teal-900/90">
          <li>
            <p className="font-semibold text-teal-950">48 hours: mucus starts to clear</p>
            <p>
              The NHS says that by 48 hours carbon monoxide has dropped to non-smoker levels, your
              lungs start clearing out mucus, and taste and smell improve. At 72 hours breathing can
              feel easier as your bronchial tubes relax. See{" "}
              <Link className={linkClass} href="/guides/what-happens-after-3-days">
                what happens after 3 days
              </Link>
              .
            </p>
          </li>
          <li>
            <p className="font-semibold text-teal-950">Weeks 1–4: cilia wake up and you may cough more</p>
            <p>
              Cleveland Clinic says the cilia grow back and start working again fairly quickly, and
              that inflammation and mucus production calm down in the weeks after quitting. As the
              cilia start sweeping again, many people get a &quot;quitter&apos;s cough&quot; that can
              last for the first couple of months. That cough is part of the clean-up. Read more in{" "}
              <Link className={linkClass} href="/guides/cough">
                cough after quitting smoking
              </Link>
              .
            </p>
          </li>
          <li>
            <p className="font-semibold text-teal-950">2 weeks to 3 months: lung function starts to improve</p>
            <p>
              The American Lung Association says lung function begins to improve between 2 weeks and
              3 months after quitting. Quit says that within three months you cough and wheeze less,
              and your lungs get better at clearing out mucus, tar and dust. The National Cancer
              Institute describes &quot;substantial improvements in lung function&quot; within
              several months.
            </p>
          </li>
          <li>
            <p className="font-semibold text-teal-950">1–9 months: cough and breathlessness ease</p>
            <p>
              The American Lung Association and Cleveland Clinic both put the easing of coughing and
              shortness of breath at 1–9 months. The NHS says lung function can rise by up to 10%
              between 3 and 9 months. Quit adds that within six months you are less likely to be
              coughing up phlegm, and Cleveland Clinic notes that the risk of lung infections starts
              to fall as lung function improves.
            </p>
          </li>
          <li>
            <p className="font-semibold text-teal-950">1 year: breathing easier for good</p>
            <p>
              Quit says that after a year your lungs are healthier and you&apos;ll be breathing more
              easily than if you had kept smoking. The CDC notes that quitting also reduces
              respiratory infections such as bronchitis and pneumonia.
            </p>
          </li>
          <li>
            <p className="font-semibold text-teal-950">Years 1–11+: COPD progression slows</p>
            <p>
              The Lung Health Study followed smokers with early airflow problems for 11 years. Each
              year, men who quit lost about 30 ml of lung function (FEV1) and women about 22 ml.
              People who kept smoking lost about 66 ml (men) and 54 ml (women). By year 11, 38% of
              continuing smokers had lung function below 60% of the expected value, compared with
              10% of people who had stayed quit.
            </p>
          </li>
          <li>
            <p className="font-semibold text-teal-950">10–15 years: lung cancer risk halves</p>
            <p>
              The NHS and the American Lung Association say the risk of dying from lung cancer is
              about half that of a smoker after 10 years. The CDC and Quit put the halving of added
              lung cancer risk at 10–15 years. Quit adds that this assumes the cancer was not already
              present when you quit.
            </p>
          </li>
        </ol>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          Want to see where you are today? Enter your smoke-free days in the{" "}
          <Link className={linkClass} href="/tools/lung-recovery">
            lung recovery timeline tool
          </Link>
          , or read the full{" "}
          <Link className={linkClass} href="/quit-smoking-timeline">
            quit smoking timeline
          </Link>{" "}
          for heart, circulation and other changes.
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Timelines describe the average person. Blou&apos;s lung checks are simple breath checks you
        repeat as the weeks go by, so you can watch your own breathing change instead of guessing.
      </InlineAppCta>

      <section
        id="by-years-smoked"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Can your lungs heal after 5, 10, 20 or 30+ years of smoking?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          No study gives an exact recovery figure for each number of years smoked, so be wary of any
          page that does. Here is what the evidence does say. The NHS says the chance of developing
          COPD rises the more you smoke and the longer you&apos;ve smoked. Quit says recovery depends
          on how much and how long you smoked. And the National Cancer Institute says that although
          it is never too late to benefit, the benefit is greatest for people who quit younger. How
          much you smoked per day matters as well as how many years, which is why doctors use{" "}
          <Link className={linkClass} href="/tools/pack-year-calculator">
            pack-years
          </Link>{" "}
          (one pack a day for one year is one pack-year).
        </p>

        <div className="mt-5 space-y-4">
          <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4">
            <h3 className="text-base font-semibold text-teal-950">After 5 years of smoking</h3>
            <p className="mt-2 text-sm leading-7 text-teal-900/90">
              This is the best position to heal from. Most of the harm at this stage is the
              reversible kind: paralysed cilia, extra mucus and irritated airways. Those follow the
              timeline above, with cough and breathlessness easing over months. The National Cancer
              Institute says people who quit between 25 and 34 live about 10 years longer than people
              who keep smoking.
            </p>
          </div>
          <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4">
            <h3 className="text-base font-semibold text-teal-950">After 10 years of smoking</h3>
            <p className="mt-2 text-sm leading-7 text-teal-900/90">
              The cilia, mucus and inflammation recover in the same way. The difference is that the
              longer you&apos;ve smoked, the more likely it is that some early air-sac damage has
              started, and you may not notice it yet. The CDC says COPD symptoms may be absent or mild
              at first. Quitting now cuts the chance that it progresses. The National Cancer
              Institute estimates that quitting between 35 and 44 adds about 9 years of life.
            </p>
          </div>
          <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4">
            <h3 className="text-base font-semibold text-teal-950">After 20 years of smoking</h3>
            <p className="mt-2 text-sm leading-7 text-teal-900/90">
              Can lungs heal after 20 years of smoking? Yes, though not completely. The airway lining
              still renews itself: in the 2020 <em>Nature</em> study, ex-smokers had four times as
              many healthy, low-mutation airway cells as current smokers. Your cough and
              breathlessness can still improve. The Lung Health Study recruited 5,887 smokers aged 35–60 who
              already had early signs of COPD on a breathing test. Over 11 years, those who quit lost
              lung function at roughly half the yearly rate of those who kept smoking. What you
              can&apos;t undo is any emphysema already present. Ask your doctor or GP for a spirometry
              (breathing) test so you know your baseline.
            </p>
          </div>
          <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4">
            <h3 className="text-base font-semibold text-teal-950">After 30 years or more</h3>
            <p className="mt-2 text-sm leading-7 text-teal-900/90">
              After 30+ years, many people have some permanent damage, and recovery is more about
              slowing the decline and easing symptoms than getting back to normal. That still matters
              a great deal. A review of the research found that quitting clearly improves breathing
              symptoms and airway twitchiness, and stops the extra-fast fall in lung function, even in
              people who already have COPD. The National Cancer Institute says people who quit between
              55 and 64 live about 4 years longer, and that people who quit in their 60s had a lower
              risk of death during follow-up.
            </p>
            <p className="mt-2 text-sm leading-7 text-teal-900/90">
              Long-term smokers may also be offered lung cancer screening. In England, the NHS invites
              people aged 55–74 who have ever smoked for a lung health check. In the US, the CDC
              (citing the US Preventive Services Task Force) recommends a yearly low-dose CT scan for
              adults aged 50–80 with a 20 pack-year history who smoke now or quit within the past 15
              years.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          If you&apos;re over 40 or 50, see our guides to{" "}
          <Link className={linkClass} href="/health-benefits-of-quitting-smoking">
            the health benefits of quitting
          </Link>{" "}
          and{" "}
          <Link className={linkClass} href="/how-to-quit-smoking">
            how to quit smoking
          </Link>
          .
        </p>
      </section>

      <section
        id="help-your-lungs"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">How to help your lungs recover</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Stop completely.</strong> Cutting down still exposes your airways to smoke.
              The CDC says that if you keep smoking, COPD damage happens faster than if you stop.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Move every day.</strong> Quit says exercise helps your lungs clear. Walking is
              enough to start.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Let the cough do its job.</strong> A new, looser cough in the first couple of
              months is usually the cilia clearing mucus (Cleveland Clinic).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Get a baseline breathing test</strong> if you smoked for many years, get breathless
              easily, or have a long-standing cough. The earlier COPD is found, the more you can
              protect. If you have asthma, see{" "}
              <Link className={linkClass} href="/quit-smoking-with-asthma">
                quitting smoking with asthma
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Use free quit support.</strong> Your local NHS Stop Smoking Service (UK),
              Quitline 13 7848 (Australia), or 1-800-QUIT-NOW (US).
            </span>
          </li>
        </ul>
      </section>

      <section
        id="when-to-see-a-doctor"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">When to see a doctor</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          A cough that comes and goes in the first months after quitting is common. Book an
          appointment with your doctor or GP if you notice:
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              A cough lasting more than 3 weeks (the NHS says don&apos;t wait for a screening
              appointment in this case).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Coughing up blood, unexplained weight loss, or fever.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Breathlessness that is getting worse, frequent chest infections, or persistent wheeze.
              The NHS lists these as main COPD symptoms. See{" "}
              <Link className={linkClass} href="/guides/shortness-of-breath">
                shortness of breath after quitting
              </Link>
              .
            </span>
          </li>
        </ul>
        <p className="mt-3 text-sm text-ink-muted">
          Chest pain or severe breathlessness at rest needs urgent care: call 999 (UK), 000
          (Australia) or 911 (US).
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <section
        id="sources"
        className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card"
      >
        <h2 className="text-xl font-semibold text-ink">Sources</h2>
        <ul className="mt-4 space-y-2 text-sm text-ink">
          {sources.map((source) => (
            <li key={source.url}>
              <a
                className="underline decoration-accent/50 underline-offset-4"
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.name}
              </a>{" "}
              <span className="text-ink-muted">· {source.publisher}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          This page is educational, not medical advice. If you have a lung condition, take
          prescription medication, or are worried about a symptom, talk to your doctor, GP or
          pharmacist.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/smokers-lungs-vs-healthy-lungs" variant="secondary">
          Smokers&apos; lungs vs healthy lungs →
        </ButtonLink>
        <ButtonLink href="/tools/pack-year-calculator" variant="secondary">
          Pack-year calculator →
        </ButtonLink>
        <ButtonLink href="/quit-smoking-timeline" variant="secondary">
          Quit smoking timeline →
        </ButtonLink>
      </div>
    </div>
  );
}
