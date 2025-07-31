import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

export const BlackVoidEntry = ({ onComplete }) => {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    // Complete intro after 4 seconds
    const timer = setTimeout(() => {
      setShowIntro(false)
      setTimeout(() => onComplete(), 800) // Wait for fade out
    }, 4000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Noise Grain Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              animation: 'grain 8s steps(10) infinite'
            }}
          />

          {/* Vignette Effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
            }}
          />

          {/* Logo/Name */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-center"
            >
              {/* Main Text */}
              <motion.h1
                className="text-6xl md:text-7xl font-light tracking-[0.2em] text-white/90 mb-4"
                initial={{ letterSpacing: '0.1em', opacity: 0 }}
                animate={{ letterSpacing: '0.2em', opacity: 0.9 }}
                transition={{
                  duration: 2.5,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                SUNIL
              </motion.h1>

              {/* Subtle Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.8,
                  delay: 1.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8 mx-auto"
                style={{ width: '200px', transformOrigin: 'center' }}
              />
            </motion.div>

            {/* Ambient Light Glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.15, 0] }}
              transition={{
                duration: 3,
                delay: 1,
                ease: "easeInOut"
              }}
              className="absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(circle at center, rgba(184, 2, 50, 0.2) 0%, transparent 70%)',
                filter: 'blur(60px)',
                transform: 'scale(1.5)'
              }}
            />
          </div>

          {/* Loading Indicator (very subtle) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-1 h-1 rounded-full bg-white/30"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

BlackVoidEntry.propTypes = {
  onComplete: PropTypes.func.isRequired,
}
