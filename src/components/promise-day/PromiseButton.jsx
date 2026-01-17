"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function PromiseButton() {
  const [isSealed, setIsSealed] = useState(false);

  return (
    <section className="py-32 text-center relative overflow-hidden">
      {/* Background soft focus glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-50 rounded-full blur-[100px] -z-10" />

      <div className="relative inline-block">
        <motion.button
          onClick={() => setIsSealed(true)}
          disabled={isSealed}
          whileHover={!isSealed ? { 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(225, 29, 72, 0.15)"
          } : {}}
          whileTap={!isSealed ? { scale: 0.95 } : {}}
          className={`relative z-10 px-12 py-5 rounded-2xl text-xl font-bold transition-all duration-700 overflow-hidden
            ${isSealed 
              ? "bg-white text-rose-500 border-2 border-rose-200 cursor-default" 
              : "bg-rose-600 text-white shadow-xl hover:bg-rose-500"
            }`}
          style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "1px" }}
        >
          {/* Shimmer Effect */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          />

          <span className="flex items-center gap-3 relative z-10">
            {isSealed ? (
              <>
                <ShieldCheck size={24} className="text-rose-500" />
                Promise Sealed Forever
              </>
            ) : (
              "I Promise You Forever"
            )}
          </span>
        </motion.button>

        {/* Celebration Sparkles when clicked */}
        <AnimatePresence>
          {isSealed && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1.5, 0],
                    x: (Math.random() - 0.5) * 200,
                    y: (Math.random() - 0.5) * 200,
                  }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="absolute text-amber-400"
                >
                  <Sparkles fill="currentColor" size={20} />
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 px-6"
      >
        <p 
          style={{ fontFamily: "'Homemade Apple', cursive" }}
          className="text-2xl text-rose-400/80 leading-relaxed"
        >
          {isSealed 
            ? "Your heart is safe with me, always. ❤️" 
            : "A commitment that time will never fade."}
        </p>
      </motion.div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Montserrat:wght@700&display=swap');
      `}</style>
    </section>
  );
}