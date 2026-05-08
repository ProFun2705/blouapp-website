import { indexNowKey } from "@/lib/indexnow";

export const dynamic = "force-static";

/**
 * IndexNow key verification file. IndexNow fetches this URL when verifying that
 * we control the host. We expose the key (set in INDEXNOW_KEY env var) as plain
 * text. `keyLocation` in our submission payload points here. If the env var is
 * missing this returns 404 so a misconfiguration is loud, not silent.
 */
export function GET() {
  const key = indexNowKey();
  if (!key) {
    return new Response("INDEXNOW_KEY not configured", { status: 404 });
  }
  return new Response(key, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
