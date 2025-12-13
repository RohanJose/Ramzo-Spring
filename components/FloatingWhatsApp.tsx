import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/447950487080" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 hover:bg-[#20bd5a] transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-bold whitespace-nowrap">Contact Us</span>
    </motion.a>
  );
};