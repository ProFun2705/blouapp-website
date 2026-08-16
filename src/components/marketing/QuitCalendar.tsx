type QuitCalendarProps = {
  markedDays?: number;
  caption?: string;
};

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"] as const;

export function QuitCalendar({
  markedDays = 12,
  caption = "Example: 12 days marked smoke-free.",
}: QuitCalendarProps) {
  const cells = Array.from({ length: 28 }, (_, index) => index + 1);

  return (
    <figure className="w-full max-w-sm">
      <div className="border border-teal-200 bg-teal-50">
        <div className="flex items-center justify-between bg-[var(--ink)] px-4 py-3 text-white">
          <p className="text-sm font-semibold tracking-tight">This month</p>
          <p className="tabular text-sm text-white/70">{markedDays} marked</p>
        </div>
        <div className="grid grid-cols-7 border-b border-teal-200 text-center text-[11px] font-medium text-teal-700">
          {WEEKDAYS.map((day, index) => (
            <span key={`${day}-${index}`} className="py-2">
              {day}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {cells.map((day) => {
            const marked = day <= markedDays;
            const today = day === markedDays + 1;
            return (
              <div
                key={day}
                className={[
                  "relative aspect-square border-r border-b border-teal-200 p-1",
                  today ? "bg-white" : "",
                ].join(" ")}
              >
                <span className="tabular text-[11px] text-teal-800">{day}</span>
                {marked ? (
                  <span
                    aria-hidden
                    className="cal-x absolute inset-0 flex items-center justify-center text-2xl"
                  >
                    ×
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <figcaption className="mt-2 text-xs text-teal-900/70">{caption}</figcaption>
    </figure>
  );
}
