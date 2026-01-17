"use client";
import { motion } from "framer-motion";

export default function LoveMessage() {
  return (
    <section className="py-24 px-6 flex justify-center items-center relative overflow-hidden">
      
      {/* Decorative Floating Bokeh */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.4, 0.7, 0.4] 
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 left-[10%] w-32 h-32 bg-rose-200 rounded-full blur-3xl -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl w-full relative"
      >
        {/* The Glassmorphic Card */}
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-12 md:p-20 rounded-[3rem] shadow-[0_30px_100px_rgba(251,113,133,0.12)] text-center relative overflow-hidden group">
          
          {/* Animated Gradient Border Bloom */}
          <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-rose-100/0 via-rose-200/50 to-rose-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {/* The Signature Quote Style */}
            <p 
              style={{ fontFamily: "'Italianno', cursive" }}
              className="text-5xl md:text-7xl text-rose-900 leading-[1.1] mb-6 px-4"
            >
              You are the <span className="text-rose-600 italic">rose</span> that blooms <br className="hidden md:block" />
              in my heart every single day
            </p>

            {/* Subtle Divider */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-[1px] w-8 bg-rose-200" />
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-rose-400 text-2xl"
              >
                🌹
              </motion.span>
              <div className="h-[1px] w-8 bg-rose-200" />
            </div>

            <p className="mt-8 font-serif italic text-rose-400/80 tracking-widest text-sm uppercase">
              Forever Yours
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');
      `}</style>
    </section>
  );
}