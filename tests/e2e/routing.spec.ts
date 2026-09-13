import { expect, test } from "@playwright/test";
import { toggle } from "./helpers";

test.describe("locale routing", () => {
  test("sends the bare root to the English page", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.url()).toMatch(/\/en$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
  });

  test("honours a remembered Arabic preference at the root", async ({
    context,
    page,
  }) => {
    await context.addCookies([
      { name: "lang", value: "ar", url: "http://localhost:3100" },
    ]);

    await page.goto("/");

    await expect(page).toHaveURL(/\/ar$/);
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  });

  test("follows the browser language when no cookie is set", async ({
    browser,
  }) => {
    const context = await browser.newContext({ locale: "ar-EG" });
    const page = await context.newPage();

    await page.goto("/");

    await expect(page).toHaveURL(/\/ar$/);
    await context.close();
  });

  test("serves Arabic content on the Arabic route", async ({ page }) => {
    await page.goto("/ar");

    await expect(page.locator("html")).toHaveAttribute("lang", "ar");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "مطوّر"
    );
  });

  test("404s on an unsupported locale", async ({ page }) => {
    const response = await page.goto("/fr");
    expect(response?.status()).toBe(404);
  });

  test("switching language keeps the visitor on the same content", async ({
    page,
    isMobile,
  }) => {
    await page.goto("/en");

    await (await toggle(page, "Switch language", isMobile)).click();

    await expect(page).toHaveURL(/\/ar$/);
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  });

  test("remembers the language choice for the next visit", async ({
    page,
    context,
    isMobile,
  }) => {
    await page.goto("/en");
    await (await toggle(page, "Switch language", isMobile)).click();
    await expect(page).toHaveURL(/\/ar$/);

    const cookie = (await context.cookies()).find((c) => c.name === "lang");
    expect(cookie?.value).toBe("ar");
    expect(cookie?.sameSite).toBe("Lax");
  });

  test("in-page anchors land on their section", async ({ page }) => {
    await page.goto("/en#work");

    const work = page.locator("#work");
    await expect(work).toBeVisible();
    const box = await work.boundingBox();
    expect(box?.y ?? 0).toBeLessThan(200);
  });
});
