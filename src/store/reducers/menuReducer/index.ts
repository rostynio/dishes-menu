import { IMenuState } from "./types";
import { IAction } from "../../actions/types";
import { IMenuItems } from "../types";
import {
  SHOW_LOADER,
  HIDE_LOADER,
  RECEIVE_MENU_DATA,
  SEARCH_MENU_DISHES,
  SELECT_MENU_ITEM,
  FETCH_SELECTED_DISHES,
  RESET_STATE,
} from "../../actionTypes";
import { storageService } from "../../../services";

const initialState: IMenuState = {
  selectedItems: {},
  searchText: "",
  categories: [],
  isLoading: false,
};

const handleSelectMenuItem = (state: IMenuState, selectedItem: IMenuItems) => {
  let selectedData;
  if (state.selectedItems[selectedItem.id]) {
    selectedData = {
      ...state.selectedItems,
      [selectedItem.id]:
        selectedItem.stock?.availability > state.selectedItems[selectedItem.id]
          ? state.selectedItems[selectedItem.id] + 1
          : state.selectedItems[selectedItem.id],
    };
  } else {
    selectedData = { ...state.selectedItems, [selectedItem.id]: 1 };
  }
  storageService.setItem("selectedDishes", JSON.stringify(selectedData));
  return {
    ...state,
    selectedItems: selectedData,
  };
};

export const menuReducer = (
  state = initialState,
  action: IAction<any>
): IMenuState => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case RECEIVE_MENU_DATA:
      return {
        ...state,
        categories: action.payload,
      };
    case SEARCH_MENU_DISHES:
      return {
        ...state,
        searchText: action.payload,
      };
    case SELECT_MENU_ITEM:
      return handleSelectMenuItem(state, action.payload);
    case FETCH_SELECTED_DISHES:
      return {
        ...state,
        selectedItems: action.payload,
      };
    case RESET_STATE:
      storageService.removeItem("selectedDishes");
      return {
        ...initialState,
        categories: state.categories,
      };
    default:
      return state;
  }
};
