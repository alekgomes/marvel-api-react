import { render, screen, fireEvent } from "@testing-library/react";
import HerosFilters from "./HerosFilters";
import { expect } from "vitest";

describe("App", () => {
  it("Should correctly renders <HerosFilter/> component", () => {
    render(<HerosFilters />);

    expect(screen.getByText(/Ordenar por nome - A\/Z/i)).toBeTruthy;
    expect(screen.getByText(/Somente Favoritos/i)).toBeTruthy();
  });

  it("Should change the `active` prop when clicked", () => {
    render(<HerosFilters />);

    const orderButton = screen.getByText(/Ordenar por nome - A\/Z/i);
    const preferedOnly = screen.getByText(/Somente Favoritos/i);

    fireEvent.click(orderButton);
    fireEvent.click(preferedOnly);

    expect(orderButton.classList).toContainEqual("active");
    expect(preferedOnly.classList).toContainEqual("active");

    fireEvent.click(orderButton);
    fireEvent.click(preferedOnly);

    expect(orderButton.classList).not.toContainEqual("active");
    expect(preferedOnly.classList).not.toContainEqual("active");
  });
});
