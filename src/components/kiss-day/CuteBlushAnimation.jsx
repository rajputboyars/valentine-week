"use client";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function CuteBlushAnimation() {
  return (
    <section className="flex flex-col items-center justify-center py-24 relative overflow-hidden">
      {/* The "Blush" Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-64 h-64 bg-rose-200 rounded-full blur-[80px] -z-10"
      />

      <div className="relative">
        {/* Floating Sparkles around the heart */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -40, -20],
              x: (i % 2 === 0 ? 30 : -30),
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute text-amber-300"
            style={{ top: '20%', left: '40%' }}
          >
            <Sparkles size={20} fill="currentColor" />
          </motion.div>
        ))}

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, -5, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(244,63,94,0.15)] border-2 border-rose-200"
        >
          <div className="flex gap-2">
            <Heart className="text-rose-400 fill-rose-400" size={48} />
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex gap-1 items-end pb-2"
            >
              <div className="w-2 h-2 bg-rose-300 rounded-full" />
              <div className="w-2 h-2 bg-rose-300 rounded-full" />
              <div className="w-2 h-2 bg-rose-300 rounded-full" />
            </motion.div>
          </div>
          
          {/* Subtle Pink Cheeks on the card itself */}
          <div className="absolute bottom-6 left-6 w-8 h-3 bg-rose-100 blur-md rounded-full" />
          <div className="absolute bottom-6 right-6 w-8 h-3 bg-rose-100 blur-md rounded-full" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-10 text-center"
      >
        <h3 
          style={{ fontFamily: "'Cherry Bomb One', cursive" }} 
          className="text-4xl text-rose-500 tracking-wider"
        >
          You make me blush...
        </h3>
        <p className="font-['Montserrat',sans-serif] text-[10px] uppercase tracking-[0.4em] text-rose-300 mt-4 font-bold">
          Every single time
        </p>
      </motion.div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Montserrat:wght@700&display=swap');
      `}</style>
    </section>
  );
}