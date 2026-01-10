import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            AI-Powered Automation for Med Spas
          </div>

          {/* Main headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Book more consultations in 30 days —{" "}
            <span className="text-gradient-hero">without missed leads.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We install an AI lead response + booking automation system for med spas. 
            Done-for-you in 30 days. No calls needed.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToForm}
              className="group"
            >
              Get the free automation audit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
