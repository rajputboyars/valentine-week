"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Heart } from "lucide-react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, mins: 0, secs: 0, isExpired: false
  });

  useEffect(() => {
    const target = new Date("2026-02-14T00:00:00").getTime();
    
    const calculateTime = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft(prev => ({ ...prev, isExpired: true }));
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / (1000 * 60)) % 60),
          secs: Math.floor((diff / 1000) % 60),
          isExpired: false
        });
      }
    };

    const interval = setInterval(calculateTime, 1000);
    calculateTime();
    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <motion.div 
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/80 backdrop-blur-md border border-rose-300 w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-[0_10px_30px_rgba(251,113,133,0.1)] flex items-center justify-center mb-3"
      >
        <span 
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="text-3xl md:text-4xl font-bold text-rose-600"
        >
          {String(value).padStart(2, '0')}
        </span>
      </motion.div>
      <span 
        style={{ fontFamily: "'Caveat', cursive" }}
        className="text-xl text-rose-400 font-medium"
      >
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-24 bg-[#fffcfc] relative overflow-hidden">
      
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
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <header className="flex flex-col items-center mb-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mb-4 text-rose-200"
          >
            <Clock size={40} />
          </motion.div>
          <h2 className="text-rose-300 font-sans text-xs uppercase tracking-[0.4em] font-bold mb-2">
            The Final Wait
          </h2>
          <h3 
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl text-slate-800 italic"
          >
            Until Our Valentine's Magic
          </h3>
        </header>

        <AnimatePresence mode="wait">
          {timeLeft.isExpired ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center p-10 bg-rose-50 rounded-[3rem] border-2 border-dashed border-rose-200"
            >
              <p className="text-5xl">💘</p>
              <h2 className="text-4xl font-serif text-rose-600 mt-4">It's Our Love Day!</h2>
            </motion.div>
          ) : (
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.mins} label="Minutes" />
              <TimeUnit value={timeLeft.secs} label="Seconds" />
            </div>
          )}
        </AnimatePresence>

        {/* Subtle Heartbeat Pulse background */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-50 rounded-full blur-[100px] -z-10"
        />
      </div>

      {/* Font Imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Caveat:wght@600&family=Playfair+Display:ital@1&display=swap');
      `}</style>
    </section>
  );
}