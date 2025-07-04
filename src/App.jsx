import Hero from "./components/HeroSection";
import About from "./components/AboutMe";
import Projects from "./components/ProjectsGallery";
import Skills from "./components/SkillsMatrix";
import Experience from "./components/ExperienceTimeline";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './index.css';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
