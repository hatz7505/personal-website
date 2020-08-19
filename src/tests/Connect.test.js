import React from "react";
import { render } from "@testing-library/react";
import Connect from "../Connect";

test("renders all elements on about me page", () => {
  const { getByText, getByTestId } = render(<Connect />);
  const header = getByText("Connect with me!");
  expect(header).toBeInTheDocument();
  expect(getByTestId("svg")).toBeDefined();
  expect(getByTestId("connect")).toBeDefined();
  expect(getByTestId("navbar")).toBeDefined();
});
