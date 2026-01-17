"use client";
import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.6,
          }}
          className="absolute text-2xl"
          style={{ left: `${Math.random() * 100}%` }}
        >
          💖
        </motion.span>
      ))}
    </div>
  );
}
