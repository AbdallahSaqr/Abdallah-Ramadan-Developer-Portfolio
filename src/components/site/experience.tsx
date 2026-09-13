"use client";

import { experiences } from "@/lib/site-config";
import { useT } from "@/components/providers/language-provider";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Experience() {
  const t = useT();

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-lazy scroll-mt-24 border-t border-border px-6 py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          id="experience-title"
          index={t("exp.index")}
          badge={t("exp.badge")}
          title={t("exp.title")}
        />

        <ol className="mt-12 space-y-10">
          {experiences.map((role) => (
            <Reveal as="li" key={role.id}>
              <article className="grid gap-4 border-t border-border pt-6 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-10">
                <div>
                  <p className="label">{t(`exp.${role.id}.period`)}</p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                    {t(`exp.${role.id}.company`)}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {t(`exp.${role.id}.role`)}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {t(`exp.${role.id}.location`)}
                  </p>
                </div>

                <ul className="space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                  {role.highlights.map((key) => (
                    <li key={key} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2.5 h-px w-4 shrink-0 bg-accent"
                      />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
