import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getSiteUrl } from "@/lib/site-url";

const ORIGINAL = { ...process.env };

beforeEach(() => {
  delete process.env.NEXT_PUBLIC_SITE_URL;
  delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
});

afterEach(() => {
  process.env = { ...ORIGINAL };
  vi.unstubAllEnvs();
});

describe("getSiteUrl", () => {
  it("prefers the explicit site URL", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://abdallah.dev";
    expect(getSiteUrl()).toBe("https://abdallah.dev");
  });

  it("strips a trailing slash", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://abdallah.dev/";
    expect(getSiteUrl()).toBe("https://abdallah.dev");
  });

  it("adds https to a bare host", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "abdallah.dev";
    expect(getSiteUrl()).toBe("https://abdallah.dev");
  });

  it("falls back to the Vercel production URL", () => {
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "portfolio.vercel.app";
    expect(getSiteUrl()).toBe("https://portfolio.vercel.app");
  });

  it("uses localhost when nothing is configured", () => {
    expect(getSiteUrl()).toBe("http://localhost:3000");
  });

  it("always returns a parseable absolute URL", () => {
    expect(() => new URL(getSiteUrl())).not.toThrow();
  });
});
