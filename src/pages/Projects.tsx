import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Code, Users, Star, GitFork, Rocket } from 'lucide-react';
import { useState, useRef } from 'react';
import ProjectTimeline from '../components/ProjectTimeline';
import TechStackOverview from '../components/TechStackOverview';
import ContributionStats from '../components/ContributionStats';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const containerRef = useRef(null);

  const projects = {
    featured: [
      {
        title: "AI Code Assistant",
        description: "An intelligent coding assistant powered by machine learning",
        tech: ["Python", "TensorFlow", "React"],
        image: "/projects/ai-assistant.jpg",
        github: "https://github.com/...",
        live: "https://demo...",
        category: "AI/ML",
        stats: {
          stars: 120,
          forks: 45,
          contributors: 8
        }
      }
    ]
  };

  return (
    <div className="relative min-h-screen" ref={containerRef}>
      {/* Modern Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[#0a0f0a] z-10" />
        <div className="absolute inset-0 grid-pattern z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(4,24,12,0.9)] to-[#0a0f0a] z-30" />
      </div>

      <div className="relative z-40 pt-24 pb-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
              <div className="relative bg-black/30 backdrop-blur-sm px-8 py-3 rounded-full border border-green-500/20">
                <span className="text-green-400 font-medium">Explore Our Work</span>
              </div>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover our innovative solutions and technical achievements
          </p>
        </motion.section>

        {/* Project Categories */}
        <section className="container mx-auto px-6 mb-16">
          <div className="flex justify-center gap-4 flex-wrap">
            {['all', 'web', 'mobile', 'AI/ML', 'blockchain'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-green-500 text-black'
                    : 'bg-black/20 text-gray-400 hover:bg-black/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-6 mb-32">
          <h2 className="text-3xl font-bold mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.featured.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative rounded-2xl bg-black/20 backdrop-blur-md
                  border border-white/5 overflow-hidden transition-all duration-500
                  hover:border-green-500/30 hover:shadow-[0_0_30px_-12px] hover:shadow-green-500/20"
                >
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 
                      transition-colors duration-300"
                    >
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-6">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-sm
                          bg-green-500/10 text-green-400 border border-green-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Stats */}
                    <div className="flex items-center gap-6 mb-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GitFork className="w-4 h-4" />
                        <span>{project.stats.forks}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{project.stats.contributors}</span>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg
                          bg-black/30 text-white hover:bg-black/50 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg
                          bg-green-500 text-black hover:bg-green-600 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Project Timeline */}
        <section className="container mx-auto px-6 mb-32">
          <ProjectTimeline projects={projects} />
        </section>

        {/* Tech Stack Overview */}
        <section className="container mx-auto px-6 mb-32">
          <TechStackOverview />
        </section>

        {/* Contribution Stats */}
        <section className="container mx-auto px-6">
          <ContributionStats />
        </section>
      </div>
    </div>
  );
}