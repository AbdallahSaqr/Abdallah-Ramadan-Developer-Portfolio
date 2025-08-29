import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = ({ language }) => {
  const content = {
    en: {
      title: "Get In Touch",
      note: "Feel free to reach out for collaborations, opportunities, or just to say hello!",
      contacts: [
        {
          name: "email",
          label: "Email",
          icon: FaEnvelope,
          url: "mailto:abdallahramadan2707@gmail.com",
          displayText: "abdallahramadan2707@gmail.com",
          color: "#ea4335"
        },
        {
          name: "phone",
          label: "Phone",
          icon: FaPhone,
          url: "tel:+201069100373",
          displayText: "+20 106 910 0373",
          color: "#22c55e"
        },
        {
          name: "linkedin",
          label: "LinkedIn",
          icon: FaLinkedin,
          url: "https://linkedin.com/in/abdallahramadan7",
          displayText: "abdallahramadan7",
          color: "#0077b5"
        },
        {
          name: "github",
          label: "GitHub",
          icon: FaGithub,
          url: "https://github.com/AbdallahSaqr",
          displayText: "AbdallahSaqr",
          color: "#333"
        }
      ]
    },
    ar: {
      title: "تواصل معي",
      note: "لا تتردد في التواصل للتعاون أو الفرص أو فقط لتحية!",
      contacts: [
        {
          name: "email",
          label: "البريد الإلكتروني",
          icon: FaEnvelope,
          url: "mailto:abdallahramadan2707@gmail.com",
          displayText: "abdallahramadan2707@gmail.com",
          color: "#ea4335"
        },
        {
          name: "phone",
          label: "الهاتف",
          icon: FaPhone,
          url: "tel:+201069100373",
          displayText: "+373001960102",
          color: "#22c55e"
        },
        {
          name: "linkedin",
          label: "LinkedIn",
          icon: FaLinkedin,
          url: "https://linkedin.com/in/abdallahramadan7",
          displayText: "abdallahramadan7",
          color: "#0077b5"
        },
        {
          name: "github",
          label: "GitHub",
          icon: FaGithub,
          url: "https://github.com/AbdallahSaqr",
          displayText: "AbdallahSaqr",
          color: "#333"
        }
      ]
    }
  };

  const current = content[language] || content.en;

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">{current.title}</h2>
      
      <div className="contact-cards">
        {current.contacts.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <a
              key={index}
              href={contact.url}
              target={contact.name === "phone" ? "_self" : "_blank"}
              rel={contact.name === "phone" ? "" : "noopener noreferrer"}
              className="contact-card"
              style={{ "--contact-color": contact.color }}
            >
              <IconComponent 
                className="contact-icon" 
                style={{ color: contact.color }}
              />
              <span className="contact-label">{contact.label}</span>
              <span className="contact-display-text">{contact.displayText}</span>
            </a>
          );
        })}
      </div>
      
      <p className="contact-note">{current.note}</p>
    </section>
  );
};

export default ContactSection;
