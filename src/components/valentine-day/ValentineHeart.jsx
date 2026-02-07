"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Star, Flower, Cloud, Stars } from "lucide-react";
import { useState, useEffect } from "react";
import { Candy } from "lucide-react";
// import confetti from "canvas-confetti";

const messages = [
    "You're my favorite human! 🦄",
    "I love you more than boba tea 🧋",
    "You make my heart go doki-doki 💓",
    "You're the sprinkles on my cupcake 🧁",
    "Stuck with you & I love it! 🍯",
];

function UltimateValentineHeart() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    // Inject Google Font directly into the component
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    const triggerSurprise = () => {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        setMessage(randomMsg);
        setCount((prev) => prev + 1);

        // Cute Pastel Heart/Circle Confetti
        const scalar = 2;
        const heart = confetti.shapeFromText({ text: "❤️", scalar });

        confetti({
            shapes: [heart, "circle"],
            particleCount: 40,
            spread: 60,
            origin: { y: 0.7 },
            colors: ["#ff85a1", "#fbb1bd", "#f9bec7"],
        });
    };

    return (
        <div className="flex items-center justify-center p-4">
            <section
                style={{ fontFamily: "'Fredoka', sans-serif" }}
                className="relative w-full max-w-md overflow-hidden border-8 border-white bg-[#fff0f3] rounded-[3rem] p-10 shadow-2xl text-center"
            >
                {/* Component-contained Polka Dot Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#ffccd5 2px, transparent 2px)', backgroundSize: '24px 24px' }}
                />

                {/* Floating Icons Background */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-10 left-6 text-pink-200"
                >
                    <Cloud size={40} fill="currentColor" />
                </motion.div>

                <motion.div
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-10 right-6 text-pink-200"
                >
                    <Candy size={32} />
                </motion.div>

                {/* Header */}
                <header className="relative z-10 mb-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="inline-block bg-pink-100 text-pink-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
                    >
                        Valentine's Special
                    </motion.div>
                    <h2 className="text-4xl font-semibold text-pink-500 leading-tight">
                        Tap the Heart!
                    </h2>
                </header>

                {/* The Interaction Area */}
                <div className="relative flex justify-center mb-10">
                    <motion.button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={triggerSurprise}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9, rotate: -5 }}
                        className="group relative z-20 bg-white p-10 rounded-full shadow-[0_12px_0_0_#fbcfe8] hover:shadow-[0_8px_0_0_#fbcfe8] active:shadow-none active:translate-y-[12px] transition-all"
                    >
                        <Heart
                            size={100}
                            fill={isHovered ? "#ff4d6d" : "#ff85a1"}
                            stroke="none"
                            className="drop-shadow-sm transition-colors duration-300"
                        />

                        {/* Pulsing ring */}
                        <span className="absolute inset-0 rounded-full border-4 border-pink-200 animate-ping opacity-25" />
                    </motion.button>

                    {/* Floating Sparkles when clicking */}
                    <AnimatePresence>
                        {count > 0 && (
                            <motion.div
                                key={`sparkle-${count}`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1.5, y: -120 }}
                                exit={{ opacity: 0 }}
                                className="absolute text-yellow-400 pointer-events-none"
                            >
                                <Sparkles />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Message Bubble */}
                <div className="h-20 flex items-center justify-center relative z-10">
                    <AnimatePresence mode="wait">
                        {message ? (
                            <motion.div
                                key={message}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                className="bg-white px-6 py-4 rounded-[2rem] shadow-lg border-b-4 border-pink-100 text-pink-600 font-medium text-lg flex items-center gap-2"
                            >
                                {message}
                            </motion.div>
                        ) : (
                            <div className="text-pink-300 italic">Something sweet is waiting...</div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Progress Tracker */}
                <footer className="mt-8 pt-6 border-t border-pink-100/50">
                    <div className="flex justify-between items-center px-2">
                        <span className="text-pink-400 text-sm font-bold uppercase tracking-tighter">Love Level</span>
                        <div className="flex items-center gap-1">
                            <Stars size={14} className="text-yellow-400 fill-yellow-400" />
                            <span className="text-pink-500 font-bold">{count}</span>
                        </div>
                    </div>
                    <div className="w-full h-4 bg-white rounded-full mt-2 p-1 border border-pink-100">
                        <motion.div
                            animate={{ width: `${Math.min(count * 5, 100)}%` }}
                            className="h-full bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 rounded-full shadow-[0_0_8px_rgba(244,114,182,0.4)]"
                        />
                    </div>
                </footer>
            </section>
        </div>
    );
}

export default UltimateValentineHeart;