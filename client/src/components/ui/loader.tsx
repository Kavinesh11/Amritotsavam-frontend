import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import kolamPattern from "@assets/generated_images/traditional_white_kolam_pattern.png";
import colorSplash from "@assets/generated_images/vibrant_holi_color_splash.png";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef(null);
  const kolamRef = useRef(null);
  const splashRef = useRef(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            onComplete: () => {
              setIsMounted(false);
              onComplete();
            }
          });
        }
      });

      // Initial state
      gsap.set(kolamRef.current, { scale: 0.8, opacity: 0, rotation: -90 });
      gsap.set(splashRef.current, { scale: 0, opacity: 0 });

      // 1. Kolam draws in (simulated with rotation and fade)
      tl.to(kolamRef.current, {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
      })
      
      // 2. Color Splash Explosion
      .to(splashRef.current, {
        scale: 2,
        opacity: 0.8,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      }, "-=0.5")
      
      // 3. Hold for a moment
      .to({}, { duration: 0.5 });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!isMounted) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Kolam */}
        <img 
          ref={kolamRef}
          src={kolamPattern} 
          alt="Loading..." 
          className="w-64 h-64 object-contain invert dark:invert-0 opacity-80"
        />
        
        {/* Color Splash Overlay */}
        <img 
          ref={splashRef}
          src={colorSplash} 
          alt="" 
          className="absolute inset-0 w-full h-full object-contain mix-blend-multiply"
        />
      </div>
      
      <div className="absolute bottom-10 font-heading text-primary text-xl animate-pulse">
        Loading Amritotsvam...
      </div>
    </div>
  );
}