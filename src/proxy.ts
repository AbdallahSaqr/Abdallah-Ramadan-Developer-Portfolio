import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE, locales } from "@/lib/i18n";

/**
 * Sends bare `/` to a locale-prefixed page. Preference order:
 *   1. the `lang` cookie written by the language toggle,
 *   2. the browser's Accept-Language header,
 *   3. English.
 *
 * Every other path already carries its locale, so the matcher below keeps this
 * off the hot path.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${resolveLocale(request)}`;
  return NextResponse.redirect(url);
}

function resolveLocale(request: NextRequest) {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;

  const header = request.headers.get("accept-language");
  if (header) {
    for (const part of header.split(",")) {
      const tag = part.split(";")[0].trim().toLowerCase();
      const base = tag.split("-")[0];
      if (locales.includes(base as (typeof locales)[number])) return base;
    }
  }

  return DEFAULT_LOCALE;
}

export const config = {
  matcher: "/",
};
