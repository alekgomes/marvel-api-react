import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, vi } from "vitest";

import Home from "./Home";

vi.spyOn(AbortController.prototype, "abort").mockImplementation(() => {});

describe("Home", () => {
  it("Should correctly display favorites heros", async () => {
    render(<Home />);

    await waitFor(() => {
      const hero1 = screen.queryByAltText(/Favorite Aaron Stack/i);
      const hero2 = screen.queryByAltText(/Favorite Adam Destine/i);

      fireEvent.click(hero1);
      fireEvent.click(hero2);

      fireEvent.click(screen.getByText(/Somente Favoritos/i));

      const favorites = screen.queryAllByAltText(/favorite/i);
      expect(favorites.length).toBe(2);
    });
  });
});
