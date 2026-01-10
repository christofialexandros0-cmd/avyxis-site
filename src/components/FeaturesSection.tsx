import { MessageSquare, Calendar, Star, BarChart3 } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Instant Lead Response",
    description: "Email & SMS-ready automation that responds to leads within seconds, 24/7.",
  },
  {
    icon: Calendar,
    title: "Booking Handoff",
    description: "Seamless calendar integration that books consultations automatically.",
  },
  {
    icon: Star,
    title: "Review Response Drafts",
    description: "AI-generated responses to reviews that maintain your brand voice.",
  },
  {
    icon: BarChart3,
    title: "Simple Results Tracking",
    description: "Clear dashboard to see leads, bookings, and conversion metrics.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Install
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete automation system designed specifically for medical spas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
