const skillCategories = [
  {
    pillar: "01",
    title: "MERN & Web Architecture",
    description: "Production web applications & full-stack services",
    isRedTeam: false,
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "HTML5 / CSS3",
    ],
  },
  {
    pillar: "02",
    title: "Android & Native Engineering",
    description: "Mobile app development & device network scanning",
    isRedTeam: false,
    skills: [
      "Kotlin",
      "Android SDK",
      "Network Sockets",
      "Java",
      "C++",
      "System Programming",
      "C#",
      "Python",
    ],
  },
  {
    pillar: "03",
    title: "Red Teaming & Security Scanners",
    description: "Ethical hacking, threat assessment & penetration testing",
    isRedTeam: true,
    skills: [
      "Nmap",
      "Wireshark",
      "Aircrack-ng",
      "Hydra",
      "John the Ripper",
      "ARP Spoofing",
      "MitM Testing",
      "Email Spoofing",
      "Android Exploitation",
      "Brute Force",
      "Acunetix",
      "Netsparker",
    ],
  },
  {
    pillar: "04",
    title: "Databases, Tools & Infrastructure",
    description: "Database engines, version control & DevOps tools",
    isRedTeam: false,
    skills: [
      "MongoDB",
      "MySQL",
      "Oracle DB",
      "Git / GitHub",
      "Postman",
      "Firebase",
      "Twilio",
      "PostCSS",
      "Figma",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-b border-border">
      <div className="space-y-12">
        {/* SECTION HEADER */}
        <div>
          <div className="font-mono text-xs text-primary tracking-widest uppercase mb-1">
            03 // SKILLS
          </div>
          <h2 className="text-3xl font-bold font-display text-foreground tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-sm font-mono text-muted-foreground mt-1">
            VERIFIED STACK · CORE PILLARS & SECURITY TOOLING
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`p-6 border transition-all ${
                cat.isRedTeam
                  ? "border-signal bg-signal/5 shadow-[0_0_15px_rgba(79,209,197,0.1)]"
                  : "border-border bg-card hover:border-primary"
              }`}
              data-testid={`card-skill-pillar-${cat.pillar}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs border-b border-border pb-3">
                  <span className={cat.isRedTeam ? "text-signal font-bold" : "text-primary font-bold"}>
                    [{cat.pillar}]
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    {cat.isRedTeam ? "SPECIALIZATION" : "PILLAR"}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-display text-foreground flex items-center gap-2">
                    {cat.title}
                    {cat.isRedTeam && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-signal text-ink font-bold uppercase tracking-wider">
                        CEH FLAGSHIP
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">
                    {cat.description}
                  </p>
                </div>

                {/* OUTLINED MONO TAGS */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`font-mono text-xs px-2.5 py-1 border transition-colors ${
                        cat.isRedTeam
                          ? "border-signal/50 text-foreground hover:bg-signal/20 hover:border-signal"
                          : "border-border text-foreground hover:border-primary hover:text-primary"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
