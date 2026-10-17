import { cleanup, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import ImprintPage from "./ImprintPage";

afterEach(cleanup);

function renderPage() {
  return render(
    <MemoryRouter>
      <ImprintPage />
    </MemoryRouter>,
  );
}

describe("imprint page", () => {
  it("renders the register number, VAT id and register court", () => {
    renderPage();

    expect(screen.getByText("FN 648043 f")).toBeInTheDocument();
    expect(screen.getByText("ATU82132979")).toBeInTheDocument();

    const courtRow = screen.getByText("Firmenbuchgericht").closest("tr");
    expect(courtRow).not.toBeNull();
    expect(within(courtRow as HTMLTableRowElement).getByText("Wien")).toBeInTheDocument();
  });

  it("renders all three managing directors", () => {
    renderPage();

    expect(screen.getByText("Michael Hochstöger")).toBeInTheDocument();
    expect(screen.getByText("Christian Hinterdorfer")).toBeInTheDocument();
    expect(screen.getByText("Christian Hinterreiter")).toBeInTheDocument();
  });
});
