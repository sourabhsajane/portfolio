import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import CodingBackground from './components/CodingBackground'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100))
        setScrollProgress(progress)
      }
      setShowScrollTop(window.scrollY > 350)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-root">
      {/* Interactive Custom Follower Cursor */}
      <CustomCursor />

      {/* Ambient Glowing Color Orbs */}
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="ambient-glow ambient-glow-3" />

      {/* Cyber Canvas Background */}
      <CodingBackground />

      {/* Fixed Floating Glass Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Floating Scroll To Top with Circular Progress */}
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
        >
          <svg className="progress-ring" width="48" height="48" viewBox="0 0 48 48">
            <circle
              className="progress-ring-bg"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="3"
              fill="transparent"
              r="20"
              cx="24"
              cy="24"
            />
            <circle
              className="progress-ring-circle"
              stroke="url(#progress-gradient)"
              strokeWidth="3"
              strokeDasharray={2 * Math.PI * 20}
              strokeDashoffset={2 * Math.PI * 20 * (1 - scrollProgress / 100)}
              strokeLinecap="round"
              fill="transparent"
              r="20"
              cx="24"
              cy="24"
            />
            <defs>
              <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f5ff" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <i className="fas fa-arrow-up scroll-top-arrow"></i>
        </button>
      )}
    </div>
  )
}

export default App
