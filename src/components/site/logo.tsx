import Image from "next/image";
import { cn } from "@/lib/utils";

const SIZE = 64;

/**
 * Decorative brand mark — the dark variant shows under `.dark`, the light one
 * otherwise. Purely a CSS swap, so there is no theme flash on first paint.
 *
 * Both images are `aria-hidden`: whatever wraps the logo (a link, a button)
 * owns the accessible name.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <>
      <Image
        src="/abdallah-saqr-logo.svg"
        alt=""
        aria-hidden
        width={SIZE}
        height={SIZE}
        className={cn("hidden rounded-full object-cover dark:block", className)}
      />
      <Image
        src="/abdallah-saqr-logo-light.svg"
        alt=""
        aria-hidden
        width={SIZE}
        height={SIZE}
        className={cn("block rounded-full object-cover dark:hidden", className)}
      />
    </>
  );
}
