import profilePic from "@/assets/profile.png";

const quickFacts = [
  { label: "Education", value: "BS Software Engineering (7th Sem)" },
  { label: "Focus", value: "MERN & Native Android" },
  { label: "Certification", value: "CEH (Ethical Hacker)" },
  { label: "Location", value: "Rawalpindi, PK" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto border-b border-border">
      <div className="space-y-12">
        {/* SECTION HEADER */}
        <div>
          <div className="font-mono text-xs text-primary tracking-widest uppercase mb-1">
            01 // ABOUT
          </div>
          <h2 className="text-3xl font-bold font-display text-foreground tracking-tight">
            Background & Mindset
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* BIO TEXT & PHOTO */}
          <div className="md:col-span-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-4">
              <div className="relative shrink-0">
                <img
                  src={profilePic}
                  alt="Muhammad Muaz Ahmed profile photo"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-slate shadow-sm"
                />
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-ok rounded-full border-2 border-background animate-status-pulse" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-display text-foreground">
                  Muhammad Muaz Ahmed
                </h3>
                <p className="text-xs font-mono text-signal">
                  FULL-STACK BUILDER & RED TEAMER
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  Rawalpindi, Pakistan · IST / GMT+5
                </p>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              I build complete products on my own — frontend, backend, and the infrastructure between them — across the MERN stack and native Android. Most recently that's meant shipping a full ride-hailing platform solo (mobile app, backend, and admin dashboard) and an independent medical NLP system that extracts billing codes from clinical text.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              I pair that with a red teamer's mindset: EC-Council Certified Ethical Hacker, hands-on with Nmap, Aircrack-ng, Hydra, Wireshark, and John the Ripper. I don't just build software — I stress-test it the way an attacker would, so what I ship holds up.
            </p>

            <div className="p-4 border-l-2 border-primary bg-muted/20 font-mono text-xs text-foreground tracking-wide">
              HOW I WORK: SOLO, END-TO-END. DESIGN → BUILD → DEPLOY → SECURE.
            </div>
          </div>

          {/* QUICK FACTS MODULE */}
          <div className="md:col-span-4 border border-border bg-card p-6 space-y-4 font-mono text-xs">
            <div className="text-xs font-bold text-primary tracking-wider uppercase border-b border-border pb-2">
              // QUICK FACTS
            </div>

            <div className="space-y-3.5">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="space-y-1">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    {fact.label}
                  </div>
                  <div className="text-foreground font-medium">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}