"use client";
import { motion } from "framer-motion";
import { MailOpen, Heart } from "lucide-react";

export default function LoveLetter() {
  const sentence = "From the moment you entered my life, everything changed for the better. I don’t want a future without you in it.";

  return (
    <section className="py-32 px-6 bg-[#fffcfc] relative flex justify-center overflow-hidden">
      
      {/* Decorative Envelope Lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-100 via-rose-300 to-rose-100" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl w-full bg-white p-12 md:p-20 rounded-sm shadow-[0_10px_60px_rgba(0,0,0,0.05)] border border-rose-50 relative"
      >
        {/* The "Wax Seal" Detail */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 bg-rose-700 rounded-full flex items-center justify-center shadow-lg border-4 border-rose-800"
          >
            <Heart size={28} fill="white" className="text-white" />
          </motion.div>
        </div>

        {/* Letter Header */}
        <div className="flex justify-between items-center mb-12 opacity-40">
          <MailOpen size={24} className="text-rose-300" />
          <span className="font-serif italic text-rose-300 tracking-[0.2em] text-xs uppercase">
            Jan 17, 2026
          </span>
        </div>

        <div className="relative">
          {/* Subtle Lined Paper Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(#f1f1f1_1px,transparent_1px)] bg-[size:100%_3rem] pointer-events-none opacity-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            style={{ fontFamily: "'Mrs Saint Delafield', cursive" }}
            className="text-4xl md:text-6xl text-rose-900 text-center leading-[3.5rem] md:leading-[4.5rem] relative z-10 py-4"
          >
            {sentence}
          </motion.p>
        </div>

        {/* Closing */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-16 text-center"
        >
          <div className="h-px w-24 bg-rose-100 mx-auto mb-6" />
          <p className="font-serif italic text-rose-400 text-xl">
            With all my love, always.
          </p>
        </motion.div>
      </motion.div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap');
      `}</style>
    </section>
  );
}