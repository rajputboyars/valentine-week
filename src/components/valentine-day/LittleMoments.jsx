"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Star, Flower } from "lucide-react";

const moments = [
    { text: "That day you laughed for no reason 💫", color: "bg-yellow-50", icon: <Sparkles className="text-yellow-400" size={18} /> },
    { text: "When you held my hand a little tighter 🤍", color: "bg-rose-50", icon: <Heart className="text-rose-400" size={18} fill="currentColor" /> },
    { text: "The way you look at me when I’m not watching 🥹", color: "bg-blue-50", icon: <Star className="text-blue-400" size={18} /> },
    { text: "Our inside jokes that no one understands 😄", color: "bg-purple-50", icon: <Flower className="text-purple-400" size={18} /> },
    { text: "Your good morning texts that make my day ☀️", color: "bg-orange-50", icon: <Sparkles className="text-orange-400" size={18} /> },
    { text: "That silence where everything felt perfect 💖", color: "bg-pink-50", icon: <Heart className="text-pink-400" size={18} fill="currentColor" /> },
];

const LittleMoments = () => {
    return (
        <section className="py-24 bg-[#fffafb] px-6 relative overflow-hidden">

            {/* 🌸 Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -left-20 text-pink-100"
                >
                    <Flower size={300} fill="currentColor" />
                </motion.div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-['Pacifico'] text-rose-500 mb-4">
                        Little Moments...
                    </h2>
                    <p className="text-rose-300 font-bold uppercase tracking-[0.3em] text-xs">
                        Big feelings in small things
                    </p>
                </motion.div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {moments.map((moment, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: index % 2 === 0 ? 2 : -2,
                                y: -10
                            }}
                            className={`${moment.color} p-8 rounded-[40px] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] border-2 border-white relative group transition-all`}
                        >
                            {/* ✨ Floating Icon decoration */}
                            <div className="absolute -top-4 -right-2 bg-white p-3 rounded-2xl shadow-sm border border-pink-50 group-hover:animate-bounce">
                                {moment.icon}
                            </div>

                            <div className="flex flex-col h-full justify-center min-h-[120px]">
                                <p className="text-xl font-['Quicksand'] font-bold text-gray-700 leading-relaxed italic">
                                    {moment.text}
                                </p>
                            </div>

                            {/* Decorative Wavy Line at bottom of card */}
                            <div className="mt-4 flex justify-start gap-1 opacity-30">
                                <div className="h-1.5 w-1.5 rounded-full bg-current" />
                                <div className="h-1.5 w-8 rounded-full bg-current" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@500;700&display=swap');
      `}</style>
        </section>
    );
}

export default LittleMoments;