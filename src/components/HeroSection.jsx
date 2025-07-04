import React from "react";
import myPortrait from "../images/Profile.jpg";
import "./Hero.css";

const Hero = () => (
  <section className="hero-section" id="home">
    <div className="hero-bg-animated"></div>
    <div className="hero-flex">
      <div className="hero-portrait-container">
        <img src={myPortrait} alt="Your portrait" className="hero-portrait" />
      </div>
      <div className="hero-content hero-content-left">
        <h2 className="section-title">
          Abdallah Ramadan Abdelshafy
          <span className="section-underline"></span>
        </h2>{" "}
        <h2 className="subtitle">Full-Stack Python Developer</h2>
        <p className="intro">
          Building scalable web apps with{" "}
          <span className="highlight">Python</span>,{" "}
          <span className="highlight">Django</span>,{" "}
          <span className="highlight">React</span>, and a passion for elegant
          user experiences.
        </p>
        <a
          href="https://drive.usercontent.google.com/download?id=1X_j9U0nAN3ejFJTNxwMjq5haVxHdrVKI&export=download&authuser=0&confirm=t&uuid=04dd27ae-6025-4de4-9001-6b35551a48f4&at=AN8xHorrS7xQwuX-D15MMaUf2NDU:1751650924455"
          className="btn-animated"
          download
        >
          <span>Download My CV</span>
          <svg
            className="btn-arrow"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
