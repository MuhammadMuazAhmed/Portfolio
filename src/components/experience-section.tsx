const experiences = [
  {
    id: "EXP-01",
    role: "Independent Product Developer & Security Researcher",
    company: "Solo Build Studio",
    location: "Islamabad, PK",
    duration: "2024 — PRESENT",
    description:
      "Architecture, end-to-end engineering, and vulnerability stress-testing of full-stack web platforms and native Android applications. Shipped EasyRide (mobile app, backend & admin dashboard), Virtual Medical Coder (clinical NLP pipeline), and Android network scanner tooling.",
    highlights: [
      "Designed and deployed MERN + React Native ride-hailing architecture solo",
      "Executed red team pentests on personal software builds before public release",
      "Built custom network scanner tools in Kotlin & Android SDK",
    ],
    tech: ["Next.js", "React Native", "MongoDB", "Kotlin", "Python", "CEH Pentesting"],
  },
  {
    id: "EXP-02",
    role: "Cyber Security & App Development Intern",
    company: "Nicat with startup company Le-Obran",
    location: "Rawalpindi, PK",
    duration: "JUN 2025 — AUG 2025",
    description:
      "Gained hands-on experience in cybersecurity practices and mobile application development. Performed security assessments, vulnerability testing, and contributed to core app development projects in a fast-paced startup environment.",
    highlights: [
      "Conducted web and mobile security vulnerability assessments",
      "Contributed to frontend and API integrations for client-facing apps",
      "Collaborated in fast-iterating startup engineering environment",
    ],
    tech: ["Vulnerability Assessment", "Mobile Dev", "Security Testing", "React"],
  },
  {
    id: "EXP-03",
    role: "ETL Technology Ambassador",
    company: "Empowerment Through Learning (ETL)",
    location: "Pakistan",
    duration: "NOV 2024 — PRESENT",
    description:
      "Serving as technology ambassador promoting emerging technologies, open-source innovation, and cybersecurity awareness. Representing ETL in technical workshops, student mentorship, and community outreach programs.",
    highlights: [
      "Organized technical workshops on modern web & mobile stacks",
      "Advocated for cybersecurity best practices among engineering students",
      "Facilitated open-source collaboration initiatives",
    ],
    tech: ["Tech Advocacy", "Public Speaking", "Community Outreach", "Mentorship"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto border-b border-border">
      <div className="space-y-12">
        {/* SECTION HEADER */}
        <div>
          <div className="font-mono text-xs text-primary tracking-widest uppercase mb-1">
            05 // EXPERIENCE
          </div>
          <h2 className="text-3xl font-bold font-display text-foreground tracking-tight">
            Work Timeline
          </h2>
          <p className="text-sm font-mono text-muted-foreground mt-1">
            CHRONOLOGICAL RESPONSIBILITY, SOLO BUILDS & INDUSTRY ROLES
          </p>
        </div>

        {/* VERTICAL TIMELINE */}
        <div className="relative pl-6 md:pl-0 space-y-8 before:absolute before:left-2 md:before:left-[170px] before:top-3 before:bottom-3 before:w-px before:bg-signal/40">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative grid md:grid-cols-12 gap-4 items-start group"
              data-testid={`timeline-exp-${exp.id.toLowerCase()}`}
            >
              {/* TIMELINE NODE DOT */}
              <div className="absolute -left-[20px] md:left-[165px] top-1.5 w-2.5 h-2.5 rounded-full bg-signal border-2 border-background z-10 group-hover:scale-125 transition-transform" />

              {/* DATE COLUMN (LEFT) */}
              <div className="md:col-span-3 font-mono text-xs font-bold text-primary tracking-wider pt-0.5">
                {exp.duration}
              </div>

              {/* CONTENT COLUMN (RIGHT) */}
              <div className="md:col-span-9 border border-border bg-card p-6 space-y-4 hover:border-primary transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border pb-3">
                  <div>
                    <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-mono text-signal mt-0.5">
                      {exp.company} <span className="text-muted-foreground">· {exp.location}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    [{exp.id}]
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* HIGHLIGHT BULLETS */}
                <ul className="space-y-1.5 font-sans text-xs text-foreground list-disc list-inside">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="leading-normal">
                      {h}
                    </li>
                  ))}
                </ul>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 border border-border text-muted-foreground"
                    >
                      {t}
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
