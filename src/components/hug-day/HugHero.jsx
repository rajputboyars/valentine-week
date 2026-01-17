"use client";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export default function HugHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Soft Breathing Background */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] bg-rose-100/50 rounded-full blur-[100px] -z-10"
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 flex flex-col items-center"
      >
        {/* The Hug Icon */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-rose-50 mb-6">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HeartHandshake size={48} className="text-rose-500" />
          </motion.div>
        </div>

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          style={{ fontFamily: "'Gaegu', cursive" }}
          className="text-6xl md:text-8xl text-rose-600 drop-shadow-sm"
        >
          Happy Hug Day
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ fontFamily: "'Comfortaa', cursive" }}
        className="max-w-md"
      >
        <p className="text-xl md:text-2xl text-rose-400 font-medium leading-relaxed">
          Sending you a warm, digital squeeze... <br />
          <span className="text-rose-500 font-bold italic">my favorite safe place 💞</span>
        </p>
      </motion.div>

      {/* Decorative Floating Hearts */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose-200 opacity-40 hidden md:block"
          style={{
            top: `${20 + i * 20}%`,
            left: i % 2 === 0 ? "15%" : "85%",
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Font Import (Add this to your globals.css or head) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Gaegu:wght@700&display=swap');
      `}</style>
    </section>
  );
}