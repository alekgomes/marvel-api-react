import { fireEvent, render, screen } from "@testing-library/react";
import { expect, vi } from "vitest";

import Home from "./Home";

vi.spyOn(AbortController.prototype, "abort").mockImplementation(() => {});

describe("Home", () => {
  it("Should correctly display favorites heros", async () => {
    render(<Home />);

    const hero1 = await screen.findByAltText(/Favorite Aaron Stack/i);
    const hero2 = await screen.findByAltText(/Favorite Adam Destine/i);

    fireEvent.click(hero1);
    fireEvent.click(hero2);

    fireEvent.click(screen.getByText(/Somente Favoritos/i));

    const favorites = await screen.findAllByAltText(/favorite/i);
    expect(favorites.length).toBe(2);
  });

  it("Should sort items accordingly to user selection", async () => {
    render(<Home />);

    const herosAsc = await screen.findAllByAltText(/Favorite/i);
    const firstHero = herosAsc.shift();
    expect(firstHero.getAttribute("alt")).toMatch(/3-D/i);
  });

  it("Should change the `active` prop when clicked", () => {
    render(<Home />);

    const preferedOnly = screen.getByText(/Somente Favoritos/i);

    fireEvent.click(preferedOnly);

    expect(preferedOnly.classList).toContainEqual("active");

    fireEvent.click(preferedOnly);

    expect(preferedOnly.classList).not.toContainEqual("active");
  });
});
