import { Trophy, Award, Star, Medal, Calendar, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  year: string;
  description: string;
  image: string;
  category: 'Competition' | 'Recognition' | 'Project' | 'Community';
  location?: string;
  team?: string[];
  link?: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      title: "Best Student Chapter",
      year: "2023",
      description: "Recognized as the best GeeksForGeeks student chapter in the Eastern region for outstanding technical contributions and community impact.",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=2940",
      category: "Recognition",
      location: "National Level"
    },
    {
      title: "Smart India Hackathon Winners",
      year: "2023",
      description: "First place in SIH 2023 for developing an innovative solution for healthcare accessibility.",
      image: "https://images.unsplash.com/photo-1496469888073-80de7e952517?auto=format&fit=crop&q=80&w=2940",
      category: "Competition",
      location: "New Delhi",
      team: ["John Doe", "Jane Smith", "Mike Johnson"]
    },
    {
      title: "1000+ Community Members",
      year: "2023",
      description: "Achieved milestone of building a vibrant community of over 1000 tech enthusiasts.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2940",
      category: "Community"
    },
    {
      title: "Best Technical Event",
      year: "2023",
      description: "KIIT TechFest awarded our chapter for organizing the most impactful technical workshop series.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2940",
      category: "Recognition",
      location: "KIIT University"
    }
  ];

  const categories = ['All', 'Competition', 'Recognition', 'Project', 'Community'];

  const getCategoryIcon = (category: Achievement['category']) => {
    switch (category) {
      case 'Competition': return Trophy;
      case 'Recognition': return Award;
      case 'Project': return Star;
      case 'Community': return Medal;
      default: return Trophy;
    }
  };

  // Add a future goals section
  const futureGoals = [
    "Increase membership to 1000+ members",
    "Host more than 100 events in a year",
    "Launch new projects in emerging technologies",
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              Our Achievements
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Celebrating our milestones and recognitions in fostering technical excellence and community growth.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                  ${index === 0 ? 
                    'bg-green-600 text-white' : 
                    'bg-zinc-800/50 text-gray-400 hover:bg-green-600/20 hover:text-green-400'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Achievements Timeline */}
          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = getCategoryIcon(achievement.category);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative pl-8 pb-12 border-l-2 border-zinc-800 
                    ${index === achievements.length - 1 ? 'border-l-0' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] p-2 bg-black rounded-full border-2 border-green-400">
                    <Icon className="h-4 w-4 text-green-400" />
                  </div>

                  {/* Achievement Card */}
                  <div className="ml-8">
                    <div className="bg-zinc-900/50 rounded-xl overflow-hidden hover:bg-zinc-900 transition-colors">
                      {/* Image */}
                      <div className="relative h-48 md:h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
                        <img 
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 z-20">
                          <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                            {achievement.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {achievement.year}
                          </div>
                          {achievement.location && (
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {achievement.location}
                            </div>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          {achievement.description}
                        </p>

                        {achievement.team && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Team Members:</h4>
                            <div className="flex flex-wrap gap-2">
                              {achievement.team.map((member, i) => (
                                <span 
                                  key={i}
                                  className="px-3 py-1 bg-zinc-800 text-green-400 rounded-full text-sm"
                                >
                                  {member}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {achievement.link && (
                          <a 
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-green-400 hover:text-green-500 transition-colors"
                          >
                            Learn More →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 bg-zinc-900/50 rounded-2xl p-8"
          >
            {[
              { icon: Trophy, value: "15+", label: "Awards Won" },
              { icon: Star, value: "50+", label: "Projects Completed" },
              { icon: Medal, value: "1000+", label: "Community Members" },
              { icon: Award, value: "20+", label: "Events Organized" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 text-green-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>

          {/* Future Goals Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">Future Goals</h2>
            <ul className="list-disc list-inside space-y-2">
              {futureGoals.map((goal, index) => (
                <li key={index} className="text-gray-400">{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}