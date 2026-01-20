"use client";
import { motion } from "framer-motion";
import { Sparkles, Sun, Palette, Gem, Heart } from "lucide-react";

const reasons = [
  { text: "You make me smile effortlessly", icon: <Sun className="text-amber-400" />, delay: 0 },
  { text: "You make my world colorful", icon: <Palette className="text-indigo-400" />, delay: 0.1 },
  { text: "You are rare and precious", icon: <Gem className="text-sky-400" />, delay: 0.2 },
  { text: "You make everything better", icon: <Heart className="text-rose-500 fill-rose-500" />, delay: 0.3 },
];

export default function WhyYouAreMyRose() {
  return (
    <section className="py-24 bg-[#fffcfc] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <Sparkles size={120} className="text-rose-300" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-4xl md:text-5xl text-slate-800 font-semibold italic"
          >
            Why You Are My <span className="text-rose-600 not-italic">Rose</span>
          </h2>
          <div className="h-[1px] w-12 bg-rose-200 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.8 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(251, 113, 133, 0.08)" 
              }}
              className="group bg-white p-8 rounded-[2rem] border border-rose-200 transition-all flex items-center gap-6 bg-gradient-to-b from-white to-pink-50"
            >
              {/* Animated Icon Container */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              <div className="flex flex-col">
                <p 
                  style={{ fontFamily: "'Satisfy', cursive" }}
                  className="text-2xl md:text-3xl text-rose-900 leading-tight"
                >
                  {item.text}
                </p>
                <div className="mt-2 h-[2px] w-0 bg-rose-200 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&family=Satisfy&display=swap');
      `}</style>
    </section>
  );
}