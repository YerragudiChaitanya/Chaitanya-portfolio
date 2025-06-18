import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <Code className="text-primary-400" size={20} />
            <span className="text-lg font-semibold">Yerragudi Chaitanya</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 text-gray-400"
          >
            <span>Made with</span>
            <Heart className="text-red-500 animate-pulse" size={16} />
            <span>using React & TypeScript</span>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          <p>&copy; 2025 Yerragudi Chaitanya. All rights reserved.</p>
          <p className="mt-2">AI/ML Engineering Student | Alliance University</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;