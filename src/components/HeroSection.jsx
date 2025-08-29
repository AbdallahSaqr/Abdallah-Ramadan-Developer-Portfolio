import React from "react";
import Profile from "../images/Profile.jpg";

const HeroSection = ({ language }) => {
  const content = {
    en: {
      title: "Abdallah Ramadan",
      subtitle: "Full Stack Developer",
      description: "Passionate developer crafting digital experiences with modern technologies. Specializing in React, Django, and cloud solutions.",
      cta: "Download My CV"
    },
    ar: {
      title: "عبدالله رمضان",
      subtitle: "مطور ويب شامل",
      description: "مطور شغوف بصنع تجارب رقمية باستخدام التقنيات الحديثة. متخصص في React و Django وحلول السحابة.",
      cta: "تحميل السيرة الذاتية"
    }
  };

  const current = content[language] || content.en;

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <img 
          src={Profile} 
          alt={language === "ar" ? "عبدالله رمضان" : "Abdallah Ramadan"} 
          className="hero-portrait"
        />
        <h1 className="hero-title">{current.title}</h1>
        <h2 className="hero-subtitle">{current.subtitle}</h2>
        <p className="hero-description">{current.description}</p>
        <a href="https://drive.usercontent.google.com/download?id=1Mo7UmYsiHy2MznVccCF7VyeNd0gMdVyv&export=download&authuser=2&confirm=t&uuid=83641a53-fd67-420c-b264-79f070b344b6&at=AN8xHoqi-tMgsDH8joXAszPvkmJz:1756495873873" className="btn-animated">
          {current.cta}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
