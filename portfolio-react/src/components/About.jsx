import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span>{'<'}</span> About Me <span>{'/>'}</span>
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-avatar"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="avatar-box">
              <div className="avatar-inner">
                <span className="avatar-code">{'{ SS }'}</span>
                <span className="avatar-sub">Full Stack Dev</span>
              </div>
              <div className="avatar-ring ring1"></div>
              <div className="avatar-ring ring2"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="code-block">
              <p><span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}</p>
              <p className="indent"><span className="code-key">name:</span> <span className="code-string">"Sourabh Sajane"</span>,</p>
              <p className="indent"><span className="code-key">role:</span> <span className="code-string">"Full Stack Developer"</span>,</p>
              <p className="indent"><span className="code-key">education:</span> <span className="code-string">"MCA (Pursuing)"</span>,</p>
              <p className="indent"><span className="code-key">passion:</span> <span className="code-string">"Building user-focused apps"</span>,</p>
              <p className="indent"><span className="code-key">status:</span> <span className="code-green">"Open to opportunities"</span>,</p>
              <p>{'}'}</p>
            </div>
            <p className="about-desc">
              I am a passionate Full Stack Developer currently pursuing MCA. I have hands-on experience in modern web technologies and full-stack development and enjoy building user-focused applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
