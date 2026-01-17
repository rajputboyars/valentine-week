"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, PartyPopper } from "lucide-react";

export default function AnimatedYesNo() {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [isAccepted, setIsAccepted] = useState(false);
  const [yesScale, setYesScale] = useState(1);

  const handleNoHover = () => {
    // Moves the button to a random spot within a 300px radius
    const newX = Math.random() * 300 - 150;
    const newY = Math.random() * 300 - 150;
    setNoPos({ x: newX, y: newY });
    // Every time she tries to click "No", the "Yes" button grows bigger!
    setYesScale(prev => prev + 0.15);
  };

  if (isAccepted) {
    return (
      <motion.section 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-32 text-center flex flex-col items-center justify-center"
      >
        <div className="relative mb-6">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <PartyPopper size={80} className="text-rose-500" />
          </motion.div>
          {/* Bursting Hearts */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, scale: 0 }}
              animate={{ opacity: 0, scale: 2, y: -100, x: (i - 2.5) * 40 }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
              className="absolute top-0 left-1/2 text-rose-400"
            >
              <Heart fill="currentColor" />
            </motion.div>
          ))}
        </div>
        <h2 style={{ fontFamily: "'Gaegu', cursive" }} className="text-6xl text-rose-600">
          Yay! I knew it! ❤️
        </h2>
        <p className="mt-4 text-rose-400 font-medium italic italic">Best decision ever, my love.</p>
      </motion.section>
    );
  }

  return (
    <section className="py-24 text-center min-h-[500px] flex flex-col items-center justify-center overflow-hidden relative">
      <h2 style={{ fontFamily: "'Gaegu', cursive" }} className="text-5xl text-rose-600 mb-12">
        Will you be mine forever? 💕
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative h-40 w-full">
        {/* The YES Button */}
        <motion.button
          onClick={() => setIsAccepted(true)}
          animate={{ scale: yesScale }}
          whileHover={{ scale: yesScale + 0.1 }}
          whileTap={{ scale: yesScale - 0.1 }}
          className="z-50 bg-rose-500 text-white px-12 py-5 rounded-[2rem] text-2xl font-bold shadow-[0_15px_30px_rgba(244,63,94,0.3)] cursor-pointer"
        >
          YES! 💖
        </motion.button>

        {/* The NO Button */}
        <motion.button
          animate={{ x: noPos.x, y: noPos.y }}
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoHover}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="bg-slate-200 text-slate-500 px-8 py-4 rounded-full text-lg font-medium shadow-md cursor-not-allowed"
        >
          No 🙈
        </motion.button>
      </div>

      <p className="mt-20 text-slate-300 text-sm italic">
        (Hint: The "No" button is just for decoration...)
      </p>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@700&display=swap');
      `}</style>
    </section>
  );
}