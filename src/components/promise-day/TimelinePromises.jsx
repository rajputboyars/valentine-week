"use client";
import { motion } from "framer-motion";
import { Calendar, ShieldCheck, Infinity, Sparkles, Heart } from "lucide-react";

const timeline = [
  { time: "Today", promise: "I choose you, exactly as you are.", icon: <Heart size={20} fill="currentColor" />, color: "text-rose-500" },
  { time: "Tomorrow", promise: "I stand by you through every sunrise.", icon: <Calendar size={20} />, color: "text-pink-500" },
  { time: "Every Challenge", promise: "I protect our peace and our joy.", icon: <ShieldCheck size={20} />, color: "text-rose-400" },
  { time: "Forever", promise: "I love you beyond the reach of time.", icon: <Infinity size={24} />, color: "text-pink-600" },
];

export default function TimelinePromises() {
  return (
    <section className="py-24 bg-[#fffafb] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">

        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 bg-white rounded-2xl shadow-sm border border-rose-50 mb-4"
          >
            <Sparkles className="text-rose-400" />
          </motion.div>
          <h2
            style={{ fontFamily: "'Pacifico', cursive" }}
            className="text-4xl text-rose-700"
          >
            Our Promise Timeline
          </h2>
        </header>

          <div className="relative">
            {/* Central Connecting Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-100 via-rose-300 to-rose-100 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className={`relative flex items-center justify-center md:justify-between w-full ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Time Label (Desktop) */}
                  <div className="hidden md:block w-5/12 text-right px-8">
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-rose-300">
                      {item.time}
                    </span>
                  </div>

                  {/* Central Icon Circle */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      className="w-12 h-12 bg-white rounded-full border-2 border-rose-100 flex items-center justify-center text-rose-500 shadow-sm"
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Promise Card */}
                  <div className="w-full md:w-5/12 pl-16 md:pl-0">
                    <motion.div
                      whileHover={{ scale: 1.02, x: i % 2 === 0 ? -5 : 5 }}
                      className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(251,113,133,0.05)] border border-rose-50 relative group"
                    >
                      <span className="md:hidden block text-[10px] font-bold uppercase tracking-widest text-rose-300 mb-2">
                        {item.time}
                      </span>
                      <p
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                        className={`text-2xl md:text-3xl ${item.color} leading-relaxed`}
                      >
                        {item.promise}
                      </p>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-rose-50/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] pointer-events-none" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Pacifico&display=swap');
      `}</style>
    </section>
  );
}