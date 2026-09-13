import { notFound } from "next/navigation";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Work } from "@/components/site/work";
import { Skills } from "@/components/site/skills";
import { Experience } from "@/components/site/experience";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { HashScroll } from "@/components/site/hash-scroll";
import { StructuredData } from "@/components/site/structured-data";
import { isLocale } from "@/lib/i18n";

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <StructuredData locale={locale} />
      <HashScroll />
      <Nav />
      <main id="main" className="relative">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
