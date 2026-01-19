"use client";
import { motion } from "framer-motion";
import { Camera, Heart } from "lucide-react";
import Image from "next/image";

// You can replace these placeholders with your actual image URLs
const memories = [
  { id: 1, label: "The First Date", rotation: -4, src: "/images/WhatsApp1.jpeg" },
  { id: 2, label: "Summer Walks", rotation: 3, src: "/images/WhatsApp2.jpeg" },
  { id: 3, label: "Laughter & Coffee", rotation: -2, src: "/images/WhatsApp3.jpeg" },
  { id: 4, label: "Our Magic Moment", rotation: 5, src: "/images/WhatsApp4.jpeg" },
];

export default function MemoryGallery() {
  return (
    <section className="py-32 bg-[#fffafb] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <header className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            className="mb-4 text-rose-300"
          >
            <Camera size={40} strokeWidth={1.5} />
          </motion.div>
          <h2
            style={{ fontFamily: "'Pacifico', cursive" }}
            className="text-4xl text-rose-600 text-center"
          >
            Captured in My Heart
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {memories.map((memory, i) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: memory.rotation
              }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 50
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                zIndex: 20,
                y: -10
              }}
              className="relative group"
            >
              {/* The Polaroid Frame */}
              <div className="bg-white p-4 pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-300 rounded-sm">
                <div className="relative aspect-[4/5] overflow-hidden bg-rose-50 rounded-sm">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-rose-200">
                    <Image
                      src={memory.src}
                      alt={memory.label}
                      fill
                      className="object-cover"
                    />
                    <Heart size={48} strokeWidth={1} fill="currentColor" className="opacity-20" />
                  </div>

                  {/* Subtle Filter Overlay */}
                  <div className="absolute inset-0 bg-rose-900/5 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                </div>

                {/* Handwritten Label */}
                <p
                  style={{ fontFamily: "'Nanum Pen Script', crossorigin" }}
                  className="absolute bottom-3 left-0 right-0 text-center text-2xl text-slate-600 tracking-tight"
                >
                  {memory.label}
                </p>
              </div>

              {/* Tape Decorative Element */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-rose-100/40 backdrop-blur-sm -rotate-2 z-10 hidden group-hover:block transition-all" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Pacifico&display=swap');
      `}</style>
    </section>
  );
}