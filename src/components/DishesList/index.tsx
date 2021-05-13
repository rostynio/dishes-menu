import { IMenuList } from "./types";
import { Title } from "../Title";
import {
  StyledDishesWrapper,
  StyledDishesList,
  StyledDishWrapper,
} from "./styled";
import { DishItem } from "./DishItem";

export const DishesList = ({
  data,
  selectedItems,
  handleSelectItem,
}: IMenuList) => (
  <>
    {data.map(({ name, id, items }) => (
      <StyledDishesWrapper key={id}>
        <Title text={name} />
        <StyledDishesList>
          {items.map((item) => {
            const amount = selectedItems[item.id];
            return (
              <StyledDishWrapper
                key={item.id}
                role="button"
                onClick={() => handleSelectItem(item)}
              >
                <DishItem {...item} amount={amount} />
              </StyledDishWrapper>
            );
          })}
        </StyledDishesList>
      </StyledDishesWrapper>
    ))}
  </>
);
