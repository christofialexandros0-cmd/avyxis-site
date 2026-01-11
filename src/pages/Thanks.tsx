import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const Thanks = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-h2-mobile md:text-h2 text-foreground mb-4">
          Request received.
        </h1>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          We'll review your info and reply by email. If you don't see a response within 1 business day, check spam or email{" "}
          <a 
            href="mailto:hello@avyxis.com" 
            className="text-primary hover:underline"
          >
            hello@avyxis.com
          </a>
          .
        </p>
        
        <Button asChild variant="outline" size="lg">
          <Link to="/" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Thanks;
