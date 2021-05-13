import { ILoader } from "./types";
import { LoaderWrapper, RotatedBlock } from "./styled";
import { spinner } from "../../assets/images";

export const Loader = ({ isLoading, children }: ILoader): JSX.Element => {
  if (!isLoading) return <>{children}</>;

  return (
    <LoaderWrapper>
      <RotatedBlock>{spinner(30, 30)}</RotatedBlock>
    </LoaderWrapper>
  );
};
