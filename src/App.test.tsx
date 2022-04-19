import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Search for GitHub", {
    exact: false,
  });
  expect(inputElement).toBeInTheDocument();
});
