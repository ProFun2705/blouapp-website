import type { Metadata } from "next";
import { BlouVsPageContent } from "@/components/marketing/BlouVsPageContent";
import { BLOU_VS_PAGES } from "@/lib/competitors";
import { buildMetadata } from "@/lib/seo";

const config = BLOU_VS_PAGES.find((p) => p.path === "/blou-vs-quitstart")!;

export const metadata: Metadata = buildMetadata({
  title: config.metaTitle,
  description: config.metaDescription,
  path: config.path,
  type: "article",
  publishedTime: config.published,
  modifiedTime: config.modified,
  keywords: [
    "blou vs quitstart",
    "quitstart vs blou",
    "cdc quit app",
    "quit smoking app comparison",
  ],
});

export default function BlouVsQuitstartPage() {
  return <BlouVsPageContent config={config} />;
}
