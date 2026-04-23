import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Bloü",
    default: "Bloü",
  },
  description:
    "Quit smoking guides, tools, and calculators. Structure your quit with Bloü.",
};

export default function BlouLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
