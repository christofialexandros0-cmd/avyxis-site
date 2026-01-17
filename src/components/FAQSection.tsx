import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to change my website?",
    answer: "No. We integrate with what you already use and keep your current site.",
  },
  {
    question: "How fast is the response?",
    answer: "The goal is under 5 minutes for new inquiries, 24/7.",
  },
  {
    question: "Do you require calls or meetings?",
    answer: "No. Setup is asynchronous via a short intake form and messages.",
  },
  {
    question: "What tools do you work with?",
    answer: "We use Make.com, email, and a tracking sheet, and we connect your booking link.",
  },
  {
    question: "Will this work with my booking system?",
    answer: "Yes. We link directly to your booking page and can tailor messaging.",
  },
  {
    question: "Is this HIPAA compliant?",
    answer: "This is designed for marketing inquiries only and avoids collecting PHI. Please don't submit medical details.",
  },
  {
    question: "How long does setup take?",
    answer: "Typically a few days to go live, depending on your lead sources.",
  },
  {
    question: "What happens after the Sprint?",
    answer: "You can keep Maintenance for monitoring and incremental improvements.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/40 scroll-mt-20">
      <div className="container-narrow">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-h2-mobile md:text-h2 text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know before getting started
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-5 shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4 text-sm">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
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
