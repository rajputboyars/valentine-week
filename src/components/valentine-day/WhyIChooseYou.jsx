
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

const reasons = [
    {
        front: "You understand me",
        back: "Even when I don’t say a word, you somehow just know 💕",
        color: "bg-rose-100",
        icon: <Heart size={20} className="text-rose-400" fill="currentColor" />,
    },
    {
        front: "You make me smile",
        back: "Your smile fixes days you’ll never know you saved 😊",
        color: "bg-amber-100",
        icon: <Sparkles size={20} className="text-amber-400" />,
    },
    {
        front: "You are my safe place",
        back: "With you, I can be completely myself — no pretending 🤍",
        color: "bg-blue-100",
        icon: <Star size={20} className="text-blue-400" fill="currentColor" />,
    },
    {
        front: "You believe in me",
        back: "You see potential in me even when I doubt myself 🌱",
        color: "bg-emerald-100",
        icon: <Heart size={20} className="text-emerald-400" fill="currentColor" />,
    },
    {
        front: "You feel like home",
        back: "No matter where I am, peace feels like you 🏡",
        color: "bg-purple-100",
        icon: <Sparkles size={20} className="text-purple-400" />,
    },
    {
        front: "You choose me too",
        back: "And that means more to me than words can say ❤️",
        color: "bg-pink-100",
        icon: <Heart size={20} className="text-pink-400" fill="currentColor" />,
    },
];

const WhyIChooseYou = () => {
    return (
        <section className="py-28 bg-[#fffafb] px-6 relative overflow-hidden">
            {/* Decorative background hearts */}
            <div className="absolute top-10 right-10 opacity-10 rotate-12">
                <Heart size={150} fill="#fda4af" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl font-['Pacifico'] text-rose-500 mb-4">
                    Why I Choose You 💞
                </h2>
                <p className="text-rose-300 font-bold uppercase tracking-[0.3em] text-xs">
                    Tap each card to see why
                </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {reasons.map((item, index) => (
                    <FlipCard key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
}

function FlipCard({ item, index }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="h-64 cursor-pointer perspective-1000 group"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 0.6
                }}
                className="relative w-full h-full preserve-3d"
            >
                {/* --- FRONT --- */}
                <div className="absolute inset-0 backface-hidden">
                    <motion.div
                        whileHover={{ y: -5, rotate: index % 2 === 0 ? 1 : -1 }}
                        className={`${item.color} w-full h-full rounded-[40px] shadow-xl shadow-rose-100/50 border-4 border-white flex flex-col items-center justify-center p-6 text-center overflow-hidden`}
                    >
                        {/* Top Sticker Decor */}
                        <div className="absolute -top-2 -right-2 bg-white p-3 rounded-full shadow-md">
                            {item.icon}
                        </div>

                        <p className="text-2xl font-['Pacifico'] text-gray-700 leading-tight">
                            {item.front}
                        </p>

                        {/* Bottom dots */}
                        <div className="absolute bottom-6 flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-white opacity-60" />
                            <div className="w-8 h-2 rounded-full bg-white opacity-60" />
                        </div>
                    </motion.div>
                </div>

                {/* --- BACK --- */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="bg-rose-500 w-full h-full rounded-[40px] shadow-2xl border-4 border-rose-300 flex items-center justify-center p-8 text-center relative overflow-hidden">
                        {/* Background sparkle icons */}
                        <Sparkles className="absolute top-4 left-4 text-rose-300/30" size={40} />
                        <Heart className="absolute bottom-4 right-4 text-rose-300/30" size={40} fill="currentColor" />

                        <p className="text-xl text-white font-['Quicksand'] font-bold leading-relaxed">
                            {item.back}
                        </p>
                    </div>
                </div>
            </motion.div>

            <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        `}</style>
        </div>
    );
}

export default WhyIChooseYou;