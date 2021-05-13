import { menuReducer } from "./index";
import {
  RECEIVE_MENU_DATA,
  SEARCH_MENU_DISHES,
  SELECT_MENU_ITEM,
} from "../../actionTypes";
import { mockDataCategoriesWithItems } from "../../../mocks";

const initialState = {
  selectedItems: {},
  searchText: "",
  categories: [],
  isLoading: false,
};

describe("Menu reducer", () => {
  beforeEach(() => {
    menuReducer(undefined, { type: "" });
  });

  test("should return initial state", () => {
    expect(menuReducer(undefined, { type: "" })).toEqual(initialState);
  });

  test("should handle RECEIVE_MENU_DATA", () => {
    const action = {
      type: RECEIVE_MENU_DATA,
      payload: mockDataCategoriesWithItems,
    };
    const expected = {
      selectedItems: {},
      searchText: "",
      categories: mockDataCategoriesWithItems,
      isLoading: false,
    };

    expect(menuReducer(undefined, action)).toEqual(expected);
  });

  test("should handle SEARCH_MENU_ITEMS", () => {
    const action = {
      type: SEARCH_MENU_DISHES,
      payload: "Avo",
    };
    const expected = {
      selectedItems: {},
      searchText: "Avo",
      categories: [],
      isLoading: false,
    };

    expect(menuReducer(undefined, action)).toEqual(expected);
  });

  test("should handle SELECT_MENU_ITEM", () => {
    const action = {
      type: SELECT_MENU_ITEM,
      payload: {
        id: "1",
        category_id: "1",
        name: "Avo",
        url: "aa",
        price: "1",
        discount_rate: "1",
        stock: {
          availability: "10",
        },
        description: "10",
        photo: "aa",
      },
    };
    const setAmount = (amount) => ({
      selectedItems: {
        1: amount,
      },
      searchText: "",
      categories: [],
      isLoading: false,
    });

    const state = menuReducer(undefined, action);

    expect(state).toEqual(setAmount(1));
    expect(menuReducer(state, action)).toEqual(setAmount(2));
  });

  test("should be possible to select only available amount", () => {
    const action = {
      type: SELECT_MENU_ITEM,
      payload: {
        id: "1",
        category_id: "1",
        name: "Avo",
        url: "aa",
        price: "1",
        discount_rate: "1",
        stock: {
          availability: "3",
        },
        description: "10",
        photo: "aa",
      },
    };
    const receiveMenuDataAction = {
      type: RECEIVE_MENU_DATA,
      payload: mockDataCategoriesWithItems,
    };
    const setAmount = (amount) => ({
      selectedItems: {
        1: amount,
      },
      searchText: "",
      categories: mockDataCategoriesWithItems,
      isLoading: false,
    });

    const state = menuReducer(undefined, receiveMenuDataAction);
    const state1 = menuReducer(state, action);
    expect(state1).toEqual(setAmount(1));

    const state2 = menuReducer(state1, action);
    expect(state2).toEqual(setAmount(2));

    const state3 = menuReducer(state2, action);
    expect(state3).toEqual(setAmount(3));

    const state4 = menuReducer(state3, action);
    expect(state4).toEqual(setAmount(3)); // max is 3
  });
});
