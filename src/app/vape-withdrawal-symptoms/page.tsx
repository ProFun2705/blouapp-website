import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
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
const CAMPAIGN = "article_vape-withdrawal-symptoms";
const PATH = "/vape-withdrawal-symptoms";
const TITLE = "Vape withdrawal symptoms: what to expect, how long";
const DESCRIPTION =
  "Vape withdrawal symptoms explained: cravings, irritability, headaches, sleep and hunger changes. How long vape withdrawal lasts and what helps.";

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
    "vape withdrawal symptoms",
    "how long does vape withdrawal last",
    "side effects of quitting vaping",
    "nicotine withdrawal from vaping",
    "quitting vaping symptoms",
  ],
});

const sources = [
  {
    name: "Nicotine withdrawal and vaping",
    publisher: "Smokefree.gov (US National Cancer Institute)",
    url: "https://smokefree.gov/quit-vaping-resources/nicotine-withdrawal-vaping",
  },
  {
    name: "Vaping addiction and nicotine withdrawal",
    publisher: "Smokefree Teen (US National Cancer Institute)",
    url: "https://teen.smokefree.gov/quit-vaping/vaping-addiction-nicotine-withdrawal",
  },
  {
    name: "What is nicotine withdrawal?",
    publisher: "Quit (Cancer Council Victoria, Australia)",
    url: "https://quit.org.au/en/articles/what-is-nicotine-withdrawal",
  },
  {
    name: "Tips to help you quit vaping",
    publisher: "Quit (Cancer Council Victoria, Australia)",
    url: "https://www.quit.org.au/en/how-to-quit/tips-to-help-you-quit-vaping",
  },
  {
    name: "How to quit vaping",
    publisher: "NHS Better Health (UK)",
    url: "https://www.nhs.uk/better-health/quit-smoking/ready-to-quit-smoking/vaping-to-quit-smoking/how-to-quit-vaping/",
  },
  {
    name: "Managing nicotine withdrawal symptoms",
    publisher: "NHS Better Health (UK)",
    url: "https://www.nhs.uk/better-health/quit-smoking/staying-smoke-free/managing-nicotine-withdrawal-symptoms/",
  },
  {
    name: "Quitting e-cigarettes",
    publisher: "US Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/tobacco/e-cigarettes/quitting.html",
  },
  {
    name: "Hughes JR et al. Withdrawal symptoms from e-cigarette abstinence among former smokers: a pre-post clinical trial. Nicotine Tob Res. 2020",
    publisher: "PMC7171279",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7171279/",
  },
  {
    name: "Hughes JR. Effects of abstinence from tobacco: valid symptoms and time course. Nicotine Tob Res. 2007",
    publisher: "PubMed 17365764",
    url: "https://pubmed.ncbi.nlm.nih.gov/17365764/",
  },
] as const;

const symptoms = [
  {
    name: "Strong cravings to vape",
    body: "The most common symptom. Quit (Australia) says that if you delay acting on a craving for about 5 minutes, it will usually pass.",
  },
  {
    name: "Irritability, restlessness or feeling jittery",
    body: "Listed by Smokefree.gov and the NHS. Quit adds frustration and anger. Physical activity and cutting back on caffeine help some people.",
  },
  {
    name: "Anxiety and low mood",
    body: "Feeling anxious, sad or down is common in the first weeks. If it turns into deep sadness or thoughts of self-harm, tell someone and talk to a doctor.",
  },
  {
    name: "Trouble sleeping",
    body: "Smokefree.gov suggests a consistent sleep schedule, screens off an hour before bed, and less caffeine and alcohol.",
  },
  {
    name: "Trouble concentrating, tiredness or grogginess",
    body: "Brain fog is a recognised withdrawal symptom and passes with time.",
  },
  {
    name: "Feeling hungrier than usual",
    body: "Keep crunchy snacks such as carrots or nuts nearby. They also keep your hands and mouth busy.",
  },
  {
    name: "Headaches",
    body: "Smokefree.gov lists headaches as a withdrawal symptom and suggests drinking plenty of water.",
  },
] as const;

const faqItems = [
  {
    question: "What are the symptoms of vape withdrawal?",
    answer:
      "The common ones are strong cravings to vape, irritability or restlessness, anxiety, low mood, tiredness, trouble concentrating, trouble sleeping, feeling hungrier, and headaches. They come from nicotine leaving your system, so they are much the same as withdrawal from cigarettes.",
  },
  {
    question: "How long does vape withdrawal last?",
    answer:
      "Smokefree.gov says the worst symptoms last a few days to a couple of weeks. Quit (Australia) says withdrawal is usually strongest in the first week and, for many people, gone after about two to four weeks. Occasional cravings can come back for longer, especially around old habits.",
  },
  {
    question: "When does vape withdrawal peak?",
    answer:
      "In a clinical study of daily vapers who stopped for a week, withdrawal peaked in the first one to two days and then eased. Symptoms usually start within a few hours of your last vape.",
  },
  {
    question: "What are the side effects of quitting vaping?",
    answer:
      "The short-term side effects are nicotine withdrawal: cravings, mood changes, poor sleep, hunger, and trouble focusing. They are temporary. If you used to smoke, the NHS advises only quitting vaping when you are confident you won't go back to cigarettes.",
  },
  {
    question: "Is vape withdrawal worse than cigarette withdrawal?",
    answer:
      "Usually a little milder, but still real. A 2020 study estimated vape withdrawal was about 25% less severe than cigarette withdrawal on average, yet a third of participants met the full clinical criteria for nicotine withdrawal.",
  },
  {
    question: "Can you get withdrawal from a nicotine-free vape?",
    answer:
      "Quit (Australia) notes that some people get withdrawal symptoms even when their vape claims to be nicotine-free, and advises speaking to a doctor or pharmacist about quitting medicines if that happens.",
  },
  {
    question: "What helps with vape withdrawal?",
    answer:
      "Plan for cravings with the 4 Ds: delay, deep breathing, do something else, drink water. Ask a doctor or pharmacist about nicotine replacement therapy. Free support: Quitline 13 7848 (Australia), your local NHS Stop Smoking Service (UK), 1-800-QUIT-NOW (US).",
  },
];

export default function VapeWithdrawalSymptomsPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Nicotine withdrawal" },
    citation: sources.map((s) => ({ name: s.name, url: s.url, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs items={[{ name: "Vape withdrawal symptoms", path: PATH }]} />

      <ArticleHeader
        kicker="Vaping"
        title="Vape withdrawal symptoms"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        showAppIntro={false}
        actions={
          <ButtonLink href="/quit-vaping-timeline" variant="secondary">
            Quit vaping timeline →
          </ButtonLink>
        }
      >
        <p>
          Updated October 2026. Vape withdrawal is nicotine withdrawal. Expect cravings, a short
          temper, restlessness, poor sleep and extra hunger. They start within hours of your last
          vape, are strongest in the first week, and for most people fade within two to four weeks.
          Here is each symptom, how long it lasts, and what helps.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "symptoms", label: "Common vape withdrawal symptoms" },
          { id: "how-long", label: "How long vape withdrawal lasts" },
          { id: "vs-cigarettes", label: "Vape vs cigarette withdrawal" },
          { id: "what-helps", label: "What helps" },
          { id: "when-to-get-help", label: "When to get help" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Vape withdrawal symptoms include cravings, irritability, restlessness, anxiety, low mood, tiredness, trouble concentrating, poor sleep, hunger and headaches. They usually begin within a few hours of your last vape and are strongest in the first week. The worst passes within a few days to two weeks, and for many people withdrawal is gone after two to four weeks."
          facts={[
            "Smokefree.gov: the worst withdrawal symptoms last a few days to a couple of weeks.",
            "Quit (Australia): withdrawal is strongest in the first week and gone for many people after 2–4 weeks.",
            "In a clinical study, vape withdrawal peaked in the first 1–2 days without vaping.",
          ]}
        />
      </section>

      <section
        id="symptoms"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Common vape withdrawal symptoms</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Nicotine is the addictive drug in most vapes, and Quit (Australia) explains that
          withdrawal is your body and brain getting used to working without it. The CDC says
          quitting vaping is likely to be similar to quitting cigarettes for the same reason. These
          are the symptoms listed by Smokefree.gov, the NHS and Quit:
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {symptoms.map((symptom) => (
            <li key={symptom.name} className="rounded-xl border border-teal-200 bg-teal-50/40 p-4">
              <p className="text-sm font-semibold text-teal-950">{symptom.name}</p>
              <p className="mt-1 text-sm leading-6 text-teal-900/90">{symptom.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          In a clinical study of daily vapers who stopped for six days, researchers also saw mood
          swings, impulsivity and less enjoyment of normal pleasures, and participants put on a
          little weight. Everyone&apos;s mix is different. Many people get only a few of these
          symptoms.
        </p>
      </section>

      <section
        id="how-long"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">How long does vape withdrawal last?</h2>
        <ol className="mt-4 space-y-4 border-l-2 border-teal-200 pl-5 text-sm leading-7 text-teal-900/90">
          <li>
            <p className="font-semibold text-teal-950">First few hours</p>
            <p>
              Quit says withdrawal usually begins within a few hours of your last vape. Early
              cravings and restlessness are the first signs.
            </p>
          </li>
          <li>
            <p className="font-semibold text-teal-950">Days 1–3: the peak</p>
            <p>
              In a 2020 clinical trial of daily vapers who stopped, withdrawal scores peaked in the
              first one to two days and then declined. For comparison, the NHS says withdrawal from
              cigarettes is strongest in the first week, especially the first 3 days.
            </p>
          </li>
          <li>
            <p className="font-semibold text-teal-950">Days 4–14: easing</p>
            <p>
              Smokefree.gov says the worst symptoms last a few days to a couple of weeks, and that
              the discomfort generally eases the longer you stay vape-free.
            </p>
          </li>
          <li>
            <p className="font-semibold text-teal-950">Weeks 2–4: fading</p>
            <p>
              Quit says that for many people withdrawal fades and is gone after about two to four
              weeks. Research on cigarette withdrawal shows the same pattern, with most symptoms
              lasting 2–4 weeks.
            </p>
          </li>
          <li>
            <p className="font-semibold text-teal-950">After a month</p>
            <p>
              The physical side is usually over, but habit cravings can still surprise you. The NHS
              notes that some people feel withdrawal symptoms for a few months, so don&apos;t read a
              late craving as failure.
            </p>
          </li>
        </ol>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          For the full picture of what changes and when, including the benefits, see the{" "}
          <Link className={linkClass} href="/quit-vaping-timeline">
            quit vaping timeline
          </Link>
          . For the cigarette version, see the{" "}
          <Link className={linkClass} href="/nicotine-withdrawal-timeline">
            nicotine withdrawal timeline
          </Link>
          .
        </p>
      </section>

      <section
        id="vs-cigarettes"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Is vape withdrawal different from cigarette withdrawal?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          It is very similar, because the drug is the same. The best direct evidence comes from a
          clinical trial in which 109 former smokers who vaped daily stopped vaping for six days,
          with tests to confirm they had stopped. All seven standard withdrawal symptoms increased:
          irritability, anxiety, poor concentration, low mood, more appetite, poor sleep and
          restlessness. So did cravings for both vapes and cigarettes.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          On average, the withdrawal was about 25% milder than in an earlier study of people
          stopping cigarettes. It was still real: a third of participants met the full clinical
          criteria for nicotine withdrawal, and 41% still had higher-than-normal symptoms at the end
          of the study. The trial was small and only included former smokers, so treat these numbers
          as a guide.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Note that participants craved cigarettes too. If you switched from smoking to vaping, the
          NHS says you should only quit vaping when you are confident you can do it without smoking,
          and that going back to vaping is far better than going back to cigarettes. If you
          currently do both, read{" "}
          <Link className={linkClass} href="/vaping-and-smoking-together">
            vaping and smoking together
          </Link>
          .
        </p>
      </section>

      <section
        id="what-helps"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">What helps with vape withdrawal</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Use the 4 Ds.</strong> Quit&apos;s method for a craving: delay (about 5
              minutes), deep breathing, do something else, drink water.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Replace the hand-to-mouth habit.</strong> Quit suggests sipping a drink,
              chewing gum or mints, holding a pen, or brushing your teeth.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Consider stepping down first.</strong> The NHS suggests lowering your
              e-liquid&apos;s nicotine strength slowly, leaving longer gaps between vaping, and
              creating vape-free places and times. If you start vaping more, you may have cut down
              too fast.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Ask about nicotine replacement.</strong> A pharmacist or stop smoking adviser
              can talk you through NRT. Smokefree.gov notes that NRT, varenicline and bupropion can
              reduce cravings, though in the US the FDA has not approved them specifically for
              quitting vaping.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Drink water, sleep on a schedule, keep snacks ready.</strong> These simple
              steps target headaches, tiredness, poor sleep and hunger (Smokefree.gov).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Get free support.</strong> Quitline 13 7848 (Australia) has counsellors who
              understand vaping. In the UK, contact your local NHS Stop Smoking Service or a
              pharmacist. In the US, call 1-800-QUIT-NOW or use Smokefree.gov&apos;s text programs.
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          For a full step-by-step plan, see{" "}
          <Link className={linkClass} href="/quit-vaping">
            how to quit vaping
          </Link>
          .
        </p>
      </section>

      <section
        id="when-to-get-help"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">When to get help</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Withdrawal is uncomfortable but not dangerous for most people. Smokefree.gov advises
          telling someone and talking to a doctor if you feel depressed or extremely sad. If you have
          thoughts of harming yourself, get help now: call or text 988 in the US, call Samaritans on
          116 123 in the UK, or Lifeline on 13 11 14 in Australia. If you are pregnant, talk to your
          midwife or doctor about the safest way to stop.
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

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
          This page is educational, not medical advice. Research on quitting vaping is newer and
          smaller than research on quitting smoking. If you have a health condition, are pregnant,
          or take regular medication, talk to your doctor, GP or pharmacist.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/quit-vaping-timeline" variant="secondary">
          Quit vaping timeline →
        </ButtonLink>
        <ButtonLink href="/quit-vaping" variant="secondary">
          How to quit vaping →
        </ButtonLink>
        <ButtonLink href="/vaping-and-smoking-together" variant="secondary">
          Vaping and smoking together →
        </ButtonLink>
      </div>
    </div>
  );
}
