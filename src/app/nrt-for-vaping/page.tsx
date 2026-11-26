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

const PUBLISHED = "2026-11-26";
const MODIFIED = "2026-11-26";
const CAMPAIGN = "article_nrt-for-vaping";
const PATH = "/nrt-for-vaping";

const TITLE = "Nicotine Replacement Therapy for Vaping: A Guide";
const DESCRIPTION =
  "Can you use nicotine patches, gum or lozenges to quit vaping? What the FDA and NHS say, how patch plus gum works, and what to ask your pharmacist.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "nicotine replacement therapy for vaping",
    "nicotine gum for quitting vaping",
    "nicotine patch for vaping",
    "NRT to quit vaping",
    "quit vaping with nicotine patches",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "Nicotine withdrawal and vaping",
    href: "https://smokefree.gov/quit-vaping-resources/nicotine-withdrawal-vaping",
    publisher: "Smokefree.gov, National Cancer Institute",
  },
  {
    label: "How to quit vaping",
    href: "https://www.nhs.uk/better-health/quit-smoking/ready-to-quit-smoking/vaping-to-quit-smoking/how-to-quit-vaping/",
    publisher: "NHS Better Health",
  },
  {
    label: "Quit smoking with nicotine replacement therapies (NRTs)",
    href: "https://www.nhs.uk/better-health/quit-smoking/ready-to-quit-smoking/quit-with-nicotine-replacement-therapies-nrt/",
    publisher: "NHS Better Health",
  },
  {
    label: "Vaping to quit smoking",
    href: "https://www.nhs.uk/better-health/quit-smoking/vaping-to-quit-smoking/",
    publisher: "NHS Better Health",
  },
  {
    label: "Vaping addiction and nicotine withdrawal",
    href: "https://teen.smokefree.gov/quit-vaping/vaping-addiction-nicotine-withdrawal",
    publisher: "Smokefree Teen, National Cancer Institute",
  },
];

const faqItems = [
  {
    question: "Can you use nicotine replacement therapy to quit vaping?",
    answer:
      "Many health professionals suggest it. Smokefree.gov says the FDA has not approved NRT to help people quit vaping, but it advises you to ask a doctor if you are struggling. The NHS says to ask a pharmacist or stop smoking adviser about switching to a suitable NRT product.",
  },
  {
    question: "Does nicotine gum help you quit vaping?",
    answer:
      "Gum is a fast-acting form. The NHS says one of the most effective ways to stop vaping is to switch to another fast-acting nicotine product to ease cravings. Gum gives short bursts of nicotine, so it fits sudden urges better than steady needs.",
  },
  {
    question: "Can you use a nicotine patch to quit vaping?",
    answer:
      "A patch is a common base layer. The NHS describes it as a slow-acting form that gives steady nicotine through the day. The strength is the hard part. Patch labels are written for people who smoke cigarettes, so ask a pharmacist to help you pick one based on how much you vape.",
  },
  {
    question: "How long should I use NRT when I quit vaping?",
    answer:
      "The NHS says NRT is recommended for about 12 weeks, or for as long as it is needed to stop you from going back. When you feel ready, you reduce the dose bit by bit and then stop. That advice is written for smoking, so ask your pharmacist how it applies to you.",
  },
  {
    question: "Is it better to lower my vape strength or use NRT?",
    answer:
      "Both are options in NHS guidance. You can step down your e-liquid strength gradually, or quit in one step and ask about NRT. The NHS notes that if you find yourself vaping more, you may have cut your strength too fast.",
  },
  {
    question: "Can teens use nicotine patches to quit vaping?",
    answer:
      "Talk to a doctor or another health professional first. Smokefree Teen advises asking a health professional how they can help with withdrawal, and Smokefree.gov says to discuss medication with a doctor.",
  },
];

const formRows: Array<{ form: string; role: string }> = [
  {
    form: "Patch",
    role: "Slow-acting. Gives a steady dose through your skin. You can wear a 24-hour patch all the time or a 16-hour patch while you are awake.",
  },
  {
    form: "Gum or lozenge",
    role: "Fast-acting. You chew or suck, then rest it inside your cheek. Short bursts of nicotine for sudden cravings.",
  },
  {
    form: "Inhaler or mouth spray",
    role: "Fast-acting. The inhaler copies the hand-to-mouth habit. The mouth spray works very quickly.",
  },
  {
    form: "Nasal spray",
    role: "The fastest way nicotine enters your blood. The NHS says it copies the rush of smoking more closely than other NRT products.",
  },
];

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
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

export default function NrtForVapingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalTherapy", name: "Nicotine replacement therapy" },
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />
      <Breadcrumbs
        items={[
          { name: "Quit vaping", path: "/quit-vaping" },
          { name: "NRT for vaping", path: PATH },
        ]}
      />

      <ArticleHeader
        kicker="Quit vaping"
        title="Nicotine replacement therapy for vaping"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/quit-vaping" variant="secondary">
            How to quit vaping →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated November 2026.</strong> Patches, gum
          and lozenges are made for people who smoke. Here is how they fit when you vape, and what
          to ask a pharmacist.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "does-it-work", label: "Does NRT work for vaping?" },
          { id: "patch-and-gum", label: "Patch plus a fast-acting form" },
          { id: "strength", label: "Picking a strength" },
          { id: "urges", label: "Gum or lozenge for urges" },
          { id: "how-long", label: "How long to use it" },
          { id: "taper", label: "NRT or lowering your strength" },
          { id: "smoke-too", label: "If you also smoke, or are under 18" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="You can use nicotine replacement therapy (NRT) when you quit vaping, but it was tested and approved for quitting cigarettes. The FDA has not approved it for vaping. Health advice still points vapers to it. A common setup is a patch for steady nicotine plus gum or a lozenge for urges. No source gives a pod-to-patch conversion, so ask a pharmacist or doctor to help you choose."
          facts={[
            "FDA status: not approved to help people quit vaping (Smokefree.gov).",
            "NHS: ask a pharmacist or stop smoking adviser about switching to a suitable NRT.",
            "Typical length on NHS guidance: about 12 weeks, or as long as needed.",
          ]}
        />
      </section>

      <Section id="does-it-work" title="Does nicotine replacement therapy work for quitting vaping?">
        <P>
          Smokefree.gov says NRT, varenicline and bupropion are used to help people quit cigarettes.
          It adds that the FDA has not approved them to help people quit vaping. If you are
          struggling, it says to talk with a doctor or another health professional about whether
          medication might be right for you.
        </P>
        <P>
          The NHS goes a step further. In its guide to quitting vaping, it says you can ask a
          pharmacist or stop smoking adviser about switching to a suitable NRT product. It says NRT
          may help some people manage withdrawal when they stop vaping.
        </P>
        <P>
          In short, most of what we know about NRT comes from smoking. We found no source with
          vaping-specific dosing, so this page does not invent any. Treat it as a guide for the
          conversation with your pharmacist, not as a prescription.
        </P>
      </Section>

      <Section id="patch-and-gum" title="Patch plus gum or lozenge: how combination NRT works">
        <P>
          The NHS says a mix of slow-acting and fast-acting products gives the best results. The
          patch covers the steady need. A fast form handles sudden cravings. Use as many as you need
          to manage cravings, says the NHS.
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">NRT forms and their role</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  Form
                </th>
                <th scope="col" className="py-2 font-semibold">
                  What it does (NHS)
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {formRows.map((row) => (
                <tr key={row.form} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">
                    {row.form}
                  </th>
                  <td className="py-3 leading-6">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          For more on this pairing, see{" "}
          <Link className={LINK} href="/combination-nrt-quit-smoking">
            combination NRT
          </Link>{" "}
          and{" "}
          <Link className={LINK} href="/nicotine-patch-vs-gum">
            nicotine patch vs gum
          </Link>
          . Both are written for cigarettes, but the forms work the same way.
        </P>
      </Section>

      <Section id="strength" title="How to pick an NRT strength when you vape">
        <P>
          This is the hard part. Patch strengths are set by cigarettes per day. The NHS says heavier
          smokers should start with a higher strength. A vape does not fit that rule neatly, because
          pods and devices differ.
        </P>
        <P>
          We found no health source that turns pods or milliliters of e-liquid into a patch strength.
          Do not guess, and do not stack patches. Instead, bring this to a pharmacist or doctor:
        </P>
        <Bullets
          items={[
            <>
              The nicotine strength on your e-liquid or pod. The NHS says it is shown in mg/ml.
            </>,
            <>How many pods or how much e-liquid you use in a typical day.</>,
            <>
              How soon after waking you vape, and how often you reach for it through the day.
            </>,
            <>Whether you also smoke cigarettes.</>,
          ]}
        />
        <P>
          The{" "}
          <Link className={LINK} href="/tools/nicotine-patch-plan">
            nicotine patch plan
          </Link>{" "}
          works from cigarettes per day, so use it only if you smoke too. Tracking your vaping for a
          few days gives you real numbers to share.
        </P>
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        Blou supports quitting vaping. When an urge hits, SOS craving help is one tap away, and
        your timeline shows how far you have come.
      </InlineAppCta>

      <Section id="urges" title="Using gum or a lozenge for vape urges">
        <P>
          Gum and lozenges give short bursts of nicotine through the lining of your mouth. That makes
          them a match for sudden urges. The NHS says one of the most effective ways to stop vaping
          is to switch to another fast-acting nicotine product.
        </P>
        <P>
          The NHS says you rest each one inside your cheek after chewing or sucking. Our
          guides cover the details:{" "}
          <Link className={LINK} href="/quit-smoking-with-nicotine-gum">
            how to use nicotine gum
          </Link>{" "}
          and{" "}
          <Link className={LINK} href="/quit-smoking-with-nicotine-lozenge">
            how to use the nicotine lozenge
          </Link>
          .
        </P>
      </Section>

      <Section id="how-long" title="How long should you use NRT when you quit vaping?">
        <P>
          The NHS recommends NRT for about 12 weeks, or for as long as it is needed to stop you from
          going back. When you feel ready, you cut the dose bit by bit and then stop. That advice is
          written for smoking, so ask your pharmacist what it means for you.
        </P>
        <P>
          Withdrawal after quitting vaping includes irritability, poor sleep, trouble focusing and
          strong cravings. See{" "}
          <Link className={LINK} href="/vape-withdrawal-symptoms">
            vape withdrawal symptoms
          </Link>{" "}
          and the{" "}
          <Link className={LINK} href="/quit-vaping-timeline">
            quit vaping timeline
          </Link>{" "}
          for what to expect.
        </P>
      </Section>

      <Section id="taper" title="NRT or lowering your vape strength: which first?">
        <P>
          The NHS lists two ways to quit. You can cut down slowly by lowering the nicotine strength
          of your e-liquid, spacing out your vaping sessions, and making vape-free spaces. Or you can
          quit in one step and ask about NRT.
        </P>
        <P>
          If you cut your strength and find yourself vaping more, the NHS says you may have gone too
          fast. Slipping is okay. The NHS says it can take a few tries to quit for good. Our{" "}
          <Link className={LINK} href="/quit-vaping">
            quit vaping guide
          </Link>{" "}
          walks through both plans.
        </P>
      </Section>

      <Section id="smoke-too" title="If you also smoke, or you are under 18">
        <P>
          The NHS says you should only quit vaping if you are confident you can do it without
          smoking cigarettes. If you vape and smoke, see{" "}
          <Link className={LINK} href="/vaping-and-smoking-together">
            vaping and smoking together
          </Link>
          .
        </P>
        <P>
          If you are under 18, talk to a doctor or another health professional before using any NRT.
          Smokefree Teen also suggests asking a health professional how they can help with
          withdrawal.
        </P>
        <P>
          Blou is not a medical service and does not replace advice from your doctor or pharmacist.
        </P>
      </Section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Get support while you quit vaping"
        description="Blou supports quitting vaping and smoking. SOS help is there for cravings, and every vape-free day adds to your visual timeline."
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
          This page is educational and is not medical advice. This page does not recommend vaping as a
          way to quit. Talk to a doctor or pharmacist before you start NRT.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/quit-vaping" variant="secondary">
          ← How to quit vaping
        </ButtonLink>
        <ButtonLink href="/vape-withdrawal-symptoms" variant="secondary">
          Vape withdrawal →
        </ButtonLink>
        <ButtonLink href="/combination-nrt-quit-smoking" variant="secondary">
          Combination NRT →
        </ButtonLink>
      </div>
    </div>
  );
}
