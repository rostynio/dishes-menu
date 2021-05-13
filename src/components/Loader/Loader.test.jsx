import { render } from "@testing-library/react";
import { Loader } from "./index";

test("renders Loader", () => {
  const { container } = render(<Loader isLoading />);
  expect(container.querySelector("svg")).toBeInTheDocument();
});

test("does not render Loader if component is not loaded", () => {
  const { container } = render(<Loader />);
  expect(container.querySelector("svg")).not.toBeInTheDocument();
});
