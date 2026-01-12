import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "avyxis_cookie_consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for smoother UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "dismissed");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-up">
      <div className="container-narrow">
        <div className="bg-card border border-border/50 rounded-xl p-4 md:p-5 shadow-card flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              We use essential cookies to make this site work. Learn more in our{" "}
              <Link 
                to="/privacy" 
                className="text-foreground underline hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button 
              variant="hero" 
              size="sm" 
              onClick={handleAccept}
            >
              Accept
            </Button>
            <button
              onClick={handleDismiss}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
