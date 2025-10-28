import { motion } from 'framer-motion';

export const TagFilter = ({ allTags, selectedTags, setSelectedTags }) => {
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wider">
        Filter by Tags
      </h3>
      <div className="flex flex-wrap gap-3">
        {allTags.map((tag, index) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <motion.button
              key={tag}
              onClick={() => toggleTag(tag)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isSelected
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-zinc-800 hover:border-emerald-400 dark:hover:border-emerald-500'
              }`}
            >
              #{tag}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
