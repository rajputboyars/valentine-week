"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";

export default function ProposalAgainButton() {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <section className="relative text-center pb-32 pt-12 overflow-hidden">
      
      {/* Background Heart Rain (Floating upwards like a dream) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
            animate={{
              y: "-10vh",
              opacity: [0, 1, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute text-rose-200"
          >
            <Heart size={Math.random() * 20 + 10} fill="currentColor" />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {!isAccepted ? (
          <motion.div
            key="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              {/* Pulsing Aura around the button */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-rose-200 rounded-full blur-2xl"
              />

              <motion.button
                onClick={() => setIsAccepted(true)}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 50px rgba(225, 29, 72, 0.2)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 bg-white border-2 border-rose-100 text-rose-600 px-12 py-5 rounded-full text-xl md:text-2xl font-bold tracking-tight transition-colors hover:bg-rose-50"
              >
                <span className="flex items-center gap-3">
                  <span className="text-3xl">💍</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Will You Be Mine Forever?
                  </span>
                  <span className="text-3xl">💍</span>
                </span>
              </motion.button>
            </div>
            
            <p className="mt-6 text-rose-300 italic font-serif tracking-widest text-sm uppercase">
              A question from my heart to yours
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="flex flex-col items-center justify-center py-10 px-6"
          >
            {/* Celebration Sparkles */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
               {[...Array(15)].map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 0 }}
                   animate={{ 
                     opacity: [0, 1, 0], 
                     y: -200, 
                     x: (Math.random() - 0.5) * 400 
                   }}
                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                   className="absolute left-1/2 text-rose-400"
                 >
                   <Sparkles size={24} />
                 </motion.div>
               ))}
            </div>

            <h2 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-5xl md:text-7xl text-rose-600 font-bold mb-6 italic"
            >
              She Said Yes!
            </h2>
            <p 
              style={{ fontFamily: "'La Belle Aurore', cursive" }}
              className="text-3xl md:text-4xl text-rose-800"
            >
              "My forever starts and ends with you."
            </p>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              className="h-[1px] bg-rose-200 my-8"
            />
            
            <span className="text-6xl animate-bounce">💖</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Font Imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&family=La+Belle+Aurore&display=swap');
      `}</style>
    </section>
  );
}