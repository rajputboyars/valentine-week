"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Sparkles, MessageSquare, Laugh, ShieldCheck, HeartPulse } from "lucide-react";

const journey = [
  { text: "The day we met", icon: <Sparkles />, color: "text-amber-400" },
  { text: "Our first conversation", icon: <MessageSquare />, color: "text-sky-400" },
  { text: "First laugh together", icon: <Laugh />, color: "text-pink-400" },
  { text: "First fight, still together", icon: <ShieldCheck />, color: "text-emerald-400" },
  { text: "Falling more in love every day", icon: <HeartPulse />, color: "text-rose-500" },
];

export default function FullJourneyTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="max-w-4xl mx-auto px-6 py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h2 
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-xs uppercase tracking-[0.5em] text-rose-400 font-bold mb-4"
        >
          Through the years
        </h2>
        <h3 
          style={{ fontFamily: "'Homemade Apple', cursive" }}
          className="text-4xl md:text-5xl text-slate-800"
        >
          Our Journey
        </h3>
      </motion.div>

      <div className="relative">
        {/* The Animated Connector Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 md:-translate-x-1/2" />
        <motion.div 
          style={{ scaleY }}
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-rose-300 to-rose-500 origin-top md:-translate-x-1/2 z-10" 
        />

        <div className="space-y-20">
          {journey.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex flex-col md:flex-row items-center w-full ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Spacer for Desktop Grid */}
              <div className="hidden md:block w-1/2" />

              {/* The Icon Node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                <motion.div 
                  whileInView={{ scale: [0, 1.2, 1], rotate: [0, 10, 0] }}
                  className="w-12 h-12 bg-white border border-rose-100 rounded-full flex items-center justify-center shadow-lg shadow-rose-100/50"
                >
                  <span className={`${item.color}`}>{item.icon}</span>
                </motion.div>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/40 backdrop-blur-sm p-8 rounded-[2rem] border border-rose-50 shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all group"
                >
                  <p 
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed group-hover:text-rose-600 transition-colors"
                  >
                    {item.text}
                  </p>
                  <div className="mt-4 flex gap-1 opacity-30 group-hover:opacity-100 transition-opacity">
                    <div className="w-1 h-1 bg-rose-400 rounded-full" />
                    <div className="w-8 h-[1px] bg-rose-200 mt-[3px]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Font Imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Montserrat:wght@300;700&display=swap');
      `}</style>
    </section>
  );
}