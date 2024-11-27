import { motion } from 'framer-motion';

export default function SplineLoader() {
  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-gray-400">Loading 3D Experience...</p>
      </motion.div>
    </div>
  );
} 