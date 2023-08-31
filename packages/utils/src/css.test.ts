import { describe, expect, it } from "vitest";
import { CSS_PREFIX, cn } from "./css";

describe("cn", async () => {
  it("should generate scoped class name", () => {
    const className = cn("foo");
    expect(className).toBe(`${CSS_PREFIX}foo`);
  });
});
