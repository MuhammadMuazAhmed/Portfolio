import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Shield, 
  Terminal,
  Wrench
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "C++", "Java"]
  },
  {
    title: "Frameworks",
    icon: Globe,
    skills: ["React", "Next.js", "Node.js", "Express.js", "Spring Boot"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL"]
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "Linux", "Firebase"]
  },
  {
    title: "DevOps",
    icon: Terminal,
    skills: ["CI/CD", "AWS", "Vercel", "Heroku"]
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: ["Ethical Hacking", "Nmap", "Network Security", "OWASP"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-skill-${category.title.toLowerCase()}`}>
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
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}