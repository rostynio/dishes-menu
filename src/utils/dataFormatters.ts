import { ICategoryData, IMenuItems, IMenuData } from "../store/reducers/types";

export const getCategoryItems = (items: IMenuItems[], categoryId: string) =>
  items.filter((item) => item.category_id === categoryId);

export const formatMenuData = ({
  items,
  categories,
}: IMenuData): ICategoryData[] =>
  items.reduce((acc: ICategoryData[], cur: IMenuItems) => {
    const isExist = acc.find((c) => c.id === cur.category_id);
    if (isExist) {
      return acc.map((c) =>
        c.id === isExist.id ? { ...isExist, items: [...isExist.items, cur] } : c
      );
    }

    const category = categories.find((c) => c.id === cur.category_id);
    if (!category) return acc;

    return [...acc, { ...category, items: [cur] }];
  }, []);

export const filterMenuData = (data: ICategoryData[], searchText: string) => {
  if (!searchText) return data;

  const result = data.reduce(
    (acc: ICategoryData[], category): ICategoryData[] => {
      const filteredItems = category.items.filter((item: IMenuItems) =>
        item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );

      if (filteredItems.length) {
        acc.push({ ...category, items: filteredItems });
      }

      return acc;
    },
    []
  );

  return result;
};
