import { Check } from "lucide-react";

const weeks = [
  {
    week: 1,
    title: "Discovery & Setup",
    tasks: [
      "Audit your current lead flow",
      "Access your tools (CRM, calendar)",
      "Map your ideal response workflow",
    ],
  },
  {
    week: 2,
    title: "Build & Configure",
    tasks: [
      "Build automation sequences",
      "Configure SMS & email templates",
      "Set up calendar integration",
    ],
  },
  {
    week: 3,
    title: "Test & Refine",
    tasks: [
      "Run test scenarios",
      "Refine message timing",
      "Optimize response flows",
    ],
  },
  {
    week: 4,
    title: "Launch & Handover",
    tasks: [
      "Go live with automation",
      "Team training walkthrough",
      "Tracking dashboard setup",
    ],
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            30-Day Implementation Timeline
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From kickoff to fully operational — no disruption to your practice
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {weeks.map((week, index) => (
              <div
                key={week.week}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm z-10">
                  {week.week}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-lg transition-shadow">
                    <div className="text-sm font-medium text-primary mb-2">Week {week.week}</div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      {week.title}
                    </h3>
                    <ul className="space-y-2">
                      {week.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
