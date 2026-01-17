"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift } from "lucide-react";

export default function VirtualChocolateGift() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 flex flex-col items-center justify-center relative z-10 bg-[#fffafb]">
      {/* The Chocolate Box Container */}
      <div className="relative w-72 h-72 flex items-center justify-center">
        
        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-rose-200 blur-[80px] opacity-30 animate-pulse" />

        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* CLOSED BOX STATE */
            <motion.div
              key="closed"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -20, opacity: 0 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              onClick={() => setIsOpen(true)}
              className="relative z-20 cursor-pointer group"
            >
              <div className="w-48 h-48 bg-rose-500 rounded-3xl shadow-[0_20px_50px_rgba(225,29,72,0.3)] flex flex-col items-center justify-center p-6 text-white border-4 border-rose-400">
                <Gift size={60} className="mb-2 animate-bounce" />
                <span className="font-serif italic font-bold text-center leading-tight">
                  Open for a <br/> Surprise
                </span>
              </div>
              {/* Ribbon Overlay */}
              <div className="absolute top-1/2 left-0 w-full h-8 bg-rose-400 -translate-y-1/2 rounded-sm" />
              <div className="absolute left-1/2 top-0 h-full w-8 bg-rose-400 -translate-x-1/2 rounded-sm" />
            </motion.div>
          ) : (
            /* OPENED BOX STATE (THE GIFT) */
            <motion.div
              key="opened"
              initial={{ scale: 0.5, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              className="text-center relative z-20"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-6 drop-shadow-2xl"
              >
                💝
              </motion.div>
              <h3 className="font-[Pacifico] text-3xl text-rose-600 mb-2">
                Pure Sweetness!
              </h3>
              <p className="text-rose-400 font-serif italic max-w-[250px]">
                "Calories don't count when it's made of 100% love."
              </p>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-6 text-xs text-rose-300 underline hover:text-rose-500 transition-colors"
              >
                Close box
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Heart Particles when open */}
        {isOpen && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 150), 
                  y: -Math.random() * 200 
                }}
                transition={{ duration: 1.5, delay: 0.1 }}
                className="absolute text-rose-400"
              >
                <Heart fill="currentColor" size={24} />
              </motion.div>
            ))}
          </>
        )}
      </div>

      {!isOpen && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-rose-400 font-serif animate-pulse"
        >
          Click the box to unwrap your treat...
        </motion.p>
      )}
    </section>
  );
}