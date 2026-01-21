"use client";
import { motion } from "framer-motion";
import { Home, Heart, Anchor, Coffee } from "lucide-react";

const reasons = [
  { text: "You understand me without a single word 🥹", icon: <Heart size={20} /> },
  { text: "Your hugs have the power to heal everything 💗", icon: <Home size={20} /> },
  { text: "In your arms, I am always safe 🏡", icon: <Anchor size={20} /> },
  { text: "You are the quiet peace my heart always needs ❤️", icon: <Coffee size={20} /> },
];

export default function WhyYouFeelLikeHome() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#fffafb]">
      {/* Warm Ambient "Lamp" Light */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100/40 blur-[120px] rounded-full" />
      
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-2 text-rose-400 mb-4"
          >
            <Home size={24} />
          </motion.div>
          <h2 className="font-['Kalam',cursive] text-4xl md:text-5xl text-rose-800">
            Why You Feel Like Home
          </h2>
          <p className="font-serif italic text-rose-400 mt-2">My favorite place in the world is next to you.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: i % 2 === 0 ? -3 : 3, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotate: 0, 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)"
              }}
              className="bg-gradient-to-b from-white to-pink-50 p-6 md:p-8 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border-b-4 border border-rose-200 border-b-rose-300  relative group"
            >
              {/* "Tape" Detail at the top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-rose-50/80 backdrop-blur-sm border border-white/50 rotate-1" />

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-rose-300 group-hover:text-rose-500 transition-colors">
                  {item.icon}
                </div>
                <p className="font-['Kalam',cursive] text-xl md:text-2xl text-rose-900 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap');
      `}</style>
    </section>
  );
}