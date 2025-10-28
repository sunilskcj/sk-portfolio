import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const MyJournalCaseStudy = () => {
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
              Full Stack App
            </span>
            <span className="text-zinc-500">2024</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            MyJournal
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            A full-stack personal journaling application inspired by Day One. Features rich text editing, multiple journals, tags, search, and secure authentication.
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
            src={new URL('../../assets/MYJOURNAL.gif', import.meta.url).href}
            alt="MyJournal App"
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
            MyJournal is a comprehensive journaling application that combines the best features of popular journaling apps with modern web technologies. Built with .NET 8 backend and React 19 frontend, it provides a secure, feature-rich platform for personal reflection and documentation.
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
            Creating a journaling application that balances powerful features with simplicity and security. The main challenges included:
          </p>
          <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
            <li>Implementing a rich text editor with formatting capabilities while maintaining data security</li>
            <li>Designing an intuitive multi-journal system with efficient organization</li>
            <li>Building robust search and filtering with tags and metadata</li>
            <li>Ensuring data privacy with secure authentication and encryption</li>
            <li>Creating a responsive UI that works seamlessly across devices</li>
            <li>Managing database migrations for evolving schema requirements</li>
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
            Built a full-stack application with clean architecture principles, featuring:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-3">.NET 8 Backend</h3>
              <p className="text-zinc-400 text-sm">
                Implemented RESTful API with Entity Framework Core, ASP.NET Identity for authentication, and JWT for secure token-based auth.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-3">React 19 Frontend</h3>
              <p className="text-zinc-400 text-sm">
                Modern UI with React Router for navigation, TipTap for rich text editing, and responsive design inspired by Day One.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-3">PostgreSQL Database</h3>
              <p className="text-zinc-400 text-sm">
                Robust data persistence with DbUp for SQL-based migrations, ensuring schema versioning and smooth updates.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-3">Docker Deployment</h3>
              <p className="text-zinc-400 text-sm">
                Containerized architecture with Docker Compose for easy deployment and data persistence across container restarts.
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
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-3">Backend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['.NET 8', 'PostgreSQL', 'EF Core', 'DbUp', 'ASP.NET Identity', 'JWT'].map((tech) => (
                  <div key={tech} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                    <span className="text-white/90 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Frontend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['React 19', 'Vite', 'React Router', 'TipTap', 'Axios', 'Lucide React', 'date-fns'].map((tech) => (
                  <div key={tech} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                    <span className="text-white/90 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
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
              <h3 className="text-white font-semibold mb-2">Multiple Journals</h3>
              <p className="text-zinc-400 text-sm">
                Create and organize different journals for various aspects of life with intuitive management
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Rich Text Editor</h3>
              <p className="text-zinc-400 text-sm">
                Write beautiful journal entries with TipTap editor supporting formatting, lists, and more
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Tags & Search</h3>
              <p className="text-zinc-400 text-sm">
                Organize entries with tags and find them quickly with powerful search functionality
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Metadata Support</h3>
              <p className="text-zinc-400 text-sm">
                Add location, mood, weather, and date/time metadata to entries for rich context
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Secure Authentication</h3>
              <p className="text-zinc-400 text-sm">
                JWT-based authentication with password encryption ensuring data privacy and security
              </p>
            </div>
          </div>
        </motion.section>

        {/* Technical Highlights Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">Technical Highlights</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Clean Architecture</h3>
              <p className="text-zinc-400 text-sm">
                Separation of concerns with Controllers, Services, DTOs, and Models for maintainable codebase
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Database Migrations with DbUp</h3>
              <p className="text-zinc-400 text-sm">
                SQL-based migration system for version control of database schema with rollback capabilities
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Docker Containerization</h3>
              <p className="text-zinc-400 text-sm">
                Complete Docker setup with compose for database, API, and frontend with persistent data volumes
              </p>
            </div>
          </div>
        </motion.section>

        {/* Results Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">Results & Impact</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Successfully delivered a production-ready journaling application with comprehensive features:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">Full-Stack</div>
              <p className="text-zinc-400 text-sm">Complete end-to-end solution with modern architecture</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">Secure</div>
              <p className="text-zinc-400 text-sm">JWT authentication with encrypted password storage</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">Scalable</div>
              <p className="text-zinc-400 text-sm">Docker deployment with data persistence and easy scaling</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">Feature-Rich</div>
              <p className="text-zinc-400 text-sm">Rich text editing, tags, search, and metadata support</p>
            </div>
          </div>
        </motion.section>

        {/* Links Section */}
        {/* <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername/myjournal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-xl px-6 py-3 border border-white/10 hover:border-white/20 transition-all"
            >
              <Github size={20} />
              <span>View Code</span>
            </a>
          </div>
        </motion.section> */}
      </div>
    </div>
  )
}
