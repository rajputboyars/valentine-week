"use client";
import { motion } from "framer-motion";
import { Handshake, Heart, Sparkles } from "lucide-react";

export default function PromiseHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white">
      
      {/* Background Soft Glow Aura */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-rose-50 via-pink-100 to-rose-100 rounded-full blur-[120px] -z-10"
      />

      {/* Floating Sparkles around the central icon */}
      <div className="relative mb-12">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 bg-white p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(244,63,94,0.1)] border border-rose-50"
        >
          <Handshake size={80} strokeWidth={1} className="text-rose-500" />
          
          <motion.div 
            animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute -top-2 -right-2 text-amber-400"
          >
            <Sparkles size={24} fill="currentColor" />
          </motion.div>
        </motion.div>

        {/* Pulsing Heart behind the icon */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center -z-10"
        >
          <Heart size={120} className="text-rose-200 fill-rose-200" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 
          style={{ fontFamily: "'Marck Script', cursive" }}
          className="text-6xl md:text-8xl text-rose-600 mb-6 drop-shadow-sm"
        >
          Happy Promise Day
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-rose-200" />
          <motion.div 
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Heart size={16} className="text-rose-300" fill="currentColor" />
          </motion.div>
          <div className="h-px w-12 bg-rose-200" />
        </div>

        <p className="font-sans text-rose-500 max-w-xl mx-auto text-lg md:text-xl leading-relaxed tracking-wide italic">
          Today Anubhav promise you my heart, my time, and my forever— <br />
          <span className="font-bold text-rose-700 not-italic uppercase text-sm tracking-[0.3em]">sealed for eternity 🤍</span>
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-rose-300 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">The Vows</span>
        <div className="w-px h-10 bg-gradient-to-b from-rose-300 to-transparent" />
      </motion.div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Marck+Script&display=swap');
      `}</style>
    </section>
  );
}