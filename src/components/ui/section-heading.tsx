import { cn } from "@/lib/utils";
const cornerOrnament = "/generated_images/traditional_indian_mandala_corner_ornament.png";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center py-12 relative", className)}>
      <div className="flex items-center justify-center gap-4 mb-2">
        <div className="h-[2px] w-12 md:w-24 bg-secondary/50" />
        <img 
          src={cornerOrnament} 
          alt="" 
          className="w-8 h-8 opacity-60"
        />
        <div className="h-[2px] w-12 md:w-24 bg-secondary/50" />
      </div>
      
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 drop-shadow-sm">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-xl text-muted-foreground font-display italic max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}