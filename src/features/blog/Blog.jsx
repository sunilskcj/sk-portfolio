import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BlogSearch } from './components/BlogSearch';
import { TagFilter } from './components/TagFilter';
import { BlogSection } from './components/BlogSection';
import { posts } from './data/posts';

export const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter posts based on search query and selected tags
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Tag filter
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some(selectedTag => post.tags.includes(selectedTag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  // Group posts by category
  const postsByCategory = useMemo(() => {
    const grouped = {};
    filteredPosts.forEach(post => {
      if (!grouped[post.category]) {
        grouped[post.category] = [];
      }
      grouped[post.category].push(post);
    });
    return grouped;
  }, [filteredPosts]);

  return (
    <div className="min-h-screen relative">
      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <span>🌱</span>
            <span>My Digital Garden</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            Learning in public — sharing ideas, experiments & insights.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </motion.div>

        {/* Tag Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TagFilter
            allTags={allTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-8 text-sm text-gray-500 dark:text-gray-400"
        >
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
        </motion.div>

        {/* Blog Sections by Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {Object.keys(postsByCategory).length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            Object.entries(postsByCategory).map(([category, categoryPosts]) => (
              <BlogSection
                key={category}
                category={category}
                posts={categoryPosts}
              />
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};
