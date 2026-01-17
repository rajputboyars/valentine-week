"use client";
import { motion } from "framer-motion";
import { Compass, Smile, Home, Infinity } from "lucide-react";

const reasons = [
  { text: "You understand my silence 🌸", icon: <Compass size={22} />, color: "hover:bg-rose-50" },
  { text: "You are the reason I smile 😊", icon: <Smile size={22} />, color: "hover:bg-amber-50" },
  { text: "You are my safest place 🏡", icon: <Home size={22} />, color: "hover:bg-sky-50" },
  { text: "You are my only forever 💖", icon: <Infinity size={22} />, color: "hover:bg-pink-50" },
];

export default function WhyIChooseYou() {
  return (
    <section className="py-24 bg-[#fffcfc] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        <header className="text-center mb-16 relative">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-rose-300 font-sans text-xs uppercase tracking-[0.4em] block mb-2 font-bold"
          >
            My Intentions
          </motion.span>
          <h2 
            style={{ fontFamily: "'Work Sans', sans-serif" }} 
            className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight"
          >
            Why I <span className="text-rose-500 italic font-serif">Choose</span> You
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            className="h-1 bg-rose-200 mx-auto mt-6 rounded-full"
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className={`group p-8 rounded-[2.5rem] border border-rose-50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 flex flex-col items-center text-center ${item.color}`}
            >
              {/* Icon with a soft background pulse */}
              <div className="mb-6 relative">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-rose-100 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity" 
                />
                <div className="relative text-rose-400 group-hover:text-rose-600 transition-colors">
                  {item.icon}
                </div>
              </div>

              <p 
                style={{ fontFamily: "'Zeyada', cursive" }} 
                className="text-3xl md:text-4xl text-slate-700 leading-tight group-hover:text-rose-900 transition-colors"
              >
                {item.text}
              </p>
              
              {/* Decorative detail */}
              <div className="mt-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-1 h-1 bg-rose-300 rounded-full" />
                <div className="w-8 h-[1px] bg-rose-200 mt-[2px]" />
                <div className="w-1 h-1 bg-rose-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Zeyada&family=Work+Sans:wght@300;600&display=swap');
      `}</style>
    </section>
  );
}