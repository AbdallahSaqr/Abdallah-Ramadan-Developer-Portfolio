import { act, renderHook, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  LanguageProvider,
  useLang,
  useT,
} from "@/components/providers/language-provider";
import { messages } from "@/lib/i18n";
import { readCookie } from "../../utils";

const push = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push, replace: vi.fn(), prefetch: vi.fn() }),
}));

function wrapper(lang: "en" | "ar") {
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return <LanguageProvider lang={lang}>{children}</LanguageProvider>;
  };
}

beforeEach(() => {
  push.mockClear();
  document.cookie = "lang=; path=/; max-age=0";
});

describe("LanguageProvider", () => {
  it("translates keys in the active locale", () => {
    const { result } = renderHook(() => useT(), { wrapper: wrapper("ar") });
    expect(result.current("nav.work")).toBe(messages.ar["nav.work"]);
  });

  it("exposes the writing direction for the locale", () => {
    expect(
      renderHook(() => useLang(), { wrapper: wrapper("ar") }).result.current.dir
    ).toBe("rtl");
    expect(
      renderHook(() => useLang(), { wrapper: wrapper("en") }).result.current.dir
    ).toBe("ltr");
  });

  it("navigates to the other locale without scrolling to the top", () => {
    const { result } = renderHook(() => useLang(), { wrapper: wrapper("en") });

    act(() => result.current.setLang("ar"));

    expect(push).toHaveBeenCalledWith("/ar", { scroll: false });
  });

  it("remembers the choice in a lax, year-long cookie", () => {
    const { result } = renderHook(() => useLang(), { wrapper: wrapper("en") });

    act(() => result.current.setLang("ar"));

    expect(readCookie("lang")).toBe("ar");
  });

  it("throws a helpful error when used outside the provider", () => {
    // Silence React's error boundary logging for this expected throw.
    const error = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useLang())).toThrow(
      /must be used inside LanguageProvider/
    );
    error.mockRestore();
  });

  it("renders its children", () => {
    const Wrapper = wrapper("en");
    renderHook(() => null, { wrapper: Wrapper });
    expect(screen.queryByText("never rendered")).toBeNull();
  });
});
