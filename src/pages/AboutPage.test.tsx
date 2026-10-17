import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import AboutPage from "./AboutPage";

afterEach(cleanup);

function renderPage() {
  return render(
    <MemoryRouter>
      <AboutPage />
    </MemoryRouter>,
  );
}

describe("about page", () => {
  it("shows the crew story and the crew graphic", () => {
    renderPage();

    expect(screen.getByText("Über die Crew")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Jedes Schiff braucht eine Crew.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Gemeinsam gehen wir den Weg zu Heizsystemen/),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /Drei Founder, eine Crew/ }),
    ).toBeInTheDocument();
  });

  it("shows the three founders with a working mailto link each", () => {
    renderPage();

    const founders = [
      ["Michael Hochstöger", "michael.hochstoeger@equicrew.com"],
      ["Christian Hinterdorfer", "christian.hinterdorfer@equicrew.com"],
      ["Christian Hinterreiter", "christian.hinterreiter@equicrew.com"],
    ] as const;

    for (const [name, email] of founders) {
      expect(
        screen.getByRole("heading", { level: 3, name }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: email }),
      ).toHaveAttribute("href", `mailto:${email}`);
    }

  });

  it("carries the region hooks of the approved screen", () => {
    renderPage();

    for (const region of [
      "about-hero",
      "about-hero-cta",
      "about-mission",
      "about-crew-graphic",
      "about-team",
      "founder-michael",
      "founder-christian-hinterdorfer",
      "founder-christian-hinterreiter",
      "about-principles",
      "principle-heating",
      "principle-ai",
      "principle-together",
      "principle-next-generation",
      "about-cta",
    ]) {
      expect(
        document.querySelector(`[data-od-id="${region}"]`),
      ).not.toBeNull();
    }
  });

  it("shows the principles section", () => {
    renderPage();

    expect(
      screen.getByRole("heading", { level: 2, name: "Woran wir uns orientieren." }),
    ).toBeInTheDocument();

    for (const title of [
      "Heizsysteme ohne Kopfzerbrechen",
      "Grün und fair verteilte KI",
      "Gemeinsam statt nebeneinander",
      "Verantwortung für morgen",
    ]) {
      expect(
        screen.getByRole("heading", { level: 3, name: title }),
      ).toBeInTheDocument();
    }
  });
});
