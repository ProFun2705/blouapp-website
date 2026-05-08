import { SITE_URL } from "@/lib/site";

/**
 * Minimal IndexNow client. IndexNow is supported by Bing, Yandex, Naver,
 * Seznam, and others. Submitting a URL tells search engines a page is new or
 * changed; it is NOT a guarantee of indexing, but it is dramatically faster
 * than waiting for a recrawl.
 *
 * Setup:
 * 1. Generate a random hex key (>= 8 chars). e.g. `openssl rand -hex 16`.
 * 2. Set INDEXNOW_KEY in Vercel env.
 * 3. The route at `/indexnow` will then echo the key for verification.
 * 4. Optionally set INDEXNOW_SECRET to gate POSTs to /api/indexnow with a
 *    different secret. Falls back to INDEXNOW_KEY when unset.
 */

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

export const indexNowKey = (): string | undefined => process.env.INDEXNOW_KEY;

export const indexNowSecret = (): string | undefined =>
  process.env.INDEXNOW_SECRET ?? process.env.INDEXNOW_KEY;

export type IndexNowResult =
  | { ok: true; submitted: number; status: number }
  | { ok: false; error: string; status?: number };

export async function submitToIndexNow(
  urls: string[],
): Promise<IndexNowResult> {
  const key = indexNowKey();
  if (!key) return { ok: false, error: "INDEXNOW_KEY not configured" };
  if (urls.length === 0) return { ok: true, submitted: 0, status: 200 };

  const host = new URL(SITE_URL).host;
  const body = {
    host,
    key,
    keyLocation: `${SITE_URL}/indexnow`,
    urlList: urls,
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    if (!res.ok && res.status !== 202) {
      const text = await res.text().catch(() => "");
      return {
        ok: false,
        status: res.status,
        error: `IndexNow rejected: ${res.status} ${text || res.statusText}`,
      };
    }
    return { ok: true, submitted: urls.length, status: res.status };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "IndexNow fetch failed",
    };
  }
}
