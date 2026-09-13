"use client";

import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site-config";
import { useT } from "@/components/providers/language-provider";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Contact() {
  const t = useT();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-lazy scroll-mt-24 border-t border-border px-6 py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          id="contact-title"
          index={t("contact.index")}
          badge={t("contact.badge")}
          title={t("contact.title")}
        />

        <Reveal>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {t("contact.description")}
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block break-all text-xl font-semibold tracking-tight text-foreground underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent sm:text-2xl"
          >
            {site.email}
          </a>

          <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-3">
            <Item
              label={t("contact.phone.label")}
              value={site.phone}
              href={`tel:${site.phone}`}
            />
            <Item
              label={t("contact.location.label")}
              value={t("about.detail.location.value")}
            />
            <div>
              <dt className="label">{t("contact.elsewhere.label")}</dt>
              <dd className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
                {site.socials
                  .filter((social) => social.href.startsWith("http"))
                  .map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-accent"
                    >
                      {social.label}
                      <ArrowUpRight aria-hidden className="rtl-flip h-3 w-3" />
                    </a>
                  ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Item({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <dt className="label">{label}</dt>
      <dd className="mt-1.5 text-sm text-foreground">
        {href ? (
          <a href={href} className="transition-colors hover:text-accent">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
