import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textClass = scrolled ? "text-foreground" : "text-primary-foreground";
  const linkClass = scrolled
    ? "text-foreground/70 hover:text-foreground"
    : "text-primary-foreground/80 hover:text-primary-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-soft border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${scrolled ? "py-3" : "py-6"}`}>
        <Link to="/" className={`flex items-center gap-2 ${textClass}`}>
          <span className="font-display text-xl font-bold">You Lar Agency</span>
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={`text-sm transition-colors ${linkClass}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={`hidden rounded-full px-5 py-2 text-sm font-medium backdrop-blur-md ring-1 transition md:inline-block ${
            scrolled
              ? "bg-primary text-primary-foreground ring-primary/30 hover:bg-primary/90"
              : "bg-primary-foreground/10 text-primary-foreground ring-primary-foreground/20 hover:bg-primary-foreground/20"
          }`}
        >
          Contact Us
        </a>
        <button onClick={() => setOpen(!open)} className={`${textClass} md:hidden`} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mx-6 mb-4 rounded-2xl bg-primary/95 p-6 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-primary-foreground">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
