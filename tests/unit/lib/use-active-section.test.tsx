import { act, render, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useActiveSection } from "@/lib/use-active-section";
import { triggerIntersection } from "../../setup";

const IDS = ["about", "work", "skills"] as const;

function mountSections() {
  render(
    <>
      <section id="about" />
      <section id="work" />
      <section id="skills" />
    </>
  );
}

describe("useActiveSection", () => {
  it("starts with no active section", () => {
    mountSections();
    const { result } = renderHook(() => useActiveSection(IDS));
    expect(result.current).toBeNull();
  });

  it("activates the section that crosses the viewport centre", () => {
    mountSections();
    const { result } = renderHook(() => useActiveSection(IDS));

    act(() => {
      triggerIntersection(document.getElementById("work")!, true);
    });

    expect(result.current).toBe("work");
  });

  it("clears the section once it leaves the centre line", () => {
    mountSections();
    const { result } = renderHook(() => useActiveSection(IDS));

    act(() => {
      triggerIntersection(document.getElementById("work")!, true);
    });
    act(() => {
      triggerIntersection(document.getElementById("work")!, false);
    });

    expect(result.current).toBeNull();
  });

  it("prefers the earliest section in document order when several intersect", () => {
    mountSections();
    const { result } = renderHook(() => useActiveSection(IDS));

    act(() => {
      triggerIntersection(document.getElementById("skills")!, true);
      triggerIntersection(document.getElementById("about")!, true);
    });

    expect(result.current).toBe("about");
  });

  it("does nothing when none of the ids are on the page", () => {
    const { result } = renderHook(() => useActiveSection(["missing"]));
    expect(result.current).toBeNull();
  });
});
