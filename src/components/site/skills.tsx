"use client";

import { expertise } from "@/lib/site-config";
import { useT } from "@/components/providers/language-provider";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Skills() {
  const t = useT();

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-lazy scroll-mt-24 border-t border-border px-6 py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          id="skills-title"
          index={t("skills.index")}
          badge={t("skills.badge")}
          title={t("skills.title")}
        />

        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {expertise.map((group, i) => (
            <Reveal as="li" key={group.id}>
              <div className="border-t border-border pt-5">
                <div className="flex items-baseline gap-3">
                  <span aria-hidden className="label">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {t(`skills.group.${group.id}`)}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
