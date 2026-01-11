import { Check } from "lucide-react";

const weeks = [
  {
    week: 1,
    title: "Discovery & Setup",
    tasks: [
      "Confirm your lead sources and booking flow",
      "Collect access (forms, inbox, calendar link)",
      "Map the ideal response sequence",
    ],
  },
  {
    week: 2,
    title: "Build & Configure",
    tasks: [
      "Build automation sequences",
      "Configure email/SMS templates",
      "Set up calendar handoff logic",
    ],
  },
  {
    week: 3,
    title: "Test & Refine",
    tasks: [
      "Run test scenarios end-to-end",
      "Tune timing and messaging",
      "Confirm tracking and internal alerts",
    ],
  },
  {
    week: 4,
    title: "Launch & Handover",
    tasks: [
      "Go live with automation",
      "Provide walkthrough + documentation",
      "Finalize dashboard setup",
    ],
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-padding bg-secondary/40 scroll-mt-20">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-h2-mobile md:text-h2 text-foreground mb-3">
            30-Day Implementation Timeline
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            From kickoff to fully operational — without disrupting your practice.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {weeks.map((week, index) => (
              <div
                key={week.week}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-10 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-semibold text-sm z-10">
                  {week.week}
                </div>

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <div className="bg-card rounded-2xl p-5 shadow-card border border-border/50">
                    <div className="text-xs font-semibold text-primary mb-1.5">Week {week.week}</div>
                    <h3 className="text-base font-semibold text-foreground mb-3">
                      {week.title}
                    </h3>
                    <ul className="space-y-2">
                      {week.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{task}</span>
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
