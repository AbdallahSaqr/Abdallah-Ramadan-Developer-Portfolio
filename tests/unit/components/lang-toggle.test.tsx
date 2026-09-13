import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LangToggle } from "@/components/site/lang-toggle";
import { messages } from "@/lib/i18n";
import { renderWithProviders } from "../../utils";

const push = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push, replace: vi.fn(), prefetch: vi.fn() }),
}));

describe("LangToggle", () => {
  it("offers Arabic while browsing in English", () => {
    renderWithProviders(<LangToggle />, { lang: "en" });
    const button = screen.getByRole("button", {
      name: messages.en["nav.language"],
    });
    expect(button).toHaveTextContent("AR");
    expect(button).toHaveAttribute("lang", "ar");
  });

  it("offers English while browsing in Arabic", () => {
    renderWithProviders(<LangToggle />, { lang: "ar" });
    expect(
      screen.getByRole("button", { name: messages.ar["nav.language"] })
    ).toHaveTextContent("EN");
  });

  it("switches locale when clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<LangToggle />, { lang: "en" });

    await user.click(screen.getByRole("button"));

    expect(push).toHaveBeenCalledWith("/ar", { scroll: false });
  });

  it("keeps an accessible name even though it shows two letters", () => {
    renderWithProviders(<LangToggle />);
    expect(screen.getByRole("button")).toHaveAccessibleName(
      messages.en["nav.language"]
    );
  });
});
