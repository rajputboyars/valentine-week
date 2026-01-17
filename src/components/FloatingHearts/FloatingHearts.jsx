"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const hearts = gsap.utils.toArray(".heart-particle");

    hearts.forEach((heart) => {
      // 1. Initial Random Setup
      gsap.set(heart, {
        x: gsap.utils.random(0, typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: "110vh",
        scale: gsap.utils.random(0.4, 1.2),
        opacity: gsap.utils.random(0.3, 0.7),
        rotation: gsap.utils.random(0, 360),
      });

      // 2. Rising Animation
      gsap.to(heart, {
        y: "-10vh",
        duration: gsap.utils.random(6, 12),
        repeat: -1,
        ease: "none",
        delay: gsap.utils.random(0, 5),
      });

      // 3. Romantic Sway (Horizontal)
      gsap.to(heart, {
        x: "+=60",
        rotation: "+=45",
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 4. Subtle Pulse
      gsap.to(heart, {
        scale: "+=0.2",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  const heartColors = ["text-rose-200", "text-pink-300", "text-rose-400", "text-red-200"];

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`heart-particle absolute bottom-0 ${heartColors[i % heartColors.length]}`}
        >
          <Heart 
            fill="currentColor" 
            size={gsap.utils.random(15, 30)} 
            className="drop-shadow-sm" 
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;