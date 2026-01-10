import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TimelineSection from "@/components/TimelineSection";
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
        <TimelineSection />
        <FAQSection />
        <AuditFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
