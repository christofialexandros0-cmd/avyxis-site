import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What tools do you integrate with?",
    answer: "We integrate with major CRMs, calendars (Google Calendar, Calendly, Acuity), email platforms, and SMS providers. During the discovery phase, we'll map out your exact tech stack and ensure seamless connections.",
  },
  {
    question: "Do I need to be tech-savvy to use this?",
    answer: "Not at all. We handle all the technical setup and configuration. You'll receive a simple dashboard to monitor results, and your team will get a quick training session on how everything works.",
  },
  {
    question: "What happens after the 30 days?",
    answer: "Your automation system is yours to keep. It runs independently. We offer optional ongoing support and optimization packages if you'd like continued assistance.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Most clients see immediate improvements in lead response time from day one of going live. Booking conversion improvements typically become clear within the first 2-3 weeks of operation.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes. If we don't deliver a working automation system within 30 days as promised, you receive a full refund. We're confident in our process and stand behind our work.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know before getting started
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
