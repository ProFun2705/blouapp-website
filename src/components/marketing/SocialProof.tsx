type SocialProofProps = {
  compact?: boolean;
};

const testimonials = [
  {
    quote:
      "The streak + savings view is the only thing that got me past week two. I kept opening it instead of reaching for a pack.",
    name: "Ethan",
    location: "London, UK",
    day: "Day 112 smoke-free",
  },
  {
    quote:
      "Pack-a-day for 15 years. Seeing what I'd saved after one month made me ugly-cry. I haven't looked back.",
    name: "Marta",
    location: "Austin, USA",
    day: "Day 214 smoke-free",
  },
  {
    quote:
      "The craving timer works. 3 minutes always feels like forever in the middle and nothing right after.",
    name: "Takeshi",
    location: "Sydney, Australia",
    day: "Day 47 smoke-free",
  },
] as const;

const rating = { stars: 4.8, reviews: 420 };

export function SocialProof({ compact = false }: SocialProofProps) {
  return (
    <section
      aria-label="Social proof"
      className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            aria-label={`Rated ${rating.stars} out of 5 on the App Store`}
            className="flex items-center gap-1 text-amber-500"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                aria-hidden
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
              >
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-sm font-medium text-teal-950">
            {rating.stars} on the App Store
          </p>
          <p className="text-sm text-teal-900/70">
            from {rating.reviews}+ quitters
          </p>
        </div>
        <p className="text-xs text-teal-900/60">iOS · Free to download</p>
      </div>

      {compact ? null : (
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="rounded-xl border border-teal-200 bg-teal-50/40 p-4"
            >
              <p className="text-sm leading-6 text-teal-950">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-3 text-xs font-medium text-teal-800">
                {t.name} · {t.location}
              </p>
              <p className="text-[11px] text-teal-700">{t.day}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
