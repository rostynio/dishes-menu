import { ThunkAction } from "redux-thunk";
import { IMenuData, ICategoryData, IMenuItems } from "../../reducers/types";
import {
  IMenuState,
  IRestoreSelectedItems,
} from "../../reducers/menuReducer/types";
import { formatMenuData } from "../../../utils";
import { request } from "../../../services";
import { IAction } from "../types";
import {
  SHOW_LOADER,
  HIDE_LOADER,
  RECEIVE_MENU_DATA,
  SEARCH_MENU_DISHES,
  SELECT_MENU_ITEM,
  FETCH_SELECTED_DISHES,
  RESET_STATE,
} from "../../actionTypes";

export const showLoader = (): IAction<null> => ({
  type: SHOW_LOADER,
});

export const hideLoader = (): IAction<null> => ({
  type: HIDE_LOADER,
});

export const receiveMenuData = (
  payload: ICategoryData[]
): IAction<ICategoryData[]> => ({
  type: RECEIVE_MENU_DATA,
  payload,
});

export const fetchMenuData =
  (): ThunkAction<void, IMenuState, unknown, IAction<ICategoryData[] | null>> =>
  async (dispatch) => {
    dispatch(showLoader());
    try {
      const response: IMenuData = await request.get(
        "https://private-209cd-chatfood.apiary-mock.com/menu"
      );
      const formattedMenuData = formatMenuData(response);
      dispatch(hideLoader());
      dispatch(receiveMenuData(formattedMenuData));
    } catch (err) {
      dispatch(hideLoader());
    }
  };

export const searchMenuDishes = (payload: string): IAction<string> => ({
  type: SEARCH_MENU_DISHES,
  payload,
});

export const selectMenuItem = (payload: IMenuItems): IAction<IMenuItems> => ({
  type: SELECT_MENU_ITEM,
  payload,
});

export const fetchSelectedDishes = (
  payload: IRestoreSelectedItems
): IAction<IRestoreSelectedItems> => ({
  type: FETCH_SELECTED_DISHES,
  payload,
});

export const resetState = (): IAction<null> => ({
  type: RESET_STATE,
});
