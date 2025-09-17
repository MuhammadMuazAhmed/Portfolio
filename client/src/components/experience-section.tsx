import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Junior Warehouse Assistant",
    company: "Awan Industries",
    duration: "2022 - 2024",
    description: "Managed inventory operations, coordinated logistics, and optimized warehouse workflows. Developed strong organizational skills and experience with supply chain management systems.",
    skills: ["Inventory Management", "Logistics Coordination", "Team Leadership", "Process Optimization"]
  },
  {
    title: "Junior Shop Keeper", 
    company: "ProductStorehouse",
    duration: "2020 - 2022",
    description: "Handled customer service operations, managed product displays, and maintained store inventory. Gained valuable experience in customer relations and retail operations.",
    skills: ["Customer Service", "Retail Operations", "Inventory Control", "Sales Management"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4">
            Building responsibility, teamwork, and organizational skills through diverse work experiences.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-experience-${index}`}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      {experience.title}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground font-medium mt-1">
                      {experience.company}
                    </p>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-2 w-fit">
                    <Calendar className="w-3 h-3" />
                    {experience.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs"
                      data-testid={`badge-experience-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-card border border-card-border rounded-lg">
            <div className="text-sm text-muted-foreground">
              <strong>Key Achievements:</strong> Developed strong teamwork, organizational skills, and responsibility through hands-on experience in customer service and operations management.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}