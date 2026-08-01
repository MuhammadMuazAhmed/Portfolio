import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { projects, Project } from "@/lib/projects";
import { Link } from "wouter";

export default function ProjectsSection() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const archiveProjects = projects.filter((p) => !p.featured);

  const handleOpenLink = (url: string) => {
    if (!url || url === "#") return;
    const targetUrl = url.startsWith("http") ? url : `https://${url}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-b border-border">
      <div className="space-y-12">
        {/* SECTION HEADER */}
        <div>
          <div className="font-mono text-xs text-primary tracking-widest uppercase mb-1">
            02 // WORK
          </div>
          <h2 className="text-3xl font-bold font-display text-foreground tracking-tight">
            Featured Modules
          </h2>
          <p className="text-sm font-mono text-muted-foreground mt-1">
            VERIFIED SYSTEMS · SHIPPED & ACTIVE BUILDS
          </p>
        </div>

        {/* FEATURED MODULE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project: Project) => {
            const isShipped = project.status === "shipped";
            return (
              <div
                key={project.id || project.title}
                className="border border-border bg-card p-6 flex flex-col justify-between hover:border-primary transition-colors group"
                data-testid={`card-module-${project.id?.toLowerCase() || project.title.toLowerCase()}`}
              >
                <div className="space-y-4">
                  {/* CARD HEADER */}
                  <div className="flex items-center justify-between font-mono text-xs border-b border-border pb-3">
                    <span className="text-primary font-bold tracking-wider">
                      [{project.id || "MODULE"}]
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 font-semibold text-[11px] ${
                        isShipped ? "text-ok" : "text-alert"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isShipped ? "bg-ok animate-status-pulse" : "bg-alert"
                        }`}
                      />
                      {isShipped ? "● SHIPPED" : "◐ IN PROGRESS"}
                    </span>
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <div>
                    <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* FIELD REPORT SCOPE, STACK, ROLE */}
                  <div className="space-y-2 font-mono text-xs pt-2">
                    {project.scope && (
                      <div className="grid grid-cols-12 gap-2 text-muted-foreground">
                        <span className="col-span-3 text-primary uppercase text-[10px] tracking-wider">
                          SCOPE
                        </span>
                        <span className="col-span-9 text-foreground font-sans text-xs">
                          {project.scope}
                        </span>
                      </div>
                    )}

                    <div className="grid grid-cols-12 gap-2 text-muted-foreground">
                      <span className="col-span-3 text-primary uppercase text-[10px] tracking-wider">
                        STACK
                      </span>
                      <span className="col-span-9 text-xs text-muted-foreground font-mono">
                        {project.techStack.join(" · ")}
                      </span>
                    </div>

                    {project.role && (
                      <div className="grid grid-cols-12 gap-2 text-muted-foreground">
                        <span className="col-span-3 text-primary uppercase text-[10px] tracking-wider">
                          ROLE
                        </span>
                        <span className="col-span-9 text-xs text-foreground">
                          {project.role}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CARD ACTIONS */}
                <div className="flex items-center gap-3 pt-6 mt-4 border-t border-border font-mono text-xs">
                  {project.demoUrl && project.demoUrl !== "#" ? (
                    <Button
                      size="sm"
                      onClick={() => handleOpenLink(project.demoUrl)}
                      className="gap-2 font-mono text-xs bg-primary text-primary-foreground hover:bg-primary/90 rounded-none flex-1"
                      data-testid={`button-demo-${project.id?.toLowerCase()}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </Button>
                  ) : (
                    <div className="flex-1 text-center py-1.5 text-[11px] font-mono text-muted-foreground bg-muted/30 border border-dashed border-border">
                      DEMO DEPLOYING / PRIVATE
                    </div>
                  )}

                  {project.githubUrl && project.githubUrl !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenLink(project.githubUrl)}
                      className="gap-2 font-mono text-xs border-slate hover:border-primary rounded-none"
                      data-testid={`button-github-${project.id?.toLowerCase()}`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ALL PROJECTS DISCLOSURE (ARCHIVE TABLE) */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold font-display text-foreground">
                All Projects Archive
              </h3>
              <p className="text-xs font-mono text-muted-foreground">
                TOTAL BUILDS & UTILITIES ({projects.length} REPOSITORIES)
              </p>
            </div>

            <Button
              variant="outline"
              onClick={() => setIsArchiveOpen(!isArchiveOpen)}
              className="gap-2 font-mono text-xs border-slate hover:border-primary rounded-none"
              data-testid="button-toggle-archive"
            >
              <span>
                {isArchiveOpen ? "Collapse Archive" : `Show all ${projects.length} projects`}
              </span>
              {isArchiveOpen ? (
                <ChevronUp className="w-4 h-4 text-primary" />
              ) : (
                <ChevronDown className="w-4 h-4 text-primary" />
              )}
            </Button>
          </div>

          {/* DENSE ARCHIVE TABLE */}
          {isArchiveOpen && (
            <div className="mt-6 border border-border bg-card overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-muted/40 border-b border-border text-[11px] text-primary uppercase tracking-wider">
                  <tr>
                    <th className="py-2.5 px-4 font-bold">ID</th>
                    <th className="py-2.5 px-4 font-bold">TITLE</th>
                    <th className="py-2.5 px-4 font-bold">STACK</th>
                    <th className="py-2.5 px-4 font-bold">STATUS</th>
                    <th className="py-2.5 px-4 font-bold text-right">LINK</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {projects.map((proj) => (
                    <tr
                      key={proj.id || proj.title}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-2.5 px-4 text-primary font-bold">
                        {proj.id || "PROJ"}
                      </td>
                      <td className="py-2.5 px-4 font-sans font-medium text-foreground">
                        {proj.title}
                      </td>
                      <td className="py-2.5 px-4 text-muted-foreground text-[11px]">
                        {proj.techStack.slice(0, 3).join(", ")}
                        {proj.techStack.length > 3 ? "..." : ""}
                      </td>
                      <td className="py-2.5 px-4 text-[11px]">
                        <span
                          className={
                            proj.status === "shipped"
                              ? "text-ok"
                              : "text-alert"
                          }
                        >
                          {proj.status === "shipped" ? "● SHIPPED" : "◐ IN PROGRESS"}
                        </span>
                      </td>
                      <td className="py-2.5 px-4 text-right">
                        {proj.githubUrl && proj.githubUrl !== "#" ? (
                          <button
                            onClick={() => handleOpenLink(proj.githubUrl)}
                            className="text-signal hover:underline inline-flex items-center gap-1"
                          >
                            <span>Repo</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-4 text-right">
            <Link href="/projects">
              <span className="text-xs font-mono text-signal hover:underline cursor-pointer inline-flex items-center gap-1">
                Open Full Dedicated Archive Page →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
