import { fireEvent, render, screen } from "@testing-library/react";
import { SearchInput } from "./index";

test("renders search input", () => {
  render(<SearchInput value="test value" onTextChange={() => {}} />);
  const input = screen.getByPlaceholderText(/Search for dishes.../);
  expect(input).toBeInTheDocument();
});

const handleChange = jest.fn();

test("fires onchange event on input", () => {
  render(<SearchInput value="test value" onTextChange={handleChange} />);
  const input = screen.getByPlaceholderText(/Search for dishes.../);
  fireEvent.change(input, { target: { value: "test" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
});
