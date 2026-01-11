import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What tools do you integrate with?",
    answer: "Common integrations include website forms, email, Google Sheets/CRM exports, and scheduling links. We tailor the final stack to what you already use.",
  },
  {
    question: "Do I need to be tech-savvy to use this?",
    answer: "No. We install it done-for-you and provide simple documentation. Your team just receives notifications and handles booked consults.",
  },
  {
    question: "What happens after the 30 days?",
    answer: "You keep the system. Optional ongoing monitoring/optimizations are available if you want us to maintain and improve it.",
  },
  {
    question: "How quickly will I see results?",
    answer: "As soon as the automation is live, inquiries are handled immediately. Booking outcomes depend on your lead flow and offer, but response speed improves right away.",
  },
  {
    question: "Is there a guarantee?",
    answer: "We guarantee implementation of the agreed deliverables. If something isn't installed as scoped, we fix it. (If you want a performance guarantee, we can discuss it in writing.)",
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
