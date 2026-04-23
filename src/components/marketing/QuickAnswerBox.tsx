type QuickAnswerBoxProps = {
  answer: string;
  facts: string[];
  label?: string;
};

export function QuickAnswerBox({
  answer,
  facts,
  label = "Quick answer",
}: QuickAnswerBoxProps) {
  return (
    <aside
      className="rounded-2xl border border-teal-300 bg-teal-50/80 p-5 shadow-sm"
      data-speakable="true"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
        {label}
      </p>
      <p className="mt-2 text-base leading-7 text-teal-950">{answer}</p>
      {facts.length ? (
        <ul className="mt-4 space-y-1.5 text-sm leading-6 text-teal-900">
          {facts.map((fact) => (
            <li key={fact} className="flex gap-2">
              <span aria-hidden className="mt-1 text-teal-600">•</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}
