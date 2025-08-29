import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaRocket, FaVideo, FaDatabase, FaCode, FaServer } from "react-icons/fa";
import gocartImg from "../images/gocart.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import taskManagerDemo from "../images/taskManagerDemo.mp4";
import eduproFrontend from "../images/Edupro Frontend.webm";
import eduproBackend from "../images/Edupro Backend.webm";
import csdDemo from "../images/CSD.webm";

const ProjectsGallery = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState("fullstack");
  const [videoThumbnails, setVideoThumbnails] = useState({});

  const content = {
    en: {
      title: "Projects",
      categories: {
        fullstack: "Full Stack",
        frontend: "Frontend",
        backend: "Backend"
      },
      featured: "Featured Project"
    },
    ar: {
      title: "المشاريع",
      categories: {
        fullstack: "تطوير شامل",
        frontend: "الواجهة الأمامية",
        backend: "الخلفية"
      },
      featured: "مشروع مميز"
    }
  };

  const current = content[language] || content.en;

  // Function to capture first frame of video
  const captureVideoFrame = (videoSrc, projectId) => {
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.muted = true;
    video.playsInline = true;
    
    video.onloadeddata = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.8);
      setVideoThumbnails(prev => ({
        ...prev,
        [projectId]: thumbnailUrl
      }));
    };
    
    video.src = videoSrc;
    video.load();
  };

  // Generate thumbnails for videos
  useEffect(() => {
    // Capture thumbnail for EduPro Frontend
    if (eduproFrontend) {
      captureVideoFrame(eduproFrontend, 'edupro-frontend');
    }
    
    // Capture thumbnail for CSD
    if (csdDemo) {
      captureVideoFrame(csdDemo, 'csd');
    }
  }, []);

  const projects = {
    fullstack: [
      {
        id: 'edupro',
        name: {
          en: "🚀 EduPro - Full Stack Educational Platform",
          ar: "🚀 إيديوبرو - منصة تعليمية متكاملة"
        },
        description: {
          en: "A comprehensive educational platform built with Django backend and SQLite database, featuring a modern frontend interface with customizable interface and a modern admin dashboard. The platform provides course management, user authentication, student progress tracking, and an intuitive admin dashboard. Built with RESTful APIs for seamless frontend-backend communication, this project demonstrates full-stack development capabilities with Django's robust backend framework.",
          ar: "منصة تعليمية شاملة مبنية بخلفية Django وقاعدة بيانات SQLite، تتميز بواجهة أمامية حديثة مع واجهة قابلة للتخصيص ولوحة تحكم إدارية حديثة. توفر المنصة إدارة الدورات التدريبية، مصادقة المستخدمين، تتبع تقدم الطلاب، ولوحة تحكم بديهية. مبنية بواجهات برمجة RESTful للتواصل السلس بين الواجهة الأمامية والخلفية، يوضح هذا المشروع قدرات التطوير المتكاملة مع إطار العمل القوي لـ Django."
        },
        tech: {
          en: ["Django", "SQLite", "Python", "HTML/CSS", "JavaScript", "Bootstrap", "Responsive Design"],
          ar: ["Django", "SQLite", "Python", "HTML/CSS", "JavaScript", "Bootstrap", "تصميم متجاوب"]
        },
        github: "https://github.com/ansari356/EduPro_frontend.git",
        githubBackend: "https://github.com/ansari356/EduPro_backend.git",
        featured: true,
        videos: [
          {
            title: {
              en: "Frontend Demo",
              ar: "عرض الواجهة الأمامية"
            },
            src: eduproFrontend,
            type: "frontend"
          },
          {
            title: {
              en: "Backend Demo",
              ar: "عرض الخلفية"
            },
            src: eduproBackend,
            type: "backend"
          }
        ]
      },
      {
        id: 'csd',
        name: {
          en: "🏢 CSD - Production Website & API Integration",
          ar: "🏢 CSD - موقع إنتاجي وتكامل API"
        },
        description: {
          en: "My first production-level deployed project for CSD company. Developed and deployed the frontend of csd366.com website with seamless integration to Fast APIs. This commercial project demonstrates professional development skills, production deployment experience, and real-world client collaboration.",
          ar: "مشروعي الأول على مستوى الإنتاج لنشر شركة CSD. قمت بتطوير ونشر الواجهة الأمامية لموقع csd366.com مع تكامل سلس مع Fast APIs. يوضح هذا المشروع التجاري مهارات التطوير المهنية، خبرة النشر الإنتاجي، والتعاون مع العملاء في العالم الحقيقي."
        },
        tech: {
          en: ["Frontend Development", "Fast APIs", "Production Deployment", "Client Collaboration", "Professional Development"],
          ar: ["تطوير الواجهة الأمامية", "Fast APIs", "النشر الإنتاجي", "تعاون العملاء", "التطوير المهني"]
        },
        demo: "https://csd366.com",
        featured: false,
        video: csdDemo,
      },
    ],
    frontend: [
      {
        name: {
          en: "Movies App",
          ar: "تطبيق الأفلام"
        },
        description: {
          en: "Responsive movie browser with multi-language support, dark mode, and real-time data from TMDB API.",
          ar: "متصفح أفلام متجاوب مع دعم متعدد اللغات، الوضع المظلم، وبيانات فورية من TMDB API."
        },
        tech: {
          en: ["React", "JavaScript", "Bootstrap", "TMDB API"],
          ar: ["React", "JavaScript", "Bootstrap", "TMDB API"]
        },
        github: "https://github.com/Exsillium/movies-app",
        image: project2,
        demo: "https://movies-app-nine-beryl-46.vercel.app/",
      },
      {
        name: {
          en: "🛒 GoCart – E-Commerce Web Application",
          ar: "🛒 جو كارت – تطبيق ويب للتجارة الإلكترونية"
        },
        description: {
          en: "A modern e-commerce web app built with React and DummyJSON API. Features product listing, details, cart system, stock status, and clean mobile-first UI.",
          ar: "تطبيق ويب تجارة إلكترونية حديث مبني بـ React و DummyJSON API. يتميز بقائمة المنتجات، التفاصيل، نظام السلة، حالة المخزون، وواجهة مستخدم نظيفة تعطي الأولوية للهاتف المحمول."
        },
        tech: {
          en: ["React", "Bootstrap", "React Router"],
          ar: ["React", "Bootstrap", "React Router"]
        },
        github: "https://github.com/AbdallahSaqr/GoCart-Ecommerce-Webapp",
        image: gocartImg,
        demo: "https://go-cart-ecommerce-webapp.vercel.app/",
      },
    ],
    backend: [
      {
        name: {
          en: "Task Manager App",
          ar: "تطبيق إدارة المهام"
        },
        description: {
          en: "Web app for creating, updating, and deleting tasks with persistent storage and dynamic task listing.",
          ar: "تطبيق ويب لإنشاء وتحديث وحذف المهام مع تخزين دائم وقائمة مهام ديناميكية."
        },
        tech: {
          en: ["Django", "SQLite", "Bootstrap"],
          ar: ["Django", "SQLite", "Bootstrap"]
        },
        github: "https://github.com/AbdallahSaqr/django101-task-tracker",
        image: project3,
        video: taskManagerDemo,
      },
    ],
  };

  const renderProjectCard = (project, index) => {
    const isFullstack = activeCategory === "fullstack";
    
    // Get thumbnail for projects with videos
    const getProjectThumbnail = (project) => {
      if (project.image) return project.image;
      
      if (project.id === 'edupro' && videoThumbnails['edupro-frontend']) {
        return videoThumbnails['edupro-frontend'];
      }
      
      if (project.id === 'csd' && videoThumbnails['csd']) {
        return videoThumbnails['csd'];
      }
      
      return null;
    };
    
    const thumbnail = getProjectThumbnail(project);
    
    return (
      <div 
        key={index} 
        className={`project-card ${project.featured ? 'featured-project' : ''}`}
        style={{ 
          gridColumn: isFullstack ? '1 / -1' : 'auto',
          maxWidth: isFullstack ? '800px' : 'none',
          margin: isFullstack ? '0 auto' : '0'
        }}
      >
        {project.featured && (
          <div className="featured-badge">{current.featured}</div>
        )}
        
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={project.name} 
            className="project-img"
          />
        ) : project.videos ? (
          <div className="project-img-placeholder">
            <FaVideo className="placeholder-icon" />
            <span className="placeholder-text">
              {language === "ar" ? "عروض فيديو متعددة متاحة" : "Multiple Video Demos Available"}
            </span>
          </div>
        ) : project.video ? (
          <div className="project-img-placeholder">
            <FaVideo className="placeholder-icon" />
            <span className="placeholder-text">
              {language === "ar" ? "عرض فيديو متاح" : "Video Demo Available"}
            </span>
          </div>
        ) : (
          <div className="project-img-placeholder">
            <FaCode className="placeholder-icon" />
            <span className="placeholder-text">
              {language === "ar" ? "معاينة المشروع" : "Project Preview"}
            </span>
          </div>
        )}

        <h3 className="project-title">
          {typeof project.name === 'object' ? project.name[language] : project.name}
        </h3>
        <p className="project-desc">
          {typeof project.description === 'object' ? project.description[language] : project.description}
        </p>
        
        <div className="tech-badges">
          {(typeof project.tech === 'object' ? project.tech[language] : project.tech).map((tech, techIndex) => (
            <span key={techIndex} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-btn project-btn--github"
          >
            <FaGithub />
            {language === "ar" ? "GitHub" : "GitHub"}
          </a>
          
          {project.githubBackend && (
            <a 
              href={project.githubBackend} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-btn project-btn--github"
            >
              <FaServer />
              {language === "ar" ? "Backend GitHub" : "Backend GitHub"}
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-btn project-btn--demo"
            >
              <FaRocket />
              {language === "ar" ? "عرض مباشر" : "Live Demo"}
            </a>
          )}
          
          {project.videos && (
            <button 
              onClick={() => {
                setModalProject(project);
                setCurrentVideoIndex(0);
              }}
              className="project-btn project-btn--video"
            >
              <FaVideo />
              {language === "ar" ? "فيديو" : "Videos"}
            </button>
          )}
          
          {project.video && !project.videos && (
            <button 
              onClick={() => {
                setModalProject(project);
                setCurrentVideoIndex(0);
              }}
              className="project-btn project-btn--video"
            >
              <FaVideo />
              {language === "ar" ? "فيديو" : "Video"}
            </button>
          )}
        </div>
      </div>
    );
  };

  const [modalProject, setModalProject] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">{current.title}</h2>
      
      <div className="project-categories">
        {Object.entries(current.categories).map(([key, label]) => (
          <button
            key={key}
            className={`category-tab ${activeCategory === key ? 'active' : ''}`}
            onClick={() => setActiveCategory(key)}
          >
            {key === "fullstack" && <FaServer className="category-tab-icon" />}
            {key === "frontend" && <FaCode className="category-tab-icon" />}
            {key === "backend" && <FaDatabase className="category-tab-icon" />}
            {label}
          </button>
        ))}
      </div>

      {Object.entries(projects).map(([category, categoryProjects]) => (
        <div 
          key={category}
          className={`project-section ${activeCategory === category ? 'active' : ''}`}
        >
          <div className={`projects-grid ${category === 'fullstack' ? 'fullstack-grid' : ''}`}>
            {categoryProjects.map((project, index) => 
              renderProjectCard(project, index)
            )}
          </div>
        </div>
      ))}

      {/* Video Modal */}
      {modalProject && (
        <div className="modal-overlay" onClick={() => setModalProject(null)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setModalProject(null)}
            >
              ×
            </button>
            <h3 className="modal-header">
              {typeof modalProject.name === 'object' ? modalProject.name[language] : modalProject.name}
            </h3>
            
            {modalProject.videos ? (
              <div className="video-container">
                <div className="video-navigation">
                  <button 
                    className="video-nav-btn"
                    onClick={() => setCurrentVideoIndex(prev => 
                      prev > 0 ? prev - 1 : modalProject.videos.length - 1
                    )}
                    disabled={modalProject.videos.length <= 1}
                  >
                    ←
                  </button>
                  <span className="video-counter">
                    {currentVideoIndex + 1} / {modalProject.videos.length}
                  </span>
                  <button 
                    className="video-nav-btn"
                    onClick={() => setCurrentVideoIndex(prev => 
                      prev < modalProject.videos.length - 1 ? prev + 1 : 0
                    )}
                    disabled={modalProject.videos.length <= 1}
                  >
                    →
                  </button>
                </div>
                
                <div className="video-content">
                  <h4 className="video-title">
                    {typeof modalProject.videos[currentVideoIndex].title === 'object' 
                      ? modalProject.videos[currentVideoIndex].title[language] 
                      : modalProject.videos[currentVideoIndex].title}
                  </h4>
                  <video 
                    className="modal-iframe" 
                    controls 
                    autoPlay 
                    muted
                    src={modalProject.videos[currentVideoIndex].src}
                    key={currentVideoIndex}
                  />
                </div>
              </div>
            ) : modalProject.video && (
              <video 
                className="modal-iframe" 
                controls 
                autoPlay 
                muted
                src={modalProject.video}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsGallery;
