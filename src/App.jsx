import React, { useState, useEffect } from "react";
import Hero from "./components/HeroSection";
import About from "./components/AboutMe";
import Projects from "./components/ProjectsGallery";
import Skills from "./components/SkillsMatrix";
import Experience from "./components/ExperienceTimeline";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SpaceBackground from "./components/SpaceBackground";
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode ? 'dark-mode' : 'light-mode'
    }`}>
      <SpaceBackground isDarkMode={isDarkMode} />
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
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
