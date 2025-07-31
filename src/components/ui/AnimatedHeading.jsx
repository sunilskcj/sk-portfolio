import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

export const AnimatedHeading = ({ children, delay = 0 }) => {
  const letters = children.split('')

  return (
    <div className="overflow-hidden">
      <motion.h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 font-medium mb-16">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.03,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  )
}

AnimatedHeading.propTypes = {
  children: PropTypes.string.isRequired,
  delay: PropTypes.number,
}
