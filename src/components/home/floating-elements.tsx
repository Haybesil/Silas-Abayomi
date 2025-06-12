'use client';

import { motion } from 'framer-motion';


export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Diamond shapes */}
      <motion.div
        className="absolute top-20 left-20 w-8 h-8 diamond-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 transform rotate-45 rounded-sm" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-32 w-6 h-6 diamond-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
        style={{ animationDelay: '5s' }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 transform rotate-45 rounded-sm" />
      </motion.div>

      {/* Cube shapes */}
      <motion.div
        className="absolute bottom-32 left-32 w-10 h-10 spin-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg border border-white/20" />
      </motion.div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-60 right-20 w-12 h-12 float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.5 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-sm" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-40 w-8 h-8 float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3 }}
        style={{ animationDelay: '3s' }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-sm" />
      </motion.div>

      {/* Web3 style hexagons */}
      <motion.div
        className="absolute top-32 left-1/2 w-6 h-6 spin-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.8 }}
      >
        <div
          className="w-full h-full bg-gradient-to-r from-green-400/30 to-blue-400/30 transform rotate-12"
          style={{
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-1/4 w-4 h-4 diamond-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.2 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-yellow-400/30 to-orange-400/30 transform rotate-45 rounded-sm" />
      </motion.div>
    </div>
  );
}
