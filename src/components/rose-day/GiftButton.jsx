"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Gift } from "lucide-react";

export default function GiftButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Array to generate 15 falling petals
  const petals = Array.from({ length: 15 });

  return (
    <div className="text-center py-24 relative overflow-hidden min-h-[400px]">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="button"
            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(225, 29, 72, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white border-2 border-rose-200 text-rose-600 px-10 py-5 rounded-full text-xl font-medium shadow-sm transition-colors hover:bg-rose-50 flex items-center gap-3 mx-auto"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Gift size={24} />
              </motion.span>
              <span>This Rose Is For You</span>
              
              {/* Subtle sparkle effect on button hover */}
              <motion.div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(251,113,133,0.1) 0%, transparent 70%)" }}
              />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            {/* The Main Rose Display */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, delay: 0.2 }}
              className="text-8xl mb-6 filter drop-shadow-xl"
            >
              🌹
            </motion.div>

            <h2 
              style={{ fontFamily: "'Pinyon Script', cursive" }}
              className="text-5xl md:text-6xl text-rose-800"
            >
              A Rose for a Rose...
            </h2>
            
            <p className="mt-4 text-rose-400 font-serif italic text-lg">
              May your day be as beautiful as you are.
            </p>

            {/* Falling Petals Animation */}
            {petals.map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: -100, 
                  x: Math.random() * 400 - 200, 
                  opacity: 0,
                  rotate: 0 
                }}
                animate={{ 
                  y: 500, 
                  opacity: [0, 1, 1, 0],
                  x: (Math.random() * 600 - 300),
                  rotate: 720
                }}
                transition={{ 
                  duration: 4 + Math.random() * 2, 
                  repeat: Infinity, 
                  delay: Math.random() * 2 
                }}
                className="absolute text-rose-300 pointer-events-none text-2xl"
              >
                {Math.random() > 0.5 ? "🌸" : "✨"}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
      `}</style>
    </div>
  );
}