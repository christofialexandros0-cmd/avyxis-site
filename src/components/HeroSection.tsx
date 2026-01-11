import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Wifi, BarChart3 } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const trustItems = [
    { icon: Clock, text: "< 5-minute lead response setup" },
    { icon: Wifi, text: "Asynchronous onboarding" },
    { icon: BarChart3, text: "Dashboard visibility" },
  ];

  return (
    <section className="relative pt-[120px] pb-16 md:pt-[144px] md:pb-24 overflow-hidden">
      {/* Background decoration - subtle */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          {/* Pill label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-6 animate-fade-up">
            AI-Powered Automation for Med Spas
          </div>

          {/* Main headline */}
          <h1 className="text-h1-mobile md:text-h1 text-foreground mb-5 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            Book more consultations in 30 days —{" "}
            <span className="text-gradient-hero">without missed leads.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            We install an AI lead-response + booking automation system for med spas. 
            Done-for-you in 30 days. No calls needed.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToForm}
              className="group w-full sm:w-auto"
            >
              Get the free automation audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <button
              onClick={scrollToFeatures}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              See what we install
            </button>
          </div>

          {/* Trust bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon className="w-4 h-4 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
