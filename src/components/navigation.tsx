import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Default to dark mode per redesign spec
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const handleNavClick = (href: string) => {
    if (location === "/projects") {
      setLocation("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    if (location === "/projects") {
      setLocation("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* DESKTOP PERSISTENT LEFT RAIL */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-56 flex-col justify-between border-r border-border bg-background/95 backdrop-blur-md z-50 p-6">
        <div className="space-y-8">
          {/* Logo / Monogram */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-left font-mono tracking-widest group"
              data-testid="button-logo"
            >
              <div className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                MUAZ
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5 font-mono">
                FIELD REPORT // 2026
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-3 font-mono text-xs tracking-wider">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-1.5 px-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded transition-all flex items-center justify-between group"
                data-testid={`button-nav-${item.name.toLowerCase()}`}
              >
                <span>{item.name}</span>
                <span className="opacity-0 group-hover:opacity-100 text-[10px] transition-opacity">
                  →
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Rail Footer */}
        <div className="space-y-4 pt-6 border-t border-border font-mono text-xs">
          {/* Online Indicator */}
          <div className="flex items-center gap-2 text-muted-foreground text-[11px]">
            <span className="w-2 h-2 rounded-full bg-ok animate-status-pulse"></span>
            <span className="tracking-wide">● online</span>
          </div>

          {/* Theme Toggle Button */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
              THEME: {isDark ? "DARK" : "LIGHT"}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="w-7 h-7 border-border hover:border-primary"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-3.5 h-3.5 text-primary" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-foreground" />
              )}
            </Button>
          </div>
        </div>
      </aside>

      {/* MOBILE TOP NAVIGATION BAR */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="font-mono text-base font-bold tracking-tight text-foreground"
            data-testid="button-mobile-logo"
          >
            MUAZ <span className="text-xs text-primary font-normal">// FIELD REPORT</span>
          </button>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={toggleTheme}
              data-testid="button-mobile-theme-toggle"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-primary" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <nav className="mt-3 pt-3 border-t border-border flex flex-col space-y-2 font-mono text-xs">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-left px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded transition-colors"
                data-testid={`button-mobile-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
