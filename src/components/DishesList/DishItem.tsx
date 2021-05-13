import { IMenuItems } from "../../store/reducers/types";
import {
  StyledDishItemWrapper,
  StyledDishName,
  StyledDishDescription,
  StyledDishPriceWrapper,
  StyledDishPrice,
  StyledDishOldPrice,
  StyledDishImage,
} from "./styled";

export const DishItem = ({
  name,
  price,
  discount_rate,
  description,
  photo,
  amount,
}: IMenuItems): JSX.Element => {
  const dishPrice = discount_rate ? price - price * discount_rate : price;
  return (
    <StyledDishItemWrapper amount={amount}>
      <div>
        <StyledDishName>
          {amount && `x ${amount} `}
          {name}
        </StyledDishName>
        <StyledDishDescription>{description}</StyledDishDescription>
        <StyledDishPriceWrapper>
          <StyledDishPrice>AED {dishPrice}</StyledDishPrice>
          {Boolean(discount_rate) && (
            <StyledDishOldPrice>AED {price}</StyledDishOldPrice>
          )}
        </StyledDishPriceWrapper>
      </div>
      {Boolean(photo) && <StyledDishImage src={photo as string} alt={name} />}
    </StyledDishItemWrapper>
  );
};
