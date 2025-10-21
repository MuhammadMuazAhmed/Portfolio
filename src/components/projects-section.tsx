import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CometCard } from "@/components/ui/comet-card2";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/projects";
import { Link } from "wouter";

// Projects now come from shared data file

export default function ProjectsSection() {
  const handleViewProject = (projectTitle: string, url: string) => {
    if (!url || url === "#") {
      return;
    }
    try {
      const targetUrl = url.startsWith("http") ? url : `https://${url}`;
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    } catch (e) {
      // Silently handle error
    }
  };

  const handleViewGithub = (projectTitle: string, url: string) => {
    if (!url || url === "#") {
      return;
    }
    try {
      const targetUrl = url.startsWith("http") ? url : `https://${url}`;
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    } catch (e) {
      // Silently handle error
    }
  };

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, API
            integration, and full-stack applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((project, index) => (
            <CometCard
              key={index}
              className="group"
              data-testid={`card-project-${index}`}
            >
              <Card className="h-full">
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
                        data-testid={`badge-tech-${tech
                          .toLowerCase()
                          .replace(/[^a-z0-9]/g, "-")}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.demoUrl && project.demoUrl !== "#" ? (
                      <Button
                        size="sm"
                        className="flex-1 gap-2"
                        onClick={() =>
                          handleViewProject(project.title, project.demoUrl)
                        }
                        data-testid={`button-view-project-${index}`}
                      >
                        <ExternalLink className="w-3 h-3" />
                        View Project
                      </Button>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-muted/50 rounded-md border border-dashed">
                        <ExternalLink className="w-3 h-3" />
                        Demo isn't available for this project
                      </div>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        handleViewGithub(project.title, project.githubUrl)
                      }
                      data-testid={`button-view-github-${index}`}
                    >
                      <Github className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CometCard>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/projects">
            <Button
              size="lg"
              className="gap-2 group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              data-testid="button-view-all-projects"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                View All Projects
              </span>
              <ExternalLink className="w-4 h-4 relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
