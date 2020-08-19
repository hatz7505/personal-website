import React from "react";
import { render } from "@testing-library/react";
import AboutMe from "../AboutMe";

test("renders all elements on about me page", () => {
  const { getByText, getByTestId } = render(<AboutMe />);
  const header = getByText("Hey, I'm Harry!");
  expect(header).toBeInTheDocument();
  expect(getByTestId("svg")).toBeDefined();
  expect(getByTestId("about-me")).toBeDefined();
  expect(getByTestId("navbar")).toBeDefined();
});
