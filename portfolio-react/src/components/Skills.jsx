import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Skills.css'

const skillData = [
  {
    category: 'Programming',
    icon: 'fas fa-code',
    color: '#00ffff',
    skills: ['C', 'C++', 'Java', 'JavaScript'],
  },
  {
    category: 'Frontend',
    icon: 'fas fa-palette',
    color: '#7b2fff',
    skills: ['React.js', 'Angular', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    icon: 'fas fa-server',
    color: '#ff2d78',
    skills: ['Node.js', 'PHP', 'Express.js'],
  },
  {
    category: 'Database',
    icon: 'fas fa-database',
    color: '#00ff88',
    skills: ['MySQL', 'Supabase'],
  },
  {
    category: 'Tools',
    icon: 'fas fa-tools',
    color: '#febc2e',
    skills: ['GitHub', 'VS Code'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span>{'<'}</span> Skills <span>{'/>'}</span>
        </motion.h2>

        <div className="skills-grid">
          {skillData.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="skill-card"
              style={{ '--card-color': cat.color }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: `0 20px 40px ${cat.color}22` }}
            >
              <div className="skill-header">
                <i className={cat.icon} style={{ color: cat.color }}></i>
                <h3>{cat.category}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
