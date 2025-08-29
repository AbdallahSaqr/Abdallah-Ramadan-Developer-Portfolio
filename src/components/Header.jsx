import React from "react";
import { FaSun, FaMoon, FaGlobe, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ 
  theme, 
  toggleTheme, 
  language, 
  toggleLanguage, 
  isMenuOpen, 
  toggleMenu 
}) => {
  const navItems = [
    { id: "home", en: "Home", ar: "الرئيسية" },
    { id: "about", en: "About", ar: "حول" },
    { id: "projects", en: "Projects", ar: "المشاريع" },
    { id: "skills", en: "Skills", ar: "المهارات" },
    { id: "experience", en: "Experience", ar: "الخبرة" },
    { id: "contact", en: "Contact", ar: "اتصل" }
  ];

  const currentText = language === "ar" ? "ar" : "en";

  return (
    <header className="header">
      <nav className="header-nav">
        <a href="#home" className="header-logo">
          {language === "ar" ? "عبدالله" : "Abdallah"}
        </a>

        {/* Desktop Navigation */}
        <ul className="header-nav-desktop">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="nav-link header-nav-link">
                {item[currentText]}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme and Language Toggles */}
        <div className="header-controls">
          <button
            onClick={toggleLanguage}
            className="control-btn lang-btn"
            aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          >
            <FaGlobe />
          </button>
          <button
            onClick={toggleTheme}
            className="control-btn theme-btn"
            aria-label={theme === "dark" ? "Switch to Light Mode" : "التبديل إلى الوضع المظلم"}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="mobile-menu-btn"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Navigation Sidebar */}
      <div className={`mobile-nav-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <h3>{language === "ar" ? "القائمة" : "Menu"}</h3>
          <button 
            onClick={toggleMenu}
            className="mobile-nav-close"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>
        </div>
        
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                {item[currentText]}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="mobile-nav-controls">
          <button
            onClick={toggleLanguage}
            className="mobile-control-btn"
            aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          >
            <FaGlobe />
            <span>{language === "ar" ? "English" : "العربية"}</span>
          </button>
          <button
            onClick={toggleTheme}
            className="mobile-control-btn"
            aria-label={theme === "dark" ? "Switch to Light Mode" : "التبديل إلى الوضع المظلم"}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="mobile-nav-overlay" onClick={toggleMenu}></div>
      )}
    </header>
  );
};

export default Header;
