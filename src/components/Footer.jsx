import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 glass-card relative border-t border-border/50 mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm  text-muted-foreground">
        &copy; {new Date().getFullYear()} Pasindu Lakshan, All right reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20}/>
      </a>
    </footer>
  );
};
