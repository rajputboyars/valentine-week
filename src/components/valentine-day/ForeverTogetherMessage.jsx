"use client";
import { motion } from "framer-motion";

export default function ForeverTogetherMessage() {
  return (
    <section className="text-center py-20">
      <motion.h2
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-4xl font-bold text-pink-600"
      >
        ♾️ Forever & Always ♾️
      </motion.h2>
    </section>
  );
}
