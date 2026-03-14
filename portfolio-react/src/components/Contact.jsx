import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Contact.css'

const contacts = [
  { icon: 'fas fa-envelope', label: 'Email', value: 'sourabhsajane121@gmail.com', href: 'mailto:sourabhsajane121@gmail.com', color: '#00ffff' },
  { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/sourabh-sajane', href: 'https://linkedin.com/in/sourabh-sajane', color: '#7b2fff' },
  { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/sourabhsajane', href: 'https://github.com/sourabhsajane', color: '#ff2d78' },
]

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span>{'<'}</span> Contact <span>{'/>'}</span>
        </motion.h2>

        <motion.p
          className="contact-intro"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          I'm always open to discussing new projects, opportunities, or collaborations.
        </motion.p>

        <div className="contact-grid">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
              style={{ '--c-color': c.color }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, boxShadow: `0 20px 40px ${c.color}33` }}
            >
              <i className={c.icon}></i>
              <div>
                <span className="c-label">{c.label}</span>
                <span className="c-value">{c.value}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>
          <span className="code-comment">{'// '}</span>
          Designed & Built by{' '}
          <span style={{ color: 'var(--accent)' }}>Sourabh Sajane</span>
          {' '}&copy; 2026
        </p>
      </footer>
    </section>
  )
}
