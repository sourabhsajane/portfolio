import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TiltCard from './TiltCard'
import './About.css'

const filesData = {
  'Developer.ts': `// developer.ts
export const developer: FullStackDeveloper = {
  name: "Sourabh Sajane",
  role: "Full Stack Developer",
  status: "🟢 Open to Software Engineering Opportunities",
  contact: {
    phone: "8618421208",
    email: "sourabhsajane121@gmail.com",
    github: "github.com/sourabhsajane",
    linkedin: "linkedin.com/in/sourabh-sajane",
    website: "sourabhsajane.github.io"
  },
  internships: [
    {
      company: "Tap Academy",
      role: "Full Stack Java Developer Intern",
      period: "Feb 2026 – Aug 2026",
      tech: ["Java", "Spring Boot", "REST APIs", "MySQL", "React"]
    },
    {
      company: "Edutainer",
      role: "Software Development Intern",
      period: "Feb 2026 – May 2026",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3"]
    }
  ],
  education: {
    mca: {
      degree: "Master of Computer Applications (MCA)",
      institution: "Jain College of Engineering, Belagavi",
      cgpa: 8.94,
      period: "2024 – 2026",
      status: "Graduated"
    },
    bsc: {
      degree: "Bachelor of Science",
      institution: "KLE GI Bagewadi College, Nippani",
      cgpa: 7.79,
      period: "2020 – 2023"
    }
  },
  achievements: [
    "SudurCodeX TechFusion 2026 Hackathon Participant",
    "IBM SkillsBuild: Artificial Intelligence Fundamentals Certified",
    "IBM SkillsBuild: Customer Engagement Certified"
  ]
};`,
  'TechStack.json': `{
  "programmingLanguages": [
    "Java",
    "JavaScript",
    "C"
  ],
  "frontendDevelopment": [
    "React.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Angular",
    "Responsive Web Design"
  ],
  "backendDevelopment": [
    "Spring Boot",
    "Node.js",
    "Express.js",
    "REST APIs"
  ],
  "databases": [
    "MySQL",
    "Supabase"
  ],
  "toolsAndPlatforms": [
    "Git",
    "GitHub",
    "VS Code",
    "Kiro",
    "Cursor",
    "Claude"
  ],
  "additionalTechnologies": [
    "Generative AI & Prompt Engineering"
  ]
}`,
  'CareerObjective.md': `# Career Objective

Full Stack Developer with experience in **Java, Spring Boot, Angular, React.js, JavaScript, and REST APIs**.

- **Hands-on Experience**: Building web applications through internships and project work, including backend services with Spring Boot and MySQL, frontend interfaces with React.js, and database integration with Supabase.
- **Cross-Layer Comfort**: Comfortable working across frontend, backend, and database layers.
- **AI-Augmented Engineering**: Additional experience using Generative AI-assisted tools (Cursor, Claude, Kiro) for rapid development and debugging workflows.`,
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  const [activeTab, setActiveTab] = useState('Developer.ts')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(filesData[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const highlightCode = (code) => {
    const lines = code.split('\n')
    return lines.map((line, idx) => (
      <div key={idx} className="code-line">
        <span className="line-no">{idx + 1}</span>
        <span className="line-content">{line}</span>
      </div>
    ))
  }

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="section">
        <div className="section-header">
          <span className="section-eyebrow">
            <i className="fas fa-terminal"></i> Developer Profile / Career
          </span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Full Stack Developer specializing in Java, Spring Boot, React.js, and Generative AI-assisted engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Interactive IDE */}
          <motion.div
            className="ide-container"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="ide-window glass-card">
              {/* Window Header */}
              <div className="ide-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                {/* File Tabs */}
                <div className="ide-tabs">
                  {Object.keys(filesData).map((fileName) => (
                    <button
                      key={fileName}
                      className={`ide-tab ${activeTab === fileName ? 'active' : ''}`}
                      onClick={() => setActiveTab(fileName)}
                    >
                      <i
                        className={
                          fileName.endsWith('.ts')
                            ? 'fas fa-code code-ts'
                            : fileName.endsWith('.json')
                            ? 'fas fa-brackets-curly code-json'
                            : 'fas fa-file-alt code-md'
                        }
                      ></i>
                      <span>{fileName}</span>
                    </button>
                  ))}
                </div>
                {/* Copy Button */}
                <button
                  className="ide-copy-btn"
                  onClick={handleCopy}
                  title="Copy code to clipboard"
                  aria-label="Copy file content"
                >
                  <i className={copied ? 'fas fa-check text-green' : 'fas fa-copy'}></i>
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Body */}
              <div className="ide-body">
                <div className="code-viewer">
                  {highlightCode(filesData[activeTab])}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Quick Facts */}
          <motion.div
            className="about-bio-col"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bio-card glass-card">
              <h3 className="bio-heading">
                Building Production Software Across the Full Stack
              </h3>
              <p className="bio-text">
                I am a Full Stack Developer with an MCA degree from{' '}
                <strong style={{ color: 'var(--cyan)' }}>Jain College of Engineering, Belagavi</strong> (CGPA: 8.94).
                With hands-on experience through internships at{' '}
                <strong style={{ color: 'var(--purple)' }}>Tap Academy</strong> and{' '}
                <strong style={{ color: 'var(--pink)' }}>Edutainer</strong>, I engineer robust backend services with Spring Boot and MySQL, and intuitive frontend interfaces with React.js.
              </p>
              <p className="bio-text">
                Comfortable working across frontend, backend, and database layers, I also leverage modern Generative AI-assisted development tools (Cursor, Claude, Kiro) to accelerate debugging, testing, and delivery.
              </p>

              {/* Highlights Grid */}
              <div className="about-highlights-grid">
                <TiltCard maxTilt={8} className="highlight-item">
                  <div className="highlight-icon icon-cyan">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <div>
                    <h4>Java & Spring Boot</h4>
                    <p>REST APIs & MySQL Backend Services</p>
                  </div>
                </TiltCard>

                <TiltCard maxTilt={8} className="highlight-item">
                  <div className="highlight-icon icon-purple">
                    <i className="fab fa-react"></i>
                  </div>
                  <div>
                    <h4>React.js & Angular</h4>
                    <p>Reusable Components & Responsive UI</p>
                  </div>
                </TiltCard>

                <TiltCard maxTilt={8} className="highlight-item">
                  <div className="highlight-icon icon-green">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h4>MCA • CGPA 8.94</h4>
                    <p>Jain College of Engineering, Belagavi</p>
                  </div>
                </TiltCard>

                <TiltCard maxTilt={8} className="highlight-item">
                  <div className="highlight-icon icon-pink">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div>
                    <h4>Hackathon Participant</h4>
                    <p>SudurCodeX TechFusion 2026</p>
                  </div>
                </TiltCard>
              </div>

              <div className="about-cta-row">
                <a href="#experience" className="btn btn-primary btn-sm">
                  <span>Work Experience</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
                <a href="#contact" className="btn btn-secondary btn-sm">
                  <span>Get In Touch</span>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
