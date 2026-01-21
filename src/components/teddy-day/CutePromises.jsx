"use client";
import { motion } from "framer-motion";
import { Heart, Sparkles, Smile, ShieldCheck } from "lucide-react";

const promises = [
  { text: "I promise to make you smile", icon: <Smile className="text-amber-400" />, delay: 0 },
  { text: "I promise to protect your heart", icon: <ShieldCheck className="text-rose-400" />, delay: 0.1 },
  { text: "I promise to stand by you", icon: <Heart className="text-pink-400 fill-current" />, delay: 0.2 },
  { text: "I promise to love you forever", icon: <Sparkles className="text-indigo-400" />, delay: 0.3 },
];

export default function CutePromises() {
  return (
    <section className="py-24 bg-[#fff9fa] relative overflow-hidden">
      {/* Soft background "fluff" circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-pink-100 rounded-full blur-[100px] -z-10 opacity-60" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-100 rounded-full blur-[120px] -z-10 opacity-60" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-16"
        >
          <div className="text-6xl mb-4">🧸</div>
          <h2 
            style={{ fontFamily: "'Grand Hotel', cursive" }} 
            className="text-5xl text-rose-500 mb-2"
          >
            Teddy Promises
          </h2>
          <p className="text-rose-300 font-medium tracking-widest uppercase text-xs">
            Soft words, Forever Kept
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promises.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-b from-white to-pink-100 p-8 rounded-3xl shadow-[0_15px_40px_rgba(251,113,133,0.1)] border border-rose-300 hover:border-rose-100 transition-all duration-500"
            >
              {/* Peek-a-boo Teddy Icon */}
              <motion.div 
                className="absolute -top-6 right-8 text-4xl opacity-0 group-hover:opacity-100 group-hover:-top-10 transition-all duration-500"
              >
                🧸
              </motion.div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                
                <p 
                  style={{ fontFamily: "'Fredoka', sans-serif" }} 
                  className="text-2xl text-rose-900 font-semibold"
                >
                  {item.text}
                </p>
              </div>

              {/* Decorative "Stitch" Line */}
              <div className="mt-6 w-full h-[2px] border-b-2 border-dashed border-rose-100 group-hover:border-rose-300 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&family=Grand+Hotel&display=swap');
      `}</style>
    </section>
  );
}