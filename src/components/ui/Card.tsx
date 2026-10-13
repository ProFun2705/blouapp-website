import type { ReactNode } from "react";

type CardProps = {
  as?: "section" | "article" | "div" | "aside" | "header";
  id?: string;
  tone?: "default" | "muted" | "accent";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
};

const tones = {
  default: "border-line bg-surface",
  muted: "border-line bg-surface-muted",
  accent: "border-accent/30 bg-accent-soft/50",
} as const;

const sizes = {
  md: "rounded-card p-6",
  lg: "rounded-panel p-6 md:p-8",
} as const;

/** The one card surface used across the site. */
export function Card({ as: Tag = "section", id, tone = "default", size = "md", className = "", children }: CardProps) {
  return (
    <Tag
      id={id}
      className={`scroll-mt-24 border shadow-card ${tones[tone]} ${sizes[size]} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wide text-accent">{children}</p>
  );
}
