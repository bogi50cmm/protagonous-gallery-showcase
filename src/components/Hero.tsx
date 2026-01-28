import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("usluge");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 md:px-8 text-center pt-20">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-slide-up tracking-tight">
          HIDRO I TERMOIZOLACIJA{" "}
          <span className="text-gradient">POLIUREOM</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Profesionalna usluga izolacije objekata, hidroizolacije krovova i industrijskih podova.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <button onClick={scrollToServices} className="btn-primary">
            Saznaj više
          </button>
          <button onClick={scrollToContact} className="btn-secondary">
            Kontaktirajte nas
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-foreground/50 hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
