import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, RefreshCw } from "lucide-react";

const PricingSection = () => {
  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding scroll-mt-20">
      <div className="container-narrow">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-h2-mobile md:text-h2 text-foreground mb-3">
            Simple, productized options
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            No hidden fees. No long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {/* Sprint Setup */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Sprint Setup
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                One-time
              </p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Installation + launch of the speed-to-lead system. Full setup, templates, integrations, and handover.
              </p>
              
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToForm}
                className="w-full group"
              >
                Request Pricing
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          {/* Maintenance */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Maintenance
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Monthly
              </p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Monitoring, small updates, and reporting. Keep your system running smoothly with ongoing support.
              </p>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToForm}
                className="w-full group"
              >
                Request Pricing
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
