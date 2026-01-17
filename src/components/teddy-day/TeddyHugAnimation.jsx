"use client";
import { motion } from "framer-motion";

export default function TeddyHugAnimation() {
  return (
    <section className="py-24 flex flex-col items-center justify-center bg-[#fffcfc] overflow-hidden">
      
      {/* Container for the interaction */}
      <div className="relative group cursor-pointer p-20">
        
        {/* Animated Background Pulse (Behind the emojis) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-rose-400 rounded-full blur-3xl -z-10"
        />

        <div className="flex items-center justify-center gap-4">
          {/* The Teddy - Moves right on hover */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            whileHover={{ x: 25, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-7xl md:text-9xl filter drop-shadow-sm select-none"
          >
            🧸
          </motion.div>

          {/* The Hug - Moves left on hover */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
            whileHover={{ x: -25, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="text-7xl md:text-9xl filter drop-shadow-sm select-none"
          >
            🧸
          </motion.div>
        </div>

        {/* Floating Heart "Pop" on Click */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          whileTap={{ opacity: 1, scale: [1, 2], transition: { duration: 0.5 } }}
        >
          <div className="text-6xl text-rose-500 opacity-50">❤️</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <p 
          style={{ fontFamily: "'Handlee', cursive" }}
          className="text-2xl text-rose-400 italic"
        >
          Hover to see them hug... <br />
          <span className="text-lg text-rose-300 not-italic uppercase tracking-widest">click for a heartbeat</span>
        </p>
      </motion.div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
      `}</style>
    </section>
  );
}