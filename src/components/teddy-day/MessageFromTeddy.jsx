"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function MessageFromTeddy() {
  return (
    <section className="py-24 px-6 bg-[#fffcfd] flex justify-center items-center overflow-hidden">
      <div className="max-w-4xl w-full relative">
        
        {/* Floating Background Teddy Decor */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 -left-8 text-7xl opacity-30 select-none hidden md:block"
        >
          🧸
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1 }}
          viewport={{ once: true }}
          // "Breathing" animation for the whole card
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-gradient-to-b from-white to-pink-100 p-12 md:p-16 rounded-[4rem] shadow-[0_25px_60px_rgba(251,113,133,0.08)] border border-rose-300 text-center relative"
        >
          {/* Heart Icon "Clip" */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-rose-500 text-white p-3 rounded-full shadow-lg">
            <Heart size={24} fill="currentColor" />
          </div>

          <div className="space-y-6">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-rose-300 font-sans text-[10px] uppercase tracking-[0.5em] font-bold"
            >
              A special reminder
            </motion.span>

            <h2 
              style={{ fontFamily: "'Chilanka', cursive" }}
              className="text-4xl md:text-6xl text-rose-800 leading-tight"
            >
              Hi love, Whenever you miss me, <br />
              <span className="text-rose-500 italic">hug this teddy</span> and feel my warmth.
            </h2>

            <div className="flex items-center justify-center gap-2 text-3xl">
              <span className="filter drop-shadow-sm">🧸</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="filter drop-shadow-sm"
              >
                🤍
              </motion.span>
            </div>
          </div>

          {/* Decorative Corner Fluff */}
          <div className="absolute bottom-6 right-10 flex gap-1 opacity-20">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-rose-300 rounded-full" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Chilanka&display=swap');
      `}</style>
    </section>
  );
}