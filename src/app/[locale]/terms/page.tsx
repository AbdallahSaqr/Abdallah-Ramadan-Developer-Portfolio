import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/site/legal-page";
import { isLocale, locales, messages, type MessageKey } from "@/lib/i18n";

const SECTIONS: readonly { title: MessageKey; body: MessageKey }[] = [
  { title: "terms.use.title", body: "terms.use.body" },
  { title: "terms.content.title", body: "terms.content.body" },
  { title: "terms.accuracy.title", body: "terms.accuracy.body" },
  { title: "terms.links.title", body: "terms.links.body" },
  { title: "terms.law.title", body: "terms.law.body" },
];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/terms">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return {
    title: messages[locale]["terms.title"],
    description: messages[locale]["terms.intro"],
    alternates: {
      canonical: `/${locale}/terms`,
      languages: { en: "/en/terms", ar: "/ar/terms" },
    },
  };
}

export default async function TermsPage({
  params,
}: PageProps<"/[locale]/terms">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <LegalPage
      locale={locale}
      titleKey="terms.title"
      introKey="terms.intro"
      sections={SECTIONS}
    />
  );
}
