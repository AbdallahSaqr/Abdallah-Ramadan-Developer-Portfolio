import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

/** jsdom implements neither of these; Motion and the site hooks need both. */
class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds: readonly number[] = [];
  private readonly callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    observers.add(this);
  }

  observe(target: Element) {
    targets.set(this, [...(targets.get(this) ?? []), target]);
  }
  unobserve() {}
  disconnect() {
    observers.delete(this);
    targets.delete(this);
  }
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  /** Test helper: pretend `target` crossed the observer's threshold. */
  trigger(target: Element, isIntersecting: boolean) {
    this.callback(
      [{ target, isIntersecting } as IntersectionObserverEntry],
      this
    );
  }
}

const observers = new Set<MockIntersectionObserver>();
const targets = new Map<MockIntersectionObserver, Element[]>();

/** Fire an intersection change on every observer watching `target`. */
export function triggerIntersection(target: Element, isIntersecting: boolean) {
  for (const observer of observers) {
    if (targets.get(observer)?.includes(target)) {
      observer.trigger(target, isIntersecting);
    }
  }
}

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

/** matchMedia stub whose result can be steered per test. */
export const mediaMatches = new Map<string, boolean>();

/** Node-environment specs (the proxy) get no DOM; skip the browser stubs. */
const isBrowser = typeof window !== "undefined";

beforeEach(() => {
  mediaMatches.clear();
  observers.clear();
  targets.clear();

  if (!isBrowser) return;

  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  vi.stubGlobal("ResizeObserver", MockResizeObserver);
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({
      matches: mediaMatches.get(query) ?? false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
  );
  window.scrollTo = vi.fn();
});

afterEach(() => {
  if (!isBrowser) return;

  cleanup();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
  document.documentElement.className = "";
  localStorage.clear();
});
