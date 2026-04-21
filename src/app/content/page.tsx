const items = [
  {
    title: "Welcome post",
    description: "A starter page you can copy to create more content.",
    href: "/content/welcome",
    date: "2026-04-21",
  },
];

export default function ContentIndexPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <h1>Content</h1>
        <p>
          Add more items by creating a new folder under{" "}
          <code>src/app/content/&lt;slug&gt;/page.tsx</code>.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-black"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {item.date}
              </span>
            </div>
            <div className="mt-4 text-sm font-medium text-zinc-900 group-hover:underline dark:text-zinc-100">
              Read →
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

