import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
          Privacy Policy — Avyxis
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> January 12, 2026
          </p>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Who we are (Controller)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Avyxis ("we", "us") is the controller for personal data processed via this website.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Contact:{" "}
              <a href="mailto:hello@avyxis.com" className="text-primary hover:underline">
                hello@avyxis.com
              </a>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Website:{" "}
              <a href="https://avyxis.com" className="text-primary hover:underline">
                https://avyxis.com
              </a>
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">2. What data we collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              When you submit forms or contact us, we may collect:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Contact details (e.g., name, email)</li>
              <li>Business details (e.g., clinic name, website)</li>
              <li>Message content you provide</li>
              <li>Basic technical data sent by your browser as part of standard server/security logs (e.g., IP address, user agent)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">3. Why we use your data (purposes)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use your data to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Respond to your inquiry and provide the requested information/audit</li>
              <li>Communicate about our services and next steps</li>
              <li>Maintain internal records of inquiries</li>
              <li>Protect the security and integrity of our systems</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">4. Legal bases</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We process personal data under one or more of the following legal bases:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Legitimate interests (responding to inquiries, operating and securing our services)</li>
              <li>Taking steps at your request prior to entering a contract (when you request information about services)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">5. How long we keep data</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain inquiry data for 12 months from the last interaction, unless a longer period is required by law or needed to establish, exercise, or defend legal claims.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Service providers (processors)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use service providers to operate our website and lead-handling workflow. Depending on your interaction, this may include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Website platform/hosting: Lovable</li>
              <li>Automation/workflows: Make</li>
              <li>Lead logging: Google Sheets</li>
              <li>Email notifications and replies: Zoho Mail</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We share only what is necessary for the relevant function.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">7. International transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some service providers may process data outside your country. Where applicable, we rely on appropriate safeguards made available by those providers for international transfers.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">8. Your rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You may have rights such as access, rectification, erasure, restriction, objection, and data portability (where applicable).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To exercise rights, email{" "}
              <a href="mailto:hello@avyxis.com" className="text-primary hover:underline">
                hello@avyxis.com
              </a>
              . You may also lodge a complaint with your local data protection supervisory authority.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">9. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use essential technologies needed for the site to function. If we add non-essential analytics/marketing cookies, we will present choices where required.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">10. Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy from time to time. The latest version will be posted on this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
