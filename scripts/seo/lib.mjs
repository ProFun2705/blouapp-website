/**
 * Shared helpers for the SEO loop scripts in scripts/seo/. Dependency-free on
 * purpose: these run from scheduled agents, so they only need Node and the
 * Composio CLI on PATH.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

export const ROOT = process.cwd();
export const SEO_DIR = join(ROOT, "seo");
export const DATA_DIR = join(SEO_DIR, "data");

export const SITE = "https://tryblou.com";
export const GSC_PROPERTY = "sc-domain:tryblou.com";

/** Composio connected-account aliases used by the loop. Override via env. */
export const ACCOUNTS = {
  gsc: process.env.SEO_GSC_ACCOUNT ?? "kreatli",
  linear: process.env.SEO_LINEAR_ACCOUNT ?? "blou-seo",
  amplitude: process.env.SEO_AMPLITUDE_ACCOUNT ?? "blou",
};

/** Loads .env.local into process.env without overriding existing values. */
export function loadEnvLocal() {
  const envPath = join(ROOT, ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (/^(["']).*\1$/.test(value)) value = value.slice(1, -1);
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

/** Runs one Composio tool and returns its `data` payload. Throws on failure. */
export function composio(slug, args, account) {
  const cliArgs = ["execute", slug, "-d", JSON.stringify(args)];
  if (account) cliArgs.push("--account", account);
  let out;
  try {
    out = execFileSync("composio", cliArgs, {
      encoding: "utf8",
      maxBuffer: 256 * 1024 * 1024,
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (err) {
    // Strip ANSI colors and keep the CLI's own one-line reason.
    const raw = `${err.stderr ?? ""}${err.stdout ?? ""}`.replace(/\x1b\[[0-9;]*m/g, "");
    const reason = (raw.match(/•\s*(.+)/) ?? [])[1] ?? raw.trim().split("\n")[0];
    throw new Error(`composio ${slug}${account ? ` (account ${account})` : ""}: ${reason}`);
  }
  let parsed = JSON.parse(out.slice(out.indexOf("{")));
  // Large responses are written to a temp file instead of stdout.
  if (parsed.storedInFile && parsed.outputFilePath) {
    parsed = JSON.parse(readFileSync(parsed.outputFilePath, "utf8"));
  }
  if (parsed.successful === false) {
    throw new Error(`${slug} failed: ${parsed.error ?? JSON.stringify(parsed).slice(0, 500)}`);
  }
  return parsed.data;
}

export function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

/** Days ago in UTC, as YYYY-MM-DD. */
export function daysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return isoDate(d);
}

export function writeJson(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

export function readJson(path, fallback = null) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, "utf8"));
}

/** Strips protocol/host, query and trailing slash: "https://tryblou.com/a/?x" -> "/a". */
export function normalizePath(url) {
  try {
    const u = new URL(url, SITE);
    const p = u.pathname.replace(/\/+$/, "");
    return p === "" ? "/" : p;
  } catch {
    return url;
  }
}

/** Parses `--flag value` and `--flag=value` pairs; bare words land in `_`. */
export function parseArgs(argv = process.argv.slice(2)) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--") continue;
    if (!a.startsWith("--")) {
      out._.push(a);
      continue;
    }
    const [k, v] = a.slice(2).split("=", 2);
    if (v !== undefined) out[k] = v;
    else if (argv[i + 1] && !argv[i + 1].startsWith("--")) out[k] = argv[++i];
    else out[k] = true;
  }
  return out;
}
