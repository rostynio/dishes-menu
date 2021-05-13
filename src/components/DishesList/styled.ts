import styled from "styled-components";
import {
  BLUE_RIBBON,
  AQUA_HAZE,
  DOWN_RIVER,
  REGENT_GRAY,
} from "../../constants";

const StyledDishesWrapper = styled.div``;

const StyledDishesList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
`;

const StyledDishWrapper = styled.li`
  cursor: pointer;
  position: relative;
  padding: 21px 0;
  &:after {
    content: "";
    position: absolute;
    border-bottom: 1px solid ${AQUA_HAZE};
    left: 21px;
    right: 21px;
    bottom: 0;
  }
  &:first-of-type {
    padding-top: 0;
  }
  &:last-of-type:after {
    display: none;
  }
`;

const StyledDishItemWrapper = styled.div`
  ${({ amount }: { amount: number | undefined }) =>
    amount && `border-left: 7px solid ${BLUE_RIBBON};`}
  padding-right: 21px;
  padding-left: ${({ amount }: { amount: number | undefined }) =>
    amount ? "14px" : "21px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDishName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${DOWN_RIVER};
  margin-top: 0;
`;

const StyledDishDescription = styled.p`
  color: ${REGENT_GRAY};
  font-size: 14px;
`;

const StyledDishPriceWrapper = styled.div`
  display: flex;
`;

const StyledDishPrice = styled(StyledDishName)`
  margin: 0 14px 0 0;
`;

const StyledDishOldPrice = styled(StyledDishName)`
  font-weight: 400;
  text-decoration: line-through;
  color: ${REGENT_GRAY};
  margin: 0;
`;

const StyledDishImage = styled.img`
  height: 91px;
  width: 91px;
  border-radius: 7px;
  margin-left: 10px;
`;

export {
  StyledDishesWrapper,
  StyledDishesList,
  StyledDishWrapper,
  StyledDishItemWrapper,
  StyledDishName,
  StyledDishDescription,
  StyledDishPriceWrapper,
  StyledDishPrice,
  StyledDishOldPrice,
  StyledDishImage,
};
