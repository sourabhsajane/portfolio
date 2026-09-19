import { useEffect, useRef } from 'react'
import passionateCoderImg from '../assets/passionate-coder.jpg'
import './CodingBackground.css'

// Tech keywords for digital streams
const streamWords = [
  '010101', 'Java', 'SpringBoot', 'React.js', 'REST_API', 'async',
  'await', '0xFA7', 'SELECT *', 'MySQL', 'Supabase', 'Node.js',
  'CGPA:8.94', 'Claude', 'Cursor', 'Kiro', 'Git_Push', '01101',
  'npm run', 'JVM', '200_OK', 'Spring', 'lambda', '<App/>',
  'Belagavi', 'TapAcademy', 'Edutainer', 'FullStack', 'useState',
]

export default function CodingBackground() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const mouse = {
      x: width * 0.5,
      y: height * 0.35,
      targetX: width * 0.5,
      targetY: height * 0.35,
      active: false,
    }

    const onMouseMove = (e) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true

      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`)
        containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`)
      }
    }

    const onMouseLeave = () => {
      mouse.active = false
    }

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initCircuits()
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', onResize)

    // ----------------------------------------------------
    // 1. Digital Matrix Code Streams
    // ----------------------------------------------------
    const streamCount = Math.min(26, Math.max(12, Math.floor(width / 55)))
    const streams = Array.from({ length: streamCount }, (_, i) => ({
      x: (width / streamCount) * i + (Math.random() * 20 - 10),
      y: Math.random() * height,
      speed: 0.6 + Math.random() * 0.9,
      text: streamWords[Math.floor(Math.random() * streamWords.length)],
      opacity: 0.08 + Math.random() * 0.16,
      size: 11 + Math.random() * 3,
      chars: Array.from({ length: 6 + Math.floor(Math.random() * 5) }, () =>
        Math.random() > 0.5 ? '1' : '0'
      ),
      color: Math.random() > 0.5 ? '#00f5ff' : '#8b5cf6',
      charTimer: 0,
    }))

    // ----------------------------------------------------
    // 2. PCB Circuit Board Traces & Energy Pulses
    // ----------------------------------------------------
    let circuitNodes = []
    let circuitSegments = []
    let pulses = []

    function initCircuits() {
      circuitNodes = []
      circuitSegments = []
      pulses = []

      // Generate grid-aligned circuit junction nodes
      const cols = Math.max(4, Math.floor(width / 180))
      const rows = Math.max(4, Math.floor(height / 180))

      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          if (Math.random() > 0.35) {
            circuitNodes.push({
              x: (width / cols) * c + (Math.random() - 0.5) * 40,
              y: (height / rows) * r + (Math.random() - 0.5) * 40,
              radius: 2 + Math.random() * 2,
              pulseVal: Math.random() * Math.PI * 2,
              color: Math.random() > 0.4 ? '#00f5ff' : '#8b5cf6',
            })
          }
        }
      }

      // Connect nearby nodes with circuit trace segments (orthogonal or 45 deg)
      for (let i = 0; i < circuitNodes.length; i++) {
        const a = circuitNodes[i]
        for (let j = i + 1; j < circuitNodes.length; j++) {
          const b = circuitNodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 220 && Math.random() > 0.4) {
            circuitSegments.push({
              from: a,
              to: b,
              dist,
              color: a.color,
            })
          }
        }
      }

      // Spawn initial energetic pulses
      const pulseCount = Math.min(18, Math.max(8, Math.floor(circuitSegments.length * 0.25)))
      for (let i = 0; i < pulseCount; i++) {
        spawnPulse()
      }
    }

    function spawnPulse() {
      if (circuitSegments.length === 0) return
      const seg = circuitSegments[Math.floor(Math.random() * circuitSegments.length)]
      pulses.push({
        seg,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.008,
        length: 24 + Math.random() * 30,
        color: Math.random() > 0.45 ? '#00f5ff' : '#ec4899',
      })
    }

    initCircuits()

    // ----------------------------------------------------
    // Main Render Loop
    // ----------------------------------------------------
    function render() {
      ctx.clearRect(0, 0, width, height)

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06
      mouse.y += (mouse.targetY - mouse.y) * 0.06

      // 1. Draw Digital Matrix Code Streams
      ctx.textAlign = 'center'
      streams.forEach((s) => {
        s.charTimer++
        if (s.charTimer % 18 === 0) {
          s.chars.shift()
          s.chars.push(Math.random() > 0.45 ? '1' : '0')
        }

        ctx.font = `600 ${s.size}px 'JetBrains Mono', monospace`
        ctx.fillStyle = s.color
        ctx.globalAlpha = s.opacity

        // Draw binary tail
        s.chars.forEach((ch, idx) => {
          const charY = s.y - (s.chars.length - idx) * 14
          ctx.fillText(ch, s.x, charY)
        })

        // Draw stream keyword head with brighter glow
        ctx.globalAlpha = Math.min(0.7, s.opacity * 2.2)
        ctx.fillStyle = '#ffffff'
        ctx.fillText(s.text, s.x, s.y)
        ctx.globalAlpha = 1

        s.y += s.speed
        if (s.y > height + 100) {
          s.y = -40
          s.x = Math.random() * width
          s.text = streamWords[Math.floor(Math.random() * streamWords.length)]
        }
      })

      // 2. Draw Circuit Board Traces
      circuitSegments.forEach((seg) => {
        ctx.beginPath()
        ctx.moveTo(seg.from.x, seg.from.y)

        // Draw 90-degree or diagonal PCB trace bend
        const midX = (seg.from.x + seg.to.x) / 2
        ctx.lineTo(midX, seg.from.y)
        ctx.lineTo(seg.to.x, seg.to.y)

        ctx.strokeStyle = 'rgba(0, 245, 255, 0.06)'
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // 3. Draw Traveling Electrical Energy Pulses along Circuits
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.progress += p.speed

        if (p.progress >= 1) {
          pulses.splice(i, 1)
          spawnPulse()
          continue
        }

        const x1 = p.seg.from.x
        const y1 = p.seg.from.y
        const x2 = p.seg.to.x
        const y2 = p.seg.to.y

        const currX = x1 + (x2 - x1) * p.progress
        const currY = y1 + (y2 - y1) * p.progress

        // Glowing pulse head
        const grad = ctx.createRadialGradient(currX, currY, 0, currX, currY, 12)
        grad.addColorStop(0, '#ffffff')
        grad.addColorStop(0.3, p.color)
        grad.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.arc(currX, currY, 12, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        ctx.beginPath()
        ctx.arc(currX, currY, 2, 0, Math.PI * 2)
        ctx.fillStyle = '#ffffff'
        ctx.fill()
      }

      // 4. Draw Circuit Junction Solder Pads
      circuitNodes.forEach((node) => {
        node.pulseVal += 0.04
        const pulse = (Math.sin(node.pulseVal) + 1) / 2
        const padRadius = node.radius + pulse * 1.5

        // Outer halo
        ctx.beginPath()
        ctx.arc(node.x, node.y, padRadius * 3, 0, Math.PI * 2)
        ctx.fillStyle = `${node.color}15`
        ctx.fill()

        // Solder ring
        ctx.beginPath()
        ctx.arc(node.x, node.y, padRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `${node.color}66`
        ctx.lineWidth = 1.2
        ctx.stroke()

        // Center core
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = '#ffffff'
        ctx.fill()

        // 5. Interactive Cursor Electrical Lightning Arcs
        if (mouse.active) {
          const mDist = Math.hypot(node.x - mouse.x, node.y - mouse.y)
          if (mDist < 190) {
            const alpha = (1 - mDist / 190) * 0.55
            const grad = ctx.createLinearGradient(node.x, node.y, mouse.x, mouse.y)
            grad.addColorStop(0, node.color)
            grad.addColorStop(1, '#00f5ff')

            // Lightning zig-zag arc
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            const midArcX = (node.x + mouse.x) / 2 + (Math.random() - 0.5) * 16
            const midArcY = (node.y + mouse.y) / 2 + (Math.random() - 0.5) * 16
            ctx.lineTo(midArcX, midArcY)
            ctx.lineTo(mouse.x, mouse.y)

            ctx.strokeStyle = grad
            ctx.globalAlpha = alpha
            ctx.lineWidth = 1.4
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      })

      animId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div ref={containerRef} className="cyber-background-container">
      {/* Sci-Fi Perspective Grid with Cursor Spotlight */}
      <div className="cyber-grid-overlay" />

      {/* Aurora Gradient Nebula Waves */}
      <div className="cyber-aurora cyber-aurora-cyan" />
      <div className="cyber-aurora cyber-aurora-purple" />
      <div className="cyber-aurora cyber-aurora-pink" />

      {/* Passionate Coder Ambient Background Hologram */}
      <div className="bg-coder-backdrop">
        <div className="bg-coder-glow-aura" />
        <img
          src={passionateCoderImg}
          alt="Passionate Full Stack Developer Coding"
          className="bg-coder-img"
        />
        <div className="bg-coder-scanlines" />
        <div className="bg-coder-badge">
          <span className="bg-coder-dot"></span>
          <span>PASSIONATE DEVELOPER // FULL-STACK</span>
        </div>
      </div>

      {/* Main High-Tech Canvas Layer (Circuits, Energy Pulses, Matrix Rain) */}
      <canvas ref={canvasRef} className="cyber-canvas" />

      {/* Floating Top Terminal Hologram (Top Left Background) */}
      <div className="holo-widget holo-terminal">
        <div className="holo-bar">
          <div className="holo-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <span className="holo-title">spring-boot.log ~ :8080</span>
          <span className="holo-badge">RUNNING</span>
        </div>
        <div className="holo-code">
          <p><span className="c-cyan">&gt;</span> java -jar portfolio.jar <span className="c-green">[OK]</span></p>
          <p><span className="c-purple">JVM</span> Started in 1.42s (heap: 256MB)</p>
          <p><span className="c-pink">REST</span> GET /api/v1/projects &rarr; 200 OK</p>
          <p className="c-muted">// Tap Academy &amp; Edutainer services</p>
        </div>
      </div>

      {/* Floating Git Commit Tree (Bottom Left Background) */}
      <div className="holo-widget holo-react">
        <div className="holo-bar">
          <i className="fas fa-code-branch holo-icon c-cyan"></i>
          <span className="holo-title">git log --oneline</span>
          <span className="holo-pulse-dot"></span>
        </div>
        <div className="holo-code">
          <p><span className="c-purple">&bull; 72c824b</span> feat: resume update (8.94 CGPA)</p>
          <p><span className="c-cyan">&bull; 5e5bcdc</span> feat: full-stack architecture</p>
          <p><span className="c-green">&bull; 3c31d2c</span> build: spring boot &amp; react core</p>
        </div>
      </div>

      {/* Subtle Viewport Cyber Coordinates */}
      <div className="cyber-hud hud-top-left">
        <span className="hud-dot"></span>
        <span className="hud-text">SYS.ONLINE // PORTFOLIO_V2.0</span>
      </div>
      <div className="cyber-hud hud-bottom-left">
        <span className="hud-text">SOURABH SAJANE &bull; FULL-STACK JAVA &bull; BELAGAVI</span>
      </div>
    </div>
  )
}
