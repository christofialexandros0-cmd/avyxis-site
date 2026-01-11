import { MessageSquare, Calendar, Star, BarChart3 } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Instant Lead Response",
    description: "Email + SMS follow-up automation that responds to new leads within minutes, 24/7.",
    bullet: "Stops leads from going cold.",
  },
  {
    icon: Calendar,
    title: "Booking Handoff",
    description: "Seamless calendar handoff that moves qualified leads into consult bookings automatically.",
    bullet: "Less admin work.",
  },
  {
    icon: Star,
    title: "Review Response Drafts",
    description: "AI-generated review replies that match your brand voice (owner approves or posts).",
    bullet: "Improves reputation & consistency.",
  },
  {
    icon: BarChart3,
    title: "Simple Results Tracking",
    description: "Clear dashboard for lead volume, response time, and booking outcomes.",
    bullet: "Visibility without complexity.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-secondary/40 scroll-mt-20">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-h2-mobile md:text-h2 text-foreground mb-3">
            What We Install
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            A complete automation system designed specifically for med spas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {feature.description}
              </p>
              <p className="text-xs font-medium text-primary">
                {feature.bullet}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Integrations typically include: website forms, email, Google Sheets, and your scheduling link.
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
