import React from "react";

const Footer = ({ language, theme }) => {
  const content = {
    en: {
      text: "© 2024 Abdallah Ramadan. Built with React and modern web technologies.",
      made: "Made with ❤️ in Egypt"
    },
    ar: {
      text: "© 2024 عبدالله رمضان. مبني بـ React وتقنيات الويب الحديثة.",
      made: "صنع بـ ❤️ في مصر"
    }
  };

  const current = content[language] || content.en;

  return (
    <footer className="footer">
      <p>{current.text}</p>
      <p>{current.made}</p>
    </footer>
  );
};

export default Footer;
