import { describe, expect, it } from "vitest";
import { messages } from "@/lib/i18n";
import {
  expertise,
  experiences,
  portraitImage,
  projects,
  site,
} from "@/lib/site-config";

describe("site profile", () => {
  it("uses a plausible email and phone", () => {
    expect(site.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i);
    expect(site.phone).toMatch(/^\+\d{7,15}$/);
  });

  it("points the résumé at a URL-safe file in /public", () => {
    expect(site.resumeHref).toBe("/abdallah-ramadan-cv.pdf");
    expect(site.resumeHref).not.toMatch(/\s|%20/);
  });

  it("links socials over https or mailto only", () => {
    for (const social of site.socials) {
      expect(social.href).toMatch(/^(https:\/\/|mailto:)/);
    }
  });

  it("has a translated label and a matching section for every nav item", () => {
    for (const item of site.nav) {
      expect(messages.en).toHaveProperty(`nav.${item.id}`);
      expect(messages.ar).toHaveProperty(`nav.${item.id}`);
      expect(item.href).toBe(`#${item.id}`);
    }
  });

  it("ships a portrait with real dimensions", () => {
    expect(portraitImage.width).toBeGreaterThan(0);
    expect(portraitImage.height).toBeGreaterThan(0);
  });
});

describe("projects", () => {
  it("has unique ids", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("links to live https sites", () => {
    for (const project of projects) {
      expect(project.url).toMatch(/^https:\/\//);
    }
  });

  it("carries a preview image for every project", () => {
    for (const project of projects) {
      expect(project.preview).toBeTruthy();
    }
  });

  it("has translated copy for every project in both locales", () => {
    for (const project of projects) {
      for (const suffix of ["tag", "subtitle"]) {
        expect(messages.en).toHaveProperty(`projects.${project.id}.${suffix}`);
        expect(messages.ar).toHaveProperty(`projects.${project.id}.${suffix}`);
      }
    }
  });

  it("gives the domain without a protocol", () => {
    for (const project of projects) {
      expect(project.domain).not.toMatch(/^https?:/);
      expect(project.url).toContain(project.domain.replace(/^www\./, ""));
    }
  });
});

describe("expertise", () => {
  it("has a translated group name for every group", () => {
    for (const group of expertise) {
      expect(messages.en).toHaveProperty(`skills.group.${group.id}`);
      expect(messages.ar).toHaveProperty(`skills.group.${group.id}`);
    }
  });

  it("lists no duplicate skills within a group", () => {
    for (const group of expertise) {
      expect(new Set(group.items).size).toBe(group.items.length);
    }
  });

  it("includes the Node and design-to-code skills", () => {
    const all = expertise.flatMap((group) => [...group.items]);
    expect(all).toEqual(
      expect.arrayContaining(["Node.js", "Express", "Figma → Code"])
    );
  });
});

describe("experience", () => {
  it("references message keys that exist in both locales", () => {
    for (const role of experiences) {
      for (const key of role.highlights) {
        expect(messages.en[key]).toBeTruthy();
        expect(messages.ar[key]).toBeTruthy();
      }
      for (const suffix of ["company", "role", "period", "location"]) {
        expect(messages.en).toHaveProperty(`exp.${role.id}.${suffix}`);
      }
    }
  });

  it("lists roles newest first", () => {
    expect(experiences.map((role) => role.id)).toEqual([
      "mernan",
      "csd",
      "iti",
    ]);
  });
});
