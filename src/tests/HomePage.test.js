import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HomePage from "../HomePage";
import { MemoryRouter } from "react-router-dom";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test("renders all elements on homepage", () => {
  const { getByText, getByTestId } = render(<HomePage />);
  const welcomeButton = getByText("welcome!");
  expect(welcomeButton).toBeInTheDocument();
  expect(getByTestId("svg")).toBeDefined();
});

test("welcome button leads to about page", () => {
  const { getByText, getByTestId } = render(<HomePage />, {
    wrapper: MemoryRouter,
  });
  const welcomeButton = getByText("welcome!");
  fireEvent.click(welcomeButton);
  expect(getByTestId("svg")).toBeDefined();
  expect(mockHistoryPush).toHaveBeenCalledWith("/about");
});
