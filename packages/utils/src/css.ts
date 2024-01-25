import { isNonEmpty, isNullish } from "./predicates";

/**
 * Prefix to be used when generating scoped CSS class names.
 */
export const CSS_PREFIX = "tui__";

/**
 * Generate scoped CSS class name.
 */
export function cn(className: string) {
  return `${CSS_PREFIX}${className}`;
}

type CnsArgument =
  | undefined
  | null
  | false
  | string
  | { [key: string]: boolean }
  | CnsArgument[];

/**
 * Construct CSS class name string conditionally.
 */
export function cns(...args: CnsArgument[]) {
  return args.reduce<string>((acc, arg): string => {
    if (isNullish(arg) || arg === false) {
      return acc;
    } else if (Array.isArray(arg)) {
      return [acc, arg.map((a) => cns(a)).join(" ")]
        .filter(isNonEmpty)
        .join(" ");
    } else if (typeof arg === "object") {
      return [
        acc,
        Object.entries(arg).reduce<string>((a, [k, v]): string => {
          return v ? [a, k].filter(isNonEmpty).join(" ") : a;
        }, ""),
      ]
        .filter(isNonEmpty)
        .join(" ");
    }

    return [acc, arg].filter(isNonEmpty).join(" ");
  }, "");
}
