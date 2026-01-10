import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold text-foreground">
          Avyxis
        </a>
        <Button variant="hero" size="sm" onClick={scrollToForm}>
          Get Free Audit
        </Button>
      </div>
    </header>
  );
};

export default Header;
