import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { MobileMenuTrigger } from "@/components/site/mobile-menu";
import { messages } from "@/lib/i18n";
import { site } from "@/lib/site-config";
import { renderWithProviders } from "../../utils";
import { mediaMatches } from "../../setup";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
}));

const MOBILE_QUERY = "(max-width: 767px)";

beforeEach(() => {
  mediaMatches.set(MOBILE_QUERY, true);
});

function openMenu() {
  return userEvent.click(
    screen.getByRole("button", { name: messages.en["nav.menu"] })
  );
}

describe("MobileMenuTrigger", () => {
  it("renders the trigger on first paint, before any effect runs", () => {
    renderWithProviders(<MobileMenuTrigger />);
    expect(
      screen.getByRole("button", { name: messages.en["nav.menu"] })
    ).toBeInTheDocument();
  });

  it("starts collapsed", () => {
    renderWithProviders(<MobileMenuTrigger />);
    expect(
      screen.getByRole("button", { name: messages.en["nav.menu"] })
    ).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens a modal dialog with the site navigation", async () => {
    renderWithProviders(<MobileMenuTrigger />);
    await openMenu();

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    for (const item of site.nav) {
      expect(
        within(dialog).getByRole("link", { name: messages.en[`nav.${item.id}`] })
      ).toHaveAttribute("href", item.href);
    }
  });

  it("marks the trigger expanded and points it at the panel", async () => {
    renderWithProviders(<MobileMenuTrigger />);
    await openMenu();

    const trigger = screen.getByRole("button", { name: messages.en["nav.menu"] });
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(trigger.getAttribute("aria-controls")).toBe(
      screen.getByRole("dialog").id
    );
  });

  it("locks background scrolling while open and restores it on close", async () => {
    const user = userEvent.setup();
    renderWithProviders(<MobileMenuTrigger />);

    await openMenu();
    expect(document.body.style.overflow).toBe("hidden");

    await user.click(
      screen.getByRole("button", { name: messages.en["nav.close"] })
    );
    await waitFor(() => expect(document.body.style.overflow).not.toBe("hidden"));
  });

  it("moves focus to the close button when it opens", async () => {
    renderWithProviders(<MobileMenuTrigger />);
    await openMenu();

    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: messages.en["nav.close"] })
      ).toHaveFocus()
    );
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const user = userEvent.setup();
    renderWithProviders(<MobileMenuTrigger />);
    await openMenu();

    await user.keyboard("{Escape}");

    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
    expect(
      screen.getByRole("button", { name: messages.en["nav.menu"] })
    ).toHaveFocus();
  });

  it("closes when a navigation link is followed", async () => {
    const user = userEvent.setup();
    renderWithProviders(<MobileMenuTrigger />);
    await openMenu();

    await user.click(
      within(screen.getByRole("dialog")).getByRole("link", {
        name: messages.en["nav.work"],
      })
    );

    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
  });

  it("wraps Tab from the last focusable back to the first", async () => {
    const user = userEvent.setup();
    renderWithProviders(<MobileMenuTrigger />);
    await openMenu();

    const dialog = screen.getByRole("dialog");
    const focusables = Array.from(
      dialog.querySelectorAll<HTMLElement>("a[href], button")
    );
    expect(focusables.length).toBeGreaterThan(2);

    focusables[focusables.length - 1].focus();
    await user.tab();
    expect(focusables[0]).toHaveFocus();
  });

  it("wraps Shift+Tab from the first focusable back to the last", async () => {
    const user = userEvent.setup();
    renderWithProviders(<MobileMenuTrigger />);
    await openMenu();

    const dialog = screen.getByRole("dialog");
    const focusables = Array.from(
      dialog.querySelectorAll<HTMLElement>("a[href], button")
    );

    focusables[0].focus();
    await user.tab({ shift: true });
    expect(focusables[focusables.length - 1]).toHaveFocus();
  });

  it("offers the résumé download inside the panel", async () => {
    renderWithProviders(<MobileMenuTrigger />);
    await openMenu();

    const resume = within(screen.getByRole("dialog")).getByRole("link", {
      name: messages.en["nav.resume"],
    });
    expect(resume).toHaveAttribute("href", site.resumeHref);
    expect(resume).toHaveAttribute("download");
  });

  it("is not rendered at all on desktop viewports", async () => {
    mediaMatches.set(MOBILE_QUERY, false);
    renderWithProviders(<MobileMenuTrigger />);

    await userEvent.click(
      screen.getByRole("button", { name: messages.en["nav.menu"] })
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
