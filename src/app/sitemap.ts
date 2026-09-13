import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${base}/${locale}`])
  );

  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
