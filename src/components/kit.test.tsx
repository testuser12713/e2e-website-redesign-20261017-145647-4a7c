import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import ComponentGallery from "../dev/ComponentGallery";
import Layout from "../layout/Layout";

afterEach(cleanup);

function renderGallery() {
  return render(
    <MemoryRouter>
      <ComponentGallery />
    </MemoryRouter>,
  );
}

function renderLayout(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Layout>
        <p>Seiteninhalt</p>
      </Layout>
    </MemoryRouter>,
  );
}

describe("component gallery", () => {
  it("renders every kit component", () => {
    renderGallery();

    const components = [
      "Container",
      "Section",
      "Button",
      "ButtonLink",
      "Card",
      "FeatureCard",
      "AdvantageCard",
      "Hero",
      "Prose",
      "TeamCard",
    ];

    for (const component of components) {
      expect(
        screen.getByRole("heading", { level: 2, name: component }),
      ).toBeInTheDocument();
    }
  });

  it("shows button states, links and team e-mail addresses", () => {
    renderGallery();

    expect(
      screen.getByRole("button", { name: "Primär (deaktiviert)" }),
    ).toBeDisabled();
    expect(
      screen.getByRole("button", { name: "Primär (Hover)" }),
    ).toHaveAttribute("data-state", "hover");
    expect(
      screen.getByRole("button", { name: "Primär (Fokus)" }),
    ).toHaveAttribute("data-state", "focus");
    expect(
      screen.getByRole("button", { name: "Sekundär (Aktiv)" }),
    ).toHaveAttribute("data-state", "active");
    expect(
      screen.getByRole("link", { name: "Interner Link" }),
    ).toHaveAttribute("href", "/equicube");
    expect(
      screen.getByRole("link", { name: "E-Mail schreiben" }),
    ).toHaveAttribute("href", "mailto:office@equicrew.com");
    expect(
      screen.getByRole("link", { name: "anna.berger@example.com" }),
    ).toHaveAttribute("href", "mailto:anna.berger@example.com");
    expect(screen.getByText("Abschnittstitel")).toBeInTheDocument();
  });
});

describe("site chrome", () => {
  it("marks the current page in the navigation", () => {
    renderLayout("/ueber-uns");

    expect(screen.getByRole("link", { name: "Über uns" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Start" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("opens and closes the mobile menu with keyboard support", () => {
    renderLayout("/");

    const toggle = screen.getByRole("button", { name: "Menü öffnen" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggle);
    expect(
      screen.getByRole("button", { name: "Menü schließen" }),
    ).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.getByRole("button", { name: "Menü öffnen" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.getByRole("button", { name: "Menü öffnen" })).toHaveFocus();
  });

  it("renders the shared footer with contact details and active page", () => {
    renderLayout("/impressum");

    const footer = screen.getByRole("contentinfo");

    expect(within(footer).getByText(/Marktplatz 14/)).toBeInTheDocument();
    expect(
      within(footer).getByRole("link", { name: "office@equicrew.com" }),
    ).toHaveAttribute("href", "mailto:office@equicrew.com");
    expect(
      within(footer).getByRole("link", { name: "+43 650 4593 129" }),
    ).toHaveAttribute("href", "tel:+436504593129");
    expect(
      within(footer).getByRole("link", { name: "Impressum" }),
    ).toHaveAttribute("aria-current", "page");
    expect(
      within(footer).getByRole("link", { name: "Kontakt" }),
    ).not.toHaveAttribute("aria-current");
  });
});
