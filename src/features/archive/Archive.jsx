import { motion } from 'framer-motion'
import { AnimatedHeading } from '../../components/ui/AnimatedHeading'

export const Archive = () => {
  const archiveProjects = [
    { title: 'Vox', year: '2024', type: 'Web Platform' },
    { title: 'MyJournal - Journaling App', year: '2024', type: 'Full Stack' },
    { title: 'Fintech Hub', year: '2024', type: 'Enterprise' },
    { title: 'Database Migration Tools', year: '2024', type: 'DevOps' },
    { title: 'React Component Library', year: '2024', type: 'Library' },
    { title: 'API Gateway Integration', year: '2024', type: 'Backend' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center px-8 z-10 overflow-hidden"
      style={{ background: '#000000' }}
    >
      <div className="max-w-7xl mx-auto max-h-screen overflow-y-auto">
        <AnimatedHeading>Archive</AnimatedHeading>

        <div className="space-y-2">
          {archiveProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ x: 8 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between py-8 px-8
                            border-b border-white/10 hover:bg-white/5
                            rounded-2xl transition-all duration-500">
                <div className="flex items-baseline gap-8">
                  <h3 className="text-2xl font-medium text-white group-hover:text-white/80
                               transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-zinc-500 uppercase tracking-wider">
                    {project.type}
                  </span>
                </div>

                <div className="flex items-center gap-8">
                  <span className="text-zinc-500">{project.year}</span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-zinc-400"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
