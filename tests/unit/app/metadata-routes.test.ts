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
  it("lists one absolute URL per locale", () => {
    expect(sitemap().map((entry) => entry.url)).toEqual([
      "https://abdallah.dev/en",
      "https://abdallah.dev/ar",
    ]);
  });

  it("cross-links the locales with hreflang alternates", () => {
    for (const entry of sitemap()) {
      expect(entry.alternates?.languages).toEqual({
        en: "https://abdallah.dev/en",
        ar: "https://abdallah.dev/ar",
      });
    }
  });

  it("dates every entry", () => {
    for (const entry of sitemap()) {
      expect(entry.lastModified).toBeInstanceOf(Date);
    }
  });

  it("covers every supported locale", () => {
    expect(sitemap()).toHaveLength(locales.length);
  });
});
