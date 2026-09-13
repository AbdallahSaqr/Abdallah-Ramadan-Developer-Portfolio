import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Providers } from "@/components/providers";
import { SkipLink } from "@/components/site/skip-link";
import { site } from "@/lib/site-config";
import { isLocale, locales, messages, type Locale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/** Both locales are prerendered; anything else 404s instead of rendering. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

/** Canonical + hreflang map, identical for every locale. */
function alternates(locale: Locale) {
  return {
    canonical: `/${locale}`,
    languages: {
      en: "/en",
      ar: "/ar",
      "x-default": "/en",
    },
  } satisfies Metadata["alternates"];
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = messages[locale];
  const title = `${site.name} — ${t["meta.role"]}`;
  const description = t["meta.description"];

  return {
    metadataBase: new URL(getSiteUrl()),
    title: { default: title, template: `%s · ${site.name}` },
    description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.socials[0].href }],
    creator: site.name,
    keywords: [
      site.name,
      "Full-Stack Engineer",
      "Next.js",
      "React",
      "Django",
      "FastAPI",
      "Python",
      "TypeScript",
      "Alexandria",
      "Egypt",
    ],
    alternates: alternates(locale),
    icons: {
      icon: [{ url: "/abdallah-saqr-logo.svg", type: "image/svg+xml" }],
      shortcut: "/abdallah-saqr-logo.svg",
      apple: "/abdallah-saqr-logo.svg",
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: site.name,
      title,
      description,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#030303" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden">
        <Providers lang={locale}>
          <SkipLink />
          {children}
        </Providers>
      </body>
    </html>
  );
}
