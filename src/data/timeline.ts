import { Briefcase, GraduationCap } from "lucide-react";
import type { TimelineItem } from "@/types";

export const timeline: TimelineItem[] = [
  {
    id: 1,
    type: "education",
    title: "BSc (Hons) in Software Engineering",
    organization: "SLIIT",
    location: "Colombo, Sri Lanka",
    period: "2023 — Present",
    sortDate: "9999-12-31",
    description:
      "Pursuing a degree in Software Engineering with a focus on web and mobile development, learning modern technologies and best practices in software development.",
    icon: GraduationCap,
  },
  {
    id: 2,
    type: "experience",
    title: "Software Engineering Intern",
    organization: "Sensus Hub Services Private Limited",
    location: "Boralesgamuwa, Sri Lanka",
    period: "Jan 2026 — Jun 2026",
    sortDate: "2026-06-30",
    description:
      "Completed a 6-month internship building full-stack business applications: a task management system, an ecommerce platform, an ERP system for Panda Plastic Pvt Ltd, and an HR & evaluation system for Sensus BPO Pte Ltd.",
    icon: Briefcase,
  },
  {
    id: 3,
    type: "education",
    title: "G.C.E. Advanced Level Examination",
    organization: "Sri Sumangala National College, Kiribathgoda",
    location: "Kiribathgoda, Sri Lanka",
    period: "2021",
    sortDate: "2021-12-31",
    description: "Completed the G.C.E A/L examination with results: 1A and 2B passes.",
    icon: GraduationCap,
  },
  {
    id: 4,
    type: "education",
    title: "G.C.E. Ordinary Level Examination",
    organization: "Bandaranayaka College, Hunupitiya",
    location: "Hunupitiya, Sri Lanka",
    period: "2018",
    sortDate: "2018-12-31",
    description: "Successfully passed the G.C.E O/L examination with results: 2A's, 2B's, and 4C's.",
    icon: GraduationCap,
  },
];

export const sortedTimeline = [...timeline].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate)
);
