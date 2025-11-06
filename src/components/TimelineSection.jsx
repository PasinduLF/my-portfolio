import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const education = [
  {
    id: 1,
    type: "education",
    title: "Software Engineering",
    institution: "University",
    location: "Sri Lanka",
    period: "2021 - Present",
    description: "Pursuing a degree in Software Engineering with a focus on web and mobile development. Learning modern technologies and best practices in software development.",
    icon: GraduationCap,
  },
  // Add more education entries as needed
];

const experience = [
  {
    id: 1,
    type: "experience",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Wattala, Sri Lanka",
    period: "2023 - Present",
    description: "Building responsive web applications for clients using React, Node.js, and modern web technologies. Specializing in creating user-friendly interfaces and efficient backend solutions.",
    icon: Briefcase,
  },
  // Add more experience entries as needed
];

const allTimelineItems = [...education, ...experience].sort((a, b) => {
  // Sort by period (most recent first)
  // This is a simple sort - you might want to parse dates properly
  return b.period.localeCompare(a.period);
});

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Experience & <span className="text-primary">Education</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My journey in software development, from education to professional experience.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/30 transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {allTimelineItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={cn(
                    "relative flex items-start md:items-center",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={cn(
                      "w-full md:w-5/12 ml-12 md:ml-0",
                      isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    )}
                  >
                    <div className="glass-card p-6 rounded-lg card-hover relative overflow-hidden">
                      {/* Decorative gradient */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-0" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-1">
                              {item.title}
                            </h3>
                            <p className="text-primary font-medium mb-2">
                              {item.type === "education"
                                ? item.institution
                                : item.company}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

