import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Star, Award, Target, Rocket, Users, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Achievements() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  const achievements = {
    technical: [
      {
        title: "Best Technical Chapter",
        year: "2023",
        description: "Recognized as the most active and innovative technical chapter",
        icon: Trophy,
        stats: "500+ participants",
        image: "/achievements/tech.jpg",
        category: "technical",
      },
      // Add more achievements
    ],
    community: [
      // Community achievements
    ],
    innovation: [
      // Innovation achievements
    ]
  };

  return (
    <div className="relative min-h-screen" ref={containerRef}>
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[#0a0f0a] z-10" />
        <div className="absolute inset-0 grid-pattern z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(4,24,12,0.9)] to-[#0a0f0a] z-30" />
        
        {/* Dynamic Particle Effect */}
        <motion.div 
          className="absolute inset-0 z-20"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
        >
          <ParticleEffect />
        </motion.div>
      </div>

      <div className="relative z-40 pt-24 pb-20">
        {/* Hero Section with 3D Trophy */}
        <div className="relative h-[60vh] flex items-center justify-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="relative mb-8">
              <Model3DTrophy />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r 
              from-white via-green-200 to-white bg-clip-text text-transparent"
            >
              Our Achievements
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Celebrating excellence and innovation in technology
            </p>
          </motion.div>
        </div>

        {/* Achievement Categories */}
        <section className="container mx-auto px-6 mb-16">
          <div className="flex justify-center gap-4 flex-wrap">
            {['all', 'technical', 'community', 'innovation'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-black'
                    : 'bg-black/20 text-gray-400 hover:bg-black/30'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* Achievement Cards with Parallax */}
        <section className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(achievements).flat()
              .filter(achievement => selectedCategory === 'all' || achievement.category === selectedCategory)
              .map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative rounded-2xl bg-black/20 backdrop-blur-md
                    border border-white/5 overflow-hidden transition-all duration-500
                    hover:border-green-500/30 hover:shadow-[0_0_30px_-12px] hover:shadow-green-500/20"
                  >
                    {/* Achievement Image with Parallax */}
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <motion.div
                        style={{
                          y: useTransform(scrollYProgress, [0, 1], [0, -50])
                        }}
                        className="absolute inset-0"
                      >
                        <img 
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                      
                      {/* Year Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-green-500/90 backdrop-blur-sm px-4 py-1 rounded-full">
                          <span className="text-black text-sm font-medium">{achievement.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <achievement.icon className="w-6 h-6 text-green-400" />
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 
                          transition-colors duration-300"
                        >
                          {achievement.title}
                        </h3>
                      </div>

                      <p className="text-gray-400 mb-4">{achievement.description}</p>

                      {/* Stats with Animation */}
                      <div className="flex items-center gap-2 text-green-400">
                        <Users className="w-4 h-4" />
                        <CountUpAnimation value={achievement.stats} />
                      </div>
                    </div>

                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Achievement Timeline */}
        <section className="container mx-auto px-6 mt-32">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Journey of Excellence</h2>
          <TimelineComponent achievements={achievements} />
        </section>

        {/* Stats Overview */}
        <section className="container mx-auto px-6 mt-32">
          <StatsOverview />
        </section>
      </div>
    </div>
  );
}

// Innovative Components

const ParticleEffect = () => {
  // Implementation of floating particles that react to scroll
  return <div className="particle-container">
    {/* Particle implementation */}
  </div>
};

const Model3DTrophy = () => {
  // 3D Trophy model implementation using Three.js or similar
  return <div className="trophy-3d">
    {/* 3D model implementation */}
  </div>
};

const CountUpAnimation = ({ value }: { value: string }) => {
  // Number animation implementation
  return <span>{value}</span>
};

const TimelineComponent = ({ achievements }: { achievements: any }) => {
  // Interactive timeline implementation
  return <div className="timeline">
    {/* Timeline implementation */}
  </div>
};

const StatsOverview = () => {
  // Animated statistics overview
  return <div className="stats-grid">
    {/* Stats implementation */}
  </div>
};