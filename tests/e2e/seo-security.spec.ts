import { expect, test } from "@playwright/test";

test.describe("SEO", () => {
  test("declares a canonical URL and hreflang alternates", async ({ page }) => {
    await page.goto("/en");

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /\/en$/
    );
    for (const lang of ["en", "ar", "x-default"]) {
      await expect(
        page.locator(`link[rel="alternate"][hrefLang="${lang}"]`)
      ).toHaveCount(1);
    }
  });

  test("localises title and description", async ({ page }) => {
    await page.goto("/en");
    await expect(page).toHaveTitle(/Full-Stack Software Engineer/);

    await page.goto("/ar");
    await expect(page).toHaveTitle(/مهندس/);
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description).toMatch(/[؀-ۿ]/);
  });

  test("publishes a Person JSON-LD graph", async ({ page }) => {
    await page.goto("/en");
    const raw = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    const data = JSON.parse(raw ?? "{}");

    expect(data["@type"]).toBe("Person");
    expect(data.name).toBe("Abdallah Ramadan");
    expect(data.sameAs.length).toBeGreaterThan(0);
  });

  test("serves robots.txt pointing at the sitemap", async ({ request }) => {
    const response = await request.get("/robots.txt");
    const body = await response.text();

    expect(response.status()).toBe(200);
    expect(body).toContain("Allow: /");
    expect(body).toContain("Sitemap:");
  });

  test("serves a sitemap listing both locales", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    const body = await response.text();

    expect(response.status()).toBe(200);
    expect(body).toContain("/en");
    expect(body).toContain("/ar");
    expect(body).toContain('hreflang="ar"');
  });

  test("renders a PNG social card", async ({ request }) => {
    const response = await request.get("/en/opengraph-image");

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("image/png");
  });

  test("exposes Open Graph and Twitter tags", async ({ page }) => {
    await page.goto("/en");

    for (const property of ["og:title", "og:description", "og:image"]) {
      await expect(
        page.locator(`meta[property="${property}"]`).first()
      ).toHaveCount(1);
    }
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image"
    );
  });
});

test.describe("security headers", () => {
  test("sets the hardening headers on the page response", async ({ page }) => {
    const response = await page.goto("/en");
    const headers = response?.headers() ?? {};

    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["permissions-policy"]).toContain("camera=()");
    expect(headers["strict-transport-security"]).toContain("max-age=");
  });

  test("ships a content security policy that blocks framing and objects", async ({
    page,
  }) => {
    const response = await page.goto("/en");
    const csp = response?.headers()["content-security-policy"] ?? "";

    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("base-uri 'self'");
  });

  test("does not advertise the framework", async ({ page }) => {
    const response = await page.goto("/en");
    expect(response?.headers()["x-powered-by"]).toBeUndefined();
  });

  test("makes no third-party requests", async ({ page }) => {
    const external: string[] = [];
    page.on("request", (request) => {
      const url = new URL(request.url());
      if (!["localhost", "127.0.0.1"].includes(url.hostname)) {
        external.push(request.url());
      }
    });

    await page.goto("/en");
    await page.locator("#work").scrollIntoViewIfNeeded();
    await page.waitForLoadState("networkidle");

    expect(external).toEqual([]);
  });
});
