"use client";

import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-config";
import { useT } from "@/components/providers/language-provider";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Work() {
  const t = useT();

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="section-lazy scroll-mt-24 border-t border-border px-6 py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          id="work-title"
          index={t("work.index")}
          badge={t("work.badge")}
          title={t("work.title")}
        />

        <ul className="mt-12 space-y-6">
          {projects.map((project) => (
            <Reveal as="li" key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: (typeof projects)[number] }) {
  const t = useT();

  return (
    <a
      href={p.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group grid overflow-hidden rounded-md border border-border bg-surface transition-colors duration-150 hover:border-foreground/30 md:grid-cols-[1.25fr_1fr]"
    >
      <Preview image={p.preview} title={p.title} />

      <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
        <div>
          <div className="flex items-center justify-between gap-4">
            <span className="label">{t(`projects.${p.id}.tag`)}</span>
            <span className="label">{p.domain}</span>
          </div>

          {p.logo ? <ProjectLogo logo={p.logo} title={p.title} /> : null}

          <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {p.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {t(`projects.${p.id}.subtitle`)}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border px-2 py-1 font-mono text-[0.6875rem] text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
          {t("work.visit")}
          <ArrowUpRight
            aria-hidden
            className="rtl-flip h-4 w-4 text-accent transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </a>
  );
}

/**
 * Client wordmark shown above the project title. The source files are square
 * with generous padding, so the box crops to the wordmark band via object-cover
 * (44% keeps the mark centred and drops the sub-line, unreadable at this size);
 * the variants swap on `.dark` in CSS, which avoids a theme flash.
 */
function ProjectLogo({
  logo,
  title,
}: {
  logo: NonNullable<(typeof projects)[number]["logo"]>;
  title: string;
}) {
  return (
    <div className="relative mt-5 h-7 w-24 overflow-hidden">
      <Image
        src={logo.light}
        alt={`${title} logo`}
        fill
        sizes="6rem"
        className="object-cover object-[center_44%] dark:hidden"
      />
      <Image
        src={logo.dark}
        alt=""
        aria-hidden
        fill
        sizes="6rem"
        className="hidden object-cover object-[center_44%] dark:block"
      />
    </div>
  );
}

function Preview({ image, title }: { image: StaticImageData; title: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background md:aspect-auto md:border-b-0 md:border-e">
      <Image
        src={image}
        alt={`${title}: screenshot of the live site`}
        fill
        placeholder="blur"
        sizes="(min-width: 1024px) 560px, (min-width: 768px) 55vw, 100vw"
        className="object-cover object-top"
      />
    </div>
  );
}
