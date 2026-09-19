import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    let rafId
    let targetX = -100
    let targetY = -100
    let currentX = -100
    let currentY = -100

    const onMouseMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    // Check hovered elements
    const handleElementHover = (e) => {
      const target = e.target
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.tilt-card-wrapper') ||
        target.closest('[role="button"]')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', handleElementHover)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    // Smooth animation loop for lagging follower
    const renderLoop = () => {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18
      setTrailingPos({ x: currentX, y: currentY })
      rafId = requestAnimationFrame(renderLoop)
    }
    renderLoop()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', handleElementHover)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [isVisible])

  if (isTouch || !isVisible) return null

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '10px' : '6px',
          height: isHovered ? '10px' : '6px',
          backgroundColor: '#00f5ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: `translate3d(${pos.x - (isHovered ? 5 : 3)}px, ${pos.y - (isHovered ? 5 : 3)}px, 0)`,
          zIndex: 99999,
          transition: 'width 0.2s, height 0.2s, background-color 0.2s',
          boxShadow: '0 0 10px #00f5ff',
        }}
      />
      {/* Smooth Outer Aura Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          border: isHovered ? '1.5px solid #00f5ff' : '1px solid rgba(139, 92, 246, 0.45)',
          backgroundColor: isHovered ? 'rgba(0, 245, 255, 0.08)' : 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: `translate3d(${trailingPos.x - (isHovered ? 24 : 16)}px, ${trailingPos.y - (isHovered ? 24 : 16)}px, 0)`,
          zIndex: 99998,
          transition: 'width 0.25s, height 0.25s, border-color 0.25s, background-color 0.25s',
          boxShadow: isHovered ? '0 0 20px rgba(0, 245, 255, 0.3)' : 'none',
        }}
      />
    </>
  )
}
