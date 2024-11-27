import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useState } from 'react';

export default function JoinUs() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    roll: '',
    branch: '',
    year: '',
    whyJoin: '',
    skills: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulated form submission logic
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-black pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
                Join Our Tech Community
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Be part of KIIT's most active technical chapter. Learn, grow, and build amazing things with fellow tech enthusiasts.
              </p>
              <div className="flex gap-4 mb-8">
                <a 
                  href="https://github.com/geeksforgeeks-kiit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/company/geeksforgeeks-kiit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:gfg.kiit@gmail.com"
                  className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <img 
                src="/character.png" // Add your character illustration here
                alt="Join Us Illustration"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-center text-white mb-4">Application Form</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Roll Number</label>
                  <input
                    type="text"
                    required
                    value={formState.roll}
                    onChange={(e) => setFormState(prev => ({ ...prev, roll: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Branch</label>
                  <select
                    required
                    value={formState.branch}
                    onChange={(e) => setFormState(prev => ({ ...prev, branch: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  >
                    <option value="">Select Branch</option>
                    <option value="CSE">Computer Science</option>
                    <option value="IT">Information Technology</option>
                    <option value="ECE">Electronics & Communication</option>
                    {/* Add more branches */}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Why do you want to join GFG KIIT?</label>
                <textarea
                  required
                  value={formState.whyJoin}
                  onChange={(e) => setFormState(prev => ({ ...prev, whyJoin: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Technical Skills</label>
                <textarea
                  value={formState.skills}
                  onChange={(e) => setFormState(prev => ({ ...prev, skills: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  placeholder="List your programming languages, frameworks, tools..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-lg font-medium relative overflow-hidden group disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
} 