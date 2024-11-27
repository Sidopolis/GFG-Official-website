import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote?: string;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export default function Team() {
  const teamMembers = {
    leadership: [
      {
        name: "John Doe",
        role: "Chapter Lead",
        image: "/team/lead.jpg",
        quote: "Building the future of tech, one line of code at a time",
        socials: {
          github: "https://github.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
          twitter: "https://twitter.com/johndoe",
          email: "mailto:john@example.com"
        }
      },
      // Add more leadership members
    ] as TeamMember[],
    coreteam: [
      // Core team members
    ] as TeamMember[]
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[#0a0f0a] z-10" />
        <div className="absolute inset-0 grid-pattern z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(4,24,12,0.9)] to-[#0a0f0a] z-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.06),transparent_70%)] z-30" />
      </div>

      {/* Content */}
      <div className="relative z-40 pt-24 pb-20">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
              <div className="relative bg-black/30 backdrop-blur-sm px-8 py-3 rounded-full border border-green-500/20">
                <span className="text-green-400 font-medium">Meet the Innovators</span>
              </div>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate minds driving innovation and excellence at GFG KIIT
          </p>
        </motion.div>

        {/* Leadership Section */}
        <section className="mb-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.leadership.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="relative h-full rounded-2xl bg-black/20 backdrop-blur-md
                    border border-white/5 overflow-hidden transition-all duration-500
                    hover:border-green-500/30 hover:shadow-[0_0_30px_-12px] hover:shadow-green-500/20"
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-green-500/10 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-500 z-20" />
                    </div>

                    {/* Content */}
                    <div className="relative p-6">
                      {/* Role Badge */}
                      <div className="absolute -top-12 right-6 z-20">
                        <div className="bg-green-500/90 backdrop-blur-sm px-4 py-1 rounded-full">
                          <span className="text-black text-sm font-medium">{member.role}</span>
                        </div>
                      </div>

                      {/* Name and Quote */}
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 
                        transition-colors duration-300"
                      >
                        {member.name}
                      </h3>
                      <p className="text-gray-400 mb-6 italic">"{member.quote}"</p>

                      {/* Social Links */}
                      <div className="flex gap-4">
                        {member.socials && Object.entries(member.socials).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-400 transform hover:-translate-y-1 
                              hover:scale-110 transition-all duration-300"
                          >
                            {platform === 'github' && <Github className="w-5 h-5" />}
                            {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                            {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                            {platform === 'email' && <Mail className="w-5 h-5" />}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Team Grid */}
        <section className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Core Team
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.coreteam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm
                  border border-white/5 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="aspect-square">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 
                        transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-400 
                      transition-colors duration-300"
                    >
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}