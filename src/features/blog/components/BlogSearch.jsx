import { Search } from 'lucide-react';

export const BlogSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search articles by title or tag..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-14 pr-6 py-4 bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-full text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-500 transition-colors duration-300 text-sm font-medium"
      />
    </div>
  );
};
