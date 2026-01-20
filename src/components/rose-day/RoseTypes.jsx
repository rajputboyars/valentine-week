"use client";
import { motion } from "framer-motion";

const roses = [
  { 
    color: "🌹", 
    name: "Red Rose", 
    meaning: "My Deepest Love", 
    aura: "bg-rose-400", 
    description: "Symbolizing a passion that only grows stronger." 
  },
  { 
    color: "🌸", 
    name: "Pink Rose", 
    meaning: "Our Sweetness", 
    aura: "bg-pink-300", 
    description: "For the gentleness you bring into my world." 
  },
  { 
    color: "🤍", 
    name: "White Rose", 
    meaning: "My Purest Heart", 
    aura: "bg-slate-200", 
    description: "A promise of a love that is honest and true." 
  },
];

export default function RoseTypes() {
  return (
    <section className="py-24 px-6 bg-[#fffcfc]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h2 
          style={{ fontFamily: "'Prata', serif" }} 
          className="text-4xl md:text-5xl text-slate-800 mb-4"
        >
          Roses Just Like You
        </h2>
        <div className="h-[1px] w-20 bg-rose-200 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {roses.map((rose, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            {/* The Glow Aura behind the rose */}
            <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 ${rose.aura} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

            <div className="bg-gradient-to-b from-white to-pink-100 backdrop-blur-md border border-rose-200 rounded-[3rem] p-10 text-center shadow-[0_15px_40px_rgba(0,0,0,0.02)] h-full flex flex-col items-center">
              
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl mb-8 filter drop-shadow-md"
              >
                {rose.color}
              </motion.div>

              <h3 
                style={{ fontFamily: "'Prata', serif" }} 
                className="text-2xl text-slate-800 mb-2"
              >
                {rose.name}
              </h3>

              <div className="text-rose-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">
                {rose.meaning}
              </div>

              <p 
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-slate-500 text-sm leading-relaxed"
              >
                {rose.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Prata&family=Montserrat:wght@400;700&display=swap');
      `}</style>
    </section>
  );
}