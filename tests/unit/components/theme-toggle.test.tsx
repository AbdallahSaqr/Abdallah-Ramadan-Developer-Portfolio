import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { messages } from "@/lib/i18n";
import { renderWithProviders } from "../../utils";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
}));

describe("ThemeToggle", () => {
  it("is labelled for screen readers", () => {
    renderWithProviders(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveAccessibleName(
      messages.en["nav.theme"]
    );
  });

  it("switches the document to the light theme", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeToggle />);

    await user.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(document.documentElement).toHaveClass("light");
    });
  });

  it("switches back to dark on a second click", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeToggle />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(document.documentElement).toHaveClass("dark");
    });
  });

  it("shows the moon in dark mode and the sun in light mode", async () => {
    const user = userEvent.setup();
    const { container } = renderWithProviders(<ThemeToggle />);

    expect(container.querySelectorAll("svg")).toHaveLength(1);
    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");

    await user.click(screen.getByRole("button"));

    await waitFor(() =>
      expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "false")
    );
    expect(container.querySelectorAll("svg")).toHaveLength(1);
  });

  it("hides the decorative icon from assistive tech", () => {
    const { container } = renderWithProviders(<ThemeToggle />);
    container
      .querySelectorAll("svg")
      .forEach((icon) => expect(icon).toHaveAttribute("aria-hidden"));
  });
});
