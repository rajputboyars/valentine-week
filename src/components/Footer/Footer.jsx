"use client";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  // Tip: You can calculate the days since you met here
  // const anniversary = new Date('2023-01-01');
  // const days = Math.floor((new Date() - anniversary) / (1000 * 60 * 60 * 24));

  return (
    <footer className="relative mt-32">
      {/* Decorative Wave Transition */}
      <div className="absolute top-[-100px] left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg fill="#fff1f2" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="bg-[#fff1f2] pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-8"
          >
            <Sparkles className="text-rose-300" size={20} />
            <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={24} />
            <Sparkles className="text-rose-300" size={20} />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-rose-900 font-serif italic text-2xl md:text-3xl mb-4">
              "Every chocolate is sweet, but none are as sweet as you."
            </h2>
            
            <div className="h-px w-24 bg-rose-200 mx-auto my-8" />

            <p className="text-rose-400 font-serif text-sm uppercase tracking-[0.2em] mb-2">
              Designed with love for
            </p>
            <p className="text-rose-800 font-[Pacifico] text-4xl mb-10">
              My Favorite Person ✨
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-rose-300 text-xs font-medium uppercase tracking-widest pt-10 border-t border-rose-200/50"
          >
            Forever & Always • 2026
          </motion.div>
        </div>
      </div>
    </footer>
  );
}