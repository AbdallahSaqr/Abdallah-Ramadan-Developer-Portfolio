import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useMounted } from "@/lib/use-mounted";

describe("useMounted", () => {
  it("reports mounted on the client", () => {
    const { result } = renderHook(() => useMounted());
    expect(result.current).toBe(true);
  });

  it("stays true across re-renders", () => {
    const { result, rerender } = renderHook(() => useMounted());
    rerender();
    expect(result.current).toBe(true);
  });
});
