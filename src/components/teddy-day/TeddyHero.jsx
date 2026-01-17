"use client";
import { motion } from "framer-motion";
import { Heart, Cloud } from "lucide-react";

export default function TeddyHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#fffafd]">
      
      {/* Background Soft Clouds */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div
          animate={{ x: [-20, 20, -20], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 text-rose-100"
        >
          <Cloud size={120} fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{ x: [20, -20, 20], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-10 text-pink-100"
        >
          <Cloud size={160} fill="currentColor" />
        </motion.div>
      </div>

      <div className="relative mb-12">
        {/* Main Teddy with "Breathing" and "Floating" effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 3, -3, 0],
            opacity: 1 
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 1 }
          }}
          className="text-[120px] md:text-[160px] filter drop-shadow-[0_25px_35px_rgba(244,63,94,0.15)] relative z-10 select-none cursor-grab active:cursor-grabbing"
        >
          🧸
        </motion.div>

        {/* Orbiting Hearts */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              rotate: { duration: 8 + i * 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity } 
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 pointer-events-none"
          >
            <Heart 
              size={24} 
              className="text-rose-300 fill-rose-200 absolute"
              style={{ 
                top: i * 25 + "%", 
                left: i * 30 + "%" 
              }} 
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="z-10"
      >
        <h1 
          style={{ fontFamily: "'Sniglet', cursive" }}
          className="text-5xl md:text-7xl text-rose-500 mb-4 tracking-tight"
        >
          Happy Teddy Day
        </h1>

        <p 
          style={{ fontFamily: "'Gochi Hand', cursive" }}
          className="text-2xl md:text-3xl text-rose-400 mb-8"
        >
          Sending you a giant hug in spirit 💖
        </p>

        <div className="max-w-md mx-auto p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-rose-100 shadow-sm">
          <p className="text-rose-900/70 font-medium leading-relaxed italic">
            "This teddy is soft, warm, and carries a piece of my heart. Whenever you need a hug, just know I'm right there."
          </p>
        </div>
      </motion.div>

      {/* Font Imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sniglet:wght@800&family=Gochi+Hand&display=swap');
      `}</style>
    </section>
  );
}