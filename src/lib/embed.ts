/**
 * Builds embed code for a Blou tool: the iframe plus a plain attribution link.
 * The link (not the iframe) is what gives the embedding site's readers, and
 * search engines, a path back to the tool.
 */
export function buildEmbedCode({
  url,
  title,
  height,
}: {
  url: string;
  title: string;
  height: number;
}): string {
  return [
    `<iframe src="${url}" width="100%" height="${height}" style="border:1px solid #b9e4da;border-radius:16px;" title="${title}" loading="lazy"></iframe>`,
    `<p style="font-size:13px;margin-top:6px;"><a href="${url.split("?")[0]}">${title}</a> by Blou</p>`,
  ].join("\n");
}
