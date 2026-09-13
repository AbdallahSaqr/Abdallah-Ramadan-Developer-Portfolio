import { act, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Nav } from "@/components/site/nav";
import { messages } from "@/lib/i18n";
import { site } from "@/lib/site-config";
import { renderWithProviders } from "../../utils";
import { triggerIntersection } from "../../setup";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
}));

function renderNavWithSections() {
  const result = renderWithProviders(
    <>
      <Nav />
      {site.nav.map((item) => (
        <section key={item.id} id={item.id} />
      ))}
    </>
  );
  return result;
}

describe("Nav", () => {
  it("links every nav item to its section", () => {
    renderWithProviders(<Nav />);
    const nav = screen.getByRole("navigation", {
      name: messages.en["nav.primary"],
    });

    for (const item of site.nav) {
      expect(
        within(nav).getByRole("link", { name: messages.en[`nav.${item.id}`] })
      ).toHaveAttribute("href", item.href);
    }
  });

  it("labels the home link for screen readers", () => {
    renderWithProviders(<Nav />);
    expect(
      screen.getByRole("link", { name: messages.en["nav.home"] })
    ).toHaveAttribute("href", "#hero");
  });

  it("offers the résumé as a download", () => {
    renderWithProviders(<Nav />);
    const resume = screen.getByRole("link", {
      name: messages.en["nav.resume"],
    });
    expect(resume).toHaveAttribute("href", site.resumeHref);
    expect(resume).toHaveAttribute("download");
  });

  it("links the call to action to the contact email", () => {
    renderWithProviders(<Nav />);
    expect(
      screen.getByRole("link", { name: messages.en["nav.cta"] })
    ).toHaveAttribute("href", `mailto:${site.email}`);
  });

  it("marks no item current before scrolling", () => {
    renderNavWithSections();
    expect(document.querySelector("[aria-current]")).toBeNull();
  });

  it("marks the section in view as current", () => {
    renderNavWithSections();

    act(() => {
      triggerIntersection(document.getElementById("work")!, true);
    });

    const current = screen.getByRole("link", {
      name: messages.en["nav.work"],
    });
    expect(current).toHaveAttribute("aria-current", "true");
    expect(
      screen.getByRole("link", { name: messages.en["nav.skills"] })
    ).not.toHaveAttribute("aria-current");
  });

  it("renders Arabic labels in the Arabic locale", () => {
    renderWithProviders(<Nav />, { lang: "ar" });
    expect(
      screen.getByRole("link", { name: messages.ar["nav.contact"] })
    ).toBeInTheDocument();
  });
});
