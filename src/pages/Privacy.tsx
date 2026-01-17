import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const Privacy = () => {
  return <div className="min-h-screen bg-background">
      <div className="max-w-[760px] mx-auto px-5 md:px-8 pt-12 md:pt-[72px] pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        
        <h1 className="text-[30px] md:text-[40px] leading-[1.15] font-semibold text-foreground mb-4">
          Privacy Policy
        </h1>
        
        <div className="text-base leading-[1.7] text-muted-foreground">
          <p className="mb-8">
            <strong className="text-foreground">Effective date:</strong> January 17, 2026
          </p>
          
          <p className="mb-6">
            Avyxis ("Avyxis," "we," "us," or "our") operates this website to provide information about our services and to allow you to request a Speed-to-Lead Audit and related business communications. This Privacy Policy explains how we collect, use, and share information when you visit our website or contact us.
          </p>
          
          <p className="mb-8 p-4 bg-muted/50 border border-border rounded-lg">
            <strong className="text-foreground">Important:</strong> Please do not submit personal medical information or other sensitive health details through this website form. This site is intended for marketing and business inquiries only.
          </p>
          
          <div className="border-t border-border/50 my-7" />
          
          <section className="mb-8">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-foreground mt-7 mb-2.5">
              1) Information We Collect
            </h2>
            
            <h3 className="text-[18px] font-medium text-foreground mt-[18px] mb-2">
              A) Information you provide
            </h3>
            <p className="mb-4">
              When you fill out a form, request an audit, or contact us, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Name</li>
              <li>Business/clinic name</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>City/state or business location (if provided)</li>
              <li>Message content and any information you choose to include</li>
            </ul>
            
            <h3 className="text-[18px] font-medium text-foreground mt-[18px] mb-2">
              B) Information collected automatically
            </h3>
            <p className="mb-4">
              Like most websites, we (or our hosting providers) may automatically receive certain technical information, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Device and browser type</li>
              <li>Approximate location (derived from IP address)</li>
              <li>Log data related to how you use the website (for example, pages viewed and time spent)</li>
            </ul>
            
            <h3 className="text-[18px] font-medium text-foreground mt-[18px] mb-2">
              C) Cookies and similar technologies
            </h3>
            <p>
              We may use cookies or similar technologies for basic website functionality and to understand site usage. You can control cookies through your browser settings.
            </p>
          </section>
          
          <div className="border-t border-border/50 my-7" />
          
          <section className="mb-8">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-foreground mt-7 mb-2.5">
              2) How We Use Information
            </h2>
            <p className="mb-4">We use information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to inquiries and deliver the requested Speed-to-Lead Audit</li>
              <li>Communicate about our services and next steps you request</li>
              <li>Improve the website, troubleshooting, and security</li>
              <li>Maintain business records and prevent fraud or abuse</li>
            </ul>
          </section>
          
          <div className="border-t border-border/50 my-7" />
          
          <section className="mb-8">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-foreground mt-7 mb-2.5">
              3) How We Share Information
            </h2>
            <p className="mb-4">We may share information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>With service providers that help us operate the website and communications (for example, email delivery, automation tooling, and data storage) solely to provide these services to us</li>
              <li>If required by law, legal process, or to protect rights, safety, and security</li>
            </ul>
            <p>We do not sell personal information.</p>
          </section>
          
          <div className="border-t border-border/50 my-7" />
          
          <section className="mb-8">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-foreground mt-7 mb-2.5">
              4) Data Retention
            </h2>
            <p>
              We keep information for as long as needed to respond to you, provide requested services, maintain business records, and comply with legal obligations. We may delete or anonymize information when it is no longer needed.
            </p>
          </section>
          
          <div className="border-t border-border/50 my-7" />
          
          <section className="mb-8">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-foreground mt-7 mb-2.5">
              5) Security
            </h2>
            <p>
              We use reasonable administrative and technical measures designed to protect information. However, no method of transmission or storage is completely secure.
            </p>
          </section>
          
          <div className="border-t border-border/50 my-7" />
          
          <section className="mb-8">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-foreground mt-7 mb-2.5">
              6) Your Choices
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You can request that we stop contacting you by replying "unsubscribe" to an email or by contacting us at the email address below.</li>
              <li>You can control cookies through your browser settings.</li>
            </ul>
          </section>
          
          <div className="border-t border-border/50 my-7" />
          
          <section className="mb-8">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-foreground mt-7 mb-2.5">
              7) U.S. State Privacy Rights (If Applicable)
            </h2>
            <p>
              Some U.S. states provide privacy rights for residents, including California rights such as the right to know, delete, and opt out of certain sharing practices. If these laws apply to our activities with respect to you, you may request to exercise applicable rights by contacting us.
            </p>
          </section>
          
          <div className="border-t border-border/50 my-7" />
          
          <section className="mb-8">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-foreground mt-7 mb-2.5">
              8) Children's Privacy
            </h2>
            <p>
              This website is not intended for children under 13, and we do not knowingly collect information from children under 13.
            </p>
          </section>
          
          <div className="border-t border-border/50 my-7" />
          
          <section className="mb-8">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-foreground mt-7 mb-2.5">
              9) Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The "Effective date" above reflects the latest version.
            </p>
          </section>
          
          <div className="border-t border-border/50 my-7" />
          
          <section className="mb-8">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-foreground mt-7 mb-2.5">
              10) Contact
            </h2>
            <p className="mb-4">For privacy questions or requests, contact:</p>
            <p>
              Email:{" "}
              <a href="mailto:hello@avyxis.com" className="text-primary hover:underline">
                hello@avyxis.com
              </a>
            </p>
            <p>Business name: Avyxis</p>
            
          </section>
        </div>
      </div>
    </div>;
};
export default Privacy;