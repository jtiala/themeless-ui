import { expect, test } from "@playwright/test";

test("should render the home page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL("/");
  await expect(page.locator("h1")).toContainText("All posts");
  await expect(page.locator("h2")).toContainText(
    "ThemelessUI Next.js Example App",
  );
});
