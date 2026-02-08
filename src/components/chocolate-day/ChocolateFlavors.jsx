"use client";
import { motion } from "framer-motion";
import { Heart, Stars, Coffee, Candy } from "lucide-react";

const chocolates = [
  { 
    icon: <Coffee className="w-8 h-8" />, 
    name: "Dark Truffle", 
    desc: "Deep and intense, just like us.",
    color: "bg-[#fdf0f0]" 
  },
  { 
    icon: <Heart className="w-8 h-8" />, 
    name: "Silk Caramel", 
    desc: "Sweet, smooth, and melts my heart.",
    color: "bg-[#fff5f8]" 
  },
  { 
    icon: <Stars className="w-8 h-8" />, 
    name: "White Velvet", 
    desc: "Pure, bright, and perfectly sweet.",
    color: "bg-[#f9f3ff]" 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function ChocolateFlavors() {
  return (
    <section className="py-20 bg-[#fffafb] relative overflow-hidden">
      {/* Decorative Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 left-10 text-pink-200"
        >
          <Heart fill="currentColor" size={40} />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <header className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-pink-400 font-medium tracking-widest uppercase text-sm"
          >
            A Sweet Treat For You
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mt-2">
            My Favorite Flavors ✨
          </h2>
          <h2 className="text-xl md:text-2xl font-serif text-rose-900 mt-2">
            by Anubhav Chaturvedi
          </h2>
          <div className="w-24 h-1 bg-pink-200 mx-auto mt-4 rounded-full" />
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {chocolates.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className={`${item.color} p-8 rounded-[2rem] border-2 border-rose-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center group`}
            >
              <div className="bg-white p-4 rounded-full text-pink-400 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-rose-800 mb-3">
                {item.name}
              </h3>
              <p className="text-rose-600/70 leading-relaxed italic">
                "{item.desc}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-rose-400 font-serif italic">Which one is your favorite, my love?</p>
        </motion.div>
      </div>
    </section>
  );
}