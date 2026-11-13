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

const PUBLISHED = "2026-11-13";
const MODIFIED = "2026-11-13";
const CAMPAIGN = "article_quit-smoking-medication";
const PATH = "/quit-smoking-medication";

const TITLE = "Quit smoking medication: all 7 options compared";
const DESCRIPTION =
  "The seven FDA-approved quit smoking medications side by side: patch, gum, lozenge, inhaler, nasal spray, varenicline and bupropion, and how to choose.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking medication",
    "smoking cessation medication",
    "quit smoking aids",
    "medication to quit smoking",
    "FDA approved quit smoking medications",
    "stop smoking medicine",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const CDC_BASE =
  "https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications";

const SOURCES: Source[] = [
  {
    label: "Quit-smoking medications",
    href: `${CDC_BASE}/index.html`,
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "How to use the nicotine oral inhaler",
    href: `${CDC_BASE}/how-to-use-quit-smoking-medicines/how-to-use-a-nicotine-oral-inhaler.html`,
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "How to use the nicotine nasal spray",
    href: `${CDC_BASE}/how-to-use-quit-smoking-medicines/how-to-use-nicotine-nasal-spray.html`,
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "How to use nicotine gum",
    href: `${CDC_BASE}/how-to-use-quit-smoking-medicines/how-to-use-nicotine-gum.html`,
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "How to use the nicotine lozenge",
    href: `${CDC_BASE}/how-to-use-quit-smoking-medicines/how-to-use-the-nicotine-lozenge.html`,
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "How to use a nicotine patch",
    href: `${CDC_BASE}/how-to-use-quit-smoking-medicines/how-to-use-a-nicotine-patch.html`,
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "How to use varenicline",
    href: `${CDC_BASE}/how-to-use-quit-smoking-medicines/how-to-use-varenicline.html`,
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "How to use bupropion SR",
    href: `${CDC_BASE}/how-to-use-quit-smoking-medicines/how-to-use-bupropion-sr.html`,
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "Find the best stop-smoking products for you",
    href: "https://www.nhs.uk/conditions/stop-smoking-treatments/",
    publisher: "NHS",
  },
];

type Row = {
  name: string;
  form: string;
  rx: string;
  how: string;
  href: string;
  guide: string;
};

const rows: Row[] = [
  {
    name: "Nicotine patch",
    form: "Skin patch",
    rx: "No prescription (NHS)",
    how: "Steady nicotine through the day",
    href: "/quit-smoking-with-nicotine-patch",
    guide: "How to use the patch",
  },
  {
    name: "Nicotine gum",
    form: "Chewing gum, 2 mg or 4 mg",
    rx: "No prescription (NHS)",
    how: "Nicotine when a craving hits",
    href: "/quit-smoking-with-nicotine-gum",
    guide: "How to use the gum",
  },
  {
    name: "Nicotine lozenge",
    form: "Dissolving lozenge, 2 mg or 4 mg",
    rx: "No prescription (NHS)",
    how: "Nicotine when a craving hits",
    href: "/quit-smoking-with-nicotine-lozenge",
    guide: "How to use the lozenge",
  },
  {
    name: "Nicotine oral inhaler",
    form: "Cartridge you puff on",
    rx: "Prescription (CDC)",
    how: "Nicotine in short, shallow puffs",
    href: `${CDC_BASE}/how-to-use-quit-smoking-medicines/how-to-use-a-nicotine-oral-inhaler.html`,
    guide: "CDC inhaler guide",
  },
  {
    name: "Nicotine nasal spray",
    form: "Spray, one squirt in each nostril",
    rx: "Prescription (CDC)",
    how: "Nicotine through the nose",
    href: `${CDC_BASE}/how-to-use-quit-smoking-medicines/how-to-use-nicotine-nasal-spray.html`,
    guide: "CDC nasal spray guide",
  },
  {
    name: "Varenicline",
    form: "Pill, no nicotine",
    rx: "Prescription (CDC)",
    how: "Blocks nicotine in the brain, so smoking is less satisfying",
    href: "/quit-smoking-with-varenicline",
    guide: "Varenicline guide",
  },
  {
    name: "Bupropion SR",
    form: "Pill, no nicotine",
    rx: "Prescription (CDC)",
    how: "Eases cravings and withdrawal without nicotine",
    href: "/quit-smoking-with-bupropion",
    guide: "Bupropion guide",
  },
];

const faqItems = [
  {
    question: "What medications help you quit smoking?",
    answer:
      "The CDC lists seven that the FDA has approved for adults who smoke cigarettes: the nicotine patch, gum, lozenge, oral inhaler and nasal spray, plus the pills varenicline and bupropion SR.",
  },
  {
    question: "Which quit smoking medication is the strongest?",
    answer:
      "No page here ranks them, and no single one is right for everyone. The best fit depends on your health, your smoking pattern and what you have tried before. A doctor or pharmacist can help you pick. The NHS says using more than one kind of nicotine replacement can work well.",
  },
  {
    question: "Do I need a prescription to quit smoking?",
    answer:
      "Not for the patch, gum or lozenge, which you can buy at pharmacies and supermarkets (NHS). The CDC says the oral inhaler, nasal spray, varenicline and bupropion SR need a prescription.",
  },
  {
    question: "Are quit smoking medications safe?",
    answer:
      "The CDC says all seven have been shown to be safe and effective for adults who smoke cigarettes. Each has side effects and people who should ask a doctor first, such as anyone who is pregnant, breastfeeding or under 18.",
  },
  {
    question: "Can I use more than one quit smoking medication?",
    answer:
      "Often, yes. The NHS says two types of nicotine replacement can work well together, such as a patch for steady nicotine and a fast-acting form for cravings. Ask a doctor or pharmacist before you combine a nicotine product with a pill.",
  },
  {
    question: "How long do you take quit smoking medication?",
    answer:
      "It depends on the product. The NHS says to use nicotine replacement for at least 12 weeks, or longer if you need it. The CDC says most people take varenicline for 12 weeks. Follow the label and your provider.",
  },
  {
    question: "Does Blou replace quit smoking medication?",
    answer:
      "No. Blou is an iPhone app, not a medicine, and it does not replace a doctor. It gives you SOS craving help, lung checks and a photo timeline alongside whatever medicine you choose.",
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

export default function QuitSmokingMedicationPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    dateReviewed: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs items={[{ name: "Quit smoking medication", path: PATH }]} />

      <ArticleHeader
        kicker="Methods and medication"
        title="Quit smoking medication: all 7 options compared"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/combination-nrt-quit-smoking" variant="secondary">
            Combination NRT →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated November 2026.</strong> There are
          seven FDA-approved medicines for quitting smoking. This page shows what each one is, which
          need a prescription, and what to ask before you choose.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "options", label: "The 7 options at a glance" },
          { id: "how-they-work", label: "Nicotine products vs pills" },
          { id: "choose", label: "How to choose" },
          { id: "combine", label: "Using more than one" },
          { id: "safety", label: "Side effects and who should ask first" },
          { id: "support", label: "Medicine plus support" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="The FDA has approved seven medicines to help adults quit smoking: the nicotine patch, gum, lozenge, oral inhaler and nasal spray, and the pills varenicline and bupropion SR. You can buy the patch, gum and lozenge without a prescription. The inhaler, nasal spray and both pills need one. A doctor or pharmacist can help you pick, and you can often combine two nicotine products."
          facts={[
            "Five are nicotine replacement and two are nicotine-free pills (CDC).",
            "All seven have been shown to be safe and effective for adults who smoke cigarettes (CDC).",
            "Pregnant, breastfeeding, or under 18: talk to a doctor first (CDC).",
          ]}
        />
      </section>

      <Section id="options" title="The 7 FDA-approved quit smoking medications at a glance">
        <P>
          Pick any row to open a guide with the steps, doses and side effects for that product.
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <caption className="sr-only">Seven FDA-approved quit smoking medications compared</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">Medicine</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Form</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Prescription?</th>
                <th scope="col" className="py-2 pr-4 font-semibold">What it does</th>
                <th scope="col" className="py-2 font-semibold">Guide</th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {rows.map((row) => (
                <tr key={row.name} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">{row.name}</th>
                  <td className="py-3 pr-4 leading-6">{row.form}</td>
                  <td className="py-3 pr-4 leading-6">{row.rx}</td>
                  <td className="py-3 pr-4 leading-6">{row.how}</td>
                  <td className="py-3 leading-6">
                    {row.href.startsWith("/") ? (
                      <Link className={LINK} href={row.href}>{row.guide}</Link>
                    ) : (
                      <a className={LINK} href={row.href} target="_blank" rel="noopener noreferrer">
                        {row.guide}
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          Brands and strengths vary, so follow your own box or your prescriber. The{" "}
          <Link className={LINK} href="/nicotine-patch-vs-gum">patch vs gum</Link> page compares
          the two most common over-the-counter picks.
        </P>
      </Section>

      <Section id="how-they-work" title="Nicotine products vs pills: how they work">
        <P>
          Nicotine replacement gives you a smaller, controlled dose of nicotine to ease urges. The
          NHS notes that most of the harm from smoking comes from other chemicals in cigarettes,
          not the nicotine. The patch gives a steady dose. Gum, lozenges, the inhaler and the
          nasal spray work faster, so they suit cravings as they happen.
        </P>
        <P>
          The two pills have no nicotine. The CDC says varenicline gets in the way of nicotine in
          the brain, so smoking feels less satisfying. Bupropion SR eases cravings and withdrawal
          without nicotine. Both need a prescription, and your doctor checks that they are safe for
          you first.
        </P>
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        Medicine helps with the chemistry. Blou helps with the moments in between: SOS craving
        help when an urge hits, plus a timeline that shows every smoke-free day.
      </InlineAppCta>

      <Section id="choose" title="How to choose a quit smoking medication">
        <P>
          This page can&apos;t pick one for you. A doctor, pharmacist or quitline counselor can.
          These questions make that talk quicker:
        </P>
        <Bullets
          items={[
            "Do I want something I can buy today, or am I happy to get a prescription?",
            "Do I want nicotine (patch, gum, lozenge, inhaler, spray) or a nicotine-free pill?",
            "Which medicines have I tried before, and what went wrong?",
            "Do I have heart, kidney or mental health conditions, or take other medicine?",
            "Am I pregnant, breastfeeding or under 18? (The CDC says to talk to a doctor first.)",
            "Should I use a patch plus something fast-acting for cravings?",
          ]}
        />
        <P>
          Don&apos;t stop or change a medicine you were prescribed without asking your doctor.
        </P>
      </Section>

      <Section id="combine" title="Using more than one medication">
        <P>
          The NHS says using two types of nicotine replacement can work well, for example a
          fast-acting form with a slow-acting patch. Our{" "}
          <Link className={LINK} href="/combination-nrt-quit-smoking">combination NRT guide</Link>{" "}
          covers how people usually do it. If you want to add a nicotine product to a pill, ask your
          doctor or pharmacist first.
        </P>
        <P>
          Prefer to skip medicine? That is a valid choice too. See{" "}
          <Link className={LINK} href="/quit-smoking-without-nrt">quitting without NRT</Link> and{" "}
          <Link className={LINK} href="/nrt-and-quit-smoking-app">using NRT with a quit app</Link>.
        </P>
      </Section>

      <Section id="safety" title="Side effects and who should ask a doctor first" tone="amber">
        <P>These are the main ones the CDC lists for each product. Your label has the full list.</P>
        <Bullets
          items={[
            "Gum: mouth or jaw soreness, stomach upset, hiccups. Too much too fast can cause light-headedness or nausea.",
            "Inhaler: mouth and throat irritation, runny nose, cough, headache.",
            "Nasal spray: a hot, peppery feeling in the nose or throat, sneezing, watery eyes. It usually lessens after about a week of regular use.",
            "Varenicline: nausea, trouble sleeping, vivid dreams. Stop and call a doctor right away if you notice hostility, agitation, depression or thoughts of suicide.",
            "Bupropion SR: trouble sleeping, dry mouth, dizziness. Seizures are rare, so tell your doctor about any seizure history first.",
            "Nicotine products in general: see the patch, lozenge and gum guides for skin, sleep and mouth effects.",
          ]}
        />
        <P>
          The CDC says anyone who is pregnant, breastfeeding or under 18 should not use these
          medicines without talking to a doctor. The nasal spray has extra cautions for people with
          recent heart problems, nose or sinus problems, or severe asthma.
        </P>
      </Section>

      <Section id="support" title="Medicine works best with support">
        <P>
          Medicine takes care of withdrawal. Habits and cues are a separate job. Free coaching is
          available while you use any of these products:
        </P>
        <Bullets
          items={[
            <>
              <strong>US:</strong> call 1-800-QUIT-NOW (1-800-784-8669), or find yours on{" "}
              <Link className={LINK} href="/quit-smoking-help">free quit-smoking help by state</Link>.
            </>,
            <>
              <strong>UK:</strong> local NHS Stop Smoking Services are free (NHS).
            </>,
            <>
              <strong>On your phone:</strong> Blou is an iPhone app, not a medicine. It does not
              replace a doctor. See{" "}
              <Link className={LINK} href="/quit-smoking-app-for-iphone">the Blou quit smoking app</Link>.
            </>,
          ]}
        />
      </Section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Pair your medication with a plan for cravings"
        description="Blou gives you SOS craving help, lung checks, and every smoke-free milestone on one timeline."
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
          This page is educational and is not medical advice. Follow the directions on your product
          box or from your prescriber. If you have a health condition, are pregnant, or take
          medication, talk to a doctor or pharmacist first.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/quit-smoking-with-nicotine-patch" variant="secondary">
          Nicotine patch →
        </ButtonLink>
        <ButtonLink href="/quit-smoking-with-varenicline" variant="secondary">
          Varenicline →
        </ButtonLink>
        <ButtonLink href="/nicotine-withdrawal-timeline" variant="secondary">
          Withdrawal timeline →
        </ButtonLink>
      </div>
    </div>
  );
}
