import type { Metadata } from "next";
import { CompetitorPairPageContent } from "@/components/marketing/CompetitorPairPageContent";
import { COMPETITOR_PAIR_PAGES } from "@/lib/competitors";
import { buildMetadata } from "@/lib/seo";

const config = COMPETITOR_PAIR_PAGES.find((p) => p.path === "/kwit-vs-quitnow")!;

export const metadata: Metadata = buildMetadata({
  title: config.metaTitle,
  description: config.metaDescription,
  path: config.path,
  type: "article",
  publishedTime: config.published,
  modifiedTime: config.modified,
  keywords: ["kwit vs quitnow", "quitnow vs kwit", "quit smoking app comparison"],
});

export default function KwitVsQuitnowPage() {
  return <CompetitorPairPageContent config={config} />;
}
