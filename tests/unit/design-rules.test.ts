// @vitest-environment node
import { readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";
import { describe, expect, it } from "vitest";
import { locales, messages } from "@/lib/i18n";
import { FADE_DURATION } from "@/lib/motion";

/**
 * Standing house rules for this site, enforced instead of remembered:
 * no purple, no gradients, no pill shapes, no emoji, no em dashes, and no
 * looping or cascading scroll animation.
 */

const SOURCE_EXTENSIONS = new Set([".ts", ".tsx", ".css", ".svg"]);

function sourceFiles(dir = "src"): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return SOURCE_EXTENSIONS.has(extname(entry.name)) ? [path] : [];
  });
}

const files = sourceFiles().map((path) => ({
  path,
  content: readFileSync(path, "utf8"),
}));

/** Files matching `pattern`, with the offending snippets, for readable failures. */
function offenders(pattern: RegExp) {
  return files
    .map(({ path, content }) => ({
      path,
      hits: content.match(new RegExp(pattern, "g")) ?? [],
    }))
    .filter(({ hits }) => hits.length > 0)
    .map(({ path, hits }) => `${path}: ${[...new Set(hits)].join(", ")}`);
}

const allMessages = locales.flatMap((locale) =>
  Object.entries(messages[locale]).map(([key, value]) => ({
    id: `${locale}.${key}`,
    value,
  }))
);

describe("colour", () => {
  it("uses no purple family colours", () => {
    expect(
      offenders(/\b(?:indigo|violet|purple|fuchsia)-\d{2,3}\b/)
    ).toEqual([]);
  });

  it("uses no gradients", () => {
    expect(
      offenders(/bg-gradient-to|linear-gradient|radial-gradient|bg-clip-text/)
    ).toEqual([]);
  });
});

describe("shape", () => {
  it("uses no pill-shaped controls", () => {
    expect(offenders(/rounded-full/)).toEqual([]);
  });
});

describe("motion", () => {
  it("has no looping animations", () => {
    expect(
      offenders(/repeat:\s*Infinity|POSITIVE_INFINITY|animate-ping|animate-pulse/)
    ).toEqual([]);
  });

  it("has no staggered reveal cascades", () => {
    expect(offenders(/staggerChildren|delayChildren/)).toEqual([]);
  });

  it("keeps entrance animations short", () => {
    expect(FADE_DURATION).toBeLessThanOrEqual(0.5);
  });
});

describe("copy", () => {
  it("contains no em dashes", () => {
    const withEmDash = allMessages.filter((message) =>
      message.value.includes("—")
    );
    expect(withEmDash.map((message) => message.id)).toEqual([]);
  });

  it("contains no em dashes anywhere in the source, comments included", () => {
    expect(offenders(/—/)).toEqual([]);
  });

  it("contains no emoji", () => {
    const emoji = /[\u{1F300}-\u{1FAFF}\u{2190}-\u{21FF}\u{2600}-\u{27BF}\u{FE0F}]/u;
    const withEmoji = allMessages.filter((message) => emoji.test(message.value));
    expect(withEmoji.map((message) => message.id)).toEqual([]);
  });

  it("makes a concrete claim in the hero rather than a vague one", () => {
    const vague =
      /elevate|unleash|transform your|next level|crafting exceptional|digital vision|passionate about/i;
    for (const locale of locales) {
      expect(vague.test(messages[locale]["hero.lead"])).toBe(false);
    }
    // Names real technologies and real products, not adjectives.
    expect(messages.en["hero.lead"]).toMatch(/React|Next\.js|Django|FastAPI/);
  });

  it("quotes no invented social proof", () => {
    const fake = /testimonial|5 stars|★|happy clients|trusted by \d|\d+% satisfaction/i;
    for (const message of allMessages) {
      expect(fake.test(message.value)).toBe(false);
    }
  });
});
