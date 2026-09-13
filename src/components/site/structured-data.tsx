import { messages, type Locale } from "@/lib/i18n";
import { portraitImage, projects, site } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";

/**
 * schema.org Person graph so search engines and AI crawlers can read the
 * profile without parsing the animated markup. Server-rendered only.
 */
export function StructuredData({ locale }: { locale: Locale }) {
  const base = getSiteUrl();
  const url = `${base}/${locale}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: messages[locale]["meta.role"],
    description: messages[locale]["meta.description"],
    url,
    email: `mailto:${site.email}`,
    telephone: site.phone,
    image: `${base}${portraitImage.src}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alexandria",
      addressCountry: "EG",
    },
    sameAs: site.socials
      .filter((s) => s.href.startsWith("http"))
      .map((s) => s.href),
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Django",
      "FastAPI",
      "PostgreSQL",
    ],
    subjectOf: projects.map((p) => ({
      "@type": "WebSite",
      name: p.title,
      url: p.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Static, build-time content; `<` is escaped so it can never close the tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
