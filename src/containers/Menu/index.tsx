import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMenuData,
  searchMenuDishes,
  selectMenuItem,
  fetchSelectedDishes,
  resetState,
} from "../../store/actions";
import { MenuWrapper, BackButton } from "./styled";
import { back } from "../../assets/images";
import { Title, SearchInput, DishesList, Loader } from "../../components";
import { IAppState } from "../../store/store";
import { filterMenuData } from "../../utils";
import { IMenuItems } from "../../store/reducers/types";
import { storageService } from "../../services";

export const Menu = () => {
  const currentMenu = useSelector((state: IAppState) => state.menu.categories);
  const searchText = useSelector((state: IAppState) => state.menu.searchText);
  const isLoading = useSelector((state: IAppState) => state.menu.isLoading);
  const selectedItems = useSelector(
    (state: IAppState) => state.menu.selectedItems
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedDishes = storageService.getItem("selectedDishes");

    if (selectedDishes) {
      dispatch(fetchSelectedDishes(JSON.parse(selectedDishes)));
    }

    dispatch(fetchMenuData());
  }, [dispatch]);

  const handleSearchDishes = (text: string) => {
    dispatch(searchMenuDishes(text));
  };

  const handleSelectItem = (item: IMenuItems) => {
    dispatch(selectMenuItem(item));
  };

  const handleBackClick = () => {
    dispatch(resetState());
  };

  return (
    <MenuWrapper>
      <BackButton onClick={handleBackClick}>{back()}</BackButton>
      <Title text="Search" />
      <SearchInput value={searchText} onTextChange={handleSearchDishes} />
      <Loader isLoading={isLoading}>
        <DishesList
          data={filterMenuData(currentMenu, searchText)}
          handleSelectItem={handleSelectItem}
          selectedItems={selectedItems}
        />
      </Loader>
    </MenuWrapper>
  );
};
