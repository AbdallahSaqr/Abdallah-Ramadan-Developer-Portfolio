import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";

const CONTACTS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/abdallahramadan7",
    icon: <FaLinkedin />,
    color: "#0a66c2",
    label: "Connect on LinkedIn"
  },
  {
    name: "GitHub",
    url: "https://github.com/AbdallahSaqr",
    icon: <FaGithub />,
    color: "#22223b",
    label: "View GitHub Profile"
  }
];

const EMAIL = "abdallahramadan2707@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">
        Contact Me
        <span className="section-underline"></span>
      </h2>
      <div className="contact-cards">
        {CONTACTS.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            style={{ borderColor: "#0965c8" }}
            aria-label={c.label}
          >
            <span className="contact-icon" style={{ color: "#0965c8" }}>
              {c.icon}
            </span>
            <span className="contact-label">{c.name}</span>
          </a>
        ))}
        <div className="contact-card" style={{ borderColor: "#0965c8" }}>
          <span className="contact-icon" style={{ color: "#0965c8" }}>
            <FaEnvelope />
          </span>
          <span className="contact-label">{EMAIL}</span>
          <button
            className="copy-btn"
            onClick={handleCopy}
            aria-label="Copy email"
            tabIndex={0}
          >
            {copied ? <FaCheck color="#22c55e" /> : <FaCopy />}
          </button>
        </div>
      </div>
      <p className="contact-note">
        I’m always open to new opportunities, collaborations, or just a friendly chat!
      </p>
    </section>
  );
};

export default Contact;
