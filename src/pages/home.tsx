import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/layout/Navbar";
const image1 = "/img1.jpeg";  // Background image - stays fixed


export default function Home() {
  const containerRef = useRef(null);
  const image1Ref = useRef(null);

  return (
    <div className="min-h-screen bg-black">
    <div className="min-h-screen bg-black">
      {/* Navbar - Fixed at top */}
      <Navbar />

      <div ref={containerRef} className="relative">
          <div 
            ref={image1Ref}
            className="w-full h-full"
          >
            <img 
              src={image1} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>


      </div>
    </div>
  );
}