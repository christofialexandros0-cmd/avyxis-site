import { FileText, Search, FileCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "1",
    title: "You submit the form",
  },
  {
    icon: Search,
    step: "2",
    title: "We review your current lead flow",
  },
  {
    icon: FileCheck,
    step: "3",
    title: "You receive a written plan + quick wins",
  },
];

const AuditProcessSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-h2-mobile md:text-h2 text-foreground mb-3">
            Get a free automation audit
          </h2>
          <p className="text-body-lg text-muted-foreground">
            No call required.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xs font-semibold text-primary mb-1.5">Step {item.step}</div>
              <p className="text-sm font-medium text-foreground">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          We reply by email. If it's a fit, we outline a 30-day build plan.
        </p>
      </div>
    </section>
  );
};

export default AuditProcessSection;
