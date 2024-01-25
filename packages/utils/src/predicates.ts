/**
 * Checks if a value is nullish (`null` or `undefined`).
 */
export function isNullish<T>(
  value: T | undefined | null,
): value is undefined | null {
  return value === null || value === undefined;
}

/**
 * Checks if a value is not nullish (`null` or `undefined`).
 */
export function isNonNullish<T>(
  value: T | undefined | null,
): value is NonNullable<T> {
  return !isNullish(value);
}

/**
 * Checks if a value is empty, i.e., null, undefined, or an empty string or empty array.
 */
export function isEmpty<T>(
  value: T | undefined | null | unknown[],
): value is undefined | null | unknown[] {
  return (
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "string" && value.length === 0) ||
    isNullish(value)
  );
}

/**
 * Checks if a value is not empty, i.e., null, undefined, or an empty string or empty array.
 */
export function isNonEmpty<T>(
  value: T | undefined | null | unknown[],
): value is NonNullable<T> {
  return !isEmpty(value);
}
