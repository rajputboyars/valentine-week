"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Heart, MapPin, Stars } from "lucide-react";
const story = [
    {
        title: "First Chat 💬",
        date: "The beginning of forever",
        description: "Just a simple conversation... little did I know it would turn into my favorite habit.",
        icon: <MessageCircle className="text-pink-400" size={20} />,
        color: "bg-blue-50"
    },
    {
        title: "First Meet 🫶",
        date: "A day etched in my heart",
        description: "Seeing you in front of me made everything else fade away. It just felt right.",
        icon: <Heart className="text-rose-400" size={20} />,
        color: "bg-rose-50"
    },
    {
        title: "First Trip ✈️",
        date: "Adventure with you",
        description: "New places, shared laughs, and moments that made us even closer.",
        icon: <MapPin className="text-orange-400" size={20} />,
        color: "bg-orange-50"
    },
    {
        title: "Today ❤️",
        date: "Always choosing you",
        description: "After everything, my favorite place in the whole world is still right beside you.",
        icon: <Stars className="text-yellow-400" size={20} />,
        color: "bg-yellow-50"
    },
];


const OurStoryTimeline = () => {
    return (
        <section className="py-24 bg-[#fff9fa] px-6 overflow-hidden">
            {/* 📝 Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-5xl font-['Pacifico'] text-rose-500 mb-4">Our Story 💕</h2>
                <div className="w-24 h-1 bg-pink-200 mx-auto rounded-full" />
            </motion.div>

            <div className="max-w-5xl mx-auto relative">
                {/* ✨ Animated Dashed Path Line */}
                <div className="absolute left-1/2 top-0 w-[4px] h-full -translate-x-1/2">
                    <div className="h-full border-l-4 border-dashed border-pink-200" />
                </div>

                {story.map((item, index) => (
                    <div key={index} className="relative mb-24 last:mb-0">
                        {/* Center Icon/Dot */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="absolute left-1/2 top-0 -translate-x-1/2 z-10 w-12 h-12 bg-white rounded-full border-4 border-pink-100 shadow-lg flex items-center justify-center"
                        >
                            {item.icon}
                        </motion.div>

                        {/* Content Wrapper */}
                        <div className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}>

                            {/* Card Container */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className="w-full md:w-[45%]"
                            >
                                <div className={`p-8 rounded-[35px] shadow-xl shadow-pink-100/50 border-2 border-white relative transition-transform hover:rotate-1 hover:scale-[1.02] ${item.color}`}>

                                    {/* Small Decorative Heart */}
                                    <div className="absolute -top-3 -right-3 bg-white p-2 rounded-full shadow-md text-rose-400">
                                        <Heart size={16} fill="currentColor" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm font-bold text-rose-400 font-['Quicksand'] uppercase tracking-wider mb-4">
                                        {item.date}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {item.description}
                                    </p>

                                    {/* Decorative bubble tail */}
                                    <div className={`hidden md:block absolute top-10 w-4 h-4 rotate-45 border-white ${index % 2 === 0
                                        ? "left-[-9px] border-l-2 border-b-2 " + item.color
                                        : "right-[-9px] border-r-2 border-t-2 " + item.color
                                        }`} />
                                </div>
                            </motion.div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block w-[45%]" />
                        </div>
                    </div>
                ))}
            </div>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@500;700&display=swap');
      `}</style>
        </section>
    );
}
export default OurStoryTimeline;