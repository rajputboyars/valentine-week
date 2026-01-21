"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

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
      
      {/* Background Heart Rain (Floating upwards like a dream) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
            animate={{
              y: "-10vh",
              opacity: [0, 1, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute text-rose-200"
          >
            <Heart size={Math.random() * 20 + 10} fill="currentColor" />
          </motion.div>
        ))}
      </div>
      {/* Decorative Wax Seal background element */}
      <div className="absolute opacity-[0.03] pointer-events-none select-none">
        <span className="text-[20rem]">💌</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-8 py-16 bg-gradient-to-b from-pink-100 to-pink-50 backdrop-blur-sm rounded-[3rem] border-2 border-rose-300 shadow-[0_20px_50px_rgba(251,113,133,0.05)]"
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