import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SkipLink } from "@/components/site/skip-link";
import { messages } from "@/lib/i18n";
import { renderWithProviders } from "../../utils";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
}));

describe("SkipLink", () => {
  it("targets the main landmark", () => {
    renderWithProviders(<SkipLink />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "#main");
  });

  it("is parked off-screen until focused", () => {
    renderWithProviders(<SkipLink />);
    const link = screen.getByRole("link");
    expect(link.className).toContain("-translate-y-24");
    expect(link.className).toContain("focus:translate-y-0");
  });

  it("translates its label", () => {
    renderWithProviders(<SkipLink />, { lang: "ar" });
    expect(screen.getByRole("link")).toHaveTextContent(messages.ar["nav.skip"]);
  });
});
