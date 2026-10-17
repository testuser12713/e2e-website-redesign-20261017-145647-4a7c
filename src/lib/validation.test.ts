import { describe, expect, it } from "vitest";
import { validateContactForm } from "./validation";

const validValues = {
  firstName: "Anna",
  lastName: "Gruber",
  email: "anna.gruber@beispiel.at",
  message: "Ich interessiere mich für den EquiCube.",
};

describe("validateContactForm", () => {
  it("returns no errors for valid input", () => {
    expect(validateContactForm(validValues)).toEqual({});
  });

  it("reports a missing first name", () => {
    expect(
      validateContactForm({ ...validValues, firstName: "  " }).firstName,
    ).toBeTruthy();
  });

  it("reports a missing last name", () => {
    expect(
      validateContactForm({ ...validValues, lastName: "" }).lastName,
    ).toBeTruthy();
  });

  it("reports a missing e-mail address", () => {
    expect(validateContactForm({ ...validValues, email: "" }).email).toBeTruthy();
  });

  it("reports a missing message", () => {
    expect(
      validateContactForm({ ...validValues, message: "\n" }).message,
    ).toBeTruthy();
  });

  it("reports an invalid e-mail address", () => {
    for (const email of ["anna", "anna@", "@beispiel.at", "anna@beispiel"]) {
      expect(validateContactForm({ ...validValues, email }).email).toBeTruthy();
    }
  });
});
