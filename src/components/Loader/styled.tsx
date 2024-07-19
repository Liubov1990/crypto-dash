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

export const Wrap = styled.div`
  ${FlexCenter}
  background-color: transparent;
  perspective: 1000px;
  height: 100vh;
`;

export const LoaderSVG = styled.svg`
  animation: ${rotate} 1.5s linear infinite;
  background: transparent;
  width: 40px;
  height: 40px;
`;
