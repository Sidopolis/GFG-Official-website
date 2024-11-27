import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Search, Plus, Minus, MessageCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

interface FAQCategory {
  id: string;
  name: string;
  icon: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const categories: FAQCategory[] = [
    { id: 'all', name: 'All Questions', icon: '🎯' },
    { id: 'general', name: 'General', icon: '📌' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'membership', name: 'Membership', icon: '👥' },
    { id: 'technical', name: 'Technical', icon: '💻' },
    { id: 'projects', name: 'Projects', icon: '🚀' }
  ];

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How can I join GFG KIIT?",
      answer: "You can join GFG KIIT by filling out the membership form on our website. We open applications at the beginning of each semester. Follow our social media channels for announcements.",
      category: "membership"
    },
    {
      id: 2,
      question: "What events do you organize?",
      answer: "We organize various technical events including workshops, hackathons, coding contests, and tech talks. Our events are designed to enhance both technical and soft skills.",
      category: "events"
    },
    // Add more FAQ items...
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400">
              Find answers to common questions about GFG KIIT Chapter
            </p>
          </motion.div>

          {/* Search and Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-zinc-900/50 border border-white/10 
                  focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-zinc-900/50 text-gray-400 hover:bg-zinc-800'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <AnimatePresence mode="wait">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative group"
                  >
                    <button
                      onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                      className="w-full p-6 rounded-xl bg-zinc-900/50 border border-white/10 
                        hover:border-white/20 transition-all text-left"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg font-medium pr-8">{item.question}</h3>
                        <div className={`transition-transform duration-300 ${
                          openItem === item.id ? 'rotate-45' : ''
                        }`}>
                          {openItem === item.id ? (
                            <Minus className="h-5 w-5 text-green-400" />
                          ) : (
                            <Plus className="h-5 w-5 text-green-400" />
                          )}
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {openItem === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 text-gray-400 border-t border-white/10 pt-4">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">No questions found matching your criteria.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto mt-16 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-400 mb-6">
              Can't find the answer you're looking for? Feel free to reach out to our team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 
                hover:bg-green-700 transition-colors"
            >
              Contact Us
              <MessageCircle className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
} 