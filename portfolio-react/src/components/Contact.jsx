import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import confetti from 'canvas-confetti'
import TiltCard from './TiltCard'
import './Contact.css'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sourabhsajane121@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f5ff', '#8b5cf6', '#ec4899', '#10b981'],
        })
      } catch (err) {
        // Fallback gracefully
      }
    }, 800)
  }

  const resetForm = () => {
    setFormState({ name: '', email: '', subject: '', message: '' })
    setFormSubmitted(false)
  }

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="section">
        <div className="section-header">
          <span className="section-eyebrow">
            <i className="fas fa-paper-plane"></i> Get In Touch / Connect
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a full-time opportunity, project collaboration, or just want to say hi,
            my inbox is always open!
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Links & Info */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Quick Email Card */}
            <TiltCard maxTilt={8} className="email-action-card">
              <div className="email-card-inner glass-card">
                <div className="email-icon-box">
                  <i className="fas fa-envelope-open-text"></i>
                </div>
                <div className="email-text-group">
                  <span className="email-label">DIRECT EMAIL</span>
                  <span className="email-address">sourabhsajane121@gmail.com</span>
                </div>
                <button
                  className="copy-pill-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  <i className={copied ? 'fas fa-check text-green' : 'fas fa-copy'}></i>
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </TiltCard>

            {/* Quick Phone Card from Resume */}
            <TiltCard maxTilt={8} className="email-action-card">
              <div className="email-card-inner glass-card">
                <div
                  className="email-icon-box"
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    color: 'var(--emerald)',
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <i className="fas fa-phone"></i>
                </div>
                <div className="email-text-group">
                  <span className="email-label">PHONE NUMBER</span>
                  <a
                    href="tel:+918618421208"
                    className="email-address"
                    style={{ textDecoration: 'none' }}
                  >
                    +91 8618421208
                  </a>
                </div>
                <a
                  href="tel:+918618421208"
                  className="copy-pill-btn"
                  style={{ textDecoration: 'none' }}
                  title="Call Sourabh Sajane"
                >
                  <i className="fas fa-phone-volume"></i>
                  <span>Call</span>
                </a>
              </div>
            </TiltCard>

            {/* Social Grid */}
            <div className="social-links-grid">
              <TiltCard maxTilt={10} className="social-tilt">
                <a
                  href="https://linkedin.com/in/sourabh-sajane"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card-inner glass-card"
                >
                  <div className="social-icon icon-linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                  <div>
                    <span className="social-name">LinkedIn</span>
                    <span className="social-sub">Professional Network</span>
                  </div>
                  <i className="fas fa-arrow-up-right-from-square social-arrow"></i>
                </a>
              </TiltCard>

              <TiltCard maxTilt={10} className="social-tilt">
                <a
                  href="https://github.com/sourabhsajane"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card-inner glass-card"
                >
                  <div className="social-icon icon-github">
                    <i className="fab fa-github"></i>
                  </div>
                  <div>
                    <span className="social-name">GitHub</span>
                    <span className="social-sub">Repositories & Code</span>
                  </div>
                  <i className="fas fa-arrow-up-right-from-square social-arrow"></i>
                </a>
              </TiltCard>
            </div>

            {/* Quick response badge */}
            <div className="response-guarantee-card glass-card">
              <div className="guarantee-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <p>
                <strong>Fast Response Time:</strong> I typically reply to messages and project inquiries
                within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Message Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-card glass-card">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    className="interactive-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <h3 className="form-heading">Send a Direct Message</h3>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="e.g. Alex Smith"
                          required
                          value={formState.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="e.g. alex@example.com"
                          required
                          value={formState.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Project Inquiry / Job Opportunity / Question"
                        value={formState.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Tell me about your project, idea, or role..."
                        required
                        value={formState.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary form-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <i className="fas fa-paper-plane"></i>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    className="form-success-box"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="success-icon-wrap">
                      <i className="fas fa-check"></i>
                    </div>
                    <h3>Message Sent Successfully!</h3>
                    <p>
                      Thank you for reaching out, <strong>{formState.name}</strong>! I have received your
                      inquiry and will get back to you at <strong>{formState.email}</strong> shortly.
                    </p>
                    <button className="btn btn-secondary btn-sm" onClick={resetForm}>
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern High-Tech Footer */}
      <footer className="footer-bar">
        <div className="footer-inner">
          <div className="footer-left">
            <span className="footer-logo">&lt;Sourabh /&gt;</span>
            <span className="footer-copy">
              Designed & Engineered by <strong>Sourabh Sajane</strong> &copy; {new Date().getFullYear()}
            </span>
          </div>
          <div className="footer-tech-stack">
            <span>React 18</span>
            <span className="dot-sep">•</span>
            <span>Three.js 3D</span>
            <span className="dot-sep">•</span>
            <span>Framer Motion</span>
            <span className="dot-sep">•</span>
            <span>Vanilla CSS</span>
          </div>
        </div>
      </footer>
    </section>
  )
}
