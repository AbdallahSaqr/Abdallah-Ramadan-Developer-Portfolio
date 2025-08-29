import React from "react";

const AboutMe = ({ language }) => {
  const content = {
    en: {
      title: "About Me",
      description: "I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. I love creating elegant solutions to complex problems and building applications that make a difference.",
      highlight: "My journey in software development started with Python and has evolved to include modern web technologies like React, Node.js, and cloud platforms.",
      quote: "The best code is not just functional, but also readable, maintainable, and scalable.",
      note: "Always learning, always improving, always building."
    },
    ar: {
      title: "حول",
      description: "أنا مطور ويب شامل شغوف بأساس قوي في تقنيات الواجهة الأمامية والخلفية. أحب إنشاء حلول أنيقة للمشاكل المعقدة وبناء تطبيقات تحدث فرقاً.",
      highlight: "بدأت رحلتي في تطوير البرمجيات بـ Python وتطورت لتشمل تقنيات الويب الحديثة مثل React و Node.js ومنصات السحابة.",
      quote: "أفضل الكود ليس مجرد وظيفي، بل قابل للقراءة والصيانة والتوسع.",
      note: "أتعلم دائماً، أتحسن دائماً، أبني دائماً."
    }
  };

  const current = content[language] || content.en;

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">{current.title}</h2>
      <div className="bubble-container">
        <p className="about-desc">
          {current.description}
        </p>
        <p className="about-desc">
          {current.highlight}
        </p>
        <blockquote className="about-quote">
          {current.quote}
        </blockquote>
        <p className="about-note">
          {current.note}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
