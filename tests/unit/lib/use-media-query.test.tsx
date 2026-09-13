import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useIsMobile, useMediaQuery } from "@/lib/use-media-query";
import { mediaMatches } from "../../setup";

const MOBILE_QUERY = "(max-width: 767px)";

describe("useMediaQuery", () => {
  it("returns false when the query does not match", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 900px)"));
    expect(result.current).toBe(false);
  });

  it("returns true when the query matches", () => {
    mediaMatches.set("(min-width: 900px)", true);
    const { result } = renderHook(() => useMediaQuery("(min-width: 900px)"));
    expect(result.current).toBe(true);
  });

  it("subscribes and unsubscribes to the media query list", () => {
    const addEventListener = vi.fn();
    const removeEventListener = vi.fn();
    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => ({ matches: false, addEventListener, removeEventListener }))
    );

    const { unmount } = renderHook(() => useMediaQuery("(min-width: 900px)"));
    expect(addEventListener).toHaveBeenCalledWith("change", expect.any(Function));

    unmount();
    expect(removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );
  });
});

describe("useIsMobile", () => {
  it("asks for viewports below Tailwind's md breakpoint", () => {
    renderHook(() => useIsMobile());
    expect(window.matchMedia).toHaveBeenCalledWith(MOBILE_QUERY);
  });

  it("is false on wide viewports", () => {
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("is true on narrow viewports", () => {
    mediaMatches.set(MOBILE_QUERY, true);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });
});
