import React from "react";
import { render, screen } from "@testing-library/react";
import TopColleges from "../TopColleges";

describe("Home", () => {
  it("renders correctly", () => {
    render(<TopColleges />);
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
  });
});
