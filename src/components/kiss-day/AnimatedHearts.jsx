"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export default function AnimatedHearts() {
  const [hearts, setHearts] = useState([]);

  // We generate positions on mount to avoid hydration errors
  useEffect(() => {
    const newHearts = [...Array(12)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 15 + Math.random() * 25,
      duration: 4 + Math.random() * 4,
      delay: i * 0.4,
      sway: 20 + Math.random() * 30,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="relative h-48 w-full overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "120%", opacity: 0, scale: 0 }}
          animate={{ 
            y: "-120%", 
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.2, 0.8],
            x: [0, heart.sway, -heart.sway, 0] // Romantic sway
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{ 
            left: `${heart.left}%`,
            color: heart.id % 2 === 0 ? "#fb7185" : "#fda4af" // Alternating Rose colors
          }}
        >
          <Heart 
            fill="currentColor" 
            size={heart.size} 
            className="drop-shadow-[0_0_10px_rgba(251,113,133,0.3)]"
          />
        </motion.div>
      ))}

      {/* Optional Caption */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p 
          style={{ fontFamily: "'Pangolin', cursive" }}
          className="text-rose-400 text-sm tracking-widest uppercase bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm border border-rose-50"
        >
          Floating on Cloud Nine
        </p>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');
      `}</style>
    </div>
  );
}