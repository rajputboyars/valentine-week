"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper to generate a unique ID
const generateId = () => Math.random().toString(36).substring(2, 9);

export default function HeartCursor() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // We only create a heart every few pixels moved to avoid performance lag
      const newHeart = {
        id: generateId(),
        x: e.clientX,
        y: e.clientY,
      };

      setHearts((prev) => [...prev.slice(-15), newHeart]); // Keep only the last 15 hearts
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, scale: 0.5, x: heart.x - 10, y: heart.y - 10 }}
            animate={{ 
              opacity: 0, 
              scale: 1.5, 
              y: heart.y - 100, // Float upwards
              x: heart.x + (Math.random() * 40 - 20) // Wiggle sideways
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute text-rose-400 text-2xl"
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}