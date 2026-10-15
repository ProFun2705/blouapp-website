import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { LungsComparisonIllustration } from "@/components/blou/LungsComparisonIllustration";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-10-15";
const MODIFIED = "2026-10-15";
const CAMPAIGN = "article_smokers-lungs-vs-healthy-lungs";
const PATH = "/smokers-lungs-vs-healthy-lungs";
const TITLE = "Smokers' lungs vs healthy lungs: what's different";
const DESCRIPTION =
  "Smokers' lungs vs healthy lungs: how tar, cilia, mucus and air sacs differ, what heals after you quit, and what we know about vapers' lungs.";

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
    "smokers lungs vs healthy lungs",
    "healthy lung vs smoker lung",
    "vapers lung vs healthy lung",
    "what do smokers lungs look like",
    "smokers lungs after quitting",
  ],
});

const sources = [
  {
    name: "How smoking impacts your lung health",
    publisher: "American Lung Association",
    url: "https://www.lung.org/quit-smoking/smoking-facts/how-smoking-impacts-your-lung-health",
  },
  {
    name: "Health effects of smoking",
    publisher: "American Lung Association",
    url: "https://www.lung.org/quit-smoking/smoking-facts/health-effects/smoking",
  },
  {
    name: "Smoking: effects, risks, diseases, quitting and solutions",
    publisher: "Cleveland Clinic",
    url: "https://my.clevelandclinic.org/health/articles/17488-smoking",
  },
  {
    name: "COPD",
    publisher: "National Heart, Lung, and Blood Institute (NIH)",
    url: "https://www.nhlbi.nih.gov/health/copd",
  },
  {
    name: "Emphysema",
    publisher: "MedlinePlus (US National Library of Medicine)",
    url: "https://medlineplus.gov/emphysema.html",
  },
  {
    name: "What could happen when you quit smoking",
    publisher: "NHS (UK)",
    url: "https://www.nhs.uk/better-health/quit-smoking/ready-to-quit-smoking/what-could-happen-when-you-quit-smoking/",
  },
  {
    name: "Using e-cigarettes to stop smoking",
    publisher: "NHS (UK)",
    url: "https://www.nhs.uk/live-well/quit-smoking/using-e-cigarettes-to-stop-smoking/",
  },
  {
    name: "Health benefits of quitting smoking",
    publisher: "Quit (Cancer Council Victoria, Australia)",
    url: "https://www.quit.org.au/articles/health-benefits-of-quitting-smoking",
  },
  {
    name: "Effects of vaping on the body",
    publisher: "Quit (Cancer Council Victoria, Australia)",
    url: "https://www.quit.org.au/en/why-quit/effects-of-vaping-on-the-body",
  },
  {
    name: "Benefits of quitting",
    publisher: "US Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/tobacco/about/benefits-of-quitting.html",
  },
  {
    name: "COPD (Tips From Former Smokers)",
    publisher: "US Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/tobacco/campaign/tips/diseases/copd.html",
  },
  {
    name: "Health effects of vaping",
    publisher: "US Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/tobacco/e-cigarettes/health-effects.html",
  },
  {
    name: "Vaping devices (electronic cigarettes) DrugFacts",
    publisher: "National Institute on Drug Abuse (NIH)",
    url: "https://nida.nih.gov/publications/drugfacts/vaping-devices-electronic-cigarettes",
  },
  {
    name: "Tackett AP et al. Prospective study of e-cigarette use and respiratory symptoms in adolescents and young adults. Thorax. 2024",
    publisher: "PubMed 37582630",
    url: "https://pubmed.ncbi.nlm.nih.gov/37582630/",
  },
  {
    name: "Yoshida K et al. Tobacco exposure and somatic mutations in normal human bronchial epithelium. Nature. 2020",
    publisher: "PMC7021511",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7021511/",
  },
] as const;

const faqItems = [
  {
    question: "What is the difference between smokers' lungs and healthy lungs?",
    answer:
      "Healthy lungs are pink, with open airways, working cilia, and millions of small, stretchy air sacs. A smoker's lungs carry tar, have paralysed cilia, inflamed airways with extra mucus, and, over time, damaged air sacs that can become emphysema. Smoking also causes most lung cancer: the American Lung Association links it to about 90% of lung cancer deaths.",
  },
  {
    question: "What does a smoker's lung look like compared with a healthy lung?",
    answer:
      "In an American Lung Association video comparing real lungs, the healthy lung has a pink colour and the smoker's lung looks blackened. The same video says a pack a day for a year filters about a cup of tar through the lungs. Most of the harm, though, is in the airways and air sacs, not just the colour.",
  },
  {
    question: "Can a smoker's lungs go back to healthy?",
    answer:
      "Partly. Cleveland Clinic says inflammation and mucus calm down in the weeks after quitting and the cilia regenerate within a few months, and the NHS says lung function can rise by up to 10% within 9 months. Emphysema and COPD do not reverse. See /can-lungs-heal-after-smoking for the full timeline.",
  },
  {
    question: "What does a vaper's lung look like compared with a healthy lung?",
    answer:
      "There is no reliable picture of a typical vaper's lung yet. Vaping is newer than smoking and long-term studies are still going. The NHS says e-cigarettes do not produce tar or carbon monoxide, but the CDC says the aerosol can contain fine particles, heavy metals and cancer-causing chemicals, and a 2024 study linked vaping to more bronchitis-type symptoms and shortness of breath.",
  },
  {
    question: "Is vaping better for your lungs than smoking?",
    answer:
      "For someone who smokes, the NHS says vaping carries a small fraction of the risk of smoking, but it is not risk-free and its long-term risks are not yet clear. For someone who doesn't smoke, there is no lung benefit to starting. The CDC also says using both may be worse for the lungs than either alone.",
  },
  {
    question: "Do smokers' lungs turn pink again after quitting?",
    answer:
      "No trusted source gives a timeline for the colour of the lungs. What is measured is function: cilia, mucus, cough and breathing improve over weeks to months, and lung cancer risk halves after 10–15 years, per the CDC and Quit.",
  },
];

export default function SmokersLungsVsHealthyLungsPage() {
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

      <Breadcrumbs items={[{ name: "Smokers' lungs vs healthy lungs", path: PATH }]} />

      <ArticleHeader
        kicker="Lung recovery"
        title="Smokers' lungs vs healthy lungs"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/can-lungs-heal-after-smoking" variant="secondary">
            Can lungs heal? →
          </ButtonLink>
        }
      >
        <p>
          Updated October 2026. A healthy lung is pink, open and self-cleaning. A smoker&apos;s
          lung carries tar, has paralysed cleaning hairs (cilia), inflamed airways full of mucus,
          and, over time, broken-down air sacs. Here is what each difference means, which ones heal
          after you quit, and what is known so far about vapers&apos; lungs.
        </p>
      </ArticleHeader>

      <LungsComparisonIllustration />

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "differences", label: "Six differences, side by side" },
          { id: "after-quitting", label: "What changes after you quit" },
          { id: "vaping", label: "Vapers' lungs vs healthy lungs" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Healthy lungs are pink, with open airways, working cilia and millions of small, elastic air sacs. Smokers' lungs look darker from tar, their cilia are paralysed, their airways are inflamed and clogged with mucus, and their air sacs can break down into emphysema. Inflammation, mucus and cilia recover after quitting; emphysema does not."
          facts={[
            "American Lung Association: smoking causes about 90% of lung cancer deaths and about 80% of COPD deaths.",
            "Cleveland Clinic: tar and hydrogen cyanide in smoke paralyse the cilia.",
            "MedlinePlus: there is no cure for emphysema, and quitting is the most important step.",
          ]}
        />
      </section>

      <section
        id="differences"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Healthy lung vs smoker&apos;s lung: six differences
        </h2>

        <div className="mt-5 space-y-5">
          <div>
            <h3 className="text-base font-semibold text-teal-950">1. Colour and tar</h3>
            <p className="mt-1 text-sm leading-7 text-teal-900/90">
              In an American Lung Association video comparing real lungs, the healthy lung has a
              pink colour and the smoker&apos;s lung has a blackened look. The respiratory therapist
              in the video says one pack a day for one year filters about a cup of tar through your
              lungs. Tar is the sticky residue in smoke; Cleveland Clinic notes it also coats the
              throat, stains teeth and coats the gums and tongue.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-teal-950">2. Cilia, the lung&apos;s cleaning crew</h3>
            <p className="mt-1 text-sm leading-7 text-teal-900/90">
              Your airways are lined with tiny hair-like cilia that sweep germs, dust and mucus up
              and out. Cleveland Clinic says tar and hydrogen cyanide in smoke paralyse them, which
              makes chest infections more likely. In a healthy lung they beat constantly; in a
              smoker&apos;s lung the clean-up stalls.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-teal-950">3. Mucus</h3>
            <p className="mt-1 text-sm leading-7 text-teal-900/90">
              Smoke irritates the airways, and Cleveland Clinic explains that this irritation causes
              inflammation and mucus to form. With the cilia slowed, that mucus sits in the airways,
              which is where the classic smoker&apos;s cough comes from. When the irritation goes on
              for years, it can become chronic bronchitis: the NHLBI describes ongoing swelling of the
              airway lining with a lot of thick mucus that makes breathing hard.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-teal-950">4. Air sacs (alveoli) and emphysema</h3>
            <p className="mt-1 text-sm leading-7 text-teal-900/90">
              At the ends of the airways are millions of tiny air sacs called alveoli (American Lung
              Association). The NHLBI says healthy air sacs are elastic: they inflate as you
              breathe in and deflate as you breathe out. In emphysema the walls between the sacs are
              damaged. MedlinePlus says they lose their shape and become floppy, and the NHLBI says
              damaged sacs make it harder to push air out. The magnified circles in the illustration show this: many small sacs
              in the healthy lung, fewer and larger merged spaces in the damaged one.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-teal-950">5. Inflammation and narrowed airways</h3>
            <p className="mt-1 text-sm leading-7 text-teal-900/90">
              Smoke keeps irritating the airway lining. In chronic bronchitis, the NHLBI describes
              ongoing irritation and swelling of that lining. The CDC says COPD, which includes
              emphysema and chronic bronchitis, may cause no symptoms or only mild ones at first,
              so damage can build before you notice it. The American Lung Association says smoking
              causes about 80% of COPD deaths.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-teal-950">6. Cancer</h3>
            <p className="mt-1 text-sm leading-7 text-teal-900/90">
              The American Lung Association says cigarette smoke contains more than 7,000 chemicals,
              at least 69 of which are known to cause cancer, and that smoking is directly
              responsible for about 90% of lung cancer deaths. At a cellular level, a 2020 study in{" "}
              <em>Nature</em> found smoking typically added 1,000 to 10,000 mutations to each airway
              cell it studied.
            </p>
          </div>
        </div>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        You can&apos;t see inside your own lungs, but you can track how they work. Blou&apos;s lung
        checks are simple breath checks you repeat over time, so you can watch your breathing change
        after you quit.
      </InlineAppCta>

      <section
        id="after-quitting"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What changes in a smoker&apos;s lungs after quitting
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Of the six differences above, the first three heal the most. Here is what UK, Australian
          and US health services say:
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>48 hours:</strong> lungs start clearing out mucus (NHS).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Weeks:</strong> inflammation and mucus production calm down (Cleveland Clinic).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>A few months:</strong> cilia regenerate (Cleveland Clinic). Within three months
              you cough and wheeze less, and your lungs clear mucus, tar and dust better (Quit).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>3–9 months:</strong> lung function rises by up to 10% (NHS).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Years:</strong> ex-smokers have four times as many healthy, low-mutation airway
              cells as current smokers (<em>Nature</em>, 2020). Added lung cancer risk halves after
              10–15 years (CDC).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-slate-500">•</span>
            <span>
              <strong>What stays:</strong> the American Lung Association describes emphysema as not
              reversible, and Cleveland Clinic says COPD and pulmonary fibrosis are irreversible.
              Quitting slows further damage.
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          For the month-by-month detail and what to expect after 5, 10, 20 or 30 years of smoking,
          read{" "}
          <Link className={linkClass} href="/can-lungs-heal-after-smoking">
            can your lungs heal from smoking?
          </Link>{" "}
          or use the{" "}
          <Link className={linkClass} href="/tools/lung-recovery">
            lung recovery timeline tool
          </Link>
          . If your cough gets worse at first, that is often the cilia waking up; see{" "}
          <Link className={linkClass} href="/guides/cough">
            cough after quitting
          </Link>{" "}
          and{" "}
          <Link className={linkClass} href="/guides/chest-tightness">
            chest tightness after quitting
          </Link>
          .
        </p>
      </section>

      <section
        id="vaping"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Vapers&apos; lungs vs healthy lungs</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          This is where the honest answer is &quot;we don&apos;t fully know yet&quot;. Vapes have not
          been around long enough for decades-long studies, and the CDC says scientists are still
          learning about both the immediate and the long-term effects. What the evidence says so far:
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>No tar, but not clean air.</strong> The NHS says e-cigarettes do not produce
              tar or carbon monoxide, two of the most harmful parts of tobacco smoke. The CDC says
              vape aerosol can still contain tiny particles that reach deep into the lungs, heavy
              metals, and cancer-causing chemicals.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Breathing symptoms.</strong> A 2024 study in <em>Thorax</em> that followed
              adolescents and young adults found that current vaping was linked to more
              bronchitis-type symptoms and shortness of breath, even after accounting for cigarette
              and cannabis use. It is an observational study, so it shows a link, not proof of cause. Quit (Australia) says some people who vape show signs of lung damage and
              reduced lung function.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Serious lung injury is possible.</strong> The NIH&apos;s National Institute on
              Drug Abuse describes lung illnesses and deaths linked to vaping certain oils. It notes
              that the CDC identified vitamin E acetate, a thickening agent, as a chemical of concern,
              and that the CDC and FDA advise against THC vaping products.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Compared with smoking.</strong> The NHS says vaping carries a small fraction of
              the risk of smoking but is not risk-free. The CDC says using both vapes and cigarettes
              may expose you to more toxins, with worse lung outcomes, than either alone. See{" "}
              <Link className={linkClass} href="/vaping-and-smoking-together">
                vaping and smoking together
              </Link>
              .
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          If you want to stop vaping, see{" "}
          <Link className={linkClass} href="/quit-vaping-timeline">
            the quit vaping timeline
          </Link>{" "}
          and{" "}
          <Link className={linkClass} href="/vape-withdrawal-symptoms">
            vape withdrawal symptoms
          </Link>
          . Blou tracks cigarettes and nicotine pouches, not vaping.
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
          This page is educational, not medical advice. The illustration is a simplified drawing,
          not a medical image. If you are worried about your lungs, talk to your doctor, GP or
          pharmacist.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/can-lungs-heal-after-smoking" variant="secondary">
          Can lungs heal after smoking? →
        </ButtonLink>
        <ButtonLink href="/health-benefits-of-quitting-smoking" variant="secondary">
          Health benefits of quitting →
        </ButtonLink>
      </div>
    </div>
  );
}
