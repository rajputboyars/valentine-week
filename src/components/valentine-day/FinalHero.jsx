"use client";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function FinalHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#fffcfc] overflow-hidden">
      
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

      {/* Central Interactive Heart */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        className="relative mb-12"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-8xl md:text-9xl filter drop-shadow-[0_0_30px_rgba(225,29,72,0.4)]"
        >
          ❤️
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 text-amber-300"
        >
          <Sparkles size={120} className="scale-125 opacity-50" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="z-10"
      >
        <h1 
          // style={{ fontFamily: "'Unbounded'" }}
          className="text-4xl md:text-7xl font-black text-rose-600 tracking-tighter font-serif italic capitalize"
        >
          Happy <br className="md:hidden" /> Valentine’s Day
        </h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 1.5, duration: 1 }}
          className="h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto my-8"
        />

        <p className="text-rose-900/60 max-w-xl mx-auto text-xl md:text-2xl font-serif italic leading-relaxed">
          "This whole week... this whole world... <br />
          was made just for <span className="text-rose-600 font-bold not-italic">YOU</span>."
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          style={{ fontFamily: "'Meow Script', cursive" }}
          className="mt-12 text-5xl md:text-6xl text-rose-400"
        >
          Yours, Forever.
        </motion.div>
      </motion.div>

      {/* Decorative Signature Line */}
      <div className="absolute bottom-10 flex gap-2 opacity-30">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-rose-400 rounded-full" />
        ))}
      </div>

      {/* Font Imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@900&family=Meow+Script&display=swap');
      `}</style>
    </section>
  );
}