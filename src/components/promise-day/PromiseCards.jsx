"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Flower2, Heart, MessageCircle, ShieldCheck } from "lucide-react";

const promises = [
  { text: "I promise to always support you 🤍", icon: <ShieldCheck className="text-emerald-400" /> },
  { text: "I promise to listen to you 💬", icon: <MessageCircle className="text-blue-400" /> },
  { text: "I promise to respect you 🌸", icon: <Flower2 className="text-pink-400" /> },
  { text: "I promise to love you endlessly 💕", icon: <Heart className="text-rose-500 fill-current" /> },
];

export default function PromiseCards() {
  return (
    <section className="py-24 px-6 relative bg-[#fffcfc]">
      {/* Decorative background "Love" watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[20vw] font-bold text-rose-900">Always</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 
          style={{ fontFamily: "'Pacifico', cursive" }} 
          className="text-4xl md:text-5xl text-rose-600 mb-4"
        >
          My Promises To You
        </h2>
        <div className="h-1 w-24 bg-rose-200 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
        {promises.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(244, 63, 94, 0.1)" 
            }}
            className="group bg-gradient-to-b from-pink-50 to-white p-8 rounded-[2rem] border border-rose-300 shadow-sm flex items-start gap-6 transition-all"
          >
            {/* Animated Check/Icon Container */}
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>

            <div className="text-left">
              <p 
                style={{ fontFamily: "'Caveat', cursive" }} 
                className="text-3xl text-rose-800 leading-tight"
              >
                {item.text}
              </p>
              <div className="mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 size={12} className="text-rose-300" />
                <span className="text-[10px] uppercase tracking-widest text-rose-300 font-bold">
                  Keep for Eternity
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Pacifico&display=swap');
      `}</style>
    </section>
  );
}