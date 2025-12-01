import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroBg from "@assets/generated_images/indian_cultural_festival_hero_background.png";
import cornerOrnament from "@assets/generated_images/traditional_indian_mandala_corner_ornament.png";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/60 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <div className="mb-6 animate-in fade-in zoom-in duration-1000">
            <span className="font-display italic text-2xl md:text-3xl text-primary block mb-2">
              Welcome to
            </span>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-primary drop-shadow-lg tracking-tight leading-none">
              AMRITOTSVAM
            </h1>
            <span className="font-display tracking-[0.2em] text-lg md:text-xl text-foreground/80 mt-4 block uppercase">
              The Festival of Eternal Bliss
            </span>
          </div>

          <p className="text-xl md:text-2xl text-foreground/90 font-display max-w-2xl mx-auto mb-10 leading-relaxed">
            Immerse yourself in a celebration of India's rich heritage, art, and culture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-display rounded-full border-2 border-primary/20 shadow-xl hover:scale-105 transition-transform">
              <Link href="/events">
                Explore Events
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6 font-display rounded-full hover:scale-105 transition-transform">
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative Corners */}
        <img src={cornerOrnament} className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 -translate-x-1/4 -translate-y-1/4 opacity-40 pointer-events-none mix-blend-multiply" alt="" />
        <img src={cornerOrnament} className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 translate-x-1/4 -translate-y-1/4 scale-x-[-1] opacity-40 pointer-events-none mix-blend-multiply" alt="" />
      </section>

      {/* Featured Events Snippet */}
      <section className="py-20 px-4 container mx-auto">
        <SectionHeading 
          title="Festival Highlights" 
          subtitle="Experience the magic of our featured cultural events"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Classical Dance", date: "Dec 15", desc: "Bharatanatyam & Kathak showcase" },
            { title: "Folk Music Night", date: "Dec 16", desc: "Traditional melodies from Rajasthan" },
            { title: "Art Workshop", date: "Dec 17", desc: "Learn Madhubani painting" },
          ].map((item, i) => (
            <div key={i} className="group relative bg-card border border-secondary/30 rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4">
                <img src={cornerOrnament} className="w-16 h-16 opacity-10 transform rotate-90" alt="" />
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