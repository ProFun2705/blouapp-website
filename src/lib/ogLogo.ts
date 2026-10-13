import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** The real app icon as a data URL, for use inside `ImageResponse` OG images. */
export async function ogLogoDataUrl(): Promise<string> {
  const png = await readFile(join(process.cwd(), "public/logos/blou-logo.png"));
  return `data:image/png;base64,${png.toString("base64")}`;
}
