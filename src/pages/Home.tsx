import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Users, Calendar, Trophy, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden">
        {/* Modern Futuristic Background */}
        <div className="fixed inset-0">
          {/* Dark base with slight green tint */}
          <div className="absolute inset-0 bg-[#0a0f0a] z-10" />
          
          {/* Futuristic grid */}
          <div className="absolute inset-0 grid-pattern z-20" />
          
          {/* Modern gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b 
            from-transparent 
            via-[rgba(4,24,12,0.9)] 
            to-[#0a0f0a] 
            z-30" 
          />
          
          {/* Subtle tech glow */}
          <div className="absolute inset-0 
            bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.06),transparent_70%)] 
            z-30" 
          />
          
          {/* Additional ambient lighting */}
          <div className="absolute inset-0 
            bg-[conic-gradient(from_0deg_at_50%_50%,rgba(16,185,129,0.03)_0deg,transparent_60deg,transparent_300deg,rgba(16,185,129,0.03)_360deg)] 
            z-20" 
          />
        </div>

        {/* Main Content */}
        <div className="relative z-40">
          <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-12">
            <div className="container mx-auto px-6 text-center">
              {/* Logo and Title */}
              <div className="mb-16">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <img 
                    src="/gfg-logo.png"
                    alt="GeeksForGeeks Logo"
                    className="h-16 w-16"
                  />
                  <h1 className="text-5xl md:text-6xl font-bold text-[#00ff80]">
                    GeeksForGeeks
                  </h1>
                </div>
                
                <h2 className="text-3xl font-medium text-gray-200 mb-6">
                  KIIT Student Chapter
                </h2>
                
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Join the largest technical community at KIIT University. 
                  Learn, build, and grow together.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-6 mb-24">
                <Link
                  to="/join"
                  className="px-8 py-4 rounded-xl bg-[#00cc44] hover:bg-[#00b33c] 
                    text-white font-medium transition-all duration-300"
                >
                  Get Started
                </Link>

                <Link
                  to="/projects"
                  className="px-8 py-4 rounded-xl bg-black/20 backdrop-blur-sm 
                    text-white font-medium border border-[#00ff8033] hover:border-[#00ff8066]
                    transition-all duration-300"
                >
                  View Projects
                </Link>
              </div>

              {/* Stats Grid - Now below the buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { icon: Users, value: "500+", label: "Active Members" },
                  { icon: Calendar, value: "50+", label: "Events" },
                  { icon: Trophy, value: "30+", label: "Projects" },
                  { icon: Users, value: "1000+", label: "Students Impacted" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="stats-card p-6 rounded-xl bg-[#00330011] backdrop-blur-sm
                      border border-[#00ff8033] hover:border-[#00ff8066]
                      transition-all duration-300"
                  >
                    <stat.icon className="text-[#00ff80] h-8 w-8 mb-4 opacity-80 mx-auto" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-[#a3a3a3]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicator */}
              <div className="mt-24 text-gray-400">
                <p className="text-sm mb-2">Scroll to explore</p>
                <ArrowDown className="h-5 w-5 mx-auto text-[#00ff80] animate-bounce" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}