import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import HomePage from "./HomePage";

afterEach(cleanup);

function renderPage() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );
}

describe("home page", () => {
  it("renders the brand message", () => {
    renderPage();

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toHaveTextContent(/equicrew/);
    expect(heading).toHaveTextContent(/—/);
    expect(heading).toHaveTextContent(/smarte energie/);
    expect(heading).toHaveTextContent(/fair verteilte KI/);
  });

  it("renders the mission text", () => {
    renderPage();

    expect(
      screen.getByRole("heading", {
        name: "Energie und KI. Für die, die nach uns kommen.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/EquiCrew hat sich zum Ziel gesetzt/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/nachfolgenden Generationen bestmögliche Chancen/),
    ).toBeInTheDocument();
  });

  it("links to the EquiCube page", () => {
    renderPage();

    expect(
      screen.getByRole("link", { name: /equi\.cube entdecken/i }),
    ).toHaveAttribute("href", "/equicube");
    expect(
      screen.getByRole("link", { name: /über den EquiCube/i }),
    ).toHaveAttribute("href", "/equicube");
  });

  it("closes the page with a call to contact", () => {
    renderPage();

    expect(
      screen.getByRole("heading", {
        name: "Schreib uns – wir erzählen dir gerne mehr!",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Kontakt" })).toHaveAttribute(
      "href",
      "/kontakt",
    );
  });
});
