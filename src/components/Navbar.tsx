import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Profiles", href: "#profiles" },
  { label: "Projects", href: "#projects" },
  { label: "Competitive", href: "#competitive" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);
      setHidden(currentScroll > lastScroll && currentScroll > 120);
      lastScroll = currentScroll;

      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (currentScroll / total) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 w-full h-0.5 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-card/80 border-b border-border/40 py-3 shadow-xl"
            : "bg-transparent py-5"
        } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#about" className="inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-white/5 shadow-sm text-sm font-bold uppercase tracking-[0.3em] text-foreground">
              UV
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
              Ujjwal
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all px-3 py-2 rounded-2xl bg-secondary/70 border border-border/40 hover:bg-secondary/90"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggle}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button onClick={toggle} className="p-2 rounded-lg bg-secondary" aria-label="Toggle theme">
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden glass-card mt-2 mx-4 rounded-xl p-4 animate-fade-up">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
