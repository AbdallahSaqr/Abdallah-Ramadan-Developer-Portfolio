// @vitest-environment node
import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { config, proxy } from "@/proxy";

function request(
  init: { cookie?: string; acceptLanguage?: string; path?: string } = {}
) {
  const headers = new Headers();
  if (init.cookie) headers.set("cookie", init.cookie);
  if (init.acceptLanguage) headers.set("accept-language", init.acceptLanguage);
  return new NextRequest(new URL(init.path ?? "/", "https://abdallah.dev"), {
    headers,
  });
}

function redirectTarget(response: Response) {
  return new URL(response.headers.get("location") ?? "").pathname;
}

describe("locale proxy", () => {
  it("only runs on the bare root path", () => {
    expect(config.matcher).toBe("/");
  });

  it("redirects to English by default", () => {
    expect(redirectTarget(proxy(request()))).toBe("/en");
  });

  it("prefers the remembered locale cookie", () => {
    expect(redirectTarget(proxy(request({ cookie: "lang=ar" })))).toBe("/ar");
  });

  it("ignores an unsupported cookie value", () => {
    expect(redirectTarget(proxy(request({ cookie: "lang=fr" })))).toBe("/en");
  });

  it("falls back to the Accept-Language header", () => {
    expect(
      redirectTarget(proxy(request({ acceptLanguage: "ar-EG,ar;q=0.9,en;q=0.8" })))
    ).toBe("/ar");
  });

  it("matches the language subtag, not the full locale tag", () => {
    expect(
      redirectTarget(proxy(request({ acceptLanguage: "ar-SA" })))
    ).toBe("/ar");
  });

  it("respects header quality order", () => {
    expect(
      redirectTarget(proxy(request({ acceptLanguage: "en-GB,en;q=0.9,ar;q=0.5" })))
    ).toBe("/en");
  });

  it("skips languages the site does not support", () => {
    expect(
      redirectTarget(proxy(request({ acceptLanguage: "fr-FR,de;q=0.8,ar;q=0.5" })))
    ).toBe("/ar");
  });

  it("lets the cookie win over the header", () => {
    expect(
      redirectTarget(
        proxy(request({ cookie: "lang=en", acceptLanguage: "ar-EG" }))
      )
    ).toBe("/en");
  });

  it("answers with a redirect, not a rewrite", () => {
    const response = proxy(request());
    expect([307, 308]).toContain(response.status);
  });
});
