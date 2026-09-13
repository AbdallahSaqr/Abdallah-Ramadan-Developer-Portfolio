import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/**
 * Section index, label and heading. Flat type, no gradient fills: the index
 * rule and the accent tick carry the structure instead.
 */
export function SectionHeader({
  id,
  index,
  badge,
  title,
  className,
}: {
  /** Id for the heading, so the section can point at it with aria-labelledby. */
  id?: string;
  index: string;
  badge: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3">
        <span aria-hidden className="h-3 w-[3px] bg-accent" />
        <span className="label">
          {index} {badge}
        </span>
      </div>
      <h2
        id={id}
        className="mt-5 text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]"
      >
        {title}
      </h2>
    </Reveal>
  );
}
