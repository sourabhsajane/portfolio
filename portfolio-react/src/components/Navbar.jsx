import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section spy
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-brand">
          <span className="brand-bracket">&lt;</span>
          <span className="brand-name">Sourabh</span>
          <span className="brand-dot">.</span>
          <span className="brand-bracket">/&gt;</span>
        </a>

        {/* Live Availability Pill */}
        <div className="nav-status-wrapper">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span className="status-text">Available for Work</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop">
          <ul className="nav-pills">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-glow"
                        className="active-indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right Action */}
        <div className="nav-actions">
          <a href="#contact" className="btn btn-sm btn-primary nav-cta">
            <span>Let's Talk</span>
            <i className="fas fa-arrow-right"></i>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-drawer-content">
              {navItems.map((item, idx) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                >
                  <span className="mobile-idx">0{idx + 1}.</span>
                  <span>{item.label}</span>
                </a>
              ))}
              <div className="mobile-drawer-footer">
                <a
                  href="#contact"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
