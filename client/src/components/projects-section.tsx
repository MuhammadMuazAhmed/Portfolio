import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Netflix Pakistan Clone",
    description: "A responsive clone of Netflix with modern UI/UX, featuring movie browsing, search functionality, and dynamic content loading.",
    techStack: ["React", "CSS", "JavaScript", "API Integration"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Spotify Clone",
    description: "Functional music streaming application with playlist management, search features, and responsive design for seamless user experience.",
    techStack: ["React", "JavaScript", "Spotify API", "CSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather App",
    description: "Real-time weather application providing current conditions, forecasts, and location-based weather data using OpenWeatherMap API.",
    techStack: ["JavaScript", "OpenWeatherMap API", "CSS", "HTML"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Todo App",
    description: "Interactive task management application with CRUD operations, local storage, and intuitive user interface for productivity.",
    techStack: ["React.js", "Local Storage", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "E-commerce Web App",
    description: "Full-featured e-commerce platform with product management, shopping cart, user authentication, and complete CRUD operations.",
    techStack: ["JSP", "Servlet", "MySQL", "Bootstrap", "Java"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Art Marketplace",
    description: "Modern marketplace for digital art with user profiles, artwork uploads, secure payments, and responsive design using MERN stack.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export default function ProjectsSection() {
  const handleViewProject = (projectTitle: string, url: string) => {
    console.log(`View project clicked: ${projectTitle}`);
    // TODO: Navigate to project URL
  };

  const handleViewGithub = (projectTitle: string, url: string) => {
    console.log(`View GitHub clicked: ${projectTitle}`);
    // TODO: Navigate to GitHub URL
  };

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, API integration, and full-stack applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover-elevate group" data-testid={`card-project-${index}`}>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs"
                      data-testid={`badge-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 gap-2"
                    onClick={() => handleViewProject(project.title, project.demoUrl)}
                    data-testid={`button-view-project-${index}`}
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleViewGithub(project.title, project.githubUrl)}
                    data-testid={`button-view-github-${index}`}
                  >
                    <Github className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}