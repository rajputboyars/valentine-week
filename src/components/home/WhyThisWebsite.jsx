"use client";
import { motion } from "framer-motion";
import { Check, Heart, Sparkles, Stars } from "lucide-react";

const reasons = [
  { text: "To make you smile, even on the quietest days 😊", icon: <Sparkles size={18} /> },
  { text: "To remind you how incredibly special you are to me 💖", icon: <Heart size={18} /> },
  { text: "To say through code what words alone can't capture 💌", icon: <Stars size={18} /> },
  { text: "To love you in my own digital, creative way 🌸", icon: <Check size={18} /> },
];

export default function WhyThisWebsite() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      {/* Soft Background Accents */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-rose-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-pink-50 rounded-full blur-3xl opacity-60" />

      <div className="max-w-2xl mx-auto relative">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-4"
          >
            <span className="bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              My Intentions
            </span>
          </motion.div>
          <h2 className="font-[Pacifico] text-4xl text-rose-800">
            Why I Made This ✨
          </h2>
        </header>

        <div className="relative space-y-8">
          {/* The Connecting Line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-rose-100 via-rose-200 to-rose-100 hidden sm:block" />

          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 group"
            >
              {/* Animated Icon Circle */}
              <div className="relative z-10 hidden sm:flex w-14 h-14 shrink-0 items-center justify-center bg-white border-2 border-rose-100 rounded-2xl shadow-sm group-hover:border-rose-400 group-hover:scale-110 transition-all duration-300">
                <div className="text-rose-400 group-hover:text-rose-600 transition-colors">
                  {item.icon}
                </div>
              </div>

              {/* Reason Card */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex-1 bg-gradient-to-b from-white to-pink-100 backdrop-blur-sm p-6 rounded-2xl border border-rose-200 shadow-[0_10px_30px_rgba(244,63,94,0.03)] group-hover:shadow-[0_15px_35px_rgba(244,63,94,0.06)] transition-all"
              >
                <p className="font-serif italic text-lg md:text-xl text-rose-900/80 leading-relaxed">
                  "{item.text}"
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-rose-300 text-sm font-medium tracking-tighter italic">
            Everything here is yours, just as I am.
          </p>
        </motion.div>
      </div>
    </section>
  );
}