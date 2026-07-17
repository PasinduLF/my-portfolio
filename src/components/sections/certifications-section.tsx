"use client";

import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle2, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { certifications } from "@/data/certifications";
import { trackExternalLink } from "@/lib/analytics";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications &"
          accent="credentials."
          description="Continuous learning across full-stack development, databases, and project management."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 card-hover hover:-translate-y-1"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <Award className="size-5" />
                </div>
                <span className="rounded-full bg-foreground/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                  {cert.category}
                </span>
              </div>

              <h3 className="font-semibold leading-snug group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary/80">{cert.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cert.description}</p>

              <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="size-3.5" />
                  Issued {formatDate(cert.date)}
                </div>
                {cert.credentialId && (
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5" />
                    {cert.credentialId}
                  </div>
                )}
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackExternalLink(`cert_${cert.name}`, cert.credentialUrl ?? "")}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                >
                  Verify credential
                  <ExternalLink className="size-3.5" />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
