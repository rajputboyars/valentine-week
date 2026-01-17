"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

// You can add your actual image URLs here later
const slides = [
  { id: 1, content: "✨", label: "The Beginning", color: "bg-rose-50" },
  { id: 2, content: "☕", label: "Late Night Talks", color: "bg-orange-50" },
  { id: 3, content: "🌅", label: "Beautiful Sunsets", color: "bg-amber-50" },
  { id: 4, content: "🥂", label: "Cheers to Us", color: "bg-pink-50" },
];

export default function LoveSlideshow() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 px-6 bg-[#fffcfd] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4 text-rose-300">
            <Camera size={32} strokeWidth={1} />
          </div>
          <h2 
            style={{ fontFamily: "'Tenor Sans', sans-serif" }}
            className="text-3xl md:text-4xl text-slate-800 uppercase tracking-[0.2em]"
          >
            A Journey In <span className="text-rose-500 italic">Frames</span>
          </h2>
        </motion.div>

        <div className="relative flex items-center justify-center h-[400px]">
          {/* Navigation Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-30 p-3 rounded-full bg-white/80 border border-rose-100 text-rose-400 hover:bg-rose-500 hover:text-white transition-all shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 z-30 p-3 rounded-full bg-white/80 border border-rose-100 text-rose-400 hover:bg-rose-500 hover:text-white transition-all shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slideshow Core */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, x: 100, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -100, rotate: -5 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`w-[280px] md:w-[400px] h-full ${slides[index].color} rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.08)] border-8 border-white flex flex-col items-center justify-center overflow-hidden`}
              >
                {/* Image Placeholder Area */}
                <div className="flex-1 flex items-center justify-center text-8xl group">
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  >
                    {slides[index].content}
                  </motion.span>
                </div>
                
                {/* Caption Bar */}
                <div className="w-full bg-white/60 backdrop-blur-md py-6 px-4 text-center">
                  <p 
                    style={{ fontFamily: "'Pinyon Script', cursive" }}
                    className="text-3xl text-rose-900"
                  >
                    {slides[index].label}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === i ? "w-8 bg-rose-500" : "w-2 bg-rose-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Font Imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&family=Pinyon+Script&display=swap');
      `}</style>
    </section>
  );
}