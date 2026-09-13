import { cva, type VariantProps } from "class-variance-authority";

/**
 * Shared button/link styling. The site only ever needs these styles on
 * anchors, so this exports variants rather than a <button> component —
 * `<a className={cn(buttonVariants({ variant: "glass" }))}>`.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background hover:opacity-90 shadow-[0_0_0_1px_color-mix(in_srgb,var(--fg)_10%,transparent),0_20px_40px_-20px_color-mix(in_srgb,var(--fg)_50%,transparent)] hover:-translate-y-0.5",
        ghost: "text-foreground/70 hover:text-foreground hover:bg-foreground/5",
        glass:
          "border border-foreground/10 bg-foreground/[0.04] text-foreground backdrop-blur-md hover:bg-foreground/[0.08] hover:border-foreground/20 hover:-translate-y-0.5",
        outline:
          "border border-foreground/15 text-foreground hover:bg-foreground/5 hover:border-foreground/30",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-7 text-base sm:h-13",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
