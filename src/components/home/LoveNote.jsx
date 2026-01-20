"use client";
import { motion } from "framer-motion";
import { Heart, Feather } from "lucide-react";

export default function LoveNote() {
  const text = "Hey love, I made this little corner of the internet just for you. Every click, every heart, and every tiny detail here exists simply because of how special you are to me. You make my world so much sweeter than any chocolate ever could. 💖";

  // Splitting text into words for a staggered reveal
  const words = text.split(" ");

  return (
    <section className="py-24 px-6 flex justify-center relative bg-[#fffafb]">
      {/* Decorative Floating Pen Icon */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 right-[10%] text-rose-200 hidden md:block"
      >
        <Feather size={48} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-b from-pink-50 to-pink-100 border border-rose-200 rounded-[2.5rem] shadow-[0_20px_60px_rgba(244,63,94,0.05)] max-w-2xl p-10 md:p-16 text-center"
      >
        {/* The "Wax Seal" / Heart Header */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-rose-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
          <Heart size={20} className="text-white fill-current" />
        </div>

        <h2 className="font-[Pacifico] text-3xl md:text-4xl text-rose-800 mb-8">
          A Note For You 💌
        </h2>

        <div className="flex flex-wrap justify-center gap-x-1.5">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className="font-serif italic text-xl md:text-2xl text-rose-950/80 leading-relaxed"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1 + words.length * 0.08, type: "spring" }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-rose-100 flex flex-col items-center"
        >
          <p className="font-[Dancing_Script] text-3xl text-rose-600">
            Forever Yours,
          </p>
          <div className="mt-2 h-1 w-20 bg-rose-200 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}