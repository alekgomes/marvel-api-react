import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { expect } from "vitest";

describe("App", () => {
  it("Should correctly renders <Header/> component", () => {
    render(<Header />);

    expect(screen.getByRole("img").getAttribute("src")).toBe(
      "/src/assets/images/logo/Group.png"
    );
    expect(screen.getByText(/explore o universo/i)).toBeTruthy();
    expect(
      screen.getByText(
        "Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!"
      )
    ).toBeTruthy();
  });
});
