import { expect, test } from "@playwright/test";

test("should render a post page", async ({ page }) => {
  await page.goto("/");
  await page.click("text=Lorem ipsum dolor sit amet");
  await expect(page).toHaveURL("/posts/lorem-ipsum");
  await expect(page.locator("h1")).toContainText("Lorem ipsum dolor sit amet");
});
