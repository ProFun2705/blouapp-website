## TryBlou website

This is the TryBlou website (Next.js + Vercel).

## Getting Started

### Preview locally (in Cursor)

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

### Where to edit content

- **Home**: `src/app/page.tsx`
- **About**: `src/app/about/page.tsx`
- **Content index**: `src/app/content/page.tsx`
- **A content page example**: `src/app/content/welcome/page.tsx`

### Add a new page (recommended simplest workflow)

Create a folder and a `page.tsx` file:

- `src/app/my-new-page/page.tsx` → shows at `https://your-domain.com/my-new-page`

### Publish updates (Vercel)

1. Make your edits in Cursor
2. Verify it builds:

```bash
npm run build
```

3. Commit + push:

```bash
git add .
git commit -m "Update content"
git push
```

Vercel will redeploy automatically after every push to `main`.

### Deployed URLs

- Vercel: `https://blouapp-website.vercel.app`
- Domain (after DNS is set): `https://tryblou.com` and `https://www.tryblou.com`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
