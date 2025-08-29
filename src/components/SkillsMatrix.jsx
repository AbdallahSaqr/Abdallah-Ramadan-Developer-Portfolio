import React, { useState } from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaDatabase, FaGit, FaDocker, FaAws, FaFigma, FaGithub 
} from "react-icons/fa";

const SkillsMatrix = ({ language }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const content = {
    en: {
      title: "Skills & Technologies",
      categories: {
        frontend: "Frontend Development",
        backend: "Backend Development",
        tools: "Tools & Platforms"
      }
    },
    ar: {
      title: "المهارات والتقنيات",
      categories: {
        frontend: "تطوير الواجهة الأمامية",
        backend: "تطوير الخلفية",
        tools: "الأدوات والمنصات"
      }
    }
  };

  const current = content[language] || content.en;

  const skills = {
    frontend: [
      { name: "HTML5", icon: FaHtml5, desc: "Semantic markup and accessibility" },
      { name: "CSS3", icon: FaCss3Alt, desc: "Modern styling and animations" },
      { name: "JavaScript", icon: FaJs, desc: "ES6+ and modern JS features" },
      { name: "React", icon: FaReact, desc: "Component-based UI development" }
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs, desc: "Server-side JavaScript runtime" },
      { name: "Python", icon: FaPython, desc: "Backend development and automation" },
      { name: "MongoDB", icon: FaDatabase, desc: "NoSQL database management" },
      { name: "Express", icon: FaNodeJs, desc: "Web application framework" }
    ],
    tools: [
      { name: "Git", icon: FaGit, desc: "Version control and collaboration" },
      { name: "GitHub", icon: FaGithub, desc: "Code hosting and collaboration" },
      { name: "Docker", icon: FaDocker, desc: "Containerization and deployment" },
      { name: "AWS", icon: FaAws, desc: "Cloud infrastructure and services" }
    ]
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">{current.title}</h2>
      
      <div className="skills-grid">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category} className="skill-group">
            <h3 className="skill-category">
              {current.categories[category]}
            </h3>
            <div className="skill-badges">
              {categorySkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className={`skill-badge ${hoveredSkill === skill.name ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    tabIndex={0}
                  >
                    <IconComponent className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-desc">{skill.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMatrix;
