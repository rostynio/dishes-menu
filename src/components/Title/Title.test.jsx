import { render, screen } from "@testing-library/react";
import { Title } from "./index";

test("render Title component", () => {
  render(<Title text="test text" />);
  expect(screen.getByText(/test text/)).toBeInTheDocument();
});
