import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { ROUTES } from "./routes";

vi.mock("./pages/HomePage", () => ({ default: () => "HomePage" }));
vi.mock("./pages/EquiCubePage", () => ({ default: () => "EquiCubePage" }));
vi.mock("./pages/AboutPage", () => ({ default: () => "AboutPage" }));
vi.mock("./pages/ContactPage", () => ({ default: () => "ContactPage" }));
vi.mock("./pages/ImprintPage", () => ({ default: () => "ImprintPage" }));

const pageMarkers: Record<string, string> = {
  "/": "HomePage",
  "/equicube": "EquiCubePage",
  "/ueber-uns": "AboutPage",
  "/kontakt": "ContactPage",
  "/impressum": "ImprintPage",
};

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

afterEach(() => {
  cleanup();
  document.title = "";
  document.head
    .querySelectorAll(
      'meta[name="description"], meta[property="og:title"], meta[property="og:description"]',
    )
    .forEach((element) => element.remove());
});

describe("routing", () => {
  it("registers the five public routes with unique German titles and descriptions", () => {
    expect(ROUTES.map((route) => route.path)).toEqual([
      "/",
      "/equicube",
      "/ueber-uns",
      "/kontakt",
      "/impressum",
    ]);
    expect(new Set(ROUTES.map((route) => route.title)).size).toBe(
      ROUTES.length,
    );
    expect(new Set(ROUTES.map((route) => route.description)).size).toBe(
      ROUTES.length,
    );
  });

  it.each(ROUTES)(
    "renders $path with its own page and metadata",
    (route) => {
      renderAt(route.path);

      expect(screen.getByText(pageMarkers[route.path])).toBeInTheDocument();
      expect(document.title).toBe(route.title);
      expect(
        document.head.querySelector('meta[name="description"]'),
      ).toHaveAttribute("content", route.description);
      expect(
        document.head.querySelector('meta[property="og:title"]'),
      ).toHaveAttribute("content", route.title);
      expect(
        document.head.querySelector('meta[property="og:description"]'),
      ).toHaveAttribute("content", route.description);
    },
  );
});
