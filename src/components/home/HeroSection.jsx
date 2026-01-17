"use client";
import { motion } from "framer-motion";
import { Heart, ChevronDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-gradient-to-b from-[#fffafb] to-white">
      
      {/* Soft Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-rose-200/40 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="text-rose-400" size={20} />
          <span className="uppercase tracking-[0.3em] text-rose-400 text-xs font-semibold">
            Especially for you
          </span>
          <Sparkles className="text-rose-400" size={20} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-[Pacifico] text-5xl md:text-7xl text-rose-800 leading-tight"
        >
          This is not just <br /> 
          <span className="text-rose-500">a website...</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "60%" }}
          transition={{ delay: 1.5, duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="font-serif italic text-xl md:text-2xl text-rose-900/70 max-w-lg mx-auto leading-relaxed"
        >
          "It’s everything my heart wants to say to you, wrapped in a digital hug."
        </motion.p>
      </motion.div>

      {/* Floating Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-rose-300 text-[10px] uppercase tracking-widest font-bold">
          Scroll to unwrap
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="bg-white p-2 rounded-full shadow-md border border-rose-50 text-rose-500"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Tiny floating heart detail */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-1/4 right-[10%] text-rose-200 hidden md:block"
      >
        <Heart fill="currentColor" size={40} />
      </motion.div>
    </section>
  );
}