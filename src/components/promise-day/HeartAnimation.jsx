"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function HeartAnimation() {
  return (
    <section className="py-24 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Radiant Pulse Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, 0.2, 0], 
            scale: [1, 2, 2.5] 
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut"
          }}
          className="absolute w-40 h-40 border-2 border-rose-200 rounded-full"
        />
      ))}

      {/* The Main Heart Container */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          filter: [
            "drop-shadow(0 0 10px rgba(244,63,94,0.2))",
            "drop-shadow(0 0 30px rgba(244,63,94,0.5))",
            "drop-shadow(0 0 10px rgba(244,63,94,0.2))"
          ]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.2,
          ease: "easeInOut" 
        }}
        className="relative z-10 bg-white p-8 rounded-[2.5rem] shadow-[20px_20px_60px_#d1d1d1,-20px_-20px_60px_#ffffff]"
      >
        <Heart 
          size={80} 
          fill="#e11d48" 
          stroke="#e11d48" 
          strokeWidth={1}
          className="relative z-10"
        />
        
        {/* Inner Heart Reflection */}
        <div className="absolute top-1/4 left-1/4 w-4 h-2 bg-white/30 rounded-full rotate-[-45deg] z-20" />
      </motion.div>

      {/* Floating Caption */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ fontFamily: "'Handlee', cursive" }}
        className="mt-12 text-2xl text-rose-500 font-medium"
      >
        My heart beats only for you...
      </motion.p>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
      `}</style>
    </section>
  );
}