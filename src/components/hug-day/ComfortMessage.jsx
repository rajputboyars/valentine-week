"use client";
import { motion } from "framer-motion";
import { HeartHandshake  } from "lucide-react";

export default function ComfortMessage() {
  return (
    <section className="py-24 px-6 relative flex justify-center">
      {/* Soft pulsating glow behind the card */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute w-64 h-64 bg-rose-200 rounded-full blur-[100px] z-0"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl w-full bg-gradient-to-b from-pink-50 to-pink-100 backdrop-blur-xl border border-rose-300 rounded-[3rem] p-10 md:p-16 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-8 text-rose-400"
        >
          <div className="bg-rose-50 p-4 rounded-full">
            <HeartHandshake  size={40} strokeWidth={1.5} />
          </div>
        </motion.div>

        <h3 className="text-rose-300 font-serif uppercase tracking-[0.25em] text-xs font-bold mb-6">
          Your Safe Space
        </h3>

        <p className="font-serif italic text-2xl md:text-3xl text-rose-950/80 leading-relaxed mb-8">
          "Whenever you feel tired, sad, or overwhelmed..."
        </p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          className="h-1 bg-rose-100 mx-auto mb-8 rounded-full"
        />

        <p className="font-[Pacifico] text-3xl md:text-4xl text-rose-600 drop-shadow-sm">
          My arms are always <br /> 
          <span className="relative">
            open for you
            <motion.span 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -right-12 -top-2 text-4xl"
            >
              ❤️
            </motion.span>
          </span>
        </p>
      </motion.div>
    </section>
  );
}