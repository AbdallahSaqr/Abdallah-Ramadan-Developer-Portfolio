import { expect, type Page } from "@playwright/test";

/**
 * The theme and language toggles live in the header on desktop and inside the
 * full-screen menu on phones. This returns a locator for the requested control
 * wherever it currently is, opening the menu first when needed.
 */
export async function toggle(
  page: Page,
  name: "Toggle theme" | "Switch language",
  isMobile: boolean
) {
  if (!isMobile) return page.getByRole("button", { name }).first();

  await page.getByRole("button", { name: "Open menu" }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  return dialog.getByRole("button", { name });
}

/**
 * Scrolls every image inside `selector` into view — they are lazy-loaded, so
 * they only fetch once seen — and waits for them all to decode.
 */
export async function waitForImages(page: Page, selector: string) {
  // Theme-swapped variants (the client wordmarks) are display:none and never
  // load, so only the visible images are waited on.
  const images = page.locator(`${selector} img:visible`);
  const count = await images.count();
  for (let i = 0; i < count; i++) {
    await images.nth(i).scrollIntoViewIfNeeded();
  }

  await page.waitForFunction(
    (sel) =>
      Array.from(document.querySelectorAll<HTMLImageElement>(`${sel} img`))
        .filter((img) => img.offsetParent !== null)
        .every((img) => img.complete),
    selector
  );
}

/**
 * Waits for one-shot animations to finish. Axe reads blended colours mid-fade
 * and reports false contrast failures; the ambient loops (pulsing dots,
 * drifting blobs) never end, so they are ignored.
 */
export async function waitForFiniteAnimations(page: Page) {
  await page.waitForFunction(
    () =>
      document
        .getAnimations()
        .filter(
          (animation) => animation.effect?.getTiming().iterations !== Infinity
        )
        .every((animation) => animation.playState !== "running"),
    undefined,
    { timeout: 15_000 }
  );
}

/** The header and hero animate in on load; wait until the page is settled. */
export async function waitForEntranceAnimation(page: Page) {
  await expect(page.locator("header")).toHaveCSS("opacity", "1");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await waitForFiniteAnimations(page);
}
