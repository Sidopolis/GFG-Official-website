import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Projects', href: '/projects' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Team', href: '/team' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/gfg-logo.png" 
              alt="GFG KIIT Logo" 
              className="h-10 w-10"
            />
            <span className="font-bold text-xl">GFG KIIT</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative group ${
                  location.pathname === item.href 
                    ? 'text-green-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-green-500/10 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <Link
            to="/join-us"
            className="hidden md:block px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 
              transition-colors text-sm font-medium"
          >
            Join Us
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-black/80 backdrop-blur-lg"
      >
        <div className="container mx-auto px-6 py-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.href 
                  ? 'bg-green-500/10 text-green-400' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/join-us"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 
              transition-colors text-sm font-medium text-center"
          >
            Join Us
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}