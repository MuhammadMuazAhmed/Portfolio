import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function HeroSection() {
  const handleDownloadResume = () => {
    window.open("/api/resume", "_blank");
  };

  const handleContactMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BackgroundLines className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-chart-2/10 px-4 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Muhammad Muaz Ahmed
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Full Stack Developer | Cybersecurity Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building modern web apps and exploring secure digital systems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={handleDownloadResume}
            className="gap-2 min-w-[180px]"
            data-testid="button-download-resume"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleContactMe}
            className="gap-2 min-w-[180px] backdrop-blur-sm"
            data-testid="button-contact-me"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </Button>
        </div>
      </div>
    </BackgroundLines>
  );
}
