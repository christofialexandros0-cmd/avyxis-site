import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Clock, CalendarCheck } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  const trustItems = [
    { icon: MessageCircle, text: "No meetings required (async setup)" },
    { icon: Clock, text: "Installed in days" },
    { icon: CalendarCheck, text: "Works with your booking link" },
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
            Speed-to-Lead Automation for Med Spas
          </div>

          {/* Main headline */}
          <h1 className="text-h1-mobile md:text-h1 text-foreground mb-5 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            Respond to new inquiries in under 5 minutes—
            <span className="text-gradient-hero">automatically.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Avyxis installs a speed-to-lead automation system for medical spas so every form inquiry gets an instant reply, your team gets notified, and more leads convert into bookings.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToForm}
              className="group w-full sm:w-auto"
            >
              Get a Free Speed-to-Lead Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <button
              onClick={scrollToHowItWorks}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              See How It Works
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

          {/* Medical info notice */}
          <p className="text-xs text-muted-foreground mt-8 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Please do not submit personal medical information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
