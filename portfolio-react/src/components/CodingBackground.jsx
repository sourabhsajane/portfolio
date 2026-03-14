import { useEffect, useRef } from 'react'
import './CodingBackground.css'

const codeSnippets = [
  'const ai = new Neural()',
  'model.train(data)',
  'await fetch("/api")',
  'npm run build',
  'git push origin main',
  'SELECT * FROM users',
  'useState(null)',
  'useEffect(() => {})',
  'import React from "react"',
  'export default App',
  'function predict(x)',
  'loss.backward()',
  'optimizer.step()',
  'torch.tensor([1,0])',
  'df.head()',
  'accuracy: 98.7%',
  'model.fit(X, y)',
  '<div className="ai">',
  'const [data, setData]',
  'res.json({ ok: true })',
]

export default function CodingBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animFrame

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Floating code particles
    const particles = Array.from({ length: 18 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      text: codeSnippets[i % codeSnippets.length],
      speed: 0.2 + Math.random() * 0.4,
      opacity: 0.08 + Math.random() * 0.18,
      size: 11 + Math.random() * 5,
      color: ['#00ffff', '#7b2fff', '#00ff88', '#ff2d78'][Math.floor(Math.random() * 4)],
      drift: (Math.random() - 0.5) * 0.3,
    }))

    // Neural network nodes
    const nodes = Array.from({ length: 22 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 2 + Math.random() * 3,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      pulse: Math.random() * Math.PI * 2,
    }))

    function drawNodes() {
      // Draw connections
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 200) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(0,255,255,${0.06 * (1 - dist / 200)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      nodes.forEach(n => {
        n.pulse += 0.03
        const glow = Math.sin(n.pulse) * 0.5 + 0.5
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4)
        grad.addColorStop(0, `rgba(0,255,255,${0.6 * glow})`)
        grad.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,255,255,${0.7 + 0.3 * glow})`
        ctx.fill()

        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })
    }

    function drawParticles() {
      particles.forEach(p => {
        ctx.globalAlpha = p.opacity
        ctx.font = `${p.size}px Fira Code`
        ctx.fillStyle = p.color
        ctx.fillText(p.text, p.x, p.y)
        ctx.globalAlpha = 1

        p.y -= p.speed
        p.x += p.drift
        if (p.y < -30) {
          p.y = canvas.height + 30
          p.x = Math.random() * canvas.width
          p.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        }
        if (p.x < -200 || p.x > canvas.width + 200) {
          p.x = Math.random() * canvas.width
        }
      })
    }

    // Scan line effect
    let scanY = 0
    function drawScanLine() {
      const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40)
      grad.addColorStop(0, 'transparent')
      grad.addColorStop(0.5, 'rgba(0,255,255,0.03)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(0, scanY - 40, canvas.width, 80)
      scanY = (scanY + 1.5) % canvas.height
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawScanLine()
      drawNodes()
      drawParticles()
      animFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="bg-canvas" />
      <div className="dev-scene">
        <DeveloperSVG />
      </div>
    </>
  )
}

function DeveloperSVG() {
  return (
    <svg
      className="dev-svg"
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Desk */}
      <rect x="60" y="340" width="400" height="14" rx="4" fill="#1a1a3e" stroke="#00ffff" strokeWidth="1" opacity="0.8"/>
      <rect x="100" y="354" width="12" height="80" rx="3" fill="#1a1a3e" stroke="#00ffff" strokeWidth="0.5" opacity="0.6"/>
      <rect x="408" y="354" width="12" height="80" rx="3" fill="#1a1a3e" stroke="#00ffff" strokeWidth="0.5" opacity="0.6"/>

      {/* Monitor stand */}
      <rect x="238" y="300" width="44" height="42" rx="3" fill="#0f0f2a" stroke="#00ffff" strokeWidth="0.8" opacity="0.9"/>
      <rect x="210" y="338" width="100" height="8" rx="3" fill="#1a1a3e" stroke="#00ffff" strokeWidth="0.8" opacity="0.9"/>

      {/* Monitor */}
      <rect x="120" y="140" width="280" height="165" rx="10" fill="#050510" stroke="#00ffff" strokeWidth="1.5" opacity="0.95"/>
      <rect x="128" y="148" width="264" height="149" rx="6" fill="#080818"/>

      {/* Screen glow */}
      <rect x="128" y="148" width="264" height="149" rx="6" fill="url(#screenGlow)" opacity="0.4"/>

      {/* Code on screen */}
      <text x="140" y="172" fontFamily="Fira Code" fontSize="9" fill="#c586c0">import</text>
      <text x="183" y="172" fontFamily="Fira Code" fontSize="9" fill="#9cdcfe"> React </text>
      <text x="218" y="172" fontFamily="Fira Code" fontSize="9" fill="#c586c0">from</text>
      <text x="244" y="172" fontFamily="Fira Code" fontSize="9" fill="#ce9178"> 'react'</text>

      <text x="140" y="186" fontFamily="Fira Code" fontSize="9" fill="#c586c0">import</text>
      <text x="183" y="186" fontFamily="Fira Code" fontSize="9" fill="#9cdcfe"> AI </text>
      <text x="200" y="186" fontFamily="Fira Code" fontSize="9" fill="#c586c0">from</text>
      <text x="226" y="186" fontFamily="Fira Code" fontSize="9" fill="#ce9178"> './ai-model'</text>

      <text x="140" y="204" fontFamily="Fira Code" fontSize="9" fill="#6a9955">{'// Neural Network'}</text>

      <text x="140" y="218" fontFamily="Fira Code" fontSize="9" fill="#c586c0">const</text>
      <text x="168" y="218" fontFamily="Fira Code" fontSize="9" fill="#9cdcfe"> model</text>
      <text x="200" y="218" fontFamily="Fira Code" fontSize="9" fill="#d4d4d4"> = </text>
      <text x="214" y="218" fontFamily="Fira Code" fontSize="9" fill="#dcdcaa">new Neural</text>
      <text x="270" y="218" fontFamily="Fira Code" fontSize="9" fill="#d4d4d4">()</text>

      <text x="140" y="232" fontFamily="Fira Code" fontSize="9" fill="#c586c0">const</text>
      <text x="168" y="232" fontFamily="Fira Code" fontSize="9" fill="#9cdcfe"> train</text>
      <text x="196" y="232" fontFamily="Fira Code" fontSize="9" fill="#d4d4d4"> = </text>
      <text x="210" y="232" fontFamily="Fira Code" fontSize="9" fill="#c586c0">async</text>
      <text x="238" y="232" fontFamily="Fira Code" fontSize="9" fill="#d4d4d4"> () =&gt; {'{'}</text>

      <text x="152" y="246" fontFamily="Fira Code" fontSize="9" fill="#c586c0">await</text>
      <text x="182" y="246" fontFamily="Fira Code" fontSize="9" fill="#dcdcaa"> model.fit</text>
      <text x="232" y="246" fontFamily="Fira Code" fontSize="9" fill="#d4d4d4">(X, y)</text>

      <text x="152" y="260" fontFamily="Fira Code" fontSize="9" fill="#9cdcfe">accuracy</text>
      <text x="200" y="260" fontFamily="Fira Code" fontSize="9" fill="#d4d4d4"> = </text>
      <text x="214" y="260" fontFamily="Fira Code" fontSize="9" fill="#00ff88">98.7%</text>

      <text x="140" y="274" fontFamily="Fira Code" fontSize="9" fill="#d4d4d4">{'}'}</text>

      {/* Blinking cursor */}
      <rect x="140" y="280" width="6" height="10" rx="1" fill="#00ffff" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0;0.9" dur="1s" repeatCount="indefinite"/>
      </rect>

      {/* Keyboard */}
      <rect x="155" y="345" width="210" height="18" rx="4" fill="#0f0f2a" stroke="#00ffff" strokeWidth="0.8" opacity="0.8"/>
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <rect key={i} x={162 + i * 19} y="349" width="14" height="8" rx="2" fill="#1a1a3e" stroke="#00ffff" strokeWidth="0.3" opacity="0.7"/>
      ))}

      {/* Mouse */}
      <rect x="375" y="344" width="22" height="30" rx="8" fill="#0f0f2a" stroke="#00ffff" strokeWidth="0.8" opacity="0.8"/>
      <line x1="386" y1="344" x2="386" y2="360" stroke="#00ffff" strokeWidth="0.5" opacity="0.5"/>

      {/* Developer body */}
      {/* Chair */}
      <rect x="218" y="390" width="84" height="8" rx="4" fill="#1a1a3e" stroke="#7b2fff" strokeWidth="0.8" opacity="0.7"/>
      <rect x="248" y="398" width="24" height="35" rx="3" fill="#1a1a3e" stroke="#7b2fff" strokeWidth="0.5" opacity="0.6"/>

      {/* Torso */}
      <rect x="228" y="310" width="64" height="82" rx="12" fill="#1a1a3e" stroke="#7b2fff" strokeWidth="1" opacity="0.9"/>
      {/* Hoodie detail */}
      <path d="M228 330 Q260 320 292 330" stroke="#7b2fff" strokeWidth="1" fill="none" opacity="0.5"/>
      <text x="244" y="360" fontFamily="Fira Code" fontSize="8" fill="#00ffff" opacity="0.7">&lt;/dev&gt;</text>

      {/* Left arm */}
      <path d="M228 325 Q200 340 185 355" stroke="#1a1a3e" strokeWidth="18" strokeLinecap="round" fill="none"/>
      <path d="M228 325 Q200 340 185 355" stroke="#7b2fff" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>

      {/* Right arm */}
      <path d="M292 325 Q320 340 335 355" stroke="#1a1a3e" strokeWidth="18" strokeLinecap="round" fill="none"/>
      <path d="M292 325 Q320 340 335 355" stroke="#7b2fff" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>

      {/* Hands */}
      <ellipse cx="183" cy="358" rx="10" ry="7" fill="#2a1a4e" stroke="#7b2fff" strokeWidth="0.8"/>
      <ellipse cx="337" cy="358" rx="10" ry="7" fill="#2a1a4e" stroke="#7b2fff" strokeWidth="0.8"/>

      {/* Neck */}
      <rect x="250" y="295" width="20" height="18" rx="5" fill="#2a1a4e" stroke="#7b2fff" strokeWidth="0.8"/>

      {/* Head */}
      <ellipse cx="260" cy="278" rx="32" ry="30" fill="#1a1a3e" stroke="#7b2fff" strokeWidth="1.2"/>

      {/* Hair */}
      <path d="M228 268 Q230 248 260 246 Q290 248 292 268" fill="#0a0a1a" stroke="#7b2fff" strokeWidth="0.8"/>

      {/* Eyes */}
      <ellipse cx="249" cy="276" rx="5" ry="5.5" fill="#050510"/>
      <ellipse cx="271" cy="276" rx="5" ry="5.5" fill="#050510"/>
      {/* Eye glow - looking at screen */}
      <ellipse cx="250" cy="276" rx="3" ry="3.5" fill="#00ffff" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="272" cy="276" rx="3" ry="3.5" fill="#00ffff" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
      </ellipse>

      {/* Glasses */}
      <rect x="241" y="271" width="14" height="11" rx="4" fill="none" stroke="#00ffff" strokeWidth="1.2" opacity="0.9"/>
      <rect x="263" y="271" width="14" height="11" rx="4" fill="none" stroke="#00ffff" strokeWidth="1.2" opacity="0.9"/>
      <line x1="255" y1="276" x2="263" y2="276" stroke="#00ffff" strokeWidth="1" opacity="0.7"/>
      <line x1="228" y1="276" x2="241" y2="276" stroke="#00ffff" strokeWidth="1" opacity="0.5"/>
      <line x1="277" y1="276" x2="292" y2="276" stroke="#00ffff" strokeWidth="1" opacity="0.5"/>

      {/* Headphones */}
      <path d="M228 268 Q228 248 260 246 Q292 248 292 268" fill="none" stroke="#7b2fff" strokeWidth="4" strokeLinecap="round"/>
      <rect x="222" y="265" width="10" height="14" rx="4" fill="#7b2fff" opacity="0.9"/>
      <rect x="288" y="265" width="10" height="14" rx="4" fill="#7b2fff" opacity="0.9"/>

      {/* Floating AI elements */}
      {/* Brain/AI chip top left */}
      <g transform="translate(30, 60)">
        <rect width="60" height="50" rx="8" fill="#0f0f2a" stroke="#00ffff" strokeWidth="1" opacity="0.8"/>
        <text x="8" y="20" fontFamily="Fira Code" fontSize="8" fill="#00ffff">AI</text>
        <text x="4" y="32" fontFamily="Fira Code" fontSize="7" fill="#7b2fff">MODEL</text>
        <text x="6" y="44" fontFamily="Fira Code" fontSize="7" fill="#00ff88">98.7%</text>
        <animate attributeName="opacity" values="0.8;0.5;0.8" dur="2s" repeatCount="indefinite"/>
      </g>

      {/* React logo top right */}
      <g transform="translate(430, 50)">
        <circle cx="30" cy="30" r="28" fill="#0f0f2a" stroke="#00ffff" strokeWidth="1" opacity="0.7"/>
        <ellipse cx="30" cy="30" rx="22" ry="9" fill="none" stroke="#00ffff" strokeWidth="1.5" opacity="0.8"/>
        <ellipse cx="30" cy="30" rx="22" ry="9" fill="none" stroke="#00ffff" strokeWidth="1.5" opacity="0.8" transform="rotate(60 30 30)"/>
        <ellipse cx="30" cy="30" rx="22" ry="9" fill="none" stroke="#00ffff" strokeWidth="1.5" opacity="0.8" transform="rotate(120 30 30)"/>
        <circle cx="30" cy="30" r="4" fill="#00ffff"/>
        <animateTransform attributeName="transform" type="rotate" from="0 460 80" to="360 460 80" dur="10s" repeatCount="indefinite" additive="sum"/>
      </g>

      {/* Database icon */}
      <g transform="translate(440, 200)">
        <ellipse cx="25" cy="12" rx="22" ry="8" fill="#0f0f2a" stroke="#7b2fff" strokeWidth="1" opacity="0.8"/>
        <rect x="3" y="12" width="44" height="20" fill="#0f0f2a" stroke="#7b2fff" strokeWidth="1" opacity="0.8"/>
        <ellipse cx="25" cy="32" rx="22" ry="8" fill="#0f0f2a" stroke="#7b2fff" strokeWidth="1" opacity="0.8"/>
        <text x="10" y="26" fontFamily="Fira Code" fontSize="7" fill="#7b2fff">MySQL</text>
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
      </g>

      {/* Git branch */}
      <g transform="translate(20, 200)">
        <circle cx="15" cy="10" r="6" fill="#0f0f2a" stroke="#00ff88" strokeWidth="1.2"/>
        <circle cx="15" cy="45" r="6" fill="#0f0f2a" stroke="#00ff88" strokeWidth="1.2"/>
        <circle cx="38" cy="27" r="6" fill="#0f0f2a" stroke="#00ff88" strokeWidth="1.2"/>
        <line x1="15" y1="16" x2="15" y2="39" stroke="#00ff88" strokeWidth="1.2"/>
        <path d="M15 16 Q15 27 32 27" fill="none" stroke="#00ff88" strokeWidth="1.2"/>
        <text x="0" y="65" fontFamily="Fira Code" fontSize="7" fill="#00ff88">git push</text>
        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2.5s" repeatCount="indefinite"/>
      </g>

      {/* Node.js badge */}
      <g transform="translate(20, 130)">
        <rect width="58" height="22" rx="5" fill="#0f0f2a" stroke="#00ff88" strokeWidth="1" opacity="0.8"/>
        <text x="6" y="15" fontFamily="Fira Code" fontSize="9" fill="#00ff88">Node.js</text>
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="4s" repeatCount="indefinite"/>
      </g>

      {/* Gradients */}
      <defs>
        <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00ffff" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#7b2fff" stopOpacity="0.05"/>
        </radialGradient>
      </defs>
    </svg>
  )
}
