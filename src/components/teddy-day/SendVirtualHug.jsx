"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function SendVirtualHug() {
  const [isHugging, setIsHugging] = useState(false);

  const triggerHug = () => {
    setIsHugging(true);
    // The hug "lasts" for 3 seconds
    setTimeout(() => setIsHugging(false), 3000);
  };

  return (
    <section className="py-32 text-center relative overflow-hidden">
      {/* Visual Hug Overlay - The "Squeeze" */}
      <AnimatePresence>
        {isHugging && (
          <>
            {/* Left Arm/Side Glow */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-rose-200/40 to-transparent z-40 pointer-events-none"
            />
            {/* Right Arm/Side Glow */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-rose-200/40 to-transparent z-40 pointer-events-none"
            />
            {/* Heart Rain */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 600, opacity: [0, 1, 0], x: (Math.random() - 0.5) * 400 }}
                transition={{ duration: 2, delay: i * 0.1 }}
                className="absolute top-0 left-1/2 text-rose-400 z-50"
              >
                <Heart fill="currentColor" size={24} />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <motion.div
          animate={isHugging ? { scale: [1, 0.95, 1.05, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={triggerHug}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white border-2 border-rose-100 text-rose-600 px-12 py-6 rounded-[2.5rem] text-2xl font-bold shadow-[0_10px_40px_rgba(251,113,133,0.15)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-4">
              <motion.span animate={{ rotate: isHugging ? [0, 20, -20, 0] : 0 }}>
                {isHugging ? "🧸" : "🤗"}
              </motion.span>
              {isHugging ? "Hugging You Tight..." : "Send Virtual Hug"}
            </span>
            
            {/* Background Fill Animation */}
            <motion.div 
              initial={false}
              animate={{ width: isHugging ? "100%" : "0%" }}
              className="absolute inset-0 bg-rose-50 -z-0"
            />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 space-y-2"
        >
          <p 
            style={{ fontFamily: "'Short Stack', cursive" }}
            className="text-2xl text-rose-800"
          >
            {isHugging ? "Don't let go just yet..." : "Close your eyes… feel it?"}
          </p>
          <p className="text-rose-400 italic text-sm">
            {isHugging ? "Sending warmth to your heart ❤️" : "That’s me, holding you from here 💕"}
          </p>
        </motion.div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Short+Stack&display=swap');
      `}</style>
    </section>
  );
}