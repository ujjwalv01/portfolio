import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Profiles", href: "#profiles" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);


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
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-fit ${
          scrolled
            ? "top-4 backdrop-blur-2xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl rounded-full py-2.5 px-6"
            : "top-6 backdrop-blur-2xl bg-[#0a0a0a]/80 border border-white/10 rounded-full py-3 px-8"
        } ${hidden ? "-translate-y-[200%]" : "translate-y-0"}`}
      >
        <div className="flex items-center justify-between gap-6 md:gap-10">
          <div className="flex items-center gap-5">
            <a href="#about" className="inline-flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-amber-500/30 bg-amber-500/10 shadow-sm text-sm font-bold uppercase tracking-[0.2em] text-amber-500">
                UV
              </span>
              <span className="hidden lg:block text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                Ujjwal
              </span>
            </a>
            
            <div className="hidden md:block h-5 w-[1px] bg-white/20"></div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[14px] font-medium tracking-wide text-amber-500/80 hover:text-amber-500 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>



          {/* Mobile toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="text-amber-500/80 hover:text-amber-500">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 transition-all duration-300 md:hidden ${
          open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="backdrop-blur-2xl bg-black/90 border border-white/10 shadow-2xl rounded-2xl p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-amber-500/80 hover:text-amber-500 hover:bg-amber-500/10 rounded-xl transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
