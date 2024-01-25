import { describe, expect, it } from "vitest";
import { CSS_PREFIX, cn, cns } from "./css";

describe("cn", async () => {
  it("should generate scoped class name", () => {
    expect(cn("foo")).toBe(`${CSS_PREFIX}foo`);
  });
});

describe("cns", async () => {
  it("should generate correct set of class names", () => {
    expect(cns(false)).toBe("");
    expect(cns(undefined)).toBe("");
    expect(cns(null)).toBe("");
    expect(cns("a")).toBe("a");
    expect(cns("a", "b")).toBe("a b");
    expect(cns(["a", "b"])).toBe("a b");
    expect(cns("a", ["b", "c"], "d")).toBe("a b c d");
    expect(cns({ a: true, b: false, c: true })).toBe("a c");
    expect(cns("a", { b: false, c: true }, "d")).toBe("a c d");
    expect(
      cns({ a: true, b: false, c: true }, undefined, "d", false, ["e f"], null),
    ).toBe("a c d e f");
  });
});
