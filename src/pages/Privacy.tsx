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
        
        <h1 className="text-h2-mobile md:text-h2 text-foreground mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Last updated:</strong> January 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Controller & Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Avyxis is the data controller for personal data collected through this website. 
              For any privacy-related inquiries, please contact us at{" "}
              <a href="mailto:hello@avyxis.com" className="text-primary hover:underline">
                hello@avyxis.com
              </a>
              .
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">What Data We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We collect the following information when you submit our audit request form:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Full name</li>
              <li>Clinic name</li>
              <li>Email address</li>
              <li>Website URL (optional)</li>
              <li>Message content (optional)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We also collect basic server logs (IP address, browser type, access times) for security and analytics purposes.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Purpose of Data Collection</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use your data to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mt-2">
              <li>Respond to your audit request</li>
              <li>Provide the automation audit service</li>
              <li>Communicate about our services if you engage with us</li>
              <li>Improve our website and services</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Legal Basis</h2>
            <p className="text-muted-foreground leading-relaxed">
              We process your data based on:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mt-2">
              <li><strong>Pre-contractual steps:</strong> Processing necessary to respond to your inquiry and provide requested information</li>
              <li><strong>Legitimate interests:</strong> Improving our services and website security</li>
              <li><strong>Consent:</strong> For any marketing communications (you can opt out at any time)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal data for 12 months from collection, unless you become a client, 
              in which case we retain data as necessary for our business relationship and legal obligations.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Data Processors</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use the following third-party services to process your data:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Lovable (website hosting)</li>
              <li>Make.com (workflow automation)</li>
              <li>Google Sheets (data storage)</li>
              <li>Zoho Mail (email communications)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Each processor maintains appropriate data protection measures and processes data only as instructed.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">International Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some of our processors may transfer data outside your country of residence. 
              Where this occurs, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses 
              or processor certifications under applicable data protection frameworks.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:hello@avyxis.com" className="text-primary hover:underline">
                hello@avyxis.com
              </a>
              .
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on this page 
              with an updated "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
