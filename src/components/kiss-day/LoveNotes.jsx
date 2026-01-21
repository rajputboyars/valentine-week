"use client";
import { motion } from "framer-motion";
import { StickyNote, Heart, Star, Send } from "lucide-react";

const notes = [
  { text: "Your kisses make my whole world stop. 💕", icon: <Heart size={18} />, color: "bg-[#fff9db]" }, // Soft Yellow
  { text: "Every single kiss feels like pure magic. ✨", icon: <Star size={18} />, color: "bg-[#f8f0fc]" },  // Soft Purple
  { text: "I miss your kisses the second you leave. 😘", icon: <Send size={18} />, color: "bg-[#fff0f6]" },   // Soft Pink
];

export default function LoveNotes() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 bg-[#fffafb] border border-rose-300 rounded-[3rem] bg-gradient-to-b from-rose-200 to-rose-100">
      <header className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-4xl text-rose-800 italic"
        >
          Little Reminders
        </motion.h2>
        <div className="flex justify-center mt-2 text-rose-300">
          <StickyNote size={20} />
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {notes.map((note, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 0, 
              zIndex: 10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            className={`${note.color} p-8 rounded-sm shadow-sm relative group cursor-pointer border-t-[30px] border-t-black/5 border border-rose-200`}
          >
            {/* The "Push Pin" Detail */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-400 rounded-full shadow-inner border-2 border-white/50" />

            <div className="flex flex-col h-full justify-between">
              <div className="text-rose-400/50 mb-4 group-hover:text-rose-500 transition-colors">
                {note.icon}
              </div>
              
              <p 
                style={{ fontFamily: "'Indie Flower', cursive" }}
                className="text-2xl text-slate-700 leading-relaxed"
              >
                {note.text}
              </p>
              
              <div className="mt-6 flex justify-end">
                <Heart size={14} className="text-rose-200 fill-current" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Playfair+Display:ital@1&display=swap');
      `}</style>
    </section>
  );
}