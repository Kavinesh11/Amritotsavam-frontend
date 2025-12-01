import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import natarajaHero from "@assets/generated_images/lord_nataraja_dancing_cosmic_dance.png";
import templeBg from "@assets/generated_images/ancient_indian_temple_stone_texture_background.png";
import cornerOrnament from "@assets/generated_images/traditional_indian_mandala_corner_ornament.png";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/components/ui/loader";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const natarajaRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      // 1. Background Parallax (Slow)
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 2. Nataraja Parallax (Fast & Foreground)
      gsap.to(natarajaRef.current, {
        yPercent: -10, // Moves slightly up against scroll for depth
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 3. "Collapse like a mountain" Text Effect
      // Text starts huge and centered, then scales down and moves to its place or fades
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "50% top", // Finish animation by the time we scroll half the viewport
          scrub: 1,
        }
      });

      tl.to(titleRef.current, {
        scale: 0.6, // Shrink
        y: 200, // Move down "collapsing"
        opacity: 0.5, // Fade slightly
        transformOrigin: "bottom center",
        ease: "power2.inOut"
      });

      // Entrance Animations (Once loading is done)
      gsap.from(natarajaRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out"
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 100,
        duration: 1.5,
        delay: 0.5,
        ease: "elastic.out(1, 0.7)"
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <div ref={containerRef} className={`min-h-screen flex flex-col bg-transparent transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
          
          {/* 1. Distinct Background Image */}
          <div 
            ref={bgRef}
            className="absolute inset-0 z-0 scale-110"
            style={{
              backgroundImage: `url(${templeBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-background/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
          </div>

          {/* 2. Foreground Nataraja (Parallax Subject) */}
          <div 
            ref={natarajaRef}
            className="absolute z-10 bottom-0 md:right-10 w-full md:w-auto flex justify-center md:justify-end pointer-events-none opacity-90 mix-blend-hard-light md:mix-blend-normal"
          >
            <img 
              src={natarajaHero} 
              alt="Lord Nataraja" 
              className="h-[60vh] md:h-[85vh] object-contain drop-shadow-2xl filter contrast-125 brightness-110"
            />
          </div>

          {/* 3. Main Content & Text */}
          <div className="relative z-20 text-center px-4 max-w-7xl mx-auto -mt-20 md:mt-0 w-full">
            <div ref={titleRef} className="mb-8 transform-gpu origin-bottom">
              <span className="font-display italic text-xl md:text-4xl text-primary/90 block mb-4 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] tracking-widest">
                The Cosmic Dance of
              </span>
              
              {/* Responsive Typography */}
              <h1 className="font-heading text-[12vw] md:text-[8rem] lg:text-[10rem] font-black text-primary drop-shadow-2xl tracking-tighter leading-[0.8] bg-clip-text text-transparent bg-gradient-to-b from-primary via-primary to-secondary py-4">
                AMRITOTSVAM
              </h1>
              
              <div className="h-1 md:h-2 w-24 md:w-48 bg-secondary mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(180,145,69,0.9)]" />
            </div>

            <div ref={contentRef} className="max-w-3xl mx-auto px-4 backdrop-blur-sm bg-background/10 rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
              <p className="text-lg md:text-2xl text-foreground/90 font-display mb-8 leading-relaxed font-medium drop-shadow-sm">
                Where rhythm meets divinity. Experience the eternal beat of India's soul.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 md:px-10 py-6 md:py-7 font-display rounded-full border-2 border-primary/20 shadow-xl hover:scale-105 transition-transform duration-300">
                  <Link href="/events">
                    Explore Events
                  </Link>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-white/20 backdrop-blur-md border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 md:px-10 py-6 md:py-7 font-display rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Link href="/about">
                    Our Story
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Corners */}
          <img src={cornerOrnament} className="hidden md:block absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 -translate-x-1/4 -translate-y-1/4 opacity-60 pointer-events-none mix-blend-multiply" alt="" />
          <img src={cornerOrnament} className="hidden md:block absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 translate-x-1/4 -translate-y-1/4 scale-x-[-1] opacity-60 pointer-events-none mix-blend-multiply" alt="" />
        </section>

        {/* Featured Events Snippet */}
        <section className="py-20 px-4 container mx-auto relative z-10">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl -z-10 rounded-3xl mx-4 my-10 shadow-2xl border border-secondary/20" />
          
          <div className="text-center py-12 relative">
             <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-[2px] w-12 md:w-24 bg-secondary/50" />
              <img src={cornerOrnament} alt="" className="w-8 h-8 opacity-60" />
              <div className="h-[2px] w-12 md:w-24 bg-secondary/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 drop-shadow-sm">
              Festival Highlights
            </h2>
            <p className="text-xl text-muted-foreground font-display italic max-w-2xl mx-auto">
              Experience the magic of our featured cultural events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-4 md:px-0">
            {[
              { title: "Classical Dance", date: "Dec 15", desc: "Bharatanatyam & Kathak showcase" },
              { title: "Folk Music Night", date: "Dec 16", desc: "Traditional melodies from Rajasthan" },
              { title: "Art Workshop", date: "Dec 17", desc: "Learn Madhubani painting" },
            ].map((item, i) => (
              <div key={i} className="group relative bg-card/60 backdrop-blur-sm border border-secondary/30 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-card/80">
                <div className="absolute top-0 right-0 p-4">
                  <img src={cornerOrnament} className="w-16 h-16 opacity-20 transform rotate-90 transition-transform duration-700 group-hover:rotate-180" alt="" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4 font-sans">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <p className="text-foreground/80 mb-6">{item.desc}</p>
                <div className="flex items-center text-secondary font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                  Details <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}