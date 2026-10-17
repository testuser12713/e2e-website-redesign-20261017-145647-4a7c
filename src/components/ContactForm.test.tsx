import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ContactForm } from "./ContactForm";

let locationStub: { href: string };

beforeEach(() => {
  locationStub = { href: "" };
  Object.defineProperty(window, "location", {
    configurable: true,
    value: locationStub,
  });
});

afterEach(cleanup);

function fillField(label: RegExp, value: string) {
  fireEvent.change(screen.getByLabelText(label), { target: { value } });
}

function fillValidForm() {
  fillField(/Vorname/, "Anna");
  fillField(/Nachname/, "Grüber");
  fillField(/E-Mail-Adresse/, "anna.grueber@beispiel.at");
  fillField(/Nachricht/, "Ich interessiere mich für den EquiCube.");
}

describe("ContactForm", () => {
  it("starts neutral without showing an error", () => {
    render(<ContactForm />);

    expect(screen.queryByText("Bitte gib deinen Vornamen ein.")).toBeNull();
    expect(screen.queryByText("Bitte gib deine E-Mail-Adresse ein.")).toBeNull();
    expect(screen.queryByRole("status")).toBeNull();
    expect(
      screen.getByText(/Beim Absenden öffnet sich dein E-Mail-Programm/),
    ).toBeInTheDocument();
  });

  it("blocks an empty submit and shows an error at every required field", () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole("button", { name: /Nachricht senden/ }));

    expect(screen.getByText("Bitte gib deinen Vornamen ein.")).toBeInTheDocument();
    expect(screen.getByText("Bitte gib deinen Nachnamen ein.")).toBeInTheDocument();
    expect(
      screen.getByText("Bitte gib deine E-Mail-Adresse ein."),
    ).toBeInTheDocument();
    expect(screen.getByText("Bitte gib eine Nachricht ein.")).toBeInTheDocument();
    expect(locationStub.href).toBe("");
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("shows an error after a field was typed into and emptied again", () => {
    render(<ContactForm />);

    fillField(/Vorname/, "Anna");
    expect(screen.queryByText("Bitte gib deinen Vornamen ein.")).toBeNull();

    fillField(/Vorname/, "");
    expect(screen.getByText("Bitte gib deinen Vornamen ein.")).toBeInTheDocument();
  });

  it("reports an invalid e-mail address only after it was touched", () => {
    render(<ContactForm />);

    fillField(/E-Mail-Adresse/, "anna@");
    expect(
      screen.getByText("Bitte gib eine gültige E-Mail-Adresse ein."),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Nachricht senden/ }));
    expect(
      screen.getByText("Bitte gib eine gültige E-Mail-Adresse ein."),
    ).toBeInTheDocument();
  });

  it("opens the mailto link and confirms after a valid submit", () => {
    render(<ContactForm />);

    fillValidForm();
    fireEvent.click(screen.getByRole("button", { name: /Nachricht senden/ }));

    expect(locationStub.href).toContain("mailto:office@equicrew.com?");
    expect(locationStub.href).toContain("subject=");
    expect(locationStub.href).toContain("body=");
    expect(locationStub.href).toContain("%C3%BC");
    expect(screen.getByRole("status")).toHaveTextContent(
      "Danke für deine Nachricht!",
    );
    expect(
      screen.getByText(/Bitte sende sie dort ab, damit sie bei uns ankommt/),
    ).toBeInTheDocument();
  });

  it("links every field to a label", () => {
    render(<ContactForm />);

    for (const label of [
      /Vorname/,
      /Nachname/,
      /E-Mail-Adresse/,
      /Nachricht/,
    ]) {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    }
  });
});
