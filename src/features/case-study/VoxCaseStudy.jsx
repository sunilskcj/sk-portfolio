import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const VoxCaseStudy = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen px-8 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 text-sm text-white/90 font-medium">
              Web Platform
            </span>
            <span className="text-zinc-500">2024</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Vox
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            A modern, responsive portfolio website showcasing expertise in web development, mobile applications, cloud solutions, and technology consulting.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl overflow-hidden border border-white/10 mb-16"
        >
          <img
            src={new URL('../../assets/Vox.gif', import.meta.url).href}
            alt="Vox Platform"
            className="w-full"
          />
        </motion.div>

        {/* Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-zinc-400 text-sm mb-2">Role</h3>
              <p className="text-white font-medium">Full Stack Developer</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-zinc-400 text-sm mb-2">Timeline</h3>
              <p className="text-white font-medium">2024</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-zinc-400 text-sm mb-2">Status</h3>
              <p className="text-white font-medium">Completed</p>
            </div>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            BrainFcuk Portfolio is a modern, responsive portfolio website built to showcase expertise in web development, mobile applications, cloud solutions, and technology consulting. The platform features a clean, professional design with dark/light theme support, interactive animations, and optimized performance.
          </p>
        </motion.section>

        {/* Challenge Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Creating a portfolio website that stands out in a competitive market while maintaining professional aesthetics and optimal performance. The challenge was to build a platform that could effectively showcase diverse services and technologies while providing an engaging user experience across all devices.
          </p>
          <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
            <li>Designing a modern, responsive interface that works seamlessly on all devices</li>
            <li>Implementing smooth animations and interactions without compromising performance</li>
            <li>Creating an intuitive navigation system for showcasing multiple service areas</li>
            <li>Ensuring fast loading times and optimal SEO performance</li>
          </ul>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">The Solution</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Built with React 18 and TypeScript, leveraging Vite for fast development and optimized builds. The platform features:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-3">Modern Design System</h3>
              <p className="text-zinc-400 text-sm">
                Implemented Tailwind CSS with a custom design system, ensuring consistency across all components while maintaining flexibility for future updates.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-3">Interactive Animations</h3>
              <p className="text-zinc-400 text-sm">
                Utilized Framer Motion for smooth, performant animations that enhance user experience without sacrificing loading times.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-3">Performance Optimization</h3>
              <p className="text-zinc-400 text-sm">
                Achieved Lighthouse scores of 95+ across all metrics with bundle sizes under 200KB gzipped and first paint under 1.5s.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-3">Responsive Design</h3>
              <p className="text-zinc-400 text-sm">
                Mobile-first approach tested across all major devices, ensuring seamless experience from mobile phones to desktop displays.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Google Fonts', 'ESLint'].map((tech) => (
              <div key={tech} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                <span className="text-white/90 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Key Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Modern Design</h3>
              <p className="text-zinc-400 text-sm">
                Clean, professional aesthetic with dark/light theme support and custom design system
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Interactive Showcase</h3>
              <p className="text-zinc-400 text-sm">
                20+ technologies across 6 categories with interactive filtering and proficiency indicators
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Comprehensive Contact System</h3>
              <p className="text-zinc-400 text-sm">
                Multi-channel contact options with comprehensive form validation and project consultation flow
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">SEO Optimized</h3>
              <p className="text-zinc-400 text-sm">
                Optimized meta tags, semantic HTML, and performance for maximum visibility
              </p>
            </div>
          </div>
        </motion.section>

        {/* Results Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-4xl font-bold text-white mb-2">95+</div>
              <p className="text-zinc-400 text-sm">Lighthouse Score</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-4xl font-bold text-white mb-2">&lt;1.5s</div>
              <p className="text-zinc-400 text-sm">First Paint Time</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-4xl font-bold text-white mb-2">&lt;200KB</div>
              <p className="text-zinc-400 text-sm">Bundle Size (gzipped)</p>
            </div>
          </div>
        </motion.section>

        {/* Links Section */}
        {/* <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername/brainfcuk-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-xl px-6 py-3 border border-white/10 hover:border-white/20 transition-all"
            >
              <Github size={20} />
              <span>View Code</span>
            </a>
            <a
              href="https://brainfcuk.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-xl px-6 py-3 border border-white/10 hover:border-white/20 transition-all"
            >
              <ExternalLink size={20} />
              <span>Live Site</span>
            </a>
          </div>
        </motion.section> */}
      </div>
    </div>
  )
}
