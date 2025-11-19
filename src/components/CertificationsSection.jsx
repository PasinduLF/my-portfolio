import { Award, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { trackExternalLink } from "@/lib/analytics";

const certifications = [
  {
    id: 1,
    name: "Trainee – Full Stack Developer Program",
    issuer: "Open Learning Platform, University of Moratuwa",
    date: "2024-01-01",
    credentialId: "",
    credentialUrl: "#",
    description:
      "Ongoing full stack developer training covering modern web technologies, frontend and backend development, and industry best practices.",
    category: "Full Stack Development",
    icon: Award,
  },
  {
    id: 2,
    name: "Certificate in Computer Application",
    issuer: "National Youth Services Council, Sapugaskanda",
    date: "2022-01-01",
    credentialId: "",
    credentialUrl: "#",
    description:
      "Completed foundational computer application training including office tools and digital literacy.",
    category: "IT Fundamentals",
    icon: Award,
  },
  {
    id: 3,
    name: "Certificate in Spoken English",
    issuer: "Bright Vision English Academy, Kiribathgoda",
    date: "2021-01-01",
    credentialId: "",
    credentialUrl: "#",
    description:
      "Enhanced spoken English proficiency with a focus on communication and presentation skills.",
    category: "Communication",
    icon: Award,
  },
  {
    id: 4,
    name: "MongoDB Java Developer Path",
    issuer: "MongoDB University",
    date: "2025-10-26",
    credentialId: "MDBkok5jltk4q", 
    credentialUrl: "/mnt/data/MongoDB Java Developer Path-certificate_page-0001 (1).jpg", 
    description:
      "Completed the MongoDB Java Developer Path covering Java integration, CRUD operations, schema design, indexing, and performance optimization.",
    category: "Database",
    icon: Award,
  },
  {
    id: 5,
    name: "Volunteer – University CodeFest",
    issuer: "SLIIT",
    date: "2024-06-01",
    credentialId: "",
    credentialUrl: "#",
    description:
      "Volunteered in organizing coding competitions and technical workshops during CodeFest.",
    category: "Achievement",
    icon: Award,
  },
  {
    id: 6,
    name: "IEEE Student Member",
    issuer: "IEEE",
    date: "2023-01-01",
    credentialId: "Member ID: 101560868",
    credentialUrl: "#",
    description:
      "Active IEEE student member participating in tech communities and professional events.",
    category: "Professional Membership",
    icon: Award,
  },
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
    if (Number.isNaN(date.getTime())) return dateString;
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
            Professional certifications, memberships, and achievements that
            reflect my commitment to continuous learning, leadership, and
            personal growth.
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
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            aria-live="polite"
          >
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <article
                  key={cert.id}
                  className="glass-card p-6 rounded-lg card-hover relative overflow-hidden group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  tabIndex={0}
                  aria-label={`${cert.name} from ${cert.issuer}`}
                >
                  {/* Decorative gradient */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-0"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    {/* Icon and Category */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                        aria-hidden="true"
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span
                        className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                        aria-label={`Category: ${cert.category}`}
                      >
                        {cert.category}
                      </span>
                    </div>

                    {/* Certification / Achievement Name */}
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
                      {cert.date && (
                        <div
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                          aria-label={`Issued on ${formatDate(cert.date)}`}
                        >
                          <Calendar className="w-3 h-3" aria-hidden="true" />
                          <span>Issued: {formatDate(cert.date)}</span>
                        </div>
                      )}
                      {cert.credentialId && (
                        <div
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                          aria-label={`Credential ID: ${cert.credentialId}`}
                        >
                          <CheckCircle2
                            className="w-3 h-3"
                            aria-hidden="true"
                          />
                          <span>{cert.credentialId}</span>
                        </div>
                      )}
                    </div>

                    {/* Verify Link */}
                    {cert.credentialUrl && cert.credentialUrl !== "#" && (
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
