import { motion } from 'framer-motion';

export default function TechStackOverview() {
  const technologies = [
    { name: 'React', category: 'Frontend', icon: '/icons/react.svg' },
    { name: 'TypeScript', category: 'Language', icon: '/icons/typescript.svg' },
    { name: 'Node.js', category: 'Backend', icon: '/icons/nodejs.svg' },
    // Add more technologies as needed
  ];

  return (
    <div className="relative">
      <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/5 hover:border-green-500/30"
          >
            <div className="flex items-center gap-3">
              <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              <div>
                <h3 className="font-medium text-white">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 