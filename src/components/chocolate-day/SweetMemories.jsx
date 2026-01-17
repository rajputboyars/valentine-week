"use client";
import { motion } from "framer-motion";
import { Camera, Heart, Music, MapPin } from "lucide-react";

const memories = [
  { id: 1, title: "First Date", color: "from-rose-100 to-pink-200", icon: <Heart className="w-6 h-6" />, rotate: -3 },
  { id: 2, title: "Our Favorite Cafe", color: "from-orange-100 to-rose-200", icon: <MapPin className="w-6 h-6" />, rotate: 2 },
  { id: 3, title: "Late Night Talks", color: "from-purple-100 to-pink-200", icon: <Music className="w-6 h-6" />, rotate: -2 },
  { id: 4, title: "Special Moments", color: "from-pink-100 to-rose-200", icon: <Camera className="w-6 h-6" />, rotate: 4 },
];

export default function SweetMemories() {
  return (
    <section className="py-24 bg-[#fffafb] relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-10 text-rose-100 rotate-12">
        <Heart size={120} fill="currentColor" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="font-[Pacifico] text-4xl text-rose-600 mb-2">
            Our Sweet Scrapbook 📸
          </h2>
          <p className="text-rose-400 font-serif italic">Every moment with you is a treasure</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {memories.map((memory, i) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ rotate: memory.rotate }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 20,
                transition: { type: "spring", stiffness: 300 } 
              }}
              className="bg-white p-4 pb-10 shadow-xl border border-rose-50 rounded-sm hover:shadow-2xl transition-shadow cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className={`w-full h-48 rounded-sm bg-gradient-to-br ${memory.color} flex flex-col items-center justify-center text-rose-400/60 relative overflow-hidden group`}>
                {/* Glossy overlay effect */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {memory.icon}
                <span className="text-xs mt-2 font-medium tracking-tighter uppercase opacity-50">Memory {memory.id}</span>
              </div>

              {/* Polaroid Caption */}
              <div className="mt-6 text-center">
                <p className="font-[Dancing_Script] text-2xl text-rose-800">
                  {memory.title}
                </p>
                <div className="flex justify-center gap-1 mt-1">
                  {[...Array(3)].map((_, i) => (
                    <Heart key={i} size={8} className="fill-rose-300 text-rose-300" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}