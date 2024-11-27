import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Search, Github, Linkedin, Mail, Filter, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';

type MemberRole = 'all' | 'lead' | 'tech' | 'design' | 'content' | 'management';

interface TeamMember {
  id: number;
  name: string;
  role: Exclude<MemberRole, 'all'>;
  image: string;
  position: string;
  bio: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    portfolio?: string;
  };
  isLead: boolean;
}

export default function Team() {
  const [selectedRole, setSelectedRole] = useState<MemberRole>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const roles: { value: MemberRole; label: string; icon: string }[] = [
    { value: 'all', label: 'All Members', icon: '👥' },
    { value: 'lead', label: 'Leadership', icon: '👑' },
    { value: 'tech', label: 'Technical', icon: '💻' },
    { value: 'design', label: 'Design', icon: '🎨' },
    { value: 'content', label: 'Content', icon: '✍️' },
    { value: 'management', label: 'Management', icon: '📊' }
  ];

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Doe",
      role: "lead",
      image: "https://your-image-url.com/member1.jpg",
      position: "Chapter Lead",
      bio: "Leading the technical initiatives and community growth.",
      skills: ["Leadership", "Full Stack", "Cloud", "DevOps"],
      social: {
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        email: "john@gfgkiit.in",
        portfolio: "https://johndoe.dev"
      },
      isLead: true
    },
    // Add more team members...
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesRole = selectedRole === 'all' || member.role === selectedRole;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.position.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const leaders = teamMembers.filter(member => member.isLead);

  const teamAchievements = [
    {
      title: "Best Team Award 2023",
      description: "Recognized for outstanding contributions to the community.",
    },
    // Add more achievements...
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-400">
              The passionate individuals driving innovation and learning at GFG KIIT.
            </p>
          </motion.div>

          {/* Leadership Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative overflow-hidden rounded-xl bg-zinc-900/50 border border-white/10
                    hover:border-white/20 transition-all duration-300 p-6">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full">
                          {roles.find(r => r.value === leader.role)?.icon}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                        <p className="text-green-400 mb-2">{leader.position}</p>
                        <div className="flex gap-2">
                          {leader.social.github && (
                            <a
                              href={leader.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          {leader.social.linkedin && (
                            <a
                              href={leader.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          )}
                          {leader.social.portfolio && (
                            <a
                              href={leader.social.portfolio}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mt-4 mb-4">{leader.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {leader.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-white/5 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search team members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 
                    focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>

              <div className="hidden md:flex items-center gap-2">
                {roles.map((role) => (
                  <button
                    key={role.value}
                    onClick={() => setSelectedRole(role.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedRole === role.value
                        ? 'bg-green-600 text-white'
                        : 'bg-zinc-900/50 text-gray-400 hover:bg-zinc-800'
                    }`}
                  >
                    <span>{role.icon}</span>
                    {role.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10
                  flex items-center justify-center gap-2"
              >
                <Filter className="h-5 w-5" />
                Filters
              </button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden overflow-hidden mt-4"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {roles.map((role) => (
                      <button
                        key={role.value}
                        onClick={() => setSelectedRole(role.value)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedRole === role.value
                            ? 'bg-green-600 text-white'
                            : 'bg-zinc-900/50 text-gray-400 hover:bg-zinc-800'
                        }`}
                      >
                        <span>{role.icon}</span>
                        {role.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Team Members Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredMembers.filter(member => !member.isLead).map((member) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative overflow-hidden rounded-xl bg-zinc-900/50 border border-white/10
                    hover:border-white/20 transition-all duration-300 p-6">
                    <div className="text-center mb-4">
                      <div className="relative inline-block">
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full">
                          {roles.find(r => r.value === member.role)?.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                      <p className="text-green-400 text-sm mb-2">{member.position}</p>
                    </div>

                    <div className="flex justify-center gap-2 mb-4">
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.portfolio && (
                        <a
                          href={member.social.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded-full bg-white/5 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredMembers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No team members found matching your criteria.</p>
            </motion.div>
          )}

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">Team Achievements</h2>
            <div className="space-y-4">
              {teamAchievements.map((achievement, index) => (
                <div key={index} className="p-4 bg-zinc-900 rounded-lg shadow-lg">
                  <h3 className="font-bold">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}