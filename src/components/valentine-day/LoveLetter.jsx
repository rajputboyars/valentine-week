"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Stars, Sparkles, X } from "lucide-react";

const letterText = `My dearest,

I don’t know when it happened, but somewhere between our silly late-night talks and the way you smile when you're tired — you became my favorite person in the whole world.

You make life feel like a soft, warm hug. You make the hard days easy and the good days magical. Loving you is the easiest thing I’ve ever done.

I promise to be your biggest fan, your best friend, and your forever home. ✨`;

const LoveLetter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (isOpen) {
            let index = 0;
            const typing = setInterval(() => {
                setDisplayedText(letterText.slice(0, index));
                index++;
                if (index > letterText.length) clearInterval(typing);
            }, 40);
            return () => clearInterval(typing);
        } else {
            setDisplayedText("");
        }
    }, [isOpen]);

    return (
        <section className="py-24 bg-[#fff5f8] min-h-screen flex items-center justify-center px-6 overflow-hidden relative">

            {/* 🌸 Floating Background Hearts */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.5],
                            x: Math.sin(i) * 50
                        }}
                        transition={{ duration: 5 + i, repeat: Infinity, delay: i }}
                        className="absolute text-pink-200"
                        style={{ left: `${i * 10}%`, bottom: "10%" }}
                    >
                        <Heart fill="currentColor" size={24} />
                    </motion.div>
                ))}
            </div>

            <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        /* 💌 SEALED ENVELOPE */
                        <motion.div
                            key="envelope"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0, y: -50 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setIsOpen(true)}
                            className="relative cursor-pointer group"
                        >
                            {/* Back Flap */}
                            <div className="w-72 h-48 md:w-96 md:h-64 bg-pink-300 rounded-lg shadow-2xl relative">
                                {/* Envelope Body */}
                                <div className="absolute inset-0 bg-pink-200 clip-envelope z-10" />

                                {/* The "Sticker" Heart */}
                                <motion.div
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg border-4 border-pink-100"
                                >
                                    <Heart className="text-pink-500 fill-pink-500" size={32} />
                                </motion.div>

                                {/* Decorative Washi Tape */}
                                <div className="absolute -top-2 -left-6 w-24 h-8 bg-blue-200/60 rotate-[-30deg] border-x-2 border-dashed border-white/40 z-30" />
                            </div>
                            <p className="text-center mt-8 font-['Pacifico'] text-pink-400 text-xl">
                                Tap to open my heart... ✨
                            </p>
                        </motion.div>
                    ) : (
                        /* 📝 OPENED LETTER CARD */
                        <motion.div
                            key="letter"
                            initial={{ y: 200, opacity: 0, scale: 0.5 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 200, opacity: 0 }}
                            className="relative w-full bg-white p-8 md:p-12 rounded-[40px] shadow-[0_20px_50px_rgba(255,182,193,0.5)] border-4 border-pink-50"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 bg-pink-50 rounded-full text-pink-300 hover:text-pink-500 transition-colors"
                            >
                                <X size={20} strokeWidth={3} />
                            </button>

                            {/* 🎀 Header Sticker */}
                            <div className="flex justify-center mb-6">
                                <div className="bg-yellow-50 px-4 py-1 rounded-full border border-yellow-200 flex items-center gap-2">
                                    <Sparkles size={14} className="text-yellow-500" />
                                    <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest">Only for you</span>
                                </div>
                            </div>

                            {/* Text Area */}
                            <div className="relative">
                                <p className="text-lg md:text-xl text-gray-700 font-['Quicksand'] font-semibold leading-relaxed whitespace-pre-line italic">
                                    {displayedText}
                                    <motion.span
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="inline-block w-2 h-6 bg-pink-300 ml-1 align-middle"
                                    />
                                </p>

                                {/* Signature Animation */}
                                <AnimatePresence>
                                    {displayedText.length >= letterText.length && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="mt-10 text-right"
                                        >
                                            <p className="text-pink-300 text-sm font-bold uppercase tracking-tighter">Forever yours,</p>
                                            <p className="text-4xl md:text-5xl font-['Pacifico'] text-pink-500 mt-1">
                                                your Love ✍️
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Decorative Corner Doodles */}
                            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-lg border-2 border-pink-50 rotate-[-10deg]">
                                <Stars className="text-yellow-400" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@500;700&display=swap');
        
        .clip-envelope {
          clip-path: polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
        </section>
    );
}

export default LoveLetter;