import { certifications, Certification } from "@/lib/certifications";
import { Award, ShieldCheck } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-6 max-w-5xl mx-auto border-b border-border">
      <div className="space-y-8">
        {/* SECTION HEADER */}
        <div>
          <div className="font-mono text-xs text-primary tracking-widest uppercase mb-1">
            04 // CERTIFICATIONS
          </div>
          <h2 className="text-3xl font-bold font-display text-foreground tracking-tight">
            Verified Credentials
          </h2>
          <p className="text-sm font-mono text-muted-foreground mt-1">
            INDUSTRY CERTIFICATIONS & ETHICAL HACKING STANDARDS
          </p>
        </div>

        {/* HORIZONTAL STRIP LAYOUT */}
        <div className="space-y-3 font-mono text-xs">
          {certifications.map((cert: Certification) => (
            <div
              key={cert.name}
              className={`p-4 border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                cert.isFlagship
                  ? "border-signal bg-signal/5 text-foreground shadow-[0_0_15px_rgba(79,209,197,0.08)]"
                  : "border-border bg-card hover:border-primary text-foreground"
              }`}
              data-testid={`strip-cert-${cert.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            >
              <div className="flex items-start md:items-center gap-3">
                <div
                  className={`w-9 h-9 shrink-0 flex items-center justify-center border ${
                    cert.isFlagship
                      ? "border-signal bg-signal/20 text-signal"
                      : "border-border bg-muted/40 text-primary"
                  }`}
                >
                  {cert.isFlagship ? (
                    <ShieldCheck className="w-5 h-5" />
                  ) : (
                    <Award className="w-4 h-4" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-sm font-display text-foreground">
                      {cert.name}
                    </span>
                    {cert.isFlagship && (
                      <span className="text-[10px] bg-signal text-ink font-bold px-1.5 py-0.5 tracking-wider">
                        FLAGSHIP
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground font-sans mt-0.5">
                    {cert.issuer} {cert.credentialId ? `· ID: ${cert.credentialId}` : ""}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 font-mono text-xs border-t md:border-t-0 border-border/50 pt-2 md:pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {cert.keywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="text-[10px] px-2 py-0.5 border border-border text-muted-foreground"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <div className="text-primary font-bold text-[11px] whitespace-nowrap">
                  {cert.issueDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
