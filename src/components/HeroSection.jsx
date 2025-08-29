import React from "react";
import myPortrait from "../images/Profile.jpg";

const Hero = () => (
  <section className="hero-section" id="home">
    <div className="bubble-container" style={{ maxWidth: '800px', textAlign: 'center' }}>
      <img src={myPortrait} alt="Abdallah Ramadan" className="hero-portrait" />
      <div className="hero-content">
        <h1 className="hero-title">
          Abdallah Ramadan Abdelshafy
        </h1>
        <h2 className="hero-subtitle">Full-Stack Python Developer</h2>
        <p className="hero-description">
          Building scalable web apps with{" "}
          <span style={{ color: '#4a90e2', fontWeight: '600' }}>Python</span>,{" "}
          <span style={{ color: '#4a90e2', fontWeight: '600' }}>Django</span>,{" "}
          <span style={{ color: '#4a90e2', fontWeight: '600' }}>React</span>, and a passion for elegant
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
