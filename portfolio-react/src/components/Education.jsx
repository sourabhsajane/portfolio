import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Education.css'

const education = [
  { degree: 'MCA', full: 'Master of Computer Applications', school: 'Jain College of Engineering', year: 'Pursuing', icon: 'fas fa-graduation-cap' },
  { degree: 'B.Sc', full: 'Bachelor of Science', school: '', year: '2023', icon: 'fas fa-graduation-cap' },
]

const achievements = [
  { icon: 'fas fa-certificate', text: 'IBM AI Fundamentals Certification', color: '#00ffff' },
  { icon: 'fas fa-certificate', text: 'IBM Related Certifications', color: '#7b2fff' },
  { icon: 'fas fa-trophy', text: 'Full-Stack Project Development', color: '#febc2e' },
]

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="education" className="edu-section" ref={ref}>
      <div className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span>{'<'}</span> Education <span>{'/>'}</span>
        </motion.h2>

        <div className="edu-grid">
          <div className="edu-timeline">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                className="edu-item"
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2 }}
              >
                <div className="edu-dot"><i className={e.icon}></i></div>
                <div className="edu-content">
                  <span className="edu-year">{e.year}</span>
                  <h3>{e.full}</h3>
                  {e.school && <p>{e.school}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="achievements-list">
            <h3 className="sub-title">Achievements & Certifications</h3>
            {achievements.map((a, i) => (
              <motion.div
                key={a.text}
                className="achievement-item"
                style={{ '--a-color': a.color }}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                whileHover={{ x: 8 }}
              >
                <i className={a.icon}></i>
                <span>{a.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
