"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function VirtualHugAnimation() {
  return (
    <section className="flex flex-col items-center justify-center py-24 relative overflow-hidden">
      {/* The Ambient "Warmth" Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-80 h-80 bg-rose-100 rounded-full blur-[100px] -z-10"
      />

      <div className="relative flex items-center justify-center h-40 w-64">
        {/* Left Heart */}
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute left-10 text-rose-400"
        >
          <Heart size={80} fill="currentColor" strokeWidth={1} />
        </motion.div>

        {/* Right Heart */}
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute right-10 text-pink-300"
        >
          <Heart size={80} fill="currentColor" strokeWidth={1} />
        </motion.div>

        {/* Center Sparkle when they "Touch" */}
        <motion.div
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute z-10 text-amber-400"
        >
          ✨
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-12 text-center"
      >
        <p  className=" font-['Kalam',cursive] text-4xl text-rose-500">
          Sending you all my warmth...
        </p>
        <p className="font-serif italic text-rose-300 text-sm tracking-widest uppercase mt-2">
          Hold this moment in your heart
        </p>
      </motion.div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');
      `}</style>
    </section>
  );
}