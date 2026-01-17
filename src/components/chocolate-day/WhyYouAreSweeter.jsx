"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const reasons = [
  "Your smile melts my heart 🫠",
  "Your words are sweeter than chocolate 🍬",
  "Your love is my comfort place 💕",
  "You make every day delicious 😋",
];

export default function WhyYouAreSweeter() {
  return (
    <section className="py-24 relative z-10 overflow-hidden bg-[#fff5f6]">
      {/* Decorative background icon */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 text-rose-100 opacity-50"
      >
        <Heart size={300} fill="currentColor" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <header className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-rose-100 p-3 rounded-full mb-4"
          >
            <Heart className="text-rose-500 fill-rose-500" size={24} />
          </motion.div>
          <h2 className="font-[Pacifico] text-4xl text-rose-800 mb-4">
            Sweeter Than Chocolate
          </h2>
          <p className="text-rose-400 font-serif italic">A few reasons why you're my favorite...</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.2,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.03,
                rotate: i % 2 === 0 ? 1 : -1,
                transition: { duration: 0.2 } 
              }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* The "Candy Heart" Shape */}
              <div className="bg-white p-10 rounded-[2.5rem] rounded-tr-none shadow-[0_15px_40px_rgba(244,63,94,0.08)] border border-rose-50 flex items-center justify-center min-h-[160px] relative overflow-hidden">
                {/* Subtle internal glow */}
                <div className="absolute top-0 left-0 w-2 h-full bg-rose-200" />
                
                <p className="font-[Dancing_Script] text-3xl text-rose-900 text-center leading-tight px-4 z-10">
                  {reason}
                </p>

                {/* Decorative mini heart */}
                <Heart 
                  size={16} 
                  className="absolute bottom-4 right-6 text-rose-200 group-hover:text-rose-400 group-hover:scale-125 transition-all" 
                  fill="currentColor" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}