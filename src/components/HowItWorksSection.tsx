import { ClipboardList, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: ClipboardList,
    title: "Map Your Flow",
    description: "We map your lead sources + booking flow (async intake).",
  },
  {
    number: "2",
    icon: Settings,
    title: "Install Automations",
    description: "We install the automations + proven reply templates.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Go Live",
    description: "You go live with faster responses and weekly reporting.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding scroll-mt-20">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-h2-mobile md:text-h2 text-foreground mb-3">
            How it works
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Simple, structured setup—done for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
                )}
                
                <div className="relative bg-card rounded-2xl p-5 sm:p-6 shadow-card border border-border/50 text-center z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
