import { Background } from "@/components/site/background";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Work } from "@/components/site/work";
import { Skills } from "@/components/site/skills";
import { Experience } from "@/components/site/experience";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Page() {
  return (
    <>
      <Background />
      <Nav />
      <main className="relative">
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
