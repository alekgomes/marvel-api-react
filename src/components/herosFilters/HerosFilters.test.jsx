import { render, screen } from "@testing-library/react";
import HerosFilters from "./HerosFilters";
import { expect } from "vitest";

describe("HerosFilters", () => {
  it("Should correctly renders <HerosFilter/> component", () => {
    render(<HerosFilters />);

    expect(screen.getByText(/Ordenar por nome decrescente - Z\/A/i)).toBeTruthy;
    expect(screen.getByText(/Somente Favoritos/i)).toBeTruthy();
  });
});
