import { expect, test } from "@playwright/test";

const PAGES = [
  { path: "privacy", en: "Privacy policy", ar: "سياسة الخصوصية" },
  { path: "terms", en: "Terms and conditions", ar: "الشروط والأحكام" },
] as const;

test.describe("legal pages", () => {
  for (const page_ of PAGES) {
    test(`${page_.path} renders in English`, async ({ page }) => {
      const response = await page.goto(`/en/${page_.path}`);

      expect(response?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(
        page_.en
      );
      await expect(page.getByText(/Last updated/)).toBeVisible();
    });

    test(`${page_.path} renders in Arabic`, async ({ page }) => {
      await page.goto(`/ar/${page_.path}`);

      await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(
        page_.ar
      );
    });

    test(`${page_.path} has five sections and a contact address`, async ({
      page,
    }) => {
      await page.goto(`/en/${page_.path}`);

      await expect(page.getByRole("heading", { level: 2 })).toHaveCount(5);
      await expect(
        page.getByRole("link", { name: "abdallahramadan2707@gmail.com" })
      ).toBeVisible();
    });

    test(`${page_.path} declares canonical and hreflang tags`, async ({
      page,
    }) => {
      await page.goto(`/en/${page_.path}`);

      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        new RegExp(`/en/${page_.path}$`)
      );
      await expect(
        page.locator(`link[rel="alternate"][hrefLang="ar"]`)
      ).toHaveAttribute("href", new RegExp(`/ar/${page_.path}$`));
    });

    test(`${page_.path} offers a way back to the site`, async ({ page }) => {
      await page.goto(`/en/${page_.path}`);

      await page.getByRole("link", { name: "Back to the site" }).click();

      await expect(page).toHaveURL(/\/en$/);
    });
  }

  test("both pages are reachable from the footer", async ({ page }) => {
    await page.goto("/en");
    const footer = page.getByRole("contentinfo");

    await expect(
      footer.getByRole("link", { name: "Privacy policy" })
    ).toHaveAttribute("href", "/en/privacy");
    await expect(
      footer.getByRole("link", { name: "Terms and conditions" })
    ).toHaveAttribute("href", "/en/terms");
  });

  test("the footer keeps the visitor in their locale", async ({ page }) => {
    await page.goto("/ar");

    await expect(
      page.getByRole("contentinfo").getByRole("link", { name: "سياسة الخصوصية" })
    ).toHaveAttribute("href", "/ar/privacy");
  });

  test("the privacy policy describes the cookie the site actually sets", async ({
    page,
  }) => {
    await page.goto("/en/privacy");

    await expect(page.getByText(/cookie named lang/i)).toBeVisible();
    await expect(page.getByText(/local storage/i)).toBeVisible();
    await expect(page.getByText(/no analytics|no tracking/i).first()).toBeVisible();
  });
});
