import { afterEach, beforeEach, describe, expect, it } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { locales } from "@/lib/i18n";

const ORIGINAL = { ...process.env };

beforeEach(() => {
  process.env.NEXT_PUBLIC_SITE_URL = "https://abdallah.dev";
});

afterEach(() => {
  process.env = { ...ORIGINAL };
});

describe("robots.txt", () => {
  it("lets crawlers index everything", () => {
    expect(robots().rules).toEqual({ userAgent: "*", allow: "/" });
  });

  it("points at the absolute sitemap URL", () => {
    expect(robots().sitemap).toBe("https://abdallah.dev/sitemap.xml");
    expect(robots().host).toBe("https://abdallah.dev");
  });
});

describe("sitemap.xml", () => {
  it("lists every page in every locale", () => {
    expect(sitemap().map((entry) => entry.url)).toEqual([
      "https://abdallah.dev/en",
      "https://abdallah.dev/ar",
      "https://abdallah.dev/en/privacy",
      "https://abdallah.dev/ar/privacy",
      "https://abdallah.dev/en/terms",
      "https://abdallah.dev/ar/terms",
    ]);
  });

  it("includes the legal pages required before launch", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toContain("https://abdallah.dev/en/privacy");
    expect(urls).toContain("https://abdallah.dev/en/terms");
  });

  it("cross-links each page with its other-locale twin", () => {
    for (const entry of sitemap()) {
      const path = entry.url.replace("https://abdallah.dev/en", "").replace("https://abdallah.dev/ar", "");
      expect(entry.alternates?.languages).toEqual({
        en: `https://abdallah.dev/en${path}`,
        ar: `https://abdallah.dev/ar${path}`,
      });
    }
  });

  it("dates every entry", () => {
    for (const entry of sitemap()) {
      expect(entry.lastModified).toBeInstanceOf(Date);
    }
  });

  it("covers every supported locale", () => {
    expect(sitemap()).toHaveLength(locales.length * 3);
  });
});
