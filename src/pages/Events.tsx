import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Search, Calendar, Users, MapPin, ChevronRight, Filter } from 'lucide-react';
import PageTransition from '../components/PageTransition';

type EventType = 'all' | 'workshop' | 'hackathon' | 'contest' | 'seminar';

interface Event {
  id: number;
  title: string;
  type: Exclude<EventType, 'all'>;
  date: string;
  image: string;
  venue: string;
  attendees: number;
  description: string;
  registrationOpen: boolean;
}

export default function Events() {
  const [selectedType, setSelectedType] = useState<EventType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const events: Event[] = [
    {
      id: 1,
      title: "Code Sprint 2024",
      type: "hackathon",
      date: "March 25, 2024",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      venue: "Campus Innovation Hub",
      attendees: 200,
      description: "48-hour hackathon focused on building innovative solutions.",
      registrationOpen: true
    },
    // Add more events...
  ];

  const eventTypes: { value: EventType; label: string }[] = [
    { value: 'all', label: 'All Events' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'hackathon', label: 'Hackathons' },
    { value: 'contest', label: 'Contests' },
    { value: 'seminar', label: 'Seminars' }
  ];

  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  // Add a past events section
  const pastEvents = [
    {
      title: "Hackathon 2023",
      date: "January 15, 2023",
      highlights: "Over 100 participants, 20 projects submitted.",
    },
    // Add more past events...
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="relative mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
                Upcoming Events
              </h1>
              <p className="text-xl text-gray-400">
                Join us for workshops, hackathons, and tech talks to enhance your skills.
              </p>
            </motion.div>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 
                    focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>

              {/* Filter Button (Mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10
                  flex items-center justify-center gap-2"
              >
                <Filter className="h-5 w-5" />
                Filters
              </button>

              {/* Event Type Filters (Desktop) */}
              <div className="hidden md:flex items-center gap-2">
                {eventTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setSelectedType(type.value)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedType === type.value
                        ? 'bg-green-600 text-white'
                        : 'bg-zinc-900/50 text-gray-400 hover:bg-zinc-800'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden overflow-hidden mt-4"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {eventTypes.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setSelectedType(type.value)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedType === type.value
                            ? 'bg-green-600 text-white'
                            : 'bg-zinc-900/50 text-gray-400 hover:bg-zinc-800'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative overflow-hidden rounded-xl bg-zinc-900/50 border border-white/10
                    hover:border-white/20 transition-all duration-300">
                    {/* Event Image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Event Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-black/50 backdrop-blur-sm
                        border border-white/10 text-white">
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>

                    {/* Event Details */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {event.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.venue}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {event.attendees} attendees
                        </div>
                      </div>

                      <button
                        className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300
                          ${event.registrationOpen
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-zinc-800 text-gray-400 cursor-not-allowed'
                          }`}
                        disabled={!event.registrationOpen}
                      >
                        {event.registrationOpen ? 'Register Now' : 'Registration Closed'}
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No events found matching your criteria.</p>
            </motion.div>
          )}

          {/* Past Events */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">Past Events</h2>
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <div key={index} className="p-4 bg-zinc-900 rounded-lg shadow-lg">
                  <h3 className="font-bold">{event.title}</h3>
                  <p className="text-gray-400">{event.date}</p>
                  <p className="mt-2">{event.highlights}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}