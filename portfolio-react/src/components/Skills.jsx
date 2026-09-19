import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TiltCard from './TiltCard'
import './Skills.css'

const categories = [
  'All',
  'Programming Languages',
  'Frontend Development',
  'Backend Development',
  'Databases',
  'Tools & AI',
]

const skillsList = [
  // Programming Languages
  {
    name: 'Java',
    category: 'Programming Languages',
    type: 'Core Language',
    icon: 'fab fa-java',
    color: '#ea2d2e',
    desc: 'Object-oriented application development, backend logic, and scalable enterprise services.',
  },
  {
    name: 'JavaScript',
    category: 'Programming Languages',
    type: 'Core Language',
    icon: 'fab fa-js-square',
    color: '#f7df1e',
    desc: 'Dynamic frontend reactivity, asynchronous scripting, and full-stack web architectures.',
  },
  {
    name: 'C',
    category: 'Programming Languages',
    type: 'Systems Language',
    icon: 'fas fa-terminal',
    color: '#659ad2',
    desc: 'Fundamental computing principles, structured programming, and memory concepts.',
  },

  // Frontend Development
  {
    name: 'React.js',
    category: 'Frontend Development',
    type: 'Frontend Library',
    icon: 'fab fa-react',
    color: '#00f5ff',
    desc: 'Reusable component architecture, declarative state management, and modern SPA interfaces.',
  },
  {
    name: 'HTML5',
    category: 'Frontend Development',
    type: 'Web Markup',
    icon: 'fab fa-html5',
    color: '#f97316',
    desc: 'Clean semantic structure, accessibility standards, and SEO-optimized web documents.',
  },
  {
    name: 'CSS3',
    category: 'Frontend Development',
    type: 'Styling & Motion',
    icon: 'fab fa-css3-alt',
    color: '#38bdf8',
    desc: 'Modern styling systems, keyframe animations, glassmorphism, and visual fidelity.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend Development',
    type: 'CSS Framework',
    icon: 'fas fa-wind',
    color: '#06b6d4',
    desc: 'Utility-first styling methodology for rapid, clean, and consistent UI design.',
  },
  {
    name: 'Bootstrap',
    category: 'Frontend Development',
    type: 'UI Toolkit',
    icon: 'fab fa-bootstrap',
    color: '#a855f7',
    desc: 'Mobile-first responsive grid layouts, predefined UI components, and rapid prototyping.',
  },
  {
    name: 'Angular',
    category: 'Frontend Development',
    type: 'Frontend Framework',
    icon: 'fab fa-angular',
    color: '#ef4444',
    desc: 'Structured single-page applications with TypeScript components and modular routing.',
  },
  {
    name: 'Responsive Web Design',
    category: 'Frontend Development',
    type: 'Design Standard',
    icon: 'fas fa-mobile-screen-button',
    color: '#10b981',
    desc: 'Cross-device fluid responsiveness ensuring optimal viewing on mobile, tablet, and desktop.',
  },

  // Backend Development
  {
    name: 'Spring Boot',
    category: 'Backend Development',
    type: 'Enterprise Framework',
    icon: 'fas fa-leaf',
    color: '#4ade80',
    desc: 'Enterprise-grade Java backend microservices, dependency injection, and data persistence.',
  },
  {
    name: 'Node.js',
    category: 'Backend Development',
    type: 'Runtime Environment',
    icon: 'fab fa-node-js',
    color: '#22c55e',
    desc: 'High-performance asynchronous event-driven JavaScript server environments.',
  },
  {
    name: 'Express.js',
    category: 'Backend Development',
    type: 'Backend Framework',
    icon: 'fas fa-server',
    color: '#e2e8f0',
    desc: 'Lightweight web application framework for building secure and scalable RESTful APIs.',
  },
  {
    name: 'REST APIs',
    category: 'Backend Development',
    type: 'API Architecture',
    icon: 'fas fa-network-wired',
    color: '#818cf8',
    desc: 'Standardized HTTP endpoint design, request routing, JSON payloads, and integration.',
  },

  // Databases
  {
    name: 'MySQL',
    category: 'Databases',
    type: 'Relational Database',
    icon: 'fas fa-database',
    color: '#38bdf8',
    desc: 'Relational database schema modeling, data integrity, transactions, and optimized queries.',
  },
  {
    name: 'Supabase',
    category: 'Databases',
    type: 'Cloud Database',
    icon: 'fas fa-bolt',
    color: '#34d399',
    desc: 'Cloud PostgreSQL with real-time data synchronization, secure auth, and storage.',
  },

  // Tools & Platforms & AI
  {
    name: 'Git & GitHub',
    category: 'Tools & AI',
    type: 'Version Control',
    icon: 'fab fa-github',
    color: '#fb923c',
    desc: 'Distributed source control, branch management, collaborative code reviews, and releases.',
  },
  {
    name: 'VS Code',
    category: 'Tools & AI',
    type: 'Development Environment',
    icon: 'fas fa-laptop-code',
    color: '#38bdf8',
    desc: 'Code authoring, linting, extensions, debugging environments, and terminal workflows.',
  },
  {
    name: 'Cursor & Kiro',
    category: 'Tools & AI',
    type: 'AI Coding Tools',
    icon: 'fas fa-code-merge',
    color: '#a78bfa',
    desc: 'AI-assisted code generation, rapid refactoring, and modern developer tooling.',
  },
  {
    name: 'Claude & Generative AI',
    category: 'Tools & AI',
    type: 'AI Engineering',
    icon: 'fas fa-robot',
    color: '#ec4899',
    desc: 'Prompt engineering and generative AI workflows to accelerate development and debugging.',
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const filteredSkills =
    activeCategory === 'All'
      ? skillsList
      : skillsList.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="section">
        <div className="section-header">
          <span className="section-eyebrow">
            <i className="fas fa-microchip"></i> Resume Skillset
          </span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Core technologies and platforms verified through internships, academic coursework, and production projects.
          </p>
        </div>

        {/* Recruiter Summary Highlights */}
        <div className="skills-recruiter-banner glass-card">
          <div className="recruiter-stat-item">
            <i className="fas fa-code text-cyan"></i>
            <div>
              <strong>Java & JavaScript</strong>
              <span>Core Programming</span>
            </div>
          </div>
          <div className="recruiter-stat-sep"></div>
          <div className="recruiter-stat-item">
            <i className="fas fa-layer-group text-purple"></i>
            <div>
              <strong>Spring Boot & React</strong>
              <span>Full-Stack Development</span>
            </div>
          </div>
          <div className="recruiter-stat-sep"></div>
          <div className="recruiter-stat-item">
            <i className="fas fa-robot text-green"></i>
            <div>
              <strong>Generative AI & Tools</strong>
              <span>Cursor, Claude & Prompt Eng.</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills 3D Tilt Cards Grid */}
        <motion.div layout className="skills-grid">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <TiltCard
                  maxTilt={10}
                  className="skill-tilt-card"
                  style={{ '--skill-accent': skill.color }}
                >
                  <div className="skill-card-body">
                    {/* Top Row: Icon & Clean Type Badge */}
                    <div className="skill-top-bar">
                      <div
                        className="skill-icon-wrap"
                        style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                      >
                        <i className={skill.icon}></i>
                      </div>
                      <span
                        className="skill-type-pill"
                        style={{
                          borderColor: `${skill.color}35`,
                          color: skill.color,
                          backgroundColor: `${skill.color}10`,
                        }}
                      >
                        {skill.type}
                      </span>
                    </div>

                    {/* Skill Name & Description */}
                    <h3 className="skill-title">{skill.name}</h3>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
