import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ProjectCard } from '../../components/ui/ProjectCard'
import { AnimatedHeading } from '../../components/ui/AnimatedHeading'
import { CinematicParallax } from '../../components/CinematicParallax'

const RotatingText = () => {
  const roles = ['Full Stack Developer', 'Product Developer', 'Film Maker']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block relative min-w-full">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0, rotateX: 90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -20, opacity: 0, rotateX: -90 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="block"
          style={{ transformOrigin: 'center center' }}
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export const Home = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const projects = [
    {
      title: 'Vox',
      description: 'A modern, responsive portfolio website showcasing expertise in web development, mobile applications, cloud solutions, and technology consulting. Built with React, TypeScript, Tailwind CSS, and Framer Motion.',
      year: '2024',
      tag: 'Web Platform',
      image: new URL('../../assets/Vox.gif', import.meta.url).href,
      caseStudyUrl: '/case-study/vox',
    },
    {
      title: 'MyJournal',
      description: 'A full-stack personal journaling application inspired by Day One. Features rich text editing, multiple journals, tags, search, and secure authentication with .NET 8, React 19, and PostgreSQL.',
      year: '2024',
      tag: 'Full Stack App',
      image: new URL('../../assets/MYJOURNAL.gif', import.meta.url).href,
      caseStudyUrl: '/case-study/myjournal',
    },
    {
      title: 'Fintech Hub',
      description: 'Comprehensive fintech application with .NET 9 backend and React frontend. Features clean architecture, JWT authentication, deployed on GCP using Kubernetes and ArgoCD with complete CI/CD pipeline.',
      year: '2024',
      tag: 'Enterprise Platform',
      image: new URL('../../assets/myFin.gif', import.meta.url).href,
      caseStudyUrl: '/case-study/fintech-hub',
    },
  ]

  const clients = [
    'React', 'TypeScript', '.NET', 'PostgreSQL',
    'Docker', 'Kubernetes', 'GCP', 'Tailwind CSS'
  ]

  return (
    <div className="relative">
      <CinematicParallax />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative">
        <motion.div
          style={{ y }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-7xl md:text-8xl font-semibold tracking-tight mb-8 leading-[1.1]">
              <RotatingText /><br />
              based in Chennai
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto text-balance"
          >
            Building robust full-stack applications with modern technologies and clean architecture
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-zinc-600"
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Selected Work */}
      <section className="min-h-screen px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedHeading>Selected Work</AnimatedHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedHeading>Technologies</AnimatedHeading>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white/5 rounded-2xl p-8 flex items-center justify-center
                           border border-white/10 hover:border-white/20 transition-all duration-500
                           cursor-pointer aspect-square"
              >
                <span className="text-2xl font-medium text-white/90">{client}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedHeading>Expertise</AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { skill: 'Frontend Development', stack: 'React, TypeScript', icon: '⚛️' },
              { skill: 'Backend Development', stack: '.NET, C#', icon: '🔧' },
              { skill: 'Database Design', stack: 'PostgreSQL, EF Core', icon: '🗄️' },
              { skill: 'Cloud & DevOps', stack: 'GCP, Kubernetes, Docker', icon: '☁️' },
              { skill: 'UI/UX Design', stack: 'Tailwind, Framer Motion', icon: '🎨' },
              { skill: 'Architecture', stack: 'Clean Architecture, SOLID', icon: '🏗️' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -4 }}
                className="bg-white/5 rounded-2xl p-8 border border-white/10
                           hover:border-white/20 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-lg text-white mb-2 font-semibold">{item.skill}</h4>
                <p className="text-sm text-zinc-400">{item.stack}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
