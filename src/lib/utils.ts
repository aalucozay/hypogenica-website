/**
 * Minimal className combiner (shadcn's `cn`). We don't pull in clsx /
 * tailwind-merge since the project has no conflicting-class merge needs yet;
 * a simple truthy join is enough.
 */
export function cn(
  ...classes: Array<string | number | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
