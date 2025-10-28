import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { BlogCard } from './BlogCard';

const categoryEmojis = {
  AI: '🤖',
  Dev: '💻',
  Life: '🌱',
  Finance: '💰'
};

export const BlogSection = ({ category, posts }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mb-8">
      {/* Category Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 mb-4 rounded-2xl bg-white/50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 group"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{categoryEmojis[category]}</span>
          <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
            {category}
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            ({posts.length})
          </span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
        </motion.div>
      </button>

      {/* Posts Grid */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {posts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
