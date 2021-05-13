import { ICategoryData, IMenuItems } from "../../store/reducers/types";

export interface IMenuList {
  data: ICategoryData[];
  selectedItems?: any;
  handleSelectItem: (item: IMenuItems) => void;
}
