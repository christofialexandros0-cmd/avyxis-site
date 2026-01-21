import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import avyxisLogo from "@/assets/avyxis-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <img src={avyxisLogo} alt="Avyxis" className="h-6 w-6" />
            Avyxis
          </div>
          
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <a
              href="mailto:hello@avyxis.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@avyxis.com
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/avyxis_official?igsh=NjMwNHNwYmxzNGJy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1DHE1tGwUk/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/avyxis-med-spa-ai-automation-429a7a3a4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/30">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Avyxis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
