"use client";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function KissHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#fffcfc]">
      
      {/* Soft Romantic Aura */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4] 
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-rose-100 rounded-full blur-[120px] -z-10"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="z-10"
      >
        {/* Decorative Header Detail */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-rose-200" />
          <Sparkles className="text-rose-400" size={18} />
          <span className="uppercase tracking-[0.4em] text-rose-400 text-[10px] font-bold">
            Mwah!
          </span>
          <Sparkles className="text-rose-400" size={18} />
          <div className="h-px w-8 bg-rose-200" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{ fontFamily: "'Petit Formal Script', cursive" }}
          className="text-5xl md:text-7xl text-rose-800 mb-6 drop-shadow-sm"
        >
          Happy Kiss Day
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 1.2, duration: 1 }}
          className="h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="font-serif italic text-xl md:text-2xl text-rose-900/60 max-w-lg mx-auto"
        >
          "A kiss is a lovely trick designed by nature to stop speech when words become superfluous."
        </motion.p>
      </motion.div>

      {/* Floating Mini-Hearts (The "Kiss" Particles) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{ 
            opacity: [0, 0.4, 0], 
            y: [-20, -150], 
            x: Math.sin(i) * 50,
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 4 + i, 
            repeat: Infinity, 
            delay: i * 0.8 
          }}
          className="absolute text-rose-300 pointer-events-none"
          style={{ 
            left: `${15 + i * 15}%`,
            bottom: "10%"
          }}
        >
          <Heart fill="currentColor" size={20 + i * 4} />
        </motion.div>
      ))}

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Petit+Formal+Script&display=swap');
      `}</style>
    </section>
  );
}