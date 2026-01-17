"use client";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export default function ProposalHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#fffcfc]">
      
      {/* Soft Ethereal Background Glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(255,228,230,1)_0%,_rgba(255,255,255,0)_70%)] -z-10"
      />

      <div className="relative mb-12">
        {/* Animated Custom Ring Icon */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotateY: [0, 15, -15, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <div className="relative">
            {/* The Diamond Sparkle */}
            <motion.div
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 text-amber-300 z-20"
            >
              <Sparkles size={48} fill="currentColor" />
            </motion.div>

            {/* High-End Ring SVG */}
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="text-rose-400 drop-shadow-2xl">
              <circle cx="12" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 6L15 9H9L12 6Z" fill="currentColor" />
              <rect x="10.5" y="5" width="3" height="1.5" fill="currentColor" />
            </svg>
          </div>
        </motion.div>

        {/* Floating Petals around the ring */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100], 
              x: (i - 2) * 30,
              opacity: [0, 1, 0],
              rotate: 360 
            }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
            className="absolute top-10 left-1/2 text-rose-200 pointer-events-none"
          >
            🌸
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 
          style={{ fontFamily: "'Cinzel', serif" }}
          className="text-5xl md:text-7xl text-rose-800 mb-6 tracking-widest"
        >
          Propose Day
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-16 bg-rose-200" />
          <Heart size={18} className="text-rose-300 fill-rose-300" />
          <div className="h-[1px] w-16 bg-rose-200" />
        </div>

        <p className="font-serif italic text-xl md:text-2xl text-rose-900/60 max-w-2xl mx-auto leading-relaxed">
          "This ring may be virtual, but the <span className="text-rose-600 font-bold not-italic">forever</span> I promise you is as real as it gets."
        </p>
      </motion.div>

      {/* Decorative Signature Detail */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-12 text-rose-300 font-['Mrs_Saint_Delafield'] text-4xl"
      >
        Yours, Always
      </motion.div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Mrs+Saint+Delafield&display=swap');
      `}</style>
    </section>
  );
}