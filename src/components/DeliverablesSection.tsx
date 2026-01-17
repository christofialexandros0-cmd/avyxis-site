import { Check, Shield } from "lucide-react";

const deliverables = [
  "Lead capture + lead log",
  "Instant lead response (email-first; SMS optional later)",
  "Internal notification routing",
  "Booking link integration",
  "Basic reporting dashboard (via your lead log)",
  "Reliability safeguards (error handling / retries where applicable)",
];

const DeliverablesSection = () => {
  return (
    <section className="section-padding bg-secondary/40 scroll-mt-20">
      <div className="container-narrow">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-h2-mobile md:text-h2 text-foreground mb-3">
            What you get in the Sprint
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Everything installed and ready to run.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50">
            <ul className="space-y-4">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Designed to avoid collecting PHI; marketing inquiry data only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
