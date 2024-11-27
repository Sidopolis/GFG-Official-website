import { motion } from 'framer-motion';
import { Code2, Users, Trophy, Target, BookOpen, Rocket, Milestone, ArrowRight, Award, Code } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function About() {
  const features = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Fostering coding skills through workshops, contests, and hands-on projects."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating a supportive network of tech enthusiasts and learners."
    },
    {
      icon: Trophy,
      title: "Competitive Spirit",
      description: "Regular coding competitions and hackathons to challenge skills."
    },
    {
      icon: Target,
      title: "Industry Focus",
      description: "Preparing students for technical interviews and industry demands."
    },
    {
      icon: BookOpen,
      title: "Knowledge Sharing",
      description: "Peer learning sessions and expert talks on latest technologies."
    },
    {
      icon: Rocket,
      title: "Innovation Hub",
      description: "Platform for students to ideate and build innovative solutions."
    }
  ];

  const testimonials = [
    {
      name: "Alice",
      feedback: "GFG KIIT has transformed my coding skills!",
    },
    {
      name: "Bob",
      feedback: "The community is incredibly supportive and engaging.",
    },
    // Add more testimonials...
  ];

  const journeyMilestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Started with a small group of passionate tech enthusiasts at KIIT",
      icon: Users,
      stats: "20+ founding members"
    },
    {
      year: "2020",
      title: "Community Growth",
      description: "Expanded our reach and conducted our first virtual events",
      icon: Award,
      stats: "100+ members joined"
    },
    {
      year: "2021",
      title: "Major Achievements",
      description: "Recognized as one of the most active technical chapters",
      icon: Trophy,
      stats: "30+ events conducted"
    },
    {
      year: "2022-23",
      title: "Innovation Hub",
      description: "Launched multiple successful projects and initiatives",
      icon: Code,
      stats: "500+ active participants"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black pt-24 pb-12">
        {/* Hero Section */}
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
              <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-green-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            </div>

            {/* Content */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto mb-20"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
                  About GFG KIIT
                </h1>
                <p className="text-xl text-gray-400">
                  Empowering students with technical knowledge and practical skills since 2019. 
                  We are KIIT's largest technical community.
                </p>
              </motion.div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden p-8 mb-20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
                <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Mission</h2>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                      { title: "Learn", description: "Continuous learning through structured programs" },
                      { title: "Build", description: "Creating impactful projects and solutions" },
                      { title: "Grow", description: "Personal and professional development" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="p-6 rounded-xl bg-white/5 backdrop-blur-sm"
                      >
                        <h3 className="text-xl font-bold text-green-400 mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-20">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative p-6 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-colors">
                        <Icon className="h-8 w-8 text-green-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Journey Section Header */}
              <div className="text-center mb-16">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold mb-4"
                >
                  Our Journey
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 max-w-2xl mx-auto"
                >
                  From a small group of enthusiasts to KIIT's largest technical community
                </motion.p>
              </div>

              {/* Timeline */}
              <div className="max-w-6xl mx-auto px-6">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-green-500/50 to-transparent" />

                  {/* Milestones */}
                  {journeyMilestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className={`relative flex items-center gap-8 mb-16 ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      {/* Content Card */}
                      <div className="w-1/2 group">
                        <div className="relative p-6 rounded-2xl bg-black/30 backdrop-blur-sm
                          border border-white/10 hover:border-green-500/30
                          transition-all duration-300 hover:shadow-[0_0_30px_-12px] hover:shadow-green-500/20"
                        >
                          {/* Year Badge */}
                          <div className="absolute -top-3 bg-green-500 text-black px-4 py-1 
                            rounded-full text-sm font-semibold"
                          >
                            {milestone.year}
                          </div>

                          {/* Content */}
                          <div className="pt-4">
                            <milestone.icon className="h-6 w-6 text-green-400 mb-3" />
                            <h3 className="text-xl font-bold mb-2 text-white">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-400 mb-4">
                              {milestone.description}
                            </p>
                            <div className="text-green-400 font-medium">
                              {milestone.stats}
                            </div>
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/5
                            opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"
                          />
                        </div>
                      </div>

                      {/* Timeline Node */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 
                        bg-green-500 rounded-full border-4 border-black"
                      >
                        <div className="absolute inset-0 animate-ping 
                          bg-green-500 rounded-full opacity-20"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Current Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-20"
              >
                <div className="inline-block p-6 rounded-2xl bg-black/30 backdrop-blur-sm
                  border border-white/10 hover:border-green-500/30
                  transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-2">Where We Are Today</h3>
                  <p className="text-gray-400">
                    Leading KIIT's technical ecosystem with 1000+ active members and growing
                  </p>
                </div>
              </motion.div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-center mb-6">What Our Members Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-6 bg-zinc-900 rounded-lg shadow-lg">
                      <p className="text-gray-400 italic">"{testimonial.feedback}"</p>
                      <p className="mt-4 font-bold">{testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}