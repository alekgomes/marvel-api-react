import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";
import { expect } from "vitest";

describe("App", () => {
  it("Should correctly renders <SearchInput/> component", () => {
    render(<SearchInput />);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
