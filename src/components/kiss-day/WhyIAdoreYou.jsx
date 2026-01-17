"use client";
import { motion } from "framer-motion";
import { Candy, Sparkles, Heart, Flame } from "lucide-react";

const reasons = [
  { text: "Your smile melts my heart 💓", icon: <Sparkles className="text-amber-400" /> },
  { text: "Your kisses are purely addictive 😘", icon: <Flame className="text-rose-500" /> },
  { text: "You make me blush every time 😊", icon: <Candy className="text-pink-400" /> },
  { text: "I adore everything about you 💖", icon: <Heart className="text-rose-600 fill-current" /> },
];

export default function WhyIAdoreYou() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent via-rose-50/30 to-transparent">
      
      {/* Decorative Floating Sparkle background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 left-[10%] text-rose-200"
        >
          ✨
        </motion.div>
      </div>

      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        style={{ fontFamily: "'Sniglet', cursive" }}
        className="text-center text-4xl md:text-5xl text-rose-600 mb-16 tracking-tight"
      >
        Why I Adore You 💗
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: i * 0.15, 
              duration: 0.6,
              // Gentle floating bounce
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.3
              }
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group relative bg-white/70 backdrop-blur-md p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(251,113,133,0.1)] border border-white flex items-center gap-6"
          >
            {/* Soft Icon Circle */}
            <div className="flex-shrink-0 w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-rose-100">
              {item.icon}
            </div>

            <p 
              style={{ fontFamily: "'Sniglet', sans-serif" }}
              className="text-xl text-rose-800 leading-tight"
            >
              {item.text}
            </p>

            {/* Hidden "Love" badge that appears on hover */}
            <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity font-bold uppercase tracking-widest shadow-lg">
              Adored
            </div>
          </motion.div>
        ))}
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sniglet:wght@400;800&display=swap');
      `}</style>
    </section>
  );
}