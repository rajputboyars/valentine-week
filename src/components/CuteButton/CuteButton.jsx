"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const CuteButton = ({ text, onClick }) => {
  return (
    <div className="relative group">
      {/* Animated Glow Backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-pink-300 to-orange-300 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      
      <motion.button
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 20px rgba(244, 63, 94, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="relative flex items-center gap-3 bg-white px-8 py-4 rounded-full border border-rose-100 shadow-sm transition-all duration-300"
      >
        {/* The Heart Icon with a 'Heartbeat' animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart size={20} className="text-rose-500 fill-rose-500" />
        </motion.div>

        <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent font-serif font-bold text-lg tracking-tight">
          {text}
        </span>

        {/* Floating Sparkle Decoration */}
        <motion.span
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, y: -20, x: 10 }}
          className="absolute right-2 top-0 text-amber-400 text-xl pointer-events-none"
        >
          ✨
        </motion.span>
      </motion.button>
    </div>
  );
};

export default CuteButton;