import type { ReactNode } from "react";
import Link from "next/link";

type Choice = {
  id: string;
  title: string;
  items: ReactNode[];
};

type ComparisonChoicesProps = {
  left: Choice;
  right: Choice;
};

export function ComparisonChoices({ left, right }: ComparisonChoicesProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {[left, right].map((choice) => (
        <section key={choice.id} id={choice.id} className="section-block scroll-mt-24 md:border-t-0 md:pt-0">
          <h2 className="text-xl font-semibold text-teal-950">{choice.title}</h2>
          <ul className="mt-4 space-y-2 text-base leading-7 text-teal-900/90">
            {choice.items.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span aria-hidden className="cal-x mt-0.5 text-lg">
                  ×
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

type ComparisonRow = {
  label: string;
  a: string;
  b: string;
};

type ComparisonTableProps = {
  id?: string;
  title: string;
  columnA: string;
  columnB: string;
  rows: ComparisonRow[];
};

export function ComparisonTable({
  id,
  title,
  columnA,
  columnB,
  rows,
}: ComparisonTableProps) {
  return (
    <section id={id} className="section-block scroll-mt-24">
      <h2 className="text-xl font-semibold text-teal-950">{title}</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-teal-200">
              <th className="py-3 pr-4 font-semibold text-teal-950"> </th>
              <th className="py-3 pr-4 font-semibold text-teal-950">{columnA}</th>
              <th className="py-3 font-semibold text-teal-950">{columnB}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-teal-200/80">
                <th className="py-3 pr-4 font-medium text-teal-800">{row.label}</th>
                <td className="py-3 pr-4 text-teal-900/90">{row.a}</td>
                <td className="py-3 text-teal-900/90">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
      href={href}
    >
      {children}
    </Link>
  );
}
