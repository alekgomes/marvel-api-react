import { render, screen } from "@testing-library/react";
import HerosContainer from "./HerosContainer";
import { expect } from "vitest";
import heros from "../../mocks/heros";

describe("App", () => {
  it("Should correctly renders <HerosContainer/> component", () => {
    render(<HerosContainer heros={heros} />);

    expect(
      screen.getByText(/Ordenar por nome decrescente - Z\/A/i)
    ).toBeTruthy();
    expect(screen.getByText(/Somente Favoritos/i)).toBeTruthy();
  });
});
