import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import cornerOrnament from "@assets/generated_images/traditional_indian_mandala_corner_ornament.png";

const WORKSHOPS = [
  {
    id: 1,
    title: "Madhubani Painting",
    instructor: "Shri R.K. Mishra",
    duration: "3 Hours",
    capacity: 20,
    price: "₹ 500",
    desc: "Learn the ancient art of Madhubani painting from Mithila region."
  },
  {
    id: 2,
    title: "Pottery Making",
    instructor: "Sarah Khan",
    duration: "2 Hours",
    capacity: 15,
    price: "₹ 800",
    desc: "Hands-on workshop on wheel pottery and clay modeling."
  },
  {
    id: 3,
    title: "Classical Vocal",
    instructor: "Pt. A. Sharma",
    duration: "4 Hours",
    capacity: 30,
    price: "₹ 400",
    desc: "Introduction to the basics of Hindustani classical vocal music."
  }
];

export default function Workshops() {
  const { toast } = useToast();

  const handleJoin = (workshop: string) => {
    toast({
      title: "Spot Reserved!",
      description: `You have joined the waitlist for ${workshop}.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-12 relative z-10">
         {/* Background card for readability */}
         <div className="absolute inset-0 bg-background/80 backdrop-blur-xl -z-10 rounded-3xl mx-4 my-8 shadow-2xl border border-secondary/10" />

        <SectionHeading 
          title="Skill Workshops" 
          subtitle="Learn traditional arts from the masters"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {WORKSHOPS.map((ws) => (
            <div key={ws.id} className="relative bg-white/50 border border-secondary/30 p-8 rounded-lg text-center group hover:bg-white/80 transition-colors">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border border-secondary">
                <img src={cornerOrnament} className="w-12 h-12" alt="" />
              </div>
              
              <h3 className="mt-6 text-xl font-display font-bold text-primary mb-2">{ws.title}</h3>
              <p className="text-sm text-muted-foreground italic mb-4">by {ws.instructor}</p>
              
              <p className="text-foreground/80 mb-6">{ws.desc}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm font-medium mb-6 border-t border-b border-secondary/10 py-4">
                <div>
                  <span className="block text-muted-foreground text-xs uppercase">Duration</span>
                  {ws.duration}
                </div>
                <div>
                  <span className="block text-muted-foreground text-xs uppercase">Price</span>
                  {ws.price}
                </div>
              </div>

              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" onClick={() => handleJoin(ws.title)}>
                Join Workshop
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}