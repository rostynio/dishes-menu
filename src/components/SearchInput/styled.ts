import styled from "styled-components";
import { AQUA_HAZE } from "../../constants";

const StyledSearchWrapper = styled.div`
  height: 49px;
  border: 2px solid ${AQUA_HAZE};
  border-radius: 7px;
  display: flex;
  align-items: center;
  margin: 0 20px;
  svg {
    margin-left: 20px;
  }
`;

const StyledSearchInput = styled.input`
  border: none;
  padding: 0;
  font-size: 14px;
  margin-left: 10px;
  width: 300px;
  outline: none;
`;

export { StyledSearchWrapper, StyledSearchInput };
