"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Star, Flower, Camera, X } from "lucide-react";
import { useState } from "react";

const memories = [
    {
        src: "/images/WhatsApp1.jpeg",
        caption: "The smile that made me fall 💖",
        rotate: -3,
    },
    {
        src: "/images/WhatsApp2.jpeg",
        caption: "Us, lost in our own little world 🌍",
        rotate: 2,
    },
    {
        src: "/images/WhatsApp3.jpeg",
        caption: "A moment I'd relive forever 🥹",
        rotate: -2,
    },
    {
        src: "/images/WhatsApp4.jpeg",
        caption: "My favorite place is next to you ❤️",
        rotate: 4,
    },
];

const MemoryGallery = () => {
    const [active, setActive] = useState(null);

    return (
        <section className="py-24 bg-[#fffafb] px-6 relative overflow-hidden">

            {/* ✨ Floating Sparkles in Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <Heart className="absolute top-10 left-[10%] text-pink-300 animate-pulse" size={40} />
                <Camera className="absolute bottom-20 right-[5%] text-rose-300 -rotate-12" size={60} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl font-['Pacifico'] text-rose-500 mb-4">
                    Our Sweet Moments 📸
                </h2>
                <p className="text-pink-400 font-['Quicksand'] font-bold uppercase tracking-widest text-sm">
                    A collection of my favorite days
                </p>
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {memories.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                        onClick={() => setActive(item)}
                        className="cursor-pointer"
                    >
                        {/* Polaroid Style Card */}
                        <div
                            className="bg-white p-3 pb-8 shadow-[0_10px_30px_rgba(255,182,193,0.3)] border border-pink-50"
                            style={{ transform: `rotate(${item.rotate}deg)` }}
                        >
                            <div className="relative overflow-hidden aspect-square rounded-sm mb-4">
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-rose-400/10 opacity-0 hover:opacity-100 transition-opacity" />
                            </div>

                            <p className="font-['Pacifico'] text-rose-400 text-center text-sm md:text-base leading-tight">
                                {item.caption.split(" ").slice(0, 3).join(" ")}...
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {active && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        {/* Background Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActive(null)}
                            className="absolute inset-0 bg-rose-900/60 backdrop-blur-md"
                        />

                        {/* Modal Card */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="relative bg-white p-4 md:p-6 rounded-[32px] max-w-2xl w-full shadow-2xl border-4 border-pink-100"
                        >
                            <button
                                onClick={() => setActive(null)}
                                className="absolute -top-4 -right-4 bg-white text-rose-400 p-2 rounded-full shadow-lg border-2 border-pink-50 hover:bg-rose-50 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="rounded-2xl overflow-hidden border-2 border-pink-50">
                                <img
                                    src={active.src}
                                    alt={active.caption}
                                    className="w-full max-h-[60vh] object-contain bg-pink-50"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <Heart className="mx-auto text-rose-400 mb-2 animate-bounce" fill="currentColor" size={20} />
                                <p className="text-xl md:text-2xl font-['Pacifico'] text-gray-800">
                                    {active.caption}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@500;700&display=swap');
      `}</style>
        </section>
    );
}

export default MemoryGallery;