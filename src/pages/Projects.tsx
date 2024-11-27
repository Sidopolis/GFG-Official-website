import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Search, Github, ExternalLink, Star, GitFork, Users, Filter } from 'lucide-react';
import PageTransition from '../components/PageTransition';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'ai' | 'blockchain' | 'iot';

interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'all'>;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
  stars: number;
  forks: number;
  contributors: number;
  featured: boolean;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories: { value: ProjectCategory; label: string; icon: string }[] = [
    { value: 'all', label: 'All Projects', icon: '🎯' },
    { value: 'web', label: 'Web Apps', icon: '🌐' },
    { value: 'mobile', label: 'Mobile Apps', icon: '📱' },
    { value: 'ai', label: 'AI/ML', icon: '🤖' },
    { value: 'blockchain', label: 'Blockchain', icon: '⛓️' },
    { value: 'iot', label: 'IoT', icon: '🔌' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "GFG Learning Platform",
      description: "An interactive learning platform for coding practice and tutorials.",
      category: "web",
      image: "https://your-image-url.com/project1.jpg",
      tech: ["React", "Node.js", "MongoDB", "TypeScript"],
      github: "https://github.com/gfg-kiit/learning-platform",
      demo: "https://learn.gfgkiit.in",
      stars: 120,
      forks: 45,
      contributors: 12,
      featured: true
    },
    // Add more projects...
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Add a featured projects section
  const featuredProjects = [
    {
      title: "GFG Learning Platform",
      description: "An interactive platform for coding practice.",
      link: "https://github.com/gfg-kiit/learning-platform",
    },
    // Add more featured projects...
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header with Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            {projects.filter(p => p.featured)[0] && (
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={projects.filter(p => p.featured)[0].image}
                    alt="Featured Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>
                
                <div className="relative p-8 md:p-12">
                  <span className="inline-block px-4 py-1 rounded-full bg-green-500/20 text-green-400 
                    backdrop-blur-sm text-sm font-medium mb-4">
                    Featured Project
                  </span>
                  
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {projects.filter(p => p.featured)[0].title}
                  </h1>
                  
                  <p className="text-xl text-gray-300 max-w-2xl mb-6">
                    {projects.filter(p => p.featured)[0].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects.filter(p => p.featured)[0].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-white/10 text-sm backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={projects.filter(p => p.featured)[0].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 
                        backdrop-blur-sm transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      View Source
                    </a>
                    {projects.filter(p => p.featured)[0].demo && (
                      <a
                        href={projects.filter(p => p.featured)[0].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 
                          transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 
                    focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>

              {/* Category Filters */}
              <div className="hidden md:flex items-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.value
                        ? 'bg-green-600 text-white'
                        : 'bg-zinc-900/50 text-gray-400 hover:bg-zinc-800'
                    }`}
                  >
                    <span>{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10
                  flex items-center justify-center gap-2"
              >
                <Filter className="h-5 w-5" />
                Filters
              </button>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden overflow-hidden mt-4"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedCategory === category.value
                            ? 'bg-green-600 text-white'
                            : 'bg-zinc-900/50 text-gray-400 hover:bg-zinc-800'
                        }`}
                      >
                        <span>{category.icon}</span>
                        {category.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.filter(p => !p.featured).map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative overflow-hidden rounded-xl bg-zinc-900/50 border border-white/10
                    hover:border-white/20 transition-all duration-300">
                    {/* Project Image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 rounded-full bg-white/5 text-xs text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            {project.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="h-4 w-4" />
                            {project.forks}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {project.contributors}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 
                            flex items-center justify-center gap-2 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Source
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2 rounded-lg bg-green-600 hover:bg-green-700 
                              flex items-center justify-center gap-2 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
            </motion.div>
          )}

          {/* Featured Projects */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">Featured Projects</h2>
            <div className="space-y-4">
              {featuredProjects.map((project, index) => (
                <div key={index} className="p-4 bg-zinc-900 rounded-lg shadow-lg">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <a href={project.link} className="text-green-400 hover:underline">View Project</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}