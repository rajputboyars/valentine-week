"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Our Roses", href: "#" },
  { name: "The Promise", href: "#" },
  { name: "Sweet Treats", href: "#" },
  { name: "The Big Day", href: "#" },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 px-4 py-4"
    >
      <nav className="max-w-5xl mx-auto bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(244,63,94,0.1)] rounded-3xl px-6 py-3 flex items-center justify-between">
        
        {/* Brand/Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Heart size={28} className="text-rose-500 fill-rose-500" />
          </motion.div>
          <h1 className="font-[Pacifico] text-xl md:text-2xl bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
            My Valentine
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-rose-800/70 font-serif text-sm font-medium hover:text-rose-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 transition-all group-hover:width-full" />
            </Link>
          ))}
        </div>

        {/* Status Pill (The "Wow" Factor) */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-rose-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-rose-200"
        >
          <Sparkles size={14} className="animate-spin-slow" />
          <span className="hidden sm:inline tracking-wider uppercase">My Forever</span>
          <span className="sm:hidden">❤️</span>
        </motion.div>

      </nav>
    </motion.header>
  );
};

export default Header;