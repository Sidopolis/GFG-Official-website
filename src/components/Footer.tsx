import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-40 bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/gfg-logo.png" alt="GFG Logo" className="h-8 w-8" />
              <h3 className="text-xl font-bold">GeeksForGeeks</h3>
            </div>
            <p className="text-gray-400">
              Student Chapter at KIIT University. Building a community of tech enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get updates on latest events and activities.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                  focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 
                  transition-colors flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2024 GFG KIIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}