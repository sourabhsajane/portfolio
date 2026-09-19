import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TiltCard from './TiltCard'
import './Experience.css'

const experiences = [
  {
    role: 'Full Stack Java Developer Intern',
    company: 'Tap Academy',
    period: 'Feb 2026 – Aug 2026',
    status: 'Active Internship',
    color: '#00f5ff',
    icon: 'fab fa-java',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'React.js', 'Generative AI'],
    bullets: [
      'Developing full-stack web applications using Java, Spring Boot, REST APIs, MySQL, and React.',
      'Building backend services and database-driven application features using Spring Boot and MySQL.',
      'Developing and integrating REST API endpoints with React-based frontend components.',
      'Testing and debugging backend functionality to ensure reliable integration across application components.',
      'Using Generative AI-assisted development tools to support coding and debugging workflows.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Edutainer',
    period: 'Feb 2026 – May 2026',
    status: 'Completed',
    color: '#8b5cf6',
    icon: 'fab fa-react',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
    bullets: [
      'Built and implemented reusable frontend components using React.js and JavaScript to develop responsive web interfaces.',
      'Translated UI designs into functional, responsive layouts using React.js, HTML5, and CSS3.',
      'Debugged and tested frontend code to identify and resolve UI and functionality issues.',
      'Collaborated with the development team to integrate frontend components into the broader application.',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <div className="section">
        <div className="section-header">
          <span className="section-eyebrow">
            <i className="fas fa-briefcase"></i> Work History / Industry
          </span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development internships building enterprise Java services, React interfaces, and AI workflows.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <TiltCard
                maxTilt={6}
                className="exp-tilt-card"
                style={{ '--exp-color': exp.color }}
              >
                <div className="exp-card glass-card">
                  {/* Card Header */}
                  <div className="exp-header">
                    <div className="exp-role-wrap">
                      <div
                        className="exp-company-icon"
                        style={{
                          backgroundColor: `${exp.color}15`,
                          color: exp.color,
                          borderColor: `${exp.color}35`,
                        }}
                      >
                        <i className={exp.icon}></i>
                      </div>
                      <div>
                        <h3 className="exp-role">{exp.role}</h3>
                        <div className="exp-company-sub">
                          <span className="exp-company" style={{ color: exp.color }}>
                            {exp.company}
                          </span>
                          <span className="exp-dot">•</span>
                          <span className="exp-period font-mono">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <span
                      className="exp-status-badge"
                      style={{
                        borderColor: `${exp.color}40`,
                        color: exp.color,
                        backgroundColor: `${exp.color}10`,
                      }}
                    >
                      <span
                        className="status-dot"
                        style={{ backgroundColor: exp.color }}
                      ></span>
                      {exp.status}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>
                        <i className="fas fa-angle-right" style={{ color: exp.color }}></i>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div className="exp-tech-row">
                    {exp.tech.map((t) => (
                      <span key={t} className="exp-tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
