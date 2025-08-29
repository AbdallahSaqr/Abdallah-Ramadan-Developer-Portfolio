import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ProjectsGallery from "./components/ProjectsGallery";
import SkillsMatrix from "./components/SkillsMatrix";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SpaceBackground from "./components/SpaceBackground";

function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Load theme and language from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const savedLanguage = localStorage.getItem("portfolio-language");
    
    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  // Save theme and language to localStorage when they change
  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    localStorage.setItem("portfolio-language", language);
    
    // Update document attributes for RTL support
    document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", language);
    
    // Update body class for theme
    document.body.className = theme === "light" ? "light-mode" : "";
  }, [theme, language]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "ar" : "en");
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <SpaceBackground theme={theme} />
      
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      <main>
        <HeroSection language={language} />
        <AboutMe language={language} />
        <ProjectsGallery language={language} />
        <SkillsMatrix language={language} />
        <ExperienceTimeline language={language} />
        <ContactSection language={language} />
      </main>

      <Footer language={language} theme={theme} />
    </div>
  );
}

export default App;
