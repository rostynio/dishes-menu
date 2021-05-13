import { FC } from "react";
import { StyledTitle } from "./styled";
import { ITitle } from "./types";

export const Title: FC<ITitle> = ({ text }: { text: string }) => (
  <StyledTitle>{text}</StyledTitle>
);
