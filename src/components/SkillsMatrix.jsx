import React, { useState } from "react";
import { FaReact, FaPython, FaDocker, FaLinux, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiDjango, SiFlask, SiOdoo, SiGithub } from "react-icons/si";

const skillGroups = {
  Frontend: [
    { name: "React", icon: <FaReact color="#61dafb" />, desc: "Modern UI library for building interfaces" },
    { name: "HTML", icon: <FaHtml5 color="#e34c26" />, desc: "Semantic markup" },
    { name: "CSS", icon: <FaCss3Alt color="#1572b6" />, desc: "Responsive styling" },
    { name: "JavaScript", icon: <FaJs color="#f7df1e" />, desc: "Dynamic scripting" }
  ],
  Backend: [
    { name: "Python", icon: <FaPython color="#3776ab" />, desc: "Powerful backend language" },
    { name: "Django", icon: <SiDjango color="#092e20" />, desc: "Robust Python web framework" },
    { name: "Flask", icon: <SiFlask color="#000" />, desc: "Lightweight Python microframework" },
    { name: "Odoo", icon: <SiOdoo color="#874c8c" />, desc: "Open-source ERP platform" }
  ],
  DevOps: [
    { name: "Docker", icon: <FaDocker color="#2496ed" />, desc: "Containerization" },
    { name: "Linux", icon: <FaLinux color="#000" />, desc: "Server OS and scripting" }
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt color="#f34f29" />, desc: "Version control" },
    { name: "GitHub", icon: <SiGithub color="#333" />, desc: "Remote code hosting" }
  ]
};

const Skills = () => {
  const [hovered, setHovered] = useState({ group: null, idx: null });

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">
        Skills
      </h2>
      <div className="skills-grid">
        {Object.entries(skillGroups).map(([category, skills], groupIdx) => (
          <div className="skill-group" key={category}>
            <h3 className="skill-category">{category}</h3>
            <div className="skill-badges">
              {skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className={`skill-badge${hovered.group === groupIdx && hovered.idx === idx ? " hovered" : ""}`}
                  onMouseEnter={() => setHovered({ group: groupIdx, idx })}
                  onMouseLeave={() => setHovered({ group: null, idx: null })}
                  tabIndex={0}
                  aria-label={skill.desc}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-desc">{hovered.group === groupIdx && hovered.idx === idx ? skill.desc : ""}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
