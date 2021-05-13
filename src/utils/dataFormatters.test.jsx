import {
  getCategoryItems,
  formatMenuData,
  filterMenuData,
} from "./dataFormatters";
import {
  mockDataMenuItems,
  mockDataCategories,
  mockDataCategoriesWithItems,
  mockSearchInput,
  mockSearchResult,
} from "../mocks";

test("getCategoryItems should return correct result", () => {
  expect(
    getCategoryItems(mockDataMenuItems, mockDataMenuItems[2].category_id)
  ).toEqual([mockDataMenuItems[2]]);
});

test("formatMenuData should return correct result", () => {
  expect(
    formatMenuData({ items: mockDataMenuItems, categories: mockDataCategories })
  ).toEqual(mockDataCategoriesWithItems);
});

test("filterMenuData should return correct result", () => {
  expect(filterMenuData(mockDataCategoriesWithItems, mockSearchInput)).toEqual(
    mockSearchResult
  );
});

test("filterMenuData should return initial data when there no search input", () => {
  expect(filterMenuData(mockDataCategoriesWithItems, "")).toEqual(
    mockDataCategoriesWithItems
  );
});
