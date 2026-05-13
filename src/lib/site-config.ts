export const site = {
  name: "Abdallah Ramadan",
  shortName: "AR",
  role: "Full-Stack Software Engineer",
  tagline:
    "I build production-ready full-stack web apps with React, Next.js, and Python — Django, FastAPI, and the AI plumbing in between.",
  email: "abdallahramadan2707@gmail.com",
  phone: "+201069100373",
  location: "Alexandria, Egypt",
  resumeHref: "/New%20CV.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/AbdallahSaqr" },
    { label: "LinkedIn", href: "https://linkedin.com/in/abdallahramadan7" },
    { label: "Email", href: "mailto:abdallahramadan2707@gmail.com" },
  ],
  nav: [
    { id: "work", href: "#work" },
    { id: "skills", href: "#skills" },
    { id: "about", href: "#about" },
    { id: "contact", href: "#contact" },
  ],
} as const;

export type ProjectId = "mernan" | "loops" | "elayka" | "obsidian";

type Project = {
  id: ProjectId;
  title: string;
  domain: string;
  url: string;
  preview?: string;
  stack: readonly string[];
  accent: string;
};

export const projects: readonly Project[] = [
  {
    id: "mernan",
    title: "Mernan",
    domain: "mernan.sa",
    url: "https://www.mernan.sa/",
    preview: "/previews/mernan.png",
    stack: ["Next.js", "Supabase", "AWS S3", "i18next"],
    accent: "from-indigo-400/35 to-rose-300/15",
  },
  {
    id: "loops",
    title: "Loops",
    domain: "loops.sa",
    url: "https://www.loops.sa/en",
    preview: "/previews/loops.png",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Webhooks"],
    accent: "from-amber-300/30 to-indigo-400/15",
  },
  {
    id: "elayka",
    title: "Elayka",
    domain: "elayka.net",
    url: "https://elayka.net",
    preview: "/previews/elayka.png",
    stack: ["Django REST", "Next.js", "Zustand", "AWS S3"],
    accent: "from-rose-400/30 to-violet-400/20",
  },
  {
    id: "obsidian",
    title: "Obsidian Exchange",
    domain: "obsidianexchange.net",
    url: "https://obsidianexchange.net",
    preview: "/previews/obsidian.png",
    stack: ["React", "Vite", "Tailwind", "Google Sheets"],
    accent: "from-violet-400/35 to-cyan-300/15",
  },
];

export type ExpertiseId = "frontend" | "backend" | "data" | "ai";

export const expertise: readonly {
  id: ExpertiseId;
  items: readonly string[];
}[] = [
  {
    id: "frontend",
    items: [
      "React 19",
      "Next.js 16",
      "TypeScript",
      "Tailwind v4",
      "Framer Motion",
      "Zustand",
      "i18next",
    ],
  },
  {
    id: "backend",
    items: [
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "Odoo",
      "REST APIs",
      "JWT Auth",
    ],
  },
  {
    id: "data",
    items: [
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "AWS S3",
      "Docker",
      "Linux",
      "Git",
    ],
  },
  {
    id: "ai",
    items: [
      "AI APIs",
      "Prompt Engineering",
      "Chainlit",
      "Stripe",
      "Google APIs",
      "OpenAPI",
    ],
  },
];

export type ExperienceId = "mernan" | "csd" | "iti";

export const experiences: readonly {
  id: ExperienceId;
  highlights: number;
}[] = [
  { id: "mernan", highlights: 3 },
  { id: "csd", highlights: 2 },
  { id: "iti", highlights: 2 },
];
