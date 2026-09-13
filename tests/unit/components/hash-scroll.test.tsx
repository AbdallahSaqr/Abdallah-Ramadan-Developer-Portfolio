import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { HashScroll } from "@/components/site/hash-scroll";

function mountTarget(id: string) {
  const section = document.createElement("section");
  section.id = id;
  section.scrollIntoView = vi.fn();
  document.body.append(section);
  return section;
}

beforeEach(() => {
  vi.useFakeTimers();
  // jsdom has no font loading API.
  Object.defineProperty(document, "fonts", {
    configurable: true,
    value: { ready: Promise.resolve() },
  });
});

afterEach(() => {
  vi.useRealTimers();
  window.location.hash = "";
  document.body.innerHTML = "";
});

describe("HashScroll", () => {
  it("scrolls to the section named in the hash", () => {
    window.location.hash = "#work";
    const target = mountTarget("work");

    render(<HashScroll />);

    expect(target.scrollIntoView).toHaveBeenCalledWith({
      behavior: "instant",
      block: "start",
    });
  });

  it("does nothing without a hash", () => {
    const target = mountTarget("work");

    render(<HashScroll />);

    expect(target.scrollIntoView).not.toHaveBeenCalled();
  });

  it("does nothing when the hash points at a missing element", () => {
    window.location.hash = "#nowhere";
    const target = mountTarget("work");

    expect(() => render(<HashScroll />)).not.toThrow();
    expect(target.scrollIntoView).not.toHaveBeenCalled();
  });

  it("re-scrolls when the target moves as the layout settles", () => {
    window.location.hash = "#work";
    const target = mountTarget("work");
    let offset = 100;
    Object.defineProperty(target, "offsetTop", { get: () => offset });

    render(<HashScroll />);
    expect(target.scrollIntoView).toHaveBeenCalledTimes(1);

    offset = 900;
    vi.advanceTimersByTime(200);

    expect(target.scrollIntoView).toHaveBeenCalledTimes(2);
  });

  it("stops correcting once the layout is stable", () => {
    window.location.hash = "#work";
    const target = mountTarget("work");
    Object.defineProperty(target, "offsetTop", { get: () => 100 });

    render(<HashScroll />);
    vi.advanceTimersByTime(1000);

    expect(target.scrollIntoView).toHaveBeenCalledTimes(1);
  });

  it("hands control back as soon as the visitor scrolls", () => {
    window.location.hash = "#work";
    const target = mountTarget("work");
    let offset = 100;
    Object.defineProperty(target, "offsetTop", { get: () => offset });

    render(<HashScroll />);
    window.dispatchEvent(new Event("wheel"));

    offset = 900;
    vi.advanceTimersByTime(500);

    expect(target.scrollIntoView).toHaveBeenCalledTimes(1);
  });

  it("cleans up its timer on unmount", () => {
    window.location.hash = "#work";
    const target = mountTarget("work");
    let offset = 100;
    Object.defineProperty(target, "offsetTop", { get: () => offset });

    const { unmount } = render(<HashScroll />);
    unmount();

    offset = 900;
    vi.advanceTimersByTime(500);

    expect(target.scrollIntoView).toHaveBeenCalledTimes(1);
  });
});
