import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero3DCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const currentMount = mountRef.current
    if (!currentMount) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const width = currentMount.clientWidth || 480
    const height = currentMount.clientHeight || 480

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 5.5

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    currentMount.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x00f5ff, 4, 50)
    pointLight1.position.set(5, 5, 5)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 4, 50)
    pointLight2.position.set(-5, -5, 3)
    scene.add(pointLight2)

    const pointLight3 = new THREE.PointLight(0xec4899, 3, 50)
    pointLight3.position.set(0, 4, -3)
    scene.add(pointLight3)

    // Main Group to contain all 3D objects
    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    // 1. Inner Glowing Holographic Polyhedron (Icosahedron)
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 1)
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x0a192f,
      emissive: 0x00f5ff,
      emissiveIntensity: 0.25,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: false,
      flatShading: true,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    mainGroup.add(innerMesh)

    // 2. Outer Wireframe Cage
    const wireGeo = new THREE.IcosahedronGeometry(1.5, 1)
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    })
    const wireMesh = new THREE.Mesh(wireGeo, wireMat)
    mainGroup.add(wireMesh)

    // 3. Floating Orbital Rings
    const ringGroup = new THREE.Group()
    mainGroup.add(ringGroup)

    const createRing = (radius, tube, color, rotX, rotY) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100)
      const ringMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.6,
        roughness: 0.3,
        metalness: 0.8,
      })
      const ring = new THREE.Mesh(ringGeo, ringMat)
      ring.rotation.x = rotX
      ring.rotation.y = rotY
      return ring
    }

    const ring1 = createRing(2.1, 0.02, 0x00f5ff, Math.PI / 3, 0)
    const ring2 = createRing(2.35, 0.015, 0x8b5cf6, -Math.PI / 4, Math.PI / 6)
    const ring3 = createRing(1.85, 0.018, 0xec4899, Math.PI / 2, -Math.PI / 5)

    ringGroup.add(ring1)
    ringGroup.add(ring2)
    ringGroup.add(ring3)

    // 4. Floating Tech Nodes / Satellite Spheres
    const nodeGroup = new THREE.Group()
    mainGroup.add(nodeGroup)

    const nodeColors = [0x00f5ff, 0x8b5cf6, 0xec4899, 0x10b981]
    const satellites = []

    for (let i = 0; i < 8; i++) {
      const satGeo = new THREE.SphereGeometry(0.06, 16, 16)
      const satMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i % nodeColors.length],
        emissive: nodeColors[i % nodeColors.length],
        emissiveIntensity: 1,
      })
      const sat = new THREE.Mesh(satGeo, satMat)
      const angle = (i / 8) * Math.PI * 2
      const radius = 2.1 + (i % 3) * 0.2
      sat.position.set(Math.cos(angle) * radius, Math.sin(angle) * 0.6, Math.sin(angle) * radius)
      sat.userData = { angle, radius, speed: 0.01 + (i % 3) * 0.005 }
      nodeGroup.add(sat)
      satellites.push(sat)
    }

    // 5. Starfield / Cyber Dust Particles
    const particleCount = 200
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const color1 = new THREE.Color(0x00f5ff)
    const color2 = new THREE.Color(0x8b5cf6)

    for (let i = 0; i < particleCount; i++) {
      const r = 3 + Math.random() * 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const mixedColor = color1.clone().lerp(color2, Math.random())
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Mouse Tracking for Interactive 3D Orbit
    let targetRotationX = 0
    let targetRotationY = 0
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mouseX = (x / rect.width) * 2
      mouseY = -(y / rect.height) * 2
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Handle Resize
    const handleResize = () => {
      if (!currentMount) return
      const newWidth = currentMount.clientWidth
      const newHeight = currentMount.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Smooth mouse rotation lerp
      targetRotationY = mouseX * 0.6
      targetRotationX = mouseY * 0.6
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05

      // Continuous ambient rotation
      innerMesh.rotation.y += 0.008
      innerMesh.rotation.x += 0.004

      wireMesh.rotation.y -= 0.006
      wireMesh.rotation.z += 0.004

      ring1.rotation.z += 0.01
      ring2.rotation.z -= 0.008
      ring3.rotation.z += 0.006

      // Orbit satellites
      satellites.forEach((sat) => {
        sat.userData.angle += sat.userData.speed
        sat.position.x = Math.cos(sat.userData.angle) * sat.userData.radius
        sat.position.z = Math.sin(sat.userData.angle) * sat.userData.radius
        sat.position.y = Math.sin(sat.userData.angle * 2) * 0.4
      })

      // Slowly rotate particle dust
      particles.rotation.y = elapsedTime * 0.03
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement)
      }

      // Dispose resources
      innerGeo.dispose()
      innerMat.dispose()
      wireGeo.dispose()
      wireMat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="hero-3d-canvas-container"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        touchAction: 'pan-y',
        pointerEvents: 'none',
      }}
    />
  )
}
