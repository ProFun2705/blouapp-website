export default function WelcomeContentPage() {
  return (
    <article className="prose prose-zinc mx-auto max-w-3xl dark:prose-invert">
      <h1>Welcome</h1>
      <p>
        This is a starter content page. Duplicate this folder and edit the text
        to create a new page.
      </p>
      <h2>How to create a new page</h2>
      <ol>
        <li>
          Copy this folder: <code>src/app/content/welcome</code>
        </li>
        <li>
          Rename it to something like <code>src/app/content/my-new-page</code>
        </li>
        <li>
          Edit <code>page.tsx</code> to update the title and text
        </li>
        <li>
          Add it to the list in <code>src/app/content/page.tsx</code>
        </li>
      </ol>
    </article>
  );
}

