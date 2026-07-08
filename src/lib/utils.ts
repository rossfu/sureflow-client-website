/** Tiny class-name join — avoids a dependency for one function. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
