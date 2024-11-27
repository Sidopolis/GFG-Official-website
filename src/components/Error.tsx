import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ErrorProps {
  message: string;
  retry?: () => void;
}

export default function Error({ message, retry }: ErrorProps) {
  return (
    <motion.div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-zinc-900 p-8 rounded-xl max-w-md w-full mx-4 text-center">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Oops! Something went wrong</h3>
        <p className="text-gray-400 mb-6">{message}</p>
        {retry && (
          <button
            onClick={retry}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </motion.div>
  );
} 