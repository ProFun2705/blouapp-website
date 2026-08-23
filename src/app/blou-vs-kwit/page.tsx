import type { Metadata } from "next";
import { BlouVsPageContent } from "@/components/marketing/BlouVsPageContent";
import { BLOU_VS_PAGES } from "@/lib/competitors";
import { buildMetadata } from "@/lib/seo";

const config = BLOU_VS_PAGES.find((p) => p.path === "/blou-vs-kwit")!;

export const metadata: Metadata = buildMetadata({
  title: config.metaTitle,
  description: config.metaDescription,
  path: config.path,
  type: "article",
  publishedTime: config.published,
  modifiedTime: config.modified,
  keywords: [
    "blou vs kwit",
    "kwit vs blou",
    "kwit app review",
    "best quit smoking app",
    "quit smoking app comparison",
  ],
});

export default function BlouVsKwitPage() {
  return <BlouVsPageContent config={config} />;
}
