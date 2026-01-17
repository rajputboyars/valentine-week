"use client";
import { motion } from "framer-motion";

export default function ForeverMessage() {
  return (
    <section className="py-20 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="max-w-3xl mx-auto bg-pink-100 p-10 rounded-2xl shadow-lg"
      >
        <p className="font-[Dancing_Script] text-3xl text-pink-700">
          No matter what life brings, my promise is simple —  
          I will always choose you 🤍♾️
        </p>
      </motion.div>
    </section>
  );
}
