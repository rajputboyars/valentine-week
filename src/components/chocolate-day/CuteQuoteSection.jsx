"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, Quote } from "lucide-react";

const quotes = [
  "Life is better with chocolate & you 🍫💖",
  "You are my favorite sweetness 😍",
  "Chocolate fades, my love doesn’t 💕",
  "You're the 'extra' in my extraordinary ✨",
  "My heart is wherever you are 🏠❤️",
];

export default function CuteQuoteSection() {
  const [index, setIndex] = useState(0);

  // Auto-cycle quotes every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#fff1f2] relative z-10 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-rose-200/30 blur-3xl rounded-full" />
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-6"
      >
        <div className="relative bg-gradient-to-b from-pink-50 to-pink-100 backdrop-blur-sm border border-rose-300 p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(244,63,94,0.1)] text-center">
          
          {/* Decorative Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-rose-500 p-3 rounded-2xl shadow-lg rotate-12">
            <Quote size={24} className="text-white fill-current" />
          </div>

          <div className="min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-[Dancing_Script] text-3xl md:text-4xl text-rose-800 leading-relaxed"
              >
                {quotes[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {quotes.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-rose-400' : 'w-2 bg-rose-200'}`} 
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIndex((prev) => (prev + 1) % quotes.length)}
            className="mt-8 flex items-center gap-2 mx-auto text-rose-400 text-sm font-medium hover:text-rose-600 transition-colors"
          >
            <Sparkles size={16} />
            Click for more magic
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}