import { screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { About } from "@/components/site/about";
import { Background } from "@/components/site/background";
import { Contact } from "@/components/site/contact";
import { Experience } from "@/components/site/experience";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { SectionHeader } from "@/components/site/section-header";
import { Skills } from "@/components/site/skills";
import { Work } from "@/components/site/work";
import { messages } from "@/lib/i18n";
import { expertise, experiences, projects, site } from "@/lib/site-config";
import { renderWithProviders } from "../../utils";
import { mediaMatches } from "../../setup";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
}));

describe("Hero", () => {
  it("shows the headline as the page's h1", () => {
    renderWithProviders(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      messages.en["hero.title1"]
    );
  });

  it("offers work, contact and resume actions", () => {
    renderWithProviders(<Hero />);
    expect(
      screen.getByRole("link", { name: messages.en["hero.cta.work"] })
    ).toHaveAttribute("href", "#work");
    expect(
      screen.getByRole("link", { name: messages.en["hero.cta.contact"] })
    ).toHaveAttribute("href", `mailto:${site.email}`);
    expect(
      screen.getByRole("link", { name: messages.en["hero.cta.resume"] })
    ).toHaveAttribute("href", site.resumeHref);
  });

  it("translates the hero copy", () => {
    renderWithProviders(<Hero />, { lang: "ar" });
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      messages.ar["hero.title1"]
    );
  });
});

describe("About", () => {
  it("is labelled by its own heading", () => {
    const { container } = renderWithProviders(<About />);
    expect(container.querySelector("#about")).toHaveAttribute(
      "aria-labelledby",
      "about-title"
    );
    expect(document.getElementById("about-title")).toHaveTextContent(
      messages.en["about.title1"]
    );
  });

  it("describes the portrait with the person's name and role", () => {
    renderWithProviders(<About />);
    expect(
      screen.getByRole("img", { name: `${site.name}, ${site.role}` })
    ).toBeInTheDocument();
  });

  it("renders the profile facts as a description list", () => {
    renderWithProviders(<About />);
    expect(
      screen.getByText(messages.en["about.detail.currently.label"]).tagName
    ).toBe("DT");
    expect(
      screen.getByText(messages.en["about.detail.currently.value"]).tagName
    ).toBe("DD");
  });

  it("mentions the Figma-to-production capability", () => {
    renderWithProviders(<About />);
    expect(screen.getByText(/Figma designs/i)).toBeInTheDocument();
  });
});

describe("Work", () => {
  it("lists every project with its stack", () => {
    renderWithProviders(<Work />);
    for (const project of projects) {
      expect(
        screen.getByRole("heading", { name: project.title })
      ).toBeInTheDocument();
      for (const tech of project.stack) {
        expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
      }
    }
  });

  it("opens live sites in a new tab without leaking the opener", () => {
    const { container } = renderWithProviders(<Work />);
    const links =
      container.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]');

    expect(links).toHaveLength(projects.length);
    links.forEach((link) => {
      expect(link.rel).toContain("noopener");
      expect(link.rel).toContain("noreferrer");
    });
  });

  it("serves screenshots locally instead of a third-party screenshot API", () => {
    const { container } = renderWithProviders(<Work />);
    container.querySelectorAll("img").forEach((img) => {
      expect(img.src).not.toContain("microlink");
    });
  });

  it("gives every screenshot a descriptive alt text", () => {
    renderWithProviders(<Work />);
    for (const project of projects) {
      expect(
        screen.getByRole("img", {
          name: `${project.title} — screenshot of the live site`,
        })
      ).toBeInTheDocument();
    }
  });

  it("shows the client wordmark when a project has one", () => {
    renderWithProviders(<Work />);
    const withLogo = projects.filter((project) => project.logo);

    expect(withLogo.length).toBeGreaterThan(0);
    for (const project of withLogo) {
      expect(
        screen.getByRole("img", { name: `${project.title} logo` })
      ).toBeInTheDocument();
    }
  });
});

describe("Skills", () => {
  it("renders every group with all of its chips", () => {
    renderWithProviders(<Skills />);
    for (const group of expertise) {
      const card = screen
        .getByRole("heading", { name: messages.en[`skills.group.${group.id}`] })
        .closest("li")!;
      for (const item of group.items) {
        expect(within(card).getByText(item)).toBeInTheDocument();
      }
    }
  });

  it("numbers the groups with a leading zero", () => {
    renderWithProviders(<Skills />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(
      screen.getByText(String(expertise.length).padStart(2, "0"))
    ).toBeInTheDocument();
  });
});

describe("Experience", () => {
  it("renders each role with its highlights", () => {
    renderWithProviders(<Experience />);
    for (const role of experiences) {
      expect(
        screen.getByRole("heading", {
          name: messages.en[`exp.${role.id}.company`],
        })
      ).toBeInTheDocument();
      for (const key of role.highlights) {
        expect(screen.getByText(messages.en[key])).toBeInTheDocument();
      }
    }
  });

  it("exposes a deep-linkable section", () => {
    const { container } = renderWithProviders(<Experience />);
    expect(container.querySelector("#experience")).toBeInTheDocument();
  });
});

describe("Contact", () => {
  it("links the email and phone", () => {
    renderWithProviders(<Contact />);
    expect(
      screen.getByRole("link", { name: new RegExp(site.email) })
    ).toHaveAttribute("href", `mailto:${site.email}`);
    expect(screen.getByRole("link", { name: site.phone })).toHaveAttribute(
      "href",
      `tel:${site.phone}`
    );
  });

  it("marks external social links safe", () => {
    renderWithProviders(<Contact />);
    const external = site.socials.filter((s) => s.href.startsWith("http"));

    for (const social of external) {
      const link = screen.getByRole("link", { name: new RegExp(social.label) });
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noopener");
    }
  });

  it("does not open the mailto social in a new tab", () => {
    renderWithProviders(<Contact />);
    expect(screen.getByRole("link", { name: /^Email/ })).not.toHaveAttribute(
      "target"
    );
  });
});

describe("Footer", () => {
  it("shows the current year and the owner's name", () => {
    renderWithProviders(<Footer />);
    expect(
      screen.getByText(new RegExp(`${new Date().getFullYear()}\\s+${site.name}`))
    ).toBeInTheDocument();
  });
});

describe("SectionHeader", () => {
  it("renders an h2 that a section can be labelled by", () => {
    renderWithProviders(
      <SectionHeader
        id="demo-title"
        index="09"
        badge="Demo"
        title1="First"
        title2="Second"
      />
    );
    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveAttribute("id", "demo-title");
    expect(heading).toHaveTextContent("FirstSecond");
  });

  it("works without a second title line", () => {
    renderWithProviders(<SectionHeader index="01" badge="Demo" title1="Only" />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Only");
  });
});

describe("Background", () => {
  it("is hidden from assistive technology", () => {
    const { container } = renderWithProviders(<Background />);
    const root = container.querySelector("div.fixed");

    expect(root).toHaveAttribute("aria-hidden");
    expect(root?.className).toContain("pointer-events-none");
  });

  it("renders the decorative blobs on both mobile and desktop", () => {
    const { container, unmount } = renderWithProviders(<Background />);
    expect(container.querySelectorAll("div.rounded-full")).toHaveLength(2);
    unmount();

    mediaMatches.set("(max-width: 767px)", true);
    const mobile = renderWithProviders(<Background />);
    expect(mobile.container.querySelectorAll("div.rounded-full")).toHaveLength(
      2
    );
  });
});
