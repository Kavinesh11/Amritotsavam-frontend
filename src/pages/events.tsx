import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const cornerOrnament = "/generated_images/traditional_indian_mandala_corner_ornament.png";

const EVENTS = [
  {
    id: 1,
    title: "Nritya Sandhya",
    category: "Dance",
    date: "Dec 15, 2025",
    time: "6:00 PM",
    location: "Main Auditorium",
    description: "An evening dedicated to the classical dance forms of India, featuring Bharatanatyam, Kathak, and Odissi performances by renowned artists.",
    fullDescription: "Experience the mesmerizing world of Indian Classical Dance. 'Nritya Sandhya' brings together maestors of Bharatanatyam, Kathak, and Odissi on a single stage. Witness the intricate footwork, expressive abhinaya, and the divine storytelling that defines these ancient art forms. The evening will commence with a traditional lamp lighting ceremony followed by solo and group performances. This event is a tribute to the Natya Shastra and the rich lineage of our gurus.",
    image: cornerOrnament // Placeholder - normally would be a specific event image
  },
  {
    id: 2,
    title: "Swar Sangam",
    category: "Music",
    date: "Dec 16, 2025",
    time: "5:30 PM",
    location: "Open Air Theatre",
    description: "A fusion of Hindustani and Carnatic classical music, creating a symphony that transcends boundaries.",
    fullDescription: "Swar Sangam is a unique musical confluence where the North meets the South. Renowned vocalists and instrumentalists from both Hindustani and Carnatic traditions will engage in a 'Jugalbandi' - a playful yet profound musical dialogue. From the soulful ragas of the North to the mathematical precision of the South, this evening promises to be a treat for all music lovers. Accompanied by the Tabla and Mridangam, the rhythm will resonate with your heartbeat.",
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
    fullDescription: "Rang Manch presents a series of short plays that reimagine Indian mythology in a modern context. How would Mahabharata's Draupadi speak to today's women? What lessons does the Ramayana hold for modern governance? Directed by award-winning playwrights, these performances blend traditional storytelling techniques like Yakshagana and Chhau with contemporary stagecraft. It's a thought-provoking journey through time and morality.",
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
    fullDescription: "The Kavi Sammelan is a celebration of the spoken word. Poets from diverse linguistic backgrounds will grace the stage to recite their original works. From the romantic couplets of Urdu Shayari to the vigorous Veer Ras of Hindi poetry, and the earthy wit of regional dialects, this event captures the literary diversity of India. Join us for an afternoon of laughter, emotion, and profound wisdom wrapped in verse.",
    image: cornerOrnament
  }
];

export default function Events() {
  const { toast } = useToast();
  const [selectedEvent, setSelectedEvent] = useState<typeof EVENTS[0] | null>(null);

  const handleRegister = (eventName: string) => {
    toast({
      title: "Registration Successful!",
      description: `You have successfully registered for ${eventName}.`,
      variant: "default",
    });
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-12 relative z-10">
         {/* Background card for readability over the texture */}
         <div className="absolute inset-0 bg-background/60 backdrop-blur-xl -z-10 rounded-3xl mx-4 my-8 shadow-2xl border border-secondary/10" />

        <SectionHeading 
          title="Cultural Events" 
          subtitle="Witness the spectacle of art and performance"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mt-8">
          {EVENTS.map((event) => (
            <div 
              key={event.id} 
              className="group flex flex-col md:flex-row bg-card/80 border border-secondary/20 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-card/95"
              onClick={() => setSelectedEvent(event)}
            >
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
                </div>
                
                <div className="mt-4 text-primary text-sm font-bold flex items-center">
                  View Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative border border-secondary/30"
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/50 hover:bg-background rounded-full transition-colors text-primary"
              >
                <X size={24} />
              </button>

              {/* Image Section */}
              <div className="md:w-2/5 bg-primary/5 relative flex items-center justify-center p-12 border-r border-secondary/10">
                 <img 
                  src={selectedEvent.image} 
                  alt="" 
                  className="w-full h-full object-contain opacity-80 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10" />
                {/* Ornamental corners for the modal image */}
                <img src={cornerOrnament} className="absolute top-4 left-4 w-16 h-16 opacity-30" alt=""/>
                <img src={cornerOrnament} className="absolute bottom-4 right-4 w-16 h-16 opacity-30 rotate-180" alt=""/>
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-8 md:p-10 overflow-y-auto">
                <span className="inline-block px-3 py-1 bg-secondary/20 text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                  {selectedEvent.category}
                </span>
                
                <h2 className="text-4xl font-heading font-bold text-primary mb-2">{selectedEvent.title}</h2>
                
                <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground mb-8 border-b border-secondary/20 pb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-secondary" />
                    {selectedEvent.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-secondary" />
                    {selectedEvent.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-secondary" />
                    {selectedEvent.location}
                  </div>
                </div>

                <div className="prose prose-stone max-w-none mb-8">
                  <h3 className="font-display text-xl font-bold text-foreground/90 mb-2">About the Event</h3>
                  <p className="text-foreground/80 leading-relaxed font-sans">
                    {selectedEvent.fullDescription}
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    onClick={() => handleRegister(selectedEvent.title)}
                  >
                    Register Now
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    Limited seats available. Registration is first come, first served.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}