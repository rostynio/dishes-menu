export interface IMenuState {
  searchText: string;
  selectedItems: any;
  categories: [];
  isLoading: boolean;
}

export interface ISelectedMenuItem {
  id: string;
  category_id: string;
  amount?: number;
}

export interface ISelectedItems {
  [key: string]: ISelectedMenuItem;
}

export interface IRestoreSelectedItems {
  [key: string]: ISelectedMenuItem;
}
