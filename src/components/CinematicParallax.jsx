import { useEffect, useRef, useState, useMemo } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion'

export const CinematicParallax = () => {
  const containerRef = useRef(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Memoize random smoke particle configurations to prevent flickering
  const smokeParticles = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 400 + Math.random() * 400,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      moveX: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
      moveY: [0, Math.random() * -300, Math.random() * -400, 0],
      rotation: [0, Math.random() * 180, Math.random() * 360, 0],
      color: i % 3 === 0
        ? 'rgba(200, 0, 0, 0.3)'
        : i % 3 === 1
        ? 'rgba(180, 0, 0, 0.3)'
        : 'rgba(220, 0, 0, 0.2)'
    }))
  }, []) // Empty dependency array ensures this only runs once

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Motion values for cursor tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Velocity-aware motion for organic feel
  const mouseXVelocity = useVelocity(mouseX)

  // Smooth spring physics for cursor movement - more responsive
  const springConfig = {
    damping: 50,
    stiffness: 100,
    mass: 1,
    restDelta: 0.001
  }

  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  // Scroll-based parallax - track the entire document scroll
  const { scrollY } = useScroll()
  const smoothScrollY = useSpring(scrollY, { damping: 50, stiffness: 100 })

  // Track mouse movement with extreme subtlety
  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Normalize to -1 to 1, then scale for subtle movement
      const x = ((clientX / innerWidth) - 0.5) * 2
      const y = ((clientY / innerHeight) - 0.5) * 2

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [prefersReducedMotion, mouseX, mouseY])

  // Ambient drift animation using animation frame
  const time = useMotionValue(0)

  useAnimationFrame((t) => {
    if (prefersReducedMotion) return
    time.set(t / 1000) // Convert to seconds
  })

  // Transform values for each layer with different parallax speeds based on scroll distance
  const layer1Y = useTransform(smoothScrollY, [0, 2000], [0, 600])
  const layer2Y = useTransform(smoothScrollY, [0, 2000], [0, 400])
  const layer3Y = useTransform(smoothScrollY, [0, 2000], [0, 250])
  const layer4Y = useTransform(smoothScrollY, [0, 2000], [0, 150])

  // Ambient drift transforms using sine waves for organic motion - MORE VISIBLE
  const ambientDriftX1 = useTransform(time, (t) => Math.sin(t * 0.15) * 60)
  const ambientDriftY1 = useTransform(time, (t) => Math.cos(t * 0.12) * 50)
  const ambientDriftX2 = useTransform(time, (t) => Math.sin(t * 0.18) * -70)
  const ambientDriftY2 = useTransform(time, (t) => Math.cos(t * 0.14) * 55)

  // Combine cursor and ambient motion for layer transforms - MUCH MORE MOVEMENT
  const layer1X = useTransform(() => smoothMouseX.get() * -80 + ambientDriftX1.get())
  const layer2X = useTransform(() => smoothMouseX.get() * -120 + ambientDriftX2.get())
  const layer3X = useTransform(() => smoothMouseX.get() * 150)
  const layer4X = useTransform(() => smoothMouseX.get() * 200)

  const layer1YCombined = useTransform(() => layer1Y.get() + ambientDriftY1.get())
  const layer2YCombined = useTransform(() => layer2Y.get() + ambientDriftY2.get())

  // Velocity-based scale for depth perception
  const velocityScale = useTransform(mouseXVelocity, [-1000, 0, 1000], [0.98, 1, 1.02])

  // Performance optimization - disable motion if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div
        ref={containerRef}
        className="fixed inset-0 -z-20 overflow-hidden"
        style={{ backgroundColor: '#000000' }}
      >
        {/* Static background for reduced motion users */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(200, 0, 0, 0.08) 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-20 overflow-hidden"
      style={{
        backgroundColor: '#000000',
        isolation: 'isolate',
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      {/* Base Layer - Deepest void with ambient drift */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: layer1X,
          y: layer1YCombined,
          scale: velocityScale,
          willChange: 'transform',
        }}
      >
        <div
          className="absolute top-[20%] left-[10%] w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(180, 0, 0, 1) 0%, transparent 65%)',
            filter: 'blur(140px)',
            opacity: 0.6,
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
          }}
        />
      </motion.div>

      {/* Layer 2 - Mid-depth crimson with rotation */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: layer2X,
          y: layer2YCombined,
          rotateZ: useTransform(smoothMouseY, [-1, 1], [-5, 5]),
          scale: useTransform(smoothMouseX, [-1, 1], [0.95, 1.05]),
          willChange: 'transform',
        }}
      >
        <div
          className="absolute top-[40%] right-[15%] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(200, 0, 0, 1) 0%, transparent 60%)',
            filter: 'blur(120px)',
            opacity: 0.65,
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
          }}
        />
      </motion.div>

      {/* Layer 3 - Closer depth plane with perspective */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: layer3X,
          y: layer3Y,
          rotateX: useTransform(smoothMouseY, [-1, 1], [8, -8]),
          rotateY: useTransform(smoothMouseX, [-1, 1], [-8, 8]),
          scale: useTransform(smoothMouseX, [-1, 1], [0.9, 1.1]),
          willChange: 'transform',
        }}
      >
        <div
          className="absolute bottom-[30%] left-[30%] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(220, 0, 0, 1) 0%, transparent 55%)',
            filter: 'blur(100px)',
            opacity: 0.7,
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
          }}
        />
      </motion.div>

      {/* Layer 4 - Nearest with maximum parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: layer4X,
          y: layer4Y,
          rotateY: useTransform(smoothMouseX, [-1, 1], [-12, 12]),
          rotateX: useTransform(smoothMouseY, [-1, 1], [10, -10]),
          scale: useTransform(velocityScale, [0.98, 1, 1.02], [0.92, 1, 1.08]),
          willChange: 'transform',
        }}
      >
        <div
          className="absolute top-[60%] right-[40%] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(160, 0, 0, 1) 0%, transparent 50%)',
            filter: 'blur(90px)',
            opacity: 0.6,
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
          }}
        />
      </motion.div>

      {/* Atmospheric depth shadows - geometric planes */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: useTransform(smoothMouseX, [-1, 1], [-80, 80]),
          y: useTransform(smoothMouseY, [-1, 1], [-60, 60]),
          rotateZ: useTransform(smoothMouseX, [-1, 1], [-3, 3]),
          willChange: 'transform',
        }}
      >
        {/* Vertical shadow plane - reactive to cursor */}
        <motion.div
          className="absolute left-[15%] top-0 bottom-0 w-[4px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(200, 0, 0, 0.8) 50%, transparent 100%)',
            filter: 'blur(50px)',
            transform: 'scaleY(1.8)',
            opacity: useTransform(smoothMouseX, [-1, 0, 1], [0.25, 0.35, 0.25]),
          }}
        />

        {/* Horizontal shadow plane - reactive to scroll and cursor */}
        <motion.div
          className="absolute left-0 right-0 top-[60%] h-[4px]"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(180, 0, 0, 0.8) 50%, transparent 100%)',
            filter: 'blur(60px)',
            transform: 'scaleX(1.8)',
            opacity: useTransform(smoothMouseY, [-1, 0, 1], [0.2, 0.35, 0.2]),
          }}
        />

        {/* Additional diagonal plane for more depth */}
        <motion.div
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(220, 0, 0, 0.15) 50%, transparent 100%)',
            filter: 'blur(80px)',
            opacity: useTransform(smoothMouseX, [-1, 1], [0.1, 0.2]),
            rotate: useTransform(smoothMouseY, [-1, 1], [0, 5]),
          }}
        />
      </motion.div>

      {/* Cinematic vignette - depth enhancement */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 100%)
          `,
        }}
      />

      {/* Subtle film grain for texture depth */}
      <motion.div
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      {/* Depth fog - atmospheric scattering effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: useTransform(smoothScrollY, [0, 2000], [0, -200]),
          opacity: useTransform(smoothScrollY, [0, 1000, 2000], [0.15, 0.1, 0.05]),
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(220, 0, 0, 0.2) 0%, transparent 50%, rgba(180, 0, 0, 0.2) 100%)',
            filter: 'blur(150px)',
            opacity: 0.3,
          }}
        />
      </motion.div>

      {/* Random Smoke Effects */}
      {smokeParticles.map((particle) => (
        <motion.div
          key={`smoke-${particle.id}`}
          className="absolute pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            willChange: 'transform, opacity',
          }}
          animate={{
            x: particle.moveX,
            y: particle.moveY,
            scale: [1, 1.5, 2, 1],
            opacity: [0, 0.3, 0.5, 0],
            rotate: particle.rotation,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle at center, ${particle.color} 0%, transparent 70%)`,
              filter: 'blur(80px)',
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
            }}
          />
        </motion.div>
      ))}

      {/* Breathing ambient light - subtle pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95], // Custom ease for breathing effect
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(200, 0, 0, 1) 0%, transparent 50%)',
            filter: 'blur(200px)',
          }}
        />
      </motion.div>
    </div>
  )
}
