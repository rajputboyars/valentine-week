"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Heart, ArrowRight } from "lucide-react";

export default function StartJourneyCTA() {
  return (
    <section className="py-32 text-center px-6 relative overflow-hidden">
      {/* Soft Background Pulse */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-400 rounded-full blur-[100px] z-0"
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="text-rose-400 animate-pulse" size={20} />
            <span className="text-rose-400 font-serif italic tracking-widest text-sm uppercase">
              Our Story Begins
            </span>
            <Sparkles className="text-rose-400 animate-pulse" size={20} />
          </div>

          <h2 className="font-[Pacifico] text-4xl md:text-5xl text-rose-800 mb-10 leading-snug">
            Ready to start <br /> 
            <span className="text-rose-500">our sweet journey?</span>
          </h2>

          <Link href="/rose-day">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(244, 63, 94, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl transition-all overflow-hidden"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
              
              <Heart className="fill-white group-hover:animate-bounce" size={24} />
              <span>Start Valentine Week</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </motion.button>
          </Link>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-rose-400/80 font-serif italic"
          >
            "Hand in hand, heart to heart..."
          </motion.p>
        </motion.div>
      </div>

      {/* Tailwind Custom Animation for the Shine (Add to your globals.css or tailwind config) */}
      <style jsx>{`
        @keyframes shine {
          100% { left: 125%; }
        }
        .animate-shine {
          animation: shine 0.8s font-serif;
        }
      `}</style>
    </section>
  );
}