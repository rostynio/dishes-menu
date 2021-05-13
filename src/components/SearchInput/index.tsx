import { search } from "../../assets/images";
import { StyledSearchWrapper, StyledSearchInput } from "./styled";
import { ISearchInput } from "./types";

export const SearchInput = ({ value, onTextChange }: ISearchInput) => (
  <StyledSearchWrapper>
    {search()}
    <StyledSearchInput
      placeholder="Search for dishes..."
      value={value}
      onChange={(e) => onTextChange(e.target.value)}
    />
  </StyledSearchWrapper>
);
