import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <motion.div
          className="terminal-bar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">portfolio.exe</span>
        </motion.div>

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="code-comment">// Hello, World! 👋</span>
        </motion.p>

        <motion.h1
          className="hero-name glitch"
          data-text="Sourabh Sajane"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Sourabh Sajane
        </motion.h1>

        <div className="hero-role">
          <span className="code-keyword">const </span>
          <span className="code-var">role</span>
          <span className="code-op"> = </span>
          <span className="code-string">"</span>
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'MCA Student',
              2000,
              'React Developer',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typed-text"
          />
          <span className="code-string">"</span>
          <span className="cursor-blink">|</span>
        </div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="code-comment">/* Building modern web applications with passion and precision */</span>
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-terminal"></i> Contact Me
          </a>
          <a href="../Sourabh_Resume.pdf" download className="btn btn-secondary">
            <i className="fas fa-download"></i> Download Resume
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[
            { num: '2+', label: 'Projects' },
            { num: '5+', label: 'Technologies' },
            { num: '2', label: 'IBM Certs' },
          ].map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </div>
    </section>
  )
}
