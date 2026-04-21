export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-black">
        <h1 className="text-4xl font-semibold tracking-tight">TryBlou</h1>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This is your new website, deployed on Vercel and connected to your
          domain. Add new pages by creating folders under{" "}
          <code className="rounded bg-black/5 px-1.5 py-0.5 text-sm dark:bg-white/10">
            src/app
          </code>
          .
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
            href="/content"
          >
            View content
          </a>
          <a
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 px-5 text-sm font-medium hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
            href="/about"
          >
            About
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <h2 className="text-lg font-semibold">Add a new page</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Create a new folder like{" "}
            <code className="rounded bg-black/5 px-1.5 py-0.5 text-xs dark:bg-white/10">
              src/app/your-page/page.tsx
            </code>{" "}
            and it will appear at <code>/your-page</code>.
          </p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <h2 className="text-lg font-semibold">Publish updates</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            After editing, commit and push to GitHub. Vercel automatically
            rebuilds and publishes your changes.
          </p>
        </div>
      </section>
    </div>
  );
}
