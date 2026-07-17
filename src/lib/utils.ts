import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely — dedupes conflicting utilities
 * (e.g. `px-2` + `px-4` → `px-4`) and handles conditional classes.
 *
 * This is the helper 21st.dev registry components import as `@/lib/utils`.
 * Use it everywhere you compose Tailwind classes: `cn("base", conditional && "extra")`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
