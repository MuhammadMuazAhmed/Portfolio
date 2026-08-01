import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { projects } from "@/lib/projects";
import { ExternalLink, Github, Search, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const query = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
      (project.id && project.id.toLowerCase().includes(query))
    );
  });

  const handleOpenLink = (url: string) => {
    if (!url || url === "#") return;
    const targetUrl = url.startsWith("http") ? url : `https://${url}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      <Navigation />
      <div className="flex-1 md:ml-56 min-w-0 flex flex-col justify-between">
        <main className="py-16 px-6 max-w-5xl mx-auto w-full pt-20 md:pt-16">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <Link href="/">
                  <span className="text-xs font-mono text-signal hover:underline inline-flex items-center gap-1 cursor-pointer mb-2">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to Field Report
                  </span>
                </Link>
                <h1 className="text-3xl font-bold font-display text-foreground tracking-tight">
                  Complete Project Index
                </h1>
                <p className="text-xs font-mono text-muted-foreground mt-1">
                  FULL REPOSITORY REGISTRY ({projects.length} TOTAL MODULES & UTILITIES)
                </p>
              </div>

              {/* SEARCH INPUT */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Filter by tech or title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 font-mono text-xs border-slate focus-visible:ring-signal rounded-none"
                />
              </div>
            </div>

            {/* DENSE TECHNICAL TABLE */}
            <div className="border border-border bg-card overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-muted/40 border-b border-border text-[11px] text-primary uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4 font-bold">ID</th>
                    <th className="py-3 px-4 font-bold">TITLE & SCOPE</th>
                    <th className="py-3 px-4 font-bold">TECH STACK</th>
                    <th className="py-3 px-4 font-bold">STATUS</th>
                    <th className="py-3 px-4 font-bold text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredProjects.map((proj) => (
                    <tr key={proj.id || proj.title} className="hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 text-primary font-bold">
                        {proj.id || "PROJ"}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-sans font-medium text-foreground text-sm">
                          {proj.title}
                        </div>
                        <div className="text-muted-foreground text-xs line-clamp-1 font-sans">
                          {proj.description}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground text-[11px] max-w-[200px]">
                        {proj.techStack.join(" · ")}
                      </td>
                      <td className="py-3 px-4 text-[11px]">
                        <span className={proj.status === "shipped" ? "text-ok" : "text-alert"}>
                          {proj.status === "shipped" ? "● SHIPPED" : "◐ IN PROGRESS"}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        {proj.demoUrl && proj.demoUrl !== "#" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleOpenLink(proj.demoUrl)}
                            className="h-7 px-2 font-mono text-[10px] border-slate hover:border-primary rounded-none"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                        )}
                        {proj.githubUrl && proj.githubUrl !== "#" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleOpenLink(proj.githubUrl)}
                            className="h-7 px-2 font-mono text-[10px] border-slate hover:border-primary rounded-none"
                          >
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                  {filteredProjects.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-muted-foreground font-mono">
                        No projects match your filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
