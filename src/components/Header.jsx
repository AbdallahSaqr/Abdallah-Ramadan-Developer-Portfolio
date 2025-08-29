import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ isDarkMode, toggleTheme }) => (
  <header className="header">
    <nav className="header-nav">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="theme-toggle">
          <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle theme">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
