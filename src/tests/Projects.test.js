import React from "react";
import { render } from "@testing-library/react";
import Projects from "../Projects";

test("renders all elements on about me page", () => {
  const { getByText, getByTestId } = render(<Projects />);
  const header = getByText("Some things I've built");
  expect(header).toBeInTheDocument();
  expect(getByTestId("svg")).toBeDefined();
  expect(getByTestId("projects")).toBeDefined();
  expect(getByTestId("navbar")).toBeDefined();
});
