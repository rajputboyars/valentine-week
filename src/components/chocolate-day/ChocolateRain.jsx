"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Heart, Candy, IceCream, Cookie } from "lucide-react";

const icons = [
  <Heart fill="#f43f5e" className="text-rose-500" />,
  <Candy className="text-pink-400" />,
  <Cookie className="text-amber-700" />,
  <Heart fill="#fda4af" className="text-pink-300" />,
];

export default function ChocolateRain() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = gsap.utils.toArray(".falling-item");
    
    elements.forEach((el) => {
      // 1. Randomize starting position and scale
      gsap.set(el, { 
        x: gsap.utils.random(0, window.innerWidth), 
        y: -100, 
        scale: gsap.utils.random(0.5, 1.2),
        opacity: gsap.utils.random(0.4, 0.8)
      });

      // 2. Main falling animation
      gsap.to(el, {
        y: "110vh",
        duration: gsap.utils.random(5, 10),
        repeat: -1,
        ease: "none",
        delay: gsap.utils.random(0, 5),
      });

      // 3. Side-to-side "wobble"
      gsap.to(el, {
        x: "+=50",
        rotation: 360,
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="falling-item absolute"
          style={{ fontSize: '24px' }}
        >
          {icons[i % icons.length]}
        </div>
      ))}
    </div>
  );
}