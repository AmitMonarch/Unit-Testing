/*
Greet renders correctly displaying 'Hello' when no name is given.
When name is given as a props the Greet should render correct with 'Hello [name]'
*/

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello Guest"); // screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});
describe("Nested", () => {
  test("renders with name correctly", () => {
    render(<Greet name="Amitesh" />);
    const textElement = screen.getByText("Hello Amitesh");
    expect(textElement).toBeInTheDocument();
  });
});
