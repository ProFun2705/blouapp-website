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
      className="border-l-2 border-teal-600 bg-teal-50/60 px-5 py-4"
      data-speakable="true"
    >
      <p className="text-sm font-medium text-teal-800">{label}</p>
      <p className="mt-2 max-w-[65ch] text-base leading-7 text-teal-950">
        {answer}
      </p>
      {facts.length ? (
        <ul className="mt-4 space-y-1.5 text-sm leading-6 text-teal-900">
          {facts.map((fact) => (
            <li key={fact} className="flex gap-2">
              <span aria-hidden className="cal-x">
                ×
              </span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}
