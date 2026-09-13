"use client";

import Image from "next/image";
import { useT } from "@/components/providers/language-provider";
import { portraitImage, site } from "@/lib/site-config";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function About() {
  const t = useT();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-lazy scroll-mt-24 border-t border-border px-6 py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          id="about-title"
          index={t("about.index")}
          badge={t("about.badge")}
          title={t("about.title")}
        />

        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:gap-14">
          <Reveal>
            <figure className="m-0">
              <div
                className="relative overflow-hidden rounded-md border border-border bg-surface"
                style={{
                  aspectRatio: `${portraitImage.width} / ${portraitImage.height}`,
                }}
              >
                <Image
                  src={portraitImage}
                  alt={`${site.name}, ${site.role}`}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 18rem, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-2 text-xs text-muted">
                <span aria-hidden className="h-2 w-2 bg-accent" />
                {t("about.available")}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>{t("about.bio.1")}</p>
              <p>{t("about.bio.2")}</p>
            </div>

            <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-2">
              <Detail
                label={t("about.detail.currently.label")}
                value={t("about.detail.currently.value")}
              />
              <Detail
                label={t("about.detail.education.label")}
                value={t("about.detail.education.value")}
              />
              <Detail
                label={t("about.detail.location.label")}
                value={t("about.detail.location.value")}
              />
              <Detail
                label={t("about.detail.languages.label")}
                value={t("about.detail.languages.value")}
              />
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="label">{label}</dt>
      <dd className="mt-1.5 text-sm text-foreground">{value}</dd>
    </div>
  );
}
