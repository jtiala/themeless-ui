/**
 * Prefix to be used when generating CSS class names.
 */
export const CSS_PREFIX = "tui__";

/**
 * Generate scoped CSS class name.
 */
export function cn(className: string) {
  return `${CSS_PREFIX}${className}`;
}
