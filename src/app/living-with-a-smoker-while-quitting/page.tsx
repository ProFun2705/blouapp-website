import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";

const PUBLISHED = "2026-05-14";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_living-with-a-smoker-while-quitting";

export const metadata: Metadata = buildMetadata({
  title: "Living with a smoker while quitting: set boundaries",
  description:
    "If someone at home still smokes, you need air rules, emotional boundaries, and a craving plan that does not depend on their behavior.",
  path: "/living-with-a-smoker-while-quitting",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "living with a smoker quit smoking",
    "quit smoking partner smokes",
    "household smoking quit",
    "secondhand smoke quitting",
  ],
});

const faqItems = [
  {
    question: "Can I quit if my partner will not?",
    answer:
      "Yes, but your plan must assume cues will remain. Outdoor-only smoking rules, air filtration where appropriate, and agreed storage can reduce trigger load—negotiate calmly, not mid-craving.",
  },
  {
    question: "Is secondhand smoke dangerous if I already quit?",
    answer:
      "Secondhand smoke still harms health. Public-health guidance is to make indoor spaces smoke-free. For medical specifics, see CDC/WHO resources.",
  },
  {
    question: "What if they mock my quit attempt?",
    answer:
      "Reduce debate moments; lean on external support (quitline, friend, app community elsewhere). Your quit does not require their endorsement.",
  },
  {
    question: "How can Blou help?",
    answer:
      "Blou gives you a private space on your own phone when home feels high-friction: SOS craving help when someone lights up nearby, and one visual timeline of your own milestones.",
  },
];

export default function LivingWithASmokerWhileQuittingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Living with a smoker while quitting: boundaries that work",
    description:
      "How to quit smoking when someone you live with still smokes.",
    path: "/living-with-a-smoker-while-quitting",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          {
            name: "Living with a smoker while quitting",
            path: "/living-with-a-smoker-while-quitting",
          },
        ]}
      />

      <ArticleHeader
        kicker="Household triggers"
        title="Living with a smoker while quitting"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/how-to-help-someone-quit-smoking" variant="secondary">
            If you are the supporter →
          </ButtonLink>
        }
      >
        <p>
          Your quit is still yours. The goal is to shrink sensory reminders you
          control and build a craving protocol that works even when someone else
          lights up on the porch.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "boundaries", label: "House rules" },
          { id: "escape", label: "Escape hatches" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Negotiate smoke-free indoor air, agreed outdoor smoking spots, and no ashtrays in shared spaces. Pair environmental changes with a personal craving loop you can run without arguing—timer, walk, quitline, app."
          facts={[
            "If negotiation fails, prioritize leaving the room over debating mid-urge.",
            "See /trying-to-quit-smoking-again if this context broke a past attempt.",
          ]}
        />
      </section>

      <section id="boundaries" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">House rules</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Write three rules you both can live with. Revisit after week one when
          withdrawal noise drops. Link out:{" "}
          <Link className="font-medium text-teal-800 underline" href="/social-smoking">
            social smoking
          </Link>{" "}
          if weekends are the friction.
        </p>
      </section>

      <section id="escape" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Escape hatches</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Pre-pick a nearby walk loop, a friend to text, and a “I’m stepping out
          for 5” script that is socially acceptable. Combine with{" "}
          <Link className="font-medium text-teal-800 underline" href="/stress-smoking-quit-plan">
            stress plan
          </Link>
          .
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        When someone lights up on the porch, Blou&apos;s SOS craving help gives
        you something to do besides argue, and your milestones stay on one
        visual timeline that is yours alone.
      </InlineAppCta>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/prepare-to-quit-smoking" variant="secondary">
          Prep checklist →
        </ButtonLink>
      </div>
    </div>
  );
}
