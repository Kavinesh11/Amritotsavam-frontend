import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import saraswatiHero from "@assets/generated_images/goddess_saraswati_with_veena_ethereal_glow.png";
import cornerOrnament from "@assets/generated_images/traditional_indian_mandala_corner_ornament.png";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial setup
      gsap.set(imageRef.current, { scale: 1.4, opacity: 0, filter: "blur(20px)" });
      gsap.set(glowRef.current, { scale: 0, opacity: 0 });
      gsap.set(textRef.current, { y: 50, opacity: 0 });
      gsap.set(contentRef.current, { y: 30, opacity: 0 });

      // 1. Divine Glow Expansion
      tl.to(glowRef.current, {
        scale: 1.5,
        opacity: 0.6,
        duration: 2,
        ease: "power2.inOut",
      })
      
      // 2. Goddess Appearance (Overlapping with glow)
      .to(imageRef.current, {
        scale: 1.1, // Keep it slightly scaled for parallax
        opacity: 1,
        filter: "blur(0px)",
        duration: 2.5,
        ease: "power3.out",
      }, "-=1.5")

      // 3. Text Entrance
      .to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
      }, "-=1.0")

      // 4. Content/Buttons Entrance
      .to(contentRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, "-=0.8");

      // Continuous Floating Animation (Levitation)
      gsap.to(imageRef.current, {
        y: "-=20",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Rotating Glow Animation
      gsap.to(glowRef.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "none",
      });

      // Parallax effect on Scroll
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden perspective-1000">
        
        {/* Divine Aura/Glow Layer */}
        <div 
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(125,28,28,0.1) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Parallax Background Image (Goddess) */}
        <div 
          ref={imageRef}
          className="absolute inset-0 z-0 scale-110 origin-center"
          style={{
            backgroundImage: `url(${saraswatiHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%', // Focused on upper center usually
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
          <div ref={textRef} className="mb-8">
            <span className="font-display italic text-2xl md:text-3xl text-primary/90 block mb-4 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
              Invoking the Divine
            </span>
            <h1 className="font-heading text-7xl md:text-9xl lg:text-[10rem] font-black text-primary drop-shadow-2xl tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-primary via-primary to-secondary">
              AMRITOTSVAM
            </h1>
            <div className="h-1 w-32 bg-secondary mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(180,145,69,0.8)]" />
          </div>

          <div ref={contentRef}>
            <span className="font-display tracking-[0.2em] text-lg md:text-xl text-foreground/90 mt-6 block uppercase font-bold drop-shadow-sm mb-6">
              Celebrating Wisdom, Art & Culture
            </span>

            <p className="text-xl md:text-2xl text-foreground/80 font-display max-w-2xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-sm">
              Join us in a grand celebration under the blessings of Goddess Saraswati.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 font-display rounded-full border-2 border-primary/20 shadow-xl hover:scale-105 transition-transform duration-300 ring-2 ring-offset-2 ring-transparent hover:ring-secondary/50">
                <Link href="/events">
                  Explore Events
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="bg-white/20 backdrop-blur-md border-2 border-primary text-primary hover:bg-primary/10 text-lg px-10 py-7 font-display rounded-full hover:scale-105 transition-transform duration-300 shadow-lg ring-2 ring-offset-2 ring-transparent hover:ring-primary/30">
                <Link href="/about">
                  Our Story
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Corners */}
        <img src={cornerOrnament} className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 -translate-x-1/4 -translate-y-1/4 opacity-60 pointer-events-none mix-blend-multiply animate-in fade-in duration-1000 delay-500" alt="" />
        <img src={cornerOrnament} className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 translate-x-1/4 -translate-y-1/4 scale-x-[-1] opacity-60 pointer-events-none mix-blend-multiply animate-in fade-in duration-1000 delay-500" alt="" />
      </section>

      {/* Featured Events Snippet */}
      <section className="py-20 px-4 container mx-auto relative z-10">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl -z-10 rounded-3xl mx-4 my-10 shadow-2xl border border-secondary/20" />
        
        <SectionHeading 
          title="Festival Highlights" 
          subtitle="Experience the magic of our featured cultural events"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
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
  );
}