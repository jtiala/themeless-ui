import { describe, expect, it } from "vitest";
import { isEmpty, isNonEmpty, isNonNullish, isNullish } from "./predicates";

describe("isNullish", async () => {
  it("should check for nullish value", () => {
    expect(isNullish(null)).toBe(true);
    expect(isNullish(undefined)).toBe(true);
    expect(isNullish(false)).toBe(false);
    expect(isNullish("")).toBe(false);
    expect(isNullish(0)).toBe(false);
  });
});

describe("isNonNullish", async () => {
  it("should check for non-nullish value", () => {
    expect(isNonNullish(null)).toBe(false);
    expect(isNonNullish(undefined)).toBe(false);
    expect(isNonNullish(false)).toBe(true);
    expect(isNonNullish("")).toBe(true);
    expect(isNonNullish(0)).toBe(true);
  });
});

describe("isEmpty", async () => {
  it("should check for empty value", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty("")).toBe(true);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([0])).toBe(false);
  });
});

describe("isNonEmpty", async () => {
  it("should check for empty value", () => {
    expect(isNonEmpty(null)).toBe(false);
    expect(isNonEmpty(undefined)).toBe(false);
    expect(isNonEmpty(false)).toBe(true);
    expect(isNonEmpty("")).toBe(false);
    expect(isNonEmpty(0)).toBe(true);
    expect(isNonEmpty([])).toBe(false);
    expect(isNonEmpty([0])).toBe(true);
  });
});
