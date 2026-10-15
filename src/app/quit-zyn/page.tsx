import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
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
const CAMPAIGN = "article_quit-zyn";
const PATH = "/quit-zyn";

const TITLE = "How to quit Zyn: best way to quit nicotine pouches";
const DESCRIPTION =
  "How to quit Zyn and other nicotine pouches: taper by mg and pouch count, go cold turkey, or use NRT, plus a craving plan and free help.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit zyn",
    "how to quit zyn",
    "quitting nicotine pouches",
    "best way to quit zyn",
    "best way to quit nicotine pouches",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "FDA authorizes marketing of 20 ZYN nicotine pouch products after extensive scientific review (January 16, 2025)",
    href: "https://www.fda.gov/news-events/press-announcements/fda-authorizes-marketing-20-zyn-nicotine-pouch-products-after-extensive-scientific-review",
    publisher: "U.S. Food and Drug Administration",
  },
  {
    label: "The relative risks of tobacco products",
    href: "https://www.fda.gov/tobacco-products/health-effects-tobacco-use/relative-risks-tobacco-products",
    publisher: "U.S. Food and Drug Administration",
  },
  {
    label: "Nicotine pouches",
    href: "https://www.cdc.gov/tobacco/nicotine-pouches/index.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "How to quit smoking",
    href: "https://www.cdc.gov/tobacco/about/how-to-quit.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "How to use nicotine gum",
    href: "https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-nicotine-gum.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "What to know about quitting Zyn (January 2026)",
    href: "https://truthinitiative.org/research-resources/emerging-tobacco-products/what-know-about-quitting-zyn",
    publisher: "Truth Initiative",
  },
  {
    label: "What is Zyn and what are oral nicotine pouches? (August 2026)",
    href: "https://truthinitiative.org/research-resources/emerging-tobacco-products/what-zyn-and-what-are-oral-nicotine-pouches",
    publisher: "Truth Initiative",
  },
  {
    label: "How to quit dipping or chewing tobacco",
    href: "https://veterans.smokefree.gov/quit-dip-vapes/smokeless-tobacco/how-to-quit",
    publisher: "Smokefree.gov (National Cancer Institute)",
  },
  {
    label: "Handling nicotine withdrawal and triggers when you decide to quit tobacco",
    href: "https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/withdrawal-fact-sheet",
    publisher: "National Cancer Institute",
  },
  {
    label: "Interventions for smokeless tobacco use cessation. Cochrane Database of Systematic Reviews, 2025",
    href: "https://pubmed.ncbi.nlm.nih.gov/40232040/",
    publisher: "PubMed",
  },
  {
    label: "Oral nicotine pouches: rising popularity and state of the science. Public Health Reports, 2025",
    href: "https://pubmed.ncbi.nlm.nih.gov/40293136/",
    publisher: "PubMed",
  },
  {
    label: "Snus, nicotine pouches and cardiovascular disease: evidence, mechanisms, and the challenge of novel nicotine products. Journal of Internal Medicine, 2026",
    href: "https://pubmed.ncbi.nlm.nih.gov/42706592/",
    publisher: "PubMed",
  },
  {
    label: "Cardiovascular and metabolic changes following 12 weeks of tobacco and nicotine pouch cessation: a Swedish cohort study. Harm Reduction Journal, 2025",
    href: "https://pubmed.ncbi.nlm.nih.gov/40241094/",
    publisher: "PubMed",
  },
  {
    label: "A qualitative assessment of oral nicotine pouch use topography. Nicotine & Tobacco Research, 2026",
    href: "https://pubmed.ncbi.nlm.nih.gov/42742193/",
    publisher: "PubMed",
  },
];

const faqItems = [
  {
    question: "How do I quit Zyn?",
    answer:
      "Pick a quit date, decide whether you will taper or stop all at once, and plan for your strongest cues (waking up, driving, after meals, work stress). Many people step down from 6 mg to 3 mg pouches first, then cut the number of pouches each day. Nicotine gum or lozenges, or a prescription medicine from a clinician, can take the edge off withdrawal. Free coaching through 1-800-QUIT-NOW or the EX Program adds support; in smokeless tobacco trials, counselling helped more people quit. What withdrawal feels like is covered in /zyn-withdrawal.",
  },
  {
    question: "What is the best way to quit nicotine pouches?",
    answer:
      "No single method is best for everyone, and almost no trials have studied pouch users specifically. The closest evidence comes from a 2025 Cochrane review of smokeless tobacco: counselling and varenicline probably help more people quit, and nicotine replacement therapy may help. In practice, the best way to quit Zyn is a plan you will actually follow: a taper or a firm quit date, a craving plan, and support from a quitline, pharmacist or clinician.",
  },
  {
    question: "Can I quit Zyn cold turkey?",
    answer:
      "Yes. Some people prefer a clean stop. In a small Swedish study of daily snus and nicotine pouch users who stopped abruptly, 46 of 50 volunteers tried and 33 stayed off for the full 12 weeks. Expect withdrawal to be strongest in the first week, peaking in the first few days. Having gum, lozenges, or a craving plan ready makes cold turkey easier. See /zyn-withdrawal for the timeline.",
  },
  {
    question: "Can I use nicotine gum or lozenges to quit Zyn?",
    answer:
      "Many people do, and the FDA describes approved nicotine replacement therapy as safe and effective. Over-the-counter directions are written for people who smoke, with doses based on cigarettes per day or time to first cigarette, so ask a pharmacist, clinician, or quitline coach to match a dose to your pouch use. Nicotine pouches themselves are not nicotine replacement therapy and are not approved as a quit aid.",
  },
  {
    question: "Should I switch from 6 mg to 3 mg Zyn before quitting?",
    answer:
      "Truth Initiative suggests that people using 6 mg or 9 mg pouches move down to 3 mg to ease into quitting and limit withdrawal. ZYN is sold in the US in 3 mg and 6 mg strengths, so for most Zyn users the step is 6 mg to 3 mg, followed by fewer pouches per day and then a quit date.",
  },
  {
    question: "How long does it take to quit nicotine pouches?",
    answer:
      "A taper usually takes a few weeks; how long depends on where you start. After your last pouch, nicotine withdrawal is usually worst in the first week and eases over the first month, although some people feel symptoms for several months and occasional cravings can return much later. Most of the hard part is front-loaded.",
  },
  {
    question: "Is there free help for quitting nicotine pouches?",
    answer:
      "Yes. In the US, the CDC points people to 1-800-QUIT-NOW for free, confidential coaching and help making a quit plan; tell the coach you use pouches. Truth Initiative’s free EX Program lets you choose nicotine pouches as your main product and offers text support (text EXPROGRAM to 88709).",
  },
];

function Section({
  id,
  title,
  children,
  tone = "default",
}: {
  id: string;
  title: string;
  children: ReactNode;
  tone?: "default" | "amber";
}) {
  const toneClass =
    tone === "amber"
      ? "border-amber-200/80 bg-amber-50/90"
      : "border-teal-200 bg-white";
  return (
    <section id={id} className={`scroll-mt-24 rounded-2xl border p-6 shadow-sm ${toneClass}`}>
      <h2 className="text-xl font-semibold text-teal-950">{title}</h2>
      {children}
    </section>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm leading-7 text-teal-900/90">{children}</p>;
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden className="mt-1 text-teal-600">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function QuitZynPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Nicotine dependence" },
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs items={[{ name: "Quit Zyn", path: PATH }]} />

      <ArticleHeader
        kicker="Nicotine pouches"
        title="How to quit Zyn and other nicotine pouches"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/zyn-withdrawal" variant="secondary">
            Zyn withdrawal timeline →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated October 2026.</strong> The best way
          to quit Zyn is a plan made before your quit day: step down the strength and the
          number of pouches, or pick a date and stop, then have a craving plan and backup ready.
          Here is how each option works, what the evidence says, and where to get free help.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "why-hard", label: "Why quitting nicotine pouches is hard" },
          { id: "methods", label: "The main ways to quit Zyn" },
          { id: "taper", label: "Tapering by mg and pouch count" },
          { id: "cold-turkey", label: "Quitting Zyn cold turkey" },
          { id: "nrt", label: "Using NRT and medication" },
          { id: "cues", label: "A plan for your cues" },
          { id: "what-to-expect", label: "What to expect" },
          { id: "get-help", label: "When and where to get help" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="To quit Zyn, choose between a short taper (6 mg to 3 mg, then fewer pouches a day) and a firm quit date, and decide in advance what you will do when a craving hits. Nicotine gum or lozenges, prescription medicine, and free quitline coaching can all help. Withdrawal is usually worst in the first week and eases over the first month."
          facts={[
            "Nicotine is highly addictive, and some pouches contain a lot of it (CDC).",
            "No nicotine pouch is approved by the FDA as a quit aid.",
            "In smokeless tobacco trials, counselling and varenicline probably help more people quit; NRT may help.",
            "1-800-QUIT-NOW offers free, confidential coaching (CDC).",
          ]}
        />
      </section>

      <Section id="why-hard" title="Why quitting nicotine pouches is hard">
        <P>
          Pouches feel small and discreet, so people are often surprised by how strong the habit
          is. The reason is nicotine. The CDC calls nicotine highly addictive and notes that some
          pouches contain high levels of it. The FDA puts it plainly: nicotine keeps people using
          tobacco products even when they want to stop.
        </P>
        <P>
          A 2025 research review in <em>Public Health Reports</em> found that nicotine pouches
          deliver amounts of nicotine similar to other tobacco products, at a rate similar to
          other oral nicotine products. So if quitting pouches feels as hard as quitting smoking,
          that matches how much nicotine many pouches deliver. It is not a lack of willpower.
        </P>
        <Bullets
          items={[
            <>
              Use is often constant. In focus groups, regular users described keeping a pouch in
              for long stretches and adding a new one before taking the old one out
              (&ldquo;stacking&rdquo;). Habits like these make the urge feel continuous.
            </>,
            <>
              Pouches are easy to use anywhere (at a desk, in class, in the car), so the habit
              gets attached to many different cues.
            </>,
            <>
              Many pouch users also use other nicotine. The CDC reports that adult pouch use is
              highest among people who currently smoke. If that is you, Blou and this plan work
              for both; see the{" "}
              <Link className={LINK} href="/how-to-quit-smoking">
                quit smoking plan
              </Link>{" "}
              and{" "}
              <Link className={LINK} href="/quit-vaping">
                quitting vaping
              </Link>
              .
            </>,
          ]}
        />
      </Section>

      <Section id="methods" title="The main ways to quit Zyn">
        <P>
          Research on quitting nicotine pouches specifically is still thin, because the products
          are new. The best evidence we have comes from people quitting other smokeless tobacco
          (snus, dip and chew). A 2025 Cochrane review of 43 trials with more than 20,000 people
          found:
        </P>
        <Bullets
          items={[
            <>
              <strong>Counselling</strong> probably helps more people quit than minimal support
              (moderate-certainty evidence). Brief advice also helped.
            </>,
            <>
              <strong>Varenicline</strong>, a prescription medicine, probably helps more people
              quit than placebo.
            </>,
            <>
              <strong>Nicotine replacement therapy (NRT)</strong> may help more people quit than
              no medication (low-certainty evidence).
            </>,
            <>
              <strong>Bupropion</strong> did not show a benefit for smokeless tobacco in the
              trials available.
            </>,
          ]}
        />
        <P>
          That leaves three practical paths, which you can combine: taper down, stop on a set
          date, or switch to NRT for a short period and then step off it. Whichever you pick,
          adding coaching (a quitline, a clinician, or a structured program) is the part with the
          strongest evidence behind it.
        </P>
      </Section>

      <Section id="taper" title="How to quit Zyn by tapering: strength first, then count">
        <P>
          ZYN is sold in the US in two strengths, 3 mg and 6 mg per pouch (FDA). Truth Initiative
          suggests that people on 6 mg or 9 mg pouches move to 3 mg to ease into quitting and
          keep withdrawal smaller. A simple taper has three steps:
        </P>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-teal-900/90">
          <li>
            <strong>Drop the strength.</strong> If you use 6 mg, switch to 3 mg and keep your
            pouch count the same for several days while your body adjusts.
          </li>
          <li>
            <strong>Cut the count.</strong> Remove one or two pouches a day every few days.
            Start with the easiest ones, the pouches you take out of habit rather than strong
            craving.
          </li>
          <li>
            <strong>Set the last day.</strong> Once you are down to a few pouches a day, put a
            quit date on the calendar. Smokefree.gov suggests picking a quit date within the next
            two weeks so the plan stays real.
          </li>
        </ol>
        <P>
          Truth Initiative also recommends &ldquo;mini-quits&rdquo;: skipping a pouch you would
          normally use, just to prove to yourself you can ride out the urge. These count as
          practice for quit day.
        </P>
        <P>
          To see your current daily nicotine and build a step-down schedule, use the{" "}
          <Link className={LINK} href="/tools/nicotine-pouch-calculator">
            nicotine pouch calculator
          </Link>
          . If you have a heart condition, are pregnant, or take regular medication, agree on the
          plan with your clinician first.
        </P>
      </Section>

      <Section id="cold-turkey" title="Quitting Zyn cold turkey">
        <P>
          Stopping all at once suits people who find that every pouch keeps the craving alive.
          Smokefree.gov notes that cold turkey is not your only choice, but it is a real one. In a
          small 2025 Swedish study of daily snus users (tobacco and nicotine pouches) who agreed
          to stop abruptly, 46 of 50 volunteers made the attempt and 33 stayed off for the full 12
          weeks.
        </P>
        <P>
          The trade-off is a sharper first week. Nicotine withdrawal symptoms are usually worst in
          the first week and peak in the first three days, according to the National Cancer
          Institute. If you go cold turkey, clear your schedule a little for those days, remove
          every can from your car, bag and desk, and keep NRT or your craving plan within reach.
        </P>
        <P>
          See also the general guide to{" "}
          <Link className={LINK} href="/quit-smoking-cold-turkey">
            quitting cold turkey
          </Link>
          .
        </P>
      </Section>

      <Section id="nrt" title="Using NRT and medication to quit nicotine pouches">
        <P>
          The FDA describes approved medicines, including nicotine replacement therapy (NRT),
          bupropion and varenicline, as safe and effective, and as the first line of treatment
          alongside counselling. NRT gives you a measured, regulated dose of nicotine without the
          pouch habit, and you step it down over time.
        </P>
        <Bullets
          items={[
            <>
              <strong>Pouches are not NRT.</strong> Truth Initiative and the CDC both note that no
              nicotine pouch has been approved by the FDA as a tool for quitting. Moving from Zyn
              to a “lighter” pouch brand is not the same as using NRT.
            </>,
            <>
              <strong>Gum and lozenges</strong> are the closest match for a pouch habit because
              they also sit in your mouth. With gum, the CDC describes &ldquo;chew and park&rdquo;:
              chew slowly until it tingles, then park it between your cheek and gum, and avoid
              eating or drinking for 15 minutes before and during use. See{" "}
              <Link className={LINK} href="/quit-smoking-with-nicotine-gum">
                nicotine gum
              </Link>{" "}
              and{" "}
              <Link className={LINK} href="/quit-smoking-with-nicotine-lozenge">
                nicotine lozenges
              </Link>
              .
            </>,
            <>
              <strong>Patch plus a fast form.</strong> For people quitting dip and chew,
              Smokefree.gov notes that doctors recommend pairing a long-acting patch with a
              short-acting form like gum or lozenges. See{" "}
              <Link className={LINK} href="/combination-nrt-quit-smoking">
                combination NRT
              </Link>
              .
            </>,
            <>
              <strong>Dosing is not one-size-fits-all.</strong> Over-the-counter NRT directions
              are written for people who smoke, with doses based on cigarettes per day or how soon
              you smoke after waking. Ask a pharmacist, clinician or quitline coach to match a
              dose to your pouch use rather than guessing.
            </>,
            <>
              <strong>Prescription options.</strong> Varenicline probably helps people quit
              smokeless tobacco (Cochrane, 2025). It needs a prescription, so talk to a clinician.
            </>,
          ]}
        />
      </Section>

      <Section id="cues" title="A plan for your cues and cravings">
        <P>
          Smokefree.gov lists common triggers for oral tobacco users: stress or pain, driving,
          after meals, coffee or alcohol, and seeing other people use. Pouch habits tend to stick
          to the same moments every day. Write down your top five and decide what replaces the
          pouch in each one before quit day.
        </P>
        <Bullets
          items={[
            <>
              <strong>Wake-up pouch:</strong> keep sugar-free gum or a glass of water by the bed,
              and move straight into another part of your morning routine.
            </>,
            <>
              <strong>Driving:</strong> clear the car of cans and keep something else for your
              mouth in the cup holder. The National Cancer Institute suggests keeping your mouth
              busy with sugar-free gum or crunchy snacks like carrots.
            </>,
            <>
              <strong>Work or study focus:</strong> plan a short walk or stretch at the times you
              usually reach for a can.
            </>,
            <>
              <strong>Stress:</strong> slow breathing, a walk, or a message to a friend. Truth
              Initiative notes that many people find a craving passes in about five minutes with
              a distraction.
            </>,
            <>
              <strong>Social settings:</strong> tell the people you use with that you are
              quitting, and decide in advance what you will say if offered one.
            </>,
          ]}
        />
        <P>
          More tactics are in the{" "}
          <Link className={LINK} href="/guides/cravings">
            cravings guide
          </Link>
          .
        </P>
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        Blou works for quitting nicotine pouches, not just cigarettes. When a Zyn craving hits,
        SOS help is one tap away, and every pouch-free milestone lands on your own visual
        timeline.
      </InlineAppCta>

      <Section id="what-to-expect" title="What to expect when quitting nicotine pouches">
        <P>
          Withdrawal from pouches is nicotine withdrawal. The National Cancer Institute lists
          cravings, irritability, trouble concentrating, poor sleep, restlessness, anxiety, low
          mood and increased appetite as the most common symptoms. Cravings can start within an
          hour or two of your last use. Symptoms usually peak in the first three days and ease
          over the first month.
        </P>
        <P>
          Two honest caveats. First, this timeline comes mostly from research on people quitting
          smoking and other tobacco; pouch-specific data are limited. Second, some changes are not
          instant improvements. In the Swedish study of people who stopped snus and nicotine
          pouches, home systolic blood pressure and body weight were slightly higher after 12
          weeks (about 3.7 mmHg and 1.8 kg on average). The researchers called for longer studies.
          The NCI notes that weight gain after quitting tobacco is usually under 10 pounds.
        </P>
        <P>
          For the day-by-day picture, read{" "}
          <Link className={LINK} href="/zyn-withdrawal">
            Zyn withdrawal symptoms and timeline
          </Link>
          . If you are weighing whether pouches are worth quitting at all, see{" "}
          <Link className={LINK} href="/are-zyns-bad-for-you">
            are Zyns bad for you?
          </Link>{" "}
          and{" "}
          <Link className={LINK} href="/zyn-vs-cigarettes">
            Zyn vs cigarettes
          </Link>
          .
        </P>
      </Section>

      <Section id="get-help" title="When and where to get help" tone="amber">
        <P>
          You do not need to do this alone, and free support improves your odds.
        </P>
        <Bullets
          items={[
            <>
              <strong>1-800-QUIT-NOW (1-800-784-8669).</strong> The CDC describes it as free,
              confidential coaching: you talk with a quitline coach who helps you make a quit
              plan. Tell them you use nicotine pouches.
            </>,
            <>
              <strong>EX Program.</strong> Truth Initiative’s free program, built with Mayo Clinic,
              lets you pick nicotine pouches as your main product and sends text support. Text
              EXPROGRAM to 88709.
            </>,
            <>
              <strong>A pharmacist or clinician</strong> can help you choose an NRT dose or decide
              whether a prescription medicine makes sense.
            </>,
          ]}
        />
        <P>Talk to a clinician promptly if:</P>
        <Bullets
          items={[
            "Low mood or anxiety lasts more than two weeks or keeps getting worse.",
            "You are pregnant or breastfeeding. The CDC notes nicotine is toxic to developing fetuses.",
            "You have a heart condition, high blood pressure, or take regular medication.",
            "You have mouth sores, white patches, or gum changes that do not heal.",
          ]}
        />
        <P>
          If you are in distress or having thoughts of suicide, call or text 988 in the US, or
          contact your local emergency number.
        </P>
      </Section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Quit pouches and see your progress"
        description="Blou supports quitting cigarettes and nicotine pouches like Zyn. Get SOS help when a craving hits and watch your milestones add up from your first pouch-free day."
      />

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
          This page is educational and is not medical advice. Research on nicotine pouches is
          still early, and much of what we know about quitting comes from studies of smoking and
          other smokeless tobacco. If you are pregnant, have a health condition, or take
          medication, talk to a clinician or pharmacist before changing how you use nicotine.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/zyn-withdrawal" variant="secondary">
          Zyn withdrawal timeline →
        </ButtonLink>
        <ButtonLink href="/tools/nicotine-pouch-calculator" variant="secondary">
          Nicotine pouch calculator →
        </ButtonLink>
        <ButtonLink href="/are-zyns-bad-for-you" variant="secondary">
          Are Zyns bad for you? →
        </ButtonLink>
      </div>
    </div>
  );
}
