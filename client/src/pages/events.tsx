import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Music, Users } from "lucide-react";
import cornerOrnament from "@assets/generated_images/traditional_indian_mandala_corner_ornament.png";
import { useToast } from "@/hooks/use-toast";

const EVENTS = [
  {
    id: 1,
    title: "Nritya Sandhya",
    category: "Dance",
    date: "Dec 15, 2025",
    time: "6:00 PM",
    location: "Main Auditorium",
    description: "An evening dedicated to the classical dance forms of India, featuring Bharatanatyam, Kathak, and Odissi performances by renowned artists.",
    image: cornerOrnament // Placeholder
  },
  {
    id: 2,
    title: "Swar Sangam",
    category: "Music",
    date: "Dec 16, 2025",
    time: "5:30 PM",
    location: "Open Air Theatre",
    description: "A fusion of Hindustani and Carnatic classical music, creating a symphony that transcends boundaries.",
    image: cornerOrnament
  },
  {
    id: 3,
    title: "Rang Manch",
    category: "Theatre",
    date: "Dec 17, 2025",
    time: "7:00 PM",
    location: "Black Box Studio",
    description: "Contemporary theatre plays that explore social themes through the lens of Indian mythology.",
    image: cornerOrnament
  },
  {
    id: 4,
    title: "Kavi Sammelan",
    category: "Literature",
    date: "Dec 18, 2025",
    time: "4:00 PM",
    location: "Library Hall",
    description: "A gathering of poets reciting verses in Hindi, Urdu, and regional languages.",
    image: cornerOrnament
  }
];

export default function Events() {
  const { toast } = useToast();

  const handleRegister = (eventName: string) => {
    toast({
      title: "Registration Successful!",
      description: `You have successfully registered for ${eventName}.`,
      variant: "default", // Using default as we haven't customized "success" variant yet
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-12">
        <SectionHeading 
          title="Cultural Events" 
          subtitle="Witness the spectacle of art and performance"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mt-8">
          {EVENTS.map((event) => (
            <div key={event.id} className="group flex flex-col md:flex-row bg-card border border-secondary/20 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="md:w-1/3 bg-primary/5 relative flex items-center justify-center p-8">
                <img 
                  src={event.image} 
                  alt="" 
                  className="w-full h-full object-contain opacity-50 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block px-3 py-1 bg-secondary/20 text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-foreground/70 text-sm mb-6 line-clamp-2 font-sans">
                  {event.description}
                </p>
                
                <div className="space-y-2 text-sm font-medium text-muted-foreground mt-auto">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-secondary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-secondary" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    {event.location}
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => handleRegister(event.title)}
                >
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}