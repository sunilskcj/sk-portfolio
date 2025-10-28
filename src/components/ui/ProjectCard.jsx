import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    if (project.caseStudyUrl) {
      navigate(project.caseStudyUrl)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="group cursor-pointer"
    >
      <motion.div
        whileHover={{
          scale: 1.02,
          rotateX: 2,
          rotateY: 2,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white/5 rounded-3xl overflow-hidden border border-white/10
                   hover:border-white/20 transition-all duration-500"
        style={{ perspective: 1000 }}
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900/50">
          <motion.img
            src={project.image}
            alt={project.title}
            animate={{
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? 'brightness(0.7)' : 'brightness(1)',
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover"
          />

          {/* Arrow Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
              rotate: isHovered ? -45 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md
                       flex items-center justify-center border border-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
              <path d="M4 16L16 4M16 4H8M16 4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.div>

          {/* Project Tag */}
          {project.tag && (
            <div className="absolute bottom-6 left-6">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2
                            border border-white/20 text-xs text-white/90 font-medium">
                {project.tag}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
            <span className="text-sm text-zinc-500">{project.year}</span>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6 text-balance">
            {project.description}
          </p>

          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span>Open Case Study</span>
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ↗
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string,
    caseStudyUrl: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
}
