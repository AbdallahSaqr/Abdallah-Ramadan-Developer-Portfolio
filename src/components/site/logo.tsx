import Image from "next/image";
import { cn } from "@/lib/utils";

const SIZE = 64;

/**
 * Decorative monogram. The dark-mode mark shows under `.dark`, the light one
 * otherwise, as a plain CSS swap so there is no theme flash on first paint.
 *
 * Both images are `aria-hidden`: whatever wraps the logo owns the name.
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
        className={cn("hidden rounded-md dark:block", className)}
      />
      <Image
        src="/abdallah-saqr-logo-light.svg"
        alt=""
        aria-hidden
        width={SIZE}
        height={SIZE}
        className={cn("block rounded-md dark:hidden", className)}
      />
    </>
  );
}
