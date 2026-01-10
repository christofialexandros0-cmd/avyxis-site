const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-bold text-foreground">
            Avyxis
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Avyxis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
