import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ToastProps {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  onClose: () => void;
}

export default function Toast({ type, message, onClose }: ToastProps) {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    info: Info,
    warning: AlertTriangle
  };

  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
    warning: 'bg-yellow-600'
  };

  const Icon = icons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed bottom-4 right-4 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50`}
    >
      <Icon className="h-5 w-5" />
      <p className="text-sm">{message}</p>
      <button 
        onClick={onClose}
        className="ml-4 hover:opacity-80 transition-opacity"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
} 