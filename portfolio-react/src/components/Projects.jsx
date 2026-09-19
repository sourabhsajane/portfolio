import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TiltCard from './TiltCard'
import './Projects.css'

const projectsData = [
  {
    id: 'hirefy',
    num: '01',
    title: 'Hirefy – Recruitment Platform',
    subtitle: 'Full-Stack Role-Based Job Portal with Real-Time Database',
    desc: 'Full-stack recruitment platform built with React.js, Node.js, Express.js, and Supabase providing role-based functionality for candidates, recruiters, and administrators.',
    longDesc:
      'Developed a comprehensive full-stack recruitment platform featuring dedicated workflows for candidates, recruiters, and platform administrators. Implemented robust authentication and role-based access control to securely partition permissions, created backend services using Node.js and Express.js for job postings, resume submissions, and applicant tracking, and integrated Supabase for scalable database storage and user management.',
    tech: ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Node.js', 'Express.js', 'Supabase'],
    features: [
      'Role-based access control (RBAC) securely segregating candidate, recruiter, and administrator roles.',
      'Backend endpoints built with Node.js and Express.js supporting job postings, resume creation, and real-time application tracking.',
      'Supabase cloud database integration with relational tables and automated user management.',
      'Responsive, mobile-friendly interface designed with React.js and Bootstrap.',
    ],
    github: 'https://github.com/sourabhsajane',
    live: 'https://github.com/sourabhsajane',
    color: '#8b5cf6',
    icon: 'fas fa-briefcase',
    badge: 'Resume Featured Project',
  },
  {
    id: 'java-spring-service',
    num: '02',
    title: 'Full Stack Java & Spring Boot Application',
    subtitle: 'Enterprise Backend Services & RESTful API Endpoints',
    desc: 'End-to-end full-stack web application featuring Spring Boot backend services, relational MySQL data persistence, and React frontend integration.',
    longDesc:
      'Engineered enterprise web services using Java and Spring Boot, establishing secure REST API endpoints and transactional database operations with MySQL. Designed with separation of concerns between controller, service, and repository layers, and integrated seamlessly with React frontend components.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'React.js', 'Maven'],
    features: [
      'Structured Spring Boot backend services with robust dependency injection and modular controllers.',
      'Relational database architecture utilizing MySQL with optimized queries and data integrity.',
      'REST API endpoints tested and integrated with React frontend components.',
      'Applied Generative AI development tools for accelerated debugging and test-driven workflows.',
    ],
    github: 'https://github.com/sourabhsajane',
    live: 'https://github.com/sourabhsajane',
    color: '#00f5ff',
    icon: 'fas fa-leaf',
    badge: 'Enterprise Full Stack',
  },
  {
    id: 'portfolio-3d',
    num: '03',
    title: 'Interactive 3D WebGL Portfolio',
    subtitle: 'Modern Motion Architecture & Three.js Graphics',
    desc: 'High-performance interactive web application built with React.js and Three.js featuring real-time WebGL graphics, 3D physics cards, and responsive design.',
    longDesc:
      'Engineered an interactive 3D web application utilizing React.js, Three.js, and Framer Motion. Features a dynamic holographic Cyber-Core responding to cursor physics, 3D perspective tilt calculations, and a complete dark glassmorphism design system.',
    tech: ['React.js', 'Three.js', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    features: [
      'Three.js WebGL canvas with interactive orbital particles and real-time mouse tracking.',
      'Custom physics-based 3D card tilt component with specular glare calculations.',
      'Clean semantic HTML5 structure, responsive layout, and zero third-party UI framework bloat.',
      'Optimized Vite build pipeline with fast hot module replacement.',
    ],
    github: 'https://github.com/sourabhsajane/portfolio',
    live: 'https://sourabhsajane.github.io/portfolio/',
    color: '#ec4899',
    icon: 'fas fa-cube',
    badge: '3D WebGL & React',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="section">
        <div className="section-header">
          <span className="section-eyebrow">
            <i className="fas fa-folder-open"></i> Portfolio / Works
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Web applications and systems built with Java, Spring Boot, React.js, Node.js, and Supabase.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-cards-grid">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.18 }}
            >
              <TiltCard
                maxTilt={8}
                className="project-tilt-container"
                style={{ '--proj-color': project.color }}
              >
                <div className="project-card-surface">
                  {/* Card Header */}
                  <div className="proj-top-bar">
                    <span className="proj-num font-mono">{project.num}</span>
                    <span
                      className="proj-badge"
                      style={{ borderColor: `${project.color}55`, color: project.color }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="proj-heading-area">
                    <div
                      className="proj-icon-box"
                      style={{ backgroundColor: `${project.color}15`, color: project.color }}
                    >
                      <i className={project.icon}></i>
                    </div>
                    <div>
                      <h3 className="proj-title">{project.title}</h3>
                      <p className="proj-subtitle">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="proj-desc">{project.desc}</p>

                  {/* Tech stack tags */}
                  <div className="proj-tech-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="proj-action-bar">
                    <button
                      className="proj-details-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      <i className="fas fa-circle-info"></i>
                      <span>Details & Architecture</span>
                    </button>

                    <div className="proj-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-link-icon"
                        title="View Code on GitHub"
                        aria-label="View Code on GitHub"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="proj-link-icon"
                          title="Open Live Preview"
                          aria-label="Open Live Preview"
                        >
                          <i className="fas fa-arrow-up-right-from-square"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <motion.div
              className="modal-content glass-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top */}
              <div className="modal-header">
                <div className="modal-title-group">
                  <div
                    className="modal-icon"
                    style={{
                      backgroundColor: `${selectedProject.color}20`,
                      color: selectedProject.color,
                    }}
                  >
                    <i className={selectedProject.icon}></i>
                  </div>
                  <div>
                    <h3>{selectedProject.title}</h3>
                    <span className="modal-badge" style={{ color: selectedProject.color }}>
                      {selectedProject.badge}
                    </span>
                  </div>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <i className="fas fa-xmark"></i>
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <p className="modal-long-desc">{selectedProject.longDesc}</p>

                <h4 className="modal-section-title">Key Architectural Features</h4>
                <ul className="modal-features-list">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle" style={{ color: selectedProject.color }}></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="modal-section-title">Technologies Used</h4>
                <div className="modal-tech-pills">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="modal-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <i className="fab fa-github"></i>
                  <span>View Repository</span>
                </a>
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Visit Live Site</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
