import type { StaticImageData } from "next/image";
import type { MessageKey } from "@/lib/i18n";
import portrait from "@/assets/abdallah.jpg";
import elaykaPreview from "@/assets/previews/elayka.png";
import loopsPreview from "@/assets/previews/loops.png";
import mernanPreview from "@/assets/previews/mernan.png";
import obsidianPreview from "@/assets/previews/obsidian.png";
import elaykaLogoDark from "@/assets/logos/elayka-dark.png";
import elaykaLogoLight from "@/assets/logos/elayka-light.png";

/** Portrait used in the About section and in structured data. */
export const portraitImage = portrait;

export const site = {
  name: "Abdallah Ramadan",
  shortName: "AR",
  role: "Full-Stack Software Engineer",
  tagline:
    "I build production-ready full-stack web apps with React, Next.js, and Python — Django, FastAPI, and the AI plumbing in between.",
  email: "abdallahramadan2707@gmail.com",
  phone: "+201069100373",
  location: "Alexandria, Egypt",
  resumeHref: "/abdallah-ramadan-cv.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/AbdallahSaqr" },
    { label: "LinkedIn", href: "https://linkedin.com/in/abdallahramadan7" },
    { label: "Email", href: "mailto:abdallahramadan2707@gmail.com" },
  ],
  // Document order — the nav highlight follows the page as you scroll.
  nav: [
    { id: "about", href: "#about" },
    { id: "work", href: "#work" },
    { id: "skills", href: "#skills" },
    { id: "contact", href: "#contact" },
  ],
} as const;

export type ProjectId = "mernan" | "loops" | "elayka" | "obsidian";

type Project = {
  id: ProjectId;
  title: string;
  domain: string;
  url: string;
  /** Statically imported screenshot: gives next/image dimensions + blur data. */
  preview: StaticImageData;
  /** Optional client wordmark, swapped by theme on the project card. */
  logo?: { light: StaticImageData; dark: StaticImageData };
  stack: readonly string[];
  /** Tailwind gradient stops for the card's ambient glow. */
  accent: string;
};

export const projects: readonly Project[] = [
  {
    id: "mernan",
    title: "Mernan",
    domain: "mernan.sa",
    url: "https://www.mernan.sa/",
    preview: mernanPreview,
    stack: ["Next.js", "Supabase", "AWS S3", "i18next"],
    accent: "from-indigo-400/35 to-rose-300/15",
  },
  {
    id: "loops",
    title: "Loops",
    domain: "loops.sa",
    url: "https://www.loops.sa/en",
    preview: loopsPreview,
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Webhooks"],
    accent: "from-amber-300/30 to-indigo-400/15",
  },
  {
    id: "elayka",
    title: "Elayka",
    domain: "elayka.net",
    url: "https://elayka.net",
    preview: elaykaPreview,
    logo: { light: elaykaLogoLight, dark: elaykaLogoDark },
    stack: ["Django REST", "Next.js", "Zustand", "AWS S3"],
    accent: "from-rose-400/30 to-violet-400/20",
  },
  {
    id: "obsidian",
    title: "Obsidian Exchange",
    domain: "obsidianexchange.net",
    url: "https://obsidianexchange.net",
    preview: obsidianPreview,
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
      "Figma → Code",
    ],
  },
  {
    id: "backend",
    items: [
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express",
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

/** Highlight bullets are referenced by message key so both locales stay in sync. */
export const experiences = [
  {
    id: "mernan",
    highlights: ["exp.mernan.h1", "exp.mernan.h2", "exp.mernan.h3"],
  },
  { id: "csd", highlights: ["exp.csd.h1", "exp.csd.h2"] },
  { id: "iti", highlights: ["exp.iti.h1", "exp.iti.h2"] },
] as const satisfies readonly {
  id: ExperienceId;
  highlights: readonly MessageKey[];
}[];
