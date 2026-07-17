import {
  Factory,
  GraduationCap,
  ListChecks,
  Receipt,
  ShoppingCart,
  Stethoscope,
  Store,
  Users,
} from "lucide-react";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    slug: "feelsfix",
    title: "FeelsFix",
    description:
      "An online therapy booking platform bridging the gap between mental health professionals and clients, with streamlined scheduling, payments, and secure client–therapist communication.",
    tags: ["MERN", "React", "Node.js", "Express.js", "MongoDB"],
    image: { src: "/projects/feelsfix.png", real: true },
    demoUrl: undefined,
    githubUrl: "https://github.com/PasinduLF/FeelsFIX",
    featured: true,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "Mental health professionals and clients have no streamlined way to discover each other, schedule sessions, and communicate securely — appointment booking for therapy is typically handled through phone calls or generic calendar tools that don't account for client privacy or payment handling.",
      solution:
        "A dedicated MERN-stack booking platform where clients browse therapists, book appointments, and pay online, while therapists manage their schedules and communicate with clients through a secure channel.",
      architecture:
        "React single-page frontend calling a Node.js/Express REST API, with MongoDB as the primary data store for users, bookings, and messages. Client and therapist roles share the same API with role-based access.",
      features: [
        "Therapist discovery and profile browsing",
        "Appointment scheduling with availability management",
        "Online payment handling for sessions",
        "Secure client–therapist messaging",
        "Role-based access for clients vs. therapists",
      ],
    },
  },
  {
    id: 2,
    slug: "rebuildhub",
    title: "RebuildHub",
    description:
      "A disaster management and emergency response app enabling citizens to report disasters and request aid, while letting NGOs coordinate relief operations with real-time data, maps, analytics, and offline support.",
    tags: ["React Native", "Expo", "Firebase", "Google Maps", "Cloudinary"],
    image: { src: "/projects/rebuildhub.jpg", real: true },
    demoUrl: undefined,
    githubUrl: "https://github.com/PasinduLF/RebuildHub",
    featured: true,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "During and after a disaster, citizens need a fast way to report what's happening and request aid, while NGOs need a coordinated, real-time view of where help is needed instead of fragmented phone calls and spreadsheets — and connectivity in affected areas can't be assumed.",
      solution:
        "A cross-platform mobile app (React Native + Expo) where citizens report disasters and request emergency aid with photos and location, and NGOs coordinate relief operations from real-time maps and analytics — with offline support so reporting doesn't depend on a live connection.",
      architecture:
        "React Native + Expo client, Firebase for authentication and real-time backend services, Google Maps for location capture and relief-coordination mapping, Cloudinary for photo/media storage, with local caching for offline report creation.",
      features: [
        "Citizen disaster reporting with photo + GPS location",
        "Emergency aid requests",
        "NGO coordination dashboard with real-time data",
        "Map-based relief operation view",
        "Analytics for relief coordination",
        "Offline support for report creation",
      ],
    },
  },
  {
    id: 3,
    slug: "eco-waste-solutions",
    title: "Eco Waste Solutions",
    description:
      "A smart waste management system connecting users, collectors, and administrators with collection scheduling, QR-based verification, GPS location selection, digital wallet rewards, and an analytics-driven admin dashboard.",
    tags: ["React", "Spring Boot", "MongoDB", "Google Maps", "QR Code"],
    image: { src: "/projects/ecowaste.png", real: true },
    demoUrl: undefined,
    githubUrl: "https://github.com/PasinduLF/EcoWaste-Solutions",
    featured: true,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "Waste collection coordination between households, collectors, and administrators is usually manual and disconnected — no shared scheduling, no way to verify a pickup happened, and no incentive to participate.",
      solution:
        "A full-stack waste management system connecting users, collectors, and administrators: users schedule collections and select pickup locations on a map, collectors verify pickups via QR code, and admins get an analytics dashboard, with a digital wallet that rewards participation.",
      architecture:
        "React frontend, Spring Boot REST API backend, MongoDB for data storage, Google Maps for GPS-based location selection, and QR code generation/scanning for collection verification.",
      features: [
        "Waste collection scheduling",
        "QR-code based pickup verification",
        "GPS location selection for pickups",
        "Digital wallet with rewards",
        "Analytics-driven admin dashboard",
        "Separate flows for users, collectors, and admins",
      ],
    },
  },
  {
    id: 4,
    slug: "cashbuddy",
    title: "CashBuddy",
    description:
      "A native Android personal finance tracker that helps users track income, expenses, and budgets, with category-wise analysis, budget alerts, and data backup for simple, effective financial management.",
    tags: ["Kotlin", "Android Studio", "Android"],
    image: { src: "/projects/cashbuddy.png", real: true },
    demoUrl: undefined,
    githubUrl: "https://github.com/PasinduLF/CashBuddy",
    featured: false,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "Tracking day-to-day income, expenses, and budgets by hand or in generic spreadsheets makes it easy to lose sight of spending patterns and go over budget without noticing.",
      solution:
        "A native Android app for personal finance tracking — logging income and expenses, setting budgets, and reviewing category-wise spending, with alerts when a budget is close to being exceeded.",
      architecture:
        "Native Android application built with Kotlin in Android Studio.",
      features: [
        "Income and expense tracking",
        "Budget setting with alerts",
        "Category-wise spending analysis",
        "Data backup",
      ],
    },
  },
  {
    id: 5,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This portfolio — a premium, animated developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: { src: "/projects/portfolio.png", real: true },
    demoUrl: "https://my-portfolio-rho-seven-75.vercel.app/",
    githubUrl: "https://github.com/PasinduLF/my-portfolio",
    featured: false,
    hasCaseStudy: false,
  },
  {
    id: 6,
    title: "Staff Management System",
    slug: "staff-management-system",
    description:
      "A comprehensive staff management system allowing organizations to manage employee records, attendance, payroll, and performance evaluations, with onboarding, leave management, and reporting.",
    tags: ["PHP", "MySQL"],
    image: { src: "/projects/staff.jpg", real: true },
    demoUrl: undefined,
    githubUrl: "https://github.com/PasinduLF/StaffManagement_java",
    featured: false,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "Organizations managing staff records, attendance, payroll, and performance reviews across spreadsheets or paper-based systems end up with slow, error-prone HR processes.",
      solution:
        "A comprehensive staff management system covering employee records, attendance, payroll, and performance evaluations, including onboarding and leave management with built-in reporting.",
      architecture:
        "Server-rendered PHP application backed by a MySQL relational database.",
      features: [
        "Employee record management",
        "Attendance tracking",
        "Payroll processing",
        "Performance evaluations",
        "Employee onboarding",
        "Leave management",
        "Reporting",
      ],
    },
  },
  {
    id: 7,
    slug: "task-management-system",
    title: "Task Management System",
    description:
      "A full-stack task management system built during a software engineering internship at Sensus Hub Services, enabling teams to create, assign, and track tasks with real-time status updates and role-based access.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: {
      src: "/projects/task-management.png",
      real: false,
      placeholderIcon: ListChecks,
      placeholderCaption: "Internal Sensus Hub tool — screenshot pending",
    },
    demoUrl: undefined,
    githubUrl: "https://github.com/sensushub-dev/Employee-Task-Manager",
    featured: false,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "Sensus Hub Services needed an internal tool for teams to create, assign, and track tasks with visibility into status and appropriate access control by role, rather than relying on ad-hoc messages or spreadsheets.",
      solution:
        "A full-stack task management system enabling teams to create, assign, and track tasks with real-time status updates and role-based access, built during a software engineering internship.",
      architecture:
        "React frontend styled with Tailwind CSS, a Node.js/Express REST API, PostgreSQL as the relational data store, and Prisma as the ORM/schema layer.",
      features: [
        "Task creation and assignment",
        "Real-time status updates",
        "Role-based access control",
      ],
      results:
        "Delivered as a working internal tool during a 6-month software engineering internship at Sensus Hub Services.",
    },
  },
  {
    id: 8,
    slug: "ecommerce-system",
    title: "Ecommerce System",
    description:
      "A full-stack ecommerce platform developed during a software engineering internship, featuring product catalog management, shopping cart, order processing, and an admin dashboard.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: {
      src: "/projects/ecommerce-system.png",
      real: false,
      placeholderIcon: ShoppingCart,
      placeholderCaption: "Internal Sensus Hub tool — screenshot pending",
    },
    demoUrl: undefined,
    githubUrl: "https://github.com/sensushub-dev/E-Commerce",
    featured: false,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "The team needed a working ecommerce platform covering the full purchase flow — browsing a catalog, managing a cart, placing orders, and giving admins visibility — as a real internship deliverable.",
      solution:
        "A full-stack ecommerce platform with product catalog management, a shopping cart, order processing, and an admin dashboard.",
      architecture:
        "React frontend with Tailwind CSS, a Node.js/Express REST API, and PostgreSQL via Prisma.",
      features: [
        "Product catalog management",
        "Shopping cart",
        "Order processing",
        "Admin dashboard",
      ],
      results:
        "Delivered as a working internal tool during a 6-month software engineering internship at Sensus Hub Services.",
    },
  },
  {
    id: 9,
    slug: "panda-plastic-erp",
    title: "ERP System — Panda Plastic Pvt Ltd",
    description:
      "An enterprise resource planning system built for Panda Plastic Pvt Ltd during a software engineering internship, streamlining inventory, production, and order management workflows.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: {
      src: "/projects/erp.png",
      real: true,
      placeholderIcon: Factory,
      placeholderCaption: "Live client deployment — screenshot pending",
    },
    demoUrl: "http://195.35.20.252:4500/login",
    githubUrl: "https://github.com/sensushub-dev/pandaerp",
    featured: true,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "Panda Plastic Pvt Ltd needed to bring inventory, production, and order management into a single connected system instead of disconnected manual processes.",
      solution:
        "An ERP system covering inventory, production, and order management workflows, built for and deployed to Panda Plastic Pvt Ltd during a software engineering internship.",
      architecture:
        "React frontend with Tailwind CSS, a Node.js/Express REST API, and PostgreSQL via Prisma.",
      features: [
        "Inventory management",
        "Production workflow tracking",
        "Order management",
      ],
      results:
        "Deployed to a live production server for Panda Plastic Pvt Ltd, accessible at a dedicated URL.",
    },
  },
  {
    id: 10,
    slug: "sensus-bpo-hr",
    title: "HR & Evaluation System — Sensus BPO",
    description:
      "An HR and employee evaluation system built for Sensus BPO Pte Ltd during a software engineering internship, covering performance reviews, evaluation workflows, and HR record management.",
    tags: ["Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: {
      src: "/projects/sensus-bpo-hr.png",
      real: false,
      placeholderIcon: Users,
      placeholderCaption: "Internal Sensus Hub tool — screenshot pending",
    },
    demoUrl: undefined,
    githubUrl: "https://github.com/sensushub-dev/Sensus-HR",
    featured: false,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "Sensus BPO Pte Ltd needed a system to manage HR records and run structured employee performance evaluations instead of handling reviews ad hoc.",
      solution:
        "An HR and evaluation system covering performance reviews, evaluation workflows, and HR record management, built for Sensus BPO Pte Ltd during a software engineering internship.",
      architecture:
        "Next.js frontend with Tailwind CSS, a Node.js/Express REST API, and PostgreSQL via Prisma.",
      features: [
        "Performance review workflows",
        "Evaluation tracking",
        "HR record management",
      ],
      results:
        "Delivered as a working internal tool during a 6-month software engineering internship at Sensus Hub Services.",
    },
  },
  {
    id: 11,
    slug: "beauty-pc-ecommerce-pos",
    title: "Beauty P&C — E-Commerce & POS System",
    description:
      "A full-stack e-commerce, admin, POS, inventory, and financial-management system for Beauty P&C, a cosmetics retailer — letting the business run both its online store and physical shop from a single system.",
    tags: ["MERN", "React", "Node.js", "Express.js", "MongoDB"],
    image: {
      src: "/projects/bpc.png",
      real: true,
      placeholderIcon: Store,
      placeholderCaption: "Live client deployment — screenshot pending",
    },
    demoUrl: "https://beautypc.vercel.app/",
    githubUrl: "https://github.com/PasinduLF/BPC_E-Commerce",
    featured: true,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "Beauty P&C, a cosmetics retailer, needed to run both an online store and a physical shop without the online catalog, stock counts, and financial records drifting out of sync with what's happening at the till in-store.",
      solution:
        "A unified full-stack platform covering the customer-facing e-commerce store, an admin dashboard, a point-of-sale system for in-shop transactions, inventory management, and financial/reporting tools — all backed by the same data so stock and sales stay consistent across both channels.",
      architecture:
        "MERN stack: a React frontend for the storefront and admin/POS interfaces, a Node.js/Express REST API, and MongoDB as the shared data store across the online store, POS, inventory, and financial modules.",
      features: [
        "Customer-facing e-commerce storefront",
        "Admin dashboard",
        "Point-of-sale (POS) system for in-store transactions",
        "Inventory management shared across online and physical stock",
        "Financial and sales reporting",
        "Unified data layer across the online store and physical shop",
      ],
      results:
        "Deployed and live for Beauty P&C, a real cosmetics retailer, at beautypc.vercel.app.",
    },
  },
  {
    id: 12,
    slug: "smart-healthcare-telemedicine",
    title: "Smart Healthcare — AI-Enabled Telemedicine Platform",
    description:
      "A cloud-native telemedicine platform built as a university microservices module project (team of 3–4): patients book appointments, attend live video consultations, upload medical reports, and get AI-assisted preliminary health suggestions.",
    tags: [
      "Microservices",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Agora",
      "Stripe",
    ],
    image: {
      src: "/projects/smart-healthcare.png",
      real: true,
      placeholderIcon: Stethoscope,
      placeholderCaption: "Live deployment — screenshot pending",
    },
    demoUrl: "https://smart-healthcare-ochre.vercel.app/",
    githubUrl: "https://github.com/PasinduLF/Smart-Healthcare",
    featured: true,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "A university microservices module required building a cloud-native telemedicine platform in the style of real-world services like Channeling.lk or oDoc — patients booking doctor appointments, attending video consultations, uploading medical reports, and getting preliminary AI health guidance — architected as independent services rather than a single monolith.",
      solution:
        "A microservices-based telemedicine platform built as a 3–4 person team project: separate patient, doctor, appointment, telemedicine, payment, notification, and AI symptom-checker services behind an API gateway, with a React frontend for browsing doctors, booking appointments, and joining video consultations.",
      architecture:
        "An Express-based API gateway (JWT auth and request routing via http-proxy-middleware) in front of independent Node.js/Express microservices: patient, doctor, and appointment services on MongoDB; a telemedicine service pairing Agora with Socket.io for real-time video signaling; a payment service integrating Stripe; a notification service sending email confirmations via Nodemailer; and an AI service calling Google Gemini and Groq for preliminary symptom suggestions. Each service is containerized with Docker, with Kubernetes manifests for orchestration, behind a React frontend.",
      features: [
        "Patient registration, profiles, and medical report uploads (Cloudinary)",
        "Doctor availability management and digital prescriptions",
        "Appointment search, booking, and real-time status tracking",
        "Live video consultations via Agora with Socket.io signaling",
        "Stripe-integrated consultation payments",
        "Email booking and consultation confirmations",
        "AI-powered preliminary symptom checker (Gemini + Groq)",
        "Role-based access for patients, doctors, and admins (JWT)",
      ],
      results:
        "Built as a 3–4 person team project for a university microservices module and deployed with a working live demo.",
    },
  },
  {
    id: 13,
    slug: "examcoach",
    title: "ExamCoach — AI-Powered Exam Preparation Platform",
    description:
      "A MERN exam-preparation platform built as a 4-person team project for a university Application Frameworks module — students summarize material, generate and take AI quizzes, get AI-generated study plans, and sit invigilated practice exams with real-time cheating detection.",
    tags: ["MERN", "React", "Node.js", "Express", "MongoDB", "Socket.io", "Gemini", "Groq"],
    image: {
      src: "/projects/examcoach.png",
      real: false,
      placeholderIcon: GraduationCap,
      placeholderCaption: "Team project — screenshot pending",
    },
    demoUrl: "https://exam-coach-sigma.vercel.app",
    githubUrl: "https://github.com/DasunShanaka01/ExamCoach",
    featured: false,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "A university full-stack module (Application Frameworks) required a platform combining secure REST APIs, React frontend integration, role-based security, external API usage, and deployment — built as a 4-person team.",
      solution:
        "ExamCoach: students summarize learning material, generate and take AI-powered quizzes, follow AI-generated study plans, and sit invigilated practice exams with real-time cheating detection; teachers and admins manage content and platform activity. Built as a team of 4 — my contribution focused on the AI quiz generation and user management modules.",
      architecture:
        "React (Vite) frontend with a Socket.io client for real-time features; an Express/MongoDB backend with JWT auth, Cloudinary + multer for uploads, and Socket.io for real-time tab-switch cheating alerts. AI features call Google Gemini and Groq, with Tesseract.js OCR and PDF parsing to pull content from uploaded study documents.",
      features: [
        "AI-powered quiz generation from uploaded documents/text (Gemini + Groq + OCR)",
        "AI Learning Lab: material summarization and related resources",
        "AI-generated personalized study plans",
        "Real-time cheating detection via tab-switch alerts (Socket.io)",
        "Role-based access for students, teachers, and admins",
        "Course, stream, and lesson management",
      ],
      results:
        "Built as a 4-person team for a university Application Frameworks module; my contribution centered on the AI quiz generation and user management modules. Deployed live (frontend on Vercel, backend on Render).",
    },
  },
  {
    id: 14,
    slug: "beauty-pc-desktop-pos",
    title: "Beauty P&C — Offline Desktop POS",
    description:
      "An offline-first desktop point-of-sale application for Beauty P&C's physical shop — the till-side companion to its online store — built with Python and PyQt5, running entirely without an internet connection, with barcode scanning, receipt printing, and full financial management.",
    tags: ["Python", "PyQt5", "SQLite", "Desktop"],
    image: {
      src: "/projects/beauty-pc-pos.png",
      real: false,
      placeholderIcon: Receipt,
      placeholderCaption: "Desktop app — screenshot pending",
    },
    demoUrl: undefined,
    githubUrl: "https://github.com/PasinduLF/POS-system",
    featured: false,
    hasCaseStudy: true,
    caseStudy: {
      problem:
        "Beauty P&C's physical shop needed fast, reliable point-of-sale checkout and full financial record-keeping that didn't depend on an internet connection — a till-side system that keeps working through outages rather than relying on a server round-trip for every sale.",
      solution:
        "An offline-first desktop POS application for Windows: barcode-scanning checkout, product and variant management, stock tracking with low-stock alerts, and a full financial suite (cashbook, bankbook, expense tracking, and profit reporting) — all running locally against a SQLite database.",
      architecture:
        "A PyQt5 desktop application backed by a local SQLite database, packaged as a standalone Windows executable with PyInstaller. Receipt printing goes through python-escpos for thermal printer support, with pandas, openpyxl, and XlsxWriter used to generate Excel reports and ReportLab for PDFs.",
      features: [
        "Barcode-scanning POS checkout with cart, discounts, and multiple payment methods",
        "Product and variant management (size, color, SKU, barcodes, pricing)",
        "Stock tracking with low-stock alerts",
        "Sales, purchase, and supplier management with reporting",
        "Cashbook and bankbook for full cash/bank transaction tracking",
        "Daily/monthly/yearly profit and financial reports",
        "Role-based login for Admin and Cashier",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
