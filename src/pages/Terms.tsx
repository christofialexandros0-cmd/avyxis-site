import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-narrow py-12 md:py-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        
        <h1 className="text-h2-mobile md:text-h2 text-foreground mb-4">
          Terms of Service — Avyxis
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> January 12, 2026
          </p>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms govern your use of https://avyxis.com and any inquiry or service engagement with Avyxis.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">2. No medical advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              Avyxis provides marketing and automation services. Nothing on this website constitutes medical advice.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">3. Inquiries</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you submit an inquiry, you agree that we may contact you about your request using the details you provide.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">4. No guarantees</h2>
            <p className="text-muted-foreground leading-relaxed">
              We aim to deliver high-quality automation work; however, business outcomes (leads, bookings, revenue) depend on many factors outside our control. Any examples are illustrative unless explicitly agreed in writing.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">5. Intellectual property</h2>
            <p className="text-muted-foreground leading-relaxed">
              Website content and materials are owned by Avyxis unless otherwise stated.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Limitation of liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Avyxis will not be liable for indirect or consequential damages arising from your use of the website or services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">7. Changes</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms from time to time. The latest version will be posted on this page.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">8. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions:{" "}
              <a href="mailto:hello@avyxis.com" className="text-primary hover:underline">
                hello@avyxis.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
