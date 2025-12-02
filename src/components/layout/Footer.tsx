const cornerOrnament = "/generated_images/traditional_indian_mandala_corner_ornament.png";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground py-12 mt-auto overflow-hidden">
      {/* Corner Ornaments */}
      <img
        src={cornerOrnament}
        alt=""
        className="absolute top-0 left-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rotate-180 opacity-20 pointer-events-none"
      />
      <img
        src={cornerOrnament}
        alt=""
        className="absolute top-0 right-0 w-32 h-32 translate-x-1/2 -translate-y-1/2 -rotate-90 opacity-20 pointer-events-none"
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl mb-6 text-secondary">
          AMRITOTSVAM
        </h2>
        <p className="font-display text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/80">
          Celebrating the timeless heritage and vibrant culture of India. Join us in this magnificent journey of art, music, and tradition.
        </p>
        
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
          <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
          <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
        </div>

        <div className="border-t border-secondary/30 pt-8">
          <p className="text-sm font-sans opacity-60">
            © 2025 Amritotsvam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}