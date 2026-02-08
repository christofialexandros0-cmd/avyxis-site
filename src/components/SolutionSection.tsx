import { Inbox, Zap, Users, CalendarCheck, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Inbox,
    title: "Capture",
    description: "Every website inquiry is captured and logged.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Prospects get a fast, professional reply (email-first).",
  },
  {
    icon: Users,
    title: "Route to Team",
    description: "Your staff gets notified instantly with the lead details.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Link",
    description: "Every reply directs prospects to your booking link.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Simple tracking so you can see volume and response speed.",
  },
];

const SolutionSection = () => {
  return (
    <section id="features" className="section-padding bg-secondary/40 scroll-mt-20">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-h2-mobile md:text-h2 text-foreground mb-3">
            The system we install
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            A complete speed-to-lead automation designed specifically for medical spas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-5 sm:p-6 shadow-card border border-border/50 hover:shadow-lg transition-shadow duration-300 ${
                index === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <solution.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {solution.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
