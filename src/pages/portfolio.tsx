import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import HobbiesSection from "@/components/hobbies-section";
import SkillsSection from "@/components/skills-section";
import CertificationsSection from "@/components/certifications-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      <Navigation />
      <div className="flex-1 md:ml-56 min-w-0 transition-all duration-300">
        <main className="pt-14 md:pt-0">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <CertificationsSection />
          <ProjectsSection />
          <ExperienceSection />
          <HobbiesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
