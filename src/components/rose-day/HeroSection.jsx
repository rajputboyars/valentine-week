"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Dynamic Background: Slow-Moving Rose Clouds */}
      <div className="absolute inset-0 -z-10 bg-[#fff9fa]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-100/50 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-pink-100/40 rounded-full blur-[120px]"
        />
      </div>

      {/* The Hero Rose with Aura */}
      <div className="relative mb-10">
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 80, 
            damping: 15,
            delay: 0.2 
          }}
          className="relative z-10 text-[100px] md:text-[120px] filter drop-shadow-[0_20px_30px_rgba(225,29,72,0.2)]"
        >
          🌹
        </motion.div>
        
        {/* Orbiting Sparkles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: 360,
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40"
          >
            <Sparkles 
              size={20} 
              className="text-rose-300 absolute" 
              style={{ 
                top: i * 30 + "%", 
                left: i * 20 + "%" 
              }} 
            />
          </motion.div>
        ))}
      </div>

      {/* Typography Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="z-10"
      >
        <h1 
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-5xl md:text-7xl text-rose-950 font-medium tracking-tight"
        >
          Happy <span style={{ fontFamily: "'Alex Brush', cursive" }} className="text-rose-600">Rose Day</span>
        </h1>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="h-[2px] bg-rose-200 mx-auto my-6"
        />

        <p className="mt-4 text-rose-800/60 max-w-xl mx-auto text-lg md:text-xl font-light tracking-wide italic">
          "Just like this rose, you make my life <br />
          beautiful in ways words can't describe."
        </p>
      </motion.div>

      {/* Floating Petal Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ 
            y: "-10vh", 
            opacity: [0, 1, 0],
            x: Math.sin(i) * 100 
          }}
          transition={{ 
            duration: 10 + i * 2, 
            repeat: Infinity, 
            ease: "linear",
            delay: i * 1.5
          }}
          className="absolute text-rose-200/40 pointer-events-none select-none text-xl"
        >
          🌸
        </motion.div>
      ))}

      {/* Font Imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
      `}</style>
    </section>
  );
}