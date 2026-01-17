"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
        animate={{ 
          opacity: 1, 
          filter: "blur(0px)", 
          scale: 1,
          y: [20, 0] 
        }}
        exit={{ 
          opacity: 0, 
          filter: "blur(10px)",
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.22, 1, 0.36, 1] // Custom "Expo" Ease Out
        }}
        className="will-change-transform"
      >
        {/* Subtle background glow that follows page changes */}
        <div className="fixed inset-0 pointer-events-none -z-50 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,182,193,0.05)_0%,_transparent_70%)]" />
        
        {children}
      </motion.div>
    </AnimatePresence>
  );
}