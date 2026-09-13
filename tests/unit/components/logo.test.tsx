import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo } from "@/components/site/logo";

describe("Logo", () => {
  it("renders a light and a dark variant swapped by CSS", () => {
    const { container } = render(<Logo />);
    const images = container.querySelectorAll("img");

    expect(images).toHaveLength(2);
    expect(images[0].className).toContain("dark:block");
    expect(images[1].className).toContain("dark:hidden");
  });

  it("is decorative, so the surrounding link owns the accessible name", () => {
    const { container } = render(<Logo />);
    container.querySelectorAll("img").forEach((img) => {
      expect(img).toHaveAttribute("alt", "");
      expect(img).toHaveAttribute("aria-hidden");
    });
  });

  it("passes sizing classes through to both variants", () => {
    const { container } = render(<Logo className="h-8 w-8" />);
    container.querySelectorAll("img").forEach((img) => {
      expect(img.className).toContain("h-8");
      expect(img.className).toContain("w-8");
    });
  });
});
