import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { BlackVoidEntry } from './features/intro/BlackVoidEntry'
import { StickyHeader } from './components/ui/StickyHeader'
import { FloatingNav } from './components/ui/FloatingNav'
import { Home } from './features/home/Home'
import { Archive } from './features/archive/Archive'
import { About } from './features/about/About'
import { PageTransition } from './components/layout/PageTransition'
import { ParticleBackground } from './components/ui/effects/ParticleBackground'

const AppContent = () => {
  const location = useLocation()

  return (
    <div className="relative min-h-screen pb-32">
      <ParticleBackground />
      <StickyHeader />
      <FloatingNav />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/archive" element={<PageTransition><Archive /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        </Routes>
      </AnimatePresence>

    </div>
  )
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <BlackVoidEntry onComplete={() => setIntroComplete(true)} />

      {introComplete && (
        <Router>
          <AppContent />
        </Router>
      )}
    </>
  )
}