import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex space-x-2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-green-500 rounded-full"
              animate={{
                y: [-10, 0, -10],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        <p className="text-green-400 mt-4 text-sm">Loading...</p>
      </motion.div>
    </div>
  );
} 