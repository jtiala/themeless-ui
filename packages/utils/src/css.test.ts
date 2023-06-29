import { cn, CSS_PREFIX } from "./css";

describe("cn", async () => {
  it("should generate scoped class name", () => {
    const className = cn("foo");
    expect(className).toBe(`${CSS_PREFIX}foo`);
  });
});
