import React from "react";

const ExperienceTimeline = ({ language }) => {
  const content = {
    en: {
      title: "Experience & Education",
      experience: [
        {
          title: "Full Stack Developer",
          org: "Freelance",
          desc: "Developing web applications using React, Node.js, and modern web technologies. Working with clients to deliver scalable solutions."
        },
        {
          title: "Python Developer",
          org: "Self-Employed",
          desc: "Building backend systems and automation tools using Python, Django, and Flask frameworks."
        }
      ],
      education: [
        {
          title: "Bachelor's Degree in Computer Science",
          org: "University of Alexandria",
          desc: "Studied computer science fundamentals, algorithms, data structures, and software engineering principles."
        }
      ]
    },
    ar: {
      title: "الخبرة والتعليم",
      experience: [
        {
          title: "مطور ويب شامل",
          org: "عمل حر",
          desc: "تطوير تطبيقات الويب باستخدام React و Node.js وتقنيات الويب الحديثة. العمل مع العملاء لتقديم حلول قابلة للتوسع."
        },
        {
          title: "مطور Python",
          org: "عمل مستقل",
          desc: "بناء أنظمة الخلفية وأدوات الأتمتة باستخدام Python و Django و Flask."
        }
      ],
      education: [
        {
          title: "بكالوريوس في علوم الحاسوب",
          org: "جامعة الإسكندرية",
          desc: "دراسة أساسيات علوم الحاسوب والخوارزميات وهياكل البيانات ومبادئ هندسة البرمجيات."
        }
      ]
    }
  };

  const current = content[language] || content.en;

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">{current.title}</h2>
      
      <div className="experience-list">
        {/* Experience */}
        {current.experience.map((exp, index) => (
          <div key={`exp-${index}`} className="experience-card">
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-org">{exp.org}</p>
            <p className="experience-desc">{exp.desc}</p>
          </div>
        ))}
        
        {/* Education */}
        {current.education.map((edu, index) => (
          <div key={`edu-${index}`} className="experience-card">
            <h3 className="experience-title">{edu.title}</h3>
            <p className="experience-org">{edu.org}</p>
            <p className="experience-desc">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
