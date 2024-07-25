import styled, { keyframes } from "styled-components";
import { Wrap } from "../../styles/Common";

const rotate = keyframes`
  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
`;

interface WrapProps {
  height?: string;
}

export const LoaderWrap = styled.div<WrapProps>`
  ${Wrap};
  perspective: 1000px;
  height: ${({ height }) => height || "100vh"};
`;

export const LoaderSVG = styled.svg`
  animation: ${rotate} 1.5s linear infinite;
  background: transparent;
  width: 40px;
  height: 40px;
`;
