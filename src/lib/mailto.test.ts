import { describe, expect, it } from "vitest";
import { buildMailto, CONTACT_RECIPIENT } from "./mailto";

const values = {
  firstName: "Anna",
  lastName: "Grüber",
  email: "anna.grueber@beispiel.at",
  message: "Hallo Team,\n\nich interessiere mich für den EquiCube.\nBitte meldet euch bei mir.",
};

function parse(url: string) {
  expect(url.startsWith(`mailto:${CONTACT_RECIPIENT}?`)).toBe(true);
  const query = url.slice(url.indexOf("?") + 1);
  const params = new URLSearchParams(query);
  return {
    subject: params.get("subject") ?? "",
    body: params.get("body") ?? "",
  };
}

describe("buildMailto", () => {
  it("addresses the contact recipient", () => {
    expect(buildMailto(values).startsWith(`mailto:${CONTACT_RECIPIENT}?`)).toBe(
      true,
    );
    expect(CONTACT_RECIPIENT).toBe("office@equicrew.com");
  });

  it("builds the subject from first and last name", () => {
    const { subject } = parse(buildMailto(values));
    expect(subject).toContain("Anna");
    expect(subject).toContain("Grüber");
  });

  it("includes name, e-mail address and message in the body", () => {
    const { body } = parse(buildMailto(values));
    expect(body).toContain("Anna Grüber");
    expect(body).toContain("anna.grueber@beispiel.at");
    expect(body).toContain("ich interessiere mich für den EquiCube.");
  });

  it("encodes umlauts and spaces", () => {
    const url = buildMailto(values);
    expect(url).toContain("%C3%BC");
    expect(url).toContain("%20");
    expect(url).not.toContain("Grüber");
  });

  it("preserves line breaks in the message", () => {
    const { body } = parse(buildMailto(values));
    expect(body).toContain("Hallo Team,\n\nich interessiere mich");
    expect(body.split("\n").length).toBeGreaterThan(2);
  });
});
