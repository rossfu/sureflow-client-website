/** Tiny class-name join — avoids a dependency for one function. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Prefixes a public-asset path with NEXT_PUBLIC_BASE_PATH, mirroring the
 * `basePath` in next.config.ts. Needed for unoptimized next/image sources,
 * which don't get basePath auto-prepended the way Link/Script do.
 */
export function withBasePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
