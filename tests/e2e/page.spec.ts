import { expect, test, type Page } from "@playwright/test";
import { toggle, waitForImages } from "./helpers";

const SECTIONS = ["hero", "about", "work", "skills", "experience", "contact"];

async function gotoEnglish(page: Page) {
  await page.goto("/en");
}

test.describe("page content", () => {
  test("renders every section", async ({ page }) => {
    await gotoEnglish(page);
    for (const id of SECTIONS) {
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
  });

  test("has exactly one h1 and a main landmark", async ({ page }) => {
    await gotoEnglish(page);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main#main")).toHaveCount(1);
  });

  test("lists the projects with working live links", async ({ page }) => {
    await gotoEnglish(page);
    const cards = page.locator('#work a[target="_blank"]');

    await expect(cards).toHaveCount(4);
    for (const link of await cards.all()) {
      expect(await link.getAttribute("href")).toMatch(/^https:\/\//);
      expect(await link.getAttribute("rel")).toContain("noopener");
    }
  });

  test("shows the new skills", async ({ page }) => {
    await gotoEnglish(page);
    const skills = page.locator("#skills");

    await expect(skills.getByText("Node.js")).toBeVisible();
    await expect(skills.getByText("Express")).toBeVisible();
    await expect(skills.getByText("Figma → Code")).toBeVisible();
  });

  test("serves optimised images rather than raw source files", async ({
    page,
  }) => {
    await gotoEnglish(page);
    await waitForImages(page, "#work");

    const sources = await page
      .locator("#work img:visible")
      .evaluateAll((images) =>
        images.map((img) => (img as HTMLImageElement).currentSrc)
      );

    expect(sources.length).toBeGreaterThan(0);
    for (const src of sources) {
      expect(src).toContain("/_next/image");
    }
  });

  test("keeps project screenshots small once optimised", async ({ page }) => {
    const bytes: number[] = [];
    page.on("response", async (response) => {
      if (response.url().includes("/_next/image")) {
        const length = Number(response.headers()["content-length"] ?? 0);
        if (length) bytes.push(length);
      }
    });

    await gotoEnglish(page);
    await waitForImages(page, "#work");

    expect(bytes.length).toBeGreaterThan(0);
    expect(Math.max(...bytes)).toBeLessThan(300_000);
  });

  test("offers the CV as a real downloadable file", async ({ page, request }) => {
    await gotoEnglish(page);
    const href = await page
      .getByRole("link", { name: "Download CV" })
      .getAttribute("href");

    const response = await request.get(href!);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("pdf");
  });

  test("logs no console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));

    await gotoEnglish(page);
    await page.waitForLoadState("networkidle");

    expect(errors).toEqual([]);
  });

  test("never scrolls sideways", async ({ page }) => {
    await gotoEnglish(page);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test("still renders with reduced motion requested", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await gotoEnglish(page);

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await expect(page.locator("#contact")).toBeVisible();
  });
});

test.describe("theme", () => {
  test("switches from the system theme to light and remembers it", async ({
    page,
    isMobile,
  }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await gotoEnglish(page);

    const html = page.locator("html");
    await expect(html).toHaveClass(/dark/);

    await (await toggle(page, "Toggle theme", isMobile)).click();
    await expect(html).toHaveClass(/light/);

    await page.reload();
    await expect(html).toHaveClass(/light/);
  });
});

test.describe("navigation", () => {
  test("highlights the section being read", async ({ page, isMobile }) => {
    test.skip(isMobile, "the inline nav links are desktop-only");
    await gotoEnglish(page);

    await page.locator("#skills").scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("link", { name: "Skills", exact: true })
    ).toHaveAttribute("aria-current", "true");
  });

  test("reveals the skip link on the first Tab press", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "keyboard navigation is a desktop concern");
    await gotoEnglish(page);

    await page.keyboard.press("Tab");

    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();
  });
});

test.describe("mobile menu", () => {
  test("opens, traps focus, and closes on Escape", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "the menu only exists below the md breakpoint");
    await gotoEnglish(page);

    await page.getByRole("button", { name: "Open menu" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(page.getByRole("button", { name: "Close menu" })).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  });

  test("navigates to a section and closes", async ({ page, isMobile }) => {
    test.skip(!isMobile, "the menu only exists below the md breakpoint");
    await gotoEnglish(page);

    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("dialog").getByRole("link", { name: "Work" }).click();

    await expect(page.getByRole("dialog")).toBeHidden();
    await expect(page).toHaveURL(/#work$/);
  });

  test("restores page scrolling after closing", async ({ page, isMobile }) => {
    test.skip(!isMobile, "the menu only exists below the md breakpoint");
    await gotoEnglish(page);

    await page.getByRole("button", { name: "Open menu" }).click();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe(
      "hidden"
    );

    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(page.getByRole("dialog")).toBeHidden();
    expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
      "hidden"
    );
  });
});
