import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/site/legal-page";
import { isLocale, locales, messages, type MessageKey } from "@/lib/i18n";

const SECTIONS: readonly { title: MessageKey; body: MessageKey }[] = [
  { title: "privacy.stored.title", body: "privacy.stored.body" },
  { title: "privacy.hosting.title", body: "privacy.hosting.body" },
  { title: "privacy.contact.title", body: "privacy.contact.body" },
  { title: "privacy.links.title", body: "privacy.links.body" },
  { title: "privacy.rights.title", body: "privacy.rights.body" },
];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return {
    title: messages[locale]["privacy.title"],
    description: messages[locale]["privacy.intro"],
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { en: "/en/privacy", ar: "/ar/privacy" },
    },
  };
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <LegalPage
      locale={locale}
      titleKey="privacy.title"
      introKey="privacy.intro"
      sections={SECTIONS}
    />
  );
}
