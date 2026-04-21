export default function AboutPage() {
  return (
    <div className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>About</h1>
      <p>
        This site is built with Next.js and deployed on Vercel. You can edit
        pages in Cursor and publish updates by pushing to GitHub.
      </p>
      <h2>Where to edit</h2>
      <ul>
        <li>
          Home page: <code>src/app/page.tsx</code>
        </li>
        <li>
          This page: <code>src/app/about/page.tsx</code>
        </li>
        <li>
          Content index: <code>src/app/content/page.tsx</code>
        </li>
      </ul>
    </div>
  );
}

