import { motion } from 'framer-motion';
import { Code2, Users, Trophy, Target, BookOpen, Rocket } from 'lucide-react';
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

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Journey</h2>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-green-500/20" />
                  
                  {/* Timeline Items */}
                  {[
                    { year: "2019", title: "Chapter Founded", description: "Started with 50 members" },
                    { year: "2020", title: "Virtual Transition", description: "Adapted to online learning" },
                    { year: "2021", title: "Community Growth", description: "Reached 300+ members" },
                    { year: "2022", title: "Major Events", description: "Hosted KIIT's largest hackathon" },
                    { year: "2023", title: "Innovation Hub", description: "Launched research initiatives" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className={`relative flex items-center justify-center mb-12 ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}
                    >
                      <div className="w-full md:w-[calc(50%-2rem)] p-6 rounded-xl bg-zinc-900/50 border border-white/10
                        hover:border-white/20 transition-colors relative group">
                        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-500
                          ${index % 2 === 0 ? 'md:-right-8' : 'md:-left-8'}" />
                        <span className="text-green-400 font-bold mb-2 block">{item.year}</span>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
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