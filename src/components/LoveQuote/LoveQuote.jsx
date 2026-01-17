"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const quotes = [
  "You are my today and all of my tomorrows 💕",
  "Every love story is beautiful, but ours is my favorite 💖",
  "I fell in love with you and never looked back ❤️",
];

export default function LoveQuote() {
  const [quote, setQuote] = useState("");

  // Ensuring hydration safety by setting the quote after mount
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <section className="py-20 px-6 flex justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-2xl w-full"
      >
        {/* Decorative Background Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-rose-100/50 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-pink-100/50 rounded-full blur-2xl" />

        <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-[2.5rem] p-12 md:p-16 text-center shadow-[0_20px_50px_rgba(251,113,133,0.08)]">
          
          {/* Subtle Icon */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-8 text-rose-200"
          >
            <Quote size={40} fill="currentColor" opacity={0.3} />
          </motion.div>

          {/* The Quote with Elegant Handwriting */}
          <AnimatePresence mode="wait">
            {quote && (
              <motion.p
                key={quote}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontFamily: "'Sacramento', cursive" }}
                className="text-4xl md:text-5xl text-rose-800 leading-snug"
              >
                {quote}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Elegant Divider */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-rose-100" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-rose-400"
            >
              ❤️
            </motion.div>
            <div className="h-px w-12 bg-rose-100" />
          </div>

          <p className="mt-4 font-['Montserrat',sans-serif] text-[10px] uppercase tracking-[0.5em] text-rose-300 font-bold">
            Forever & Always
          </p>
        </div>
      </motion.div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sacramento&family=Montserrat:wght@700&display=swap');
      `}</style>
    </section>
  );
}