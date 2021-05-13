import styled from "styled-components";

export const RotatedBlock = styled.span`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  & > * {
    animation: rotation 1s infinite linear;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  margin-top: 100px;
`;
