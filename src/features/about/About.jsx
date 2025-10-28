import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { AnimatedHeading } from '../../components/ui/AnimatedHeading'

export const About = () => {
  const socialLinks = [
    { name: 'GitHub', Icon: Github, url: 'https://github.com/sunilskcj' },
    { name: 'LinkedIn', Icon: Linkedin, url: 'https://www.linkedin.com/in/sunil-skcj' },
    { name: 'Twitter', Icon: Twitter, url: 'https://x.com/sunilcj27' },
    { name: 'Instagram', Icon: Instagram, url: 'https://www.instagram.com/sunilskcj' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      {/* Container with proper centering and spacing */}
      <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 pb-32">
        <div className="w-full max-w-4xl">
          {/* Heading Section */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <AnimatedHeading>About</AnimatedHeading>
          </div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 sm:space-y-8 md:space-y-10"
          >
            {/* Hero Statement */}
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white/90 font-light">
                I build full-stack applications that are robust, scalable, and maintainable.
              </p>
            </div>

            {/* Body Content */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed">
                As a full-stack developer, I specialize in building modern web applications using
                React, TypeScript, .NET, and PostgreSQL. My passion lies in creating clean,
                well-architected solutions that solve real-world problems.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed">
                Currently diving deep into AI and machine learning, I&apos;m learning to build AI agents,
                implementing chatbots, and developing AI-powered applications using LangChain, Pinecone,
                and other cutting-edge AI tools. Exploring the intersection of traditional software
                development and artificial intelligence to create intelligent, context-aware applications.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed">
                My approach emphasizes clean architecture principles, comprehensive testing, and
                modern DevOps practices. I believe in writing code that is not only functional
                but also maintainable and scalable for the long term.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed">
                Based in Chennai, I work on projects ranging from personal journaling apps to
                enterprise fintech platforms. When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source, or learning about cloud architecture and AI.
              </p>
            </div>

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6 sm:pt-8 md:pt-10 pb-4"
            >
              <div className="flex items-center gap-4 sm:gap-5 md:gap-6 flex-wrap">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.Icon
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative w-14 h-14 sm:w-16 sm:h-16 md:w-[4.5rem] md:h-[4.5rem]
                                 rounded-full bg-white/5 border border-white/10
                                 hover:bg-white/10 hover:border-white/30
                                 flex items-center justify-center
                                 transition-all duration-300 cursor-pointer"
                      aria-label={link.name}
                    >
                      <IconComponent
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white/70
                                   group-hover:text-white transition-colors duration-300"
                      />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}