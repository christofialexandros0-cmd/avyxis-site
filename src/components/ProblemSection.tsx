import { Clock, PhoneOff, UserX } from "lucide-react";

const problems = [
  {
    icon: Clock,
    text: "Missed inquiries during peak hours",
  },
  {
    icon: PhoneOff,
    text: "Slow follow-up = lost bookings",
  },
  {
    icon: UserX,
    text: "Staff time wasted on manual replies",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-h2-mobile md:text-h2 text-foreground mb-4">
              Leads go cold fast.
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Most med spas miss revenue because inquiries come in when staff is busy—calls, website forms, and DMs pile up, and response times slip. When you reply hours later, prospects have already booked elsewhere.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
