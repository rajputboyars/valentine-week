"use client";
import { motion } from "framer-motion";

export default function SpecialMessage() {
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 relative flex justify-center items-center overflow-hidden">
      {/* Decorative Wax Seal background element */}
      <div className="absolute opacity-[0.03] pointer-events-none select-none">
        <span className="text-[20rem]">💌</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-8 py-16 bg-white/40 backdrop-blur-sm rounded-[3rem] border border-rose-100/50 shadow-[0_20px_50px_rgba(251,113,133,0.05)]"
      >
        <motion.div
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ fontFamily: "'Petit Formal Script', cursive" }}
          className="text-2xl md:text-4xl text-rose-900 leading-[1.8] md:leading-[2]"
        >
          {"You are not just my Valentine.".split(" ").map((word, i) => (
            <motion.span key={i} variants={letter} className="inline-block mr-2">
              {word}
            </motion.span>
          ))}
          
          <br />

          <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm uppercase tracking-[0.4em] text-rose-400 font-bold block my-6">
            You are my...
          </span>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
            {["best friend,", "home,", "forever person"].map((text, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05, color: "#e11d48" }}
                className="font-black text-3xl md:text-5xl text-rose-600 tracking-tighter"
              >
                {text}
              </motion.span>
            ))}
            <span className="text-4xl">💖</span>
          </div>

          {"I promise to love you more every single day.".split(" ").map((word, i) => (
            <motion.span key={i} variants={letter} className="inline-block mr-2 text-xl md:text-2xl text-rose-800/70">
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtle Signature underline */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "150px" }}
          transition={{ delay: 2, duration: 1.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-12"
        />
      </motion.div>

      {/* Font Imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Petit+Formal+Script&family=Montserrat:wght@400;900&display=swap');
      `}</style>
    </section>
  );
}