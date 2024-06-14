import { Skills } from "./Skills";
import { render, screen, logRoles } from "@testing-library/react";

describe("Skills", () => {
  const skills = ["Html", "CSS", "Javascript"];

  test("renders correctly", () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills  correctly", () => {
    render(<Skills skills={skills} />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("does not renders Start Learning button", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start Learning button eventually renders", async () => {
    render(<Skills skills={skills} />);
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      },
    );
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});
