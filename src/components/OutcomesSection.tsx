import { Zap, Target, TrendingUp } from "lucide-react";

const outcomes = [
  {
    icon: Zap,
    title: "Faster response time",
  },
  {
    icon: Target,
    title: "Fewer missed inquiries",
  },
  {
    icon: TrendingUp,
    title: "More consults booked from existing lead flow",
  },
];

const OutcomesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-h2-mobile md:text-h2 text-foreground mb-3">
            What this improves
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <outcome.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">
                {outcome.title}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Results depend on lead volume, offer, and operations. The system ensures every inquiry is handled consistently and quickly.
        </p>
      </div>
    </section>
  );
};

export default OutcomesSection;
