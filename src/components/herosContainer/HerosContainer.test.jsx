import { render, screen } from "@testing-library/react";
import HerosContainer from "./HerosContainer";
import { expect } from "vitest";

describe("App", () => {
  it("Should correctly renders <Header/> component", () => {
    render(<HerosContainer />);

    // expect(screen.getByRole("textbox")).toBeTruthy();
    // expect(screen.getByRole("switch")).toBeTruthy();
    // expect(screen.getByRole("menuitemcheckbox")).toBeTruthy();
  });
});
