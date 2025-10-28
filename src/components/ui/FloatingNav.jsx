import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

export const FloatingNav = () => {
  const location = useLocation()

  const navItems = [
    { label: 'Work', path: '/' },
    { label: 'Blog', path: '/blog' },
    // { label: 'Archive', path: '/archive' }, // Hidden - uncomment to show
    { label: 'About', path: '/about' }
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-white/5 backdrop-blur-xl rounded-full px-8 py-4 border border-white/10 shadow-2xl">
        <div className="flex gap-8 items-center">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                className={`text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                  location.pathname === item.path ? 'text-white' : 'text-zinc-400'
                }`}
                whileHover={{ scale: 1.05, color: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
