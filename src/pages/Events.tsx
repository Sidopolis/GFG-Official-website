import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  time: string;
  venue: string;
  type: string;
  image: string;
  description: string;
  registrationLink: string;
  capacity: string;
}

export default function Events() {
  const events: { upcoming: Event[], past: Event[] } = {
    upcoming: [
      {
        title: "Hackathon 2024",
        date: "March 15, 2024",
        time: "10:00 AM",
        venue: "Virtual Event",
        type: "Competition",
        image: "/events/hackathon.jpg",
        description: "48-hour coding challenge to build innovative solutions",
        registrationLink: "#",
        capacity: "500 participants",
      },
      // Add more upcoming events
    ],
    past: [
      // Past events
    ]
  };

  return (
    <div className="relative min-h-screen">
      {/* Background with grid effect - matches team page */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[#0a0f0a] z-10" />
        <div className="absolute inset-0 grid-pattern z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(4,24,12,0.9)] to-[#0a0f0a] z-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.06),transparent_70%)] z-30" />
      </div>

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
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
              <div className="relative bg-black/30 backdrop-blur-sm px-8 py-3 rounded-full border border-green-500/20">
                <span className="text-green-400 font-medium">Upcoming & Past Events</span>
              </div>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
            Events & Workshops
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join us for exciting technical events, workshops, and competitions
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <section className="container mx-auto px-6 mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12"
          >
            Upcoming Events
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.upcoming.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative rounded-2xl bg-black/20 backdrop-blur-md
                  border border-white/5 overflow-hidden transition-all duration-500
                  hover:border-green-500/30 hover:shadow-[0_0_30px_-12px] hover:shadow-green-500/20"
                >
                  {/* Event Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Event Type Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-green-500/90 backdrop-blur-sm px-4 py-1 rounded-full">
                        <span className="text-black text-sm font-medium">{event.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 
                      transition-colors duration-300"
                    >
                      {event.title}
                    </h3>

                    {/* Event Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{event.capacity}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6">{event.description}</p>

                    {/* Register Button */}
                    <a
                      href={event.registrationLink}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                        bg-green-500 hover:bg-green-600 text-black font-medium
                        transition-all duration-300 group-hover:shadow-lg"
                    >
                      Register Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Past Events Timeline */}
        <section className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12"
          >
            Past Events
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-green-500/50 to-transparent" />

            {events.past.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center gap-8 mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Event Card */}
                <div className="w-full md:w-1/2 group">
                  <div className="relative rounded-xl bg-black/20 backdrop-blur-sm p-6
                    border border-white/5 hover:border-green-500/30 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    
                    {/* Event Gallery/Link */}
                    <a href="#" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300">
                      View Gallery <ExternalLink className="w-4 h-4" />
                    </a>
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