import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCopy, FaCheck, FaPhone } from "react-icons/fa";

const CONTACTS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/abdallahramadan7",
    icon: <FaLinkedin />,
    color: "#0a66c2",
    label: "LinkedIn",
    displayText: "linkedin.com/in/abdallahramadan7"
  },
  {
    name: "GitHub",
    url: "https://github.com/AbdallahSaqr",
    icon: <FaGithub />,
    color: "#22223b",
    label: "GitHub",
    displayText: "github.com/AbdallahSaqr"
  },
  {
    name: "Phone",
    url: "tel:+201069100373",
    icon: <FaPhone />,
    color: "#22c55e",
    label: "Phone",
    displayText: "+20 106 910 0373"
  }
];

const EMAIL = "abdallahramadan2707@gmail.com";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">
        Contact Me
      </h2>
      <div className="contact-cards">
        {CONTACTS.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target={c.name === "Phone" ? "_self" : "_blank"}
            rel={c.name === "Phone" ? "" : "noopener noreferrer"}
            className="contact-card"
            aria-label={c.label}
          >
            <span className="contact-icon">
              {c.icon}
            </span>
            <span className="contact-label">{c.label}</span>
            <span className="contact-display-text">{c.displayText}</span>
          </a>
        ))}
        <a
          href={`mailto:${EMAIL}`}
          className="contact-card"
          aria-label="Send email"
        >
          <span className="contact-icon">
            <FaEnvelope />
          </span>
          <span className="contact-label">Email</span>
          <span className="contact-display-text">{EMAIL}</span>
        </a>
      </div>
      <p className="contact-note">
        I'm always open to new opportunities, collaborations, or just a friendly chat!
      </p>
    </section>
  );
};

export default Contact;
