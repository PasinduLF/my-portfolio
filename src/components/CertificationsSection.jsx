import { Award, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { trackExternalLink } from "@/lib/analytics";

const certifications = [
  {
    id: 1,
    name: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2024-01-20",
    credentialId: "UC-abc123xyz",
    credentialUrl: "#",
    description: "Comprehensive React course covering hooks, context, routing, and advanced patterns.",
    category: "Web Development",
    icon: Award,
  },
  {
    id: 2,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023-12-15",
    credentialId: "fcc-js-algorithms",
    credentialUrl: "#",
    description: "Mastered JavaScript fundamentals, algorithms, and data structures through hands-on projects.",
    category: "Programming",
    icon: Award,
  },
  {
    id: 3,
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023-11-10",
    credentialId: "fcc-responsive-web",
    credentialUrl: "#",
    description: "Learned HTML5, CSS3, and responsive design principles to build modern web applications.",
    category: "Web Development",
    icon: Award,
  },
  // Add more certifications as needed
];

export const CertificationsSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and skill development.
          </p>
        </div>

        {/* Certifications Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-xs animate-pulse"
              >
                <div className="h-4 bg-secondary/50 rounded w-3/4 mb-4" />
                <div className="h-4 bg-secondary/50 rounded w-1/2 mb-2" />
                <div className="h-3 bg-secondary/50 rounded w-full mb-4" />
                <div className="h-3 bg-secondary/50 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-live="polite">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <article
                  key={cert.id}
                  className="glass-card p-6 rounded-lg card-hover relative overflow-hidden group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  tabIndex={0}
                  aria-label={`${cert.name} certification from ${cert.issuer}`}
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-0" aria-hidden="true" />

                  <div className="relative z-10">
                    {/* Icon and Category */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground" aria-label={`Category: ${cert.category}`}>
                        {cert.category}
                      </span>
                    </div>

                    {/* Certification Name */}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>

                    {/* Issuer */}
                    <p className="text-primary font-medium text-sm mb-3">
                      {cert.issuer}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Meta Information */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground" aria-label={`Issued on ${formatDate(cert.date)}`}>
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        <span>Issued: {formatDate(cert.date)}</span>
                      </div>
                      {cert.credentialId && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground" aria-label={`Credential ID: ${cert.credentialId}`}>
                          <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                          <span>ID: {cert.credentialId}</span>
                        </div>
                      )}
                    </div>

                    {/* Verify Link */}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackExternalLink(
                            `cert_${cert.name}`,
                            cert.credentialUrl
                          )
                        }
                        className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-300 group/link focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                        aria-label={`Verify ${cert.name} credential`}
                      >
                        Verify Credential
                        <ExternalLink
                          size={14}
                          className="group-hover/link:translate-x-0.5 transition-transform"
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Empty State (if no certifications) */}
        {!isLoading && certifications.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">
              Certifications will be displayed here
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

