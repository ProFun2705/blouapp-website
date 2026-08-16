export function SocialProof({ compact = false }: { compact?: boolean }) {
  return (
    <section aria-label="App Store" className="section-block">
      <p className="text-sm font-medium text-teal-800">iPhone · App Store</p>
      <p className="mt-2 max-w-[65ch] text-base leading-7 text-teal-950">
        Blou is free to download on the App Store. Open it on a craving, mark
        the day, and keep the streak where you can see it.
      </p>
      {compact ? null : (
        <p className="mt-3 max-w-[65ch] text-sm leading-6 text-teal-900/80">
          We do not print star ratings here until the App Store shows a public
          overview. The product is the tracker, not a quote wall.
        </p>
      )}
    </section>
  );
}
