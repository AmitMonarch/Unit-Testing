import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./Counter-two";
import user from "@testing-library/user-event";

describe("CounterTwo", () => {
  test("renders count correctly", () => {
    render(<CounterTwo count={0} />);
    const countElement = screen.getByTestId("countElement");
    expect(countElement).toHaveTextContent("0");
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    await user.click(incrementButton);
    await user.click(decrementButton);
    expect(incrementHandler).toHaveBeenCalled();
    expect(decrementHandler).toHaveBeenCalled();
  });
});
