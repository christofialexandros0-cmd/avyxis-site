import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import OutcomesSection from "@/components/OutcomesSection";
import TimelineSection from "@/components/TimelineSection";
import AuditProcessSection from "@/components/AuditProcessSection";
import FAQSection from "@/components/FAQSection";
import AuditFormSection from "@/components/AuditFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <OutcomesSection />
        <TimelineSection />
        <AuditProcessSection />
        <FAQSection />
        <AuditFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
