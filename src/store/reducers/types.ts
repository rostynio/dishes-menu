export interface IMenuCategories {
  id: string;
  name: string;
  url: string;
}

export interface IMenuItems {
  id: string;
  name: string;
  url: string;
  price: number;
  discount_rate: number;
  stock: {
    availability: number;
  };
  description: string;
  photo: string | null;
  category_id: string;
  amount?: number;
}

export interface IMenuData {
  categories: IMenuCategories[];
  items: IMenuItems[];
}

export interface ICategoryData extends IMenuCategories {
  items: IMenuItems[];
}
