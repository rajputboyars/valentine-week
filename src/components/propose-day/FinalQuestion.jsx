"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sparkles, Heart } from "lucide-react";

export default function FinalQuestion() {
  const [committed, setCommitted] = useState(false);

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[800px] h-[800px] bg-rose-300 rounded-full blur-[150px] -z-10"
      />

      <AnimatePresence mode="wait">
        {!committed ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            {/* The Ring/Heart Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8 text-rose-400 bg-white p-6 rounded-full shadow-[0_10px_40px_rgba(251,113,133,0.1)]"
            >
              <Heart size={48} strokeWidth={1} fill="currentColor" />
            </motion.div>

            <h2
              style={{ fontFamily: "'Charm', cursive" }}
              className="text-5xl md:text-7xl text-rose-800 mb-12 leading-tight"
            >
              Will you be mine, <br />
              now and forever?
            </h2>

            <motion.button
              onClick={() => setCommitted(true)}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 50px rgba(225, 29, 72, 0.3)",
                backgroundColor: "#e11d48" 
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-rose-600 text-white px-12 py-5 rounded-full text-xl font-bold tracking-widest uppercase transition-colors shadow-2xl overflow-hidden"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Forever Starts Here
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
              </span>
              
              {/* Internal Button Glow */}
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" 
              />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="accepted"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 12 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-rose-500 mb-6"
            >
              <Heart size={100} fill="currentColor" />
            </motion.div>
            
            <h2 
              style={{ fontFamily: "'Charm', cursive" }}
              className="text-6xl md:text-8xl text-rose-600"
            >
              My heart is yours.
            </h2>
            
            <p className="mt-6 text-rose-400 font-serif italic text-xl">
              Today, tomorrow, and every day after.
            </p>

            {/* Falling Petals/Sparkles Effect */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{ 
                  y: 400, 
                  opacity: [0, 1, 0],
                  x: (i - 6) * 40 + (Math.random() * 20),
                  rotate: 360
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                className="absolute text-rose-200 pointer-events-none"
              >
                🌸
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Montserrat:wght@700&display=swap');
      `}</style>
    </section>
  );
}