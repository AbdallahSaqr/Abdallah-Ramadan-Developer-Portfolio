import { cva, type VariantProps } from "class-variance-authority";

/**
 * Shared button and link styling. Square-shouldered, flat colour, no pill
 * shapes or gradients. The site only needs these styles on anchors, so this
 * exports variants rather than a component:
 * `<a className={cn(buttonVariants({ variant: "outline" }))}>`.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-foreground text-background hover:bg-foreground/85",
        outline:
          "border border-border text-foreground hover:border-foreground/40 hover:bg-foreground/[0.04]",
        ghost: "text-muted hover:text-foreground hover:bg-foreground/[0.04]",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4",
        lg: "h-11 px-5 text-[0.9375rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
