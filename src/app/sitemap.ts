import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site-url";

const PATHS = ["", "/privacy", "/terms"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return PATHS.flatMap((path) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${base}/${locale}${path}`])
    );

    return locales.map((locale) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.3,
      alternates: { languages },
    }));
  });
}
