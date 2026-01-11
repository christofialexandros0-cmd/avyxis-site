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
        
        <h1 className="text-h2-mobile md:text-h2 text-foreground mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Last updated:</strong> January 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Service Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              Avyxis provides automation consulting and implementation services for medical spas, 
              including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mt-2">
              <li>Free automation audits</li>
              <li>30-day AI booking automation sprints</li>
              <li>Lead response automation setup</li>
              <li>Calendar and booking integrations</li>
              <li>Results tracking dashboard configuration</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">No Medical Advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              Avyxis provides business automation services only. We do not provide medical advice, 
              diagnoses, treatment recommendations, or any healthcare-related guidance. 
              Our services relate solely to operational automation and business process optimization. 
              Any medical decisions should be made by qualified healthcare professionals.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by applicable law, Avyxis shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
              whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses 
              resulting from:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mt-2">
              <li>Your use or inability to use our services</li>
              <li>Any third-party integrations or services</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Any other matter relating to our services</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Our total liability for any claims arising from these terms or our services shall not exceed 
              the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment terms for our services are as agreed in the specific proposal or agreement provided to you. 
              The free automation audit is provided at no cost with no obligation. 
              For paid services, payment schedules, amounts, and methods will be clearly stated in your service agreement.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              We treat all information you share with us as confidential. We will not disclose your business information, 
              processes, or data to third parties except as necessary to provide our services 
              (e.g., through our data processors) or as required by law. We expect you to treat any proprietary 
              methodologies or tools we share with you during our engagement with similar confidentiality.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              Upon completion of services and full payment, you will own the automation workflows and configurations 
              we create specifically for your business. Avyxis retains ownership of any pre-existing tools, 
              templates, methodologies, and general know-how used in providing services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction 
              where Avyxis is registered, without regard to conflict of law principles. 
              Any disputes arising from these terms or our services shall be resolved through good-faith negotiation, 
              and if necessary, binding arbitration.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may modify these terms at any time. Changes will be effective when posted to this page. 
              Your continued use of our website or services after changes constitutes acceptance of the modified terms.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For any questions about these terms, please contact us at{" "}
              <a href="mailto:hello@avyxis.com" className="text-primary hover:underline">
                hello@avyxis.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
