"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";

// Custom Lip Print Icon using SVG paths for a more "lipstick" look
const LipIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22,12c0,0-2-3-5-3c-1.1,0-2.1,0.4-3,1c-0.9-0.6-1.9-1-3-1c-3,0-5,3-5,3s2,3,5,3c1.1,0,2.1-0.4,3-1c0.9,0.6,1.9,1,3,1C20,15,22,12,22,12z" />
    <path d="M12,18.5c-2.5,0-5-1.5-6.5-3.5c1.5-0.5,3.5-1,6.5-1s5,0.5,6.5,1C17,17,14.5,18.5,12,18.5z" />
  </svg>
);

export default function VirtualKissButton() {
  const [kisses, setKisses] = useState([]);

  const triggerKiss = () => {
    const newKiss = {
      id: Date.now(),
      // Randomize destination spread
      x: (Math.random() - 0.5) * 400,
      y: -200 - Math.random() * 200,
    };
    
    setKisses((prev) => [...prev, newKiss]);

    // Haptic feedback (if available)
    if (typeof window !== "undefined" && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }

    // Clean up kiss after animation
    setTimeout(() => {
      setKisses((prev) => prev.filter((k) => k.id !== newKiss.id));
    }, 2000);
  };

  return (
    <section className="text-center py-24 relative flex flex-col items-center overflow-visible">
      <div className="relative">
        <motion.button
          onClick={triggerKiss}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontFamily: "'Balsamiq Sans', cursive" }}
          className="relative z-20 bg-gradient-to-r from-rose-400 to-pink-600 text-white px-12 py-5 rounded-full text-xl font-bold shadow-[0_10px_40px_rgba(225,29,72,0.3)] flex items-center gap-3 group overflow-hidden"
        >
          {/* Liquid fill effect on hover */}
          <motion.div 
            className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" 
          />
          
          <LipIcon size={28} />
          <span className="relative z-10">Anubhav Send a Sweet Kiss</span>
        </motion.button>

        {/* The Kiss Burst Particles */}
        <AnimatePresence>
          {kisses.map((kiss) => (
            <motion.div
              key={kiss.id}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0], 
                scale: [0.5, 1.5, 1.2], 
                x: kiss.x, 
                y: kiss.y,
                rotate: [-10, 10, -5]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute text-rose-500 z-30 pointer-events-none"
            >
              <LipIcon size={40} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-8 flex items-center gap-2 text-rose-300 font-medium"
        style={{ fontFamily: "'Balsamiq Sans', cursive" }}
      >
        <Heart size={16} fill="currentColor" />
        <span>Click to fill the screen with love</span>
        <Heart size={16} fill="currentColor" />
      </motion.div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      `}</style>
    </section>
  );
}