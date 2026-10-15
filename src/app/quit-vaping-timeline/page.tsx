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
const CAMPAIGN = "article_quit-vaping-timeline";
const PATH = "/quit-vaping-timeline";
const TITLE = "Quitting vaping timeline: what happens and when";
const DESCRIPTION =
  "Quitting vaping timeline from hour one to month three: when withdrawal peaks, how long it takes to quit vaping, and the benefits of quitting vaping.";

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
    "quitting vaping timeline",
    "quit vaping timeline",
    "how long does it take to quit vaping",
    "benefits of quitting vaping",
    "what happens when you stop vaping",
  ],
});

const sources = [
  {
    name: "What is nicotine withdrawal?",
    publisher: "Quit (Cancer Council Victoria, Australia)",
    url: "https://quit.org.au/en/articles/what-is-nicotine-withdrawal",
  },
  {
    name: "The benefits of quitting vaping",
    publisher: "Quit (Cancer Council Victoria, Australia)",
    url: "https://quit.org.au/en/articles/the-cost-of-vaping",
  },
  {
    name: "Things that happen when you quit smoking or vaping",
    publisher: "Quit (Cancer Council Victoria, Australia)",
    url: "https://www.quit.org.au/articles/5-things-happen-when-you-quit-smoking",
  },
  {
    name: "Effects of vaping on the body",
    publisher: "Quit (Cancer Council Victoria, Australia)",
    url: "https://www.quit.org.au/en/why-quit/effects-of-vaping-on-the-body",
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
    name: "Quitting e-cigarettes",
    publisher: "US Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/tobacco/e-cigarettes/quitting.html",
  },
  {
    name: "Health effects of vaping",
    publisher: "US Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/tobacco/e-cigarettes/health-effects.html",
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
  {
    name: "Tackett AP et al. Prospective study of e-cigarette use and respiratory symptoms in adolescents and young adults. Thorax. 2024",
    publisher: "PubMed 37582630",
    url: "https://pubmed.ncbi.nlm.nih.gov/37582630/",
  },
] as const;

const timeline = [
  {
    when: "First few hours",
    title: "Withdrawal begins",
    body: "Quit (Australia) says nicotine withdrawal usually starts within a few hours of your last vape. The first cravings and a restless, on-edge feeling are normal.",
  },
  {
    when: "Days 1–3",
    title: "The hardest stretch",
    body: "In a clinical trial of daily vapers who stopped, withdrawal peaked in the first one to two days. Expect strong cravings, irritability, anxiety, poor sleep and trouble concentrating. Plan these days to be quiet and low-pressure.",
  },
  {
    when: "Week 1",
    title: "Still the strongest week",
    body: "Quit says withdrawal is usually strongest in the first week. Smokefree.gov says the worst symptoms last a few days to a couple of weeks, so the end of week 1 is often when you first notice things getting easier.",
  },
  {
    when: "Weeks 2–4",
    title: "Symptoms fade",
    body: "For many people, withdrawal fades and is gone after about two to four weeks (Quit). Research on cigarette withdrawal shows the same 2–4 week pattern. Sleep, mood and focus usually settle in this window.",
  },
  {
    when: "Month 1–3",
    title: "Habit cravings, not withdrawal",
    body: "The physical side is usually over, but cues such as breaks, driving or stress can still trigger an urge. The NHS notes that some people feel withdrawal symptoms for a few months. Quit says that over the following months many people feel less stressed, anxious or down, and report more energy.",
  },
  {
    when: "Longer term",
    title: "Lower exposure, more control",
    body: "You are no longer breathing in the chemicals in vape aerosol or topping up a nicotine dependence (Quit). The long-term health gain from quitting vaping hasn't been measured the way it has for smoking, because vaping is too new.",
  },
] as const;

const faqItems = [
  {
    question: "What is the timeline for quitting vaping?",
    answer:
      "Withdrawal starts within a few hours, peaks in the first one to three days, and is usually strongest in the first week. The worst is over within a few days to two weeks, and for many people withdrawal is gone after two to four weeks. Habit cravings can still pop up for a few months.",
  },
  {
    question: "How long does it take to quit vaping?",
    answer:
      "The physical withdrawal usually takes two to four weeks to pass. Breaking the habit takes longer, often a few months, because routines like breaks or driving still trigger urges. The NHS says it is normal to need several attempts, so a slip is part of the process, not the end of it.",
  },
  {
    question: "What are the benefits of quitting vaping?",
    answer:
      "Quit (Australia) lists freedom from nicotine dependence, no more exposure to the chemicals in vape aerosol, better sleep, feeling happier and less stressed over the following months, more time, and money saved. The CDC says quitting all tobacco products is the best way to protect your health.",
  },
  {
    question: "When does quitting vaping get easier?",
    answer:
      "Usually after the first week. In research on daily vapers, withdrawal peaked in the first one to two days, and Smokefree.gov says the worst symptoms last a few days to a couple of weeks.",
  },
  {
    question: "Do your lungs heal after quitting vaping?",
    answer:
      "Probably in many ways, but there is far less evidence than for smoking. Studies link current vaping to more bronchitis-type symptoms and shortness of breath, and Quit says some vapers show reduced lung function. No large study has yet mapped lung recovery after quitting vaping.",
  },
  {
    question: "Should I quit vaping if I used it to stop smoking?",
    answer:
      "The NHS says only quit vaping when you are confident you can do it without going back to cigarettes. If you slip, going back to vaping is far better than returning to smoking. See /vaping-and-smoking-together.",
  },
];

export default function QuitVapingTimelinePage() {
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

      <Breadcrumbs items={[{ name: "Quit vaping timeline", path: PATH }]} />

      <ArticleHeader
        kicker="Vaping"
        title="Quitting vaping timeline"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        showAppIntro={false}
        actions={
          <ButtonLink href="/vape-withdrawal-symptoms" variant="secondary">
            Vape withdrawal symptoms →
          </ButtonLink>
        }
      >
        <p>
          Updated October 2026. Quitting vaping follows a predictable curve. Withdrawal starts
          within hours, peaks in the first few days, eases after the first week, and for many people
          is gone within two to four weeks. Below is what to expect at each stage, how long it takes
          to quit, and the benefits of quitting vaping.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "timeline", label: "Quit vaping timeline" },
          { id: "how-long", label: "How long it takes to quit vaping" },
          { id: "benefits", label: "Benefits of quitting vaping" },
          { id: "plan", label: "Make the timeline easier" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="When you quit vaping, nicotine withdrawal starts within a few hours, peaks in the first one to three days, and stays strongest through the first week. The worst usually passes within two weeks, and for many people withdrawal is gone after two to four weeks. Habit cravings can return for a few months, but they get weaker and less frequent."
          facts={[
            "Quit (Australia): withdrawal starts within hours, is strongest in week 1, and is gone for many people after 2–4 weeks.",
            "In a clinical study, vape withdrawal peaked in the first 1–2 days.",
            "NHS: needing several attempts to quit vaping is normal.",
          ]}
        />
      </section>

      <section
        id="timeline"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Quit vaping timeline</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Research on quitting vaping is newer and smaller than research on quitting smoking. Where
          we use cigarette data, we say so. The CDC says quitting vaping is likely to be similar to
          quitting smoking, because both involve nicotine dependence.
        </p>
        <ol className="mt-5 space-y-4 border-l-2 border-teal-200 pl-5 text-sm leading-7 text-teal-900/90">
          {timeline.map((step) => (
            <li key={step.when}>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">{step.when}</p>
              <p className="font-semibold text-teal-950">{step.title}</p>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          Each symptom in detail, with what helps:{" "}
          <Link className={linkClass} href="/vape-withdrawal-symptoms">
            vape withdrawal symptoms
          </Link>
          .
        </p>
      </section>

      <section
        id="how-long"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">How long does it take to quit vaping?</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          There are two clocks running. The first is physical withdrawal, which for most people runs
          two to four weeks. The second is habit: the link between vaping and certain moments of
          your day. That one fades more slowly, and occasional cravings over the first few months are
          normal.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          In the 2020 trial of daily vapers, withdrawal was on average about 25% milder than
          cigarette withdrawal in an earlier study, but 41% of people still had raised symptoms after
          six days. In other words, expect the first week to be hard even if you have heard vaping is
          &quot;easier&quot; to quit.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          You can stop all at once or step down. The NHS describes both: lowering the nicotine
          strength of your e-liquid gradually, leaving longer gaps between sessions, and setting up
          vape-free places, or stopping in one go with nicotine replacement from a pharmacist. It also
          says it is normal to need several attempts. Quit suggests picking a quit date within the
          next two weeks.
        </p>
      </section>

      <section
        id="benefits"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Benefits of quitting vaping</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Freedom from nicotine dependence.</strong> Quit says quitting can give you a
              sense of freedom. Smokefree Teen says it can help you feel more in control of your life.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Less exposure to harmful chemicals.</strong> The CDC says vape aerosol can
              contain fine particles, heavy metals and cancer-causing chemicals. Quit points out that
              your lungs are made to breathe fresh air.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Mood and energy.</strong> Quit says people report feeling happier after
              quitting nicotine, and over the following months many feel less stressed, anxious or
              depressed, with more energy.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Better sleep.</strong> Some vapers say cravings disrupt their sleep, and Quit
              lists better sleep as a benefit of quitting.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Breathing.</strong> A 2024 study linked current vaping to more bronchitis-type
              symptoms and shortness of breath in young people, and Quit says some vapers show
              reduced lung function. Stopping removes that exposure, though the size and speed of
              lung recovery after vaping have not been measured yet.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Money and time.</strong> Quit notes that money spent on vaping adds up, and
              that the time you spent vaping goes back to you.
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          Curious how vaping compares with smoking for your lungs? See{" "}
          <Link className={linkClass} href="/smokers-lungs-vs-healthy-lungs">
            smokers&apos; lungs vs healthy lungs
          </Link>
          , which includes what is known about vapers&apos; lungs.
        </p>
      </section>

      <section
        id="plan"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">How to make the timeline easier</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Front-load support for days 1–7.</strong> That is when withdrawal is
              strongest. Tell people you are quitting and what kind of help you want (NHS).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Use the 4 Ds on every craving:</strong> delay about 5 minutes, deep breathing,
              do something else, drink water (Quit).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Change the routine around your vape.</strong> Quit suggests a shower or a walk
              when you&apos;d normally vape, and calling a friend on your break.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Celebrate each vape-free day</strong>, with something small or with friends
              (NHS).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Use free help:</strong> Quitline 13 7848 (Australia), your local NHS Stop
              Smoking Service (UK), 1-800-QUIT-NOW (US).
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          The full step-by-step plan is in{" "}
          <Link className={linkClass} href="/quit-vaping">
            how to quit vaping
          </Link>
          . If you also smoke, read{" "}
          <Link className={linkClass} href="/vaping-and-smoking-together">
            vaping and smoking together
          </Link>{" "}
          first. Quitting both at once changes the plan.
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
          This page is educational, not medical advice. Timelines are typical ranges, and research
          on quitting vaping is still limited. If you have a health condition, are pregnant, or take
          regular medication, talk to your doctor, GP or pharmacist.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/vape-withdrawal-symptoms" variant="secondary">
          Vape withdrawal symptoms →
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
