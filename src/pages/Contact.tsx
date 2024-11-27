import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Instagram, Globe } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/gfg-kiit' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/gfg-kiit' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/gfg_kiit' },
    { icon: Globe, label: 'Website', href: 'https://gfgkiit.in' }
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-400">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                {/* Quick Contact */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <div className="space-y-4">
                    <a 
                      href="mailto:contact@gfgkiit.in"
                      className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/10
                        hover:border-white/20 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-green-500/10 text-green-400 
                        group-hover:bg-green-500 group-hover:text-white transition-all">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email us at</p>
                        <p className="text-lg">contact@gfgkiit.in</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/10">
                      <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Find us at</p>
                        <p className="text-lg">KIIT University, Bhubaneswar</p>
                      </div>
                    </div>

                    <a 
                      href="tel:+919876543210"
                      className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/10
                        hover:border-white/20 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-green-500/10 text-green-400
                        group-hover:bg-green-500 group-hover:text-white transition-all">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Call us at</p>
                        <p className="text-lg">+91 98765 43210</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Follow Us</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-white/10
                            hover:border-white/20 hover:bg-zinc-900 transition-all group"
                        >
                          <Icon className="h-5 w-5 text-green-400 group-hover:text-green-500 transition-colors" />
                          <span>{link.label}</span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Map */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Location</h2>
                  <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent blur-xl" />
                  <div className="relative p-8 rounded-2xl bg-zinc-900/50 border border-white/10">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                    
                    {!submitted ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 
                                focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                              required
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 
                                focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                              required
                            />
                          </div>

                          <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                              Subject
                            </label>
                            <input
                              type="text"
                              id="subject"
                              value={formState.subject}
                              onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 
                                focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                              required
                            />
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                              Message
                            </label>
                            <textarea
                              id="message"
                              rows={4}
                              value={formState.message}
                              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 
                                focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                              required
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 
                            flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="h-5 w-5" />
                            </>
                          )}
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Send className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-gray-400">
                          Thank you for reaching out. We'll get back to you soon.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 