"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function SendHugButton() {
  const [isHolding, setIsHolding] = useState(false);
  const controls = useAnimation();

  // Triggered when she starts pressing
  const startHugging = () => {
    setIsHolding(true);
    // Haptic feedback for mobile (2026 standard)
    if (typeof window !== "undefined" && window.navigator.vibrate) {
      window.navigator.vibrate([100, 50, 100]);
    }
  };

  // Triggered when she lets go
  const stopHugging = () => {
    setIsHolding(false);
  };

  return (
    <section className="text-center pb-32 relative flex flex-col items-center">
      {/* The Glow Halo that expands while holding */}
      <motion.div
        animate={{
          scale: isHolding ? [1, 2, 1.5] : 0,
          opacity: isHolding ? [0.2, 0.5, 0.3] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute w-64 h-64 bg-rose-400 rounded-full blur-[80px] -z-10"
      />

      <div className="relative">
        <motion.button
          onMouseDown={startHugging}
          onMouseUp={stopHugging}
          onTouchStart={startHugging}
          onTouchEnd={stopHugging}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-20 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-12 py-5 rounded-[2rem] text-xl font-bold shadow-[0_15px_30px_rgba(244,63,94,0.3)] select-none cursor-pointer flex items-center gap-3"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          <motion.div
            animate={isHolding ? { scale: [1, 1.4, 1] } : {}}
            transition={{ repeat: Infinity, duration: 0.6 }}
          >
            <Heart fill="currentColor" />
          </motion.div>
          {isHolding ? "Squeezing... ❤️" : "Hold for a Big Hug"}
        </motion.button>

        {/* Floating Hearts that appear while holding */}
        {isHolding && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  x: (Math.random() - 0.5) * 300,
                  y: -200 - Math.random() * 200,
                  rotate: Math.random() * 360,
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                className="absolute text-rose-500"
              >
                <Heart fill="currentColor" size={24 + Math.random() * 20} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 text-rose-300 font-medium italic"
        style={{ fontFamily: "'Fredoka', sans-serif" }}
      >
        {isHolding ? "Don't let go yet! 🤗" : "Press and hold to feel the love"}
      </motion.p>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');
      `}</style>
    </section>
  );
}