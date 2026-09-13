import { vi } from "vitest";

export const push = vi.fn();
export const replace = vi.fn();
export const prefetch = vi.fn();

/** Minimal App Router stub for components that navigate. */
export const routerMock = {
  push,
  replace,
  prefetch,
  back: vi.fn(),
  forward: vi.fn(),
  refresh: vi.fn(),
};

export function mockNextNavigation() {
  vi.mock("next/navigation", () => ({
    useRouter: () => routerMock,
    usePathname: () => "/en",
    useSearchParams: () => new URLSearchParams(),
    notFound: vi.fn(),
  }));
}
