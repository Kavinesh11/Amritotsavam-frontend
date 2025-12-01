import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import cornerOrnament from "@assets/generated_images/traditional_indian_mandala_corner_ornament.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-12">
        <SectionHeading 
          title="Our Heritage" 
          subtitle="The story behind Amritotsvam"
        />

        <div className="max-w-4xl mx-auto relative">
           {/* Decorative background element */}
           <img 
            src={cornerOrnament} 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-5 pointer-events-none" 
            alt="" 
          />

          <div className="grid gap-12 font-sans text-lg leading-relaxed text-foreground/80 text-justify">
            <p>
              <span className="font-heading text-5xl float-left mr-4 mt-[-10px] text-primary">A</span>
              mritotsvam is not just a festival; it is a journey back to our roots. Born from a desire to preserve and celebrate the myriad hues of Indian culture, this event brings together artists, performers, and culture enthusiasts from across the nation.
            </p>
            
            <div className="bg-card/50 p-8 border-l-4 border-secondary rounded-r-lg italic font-display text-xl text-primary/80 my-4">
              "Culture is the widening of the mind and of the spirit." - Jawaharlal Nehru
            </div>

            <p>
              Our mission is to create a platform where the ancient traditions of India meet the modern world. From the intricate footwork of classical dance to the soulful strains of Hindustani classical music, from the vibrant colors of folk art to the wisdom of traditional workshops, Amritotsvam offers something for every soul.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white/40 p-6 rounded-lg border border-secondary/20">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Vision</h3>
                <p>To be the premier cultural gathering that bridges generations through the universal language of art and tradition.</p>
              </div>
              <div className="bg-white/40 p-6 rounded-lg border border-secondary/20">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Values</h3>
                <p>Inclusivity, Authenticity, and Reverence for our shared heritage are the pillars upon which Amritotsvam stands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}