import { css } from "styled-components";

export const FlexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const navBarSVG = css`
  width: 21px;
  height: 23px;
  fill: ${({ theme }) => theme.sharedColors.icon};
  &:hover {
    fill: ${({ theme }) => theme.sharedColors.iconActive};
  }
`;
