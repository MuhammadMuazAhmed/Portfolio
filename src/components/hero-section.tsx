import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Mail } from "lucide-react";
import resumeFile from "@/assets/resume.pdf";

const pillars = [
  {
    label: "PRODUCT BUILDER",
    tagline: "Idea → deployed URL, solo, every time.",
  },
  {
    label: "MERN / WEB",
    tagline: "Next.js, React, Node, MongoDB.",
  },
  {
    label: "ANDROID",
    tagline: "Native tooling incl. security scanners.",
  },
  {
    label: "RED TEAMING",
    tagline: "CEH-certified. Nmap→Hydra→Wireshark.",
  },
];

export default function HeroSection() {
  const [shippedCount, setShippedCount] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-color-scheme: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setShippedCount(4);
      return;
    }

    const duration = 600;
    const steps = 4;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setShippedCount(current);
      if (current >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const handleViewResume = () => {
    window.open(resumeFile, "_blank");
  };

  const handleContactMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 pb-16 md:pb-24 max-w-5xl mx-auto border-b border-border">
      {/* STATUS STRIP */}
      <div className="mb-6 font-mono text-xs text-muted-foreground border-y border-border py-2 px-4 bg-muted/20 flex flex-wrap items-center justify-between gap-y-2 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">PROJECTS SHIPPED: {shippedCount}</span>
          <span className="opacity-40">·</span>
          <span>SOLO: 4</span>
          <span className="opacity-40">·</span>
          <span>TEAM: 1</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-signal font-semibold">CEH CERTIFIED</span>
          <span className="opacity-40">·</span>
          <span>ISLAMABAD, PK</span>
        </div>
      </div>

      {/* MAIN HERO HEADLINE & COPY */}
      <div className="space-y-6 my-6">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-foreground leading-[1.1]">
            Muhammad Muaz Ahmed
          </h1>
          <p className="text-xl sm:text-2xl font-mono text-primary font-medium tracking-tight">
            Solo Product Builder — MERN, Android & Red Teaming
          </p>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          I design, build, and ship full products end-to-end — then pentest them before anyone else finds the holes.
        </p>

        {/* CTAS */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Button
            size="lg"
            onClick={handleViewWork}
            className="gap-2 font-mono text-xs tracking-wider uppercase bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6"
            data-testid="button-view-work"
          >
            <span>View Work</span>
            <ArrowDown className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleViewResume}
            className="gap-2 font-mono text-xs tracking-wider uppercase border-slate text-foreground hover:border-primary rounded-none px-6"
            data-testid="button-view-resume"
          >
            <FileText className="w-4 h-4 text-primary" />
            <span>Resume</span>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            onClick={handleContactMe}
            className="gap-2 font-mono text-xs tracking-wider uppercase text-muted-foreground hover:text-primary rounded-none px-6"
            data-testid="button-contact-me"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </Button>
        </div>
      </div>

      {/* WHAT I DO (PILLARS) */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="text-[11px] font-mono uppercase text-muted-foreground tracking-widest mb-4">
          // CAPABILITIES & SCOPE
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.label}
              className="p-4 border border-border bg-card hover:border-primary transition-colors"
            >
              <div className="font-mono text-xs font-bold text-primary mb-1.5 tracking-wider">
                [{pillar.label}]
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {pillar.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
