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
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for hero image
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text fade in and float up
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background Image */}
        <div 
          ref={imageRef}
          className="absolute inset-0 z-0 scale-110"
          style={{
            backgroundImage: `url(${saraswatiHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
        </div>

        {/* Content */}
        <div ref={textRef} className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <div className="mb-6">
            <span className="font-display italic text-2xl md:text-3xl text-primary/90 block mb-2 drop-shadow-md">
              Invoking the Divine
            </span>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-primary drop-shadow-2xl tracking-tight leading-none">
              AMRITOTSVAM
            </h1>
            <span className="font-display tracking-[0.2em] text-lg md:text-xl text-foreground/90 mt-6 block uppercase font-bold drop-shadow-sm">
              Celebrating Wisdom, Art & Culture
            </span>
          </div>

          <p className="text-xl md:text-2xl text-foreground/90 font-display max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md font-medium">
            Join us in a grand celebration under the blessings of Goddess Saraswati.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-display rounded-full border-2 border-primary/20 shadow-xl hover:scale-105 transition-transform duration-300">
              <Link href="/events">
                Explore Events
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 font-display rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
              <Link href="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative Corners with GSAP rotation could be added here too */}
        <img src={cornerOrnament} className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 -translate-x-1/4 -translate-y-1/4 opacity-60 pointer-events-none mix-blend-multiply" alt="" />
        <img src={cornerOrnament} className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 translate-x-1/4 -translate-y-1/4 scale-x-[-1] opacity-60 pointer-events-none mix-blend-multiply" alt="" />
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