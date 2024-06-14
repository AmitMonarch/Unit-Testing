import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("clear", async () => {
  render(<textarea defaultValue="Hello, World!" />);
  const textElement = screen.getByRole("textbox");
  await userEvent.clear(textElement);
  expect(textElement).toHaveValue("");
});

test("select options", async () => {
  render(
    <select multiple>
      <option value="1">A</option>
      <option value="2">B</option>
      <option value="3">C</option>
    </select>,
  );
  const listElement = screen.getByRole("listbox");
  await userEvent.selectOptions(listElement, ["1", "C"]);
  const optionElementA = screen.getByRole("option", {
    name: "A",
  }) as HTMLOptionElement;
  const optionElementB = screen.getByRole("option", {
    name: "B",
  }) as HTMLOptionElement;
  const optionElementC = screen.getByRole("option", {
    name: "C",
  }) as HTMLOptionElement;
  expect(optionElementA.selected).toBe(true);
  expect(optionElementB.selected).toBe(false);
  expect(optionElementC.selected).toBe(true);
});

test("deselect options", async () => {
  render(
    <select multiple>
      <option value="1">A</option>
      <option value="2" selected>
        B
      </option>
      <option value="3">C</option>
    </select>,
  );
  const listElement = screen.getByRole("listbox");
  await userEvent.deselectOptions(listElement, "2");
  const optionElementB = screen.getByRole("option", {
    name: "B",
  }) as HTMLOptionElement;
  expect(optionElementB.selected).toBe(false);
});

test("upload file", async () => {
  render(
    <div>
      <label htmlFor="file-uploader">Upload file:</label>
      <input id="file-uploader" type="file" />
    </div>,
  );
  const file = new File(["hello"], "hello.png", { type: "image/png" });
  const input = screen.getByLabelText(/upload file/i) as HTMLInputElement;
  await userEvent.upload(input, file);
  expect(input.files![0]).toBe(file);
  expect(input.files!.item(0)).toBe(file);
  expect(input.files).toHaveLength(1);
});
