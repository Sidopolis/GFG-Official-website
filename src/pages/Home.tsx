import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Users, Calendar, Trophy, ArrowDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full 
            bg-[radial-gradient(ellipse_at_top,rgba(74,222,128,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,black)]" />
          
          {/* Animated Blobs */}
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-green-500/10 rounded-full 
            mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-1/4 -right-48 w-96 h-96 bg-green-400/10 rounded-full 
            mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-48 left-1/3 w-96 h-96 bg-emerald-400/10 rounded-full 
            mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center pt-20 pb-12">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                {/* Logo and Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-12"
                >
                  <div className="inline-block p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
                    shadow-[0_0_50px_-12px] shadow-green-500/20 mb-6">
                    <div className="flex items-center gap-6">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl 
                          group-hover:bg-green-500/30 transition-all duration-300" />
                        <img 
                          src="/gfg-logo.png"
                          alt="GeeksForGeeks Logo"
                          className="h-16 w-16 relative z-10"
                        />
                      </div>
                      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 
                          text-transparent bg-clip-text animate-gradient">
                          GeeksForGeeks
                        </span>
                      </h1>
                    </div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-medium text-gray-300 mb-8"
                  >
                    KIIT Student Chapter
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                  >
                    Join the largest technical community at KIIT University. 
                    Learn, build, and grow together.
                  </motion.p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                  <Link
                    to="/about"
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center
                      px-8 py-4 rounded-xl bg-gradient-to-br from-green-600 to-green-500 text-white 
                      font-medium hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] 
                      -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/projects"
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center
                      px-8 py-4 rounded-xl bg-zinc-900/80 text-white font-medium border border-white/10
                      hover:bg-zinc-900 hover:border-white/20 transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] 
                      -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
                >
                  {[
                    { icon: Users, value: "500+", label: "Active Members" },
                    { icon: Calendar, value: "50+", label: "Events" },
                    { icon: Trophy, value: "30+", label: "Projects" },
                    { icon: Users, value: "1000+", label: "Students Impacted" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                      <div className="relative p-6 rounded-xl bg-zinc-900/50 border border-white/10
                        hover:border-white/20 transition-all duration-300">
                        <stat.icon className="h-6 w-6 text-green-400 mb-3 mx-auto" />
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                  <p className="text-sm text-gray-400">Scroll to explore</p>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown className="h-5 w-5 text-green-400" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Featured Section */}
          <section className="py-20 bg-zinc-950/50">
            <div className="container mx-auto px-6">
              {/* Add more content sections here */}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}