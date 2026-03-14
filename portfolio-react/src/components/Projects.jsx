import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Projects.css'

const projects = [
  {
    title: 'Hotel Table Booking System',
    desc: 'A comprehensive booking system for hotel table reservations with real-time availability and admin dashboard.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    icon: 'fas fa-utensils',
    color: '#00ffff',
    num: '01',
  },
  {
    title: 'Hirefy – Recruitment Platform',
    desc: 'Modern recruitment platform connecting employers with talented candidates efficiently with real-time updates.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Supabase'],
    icon: 'fas fa-briefcase',
    color: '#7b2fff',
    num: '02',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span>{'<'}</span> Projects <span>{'/>'}</span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="project-card"
              style={{ '--p-color': p.color }}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-num">{p.num}</div>
              <div className="project-icon-wrap">
                <i className={p.icon}></i>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map(t => (
                  <span key={t} className="p-tag">{t}</span>
                ))}
              </div>
              <div className="project-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
