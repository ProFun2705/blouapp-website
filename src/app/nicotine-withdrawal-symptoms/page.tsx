import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";
import { blouGuideBySlug, isPublishedGuide } from "@/lib/blouGuides";

const PUBLISHED = "2026-05-14";
const MODIFIED = "2026-11-27";
const CAMPAIGN = "article_nicotine-withdrawal-symptoms";
const PATH = "/nicotine-withdrawal-symptoms";

const TITLE = "Nicotine withdrawal symptoms: list, timing, relief";
const DESCRIPTION =
  "Nicotine withdrawal symptoms after quitting smoking: the common ones, how long they last, what helps, when to call a doctor, and a guide for each symptom.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "nicotine withdrawal symptoms",
    "symptoms after quitting smoking",
    "quit smoking withdrawal symptoms",
    "nicotine withdrawal symptoms list",
    "nicotine withdrawal headache",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "Handling nicotine withdrawal and triggers when you decide to quit tobacco",
    href: "https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/withdrawal-fact-sheet",
    publisher: "National Cancer Institute",
  },
  {
    label: "Managing nicotine withdrawal",
    href: "https://smokefree.gov/challenges-when-quitting/withdrawal/understanding-withdrawal",
    publisher: "Smokefree.gov (National Cancer Institute)",
  },
  {
    label: "Nicotine and tobacco withdrawal (Medical Encyclopedia)",
    href: "https://medlineplus.gov/ency/article/000953.htm",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
  },
  {
    label: "How to quit smoking",
    href: "https://www.cdc.gov/tobacco/about/how-to-quit.html",
    publisher: "Centers for Disease Control and Prevention",
  },
];

type GuideRow = [slug: string, line: string];

const SYMPTOM_GROUPS: Array<{ title: string; rows: GuideRow[] }> = [
  {
    title: "Mind and mood",
    rows: [
      ["cravings", "Urges to smoke that come in waves"],
      ["irritability", "Short temper and feeling on edge"],
      ["mood-swings", "Feelings that swing up and down"],
      ["anger", "Sudden frustration and anger"],
      ["crying", "Tearing up more easily than usual"],
      ["restlessness", "Not being able to sit still"],
      ["concentration", "Trouble focusing on one task"],
      ["brain-fog", "A foggy, slow-thinking feeling"],
    ],
  },
  {
    title: "Sleep and energy",
    rows: [
      ["insomnia", "Trouble falling or staying asleep"],
      ["dreams-and-sleep", "Vivid dreams and broken sleep"],
      ["night-sweats", "Waking up damp or hot"],
      ["fatigue", "Feeling worn out"],
      ["flu-like-symptoms", "Feeling achy or run down, like a cold"],
    ],
  },
  {
    title: "Head and body",
    rows: [
      ["headaches", "Head pain in the first days"],
      ["dizziness", "Feeling lightheaded or unsteady"],
      ["tingling-hands-and-feet", "Pins and needles in hands or feet"],
      ["muscle-aches", "Sore muscles"],
      ["joint-pain", "Aching joints"],
      ["caffeine-sensitivity", "Coffee hitting harder than before"],
    ],
  },
  {
    title: "Breathing, chest and throat",
    rows: [
      ["cough", "A cough that changes after you quit"],
      ["shortness-of-breath", "Feeling short of breath"],
      ["chest-tightness", "A tight feeling in the chest"],
      ["heart-palpitations", "Noticing your heartbeat"],
      ["sore-throat", "A scratchy or sore throat"],
      ["sinus-congestion", "A blocked or stuffy nose"],
      ["sneezing", "More sneezing than usual"],
    ],
  },
  {
    title: "Digestion and appetite",
    rows: [
      ["increased-appetite", "Feeling hungrier"],
      ["sugar-cravings", "Wanting sweets and snacks"],
      ["constipation", "Harder, slower bowel movements"],
      ["diarrhea", "Loose stools"],
      ["nausea", "An upset, queasy stomach"],
      ["bloating-and-gas", "A bloated, gassy belly"],
      ["heartburn-and-reflux", "Burning in the chest or throat"],
    ],
  },
  {
    title: "Mouth, skin and other",
    rows: [
      ["dry-mouth", "A dry or sticky mouth"],
      ["mouth-ulcers", "Small sores inside the mouth"],
      ["sore-gums", "Tender or sore gums"],
      ["bad-breath", "Breath that tastes or smells different"],
      ["taste-and-smell", "Taste and smell coming back"],
      ["skin-rash", "Itchy or irritated skin"],
      ["skin-changes", "Changes in how your skin looks"],
      ["hair-loss", "Worry about thinning hair"],
      ["libido", "Changes in sex drive"],
    ],
  },
];

const faqItems = [
  {
    question: "What are the first signs of nicotine withdrawal?",
    answer:
      "Cravings can start within an hour or two of your last cigarette. Within the first day you may also feel tense, edgy, or short-tempered (National Cancer Institute). Trouble concentrating, poor sleep, and a bigger appetite often follow.",
  },
  {
    question: "How long do nicotine withdrawal symptoms last?",
    answer:
      "Symptoms are usually worst during the first week and peak in the first 3 days. They usually ease over the first month, but some people have symptoms for several months (National Cancer Institute). See /nicotine-withdrawal-timeline for the day-by-day view.",
  },
  {
    question: "What is the worst day of nicotine withdrawal?",
    answer:
      "The National Cancer Institute says symptoms usually peak in the first 3 days after you quit. Smokefree.gov says the worst symptoms only last a few days to a couple of weeks. Plan your hardest days for the first week.",
  },
  {
    question: "Can nicotine withdrawal cause headaches, nausea, or chest tightness?",
    answer:
      "Headaches, fatigue, dizziness, and constipation are listed as less common withdrawal symptoms (National Cancer Institute). Read /guides/headaches, /guides/nausea, and /guides/chest-tightness for what each one can feel like. Chest pain that is crushing or severe needs urgent care.",
  },
  {
    question: "Is vaping withdrawal different from cigarette withdrawal?",
    answer:
      "Both are nicotine withdrawal, so the symptoms overlap a lot. We cover the vape side on /vape-withdrawal-symptoms.",
  },
  {
    question: "Does nicotine replacement therapy help with withdrawal symptoms?",
    answer:
      "Smokefree.gov says quit smoking medications can help reduce symptoms of nicotine withdrawal and make quitting easier. Talk with a clinician or pharmacist about which option fits you. See /quit-smoking-medication for the options.",
  },
  {
    question: "Will an app reduce withdrawal symptoms?",
    answer:
      "No. An app does not treat withdrawal. It can give you a plan for the moment a craving hits and a place to see how many smoke-free days you have already built.",
  },
  {
    question: "When are symptoms not just withdrawal?",
    answer:
      "Get urgent care for crushing chest pain, severe shortness of breath, or thoughts of self-harm. When you are unsure, call your local emergency number or a doctor.",
  },
];

export default function NicotineWithdrawalSymptomsPage() {
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
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs items={[{ name: "Nicotine withdrawal symptoms", path: PATH }]} />

      <ArticleHeader
        kicker="Symptom hub"
        title="Nicotine withdrawal symptoms"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/nicotine-withdrawal-timeline" variant="secondary">
            Withdrawal timeline →
          </ButtonLink>
        }
      >
        <p>
          Something feels off since you quit. This page lists the common nicotine withdrawal
          symptoms, how long they last, and what helps. Then it links to a guide for each one.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "common", label: "Common nicotine withdrawal symptoms" },
          { id: "how-long", label: "How long symptoms last" },
          { id: "all-symptoms", label: "Every symptom guide" },
          { id: "what-helps", label: "What helps" },
          { id: "doctor", label: "When to call a doctor" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Common nicotine withdrawal symptoms are cravings, irritability, anxiety, low mood, trouble concentrating, poor sleep, restlessness, and a bigger appetite. They are usually worst in the first week and peak in the first 3 days. Most ease over the first month, and some people feel them for longer. Chest pain, severe shortness of breath, or thoughts of self-harm need urgent care."
          facts={[
            "Peak: usually the first 3 days (National Cancer Institute).",
            "Common: cravings, irritability, anxiety, low mood, poor sleep, hunger.",
            "Less common: headaches, fatigue, dizziness, cough, mouth ulcers, constipation.",
          ]}
        />
      </section>

      <section id="common" className="scroll-mt-24 flex flex-col gap-4 text-ink">
        <h2 className="text-2xl font-semibold text-teal-950">
          Common nicotine withdrawal symptoms
        </h2>
        <p>
          Your body got used to a steady level of nicotine. When it drops, you feel it. The
          National Cancer Institute lists these as the common symptoms:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Nicotine cravings</li>
          <li>Anger, frustration, and irritability</li>
          <li>Trouble concentrating</li>
          <li>Insomnia</li>
          <li>Restlessness</li>
          <li>Anxiety</li>
          <li>Depression</li>
          <li>Hunger or a bigger appetite</li>
        </ul>
        <p>
          Less common ones include headaches, fatigue, dizziness, coughing, mouth ulcers, and
          constipation (National Cancer Institute).
        </p>
        <p>
          Anxiety can show up within the first day. If it hits you hard, read{" "}
          <Link className={LINK} href="/quit-smoking-with-anxiety">
            quitting smoking with anxiety
          </Link>
          . Low mood has its own page too:{" "}
          <Link className={LINK} href="/quit-smoking-with-depression">
            quitting smoking with depression
          </Link>
          .
        </p>
      </section>

      <section id="how-long" className="scroll-mt-24 flex flex-col gap-4 text-ink">
        <h2 className="text-2xl font-semibold text-teal-950">
          How long do nicotine withdrawal symptoms last?
        </h2>
        <p>
          Symptoms are usually worst during the first week and peak in the first 3 days. After
          that, they usually drop off over the first month. Everyone is different, and some
          people have symptoms for several months (National Cancer Institute).
        </p>
        <p>
          Smokefree.gov puts it this way: the worst symptoms last only a few days to a couple of
          weeks. Cravings come and go. They get farther apart over time, though you may still
          get an occasional mild one months or years later (National Cancer Institute).
        </p>
        <p>
          Anger and irritability peak within 1 week and may last 2 to 4 weeks. If you feel sad,
          it usually starts in the first day, continues for a couple of weeks, and goes away
          within a month. People with a history of depression often have stronger symptoms
          (National Cancer Institute).
        </p>
        <p>
          For a day-by-day view, use the{" "}
          <Link className={LINK} href="/nicotine-withdrawal-timeline">
            nicotine withdrawal timeline
          </Link>{" "}
          or the longer{" "}
          <Link className={LINK} href="/quit-smoking-timeline">
            quit smoking timeline
          </Link>
          . If you are still in the first days, the{" "}
          <Link className={LINK} href="/first-week-quit-smoking">
            week one playbook
          </Link>{" "}
          has a plan.
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Most symptoms are strongest early, then ease. Blou&apos;s SOS craving help is there the
        second an urge hits, and your timeline shows every smoke-free day you have already got
        through.
      </InlineAppCta>

      <section id="all-symptoms" className="scroll-mt-24 flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-ink">
          <h2 className="text-2xl font-semibold text-teal-950">
            Every nicotine withdrawal symptom, with a guide for each
          </h2>
          <p>
            Find what you feel and open the guide. Each one covers what it is like, how long it
            tends to last, and when to get help.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {SYMPTOM_GROUPS.map((group) => {
            const rows = group.rows.filter(([slug]) => {
              const guide = blouGuideBySlug[slug];
              return guide && isPublishedGuide(guide);
            });
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-teal-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-teal-950">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-teal-900">
                  {rows.map(([slug, line]) => (
                    <li key={slug}>
                      <Link className={LINK} href={`/guides/${slug}`}>
                        {blouGuideBySlug[slug]?.shortTitle ?? slug}
                      </Link>
                      <span className="text-ink-muted"> · {line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="text-sm text-ink-muted">
          Also see{" "}
          <Link className={LINK} href="/quit-smoking-without-gaining-weight">
            quitting without gaining weight
          </Link>
          ,{" "}
          <Link className={LINK} href="/how-long-does-nicotine-stay-in-your-system">
            how long nicotine stays in your system
          </Link>
          , and{" "}
          <Link className={LINK} href="/vape-withdrawal-symptoms">
            vape withdrawal symptoms
          </Link>
          . Browse all guides on{" "}
          <Link className={LINK} href="/guides">
            the guides page
          </Link>
          .
        </p>
      </section>

      <section id="what-helps" className="scroll-mt-24 flex flex-col gap-4 text-ink">
        <h2 className="text-2xl font-semibold text-teal-950">
          What helps with nicotine withdrawal symptoms
        </h2>
        <p>
          Smokefree.gov says quit smoking medications can help reduce withdrawal symptoms and make
          quitting easier. Ask a clinician or pharmacist what fits you. Our{" "}
          <Link className={LINK} href="/quit-smoking-medication">
            quit smoking medication guide
          </Link>{" "}
          compares the options. Never stop a prescribed medicine because of something you read
          here.
        </p>
        <p>Beyond medication, the National Cancer Institute suggests a few steps:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Know your triggers and plan for them, such as stress, alcohol, and being around smokers.</li>
          <li>Stay away from people who smoke in the early weeks.</li>
          <li>Notice what you actually feel. Is it tired, bored, lonely, or hungry? Meet that need.</li>
          <li>Do physical activity you enjoy.</li>
        </ul>
        <p>
          Cravings pass. Waiting one urge out and then the next is how the weeks add up. See{" "}
          <Link className={LINK} href="/how-to-quit-smoking">
            how to quit smoking
          </Link>{" "}
          for a full plan, or the{" "}
          <Link className={LINK} href="/quit-smoking-app-for-iphone">
            quit smoking app for iPhone
          </Link>{" "}
          if you want help in your pocket.
        </p>
      </section>

      <section id="doctor" className="scroll-mt-24 flex flex-col gap-4 text-ink">
        <h2 className="text-2xl font-semibold text-teal-950">
          When to call a doctor
        </h2>
        <p>Most withdrawal symptoms are uncomfortable but not dangerous. Some are not just withdrawal.</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Crushing chest pain or pain that spreads to your arm or jaw: call your local emergency number.</li>
          <li>Severe shortness of breath: get urgent care.</li>
          <li>Thoughts of harming yourself: call your local emergency number or a crisis line right away.</li>
          <li>Low mood that does not lift, or a past history of depression: talk to a clinician. The National Cancer Institute links to the National Institute of Mental Health for help.</li>
          <li>A symptom that worries you or does not fit the lists above: ask a doctor or pharmacist.</li>
        </ul>
        <p>
          This page is education, not medical advice. Blou is not a medical device and does not
          diagnose or treat anything.
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <section
        id="sources"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Sources &amp; further reading</h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          {SOURCES.map((s) => (
            <li key={s.href}>
              <a
                className="underline decoration-teal-400 underline-offset-4"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>{" "}
              <span className="text-ink-muted">· {s.publisher}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          Timing ranges are averages from research on quitting tobacco. Your experience may
          differ. If you have a health condition, are pregnant, or take medication, talk to a
          clinician before changing how you use nicotine.
        </p>
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/first-week-quit-smoking" variant="secondary">
          Week one playbook →
        </ButtonLink>
      </div>
    </div>
  );
}
