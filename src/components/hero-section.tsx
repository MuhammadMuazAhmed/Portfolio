import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";
import profilePic from "@/assets/profile.png";
import resumeFile from "@/assets/resume.pdf";

export default function HeroSection() {
  const handleViewResume = () => {
    window.open(resumeFile, "_blank");
  };

  const handleContactMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BackgroundLines className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-chart-2/10 px-4 relative">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 relative z-10">
        {/* Left side: text and buttons */}
        <div className="flex-1 text-left space-y-4 md:pr-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Muhammad Muaz Ahmed
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Full Stack Developer | Cybersecurity Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Building modern web apps and exploring secure digital systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mt-4">
            <Button
              size="lg"
              onClick={handleViewResume}
              className="gap-2 min-w-[180px]"
              data-testid="button-view-resume"
            >
              <Download className="w-4 h-4" />
              View Resume
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
        {/* Right side: profile picture */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <img src={profilePic} alt="Profile picture" className="rounded-full w-96 h-96 object-cover" />
        </div>
      </div>
    </BackgroundLines>
  );
}
