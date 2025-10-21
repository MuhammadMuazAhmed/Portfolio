import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { projects } from "@/lib/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CometCard } from "@/components/ui/comet-card2";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              All Projects
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore my full portfolio across web apps, APIs, and experiments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <CometCard key={index} className="group">
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
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      {project.demoUrl && project.demoUrl !== "#" ? (
                        <Button asChild size="sm" className="flex-1 gap-2">
                          <a
                            href={
                              project.demoUrl.startsWith("http")
                                ? project.demoUrl
                                : `https://${project.demoUrl}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-3 h-3" />
                            View Project
                          </a>
                        </Button>
                      ) : (
                        <div className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-muted/50 rounded-md border border-dashed">
                          <ExternalLink className="w-3 h-3" />
                          Demo isn't available for this project
                        </div>
                      )}
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open GitHub repository"
                        >
                          <Github className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CometCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
