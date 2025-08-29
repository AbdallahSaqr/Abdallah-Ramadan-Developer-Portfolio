import React, { useState } from "react";
import { FaGithub, FaRocket, FaVideo } from "react-icons/fa";
import gocartImg from "../images/gocart.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import taskManagerDemo from "../images/taskManagerDemo.mp4";
import eduproFrontend from "../images/Edupro Frontend.webm";
import eduproBackend from "../images/Edupro Backend.webm";
import csdDemo from "../images/CSD.webm";

const projects = {
     fullstack: [
     {
       name: "🚀 EduPro - Full Stack Educational Platform",
       description:
         "A comprehensive educational platform built with Django backend and SQLite database, featuring a modern frontend interface. The platform provides course management, user authentication, student progress tracking, and an intuitive admin dashboard. Built with RESTful APIs for seamless frontend-backend communication, this project demonstrates full-stack development capabilities with Django's robust backend framework.",
       tech: ["Django", "SQLite", "Python", "HTML/CSS", "JavaScript", "Bootstrap", "Responsive Design"],
       github: "https://github.com/ansari356/EduPro_frontend.git",
       githubBackend: "https://github.com/ansari356/EduPro_backend.git",
       featured: true,
       videos: [
         {
           title: "Frontend Demo",
           src: eduproFrontend,
           type: "frontend"
         },
         {
           title: "Backend Demo",
           src: eduproBackend,
           type: "backend"
         }
       ]
     },
     {
       name: "🏢 CSD - Production Website & API Integration",
       description:
         "My first production-level deployed project for CSD company. Developed and deployed the frontend of csd366.com website with seamless integration to Fast APIs. This commercial project demonstrates professional development skills, production deployment experience, and real-world client collaboration.",
       tech: ["Frontend Development", "Fast APIs", "Production Deployment", "Client Collaboration", "Professional Development"],
       demo: "https://csd366.com",
       featured: false,
       video: csdDemo,
     },
    {
      name: "🛒 GoCart – E-Commerce Web Application",
      description:
        "A modern e-commerce web app built with React and DummyJSON API. Features product listing, details, cart system, stock status, and clean mobile-first UI.",
      tech: ["React", "Bootstrap", "React Router"],
      github: "https://github.com/AbdallahSaqr/GoCart-Ecommerce-Webapp",
      image: gocartImg,
      demo: "https://go-cart-ecommerce-webapp.vercel.app/",
    },
  ],
  frontend: [
    {
      name: "Movies App",
      description:
        "Responsive movie browser with multi-language support, dark mode, and real-time data from TMDB API.",
      tech: ["React", "JavaScript", "Bootstrap", "TMDB API"],
      github: "https://github.com/Exsillium/movies-app",
      image: project2,
      demo: "https://movies-app-nine-beryl-46.vercel.app/",
    },
  ],
  backend: [
    {
      name: "Task Manager App",
      description:
        "Web app for creating, updating, and deleting tasks with persistent storage and dynamic task listing.",
      tech: ["Django", "SQLite", "Bootstrap"],
      github: "https://github.com/AbdallahSaqr/django101-task-tracker",
      image: project3,
      video: taskManagerDemo,
    },
  ],
};

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(0);

  const renderProjectCard = (proj) => (
    <div
      className={`project-card ${proj.featured ? 'featured-project' : ''}`}
      key={proj.name}
      tabIndex={0}
      aria-label={proj.name}
    >
      {proj.image ? (
        <div className="project-img-container">
          <img src={proj.image} alt={proj.name} className="project-img" />
          <div className="project-img-overlay">
            <span className="project-img-icon">🔍</span>
          </div>
        </div>
      ) : proj.videos ? (
        <div className="project-img-container">
          <video
            src={proj.videos[0].src}
            className="project-img"
            muted
            preload="metadata"
            onLoadedData={(e) => {
              e.target.currentTime = 0;
            }}
            onClick={() => setModalProject(proj)}
            style={{ cursor: 'pointer' }}
          />
          <div className="project-img-overlay">
            <span className="project-img-icon">🎥</span>
            <span className="video-count">{proj.videos.length} Videos</span>
          </div>
        </div>
      ) : proj.video ? (
        <div className="project-img-container">
          <video
            src={proj.video}
            className="project-img"
            muted
            preload="metadata"
            onLoadedData={(e) => {
              e.target.currentTime = 0;
            }}
            onClick={() => setModalProject(proj)}
            style={{ cursor: 'pointer' }}
          />
          <div className="project-img-overlay">
            <span className="project-img-icon">🎥</span>
          </div>
        </div>
      ) : (
        <div className="project-img-container">
          <div className="project-img-placeholder">
            <span className="placeholder-icon">🚀</span>
            <span className="placeholder-text">Full Stack Project</span>
          </div>
        </div>
      )}
      {proj.featured && (
        <div className="featured-badge">
          <span>⭐ Featured Project</span>
        </div>
      )}
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
         {proj.github && proj.githubBackend ? (
           <>
             <a
               href={proj.github}
               target="_blank"
               rel="noopener noreferrer"
               className="project-btn project-btn--github"
               aria-label="Frontend GitHub"
             >
               <FaGithub style={{ marginRight: 6 }} />
               Frontend
             </a>
             <a
               href={proj.githubBackend}
               target="_blank"
               rel="noopener noreferrer"
               className="project-btn project-btn--github"
               aria-label="Backend GitHub"
             >
               <FaGithub style={{ marginRight: 6 }} />
               Backend
             </a>
           </>
         ) : proj.github ? (
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
         ) : null}
        {proj.demo && !proj.videos && (
          <a
            href={proj.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn--demo"
            aria-label="Live Demo"
          >
            <FaRocket style={{ marginRight: 6 }} />
            Live Demo
          </a>
        )}
        {(proj.video || proj.videos) && (
          <button
            className="project-btn project-btn--demo"
            onClick={() => setModalProject(proj)}
            aria-label="Watch Video"
          >
            <FaVideo style={{ marginRight: 6 }} />
            Watch Video
          </button>
        )}
      </div>
    </div>
  );

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        Projects
      </h2>

      {/* Full Stack Projects Section */}
      <div className="project-category">
        <h3 className="category-title">🚀 Full Stack Projects</h3>
        <div className="projects-grid fullstack-grid">
          {projects.fullstack.map(renderProjectCard)}
        </div>
      </div>

      {/* Frontend Projects Section */}
      <div className="project-category">
        <h3 className="category-title">🎨 Frontend Projects</h3>
        <div className="projects-grid">
          {projects.frontend.map(renderProjectCard)}
        </div>
      </div>

      {/* Backend Projects Section */}
      <div className="project-category">
        <h3 className="category-title">⚙️ Backend Projects</h3>
        <div className="projects-grid">
          {projects.backend.map(renderProjectCard)}
        </div>
      </div>

      {/* Modal for video demos */}
      {modalProject && (modalProject.video || modalProject.videos) && (
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
                {modalProject.name} — Demo Videos
              </span>
            </div>

            {modalProject.videos ? (
              <div className="video-selector">
                {modalProject.videos.map((video, index) => (
                  <button
                    key={index}
                    className={`video-tab ${selectedVideo === index ? 'active' : ''}`}
                    onClick={() => setSelectedVideo(index)}
                  >
                    {video.title}
                  </button>
                ))}
              </div>
            ) : null}

            <video
              src={modalProject.videos ? modalProject.videos[selectedVideo || 0].src : modalProject.video}
              controls
              className="modal-iframe"
              style={{ background: "#000" }}
              autoPlay
              key={modalProject.videos ? selectedVideo : 'single'}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
