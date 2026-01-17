"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Flower2, 
  Gem, 
  Candy, 
  HeartHandshake, 
  Dna, 
  Smile, 
  Flame, 
  Heart 
} from "lucide-react";

const days = [
  { name: "Rose Day", date: "Feb 7", icon: <Flower2 />, link: "/rose-day", color: "bg-rose-50" },
  { name: "Propose Day", date: "Feb 8", icon: <Gem />, link: "/propose-day", color: "bg-blue-50" },
  { name: "Chocolate Day", date: "Feb 9", icon: <Candy />, link: "/chocolate-day", color: "bg-amber-50" },
  { name: "Teddy Day", date: "Feb 10", icon: <Smile />, link: "/teddy-day", color: "bg-orange-50" },
  { name: "Promise Day", date: "Feb 11", icon: <HeartHandshake />, link: "/promise-day", color: "bg-emerald-50" },
  { name: "Hug Day", date: "Feb 12", icon: <Dna />, link: "/hug-day", color: "bg-indigo-50" },
  { name: "Kiss Day", date: "Feb 13", icon: <Flame />, link: "/kiss-day", color: "bg-pink-50" },
  { name: "Valentine Day", date: "Feb 14", icon: <Heart fill="currentColor" />, link: "/valentine-day", color: "bg-rose-100" },
];

export default function ValentineWeekGrid() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-50/50 via-transparent to-transparent -z-10" />

      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-[Pacifico] text-4xl md:text-5xl text-rose-600 mb-4"
          >
            Our Valentine Journey
          </motion.h2>
          <p className="text-rose-400 font-serif italic">Eight days of celebrating us...</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {days.map((day, i) => (
            <motion.div
              key={day.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <Link href={day.link}>
                <div className={`h-full ${day.color} border border-white rounded-[2rem] p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(244,63,94,0.1)] group-hover:bg-white`}>
                  
                  {/* Date Badge */}
                  <span className="inline-block px-3 py-1 bg-white/80 rounded-full text-[10px] font-bold tracking-widest text-rose-400 uppercase mb-4 shadow-sm">
                    {day.date}
                  </span>

                  <div className="text-rose-500 flex justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                    {/* Cloning icon to set size */}
                    {day.icon && (
                      <div className="w-10 h-10 flex items-center justify-center">
                         {Object.assign({}, day.icon, { props: { ...day.icon.props, size: 32 } })}
                      </div>
                    )}
                  </div>

                  <h3 className="text-rose-900 font-bold text-lg mb-1 group-hover:text-rose-600 transition-colors">
                    {day.name}
                  </h3>
                  
                  {/* Decorative line */}
                  <div className="w-0 h-0.5 bg-rose-200 mx-auto group-hover:w-8 transition-all duration-300 mt-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}