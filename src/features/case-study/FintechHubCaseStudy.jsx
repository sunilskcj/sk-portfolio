import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const FintechHubCaseStudy = () => {
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
              Enterprise Platform
            </span>
            <span className="text-zinc-500">2024</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Fintech Hub
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Comprehensive fintech application with .NET 9 backend and React frontend. Features clean architecture, JWT authentication, deployed on GCP using Kubernetes and ArgoCD with complete CI/CD pipeline.
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
            src={new URL('../../assets/myFin.gif', import.meta.url).href}
            alt="Fintech Hub Platform"
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
              <p className="text-white font-medium">Full Stack Developer & DevOps</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-zinc-400 text-sm mb-2">Timeline</h3>
              <p className="text-white font-medium">2024</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-zinc-400 text-sm mb-2">Status</h3>
              <p className="text-white font-medium">Production</p>
            </div>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            MyFin is a comprehensive personal finance management platform built with enterprise-grade architecture. The application enables users to manage multiple accounts, track transactions, create budgets, set financial goals, and gain insights through powerful analytics and visualizations.
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
            Building a production-ready fintech application with enterprise requirements presented several complex challenges:
          </p>
          <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
            <li>Implementing clean architecture with proper separation of concerns and SOLID principles</li>
            <li>Managing complex financial data models with multiple account types and transaction categories</li>
            <li>Building real-time analytics and data visualization for financial insights</li>
            <li>Ensuring security with JWT authentication, password hashing, and SQL injection protection</li>
            <li>Setting up cloud infrastructure on GCP with Kubernetes orchestration</li>
            <li>Implementing CI/CD pipeline with ArgoCD for automated deployments</li>
            <li>Creating responsive UI with complex data visualization using charts and graphs</li>
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
            Developed a full-stack fintech platform with enterprise architecture and cloud-native deployment:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-3">Clean Architecture Backend</h3>
              <p className="text-zinc-400 text-sm">
                Built with .NET 8 using clean architecture patterns, Entity Framework Core, and comprehensive API with Swagger documentation.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-3">Modern React Frontend</h3>
              <p className="text-zinc-400 text-sm">
                TypeScript-based React application with Tailwind CSS, Recharts for visualization, and responsive design across all devices.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-3">Cloud Infrastructure</h3>
              <p className="text-zinc-400 text-sm">
                Deployed on Google Cloud Platform using Kubernetes for orchestration with automated scaling and load balancing.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-3">CI/CD Pipeline</h3>
              <p className="text-zinc-400 text-sm">
                Complete GitOps workflow with ArgoCD for continuous deployment and automated rollback capabilities.
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
                {['.NET 8', 'EF Core', 'PostgreSQL', 'JWT', 'BCrypt', 'Swagger'].map((tech) => (
                  <div key={tech} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                    <span className="text-white/90 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Frontend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Recharts', 'Axios', 'Lucide React'].map((tech) => (
                  <div key={tech} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                    <span className="text-white/90 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">DevOps & Cloud</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['GCP', 'Kubernetes', 'ArgoCD', 'Docker'].map((tech) => (
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
              <h3 className="text-white font-semibold mb-2">Multi-Account Management</h3>
              <p className="text-zinc-400 text-sm">
                Manage savings, credit, investment, loan, and checking accounts with real-time balance tracking
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Transaction Tracking</h3>
              <p className="text-zinc-400 text-sm">
                Record income, expenses, and transfers with automatic categorization and filtering capabilities
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Budget Management</h3>
              <p className="text-zinc-400 text-sm">
                Create and track budgets by category with visual progress indicators and alerts
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Goal Tracking</h3>
              <p className="text-zinc-400 text-sm">
                Set financial goals and monitor progress with deadline tracking and completion status
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Dashboard Analytics</h3>
              <p className="text-zinc-400 text-sm">
                Comprehensive overview with monthly trends, spending categories, cash flow projections, and savings rate
              </p>
            </div>
          </div>
        </motion.section>

        {/* Architecture Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">Architecture Highlights</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Clean Architecture</h3>
              <p className="text-zinc-400 text-sm">
                Organized with Controllers, Models, Data, DTOs, and Services layers following SOLID principles
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Kubernetes Deployment</h3>
              <p className="text-zinc-400 text-sm">
                Container orchestration on GCP with auto-scaling, load balancing, and health checks
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">GitOps with ArgoCD</h3>
              <p className="text-zinc-400 text-sm">
                Declarative continuous deployment with automatic sync and rollback capabilities
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Security Best Practices</h3>
              <p className="text-zinc-400 text-sm">
                JWT authentication, BCrypt password hashing, CORS configuration, and EF Core SQL injection protection
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
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">Enterprise-Grade</div>
              <p className="text-zinc-400 text-sm">Production-ready with clean architecture and best practices</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">Cloud-Native</div>
              <p className="text-zinc-400 text-sm">Deployed on GCP with Kubernetes orchestration</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">Automated CI/CD</div>
              <p className="text-zinc-400 text-sm">Complete GitOps workflow with ArgoCD</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">Comprehensive</div>
              <p className="text-zinc-400 text-sm">Full finance management with analytics and insights</p>
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
              href="https://github.com/yourusername/myfin"
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
