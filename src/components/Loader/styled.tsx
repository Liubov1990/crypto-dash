import styled, { keyframes } from "styled-components";
import { FlexCenter } from "../../styles/Common";

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

export const Wrap = styled.div<WrapProps>`
  ${FlexCenter}
  background-color: transparent;
  perspective: 1000px;
  height: ${({ height }) => height || "100vh"};
  width: 100%;
`;

export const LoaderSVG = styled.svg`
  animation: ${rotate} 1.5s linear infinite;
  background: transparent;
  width: 40px;
  height: 40px;
`;
