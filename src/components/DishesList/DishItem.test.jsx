import { fireEvent, render, screen } from "@testing-library/react";
import { DishesList } from "./index";
import { mockDataCategoriesWithItems } from "../../mocks";

const selectedItems = { 1: 3 };

const handleClick = jest.fn();

test("renders DishesList", () => {
  render(
    <DishesList
      data={mockDataCategoriesWithItems}
      selectedItems={selectedItems}
      handleSelectItem={handleClick}
    />
  );
  const name = screen.getByText(/Chicken & Avocado/);
  const description = screen.getByText(/Grilled chicken, avocado/);
  const dishPrice = screen.getByText(/AED 3500/);
  const discountRate = screen.getByText(/AED 1500/);
  const photo = screen.getByAltText(/Chicken & Avocado/);

  expect(name).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(dishPrice).toBeInTheDocument();
  expect(discountRate).toBeInTheDocument();
  expect(photo).toBeInTheDocument();
});

test("fires click event on item", () => {
  render(
    <DishesList
      data={mockDataCategoriesWithItems}
      selectedItems={selectedItems}
      handleSelectItem={handleClick}
    />
  );
  const clicableItem = screen.getAllByRole("button")[0];
  expect(clicableItem).toBeInTheDocument();
  fireEvent.click(clicableItem);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
