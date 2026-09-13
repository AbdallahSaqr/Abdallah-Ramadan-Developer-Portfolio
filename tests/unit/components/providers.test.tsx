import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Providers } from "@/components/providers";
import { useLang } from "@/components/providers/language-provider";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { messages } from "@/lib/i18n";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
}));

function LocaleProbe() {
  const { lang, dir } = useLang();
  return <span data-testid="probe">{`${lang}:${dir}`}</span>;
}

describe("Providers", () => {
  it("passes the requested locale down to consumers", () => {
    render(
      <Providers lang="ar">
        <LocaleProbe />
      </Providers>
    );
    expect(screen.getByTestId("probe")).toHaveTextContent("ar:rtl");
  });

  it("makes translations available to children", () => {
    render(
      <Providers lang="en">
        <ThemeToggle />
      </Providers>
    );
    expect(screen.getByRole("button")).toHaveAccessibleName(
      messages.en["nav.theme"]
    );
  });

  it("wires the theme provider to the document class", async () => {
    const user = userEvent.setup();
    render(
      <Providers lang="en">
        <ThemeToggle />
      </Providers>
    );

    await user.click(screen.getByRole("button"));

    await waitFor(() =>
      expect(document.documentElement.className).toMatch(/light|dark/)
    );
  });
});
