import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, Building, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/certifications";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Certifications
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Industry-recognized credentials validating my expertise
          </p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group"
              data-testid={`card-certification-${cert.name
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "-")}`}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {cert.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Building className="w-3 h-3 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </span>
                      </div>
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Issued {cert.issueDate}
                    </span>
                    {cert.credentialId && (
                      <span className="text-xs text-muted-foreground ml-auto">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {cert.keywords.map((keyword, keywordIndex) => (
                      <Badge
                        key={keywordIndex}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-certification-${keyword
                          .toLowerCase()
                          .replace(/[^a-z0-9]/g, "-")}`}
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
