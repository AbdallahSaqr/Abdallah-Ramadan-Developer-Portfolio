import React, { useState } from "react";
import { FaGithub, FaRocket, FaVideo } from "react-icons/fa";
import gocartImg from "../images/gocart.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import taskManagerDemo from "../images/taskManagerDemo.mp4";

const projects = [
  {
    name: "🛒 GoCart – E-Commerce Web Application",
    description:
      "A modern e-commerce web app built with React and DummyJSON API. Features product listing, details, cart system, stock status, and clean mobile-first UI.",
    tech: ["React", "Bootstrap", "React Router"],
    github: "https://github.com/AbdallahSaqr/GoCart-Ecommerce-Webapp",
    image: gocartImg,
    demo: "https://go-cart-ecommerce-webapp.vercel.app/",
  },
  {
    name: "Movies App",
    description:
      "Responsive movie browser with multi-language support, dark mode, and real-time data from TMDB API.",
    tech: ["React", "JavaScript", "Bootstrap", "TMDB API"],
    github: "https://github.com/Exsillium/movies-app",
    image: project2,
    demo: "https://movies-app-nine-beryl-46.vercel.app/",
  },
  {
    name: "Task Manager App",
    description:
      "Web app for creating, updating, and deleting tasks with persistent storage and dynamic task listing.",
    tech: ["Django", "SQLite", "Bootstrap"],
    github: "https://github.com/AbdallahSaqr/django101-task-tracker",
    image: project3,
    video: taskManagerDemo,
  },
];

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        Projects
        <span className="section-underline"></span>
      </h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div
            className="project-card"
            key={proj.name}
            tabIndex={0}
            aria-label={proj.name}
          >
            <div className="project-img-container">
              <img src={proj.image} alt={proj.name} className="project-img" />
              <div className="project-img-overlay">
                <span className="project-img-icon">🔍</span>
              </div>
            </div>
            <h3 className="project-title">{proj.name}</h3>
            <p className="project-desc">{proj.description}</p>
            <div className="project-tech">
              {proj.tech.map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-actions">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn--github"
                aria-label="GitHub"
              >
                <FaGithub style={{ marginRight: 6 }} />
                GitHub
              </a>
              {proj.demo && (
                <button
                  className="project-btn project-btn--demo"
                  onClick={() => setModalProject(proj)}
                  aria-label="Live Demo"
                >
                  <FaRocket style={{ marginRight: 6 }} />
                  Live Demo
                </button>
              )}
              {proj.video && (
                <button
                  className="project-btn project-btn--video"
                  onClick={() => setModalProject(proj)}
                  aria-label="Watch Video"
                >
                  <FaVideo style={{ marginRight: 6 }} />
                  Watch Video
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for live demo or video */}
      {modalProject && (
        <div className="modal-overlay" onClick={() => setModalProject(null)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setModalProject(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="modal-header">
              <span>
                {modalProject.name} —{" "}
                {modalProject.demo ? "Live Demo" : "Demo Video"}
              </span>
            </div>
            {modalProject.demo && (
              <iframe
                src={modalProject.demo}
                title={modalProject.name}
                className="modal-iframe"
                frameBorder="0"
                allowFullScreen
              />
            )}
            {modalProject.video && (
              <video
                src={modalProject.video}
                controls
                className="modal-iframe"
                style={{ background: "#000" }}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
