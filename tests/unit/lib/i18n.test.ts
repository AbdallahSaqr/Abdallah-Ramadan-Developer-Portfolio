import { describe, expect, it } from "vitest";
import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_COOKIE,
  locales,
  messages,
} from "@/lib/i18n";

describe("locales", () => {
  it("exposes exactly the two supported locales", () => {
    expect(locales).toEqual(["en", "ar"]);
  });

  it("defaults to English", () => {
    expect(DEFAULT_LOCALE).toBe("en");
  });

  it("names the cookie the proxy and the toggle both read", () => {
    expect(LOCALE_COOKIE).toBe("lang");
  });
});

describe("isLocale", () => {
  it.each(["en", "ar"])("accepts %s", (value) => {
    expect(isLocale(value)).toBe(true);
  });

  it.each(["fr", "EN", "", "en-US", undefined])(
    "rejects %s",
    (value) => {
      expect(isLocale(value as string | undefined)).toBe(false);
    }
  );
});

describe("message dictionaries", () => {
  const englishKeys = Object.keys(messages.en);

  it("translates every English key into Arabic", () => {
    const missing = englishKeys.filter((key) => !(key in messages.ar));
    expect(missing).toEqual([]);
  });

  it("has no Arabic keys the English source does not define", () => {
    const extra = Object.keys(messages.ar).filter(
      (key) => !englishKeys.includes(key)
    );
    expect(extra).toEqual([]);
  });

  it.each(["en", "ar"] as const)("has no blank strings in %s", (locale) => {
    const blank = Object.entries(messages[locale])
      .filter(([, value]) => value.trim().length === 0)
      .map(([key]) => key);
    expect(blank).toEqual([]);
  });

  it("actually translates the Arabic copy rather than copying English", () => {
    expect(messages.ar["nav.work"]).not.toBe(messages.en["nav.work"]);
    expect(messages.ar["meta.description"]).toMatch(/[\u0600-\u06FF]/);
  });

  it("keeps metadata strings within search-result limits", () => {
    for (const locale of locales) {
      expect(messages[locale]["meta.description"].length).toBeLessThanOrEqual(
        180
      );
    }
  });
});
