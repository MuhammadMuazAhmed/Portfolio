import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const socialLinks = [
  {
    name: "EMAIL",
    icon: Mail,
    href: "mailto:muhammadmuazahmed@gmail.com",
    label: "muhammadmuazahmed@gmail.com",
  },
  {
    name: "GITHUB",
    icon: Github,
    href: "https://github.com/muhammadmuazahmed",
    label: "github.com/muhammadmuazahmed",
  },
  {
    name: "LINKEDIN",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-muaz-ahmed/",
    label: "linkedin.com/in/muhammad-muaz-ahmed/",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl =
        import.meta.env.VITE_API_URL ||
        "https://portfolio-backend-gamma-gules.vercel.app";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Transmitted",
          description: "Thank you for reaching out. I'll respond promptly.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Transmission Failed",
          description:
            result.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description:
          "Failed to send message. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto border-b border-border">
      <div className="space-y-12">
        {/* SECTION HEADER */}
        <div>
          <div className="font-mono text-xs text-primary tracking-widest uppercase mb-1">
            06 // CONTACT
          </div>
          <h2 className="text-3xl font-bold font-display text-foreground tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-sm font-mono text-muted-foreground mt-1">
            DIRECT CHANNEL FOR PROJECTS, CONTRACTS & INQUIRIES
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* FORM BLOCK */}
          <div className="md:col-span-7 border border-border bg-card p-6 space-y-6">
            <div className="text-xs font-mono font-bold text-primary tracking-wider uppercase border-b border-border pb-2">
              // SEND MESSAGE
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  [NAME]
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  className="font-mono text-xs border-slate focus-visible:ring-signal rounded-none"
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  [EMAIL]
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="font-mono text-xs border-slate focus-visible:ring-signal rounded-none"
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  [MESSAGE]
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Scope of work, project details, or questions..."
                  rows={4}
                  className="font-mono text-xs border-slate focus-visible:ring-signal rounded-none"
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gap-2 font-mono text-xs tracking-wider uppercase bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-2.5"
                data-testid="button-send-message"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? "TRANSMITTING..." : "SEND TRANSMISSION"}</span>
              </Button>
            </form>
          </div>

          {/* SOCIAL & AVAILABILITY BLOCK */}
          <div className="md:col-span-5 space-y-6">
            <div className="border border-border bg-card p-6 space-y-4 font-mono text-xs">
              <div className="text-xs font-bold text-primary tracking-wider uppercase border-b border-border pb-2">
                // DIRECT CHANNELS
              </div>

              <div className="space-y-2.5">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => handleSocialClick(social.href)}
                    className="w-full p-2.5 border border-border hover:border-primary text-left transition-colors flex items-center gap-3 group"
                    data-testid={`button-social-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="w-4 h-4 text-primary group-hover:text-signal transition-colors shrink-0" />
                    <div className="min-w-0">
                      <div className="font-bold text-foreground text-[11px]">
                        {social.name}
                      </div>
                      <div className="text-[11px] text-muted-foreground truncate">
                        {social.label}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-border bg-card p-5 font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 text-ok font-bold text-xs">
                <span className="w-2 h-2 rounded-full bg-ok animate-status-pulse" />
                <span>AVAILABILITY: OPEN</span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed font-sans">
                Open to freelance contracts, full-stack product builds, and security assessment projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
