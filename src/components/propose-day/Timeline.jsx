"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Star, MessageCircle, Heart, Infinity } from "lucide-react";

const moments = [
  { text: "The day we first met", icon: <Star className="text-amber-400" />, delay: 0 },
  { text: "Our first conversation", icon: <MessageCircle className="text-sky-400" />, delay: 0.2 },
  { text: "The moment I fell for you", icon: <Heart className="text-rose-500 fill-current" />, delay: 0.4 },
  { text: "Every memory since then", icon: <Infinity className="text-indigo-400" />, delay: 0.6 },
];

export default function Timeline() {
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
    <section ref={containerRef} className="py-32 bg-[#fffcfc] relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ fontFamily: "'La Belle Aurore', cursive" }}
        className="text-center text-5xl text-rose-600 mb-24"
      >
        Our Story
      </motion.h2>

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* The Animated Connecting Thread */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-10 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-rose-200 via-rose-400 to-rose-200 origin-top hidden md:block" 
        />

        <div className="space-y-24">
          {moments.map((moment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: moment.delay }}
              className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Desktop Spacer */}
              <div className="hidden md:block w-5/12" />

              {/* The "Node" on the timeline */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 bg-white border-2 border-rose-100 rounded-2xl flex items-center justify-center shadow-sm z-10"
                >
                  {moment.icon}
                </motion.div>
              </div>

              {/* The Content Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="w-full md:w-5/12 ml-16 md:ml-0 bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-rose-50 group transition-all"
              >
                <p 
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                  className="text-2xl text-slate-700 font-medium group-hover:text-rose-600 transition-colors"
                >
                  {moment.text}
                </p>
                
                <div className="mt-4 flex gap-1">
                  {[...Array(3)].map((_, dot) => (
                    <div key={dot} className="w-1 h-1 bg-rose-100 rounded-full" />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Quicksand:wght@500;700&display=swap');
      `}</style>
    </section>
  );
}