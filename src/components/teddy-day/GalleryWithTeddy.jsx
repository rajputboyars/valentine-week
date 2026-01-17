"use client";
import { motion } from "framer-motion";
import { Heart, Stars } from "lucide-react";

const teddyMoments = [
  { id: 1, label: "Warm Hugs", color: "bg-orange-100" },
  { id: 2, label: "Soft Smiles", color: "bg-rose-100" },
  { id: 3, label: "Cuddly Nights", color: "bg-amber-100" },
  { id: 4, label: "Forever Friends", color: "bg-pink-100" },
];

export default function GalleryWithTeddy() {
  return (
    <section className="py-24 bg-[#fff9fa] relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-5 opacity-20 text-rose-300"
      >
        <Heart size={48} fill="currentColor" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-16"
        >
          <h2 
            style={{ fontFamily: "'Bubblegum Sans', cursive" }} 
            className="text-4xl md:text-5xl text-rose-500 mb-4"
          >
            Cute Teddy Moments 🧸💖
          </h2>
          <div className="flex justify-center gap-2 text-rose-300">
            <Stars size={20} />
            <span className="font-medium tracking-widest uppercase text-[10px]">Your Personal Collection</span>
            <Stars size={20} />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teddyMoments.map((moment, i) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 40%" // "Squishy" morph effect
                }}
                whileTap={{ scale: 0.9, borderRadius: "50%" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className={`${moment.color} w-full aspect-square rounded-[2.5rem] shadow-[0_12px_24px_rgba(251,113,133,0.1)] flex items-center justify-center text-6xl md:text-7xl cursor-pointer border-4 border-white relative group overflow-hidden`}
              >
                {/* Background Sparkle on Hover */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="relative z-10 filter drop-shadow-md">🧸</span>
                
                {/* Floating Heart inside the card */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: -20 }}
                  className="absolute bottom-4 text-rose-400"
                >
                  <Heart size={20} fill="currentColor" />
                </motion.div>
              </motion.div>

              <p 
                style={{ fontFamily: "'Patrick Hand', cursive" }}
                className="mt-4 text-xl text-rose-800 font-medium"
              >
                {moment.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Patrick+Hand&display=swap');
      `}</style>
    </section>
  );
}