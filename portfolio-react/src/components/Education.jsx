import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TiltCard from './TiltCard'
import './Education.css'

const educationHistory = [
  {
    degree: 'Master of Computer Applications (MCA)',
    shortDegree: 'MCA',
    institution: 'Jain College of Engineering, Belagavi',
    period: '2024 – 2026',
    score: 'CGPA: 8.94',
    status: 'Graduated',
    highlights: [
      'Graduated with a high academic standing of 8.94 CGPA, focusing on Advanced Software Engineering, Distributed Systems, and Full-Stack Architectures.',
      'Active participant in competitive events including the SudurCodeX TechFusion 2026 Hackathon.',
    ],
    icon: 'fas fa-graduation-cap',
    color: '#00f5ff',
  },
  {
    degree: 'Bachelor of Science (B.Sc)',
    shortDegree: 'B.Sc',
    institution: 'KLE GI Bagewadi College, Nippani',
    period: '2020 – 2023',
    score: 'CGPA: 7.79',
    status: 'Graduated',
    highlights: [
      'Graduated with a CGPA of 7.79, building rigorous analytical and computational foundations.',
      'Completed core studies in computing theory, mathematical logic, and software programming fundamentals.',
    ],
    icon: 'fas fa-user-graduate',
    color: '#8b5cf6',
  },
]

const credentialsData = [
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    type: 'Professional AI Credential',
    desc: 'Certified in core artificial intelligence principles, machine learning concepts, natural language processing, and responsible AI ethics.',
    badgeIcon: 'fas fa-brain',
    color: '#00f5ff',
    verified: true,
  },
  {
    title: 'Customer Engagement: Communication & Personality Dynamics',
    issuer: 'IBM SkillsBuild',
    type: 'Professional Credential',
    desc: 'Validated mastery in professional stakeholder communication, emotional intelligence, collaborative teamwork, and interpersonal dynamics.',
    badgeIcon: 'fas fa-comments',
    color: '#8b5cf6',
    verified: true,
  },
  {
    title: 'SudurCodeX TechFusion 2026 Hackathon',
    issuer: 'Hackathon Achievement',
    type: 'Competitive Technical Event',
    desc: 'Participated in the intensive SudurCodeX TechFusion 2026 Hackathon, demonstrating teamwork, problem-solving, and collaborative software development under strict time constraints.',
    badgeIcon: 'fas fa-trophy',
    color: '#f59e0b',
    verified: true,
  },
]

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="section">
        <div className="section-header">
          <span className="section-eyebrow">
            <i className="fas fa-award"></i> Academic & Credentials
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal degrees, official IBM SkillsBuild credentials, and hackathon accomplishments.
          </p>
        </div>

        <div className="edu-cert-grid">
          {/* Left Column: Interactive Glowing Timeline */}
          <div className="edu-col">
            <h3 className="col-heading">
              <i className="fas fa-graduation-cap"></i> Academic Education
            </h3>
            <div className="timeline-wrapper">
              <div className="timeline-line"></div>
              {educationHistory.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  {/* Timeline Glowing Node */}
                  <div
                    className="timeline-node"
                    style={{ borderColor: edu.color, boxShadow: `0 0 16px ${edu.color}66` }}
                  >
                    <i className={edu.icon} style={{ color: edu.color }}></i>
                  </div>

                  {/* Card Content */}
                  <div className="timeline-content glass-card">
                    <div className="timeline-top">
                      <span className="edu-period font-mono">{edu.period}</span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <span
                          className="edu-status-pill"
                          style={{
                            backgroundColor: `${edu.color}15`,
                            borderColor: `${edu.color}40`,
                            color: edu.color,
                          }}
                        >
                          {edu.score}
                        </span>
                        <span
                          className="edu-status-pill"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            borderColor: 'var(--border-glass)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-inst">{edu.institution}</p>

                    <ul className="edu-highlights">
                      {edu.highlights.map((h, i) => (
                        <li key={i}>
                          <i className="fas fa-angle-right" style={{ color: edu.color }}></i>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Tilt Certification Cards */}
          <div className="cert-col">
            <h3 className="col-heading">
              <i className="fas fa-certificate"></i> Certifications & Hackathons
            </h3>
            <div className="certs-list">
              {credentialsData.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.18 }}
                >
                  <TiltCard maxTilt={8} className="cert-tilt-card">
                    <div className="cert-card-inner glass-card">
                      <div
                        className="cert-icon-wrap"
                        style={{
                          backgroundColor: `${cert.color}18`,
                          color: cert.color,
                          borderColor: `${cert.color}40`,
                        }}
                      >
                        <i className={cert.badgeIcon}></i>
                      </div>

                      <div className="cert-info">
                        <div className="cert-header">
                          <span className="cert-issuer">{cert.issuer}</span>
                          {cert.verified && (
                            <span className="cert-verified-pill">
                              <i className="fas fa-shield-check"></i> Verified
                            </span>
                          )}
                        </div>

                        <h4 className="cert-title">{cert.title}</h4>
                        <span className="cert-type">{cert.type}</span>
                        <p className="cert-desc">{cert.desc}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
