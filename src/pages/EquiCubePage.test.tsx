import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import EquiCubePage from "./EquiCubePage";

afterEach(cleanup);

function renderPage() {
  return render(
    <MemoryRouter initialEntries={["/equicube"]}>
      <EquiCubePage />
    </MemoryRouter>,
  );
}

describe("EquiCubePage", () => {
  it("shows the product positioning and hero headline", () => {
    renderPage();

    expect(
      screen.getByRole("heading", { level: 1, name: "Der EquiCube" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Wärmepumpe, Batterie, Pufferspeicher und KI-Recheneinheit/),
    ).toBeInTheDocument();
  });

  it("renders the four product features", () => {
    renderPage();

    const features = [
      "Standardisierter Basis-Cube",
      "Modular anpassbar",
      "Für Fußboden- und Radiatorenheizung",
      "Heizleistung bis 40 kW",
    ];

    for (const feature of features) {
      expect(
        screen.getByRole("heading", { level: 3, name: feature }),
      ).toBeInTheDocument();
    }
  });

  it("renders the five advantages", () => {
    renderPage();

    const advantages = [
      "Schnelle Installation",
      "Einfache Wartbarkeit",
      "Einfache Installation & Inbetriebnahme",
      "Abgestimmte Komponenten",
      "Minimierter Platzbedarf",
    ];

    for (const advantage of advantages) {
      expect(
        screen.getByRole("heading", { level: 3, name: advantage }),
      ).toBeInTheDocument();
    }

    expect(screen.getByText("> 2 h")).toBeInTheDocument();
  });

  it("leads to the contact page with at least two calls to action", () => {
    renderPage();

    const contactLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href") === "/kontakt");

    expect(contactLinks.length).toBeGreaterThanOrEqual(2);
  });
});
