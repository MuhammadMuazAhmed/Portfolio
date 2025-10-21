import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Database,
  Globe,
  Shield,
  Terminal,
  Wrench,
  Palette,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "C++",
      "C",
      "C#",
      "Kotlin",
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      "React",
      "Next.js",
      "Tailwind",
      "Vite",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "Java", "Spring Boot"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Oracle Database"],
  },
  {
    title: "Cybersecurity & Pentesting",
    icon: Shield,
    skills: [
      "ARP Spoofing",
      "MitM",
      "Email Spoofing",
      "Android Exploitation",
      "Brute Force",
      "Acunetix",
      "Netsparker",
      "Wireshark",
      "Aircrack-ng",
      "Hydra",
      "John the Ripper",
      "Nmap",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["GitHub", "NPM", "Postman", "WordPress", "Cisco", "Git"],
  },
  {
    title: "Design & Data",
    icon: Palette,
    skills: ["Figma", "Photoshop", "NumPy"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group"
              data-testid={`card-skill-${category.title.toLowerCase()}`}
            >
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className="w-5 h-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-skill-${skill
                          .toLowerCase()
                          .replace(/[^a-z0-9]/g, "-")}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
