import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Hero3DCanvas from './Hero3DCanvas'
import TiltCard from './TiltCard'
import './Hero.css'

const statsData = [
  { value: '2', label: 'Tech Internships', icon: 'fas fa-briefcase' },
  { value: '8.94', label: 'MCA CGPA (Graduated)', icon: 'fas fa-graduation-cap' },
  { value: 'Java & Spring', label: '& React Full Stack', icon: 'fas fa-layer-group' },
  { value: 'IBM', label: 'SkillsBuild Certified', icon: 'fas fa-certificate' },
]

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Headline & Content */}
        <div className="hero-text-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge-wrapper"
          >
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>Available for Full Stack Software Opportunities</span>
            </div>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Engineering Scalable{' '}
            <span className="gradient-text">Full Stack Systems</span>
          </motion.h1>

          <motion.div
            className="hero-typewriter-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="typewriter-prefix">Sourabh Sajane — </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2200,
                'Java & Spring Boot Engineer',
                2200,
                'React.js Specialist',
                2200,
                'MCA Graduate • CGPA 8.94',
                2200,
                'GenAI & Prompt Engineering',
                2200,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="typewriter-dynamic"
            />
          </motion.div>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            Full Stack Developer experienced in Java, Spring Boot, React.js, JavaScript, Angular, and REST APIs.
            Hands-on experience building production web apps through internships at <strong>Tap Academy</strong> and{' '}
            <strong>Edutainer</strong>, with database engineering in MySQL and Supabase.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#experience" className="btn btn-primary">
              <span>View Experience</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a
              href="/portfolio/Sourabh_Resume.pdf"
              download="Sourabh_Sajane_Resume.pdf"
              className="btn btn-secondary"
            >
              <i className="fas fa-file-arrow-down"></i>
              <span>Download Resume</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <i className="fas fa-paper-plane"></i>
              <span>Contact</span>
            </a>
          </motion.div>

          {/* Key Stats Row with 3D Tilt */}
          <motion.div
            className="hero-stats-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            {statsData.map((stat) => (
              <TiltCard key={stat.label} maxTilt={10} className="stat-card">
                <div className="stat-card-inner">
                  <div className="stat-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="stat-info">
                    <span className="stat-val gradient-cyan-purple">{stat.value}</span>
                    <span className="stat-name">{stat.label}</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Three.js WebGL Scene */}
        <motion.div
          className="hero-3d-col"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-3d-wrapper">
            {/* The WebGL 3D Canvas */}
            <Hero3DCanvas />

            {/* Floating Tech Chips around the 3D core */}
            <div className="floating-chip chip-react">
              <i className="fab fa-react"></i>
              <span>React.js</span>
            </div>

            <div className="floating-chip chip-node">
              <i className="fas fa-leaf"></i>
              <span>Java & Spring Boot</span>
            </div>

            <div className="floating-chip chip-db">
              <i className="fas fa-database"></i>
              <span>MySQL & Supabase</span>
            </div>

            <div className="floating-chip chip-cert">
              <i className="fas fa-robot"></i>
              <span>GenAI & Prompt Eng.</span>
            </div>

            {/* 3D Interaction Cue */}
            <div className="canvas-badge">
              <i className="fas fa-cube"></i>
              <span>Interactive 3D Core • Move Cursor</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
        <span className="cue-mouse">
          <span className="cue-wheel"></span>
        </span>
        <span className="cue-text">Scroll Down</span>
      </a>
    </section>
  )
}
