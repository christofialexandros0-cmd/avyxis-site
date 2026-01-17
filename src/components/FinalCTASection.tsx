import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h2-mobile md:text-h2 text-foreground mb-4">
            Ready to stop missing inquiries?
          </h2>
          <p className="text-body-lg text-muted-foreground mb-8">
            Get a free audit and see exactly how to speed up your lead response.
          </p>
          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToForm}
            className="group"
          >
            Get a Free Speed-to-Lead Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
