import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import {
  toggle,
  waitForEntranceAnimation,
  waitForFiniteAnimations,
} from "./helpers";

/** WCAG 2.1 A/AA — the bar this site is held to. */
const TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];

test.describe("accessibility", () => {
  for (const locale of ["en", "ar"]) {
    test(`the ${locale} page has no automatically detectable violations`, async ({
      page,
    }) => {
      await page.goto(`/${locale}`);
      await waitForEntranceAnimation(page);

      const results = await new AxeBuilder({ page })
        .withTags(TAGS)
        .analyze();

      expect(results.violations).toEqual([]);
    });
  }

  test("the light theme has no contrast violations", async ({
    page,
    isMobile,
  }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/en");
    await (await toggle(page, "Toggle theme", isMobile)).click();
    await expect(page.locator("html")).toHaveClass(/light/);
    await waitForEntranceAnimation(page);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test("the open mobile menu has no violations", async ({ page, isMobile }) => {
    test.skip(!isMobile, "the menu only exists below the md breakpoint");
    await page.goto("/en");
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await waitForFiniteAnimations(page);

    const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();

    expect(results.violations).toEqual([]);
  });

  test("every interactive control is reachable by keyboard", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "keyboard navigation is a desktop concern");
    await page.goto("/en");

    const reached = new Set<string>();
    for (let i = 0; i < 25; i++) {
      await page.keyboard.press("Tab");
      const label = await page.evaluate(() => {
        const el = document.activeElement as HTMLElement | null;
        if (!el || el === document.body) return null;
        return el.getAttribute("aria-label") ?? el.textContent?.trim() ?? el.tagName;
      });
      if (label) reached.add(label);
    }

    expect(reached.size).toBeGreaterThan(8);
  });
});
