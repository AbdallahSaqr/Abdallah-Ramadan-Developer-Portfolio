import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { StructuredData } from "@/components/site/structured-data";
import { messages } from "@/lib/i18n";
import { projects, site } from "@/lib/site-config";

const ORIGINAL = { ...process.env };

beforeEach(() => {
  process.env.NEXT_PUBLIC_SITE_URL = "https://abdallah.dev";
});

afterEach(() => {
  process.env = { ...ORIGINAL };
});

function parse(locale: "en" | "ar") {
  const { container } = render(<StructuredData locale={locale} />);
  const script = container.querySelector(
    'script[type="application/ld+json"]'
  ) as HTMLScriptElement;
  return { script, data: JSON.parse(script.textContent ?? "{}") };
}

describe("StructuredData", () => {
  it("emits a schema.org Person graph", () => {
    const { data } = parse("en");
    expect(data["@context"]).toBe("https://schema.org");
    expect(data["@type"]).toBe("Person");
    expect(data.name).toBe(site.name);
  });

  it("points at the locale's canonical URL", () => {
    expect(parse("en").data.url).toBe("https://abdallah.dev/en");
    expect(parse("ar").data.url).toBe("https://abdallah.dev/ar");
  });

  it("describes the person in the requested language", () => {
    expect(parse("ar").data.jobTitle).toBe(messages.ar["meta.role"]);
    expect(parse("en").data.jobTitle).toBe(messages.en["meta.role"]);
  });

  it("lists only absolute profile URLs under sameAs", () => {
    const { data } = parse("en");
    expect(data.sameAs.length).toBeGreaterThan(0);
    for (const url of data.sameAs) {
      expect(url).toMatch(/^https:\/\//);
    }
  });

  it("references every project", () => {
    const { data } = parse("en");
    expect(data.subjectOf.map((item: { name: string }) => item.name)).toEqual(
      projects.map((project) => project.title)
    );
  });

  it("uses an absolute image URL", () => {
    expect(parse("en").data.image).toMatch(/^https:\/\/abdallah\.dev\//);
  });

  it("escapes angle brackets so the payload cannot close the script tag", () => {
    const { script } = parse("en");
    expect(script.textContent).not.toContain("<");
  });
});
