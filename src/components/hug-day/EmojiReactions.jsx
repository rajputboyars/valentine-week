"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Sparkles, Smile, Stars, Coffee } from "lucide-react";

// Cute icons with specific brand colors
const reactions = [
  { id: "hug", icon: <Smile size={32} />, label: "Warm Hugs", color: "text-orange-400" },
  { id: "love", icon: <Heart size={32} fill="currentColor" />, label: "Pure Love", color: "text-rose-500" },
  { id: "blush", icon: <Sparkles size={32} />, label: "Magic", color: "text-amber-400" },
  { id: "us", icon: <Coffee size={32} />, label: "Our Time", color: "text-brown-400" },
  { id: "heart", icon: <Stars size={32} />, label: "Dreamy", color: "text-pink-400" },
];

export default function EmojiReactions() {
  const [activeId, setActiveId] = useState(null);

  const handleReaction = (id) => {
    setActiveId(id);
    // Clear the burst after animation finishes
    setTimeout(() => setActiveId(null), 1000);
  };

  return (
    <section className="py-20 flex flex-col items-center relative overflow-hidden font-['Quicksand',sans-serif]">
      {/* Handwritten-style Title */}
      <h4 className="font-['Caveat',cursive] text-3xl text-rose-400 mb-10 tracking-wide">
        Send me a little spark...
      </h4>

      <div className="flex justify-center gap-4 md:gap-8 relative z-10">
        {reactions.map((item) => (
          <div key={item.id} className="relative flex flex-col items-center">
            <motion.button
              whileHover={{ 
                y: -12,
                scale: 1.15,
                rotate: [0, -5, 5, 0],
                boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.25)" 
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleReaction(item.id)}
              className={`w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-md border border-rose-100 rounded-3xl flex items-center justify-center ${item.color} shadow-sm transition-all hover:border-rose-300 hover:bg-white`}
            >
              {item.icon}
            </motion.button>

            {/* Label that appears on hover */}
            <motion.span className="absolute -bottom-8 text-xs font-bold text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity">
              {item.label}
            </motion.span>

            {/* Particle Burst Animation */}
            <AnimatePresence>
              {activeId === item.id && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  {[...Array(8)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                      animate={{ 
                        opacity: 0, 
                        x: (j % 2 === 0 ? 1 : -1) * (Math.random() * 120), 
                        y: -120 - Math.random() * 60,
                        scale: 0,
                        rotate: Math.random() * 360
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`absolute ${item.color}`}
                    >
                      {/* Using the same icon for particles but smaller */}
                      {Object.assign({}, item.icon, { props: { ...item.icon.props, size: 16 } })}
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <motion.p 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="mt-12 text-rose-300 text-sm font-medium tracking-tight"
      >
        Tap to send a reaction
      </motion.p>
    </section>
  );
}